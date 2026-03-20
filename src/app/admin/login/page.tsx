import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Admin Login | DigX",
  description: "Admin access guidance for DigX careers content management.",
};

export default function AdminLoginPage() {

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="section">
          <div className="container admin-shell">
            <header className="section-header">
              <h1>Admin Access</h1>
              <p>GitHub Pages uses static export, so secure admin login requires an external backend auth provider.</p>
            </header>

            <article className="card admin-card">
              <p className="admin-alert admin-alert--info">
                Current mode: static scaffold. Careers content is centralized and editable in one file while backend auth is pending.
              </p>
              <p className="card-body">Edit source: <strong>src/content/careers.ts</strong></p>
              <p className="admin-note">
                Recommended next step: connect Supabase/Auth0/Clerk and move careers content to a database for true admin-only editing.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/admin/careers">Open careers admin overview</Link>
                <Link className="btn btn-secondary" href="/careers">Back to careers page</Link>
              </div>
              <Link className="card-link" href="/careers">Back to careers page</Link>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
