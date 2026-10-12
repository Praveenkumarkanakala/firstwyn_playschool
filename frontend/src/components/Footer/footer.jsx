import React, { useState } from "react";
import "./footer.css";
import logo from "../Navbar/Playschool Logo.png";

const quickLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Programs", href: "/#programs" },
  { label: "Admissions", href: "/#admissions" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact Us", href: "/#contact" },
];

const parentLinks = [
  { label: "Enrollment", href: "/#admissions" },
  { label: "Daily Schedule", href: "/schedule" },
  { label: "Meals & Nutrition", href: "/meals" },
  { label: "FAQ", href: "/faq" },
  { label: "Parent Portal", href: "/parent-login" },
];

const PHONE_DISPLAY = "+91 98765 43210";
const PHONE_HREF = "tel:+919876543210";
const EMAIL = "info@firstwyn.com";
const ADDRESS_LINES = ["123 Learning Lane,", "Green Valley,", "Bengaluru 560001"];
const HOURS = "Mon - Fri: 8:30 AM - 6:30 PM";
const EMAIL_RE = /^\S+@\S+\.\S+$/;

/* ---------- small inline icons ---------- */
const Icon = ({ children }) => (
  <svg className="fw-i" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const PhoneIcon = () => (
  <Icon>
    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z" />
  </Icon>
);
const MailIcon = () => (
  <Icon>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </Icon>
);
const PinIcon = () => (
  <Icon>
    <path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Icon>
);
const ClockIcon = () => (
  <Icon>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon>
);
const CalendarIcon = () => (
  <Icon>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 10h18" />
  </Icon>
);
const ArrowUpIcon = () => (
  <Icon>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </Icon>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | error | success

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      return;
    }
    // TODO: send `email` to your backend / mailing service here
    setStatus("success");
    setEmail("");
  };

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="fw-footer" id="contact">
      {/* ================= CTA CARD ================= */}
      <section className="fw-cta" id="enquire" aria-labelledby="fw-cta-title">
        <div className="fw-cta-card">
          <svg className="fw-cta-plane" viewBox="0 0 120 70" aria-hidden="true">
            <path d="M2 62q30-6 46-26" fill="none" stroke="#f7c52b" strokeWidth="2" strokeDasharray="4 5" strokeLinecap="round" />
            <path d="M112 6L52 28l20 7 7 17 9-13z" fill="none" stroke="#f7c52b" strokeWidth="3" strokeLinejoin="round" />
          </svg>
          <svg className="fw-cta-cloud" viewBox="0 0 120 60" aria-hidden="true">
            <path d="M26 52a16 16 0 010-32 22 22 0 0142-6 18 18 0 0120 18 14 14 0 01-2 20z" fill="none" stroke="#5bb5ff" strokeWidth="2.5" strokeLinejoin="round" />
          </svg>

          <div className="fw-cta-inner">
            <div className="fw-cta-left">
              <span className="fw-cta-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0b2a63" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" />
                  <path d="M3 8l9 6 9-6" />
                </svg>
              </span>
              <div>
                <h2 className="fw-cta-title" id="fw-cta-title">Ready to Get Started?</h2>
                <p className="fw-cta-sub">
                  Schedule a call today and see why families love First WYN.
                </p>
              </div>
            </div>

            <div className="fw-cta-actions">
              {/* TODO: swap this mailto for your booking page / form when you have one */}
              <a href={`mailto:${EMAIL}?subject=Schedule%20a%20call`} className="fw-btn fw-btn-yellow">
                <CalendarIcon />
                Schedule a Call
              </a>
              <a href={PHONE_HREF} className="fw-btn fw-btn-outline">
                <PhoneIcon />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN FOOTER ================= */}
      <div className="fw-main">
        <div className="fw-grid">
          {/* Brand */}
          <div className="fw-col fw-brand">
            <a href="/#home" className="fw-logo" aria-label="First WYN Global Play School home">
              <img src={logo} alt="First WYN Global Play School" loading="lazy" />
            </a>
            <p className="fw-brand-text">
              A safe, nurturing and fun environment where children learn, grow
              and shine every day.
            </p>
            <div className="fw-social">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer noopener" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8V6.5c0-.7.3-1 1-1h2V2h-3a4 4 0 00-4 4.2V8H7.5v3.5H10V22h4V11.5h2.7L17 8z" /></svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="4" y="4" width="16" height="16" rx="4.5" />
                  <circle cx="12" cy="12" r="3.6" />
                  <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer noopener" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 001.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3a1.97 1.97 0 100 3.94 1.97 1.97 0 000-3.94zM20.44 13.4c0-3.1-1.65-4.55-3.85-4.55a3.32 3.32 0 00-3 1.65V8.5h-3.37V20h3.37v-6.4c0-1.7.8-2.7 2.1-2.7s1.9.95 1.9 2.7V20h3.37v-6.6z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="fw-col fw-quick" aria-label="Quick links">
            <h3 className="fw-heading">Quick Links</h3>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </nav>

          {/* Parent Resources */}
          <nav className="fw-col fw-parent" aria-label="Parent resources">
            <h3 className="fw-heading">Parent Resources</h3>
            <ul>
              {parentLinks.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="fw-col fw-contactcol">
            <h3 className="fw-heading">Contact Us</h3>
            <ul className="fw-contact">
              <li>
                <PinIcon />
                <address>
                  {ADDRESS_LINES.map((line, i) => (
                    <React.Fragment key={line}>
                      {line}
                      {i < ADDRESS_LINES.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </address>
              </li>
              <li>
                <PhoneIcon />
                <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              </li>
              <li>
                <MailIcon />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <ClockIcon />
                <span>{HOURS}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="fw-col fw-news">
            <h3 className="fw-heading">Newsletter</h3>
            <p className="fw-news-text">Stay updated with news and upcoming events.</p>
            <form className="fw-news-form" onSubmit={handleSubscribe} noValidate>
              <label htmlFor="fw-email" className="fw-sr">Email address</label>
              <input
                id="fw-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={email}
                aria-invalid={status === "error"}
                aria-describedby="fw-news-msg"
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
              />
              <button type="submit">Subscribe</button>
            </form>
            <p
              id="fw-news-msg"
              className={`fw-news-msg ${status === "error" ? "is-error" : ""} ${status === "success" ? "is-ok" : ""}`}
              role="status"
              aria-live="polite"
            >
              {status === "error" && "Enter a valid email, like name@example.com."}
              {status === "success" && "Thanks! You're subscribed."}
            </p>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR (full-width dark blue) ================= */}
      <div className="fw-bottom-wrap">
        <div className="fw-bottom">
          <p>© {new Date().getFullYear()} First WYN Global Play School. All rights reserved.</p>
          <div className="fw-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <span aria-hidden="true" className="fw-sep" />
            <a href="/terms">Terms of Use</a>
            <button type="button" className="fw-top" onClick={toTop} aria-label="Back to top">
              <ArrowUpIcon />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;