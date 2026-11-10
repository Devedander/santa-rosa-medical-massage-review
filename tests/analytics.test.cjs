const assert = require("node:assert/strict");
const { test } = require("node:test");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

function loadSource(relativePath, globals = {}, imports = {}) {
  const filename = path.resolve(__dirname, "..", relativePath);
  const code = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  const module = { exports: {} };
  vm.runInNewContext(code, {
    module, exports: module.exports,
    require: (id) => imports[id] || require(id), ...globals,
  }, { filename });
  return module.exports;
}

function analyticsFixture(hostname) {
  const scripts = [];
  const window = { location: { hostname } };
  const analytics = loadSource("app/analytics.ts", {
    window,
    document: { createElement: () => ({}), head: { appendChild: (script) => scripts.push(script) } },
  });
  return { analytics, window, scripts };
}

test("production host allowlist excludes previews, localhost and misleading domains", () => {
  const { analytics } = analyticsFixture("localhost");
  for (const host of ["santarosamedicalmassage.com", "www.santarosamedicalmassage.com"])
    assert.equal(analytics.isProductionHostname(host), true);
  for (const host of ["localhost", "127.0.0.1", "review.pages.dev", "santarosamedicalmassage.com.example.org"])
    assert.equal(analytics.isProductionHostname(host), false);
});

test("preview visits and booking clicks neither initialize GA nor queue production events", () => {
  const { analytics, window, scripts } = analyticsFixture("localhost");
  analytics.initializeAnalytics();
  analytics.trackBookingClick("treatments_page");
  assert.equal(scripts.length, 0);
  assert.equal(window.dataLayer, undefined);
});

test("a click before the mount effect queues once and repeated initialization adds no duplicate tag/pageview", () => {
  const { analytics, window, scripts } = analyticsFixture("santarosamedicalmassage.com");
  analytics.trackBookingClick("practitioner_content");
  analytics.initializeAnalytics();
  analytics.initializeAnalytics();
  assert.equal(scripts.length, 1);
  assert.equal(scripts[0].src, "https://www.googletagmanager.com/gtag/js?id=G-ETEHP7SZNF");
  assert.equal(window.dataLayer.filter(([command]) => command === "config").length, 1);
  const events = window.dataLayer.filter(([command]) => command === "event");
  assert.equal(events.length, 1);
  assert.equal(events[0][1], "generate_lead");
  assert.deepEqual(JSON.parse(JSON.stringify(events[0][2])), {
    method: "square_booking", placement: "practitioner_content", transport_type: "beacon",
  });
});

test("SSR initialization is safe without window or document", () => {
  const analytics = loadSource("app/analytics.ts");
  assert.doesNotThrow(() => analytics.initializeAnalytics());
  assert.doesNotThrow(() => analytics.trackBookingClick("navigation"));
});

test("shared booking link preserves destination and attributes, and emits one event per click", () => {
  const calls = [];
  const { default: BookingLink } = loadSource("app/booking-link.tsx", {}, {
    "./analytics": { trackBookingClick: (...args) => calls.push(args) },
  });
  const link = BookingLink({ href: "https://book.squareup.com/appointments/example", placement: "navigation", "aria-label": "Schedule", children: "Book" });
  assert.equal(link.type, "a");
  assert.equal(link.props.href, "https://book.squareup.com/appointments/example");
  assert.equal(link.props["aria-label"], "Schedule");
  assert.equal(link.props.placement, undefined);
  link.props.onClick({ defaultPrevented: false });
  assert.deepEqual(calls, [["navigation"]]);
});

test("cancelled navigation is not counted and analytics failure does not cancel native navigation", () => {
  let count = 0;
  const { default: BookingLink } = loadSource("app/booking-link.tsx", {}, {
    "./analytics": { trackBookingClick: () => { count++; throw new Error("blocked analytics"); } },
  });
  const link = BookingLink({ href: "https://book.squareup.com/appointments/example", placement: "content" });
  link.props.onClick({ defaultPrevented: true });
  assert.equal(count, 0);
  const event = { defaultPrevented: false };
  assert.doesNotThrow(() => link.props.onClick(event));
  assert.equal(count, 1);
  assert.equal(event.defaultPrevented, false);
});
