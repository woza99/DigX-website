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
                <Link href="#service-selector">Priority pathways</Link>
                <Link href="#outcomes">Representative outcomes</Link>
                <Link href="#approach">Delivery approach</Link>
              </div>
              <ul className="hero-proof" aria-label="DigX credibility highlights">
                <li>40% lower integration complexity</li>
                <li>25% faster release cadence</li>
                <li>Tier-1 financial services experience</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--compact trusted-strip" id="trusted-by">
          <div className="container">
            <div className="split-grid home-split home-split--trust">
              <div className="home-split__intro">
                <header className="section-header section-header--left">
                  <p className="section-eyebrow">Why leaders engage DigX</p>
                  <h2>Trusted in regulated, high-stakes delivery</h2>
                  <p>We support enterprise programmes where pace, governance, and technical complexity need to move in lockstep.</p>
                </header>
                <p className="section-callout home-split__callout">The best outcomes happen when leadership decisions and delivery controls are aligned from the first sprint.</p>
              </div>
              <div className="home-split__content">
                <ul className="trust-pillars trust-pillars--stack" aria-label="Core trust signals">
                  <li>FTSE 100 and enterprise programme delivery</li>
                  <li>Embedded multi-vendor coordination model</li>
                  <li>Cloud, integration, and managed operations expertise</li>
                  <li>Long-term partnership beyond go-live</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--compact delivery-proof-section" aria-label="Delivery proof highlights">
          <div className="container">
            <aside className="hero-proof-panel delivery-proof-panel" aria-label="Delivery proof">
              <h2 className="hero-proof-panel__title">Delivery proof</h2>
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
        </section>

        <section className="section section--band" id="service-selector">
          <div className="container">
            <header className="section-header">
              <p className="section-eyebrow">Choose your starting lane</p>
              <h2>Start with your immediate leadership priority</h2>
              <p>A top-tier programme usually starts by choosing the right operating lane before adding more scope.</p>
            </header>

            <div className="grid grid--3">
              <article className="card">
                <p className="card-kicker">Priority 01</p>
                <h3 className="card-title">Regain programme control across complex transformation</h3>
                <p className="card-body">Use Enterprise Digital Change when your board needs a clear plan, tighter governance, and measurable progress across workstreams.</p>
                <Link className="card-link" href="/enterprise-digital-change">Explore Enterprise Digital Change →</Link>
              </article>

              <article className="card">
                <p className="card-kicker">Priority 02</p>
                <h3 className="card-title">Improve reliability and confidence in live operations</h3>
                <p className="card-body">Use Managed Services when production stability, SLA performance, and release assurance need sustained operational discipline.</p>
                <Link className="card-link" href="/managed-services">Explore Managed Services →</Link>
              </article>

              <article className="card">
                <p className="card-kicker">Priority 03</p>
                <h3 className="card-title">Accelerate integration and engineering throughput</h3>
                <p className="card-body">Use Technical and Integration Services when architecture complexity and multi-system dependency are slowing delivery speed.</p>
                <Link className="card-link" href="/technical-integration-services">Explore Technical &amp; Integration Services →</Link>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="engagement-model">
          <div className="container">
            <div className="split-grid">
              <div>
                <header className="section-header section-header--left">
                  <p className="section-eyebrow">Operating model</p>
                  <h2>How we engage with your teams</h2>
                  <p>
                    DigX works as an embedded partner model that aligns leadership direction, governance discipline,
                    and delivery execution across internal teams and third-party suppliers.
                  </p>
                </header>
                <div className="hero-actions" aria-label="Engagement links">
                  <Link className="btn btn-secondary" href="/about">See our operating model</Link>
                  <Link className="btn btn-primary" href="/collaborative-project-delivery">View collaboration services</Link>
                </div>
              </div>

              <article className="card">
                <p className="card-kicker">Enterprise working model</p>
                <h3 className="card-title">Built for regulated and audit-sensitive delivery environments</h3>
                <ul className="about-list-clean" aria-label="DigX engagement strengths">
                  <li>Joint governance across business, technology, and delivery leadership</li>
                  <li>Multi-vendor alignment with clear accountability and escalation paths</li>
                  <li>Operational and release discipline integrated from the start</li>
                  <li>Capability transfer that leaves your teams stronger over time</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--band" id="outcomes">
          <div className="container">
            <div className="split-grid home-split home-split--outcomes">
              <div className="home-split__intro">
                <header className="section-header section-header--left">
                  <p className="section-eyebrow">Proof of impact</p>
                  <h2>Representative outcomes from enterprise programmes</h2>
                  <p>Examples where delivery confidence, release rhythm, and platform stability improved together.</p>
                </header>
                <div className="hero-actions" aria-label="Outcomes links">
                  <Link className="btn btn-secondary" href="/case-studies">Review case studies</Link>
                  <Link className="btn btn-primary" href="/contact">Discuss your programme</Link>
                </div>
              </div>

              <div className="home-split__content">
                <div className="grid grid--2 outcomes-grid">
                  <article className="card">
                    <p className="card-kicker">Financial services modernization</p>
                    <h3 className="card-title">Integration simplification across multi-vendor estates</h3>
                    <p className="card-body">Standardized architecture patterns and delivery controls reduced handoff friction across teams and suppliers.</p>
                    <Link className="card-link" href="/case-studies">View the case context →</Link>
                  </article>

                  <article className="card">
                    <p className="card-kicker">Release reliability</p>
                    <h3 className="card-title">Cadence uplift through release and environment control</h3>
                    <p className="card-body">Introduced governance gates, delivery telemetry, and stronger service coordination to improve release predictability.</p>
                    <Link className="card-link" href="/case-studies">See outcome metrics →</Link>
                  </article>

                  <article className="card outcomes-grid__feature">
                    <p className="card-kicker">Operational resilience</p>
                    <h3 className="card-title">Higher platform reliability in managed estates</h3>
                    <p className="card-body">Embedded observability, operational playbooks, and disciplined support models improved stability under production pressure.</p>
                    <Link className="card-link" href="/managed-services">Explore the managed model →</Link>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-muted" id="approach">
          <div className="container">
            <div className="split-grid home-split home-split--approach">
              <div className="home-split__content">
                <header className="section-header section-header--left">
                  <p className="section-eyebrow">Delivery blueprint</p>
                  <h2>A wireframe-grade delivery approach for enterprise change</h2>
                  <p>We follow a simple, disciplined progression so executives have clarity and delivery teams have momentum.</p>
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

              <article className="card home-split__aside">
                <p className="card-kicker">First 30 days</p>
                <h3 className="card-title">What structured early momentum looks like</h3>
                <ul className="about-list-clean" aria-label="First month outcomes">
                  <li>Shared delivery baseline and risk framing across teams</li>
                  <li>Clear ownership model with escalation paths that work</li>
                  <li>Prioritized plan tied to business outcomes and constraints</li>
                  <li>Visible progress cadence for programme leadership</li>
                </ul>
              </article>
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
