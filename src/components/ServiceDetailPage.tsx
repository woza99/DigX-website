import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

type ServiceCard = {
  title: string;
  body: string;
};

type ServiceStep = {
  title: string;
  body: string;
};

type ServiceProof = {
  metric: string;
  title: string;
  body: string;
};

type ServiceDetailPageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  chips: string[];
  ctaLabel: string;
  overviewTitle: string;
  overviewLead: string;
  overviewParagraphs: string[];
  reasonTitle: string;
  reasonLead: string;
  reasonCards: ServiceCard[];
  stepsLead: string;
  steps: ServiceStep[];
  supportTitle: string;
  supportLead: string;
  proofs: ServiceProof[];
};

export default function ServiceDetailPage(props: ServiceDetailPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="svc-frame">
        <section className="section svc-frame__hero" id="top-of-service">
          <div className="container svc-frame__layout">
            <article className="svc-frame__panel">
              <p className="svc-frame__eyebrow">{props.eyebrow}</p>
              <h1 className="svc-frame__title">{props.title}</h1>
              <p className="svc-frame__lead">{props.lead}</p>
              <div className="svc-frame__chips">
                {props.chips.map((chip) => (
                  <span className="service-chip" key={chip}>{chip}</span>
                ))}
              </div>
            </article>

            <aside className="svc-frame__aside">
              <h2 className="svc-frame__aside-title">Page guide</h2>
              <nav className="svc-frame__jump" aria-label={`${props.eyebrow} sections`}>
                <a href="#service-overview">Service overview</a>
                <a href="#why-digx">Why DigX</a>
                <a href="#delivery-path">How we deliver</a>
                <a href="#support-lifecycle">Outcomes</a>
              </nav>
              <div className="service-detail-cta">
                <Link className="btn btn-primary" href="/contact">{props.ctaLabel}</Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="service-overview">
          <div className="container">
            <header className="section-header section-header--left">
              <h2>{props.overviewTitle}</h2>
              <p>{props.overviewLead}</p>
            </header>

            <div className="page-story-grid">
              <div className="page-story-copy">
                {props.overviewParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="grid grid--2 page-principles">
                {props.reasonCards.slice(0, 4).map((card) => (
                  <article className="card page-highlight-card" key={card.title}>
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-body">{card.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-muted" id="why-digx">
          <div className="container">
            <header className="section-header section-header--left">
              <h2>{props.reasonTitle}</h2>
              <p>{props.reasonLead}</p>
            </header>
            <div className="svc-frame__reason-grid">
              {props.reasonCards.map((card) => (
                <article className="card service-pillar" key={card.title}>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-body">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="delivery-path">
          <div className="container">
            <header className="section-header section-header--left">
              <h2>How we deliver</h2>
              <p>{props.stepsLead}</p>
            </header>
            <div className="timeline">
              {props.steps.map((step, index) => (
                <div className="timeline-step" key={step.title}>
                  <div className="timeline-step__number">{index + 1}</div>
                  <div>
                    <h3 className="timeline-step__title">{step.title}</h3>
                    <p className="timeline-step__body">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-muted" id="support-lifecycle">
          <div className="container">
            <header className="section-header section-header--left">
              <h2>{props.supportTitle}</h2>
              <p>{props.supportLead}</p>
            </header>
            <div className="service-proof">
              {props.proofs.map((proof) => (
                <article className="card" key={proof.title}>
                  <p className="impact-number">{proof.metric}</p>
                  <h3 className="card-title">{proof.title}</h3>
                  <p className="card-body">{proof.body}</p>
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
