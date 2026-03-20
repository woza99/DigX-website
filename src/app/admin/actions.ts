"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ADMIN_SESSION_COOKIE = "digx_admin_session";

export async function adminLoginAction(formData: FormData) {
  const submittedPassword = String(formData.get("password") ?? "").trim();
  const configuredPassword = process.env.DIGX_ADMIN_PASSWORD;

  if (!configuredPassword) {
    redirect("/admin/login?error=not-configured");
  }

  if (submittedPassword !== configuredPassword) {
    redirect("/admin/login?error=invalid");
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_SESSION_COOKIE, "active", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  redirect("/admin/careers");
}

export async function adminLogoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_SESSION_COOKIE);
  redirect("/admin/login?message=logged-out");
}

export async function isAdminSessionActive() {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_SESSION_COOKIE)?.value === "active";
}
