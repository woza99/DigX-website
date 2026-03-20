"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type ServiceLink = {
  href: string;
  label: string;
};

type AboutLink = {
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

const aboutLinks: AboutLink[] = [
  { href: "/meet-our-people", label: "Meet Our People" },
  { href: "/about", label: "About Us" },
];

const navLinks: NavLink[] = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/partners", label: "Partners" },
  { href: "/industries", label: "Industries" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const basePath = process.env.NODE_ENV === "production" ? "/DigX-website" : "";

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isAboutActive = useMemo(
    () => pathname.startsWith("/about") || pathname.startsWith("/meet-our-people"),
    [pathname],
  );

  const isServicesActive = useMemo(
    () => pathname.startsWith("/services") || serviceLinks.some((link) => link.href !== "/services" && pathname.startsWith(link.href)),
    [pathname],
  );

  const closeMenus = () => {
    setMobileOpen(false);
    setAboutOpen(false);
    setServicesOpen(false);
  };

  const toggleAboutMenu = () => {
    if (mobileOpen) {
      setAboutOpen((prev) => !prev);
    }
  };

  const toggleServicesMenu = () => {
    if (mobileOpen) {
      setServicesOpen((prev) => !prev);
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className="site-header" id="top">
        <div className="container header-inner">
          <Link className="brand" href="/" onClick={closeMenus}>
            <Image src={basePath + "/whitelogo.png"} alt="DigX Logo" width={190} height={58} priority />
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
              <li
                className={`nav-item nav-dropdown${aboutOpen ? " open" : ""}`}
                onMouseEnter={() => !mobileOpen && setAboutOpen(true)}
                onMouseLeave={() => !mobileOpen && setAboutOpen(false)}
              >
                <button
                  className={`nav-dropdown__toggle${isAboutActive ? " active" : ""}`}
                  aria-haspopup="true"
                  aria-expanded={aboutOpen ? "true" : "false"}
                  onClick={toggleAboutMenu}
                  type="button"
                >
                  About Us
                  <span className="dropdown-icon" aria-hidden="true">▾</span>
                </button>
                <ul className="dropdown-menu">
                  <li className="dropdown-header">About DigX</li>
                  {aboutLinks.map((link) => (
                    <li key={link.href}>
                      <Link className="dropdown-link" href={link.href} onClick={closeMenus}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li
                className={`nav-item nav-dropdown${servicesOpen ? " open" : ""}`}
                onMouseEnter={() => !mobileOpen && setServicesOpen(true)}
                onMouseLeave={() => !mobileOpen && setServicesOpen(false)}
              >
                <button
                  className={`nav-dropdown__toggle${isServicesActive ? " active" : ""}`}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen ? "true" : "false"}
                  onClick={toggleServicesMenu}
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
    </>
  );
}
