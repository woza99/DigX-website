"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { CareersContent } from "@/content/careers";

type CareersContentSectionsProps = {
  initialContent: CareersContent;
};

function isValidCareersContent(data: unknown): data is CareersContent {
  if (!data || typeof data !== "object") {
    return false;
  }

  const candidate = data as Partial<CareersContent>;

  if (!Array.isArray(candidate.careerMetrics) || !Array.isArray(candidate.roleTracks) || !Array.isArray(candidate.hiringSteps)) {
    return false;
  }

  return true;
}

export default function CareersContentSections({ initialContent }: CareersContentSectionsProps) {
  const [content, setContent] = useState<CareersContent>(initialContent);

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_CAREERS_DATA_URL;

    if (!url) {
      return;
    }

    let isActive = true;

    fetch(url, { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : null))
      .then((json) => {
        if (!isActive || !isValidCareersContent(json)) {
          return;
        }

        setContent(json);
      })
      .catch(() => {
        // Keep static fallback content if remote source is unavailable.
      });

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <>
      <section className="section careers-hero" id="top-of-careers">
        <div className="container careers-hero-shell">
          <div className="careers-hero-main">
            <p className="careers-kicker">Careers at DigX</p>
            <h1 className="careers-headline">Build meaningful digital change with people who care about craft and outcomes.</h1>
            <p className="careers-subtitle">You will work on complex programmes in a high-trust, delivery-first environment with clear ownership and room to grow.</p>
            <div className="careers-quicklinks">
              <a className="btn btn-secondary" href="#open-role-tracks">Open role tracks</a>
              <a className="btn btn-secondary" href="#hiring-journey">Hiring journey</a>
              <Link className="btn btn-primary" href="/contact">Introduce yourself</Link>
            </div>
          </div>

          <aside className="careers-hero-panel">
            <h2 className="careers-panel-title">Career snapshot</h2>
            <div className="careers-metric-grid">
              {content.careerMetrics.map((metric) => (
                <article className="careers-metric" key={metric.label}>
                  <p className="careers-metric__value">{metric.value}</p>
                  <p className="careers-metric__label">{metric.label}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-muted" id="open-role-tracks">
        <div className="container">
          <header className="section-header"><h2>Open role tracks</h2><p>We hire across engineering, operations, consulting, and programme delivery.</p></header>
          <div className="careers-role-grid">
            {content.roleTracks.map((track) => (
              <article className="careers-role-card" key={track.title}>
                <h3>{track.title}</h3>
                <p>{track.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="hiring-journey">
        <div className="container">
          <header className="section-header"><h2>Hiring journey</h2><p>Simple, practical, and respectful of your time.</p></header>
          <div className="careers-process-grid">
            {content.hiringSteps.map((step) => (
              <article className="careers-process-step" key={step.number}>
                <p className="careers-process-step__number">{step.number}</p>
                <h3>{step.title}</h3>
                <p>{step.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
