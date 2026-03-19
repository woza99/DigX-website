import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section page-hero-section">
          <div className="container page-hero-grid">
            <div className="page-hero-copy">
              <p className="page-kicker">Services</p>
              <h1 className="page-headline">Choose the delivery model that matches your transformation challenge.</h1>
              <p className="page-subtitle">DigX service lines are designed to help enterprise teams move from strategic intent to controlled execution and sustained operational performance.</p>
              <div className="page-quicklinks">
                <a className="btn btn-secondary" href="#service-lines">Service lines</a>
                <a className="btn btn-secondary" href="#proof-points">Outcome metrics</a>
                <Link className="btn btn-primary" href="/contact">Book a services consultation</Link>
              </div>
            </div>
            <aside className="page-glance">
              <h2 className="page-glance__title">At a glance</h2>
              <dl className="page-stats">
                <div className="page-stat"><dt>Coverage</dt><dd>Build, run, optimize</dd></div>
                <div className="page-stat"><dt>Model</dt><dd>Embedded delivery teams</dd></div>
                <div className="page-stat"><dt>Strength</dt><dd>Regulated environments</dd></div>
                <div className="page-stat"><dt>Outcome</dt><dd>Faster, safer change</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="section" id="service-lines">
          <div className="container">
            <header className="section-header">
              <h2>Service lines by business priority</h2>
              <p>Start from your delivery constraint and align to the right DigX engagement model.</p>
            </header>
            <div className="grid grid--2">
              <article className="card"><p className="card-kicker">Priority: Programme transformation</p><h3 className="card-title">Enterprise Digital Change</h3><p className="card-body">Transformation leadership for organizations modernizing systems, operations, and delivery models.</p><Link className="card-link" href="/enterprise-digital-change">View service details →</Link></article>
              <article className="card"><p className="card-kicker">Priority: Platform reliability and governance</p><h3 className="card-title">Managed Services</h3><p className="card-body">SLA-led support for Dynamics 365 and enterprise platforms with strong release controls.</p><Link className="card-link" href="/managed-services">View service details →</Link></article>
              <article className="card"><p className="card-kicker">Priority: Integration and engineering acceleration</p><h3 className="card-title">Technical &amp; Integration Services</h3><p className="card-body">Resilient integration architecture, automation, and cloud engineering controls.</p><Link className="card-link" href="/technical-integration-services">View service details →</Link></article>
              <article className="card"><p className="card-kicker">Priority: Team capacity and execution momentum</p><h3 className="card-title">Collaborative Project Delivery</h3><p className="card-body">Specialists and squads that embed into your programme structure.</p><Link className="card-link" href="/collaborative-project-delivery">View service details →</Link></article>
            </div>
          </div>
        </section>

        <section className="section" id="proof-points">
          <div className="container">
            <header className="section-header">
              <h2>Service outcomes</h2>
              <p>Representative results the DigX delivery model is designed to produce.</p>
            </header>
            <div className="impact-grid">
              <article className="card impact-card"><p className="impact-number">25%</p><h3 className="card-title">Faster release cycles</h3><p className="card-body">Through release governance, automation, and environment stabilization.</p></article>
              <article className="card impact-card"><p className="impact-number">40%</p><h3 className="card-title">Lower integration complexity</h3><p className="card-body">With repeatable design standards and stronger cross-team controls.</p></article>
              <article className="card impact-card"><p className="impact-number">24/7</p><h3 className="card-title">Operational confidence</h3><p className="card-body">Enabled by monitoring, incident disciplines, and service improvement.</p></article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
