import ServiceDetailPage from "@/components/ServiceDetailPage";

export default function CollaborativeProjectDeliveryPage() {
  return (
    <ServiceDetailPage
      eyebrow="Collaborative Project Delivery"
      title="Embed specialist capability and accelerate complex programmes without disruption."
      lead="DigX integrates strategic and technical specialists into your programme structure to improve execution momentum, strengthen alignment, and increase delivery confidence across multi-team environments."
      chips={["Embedded specialists", "Flexible resourcing", "Programme acceleration", "Multi-vendor coordination"]}
      ctaLabel="Build your delivery squad"
      overviewTitle="What this service solves"
      overviewLead="Collaborative delivery support designed to complement your teams and accelerate outcomes."
      overviewParagraphs={[
        "Transformation succeeds when delivery teams share context, accountability, and pace. DigX embeds capability directly into your operating model without disrupting existing governance.",
        "From targeted specialists to multi-disciplinary squads, we strengthen internal capacity while improving cross-team flow and measurable progress.",
      ]}
      reasonTitle="Why teams choose DigX"
      reasonLead="Delivery partnership that scales capacity without sacrificing quality, control, or alignment."
      reasonCards={[
        { title: "Consultative engagement", body: "Relationship-led model focused on practical outcomes and long-term value." },
        { title: "Flexible resourcing", body: "Scale from specialist injection to integrated squads as demand evolves." },
        { title: "Programme assurance", body: "Stronger coordination and governance patterns reduce execution risk." },
        { title: "Multi-partner collaboration", body: "Improved momentum across internal teams, vendors, and strategic partners." },
        { title: "Scalable without compromise", body: "Expand capacity while preserving quality, standards, and consistency." },
        { title: "Long-term support", body: "Partnership extends beyond launch to sustain delivery improvements." },
      ]}
      stepsLead="A clear collaborative structure for predictable transformation execution."
      steps={[
        { title: "Align teams and goals", body: "Set shared outcomes, ownership, and engagement rhythms from the start." },
        { title: "Embed and execute", body: "Integrate specialists into active workstreams and accelerate critical delivery paths." },
        { title: "Transfer and sustain", body: "Build internal capability and sustain momentum through structured handover." },
      ]}
      supportTitle="Partnership outcomes"
      supportLead="Collaborative delivery outcomes that improve pace, alignment, and long-term resilience."
      proofs={[
        { metric: "Faster", title: "Execution velocity", body: "Targeted capability injection helps clear bottlenecks and critical path delays." },
        { metric: "Stronger", title: "Program alignment", body: "Improved coordination across internal functions and external delivery partners." },
        { metric: "Sustained", title: "Long-term capability", body: "Knowledge transfer and ongoing support strengthen operational maturity." },
      ]}
    />
  );
}
