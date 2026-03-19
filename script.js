const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("primaryNav");
const navDropdowns = document.querySelectorAll(".nav-dropdown");
const navDropdownToggles = document.querySelectorAll(".nav-dropdown__toggle");
const desktopNavMedia = window.matchMedia("(min-width: 1024px)");

const setNavState = (open) => {
  const expanded = open ? "true" : "false";
  navToggle.setAttribute("aria-expanded", expanded);
  nav.classList.toggle("open", open);
};

const setDropdownState = (dropdown, open) => {
  const toggle = dropdown.querySelector(".nav-dropdown__toggle");
  dropdown.classList.toggle("open", open);
  toggle?.setAttribute("aria-expanded", open ? "true" : "false");
};

const closeAllDropdowns = () => {
  navDropdowns.forEach((dropdown) => setDropdownState(dropdown, false));
};

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setNavState(!isOpen);
});

// Close mobile nav on outside click
window.addEventListener("click", (event) => {
  if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
    setNavState(false);
    closeAllDropdowns();
  }
});

// Close on escape
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setNavState(false);
    closeAllDropdowns();
  }
});

// Close mobile menu when a nav link is clicked (mobile)
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setNavState(false);
  });
});

// Dropdown behavior for mobile / touch
navDropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    if (desktopNavMedia.matches) {
      return;
    }

    event.preventDefault();
    const parent = toggle.closest(".nav-dropdown");
    const isOpen = parent.classList.contains("open");

    closeAllDropdowns();
    setDropdownState(parent, !isOpen);
  });
});

navDropdowns.forEach((dropdown) => {
  dropdown.addEventListener("mouseenter", () => {
    if (!desktopNavMedia.matches) {
      return;
    }

    closeAllDropdowns();
    setDropdownState(dropdown, true);
  });

  dropdown.addEventListener("mouseleave", () => {
    if (!desktopNavMedia.matches) {
      return;
    }

    setDropdownState(dropdown, false);
  });

  dropdown.addEventListener("focusin", () => {
    if (!desktopNavMedia.matches) {
      return;
    }

    closeAllDropdowns();
    setDropdownState(dropdown, true);
  });

  dropdown.addEventListener("focusout", (event) => {
    if (!desktopNavMedia.matches) {
      return;
    }

    if (!dropdown.contains(event.relatedTarget)) {
      setDropdownState(dropdown, false);
    }
  });
});

// Highlight the active nav link
const currentPath = window.location.pathname.split("/").pop() || "index.html";
navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPath) {
    link.classList.add("active");
  }
});

// Highlight parent dropdown when child is active
const dropdownLinks = document.querySelectorAll(".dropdown-link");
dropdownLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPath) {
    const parentToggle = link.closest(".nav-dropdown")?.querySelector(".nav-dropdown__toggle");
    parentToggle?.classList.add("active");
  }
});

// Tab interactions (services page)
const tabs = document.querySelectorAll(".tab");
const tabPanels = document.querySelectorAll(".tab-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    tabs.forEach((t) => {
      t.classList.toggle("active", t === tab);
      t.setAttribute("aria-selected", t === tab ? "true" : "false");
    });

    tabPanels.forEach((panel) => {
      const match = panel.dataset.panel === target;
      panel.classList.toggle("active", match);
    });
  });
});

// Update year automatically
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
