export type CareerMetric = {
  value: string;
  label: string;
};

export type RoleTrack = {
  title: string;
  summary: string;
};

export type HiringStep = {
  number: string;
  title: string;
  summary: string;
};

export const careerMetrics: CareerMetric[] = [
  { value: "4", label: "Role tracks" },
  { value: "3-step", label: "Hiring flow" },
  { value: "1 team", label: "Shared ownership" },
  { value: "Real", label: "Growth pathways" },
];

export const roleTracks: RoleTrack[] = [
  {
    title: "Platform and Integration Engineers",
    summary: "Build resilient integration pathways, delivery automation, and operational guardrails.",
  },
  {
    title: "Managed Service Specialists",
    summary: "Run high-quality support operations with strong incident and release discipline.",
  },
  {
    title: "Transformation Consultants",
    summary: "Translate business priorities into practical roadmaps and technical delivery plans.",
  },
  {
    title: "Delivery and Programme Leads",
    summary: "Guide multi-team programmes with governance, risk ownership, and execution momentum.",
  },
];

export const hiringSteps: HiringStep[] = [
  {
    number: "01",
    title: "Intro conversation",
    summary: "Discuss your background, interests, and impact areas you enjoy.",
  },
  {
    number: "02",
    title: "Practical discussion",
    summary: "Role-specific conversation focused on judgment and real delivery trade-offs.",
  },
  {
    number: "03",
    title: "Mutual fit",
    summary: "Align on scope, expectations, growth direction, and working style.",
  },
];
