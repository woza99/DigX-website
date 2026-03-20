import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

type LeadershipRole = {
  role: "CEO" | "COO" | "CTO" | "CCO";
  placeholderName: string;
  placeholderBio: string;
};

const leadershipRoles: LeadershipRole[] = [
  {
    role: "CEO",
    placeholderName: "Add CEO name",
    placeholderBio: "Add a short CEO profile covering leadership background, transformation focus, and current priorities.",
  },
  {
    role: "COO",
    placeholderName: "Add COO name",
    placeholderBio: "Add a short COO profile with strengths in operations, delivery governance, and execution quality.",
  },
  {
    role: "CTO",
    placeholderName: "Add CTO name",
    placeholderBio: "Add a short CTO profile describing architecture leadership, platform strategy, and technology direction.",
  },
  {
    role: "CCO",
    placeholderName: "Add CCO name",
    placeholderBio: "Add a short CCO profile highlighting client leadership, commercial strategy, and partnership growth.",
  },
];

export const metadata: Metadata = {
  title: "Meet Our People | DigX Leadership Team",
  description: "Meet the DigX leadership team. Add leadership profiles for CEO, COO, CTO, and CCO.",
};

export default function MeetOurPeoplePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="section page-hero-section" aria-label="Meet Our People hero">
          <div className="container page-hero-grid">
            <div className="page-hero-copy">
              <p className="page-kicker">About DigX</p>
              <h1 className="page-headline">Meet our people</h1>
              <p className="page-subtitle">
                This page is ready for leadership profiles. Add details for each executive role to introduce the
                team behind DigX delivery.
              </p>
            </div>

            <aside className="page-glance" aria-label="Leadership page guide">
              <h2 className="page-glance__title">Profile structure</h2>
              <dl className="page-stats">
                <div className="page-stat"><dt>Roles</dt><dd>4 executive profiles</dd></div>
                <div className="page-stat"><dt>Required roles</dt><dd>CEO, COO, CTO, CCO</dd></div>
                <div className="page-stat"><dt>Use</dt><dd>Public leadership introduction</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="section" id="leadership-profiles">
          <div className="container">
            <header className="section-header">
              <h2>Leadership profiles</h2>
              <p>Replace placeholders with executive names, profile copy, and optional contact details.</p>
            </header>

            <div className="people-grid" aria-label="Leadership profile cards">
              {leadershipRoles.map((person) => (
                <article className="card people-card" key={person.role}>
                  <p className="card-kicker">{person.role}</p>
                  <h3 className="card-title">{person.placeholderName}</h3>
                  <p className="card-body">{person.placeholderBio}</p>

                  <div className="people-fields" aria-label={`${person.role} profile fields`}>
                    <label className="form-field">
                      <span className="form-label">Name</span>
                      <input className="input" type="text" name={`${person.role.toLowerCase()}-name`} placeholder={`${person.role} full name`} />
                    </label>
                    <label className="form-field">
                      <span className="form-label">Title line</span>
                      <input className="input" type="text" name={`${person.role.toLowerCase()}-title`} placeholder={`Example: ${person.role}, DigX`} />
                    </label>
                    <label className="form-field form-field--full">
                      <span className="form-label">Profile summary</span>
                      <textarea
                        className="input"
                        rows={4}
                        name={`${person.role.toLowerCase()}-summary`}
                        placeholder={`Add a concise professional profile for the ${person.role}.`}
                      />
                    </label>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
