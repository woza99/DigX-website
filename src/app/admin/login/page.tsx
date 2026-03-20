import type { Metadata } from "next";
import Link from "next/link";
import { adminLoginAction } from "@/app/admin/actions";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Admin Login | DigX",
  description: "Login for DigX admin tools.",
};

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
    message?: string;
  }>;
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;

  const errorText =
    params.error === "not-configured"
      ? "Admin password is not configured yet. Add DIGX_ADMIN_PASSWORD to your environment."
      : params.error === "invalid"
        ? "Incorrect password."
        : "";

  const messageText = params.message === "logged-out" ? "You have been logged out." : "";

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="section">
          <div className="container admin-shell">
            <header className="section-header">
              <h1>Admin Access</h1>
              <p>Use your admin password to open the careers management area.</p>
            </header>

            <form className="card admin-card" action={adminLoginAction}>
              <label className="form-field">
                <span className="form-label">Admin password</span>
                <input className="input" type="password" name="password" required autoComplete="current-password" />
              </label>
              {errorText ? <p className="admin-alert admin-alert--error">{errorText}</p> : null}
              {messageText ? <p className="admin-alert admin-alert--info">{messageText}</p> : null}
              <button className="btn btn-primary" type="submit">Sign in</button>
              <p className="admin-note">
                This is a starter scaffold. Next step is replacing password login with full auth + role checks.
              </p>
              <Link className="card-link" href="/careers">Back to careers page</Link>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
