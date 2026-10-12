import { useState, useEffect, useRef, useCallback } from "react";
import "./navbar.css";
import logo from "./Playschool Logo.png";

/* `ids` = page sections that highlight this link while you scroll */
const links = [
  { label: "Home", href: "/", ids: ["home"] },
  {
    label: "About",
    href: "#about",
    ids: ["about", "philosophy"],
    children: [
      { label: "Our Story", href: "#about" },
      { label: "Our Team", href: "#team" },
      { label: "Our Philosophy", href: "#philosophy" },
    ],
  },
  { label: "Programs", href: "#programs", ids: ["programs", "experience", "facilities"] },
  { label: "Admissions", href: "#admissions", ids: ["admissions"] },
  { label: "Gallery", href: "#gallery", ids: ["gallery"] },
  { label: "Blog", href: "#blog", ids: ["blog"] },
  { label: "Contact", href: "#contact", ids: ["contact"] },
];

const SECTION_IDS = links.flatMap((l) => l.ids);

/* must match the burger breakpoint in navbar.css */
const MOBILE_QUERY = "(max-width: 1100px)";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const wrapRef = useRef(null);

  const closeAll = useCallback(() => {
    setOpen(false);
    setDropdown(false);
  }, []);

  // lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // shrink the navbar slightly once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight the link of the section currently on screen
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return undefined;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id)),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Escape, click outside, or resizing to desktop closes the menus
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeAll();
    const onPointer = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) closeAll();
    };
    const mq = window.matchMedia(MOBILE_QUERY);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    mq.addEventListener("change", closeAll);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      mq.removeEventListener("change", closeAll);
    };
  }, [closeAll]);

  const isActive = (l) => l.ids.includes(activeId);

  return (
    <header ref={wrapRef} className={`lk-nav-wrap ${scrolled ? "is-scrolled" : ""}`}>
      <div className={`lk-nav__backdrop ${open ? "is-open" : ""}`} aria-hidden="true" onClick={closeAll} />

      <nav className="lk-nav" aria-label="Main navigation">
        <a href="/" className="lk-nav__logo" onClick={closeAll}>
          <img src={logo} alt="First WYN Global Play School" />
        </a>

        <ul id="lk-menu" className={`lk-nav__links ${open ? "is-open" : ""}`}>
          {links.map((l, i) =>
            l.children ? (
              <li
                key={l.label}
                style={{ "--i": i }}
                className={`lk-nav__item lk-nav__item--dd ${dropdown ? "dd-open" : ""}`}
                onMouseLeave={() => setDropdown(false)}
              >
                <button
                  type="button"
                  className={`lk-nav__link ${isActive(l) ? "active" : ""}`}
                  aria-expanded={dropdown}
                  aria-haspopup="true"
                  onClick={() => setDropdown((d) => !d)}
                >
                  {l.label}
                  <svg className="lk-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <ul className="lk-dropdown">
                  {l.children.map((c) => (
                    <li key={c.label}>
                      <a href={c.href} onClick={closeAll}>{c.label}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={l.label} style={{ "--i": i }} className="lk-nav__item">
                <a
                  href={l.href}
                  className={`lk-nav__link ${isActive(l) ? "active" : ""}`}
                  aria-current={isActive(l) ? "location" : undefined}
                  onClick={closeAll}
                >
                  {l.label}
                </a>
              </li>
            )
          )}
          <li style={{ "--i": links.length }} className="lk-nav__item lk-nav__cta-mobile">
            <a href="#enquire" className="lk-btn" onClick={closeAll}>
              Enquire Now <ArrowIcon />
            </a>
          </li>
        </ul>

        <a href="#enquire" className="lk-btn lk-nav__cta">
          Enquire Now <ArrowIcon />
        </a>

        <button
          type="button"
          className={`lk-burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="lk-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  );
}

export function ArrowIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="13 5 20 12 13 19" />
    </svg>
  );
}