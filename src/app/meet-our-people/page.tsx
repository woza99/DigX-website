import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

type LeadershipRole = {
  role: "CEO" | "COO" | "CTO" | "CCO";
  name: string;
  title: string;
  bio: string;
};

const leadershipRoles: LeadershipRole[] = [
  {
    role: "CEO",
    name: "Rob McLaren",
    title: "Chief Executive Officer",
    bio: "Rob sets the strategic direction for DigX and leads enterprise client partnerships, ensuring transformation programmes deliver measurable business outcomes.",
  },
  {
    role: "COO",
    name: "Joel Alexander",
    title: "Chief Operating Officer",
    bio: "Joel oversees delivery operations, governance standards, and execution controls so teams can move quickly while maintaining quality and consistency.",
  },
  {
    role: "CTO",
    name: "Peter Neil",
    title: "Chief Technology Officer",
    bio: "Peter leads technology strategy, architecture decisions, and engineering capability development across integration, modernization, and platform reliability work.",
  },
  {
    role: "CCO",
    name: "Grant Wright",
    title: "Chief Consulting Officer",
    bio: "Grant leads consulting quality and client advisory practice, helping organizations align strategy, governance, and execution in complex change programmes.",
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
              <p>Executive leadership profiles for DigX core functions.</p>
            </header>

            <div className="people-grid" aria-label="Leadership profile cards">
              {leadershipRoles.map((person) => (
                <article className="card people-card" key={person.role}>
                  <p className="card-kicker">{person.role}</p>
                  <h3 className="card-title">{person.name}</h3>
                  <p className="card-body people-title">{person.title}</p>
                  <p className="card-body">{person.bio}</p>
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
