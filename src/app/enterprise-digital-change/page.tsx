import ServiceDetailPage from "@/components/ServiceDetailPage";

export default function EnterpriseDigitalChangePage() {
  return (
    <ServiceDetailPage
      eyebrow="Enterprise Digital Change"
      title="Lead enterprise transformation with clarity, control, and measurable impact."
      lead="DigX supports organizations delivering high-visibility change programmes that require strategic direction, disciplined governance, and practical execution support from planning through long-term optimization."
      chips={["Programme strategy", "Operating model design", "Change leadership", "Long-term value realization"]}
      ctaLabel="Book a transformation consultation"
      overviewTitle="What this service solves"
      overviewLead="Enterprise Digital Change is designed for organizations that need end-to-end strategic leadership through complex transformation."
      overviewParagraphs={[
        "When transformation spans multiple teams, suppliers, and legacy systems, execution risk rises quickly. DigX helps establish strategic clarity, governance rhythm, and controlled delivery momentum.",
        "We align technical and business priorities so digital change creates sustained advantage, not short-term technical movement.",
      ]}
      reasonTitle="Why teams choose DigX"
      reasonLead="Focused capabilities that make complex transformation programmes practical and sustainable."
      reasonCards={[
        { title: "Precision in integration", body: "Technology choices and integration plans are aligned directly to enterprise goals." },
        { title: "Partnering for success", body: "We operate as strategic partners and share accountability for measurable outcomes." },
        { title: "Scalable programme design", body: "Flexible foundations support growth without adding unnecessary operational complexity." },
        { title: "Operational efficiency", body: "Delivery quality and budget discipline stay balanced throughout implementation." },
        { title: "People-centric change", body: "Adoption, engagement, and capability transfer are embedded into programme design." },
        { title: "Sustained support", body: "Post go-live support keeps transformation value progressing over time." },
      ]}
      stepsLead="A clear path from strategy definition to sustained operational value."
      steps={[
        { title: "Shape the programme", body: "Define outcomes, dependencies, governance, and execution guardrails before major delivery starts." },
        { title: "Execute with control", body: "Deliver technical and operational change with structured oversight and visible milestones." },
        { title: "Embed and improve", body: "Stabilize new capabilities, transfer knowledge, and optimize long-term performance." },
      ]}
      supportTitle="Support lifecycle"
      supportLead="Our commitment continues after implementation to protect long-term transformation value."
      proofs={[
        { metric: "Hypercare", title: "Service transition stability", body: "Rapid intervention and monitoring support smooth transitions into operation." },
        { metric: "Managed", title: "Continuous performance", body: "Ongoing managed support keeps systems reliable and outcomes on track." },
        { metric: "Sustained", title: "Business growth enablement", body: "Long-term support helps organizations leverage full transformation benefits." },
      ]}
    />
  );
}
