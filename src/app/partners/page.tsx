import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function PartnersPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section page-hero-section">
          <div className="container page-hero-grid">
            <div className="page-hero-copy">
              <p className="page-kicker">Partners</p>
              <h1 className="page-headline">Partnership models built for enterprise delivery.</h1>
              <p className="page-subtitle">We work with technology vendors, consulting firms, and specialist networks to deliver stronger outcomes together.</p>
              <div className="page-quicklinks">
                <a className="btn btn-secondary" href="#partner-model">Partner model</a>
                <a className="btn btn-secondary" href="#value-points">Shared value</a>
                <Link className="btn btn-primary" href="/contact">Start a partnership</Link>
              </div>
            </div>
            <aside className="page-glance">
              <h2 className="page-glance__title">At a glance</h2>
              <dl className="page-stats">
                <div className="page-stat"><dt>Partner types</dt><dd>Technology and consulting</dd></div>
                <div className="page-stat"><dt>Engagement</dt><dd>Joint delivery models</dd></div>
                <div className="page-stat"><dt>Focus</dt><dd>Shared client outcomes</dd></div>
                <div className="page-stat"><dt>Value</dt><dd>Speed with quality</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="section" id="partner-model">
          <div className="container">
            <header className="section-header"><h2>Partner model</h2><p>Flexible collaboration patterns designed for complex programmes.</p></header>
            <div className="grid grid--2">
              <article className="card"><h3 className="card-title">Technology partners</h3><p className="card-body">Align platform capabilities with delivery strategy so clients get value faster.</p></article>
              <article className="card"><h3 className="card-title">Consulting alliances</h3><p className="card-body">Embed into larger programmes with specialist execution and leadership depth.</p></article>
              <article className="card"><h3 className="card-title">Specialist networks</h3><p className="card-body">Close capability gaps quickly and safely with trusted domain experts.</p></article>
              <article className="card"><h3 className="card-title">Community ecosystem</h3><p className="card-body">Share practical playbooks and insight that strengthen partner delivery maturity.</p></article>
            </div>
          </div>
        </section>

        <section className="section" id="value-points">
          <div className="container">
            <header className="section-header"><h2>Shared value outcomes</h2><p>What partners and clients gain from working with us.</p></header>
            <div className="impact-grid">
              <article className="card impact-card"><p className="impact-number">1 team</p><h3 className="card-title">Unified delivery view</h3><p className="card-body">Clear ownership and planning cadence across organizations.</p></article>
              <article className="card impact-card"><p className="impact-number">Faster</p><h3 className="card-title">Program momentum</h3><p className="card-body">Reduced handoff friction on high-priority workstreams.</p></article>
              <article className="card impact-card"><p className="impact-number">Lower risk</p><h3 className="card-title">Stronger governance</h3><p className="card-body">Better controls and clearer decision frameworks in multi-vendor contexts.</p></article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
