"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type ServiceLink = {
  href: string;
  label: string;
};

type NavLink = {
  href: string;
  label: string;
};

const serviceLinks: ServiceLink[] = [
  { href: "/enterprise-digital-change", label: "Enterprise Digital Change" },
  { href: "/managed-services", label: "Managed Services" },
  { href: "/technical-integration-services", label: "Technical & Integration Services" },
  { href: "/collaborative-project-delivery", label: "Collaborative Project Delivery" },
  { href: "/services", label: "See all services" },
];

const navLinks: NavLink[] = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/partners", label: "Partners" },
  { href: "/industries", label: "Industries" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isServicesActive = useMemo(
    () => pathname.startsWith("/services") || serviceLinks.some((link) => link.href !== "/services" && pathname.startsWith(link.href)),
    [pathname],
  );

  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <Link className="brand" href="/" onClick={closeMenus}>
          <Image src="/whitelogo.png" alt="DigX Logo" width={190} height={58} priority />
        </Link>

        <button
          className="nav-toggle"
          aria-controls="primaryNav"
          aria-expanded={mobileOpen ? "true" : "false"}
          onClick={() => setMobileOpen((prev) => !prev)}
          type="button"
        >
          <span className="sr-only">Open navigation</span>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav className={`nav${mobileOpen ? " open" : ""}`} id="primaryNav" aria-label="Primary">
          <ul className="nav-list">
            <li>
              <Link className={`nav-link${pathname === "/about" ? " active" : ""}`} href="/about" onClick={closeMenus}>
                About Us
              </Link>
            </li>
            <li className={`nav-item nav-dropdown${servicesOpen ? " open" : ""}`}>
              <button
                className={`nav-dropdown__toggle${isServicesActive ? " active" : ""}`}
                aria-haspopup="true"
                aria-expanded={servicesOpen ? "true" : "false"}
                onClick={() => setServicesOpen((prev) => !prev)}
                type="button"
              >
                Services
                <span className="dropdown-icon" aria-hidden="true">▾</span>
              </button>
              <ul className="dropdown-menu">
                <li className="dropdown-header">Our services</li>
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link className="dropdown-link" href={link.href} onClick={closeMenus}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className={`nav-link${pathname === link.href ? " active" : ""}`}
                  href={link.href}
                  onClick={closeMenus}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link className="btn btn-primary" href="/contact" onClick={closeMenus}>Work together</Link>
        </nav>
      </div>
    </header>
  );
}
