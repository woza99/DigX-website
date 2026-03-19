import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main className="careers-page">
        <section className="section careers-hero" id="top-of-careers">
          <div className="container careers-hero-shell">
            <div className="careers-hero-main">
              <p className="careers-kicker">Careers at DigX</p>
              <h1 className="careers-headline">Build meaningful digital change with people who care about craft and outcomes.</h1>
              <p className="careers-subtitle">You will work on complex programmes in a high-trust, delivery-first environment with clear ownership and room to grow.</p>
              <div className="careers-quicklinks">
                <a className="btn btn-secondary" href="#open-role-tracks">Open role tracks</a>
                <a className="btn btn-secondary" href="#hiring-journey">Hiring journey</a>
                <Link className="btn btn-primary" href="/contact">Introduce yourself</Link>
              </div>
            </div>

            <aside className="careers-hero-panel">
              <h2 className="careers-panel-title">Career snapshot</h2>
              <div className="careers-metric-grid">
                <article className="careers-metric"><p className="careers-metric__value">4</p><p className="careers-metric__label">Role tracks</p></article>
                <article className="careers-metric"><p className="careers-metric__value">3-step</p><p className="careers-metric__label">Hiring flow</p></article>
                <article className="careers-metric"><p className="careers-metric__value">1 team</p><p className="careers-metric__label">Shared ownership</p></article>
                <article className="careers-metric"><p className="careers-metric__value">Real</p><p className="careers-metric__label">Growth pathways</p></article>
              </div>
            </aside>
          </div>
        </section>

        <section className="section bg-muted" id="open-role-tracks">
          <div className="container">
            <header className="section-header"><h2>Open role tracks</h2><p>We hire across engineering, operations, consulting, and programme delivery.</p></header>
            <div className="careers-role-grid">
              <article className="careers-role-card"><h3>Platform and Integration Engineers</h3><p>Build resilient integration pathways, delivery automation, and operational guardrails.</p></article>
              <article className="careers-role-card"><h3>Managed Service Specialists</h3><p>Run high-quality support operations with strong incident and release discipline.</p></article>
              <article className="careers-role-card"><h3>Transformation Consultants</h3><p>Translate business priorities into practical roadmaps and technical delivery plans.</p></article>
              <article className="careers-role-card"><h3>Delivery and Programme Leads</h3><p>Guide multi-team programmes with governance, risk ownership, and execution momentum.</p></article>
            </div>
          </div>
        </section>

        <section className="section" id="hiring-journey">
          <div className="container">
            <header className="section-header"><h2>Hiring journey</h2><p>Simple, practical, and respectful of your time.</p></header>
            <div className="careers-process-grid">
              <article className="careers-process-step"><p className="careers-process-step__number">01</p><h3>Intro conversation</h3><p>Discuss your background, interests, and impact areas you enjoy.</p></article>
              <article className="careers-process-step"><p className="careers-process-step__number">02</p><h3>Practical discussion</h3><p>Role-specific conversation focused on judgment and real delivery trade-offs.</p></article>
              <article className="careers-process-step"><p className="careers-process-step__number">03</p><h3>Mutual fit</h3><p>Align on scope, expectations, growth direction, and working style.</p></article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
