import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section about-hero-section">
          <div className="container about-hero-grid">
            <div className="about-hero-copy">
              <p className="about-kicker">About DigX</p>
              <h1 className="about-headline">The consultancy partner for high-complexity change.</h1>
              <p className="about-subtitle">
                We combine strategic clarity, delivery leadership, and technical depth to help enterprise teams
                move faster while protecting governance and operational stability.
              </p>

              <div className="about-quicklinks" aria-label="Jump to section">
                <a className="btn btn-secondary" href="#our-story">Our story</a>
                <a className="btn btn-secondary" href="#how-we-work">How we work</a>
                <Link className="btn btn-primary" href="/contact">Talk to our team</Link>
              </div>
            </div>

            <aside className="about-glance" aria-label="DigX at a glance">
              <h2 className="about-glance__title">At a glance</h2>
              <dl className="about-stats">
                <div className="about-stat"><dt>Founded</dt><dd>2012</dd></div>
                <div className="about-stat"><dt>Focus</dt><dd>Digital transformation</dd></div>
                <div className="about-stat"><dt>Strength</dt><dd>Regulated sectors</dd></div>
                <div className="about-stat"><dt>Delivery model</dt><dd>Embedded partnership teams</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="section" id="our-story">
          <div className="container">
            <div className="about-story-shell">
              <div className="about-story-intro">
                <p className="about-section-label">Our story</p>
                <h2>Built for enterprise complexity. Designed for practical outcomes.</h2>
                <p>
                  Since 2012, DigX has supported high-visibility transformation programmes by partnering with
                  enterprise clients and major professional services firms.
                </p>
              </div>

              <div className="about-story-grid">
                <article className="card about-highlight-card">
                  <h3 className="card-title">Outcome-first execution</h3>
                  <p className="card-body">Every engagement is aligned to measurable business outcomes, not activity volume.</p>
                </article>
                <article className="card about-highlight-card">
                  <h3 className="card-title">Embedded collaboration</h3>
                  <p className="card-body">We integrate with your teams so decisions move quickly with shared context.</p>
                </article>
                <article className="card about-highlight-card">
                  <h3 className="card-title">Engineering discipline</h3>
                  <p className="card-body">Automation, standards, and operational rigor keep delivery reliable over time.</p>
                </article>
                <article className="card about-highlight-card">
                  <h3 className="card-title">Long-term partnership</h3>
                  <p className="card-body">We support optimization and capability transfer beyond go-live.</p>
                </article>
              </div>
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
              <article className="card impact-card"><p className="impact-number">40%</p><h3 className="card-title">Lower integration complexity</h3><p className="card-body">Delivered through stronger design standards and delivery controls.</p></article>
              <article className="card impact-card"><p className="impact-number">25%</p><h3 className="card-title">Improved release cadence</h3><p className="card-body">Achieved through environment stability and release automation.</p></article>
              <article className="card impact-card"><p className="impact-number">Tier-1</p><h3 className="card-title">Financial services delivery</h3><p className="card-body">Trusted delivery authority across large regulated programmes.</p></article>
            </div>
          </div>
        </section>

        <section className="section" id="how-we-work">
          <div className="container">
            <header className="section-header">
              <h2>How we work</h2>
              <p>Practical delivery with continuous improvement built in from day one.</p>
            </header>
            <div className="timeline">
              <div className="timeline-step"><div className="timeline-step__number">1</div><div><h3 className="timeline-step__title">Discovery and strategic design</h3><p className="timeline-step__body">Map context, dependencies, constraints, and desired outcomes.</p></div></div>
              <div className="timeline-step"><div className="timeline-step__number">2</div><div><h3 className="timeline-step__title">Expert execution</h3><p className="timeline-step__body">Deliver with governance, technical rigor, and visible progress controls.</p></div></div>
              <div className="timeline-step"><div className="timeline-step__number">3</div><div><h3 className="timeline-step__title">Continuous excellence</h3><p className="timeline-step__body">Optimize post go-live and transfer capability to sustain outcomes.</p></div></div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
