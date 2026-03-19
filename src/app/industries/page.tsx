import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function IndustriesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section page-hero-section">
          <div className="container page-hero-grid">
            <div className="page-hero-copy">
              <p className="page-kicker">Industries</p>
              <h1 className="page-headline">Industry expertise where complexity and regulation meet.</h1>
              <p className="page-subtitle">Our strongest delivery footprint is in regulated and high-change sectors where governance, integration control, and pace all matter.</p>
              <div className="page-quicklinks">
                <a className="btn btn-secondary" href="#financial-fintech">Financial services and FinTech</a>
                <a className="btn btn-secondary" href="#broader-engagement">Broader sectors</a>
                <Link className="btn btn-primary" href="/contact">Talk to our team</Link>
              </div>
            </div>
            <aside className="page-glance">
              <h2 className="page-glance__title">At a glance</h2>
              <dl className="page-stats">
                <div className="page-stat"><dt>Primary focus</dt><dd>Financial services and FinTech</dd></div>
                <div className="page-stat"><dt>Strength</dt><dd>Complex regulated environments</dd></div>
                <div className="page-stat"><dt>Delivery model</dt><dd>Tailored transformation programmes</dd></div>
                <div className="page-stat"><dt>Outcome</dt><dd>Operational efficiency and growth</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="section" id="financial-fintech">
          <div className="container">
            <header className="section-header"><h2>Financial Services and FinTech expertise</h2><p>Representative contexts where DigX provides high-value delivery support.</p></header>
            <div className="grid grid--3">
              <article className="card"><h3 className="card-title">Corporate and retail banking</h3><p className="card-body">Secure digital platforms, process automation, and service integration at scale.</p></article>
              <article className="card"><h3 className="card-title">Investment and asset management</h3><p className="card-body">Risk-aware infrastructure, data pipelines, and analytics capabilities.</p></article>
              <article className="card"><h3 className="card-title">Insurance, pensions, and annuities</h3><p className="card-body">Policy and claims modernization with strong regulatory alignment.</p></article>
              <article className="card"><h3 className="card-title">Mortgages and lending</h3><p className="card-body">Digital lending pathways that improve underwriting and customer outcomes.</p></article>
              <article className="card"><h3 className="card-title">Credit cards and payments</h3><p className="card-body">Fraud controls, transaction resilience, and modern payment experiences.</p></article>
              <article className="card"><h3 className="card-title">Offshore and cross-border finance</h3><p className="card-body">Secure, compliant operations across international constraints.</p></article>
            </div>
          </div>
        </section>

        <section className="section" id="broader-engagement">
          <div className="container">
            <header className="section-header"><h2>Broader industry engagement</h2><p>Beyond financial services, we support complex delivery in other sectors.</p></header>
            <div className="grid grid--3">
              <article className="card"><h3 className="card-title">Leisure and hospitality</h3><p className="card-body">Digital experiences, data-led marketing, and operational modernization.</p></article>
              <article className="card"><h3 className="card-title">Accountancy and advisory</h3><p className="card-body">Compliance tooling, reporting workflows, and delivery optimization.</p></article>
              <article className="card"><h3 className="card-title">Manufacturing</h3><p className="card-body">Automation, integration, and data visibility across operations and supply chains.</p></article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
