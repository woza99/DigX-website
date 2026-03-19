import ServiceDetailPage from "@/components/ServiceDetailPage";

export default function ManagedServicesPage() {
  return (
    <ServiceDetailPage
      eyebrow="Managed Services"
      title="Keep critical platforms stable while your business moves faster."
      lead="DigX managed services combine operational rigor, release governance, and integration stewardship to improve reliability while supporting continuous change in business-critical environments."
      chips={["SLA-led support", "Release governance", "Environment management", "Hypercare and optimization"]}
      ctaLabel="Discuss managed support"
      overviewTitle="What this service solves"
      overviewLead="Managed services built for reliability, performance, and continuous operational improvement."
      overviewParagraphs={[
        "In fast-moving organizations, platform stability and change velocity must coexist. DigX helps teams run critical estates with stronger controls, clearer ownership, and lower operational noise.",
        "From Dynamics 365 estates to cloud and ISV integrations, we keep services resilient, connected, and ready for scale.",
      ]}
      reasonTitle="Why teams choose DigX"
      reasonLead="Capabilities that keep operations efficient, secure, and ready to scale."
      reasonCards={[
        { title: "Integrated DevOps and SRE", body: "Automation and monitoring unite delivery and operations for reliable releases." },
        { title: "Operational efficiency", body: "Reduced manual effort across refreshes, releases, and environment control tasks." },
        { title: "Expert integration support", body: "Specialist support for complex enterprise integrations including ISV ecosystems." },
        { title: "Proactive support and hypercare", body: "Continuous monitoring and early intervention reduce business-impacting incidents." },
        { title: "Data management and flow", body: "Secure, scalable data pathways improve visibility and decision confidence." },
        { title: "Comprehensive platform support", body: "Maintenance, patching, release coordination, and service tuning in one model." },
      ]}
      stepsLead="A practical managed model from onboarding to continuous optimization."
      steps={[
        { title: "Assess and stabilize", body: "Baseline services, integrations, and environment risk to remove immediate constraints." },
        { title: "Automate and govern", body: "Implement release controls, monitoring, and CI/CD practices for consistency." },
        { title: "Optimize continuously", body: "Use service insights to improve performance, reduce cost, and support growth." },
      ]}
      supportTitle="Support lifecycle"
      supportLead="Managed support that protects day-to-day reliability and long-term evolution."
      proofs={[
        { metric: "24/7", title: "Operational assurance", body: "Proactive support keeps critical services stable under changing demand." },
        { metric: "Faster", title: "Change confidence", body: "Structured release processes lower disruption during updates and enhancements." },
        { metric: "Smarter", title: "Continuous improvement", body: "Service optimization cycles improve efficiency, compliance, and business value." },
      ]}
    />
  );
}
