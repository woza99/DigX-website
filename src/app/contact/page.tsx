import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section page-hero-section">
          <div className="container page-hero-grid">
            <div className="page-hero-copy">
              <p className="page-kicker">Contact</p>
              <h1 className="page-headline">Tell us the outcome you need. We will map the fastest route.</h1>
              <p className="page-subtitle">Share your goals, timeline, and constraints. We will respond with a practical recommendation and the right delivery model for your context.</p>
              <div className="page-quicklinks">
                <a className="btn btn-secondary" href="#contact-form">Send your brief</a>
                <a className="btn btn-secondary" href="#what-happens-next">What happens next</a>
                <a className="btn btn-primary" href="tel:+441218281164">Call our team</a>
              </div>
            </div>
            <aside className="page-glance">
              <h2 className="page-glance__title">At a glance</h2>
              <dl className="page-stats">
                <div className="page-stat"><dt>Email</dt><dd>info@dig-x.com</dd></div>
                <div className="page-stat"><dt>Phone</dt><dd>0121 828 1164</dd></div>
                <div className="page-stat"><dt>Typical topics</dt><dd>Services, delivery, partnerships</dd></div>
                <div className="page-stat"><dt>Response</dt><dd>Business-day follow-up</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="section" id="contact-form">
          <div className="container">
            <header className="section-header section-header--left"><h2>Send your brief</h2><p>Share enough context for us to recommend the right next step and engagement model.</p></header>
            <form className="contact-form">
              <div className="form-grid">
                <label className="form-field"><span className="form-label">Name</span><input className="input" type="text" required /></label>
                <label className="form-field"><span className="form-label">Email</span><input className="input" type="email" required /></label>
                <label className="form-field form-field--full"><span className="form-label">Company / Team</span><input className="input" type="text" /></label>
                <label className="form-field form-field--full"><span className="form-label">How can we help?</span><textarea className="input" rows={5} required /></label>
                <button className="btn btn-primary" type="submit">Send brief</button>
              </div>
            </form>
          </div>
        </section>

        <section className="section" id="what-happens-next">
          <div className="container">
            <header className="section-header section-header--left"><h2>What happens next</h2><p>A simple process designed to give your team clarity quickly.</p></header>
            <div className="timeline">
              <div className="timeline-step"><div className="timeline-step__number">1</div><div><h3 className="timeline-step__title">Initial review</h3><p className="timeline-step__body">We review your goals, constraints, and programme context to identify the highest-value next step.</p></div></div>
              <div className="timeline-step"><div className="timeline-step__number">2</div><div><h3 className="timeline-step__title">Focused follow-up</h3><p className="timeline-step__body">A specialist follows up with practical recommendations and engagement options.</p></div></div>
              <div className="timeline-step"><div className="timeline-step__number">3</div><div><h3 className="timeline-step__title">Plan first milestone</h3><p className="timeline-step__body">If there is fit, we define the first milestone, outcomes, and team model.</p></div></div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
