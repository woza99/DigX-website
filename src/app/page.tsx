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
              <h2>Select the delivery track that matches your enterprise priority</h2>
              <p>Each service model is designed for regulated environments where pace, control, and resilience must align.</p>
            </header>

            <div className="grid grid--3">
              <article className="card">
                <p className="card-kicker">Strategic transformation</p>
                <h3 className="card-title">Programme leadership for complex enterprise change</h3>
                <p className="card-body">Use Enterprise Digital Change when your programme needs board-level clarity, governance discipline, and execution momentum.</p>
                <Link className="card-link" href="/enterprise-digital-change">Explore Enterprise Digital Change →</Link>
              </article>

              <article className="card">
                <p className="card-kicker">Platform reliability</p>
                <h3 className="card-title">Managed operations with measurable service confidence</h3>
                <p className="card-body">Use Managed Services for SLA-aligned support, release assurance, and proactive incident prevention across critical estates.</p>
                <Link className="card-link" href="/managed-services">Explore Managed Services →</Link>
              </article>

              <article className="card">
                <p className="card-kicker">Technical acceleration</p>
                <h3 className="card-title">Integration and engineering capability at delivery speed</h3>
                <p className="card-body">Use Technical and Integration Services for architecture, CI/CD modernization, and reliable multi-system execution.</p>
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
                  <h2>How we engage with your teams</h2>
                  <p>
                    DigX operates as an embedded enterprise partner, aligning leadership decisions, delivery governance,
                    and technical execution across internal teams and third-party suppliers.
                  </p>
                </header>
                <div className="hero-actions" aria-label="Engagement links">
                  <Link className="btn btn-secondary" href="/about">See our operating model</Link>
                  <Link className="btn btn-primary" href="/collaborative-project-delivery">View collaboration services</Link>
                </div>
              </div>

              <article className="card">
                <p className="card-kicker">Enterprise working model</p>
                <h3 className="card-title">Built for regulated delivery environments</h3>
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

        <section className="section" id="outcomes">
          <div className="container">
            <header className="section-header">
              <h2>Representative outcomes from enterprise programmes</h2>
              <p>Selected examples of where delivery confidence, release rhythm, and platform stability were improved in parallel.</p>
            </header>

            <div className="grid grid--3 trust-grid">
              <article className="card">
                <p className="card-kicker">Financial services modernization</p>
                <h3 className="card-title">Integration simplification across multi-vendor estates</h3>
                <p className="card-body">Standardized architecture and controls reduced handoff friction and improved cross-team execution quality.</p>
                <Link className="card-link" href="/case-studies">View the case context →</Link>
              </article>

              <article className="card">
                <p className="card-kicker">Release reliability</p>
                <h3 className="card-title">Cadence uplift through release and environment control</h3>
                <p className="card-body">Introduced governance gates, delivery telemetry, and clearer service coordination to improve release predictability.</p>
                <Link className="card-link" href="/case-studies">See outcome metrics →</Link>
              </article>

              <article className="card">
                <p className="card-kicker">Operational resilience</p>
                <h3 className="card-title">Higher platform reliability in managed estates</h3>
                <p className="card-body">Embedded observability, operational playbooks, and disciplined support models improved stability under production pressure.</p>
                <Link className="card-link" href="/managed-services">Explore the managed model →</Link>
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

        <section className="section" id="contact">
          <div className="container">
            <header className="section-header">
              <h2>Share your delivery objective. We will map a practical route.</h2>
              <p>Tell us your goals, constraints, and current blockers. We will respond with a focused recommendation and the right service path.</p>
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
