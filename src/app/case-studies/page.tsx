import Link from "next/link";
import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Case Studies | DigX | Enterprise Digital Transformation Results",
  description: "Real outcomes from enterprise digital transformation projects. See how DigX helps FTSE 100 and regulated sector clients achieve measurable results.",
};

const caseLibrary = [
  {
    title: "Dynamics 365 Managed Services for a Health and Benefits Programme",
    summary:
      "Objectives: Managed D365 services and optimization. Delivered ongoing platform management and member experience enhancements to improve service quality.",
  },
  {
    title: "Optimising Performance and Stability Across an Oracle Estate",
    summary:
      "Objectives: Upgrade and modernize Oracle database environments to increase performance, reduce incidents, and support stable migrations.",
  },
  {
    title: "IT Simplification and Automated Data Testing for Banking Operations",
    summary:
      "Objectives: Simplify bank infrastructure and implement automated data testing to strengthen operational efficiency and control quality risk.",
  },
  {
    title: "Comprehensive Re-Platforming for a Corporate Banking Core",
    summary:
      "Objectives: Build and launch a modern core banking platform to support digital operations and improve long-term delivery velocity.",
  },
  {
    title: "Enhancing CI/CD and Integration for a Financial Services Estate",
    summary:
      "Objectives: Introduce CI/CD pipelines and stronger integration controls to accelerate release throughput and increase reliability.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="section page-hero-section">
          <div className="container page-hero-grid">
            <div className="page-hero-copy">
              <p className="page-kicker">Case Studies</p>
              <h1 className="page-headline">Evidence from programmes similar to yours.</h1>
              <p className="page-subtitle">See how DigX helps enterprise teams improve release confidence, reduce delivery risk, and accelerate measurable outcomes in complex environments.</p>
              <div className="page-quicklinks">
                <a className="btn btn-secondary" href="#featured-cases">Featured cases</a>
                <a className="btn btn-secondary" href="#case-library">Case library</a>
                <a className="btn btn-secondary" href="#proof-points">Outcome metrics</a>
                <Link className="btn btn-primary" href="/contact">Request a case walkthrough</Link>
              </div>
            </div>
            <aside className="page-glance">
              <h2 className="page-glance__title">At a glance</h2>
              <dl className="page-stats">
                <div className="page-stat"><dt>Sector focus</dt><dd>Regulated and enterprise</dd></div>
                <div className="page-stat"><dt>Typical scope</dt><dd>Transformation programmes</dd></div>
                <div className="page-stat"><dt>Approach</dt><dd>Embedded delivery</dd></div>
                <div className="page-stat"><dt>Result</dt><dd>Measurable impact</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="section" id="featured-cases">
          <div className="container">
            <header className="section-header">
              <h2>Featured case studies</h2>
              <p>Representative engagements showing context, intervention, and measurable impact.</p>
            </header>
            <div className="grid grid--3">
              <article className="card"><p className="card-kicker">Financial services | Integration estate</p><h3 className="card-title">Integration simplification</h3><p className="card-body">Redesigned integration pathways and technical controls for a regulated programme with multi-vendor dependencies.</p></article>
              <article className="card"><p className="card-kicker">Enterprise platform | Release governance</p><h3 className="card-title">Release stabilization</h3><p className="card-body">Introduced release governance and automation controls to improve quality while reducing operational noise.</p></article>
              <article className="card"><p className="card-kicker">Operational resilience | Platform engineering</p><h3 className="card-title">Platform modernization</h3><p className="card-body">Applied platform engineering practices to improve reliability, observability, and delivery throughput.</p></article>
            </div>
          </div>
        </section>

        <section className="section" id="proof-points">
          <div className="container">
            <header className="section-header"><h2>Outcome metrics</h2><p>Representative results from recent delivery engagements.</p></header>
            <div className="impact-grid">
              <article className="card impact-card"><p className="impact-number">40%</p><h3 className="card-title">Faster blocker resolution</h3><p className="card-body">Through clearer ownership and cross-team planning cadence.</p></article>
              <article className="card impact-card"><p className="impact-number">25%</p><h3 className="card-title">Improved release cadence</h3><p className="card-body">Delivered through environment stability and automated controls.</p></article>
              <article className="card impact-card"><p className="impact-number">99.9%</p><h3 className="card-title">Higher platform reliability</h3><p className="card-body">Enabled by monitoring and incident discipline across estates.</p></article>
            </div>
          </div>
        </section>

        <section className="section" id="case-library">
          <div className="container">
            <header className="section-header">
              <h2>Case library</h2>
              <p>A broader sample of delivery contexts and transformation outcomes across regulated environments.</p>
            </header>

            <div className="case-library-grid">
              {caseLibrary.map((item) => (
                <article className="case-library-card" key={item.title}>
                  <h3 className="case-library-card__title">{item.title}</h3>
                  <p className="case-library-card__summary">{item.summary}</p>
                  <Link className="case-library-card__link" href="/contact">Read More</Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
