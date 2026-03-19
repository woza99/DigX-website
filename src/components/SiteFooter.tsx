import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <h2 className="footer-heading">Let&apos;s connect</h2>

        <div className="footer-grid">
          <div className="footer-col">
            <h3>Get in touch</h3>
            <ul className="footer-links-list">
              <li><Link href="/contact">Contact us</Link></li>
              <li><Link href="/contact#contact-form">Share your brief</Link></li>
              <li><Link href="/careers">Explore careers</Link></li>
              <li><Link href="/about">Learn about DigX</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <ul className="footer-links-list footer-service-list">
              <li><Link href="/enterprise-digital-change">Enterprise Digital Change</Link></li>
              <li><Link href="/managed-services">Managed Services</Link></li>
              <li><Link href="/technical-integration-services">Technical &amp; Integration Services</Link></li>
              <li><Link href="/collaborative-project-delivery">Collaborative Project Delivery</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>About</h3>
            <ul className="footer-links-list">
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/case-studies">Case studies</Link></li>
              <li><Link href="/partners">Partners</Link></li>
              <li><Link href="/industries">Industries</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Careers</h3>
            <ul className="footer-links-list">
              <li><Link href="/careers">Career paths</Link></li>
              <li><Link href="/careers#open-role-tracks">Open role tracks</Link></li>
              <li><Link href="/careers#hiring-journey">Hiring journey</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-meta">© {new Date().getFullYear()} DigX. All rights reserved.</p>
          <div className="footer-social" aria-label="Follow DigX">
            <span className="footer-social__label">Follow us</span>
            <div className="footer-social-list">
              <a className="footer-social-link" href="https://www.linkedin.com/company/digx" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
              <a className="footer-social-link" href="https://www.facebook.com/digx" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
              <a className="footer-social-link" href="https://twitter.com/digx" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">X</a>
              <a className="footer-social-link" href="https://www.youtube.com/@digx" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
