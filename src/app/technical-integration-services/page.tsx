import ServiceDetailPage from "@/components/ServiceDetailPage";

export default function TechnicalIntegrationServicesPage() {
  return (
    <ServiceDetailPage
      eyebrow="Technical & Integration Services"
      title="Build secure integration foundations that scale with enterprise change."
      lead="DigX helps complex organizations modernize legacy estates, improve release confidence, and strengthen cloud and data integration capability with practical engineering execution."
      chips={["Integration architecture", "CI/CD and automation", "Security and compliance", "Azure cloud services"]}
      ctaLabel="Book a technical discovery call"
      overviewTitle="What this service solves"
      overviewLead="Technical integration and engineering support built for reliability, speed, and long-term control."
      overviewParagraphs={[
        "In high-complexity programmes, technical bottlenecks often slow transformation. DigX removes those bottlenecks through integration architecture, release automation, and platform engineering disciplines designed for enterprise control.",
        "Whether you are modernizing Dynamics estates, connecting cloud platforms, or improving data flow, we shape solutions around measurable outcomes and practical handover to your internal teams.",
      ]}
      reasonTitle="Why teams choose DigX"
      reasonLead="Senior technical capability paired with delivery leadership for complex enterprise programmes."
      reasonCards={[
        { title: "Data and integration discipline", body: "Scalable pipelines and robust interface patterns support analytics, operations, and control." },
        { title: "Integrated DevOps and SRE", body: "Release automation, observability, and proactive risk controls improve platform stability." },
        { title: "Azure and cloud expertise", body: "Secure cloud migration, hybrid architecture, APIM design, and Azure DevOps enablement." },
        { title: "CRM and platform integration", body: "Dynamics 365 and ecosystem integrations that improve customer insight and service operations." },
        { title: "Dynamics modernization", body: "Structured migration from AX 2012 to Dynamics 365 Finance and Operations with lower risk." },
        { title: "R&D-led advancement", body: "Innovation programs such as DataFog improve productivity, compliance, and delivery quality." },
      ]}
      stepsLead="A clear operating path from architecture decisions to sustained technical performance."
      steps={[
        { title: "Assess and architect", body: "Define integration patterns, cloud architecture, and compliance controls for your context." },
        { title: "Automate and implement", body: "Deploy CI/CD, observability, and infrastructure automation to improve release reliability." },
        { title: "Optimize and scale", body: "Continuously refine performance, cost, and governance as delivery needs evolve." },
      ]}
      supportTitle="Strategic support and outcomes"
      supportLead="Technical partnership that sustains transformation value beyond implementation."
      proofs={[
        { metric: "Secure", title: "Compliance confidence", body: "Security and regulatory guardrails are integrated directly into engineering workflows." },
        { metric: "Faster", title: "Innovation cadence", body: "Automation and CI/CD increase release speed while reducing operational risk." },
        { metric: "Scalable", title: "Future-ready foundations", body: "Cloud-native architecture and data strategy support long-term growth." },
      ]}
    />
  );
}
