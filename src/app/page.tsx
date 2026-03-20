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

      <main id="main-content">
        <section className="hero hero--banner" aria-label="DigX hero section">
          <div className="hero__overlay" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="hero-eyebrow">Enterprise delivery consultancy</p>
              <h1 className="hero-title">From complex transformation to measurable enterprise outcomes.</h1>
              <p className="hero-subtitle">
                DigX helps regulated and high-change organizations improve release speed, reduce delivery risk,
                and modernize critical platforms with clear governance and execution control.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/contact">Book a strategy call</Link>
                <Link className="btn btn-secondary" href="/case-studies">See relevant case studies</Link>
              </div>
              <p className="hero-micro-link"><Link href="#service-selector">Explore services by challenge</Link></p>
              <ul className="hero-proof" aria-label="DigX credibility highlights">
                <li>40% lower integration complexity</li>
                <li>25% faster release cadence</li>
                <li>Tier-1 financial services experience</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section delivery-proof-section" aria-label="Delivery proof highlights">
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
              <p className="hero-proof-panel__caption">Trusted delivery contexts</p>
              <ul className="hero-logo-row" aria-label="Representative client contexts">
                <li>Phoenix Group</li>
                <li>Aviva</li>
                <li>Standard Life</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section trusted-strip" id="trusted-by">
          <div className="container">
            <header className="section-header">
              <h2>Trusted in regulated, high-stakes delivery</h2>
              <p>We support enterprise programmes where governance, technical complexity, and pace must work together.</p>
            </header>
            <ul className="trust-pillars" aria-label="Core trust signals">
              <li>FTSE 100 and enterprise programme delivery</li>
              <li>Embedded multi-vendor coordination model</li>
              <li>Cloud, integration, and managed operations expertise</li>
              <li>Long-term partnership beyond go-live</li>
            </ul>
          </div>
        </section>

        <section className="section" id="service-selector">
          <div className="container">
            <header className="section-header">
              <h2>Choose the delivery model that matches your challenge</h2>
              <p>Start with your priority, then move directly to the right DigX service path.</p>
            </header>

            <div className="grid grid--3">
              <article className="card">
                <p className="card-kicker">Priority: Strategic transformation</p>
                <h3 className="card-title">Reshape enterprise delivery with controlled change</h3>
                <p className="card-body">Use Enterprise Digital Change when you need programme-level strategy, governance, and execution leadership.</p>
                <Link className="card-link" href="/enterprise-digital-change">Explore Enterprise Digital Change →</Link>
              </article>

              <article className="card">
                <p className="card-kicker">Priority: Platform reliability</p>
                <h3 className="card-title">Stabilize critical services while improving pace</h3>
                <p className="card-body">Use Managed Services for SLA-led support, release governance, and proactive operational control.</p>
                <Link className="card-link" href="/managed-services">Explore Managed Services →</Link>
              </article>

              <article className="card">
                <p className="card-kicker">Priority: Technical acceleration</p>
                <h3 className="card-title">Integrate, automate, and scale technical execution</h3>
                <p className="card-body">Use Technical and Integration Services for architecture, automation, CI/CD, and cloud foundations.</p>
                <Link className="card-link" href="/technical-integration-services">Explore Technical &amp; Integration Services →</Link>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="who-we-are">
          <div className="container">
            <header className="section-header">
              <h2>Who we are</h2>
              <p className="section-lead">
                DigX is a UK-based digital transformation and IT consulting partner. Founded in 2012, we
                collaborate with top-tier professional services firms and FTSE 100 clients, with deep
                strength in regulated and financial services environments.
              </p>
            </header>
            <p className="section-callout">
              We don’t work in isolation. We integrate with your teams and partners to deliver complex
              change with precision, from technical leadership through to operational support.
            </p>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <header className="section-header">
              <h2>Featured outcomes from similar programmes</h2>
              <p>Representative examples of how DigX improves delivery confidence and operational performance.</p>
            </header>

            <div className="grid grid--2">
              <article className="card">
                <p className="card-kicker">Financial services modernization</p>
                <h3 className="card-title">Integration simplification across a multi-vendor estate</h3>
                <p className="card-body">Standardized integration patterns and governance controls reduced delivery friction and improved cross-team throughput.</p>
                <Link className="card-link" href="/case-studies">View the case context →</Link>
              </article>

              <article className="card">
                <p className="card-kicker">Release reliability</p>
                <h3 className="card-title">Cadence uplift through environment and release stabilization</h3>
                <p className="card-body">Introduced release controls, automated quality gates, and tighter service coordination to improve deployment confidence.</p>
                <Link className="card-link" href="/case-studies">See outcome metrics →</Link>
              </article>

              <article className="card">
                <p className="card-kicker">Operational resilience</p>
                <h3 className="card-title">Higher platform reliability in business-critical workflows</h3>
                <p className="card-body">Embedded observability and incident disciplines delivered stronger uptime and faster blocker resolution.</p>
                <Link className="card-link" href="/managed-services">Explore delivery model →</Link>
              </article>

              <article className="card">
                <p className="card-kicker">Team augmentation</p>
                <h3 className="card-title">Embedded specialists accelerated programme momentum</h3>
                <p className="card-body">Strategic and technical specialists integrated with internal teams to reduce dependency bottlenecks.</p>
                <Link className="card-link" href="/collaborative-project-delivery">See collaboration model →</Link>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="why">
          <div className="container">
            <header className="section-header">
              <h2>Why teams choose us</h2>
              <p>We focus on clarity, speed, and outcomes so your team can move with confidence.</p>
            </header>

            <div className="grid grid--3">
              <article className="card">
                <h3 className="card-title">Clear decisions</h3>
                <p className="card-body">We strip away ambiguity with clear outcomes, aligned priorities, and tight feedback loops.</p>
              </article>

              <article className="card">
                <h3 className="card-title">Fast momentum</h3>
                <p className="card-body">We help you build velocity by removing blockers and keeping focus on the highest impact work.</p>
              </article>

              <article className="card">
                <h3 className="card-title">Trusted partnership</h3>
                <p className="card-body">Our role is to be part of your team, sharing accountability, knowledge, and the long-term vision.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section bg-muted" id="approach">
          <div className="container">
            <header className="section-header">
              <h2>Our approach</h2>
              <p>We build lasting partnerships by focusing on clarity, speed, and continuous feedback.</p>
            </header>

            <div className="timeline">
              <div className="timeline-step">
                <div className="timeline-step__number">1</div>
                <div>
                  <h3 className="timeline-step__title">Discovery</h3>
                  <p className="timeline-step__body">We learn your context, goals, and constraints so we can prioritize what moves the needle.</p>
                </div>
              </div>

              <div className="timeline-step">
                <div className="timeline-step__number">2</div>
                <div>
                  <h3 className="timeline-step__title">Co-create</h3>
                  <p className="timeline-step__body">We collaborate with your team to create a plan that is right-sized and ready to execute.</p>
                </div>
              </div>

              <div className="timeline-step">
                <div className="timeline-step__number">3</div>
                <div>
                  <h3 className="timeline-step__title">Launch and learn</h3>
                  <p className="timeline-step__body">We help you test quickly, iterate, and embed what works into your operating rhythms.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="clients">
          <div className="container">
            <header className="section-header">
              <h2>Where we deliver strongest</h2>
              <p>Representative contexts where DigX provides high-impact transformation support.</p>
            </header>

            <div className="grid grid--3 trust-grid">
              <article className="card trust-card">
                <h3 className="card-title">Financial services and FinTech</h3>
                <p className="card-body">Complex regulated programmes requiring strong governance, integration control, and delivery precision.</p>
              </article>
              <article className="card trust-card">
                <h3 className="card-title">Enterprise platform modernisation</h3>
                <p className="card-body">Cross-team transformation initiatives covering architecture, release discipline, and operational resilience.</p>
              </article>
              <article className="card trust-card">
                <h3 className="card-title">Managed and collaborative delivery</h3>
                <p className="card-body">Embedded specialists and service teams that increase programme momentum with lower execution risk.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <header className="section-header">
              <h2>Tell us the outcome you need. We will map the fastest route.</h2>
              <p>Share your goals and constraints. We will respond with a practical recommendation and delivery model.</p>
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
