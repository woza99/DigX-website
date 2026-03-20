import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import CareersContentSections from "@/components/CareersContentSections";
import { defaultCareersContent } from "@/content/careers";

export const metadata: Metadata = {
  title: "Careers | DigX | Join Our Team",
  description: "Explore career opportunities at DigX. We're looking for talented digital transformation specialists to join our team.",
};

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="careers-page">
        <CareersContentSections initialContent={defaultCareersContent} />
      </main>
      <SiteFooter />
    </>
  );
}
