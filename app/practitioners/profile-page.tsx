import { type Practitioner, practiceAwardCopy, squareBookingUrl } from "../staff-content";

// GitHub Pages builds set this flag; local previews and the existing hosted
// preview stay rooted at /. Keeping this explicit avoids broken nested-route
// images on either host.
const profileBase =
  process.env.GITHUB_PAGES === "true"
    ? "/santa-rosa-medical-massage-review"
    : "";

export default function PractitionerProfile({
  practitioner,
}: {
  practitioner: Practitioner;
}) {
  return (
    <main className="staff-profile-page">
      <header className="staff-profile-nav">
        <a href={`${profileBase}/`} className="staff-profile-brand" aria-label="Santa Rosa Medical Massage home">
          <img src={`${profileBase}/logo-correct.png`} alt="Santa Rosa Medical Massage" />
        </a>
        <a className="staff-profile-book" href={squareBookingUrl}>
          Schedule now <span aria-hidden="true">↗</span>
        </a>
      </header>
      <article className="staff-profile-content">
        <a className="staff-profile-back" href={`${profileBase}/#n-content`}>
          ← Back to Santa Rosa Medical Massage
        </a>
        <div className="staff-profile-intro">
          <div>
            <p className="staff-profile-kicker">Meet the practice</p>
            <h1>{practitioner.name}</h1>
            <p className="staff-profile-credentials">{practitioner.credentials}</p>
            <h2>{practitioner.question}</h2>
            <p className="staff-profile-answer">{practitioner.shortAnswer}</p>
          </div>
          <img
            className="staff-profile-image"
            src={`${profileBase}/site-photo-intake/${practitioner.teamPhoto}`}
            alt={`${practitioner.name}, Santa Rosa Medical Massage practitioner`}
          />
        </div>
        <section className="staff-profile-copy">
          <div>
            <h2>About {practitioner.name}</h2>
            <p>{practitioner.bio}</p>
          </div>
          <aside>
            <p className="staff-profile-kicker">Choosing care</p>
            <h2>Why this may be a good option</h2>
            <p>{practitioner.fit}</p>
            <a className="staff-profile-book" href={squareBookingUrl}>
              Schedule an appointment <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </section>
        <section className="staff-profile-award">
          <p className="staff-profile-kicker">Award-recognized care</p>
          <p>{practiceAwardCopy}</p>
        </section>
      </article>
      <footer className="staff-profile-footer">
        <img src={`${profileBase}/logo-correct.png`} alt="Santa Rosa Medical Massage" />
        <span>630 Third Street, Suite B, Santa Rosa, CA 95404</span>
      </footer>
    </main>
  );
}
