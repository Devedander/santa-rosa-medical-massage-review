export const measurementId = "G-ETEHP7SZNF";

type AnalyticsWindow = Window & {
  dataLayer?: unknown[][];
  gtag?: (...args: unknown[]) => void;
  srmmAnalyticsInitialized?: boolean;
};

export function isProductionHostname(hostname: string) {
  return hostname === "santarosamedicalmassage.com" ||
    hostname === "www.santarosamedicalmassage.com";
}

export function initializeAnalytics() {
  if (typeof window === "undefined" || !isProductionHostname(window.location.hostname)) return;
  const analyticsWindow = window as AnalyticsWindow;
  if (analyticsWindow.srmmAnalyticsInitialized) return;
  analyticsWindow.srmmAnalyticsInitialized = true;
  analyticsWindow.dataLayer ??= [];
  analyticsWindow.gtag ??= (...args: unknown[]) => {
    analyticsWindow.dataLayer!.push(args);
  };
  analyticsWindow.gtag("js", new Date());
  analyticsWindow.gtag("config", measurementId);

  const script = document.createElement("script");
  script.id = "srmm-google-analytics";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}

export function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean> = {},
) {
  if (typeof window === "undefined" || !isProductionHostname(window.location.hostname)) return;
  initializeAnalytics();
  (window as AnalyticsWindow).gtag?.("event", eventName, {
    ...params,
    transport_type: "beacon",
  });
}

export type BookingPlacement = "content" | "treatment" | "booking_page" |
  "navigation" | "practitioner_navigation" | "practitioner_content" | "treatments_page";

export function trackBookingClick(placement: BookingPlacement) {
  // Preserve the live event name during the account repair. This records intent,
  // not an appointment, and deliberately omits service and personal information.
  trackEvent("generate_lead", { method: "square_booking", placement });
}
