import Link from "next/link";
import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "DigX | Enterprise Digital Transformation Consultancy for FTSE 100",
  description: "Enterprise digital transformation consultancy. Strategic leadership and technical expertise for complex change, modernization, and managed services.",
};

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main-content" className="home-main">
        <section className="hero hero--banner" aria-label="DigX hero section">
          <div className="hero__overlay" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="hero-eyebrow">Enterprise delivery consultancy</p>
              <h1 className="hero-title">Digital transformation leadership for organizations that cannot afford delivery drift.</h1>
              <p className="hero-subtitle">
                DigX partners with executive and programme leadership teams to stabilize delivery, modernize
                platforms, and improve operational resilience without losing governance control.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/contact">Book a strategy call</Link>
                <Link className="btn btn-secondary" href="/case-studies">See relevant case studies</Link>
              </div>
              <div className="hero-jumps" aria-label="Homepage quick navigation">
                <Link href="#overview">At-a-glance overview</Link>
                <Link href="#how-we-work">How we work</Link>
                <Link href="#contact">Talk to DigX</Link>
              </div>
              <ul className="hero-proof" aria-label="DigX credibility highlights">
                <li>40% lower integration complexity</li>
                <li>25% faster release cadence</li>
                <li>Tier-1 financial services experience</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section home-overview" id="overview">
          <div className="container">
            <header className="section-header">
              <p className="section-eyebrow">Enterprise transformation partner</p>
              <h2>The homepage essentials decision-makers actually need</h2>
              <p>Clear position, delivery proof, service pathways, and expected outcomes in one coherent view.</p>
            </header>

            <div className="home-overview__top">
              <article className="home-overview__intro">
                <h3 className="home-overview__title">Why leadership teams engage DigX</h3>
                <p className="home-overview__body">We align programme direction, governance, and technical execution so enterprise change moves with control, not chaos.</p>
                <ul className="trust-pillars trust-pillars--stack" aria-label="Core trust signals">
                  <li>FTSE 100 and enterprise programme delivery</li>
                  <li>Embedded multi-vendor coordination model</li>
                  <li>Cloud, integration, and managed operations expertise</li>
                  <li>Long-term partnership beyond go-live</li>
                </ul>
              </article>

              <aside className="hero-proof-panel delivery-proof-panel" aria-label="Delivery proof">
                <h3 className="hero-proof-panel__title">Delivery proof</h3>
                <div className="hero-proof-metrics">
                  <article className="hero-proof-metric">
                    <p className="hero-proof-metric__value">40%</p>
                    <p className="hero-proof-metric__label">Lower integration complexity</p>
                  </article>
                  <article className="hero-proof-metric">
                    <p className="hero-proof-metric__value">25%</p>
                    <p className="hero-proof-metric__label">Improved release cadence</p>
                  </article>
                  <article className="hero-proof-metric">
                    <p className="hero-proof-metric__value">99.9%</p>
                    <p className="hero-proof-metric__label">Platform reliability in managed estates</p>
                  </article>
                </div>
                <p className="hero-proof-panel__caption">Representative enterprise contexts</p>
                <ul className="hero-logo-row" aria-label="Representative client contexts">
                  <li>Phoenix Group</li>
                  <li>Aviva</li>
                  <li>Standard Life</li>
                </ul>
              </aside>
            </div>

            <div className="home-overview__services" id="service-selector">
              <article className="card">
                <p className="card-kicker">Priority 01</p>
                <h3 className="card-title">Regain programme control across complex transformation</h3>
                <p className="card-body">Use Enterprise Digital Change when your board needs clear plans, tighter governance, and measurable progress.</p>
                <Link className="card-link" href="/enterprise-digital-change">Explore Enterprise Digital Change →</Link>
              </article>

              <article className="card">
                <p className="card-kicker">Priority 02</p>
                <h3 className="card-title">Improve reliability and confidence in live operations</h3>
                <p className="card-body">Use Managed Services when stability, service performance, and release assurance require disciplined operation.</p>
                <Link className="card-link" href="/managed-services">Explore Managed Services →</Link>
              </article>

              <article className="card">
                <p className="card-kicker">Priority 03</p>
                <h3 className="card-title">Accelerate integration and engineering throughput</h3>
                <p className="card-body">Use Technical and Integration Services when architecture complexity and dependency overhead are slowing delivery.</p>
                <Link className="card-link" href="/technical-integration-services">Explore Technical &amp; Integration Services →</Link>
              </article>
            </div>

            <div className="home-overview__outcomes" id="outcomes" aria-label="Representative outcomes">
              <article className="home-outcome">
                <p className="card-kicker">Financial services modernization</p>
                <h3>Integration simplification across multi-vendor estates</h3>
                <p>Standardized architecture patterns and delivery controls reduced handoff friction across teams and suppliers.</p>
              </article>
              <article className="home-outcome">
                <p className="card-kicker">Release reliability</p>
                <h3>Cadence uplift through release and environment control</h3>
                <p>Governance gates, delivery telemetry, and stronger service coordination improved release predictability.</p>
              </article>
              <article className="home-outcome">
                <p className="card-kicker">Operational resilience</p>
                <h3>Higher platform reliability in managed estates</h3>
                <p>Observability, operational playbooks, and disciplined support models improved stability under production pressure.</p>
              </article>
            </div>

            <div className="hero-actions home-overview__actions" aria-label="Overview actions">
              <Link className="btn btn-secondary" href="/case-studies">Review case studies</Link>
              <Link className="btn btn-primary" href="/contact">Discuss your programme</Link>
            </div>
          </div>
        </section>

        <section className="section bg-muted" id="how-we-work">
          <div className="container">
            <div className="split-grid home-work-grid">
              <div className="home-work-main">
                <header className="section-header section-header--left">
                  <p className="section-eyebrow">How we work</p>
                  <h2>A practical operating model for enterprise transformation</h2>
                  <p>We run delivery as a partnership model that gives leadership clear control and delivery teams a predictable execution cadence.</p>
                </header>

                <div className="timeline">
                  <div className="timeline-step">
                    <div className="timeline-step__number">1</div>
                    <div>
                      <h3 className="timeline-step__title">Frame</h3>
                      <p className="timeline-step__body">We define the decision frame, constraints, and measurable outcomes with your leadership team.</p>
                    </div>
                  </div>

                  <div className="timeline-step">
                    <div className="timeline-step__number">2</div>
                    <div>
                      <h3 className="timeline-step__title">Mobilize</h3>
                      <p className="timeline-step__body">We establish ownership, governance, and delivery rhythms that can scale across streams.</p>
                    </div>
                  </div>

                  <div className="timeline-step">
                    <div className="timeline-step__number">3</div>
                    <div>
                      <h3 className="timeline-step__title">Scale</h3>
                      <p className="timeline-step__body">We convert initial wins into repeatable operating patterns across delivery and operations.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="home-work-aside">
                <article className="card">
                  <p className="card-kicker">Enterprise working model</p>
                  <h3 className="card-title">Designed for regulated and audit-sensitive delivery</h3>
                  <ul className="about-list-clean" aria-label="DigX engagement strengths">
                    <li>Joint governance across business, technology, and delivery leadership</li>
                    <li>Multi-vendor alignment with clear accountability and escalation paths</li>
                    <li>Operational and release discipline integrated from day one</li>
                    <li>Capability transfer that leaves internal teams stronger over time</li>
                  </ul>
                </article>

                <article className="card">
                  <p className="card-kicker">First 30 days</p>
                  <h3 className="card-title">What structured momentum looks like</h3>
                  <ul className="about-list-clean" aria-label="First month outcomes">
                    <li>Shared delivery baseline and risk framing across teams</li>
                    <li>Clear ownership model with escalation paths that work</li>
                    <li>Prioritized plan tied to business outcomes and constraints</li>
                    <li>Visible progress cadence for programme leadership</li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <header className="section-header">
              <p className="section-eyebrow">Decision point</p>
              <h2>Share your current delivery challenge and we will map the right route.</h2>
              <p>Tell us the objective, pressure points, and timeline. We will respond with a focused recommendation and next-step options.</p>
            </header>

            <form className="contact-form">
              <div className="form-grid">
                <label className="form-field">
                  <span className="form-label">Name</span>
                  <input className="input" type="text" name="name" required />
                </label>

                <label className="form-field">
                  <span className="form-label">Email</span>
                  <input className="input" type="email" name="email" required />
                </label>

                <label className="form-field form-field--full">
                  <span className="form-label">Company / Team</span>
                  <input className="input" type="text" name="company" />
                </label>

                <label className="form-field form-field--full">
                  <span className="form-label">How can we help?</span>
                  <textarea className="input" name="message" rows={5} required />
                </label>

                <button className="btn btn-primary" type="submit">Send brief</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
