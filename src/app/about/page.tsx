import Link from "next/link";
import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "About DigX | Enterprise Transformation Partner",
  description: "Learn about DigX - a UK-based digital transformation consultancy trusted by FTSE 100 and regulated sector enterprises since 2012.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="section about-hero-section">
          <div className="container about-hero-grid">
            <div className="about-hero-copy">
              <p className="about-kicker">About DigX</p>
              <h1 className="about-headline">A delivery partner for complex enterprise transformation.</h1>
              <p className="about-subtitle">
                We combine strategic clarity, programme control, and engineering depth to help enterprise teams
                modernize critical platforms without compromising governance or operational continuity.
              </p>

              <div className="about-quicklinks" aria-label="Jump to section">
                <a className="btn btn-secondary" href="#our-story">Our story</a>
                <a className="btn btn-secondary" href="#operating-model">Operating model</a>
                <Link className="btn btn-primary" href="/contact">Talk to our team</Link>
              </div>
            </div>

            <aside className="about-glance" aria-label="DigX at a glance">
              <h2 className="about-glance__title">At a glance</h2>
              <dl className="about-stats">
                <div className="about-stat"><dt>Founded</dt><dd>2012</dd></div>
                <div className="about-stat"><dt>Core focus</dt><dd>Enterprise digital change</dd></div>
                <div className="about-stat"><dt>Sector strength</dt><dd>Regulated organizations</dd></div>
                <div className="about-stat"><dt>Delivery model</dt><dd>Embedded partnership teams</dd></div>
              </dl>
              <div className="about-glance-callout">
                <p className="about-glance-callout__eyebrow">Positioning</p>
                <p className="about-glance-callout__text">
                  We are most effective where strategic ambition and delivery complexity both run high.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="our-story">
          <div className="container">
            <div className="about-story-shell">
              <div className="about-story-intro">
                <p className="about-section-label">Our story</p>
                <h2>Built for enterprise complexity, designed for practical outcomes.</h2>
                <p>
                  Since 2012, DigX has supported high-visibility transformation programmes in partnership with
                  enterprise clients and major consulting organizations.
                </p>
              </div>

              <div className="about-story-grid">
                <article className="card about-highlight-card">
                  <h3 className="card-title">Outcome-first delivery</h3>
                  <p className="card-body">Each engagement is anchored to measurable programme and business outcomes.</p>
                </article>
                <article className="card about-highlight-card">
                  <h3 className="card-title">Embedded collaboration</h3>
                  <p className="card-body">We work inside your operating structure so decisions and escalations move faster.</p>
                </article>
                <article className="card about-highlight-card">
                  <h3 className="card-title">Engineering discipline</h3>
                  <p className="card-body">Automation, standards, and operational rigor keep delivery quality sustainable.</p>
                </article>
                <article className="card about-highlight-card">
                  <h3 className="card-title">Long-term partnership</h3>
                  <p className="card-body">We support optimization and capability transfer beyond implementation milestones.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="operating-principles">
          <div className="container">
            <header className="section-header">
              <h2>Operating principles</h2>
              <p>How we protect control while maintaining delivery speed in complex programmes.</p>
            </header>

            <div className="grid grid--2">
              <article className="card">
                <h3 className="card-title">Governance with momentum</h3>
                <p className="card-body">Decision forums, controls, and escalation paths are designed to increase pace, not slow it down.</p>
              </article>
              <article className="card">
                <h3 className="card-title">Transparent delivery visibility</h3>
                <p className="card-body">Leaders get clear progress, risk, and dependency insight through structured reporting and cadence.</p>
              </article>
              <article className="card">
                <h3 className="card-title">Cross-team execution discipline</h3>
                <p className="card-body">Architecture, engineering, and operations remain aligned through shared standards and ownership.</p>
              </article>
              <article className="card">
                <h3 className="card-title">Sustainable internal capability</h3>
                <p className="card-body">We build internal confidence through practical handover, coaching, and embedded ways of working.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section bg-muted" id="proof-points">
          <div className="container">
            <header className="section-header">
              <h2>Proof points</h2>
              <p>Representative outcomes that show the business impact we deliver.</p>
            </header>
            <div className="impact-grid">
              <article className="card impact-card"><p className="impact-number">40%</p><h3 className="card-title">Lower integration complexity</h3><p className="card-body">Achieved through stronger architecture patterns and controlled execution.</p></article>
              <article className="card impact-card"><p className="impact-number">25%</p><h3 className="card-title">Improved release cadence</h3><p className="card-body">Delivered via release governance, automation, and environment stability.</p></article>
              <article className="card impact-card"><p className="impact-number">99.9%</p><h3 className="card-title">Managed platform reliability</h3><p className="card-body">Sustained through operational discipline and proactive service management.</p></article>
            </div>
          </div>
        </section>

        <section className="section" id="operating-model">
          <div className="container">
            <header className="section-header">
              <h2>Operating model</h2>
              <p>A structured model that aligns strategy, execution, and service continuity.</p>
            </header>
            <div className="timeline">
              <div className="timeline-step"><div className="timeline-step__number">1</div><div><h3 className="timeline-step__title">Diagnose and align</h3><p className="timeline-step__body">Establish objectives, constraints, dependencies, and governance expectations with leadership teams.</p></div></div>
              <div className="timeline-step"><div className="timeline-step__number">2</div><div><h3 className="timeline-step__title">Execute with control</h3><p className="timeline-step__body">Drive coordinated delivery across product, engineering, and operations with clear accountability.</p></div></div>
              <div className="timeline-step"><div className="timeline-step__number">3</div><div><h3 className="timeline-step__title">Embed and scale</h3><p className="timeline-step__body">Stabilize operations, transfer capability, and extend improvements across the wider estate.</p></div></div>
            </div>
          </div>
        </section>

        <section className="section" id="partnership-commitment">
          <div className="container">
            <div className="grid grid--2">
              <article className="card">
                <p className="card-kicker">Partnership commitment</p>
                <h2 className="card-title">We are accountable for outcomes, not activity.</h2>
                <p className="card-body">
                  DigX is structured to provide strategic leadership and practical delivery support in programmes where
                  risk, pace, and stakeholder visibility are all high.
                </p>
                <Link className="card-link" href="/contact">Start a conversation with DigX →</Link>
              </article>
              <article className="card">
                <p className="card-kicker">Best-fit engagements</p>
                <ul className="about-list-clean" aria-label="Best-fit DigX engagement contexts">
                  <li>Enterprise programmes with multiple delivery partners and dependencies</li>
                  <li>Modernization work requiring stronger release and operational control</li>
                  <li>Critical service environments where continuity cannot be compromised</li>
                  <li>Transformation portfolios that need sustained capability uplift</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
