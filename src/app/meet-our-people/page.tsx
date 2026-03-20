import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

type LeadershipRole = {
  role: "CEO" | "COO" | "CTO" | "CCO";
  name: string;
  title: string;
  bio: string;
  initials: string;
  focusAreas: string[];
};

const leadershipRoles: LeadershipRole[] = [
  {
    role: "CEO",
    name: "Rob McLaren",
    title: "Chief Executive Officer",
    bio: "Rob sets the strategic direction for DigX and leads enterprise client partnerships, ensuring transformation programmes deliver measurable business outcomes.",
    initials: "RM",
    focusAreas: ["Enterprise strategy", "Client partnerships", "Business outcomes"],
  },
  {
    role: "COO",
    name: "Joel Alexander",
    title: "Chief Operating Officer",
    bio: "Joel oversees delivery operations, governance standards, and execution controls so teams can move quickly while maintaining quality and consistency.",
    initials: "JA",
    focusAreas: ["Operational excellence", "Delivery governance", "Execution quality"],
  },
  {
    role: "CTO",
    name: "Peter Neil",
    title: "Chief Technology Officer",
    bio: "Peter leads technology strategy, architecture decisions, and engineering capability development across integration, modernization, and platform reliability work.",
    initials: "PN",
    focusAreas: ["Technology strategy", "Architecture leadership", "Platform reliability"],
  },
  {
    role: "CCO",
    name: "Grant Wright",
    title: "Chief Consulting Officer",
    bio: "Grant leads consulting quality and client advisory practice, helping organizations align strategy, governance, and execution in complex change programmes.",
    initials: "GW",
    focusAreas: ["Consulting leadership", "Advisory quality", "Transformation alignment"],
  },
];

export const metadata: Metadata = {
  title: "Meet Our People | DigX Leadership Team",
  description: "Meet the DigX leadership team across CEO, COO, CTO, and CCO roles.",
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
                Meet the executive team leading DigX delivery, consulting quality, and enterprise transformation
                partnerships.
              </p>
              <p className="people-hero-note">
                A leadership team built around strategy, execution, technology, and consulting discipline.
              </p>
            </div>

            <aside className="page-glance" aria-label="Leadership page guide">
              <h2 className="page-glance__title">Profile structure</h2>
              <dl className="page-stats">
                <div className="page-stat"><dt>Roles</dt><dd>4 executive profiles</dd></div>
                <div className="page-stat"><dt>Leadership model</dt><dd>Strategy, operations, technology, consulting</dd></div>
                <div className="page-stat"><dt>Engagement style</dt><dd>Hands-on executive partnership</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="section" id="leadership-profiles">
          <div className="container">
            <header className="section-header">
              <h2>Leadership profiles</h2>
              <p>Executive leadership across the core capabilities that power DigX delivery.</p>
            </header>

            <div className="people-grid" aria-label="Leadership profile cards">
              {leadershipRoles.map((person) => (
                <article className="card people-card" key={person.role}>
                  <div className="people-card__head">
                    <div className="people-avatar" aria-hidden="true">{person.initials}</div>
                    <div>
                      <p className="card-kicker">{person.title}</p>
                      <h3 className="card-title">{person.name}</h3>
                      <p className="people-role-code">{person.role}</p>
                    </div>
                  </div>
                  <p className="card-body">{person.bio}</p>
                  <ul className="people-focus" aria-label={`${person.name} focus areas`}>
                    {person.focusAreas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
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
