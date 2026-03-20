import type { Metadata } from "next";
import Link from "next/link";
import { hiringSteps, roleTracks } from "@/content/careers";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Admin Careers | DigX",
  description: "Starter admin dashboard for careers content management.",
};

export default function AdminCareersPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="section">
          <div className="container admin-shell">
            <header className="section-header section-header--left">
              <h1>Careers Admin</h1>
              <p>
                Centralized careers content is now powered by a data module. This page is your bridge to full database-backed admin tooling.
              </p>
            </header>

            <div className="grid grid--2">
              <article className="card admin-card">
                <h2 className="card-title">Current role tracks</h2>
                <ul className="about-list-clean" aria-label="Current role tracks">
                  {roleTracks.map((role) => (
                    <li key={role.title}>{role.title}</li>
                  ))}
                </ul>
              </article>

              <article className="card admin-card">
                <h2 className="card-title">Current hiring steps</h2>
                <ul className="about-list-clean" aria-label="Current hiring journey steps">
                  {hiringSteps.map((step) => (
                    <li key={step.number}>{step.number} - {step.title}</li>
                  ))}
                </ul>
              </article>
            </div>

            <article className="card admin-card admin-card--full">
              <h2 className="card-title">Next step: full admin-only workflow</h2>
              <ol className="about-list-clean" aria-label="Next implementation steps">
                <li>Connect careers data to a database table instead of local source files.</li>
                <li>Add proper authentication with role checks.</li>
                <li>Add create, edit, archive controls for roles and hiring steps.</li>
              </ol>
              <p className="admin-note">Current editable source: src/content/careers.ts</p>
              <div className="hero-actions">
                <Link className="btn btn-secondary" href="/careers">View public careers page</Link>
                <Link className="btn btn-primary" href="/admin/login">Admin access notes</Link>
              </div>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
