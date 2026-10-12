import { useRef, useState } from "react";
import "./landing.css";
import Navbar, { ArrowIcon } from "../Navbar/navbar";


import heroKids from "./image.png";
import heroVideo from "./firstwyn video.mp4"; 
import aboutCenter from "../Images/about-center.jpg";

import jnyPlaygroup from "../Images/jny-playgroup.jpg";
import jnyNursery from "../Images/jny-nursery.jpg";
import jnyLkg from "../Images/jny-lkg.jpg";
import jnyUkg from "../Images/jny-ukg.jpg";
import jnyGrade1 from "../Images/jny-grade1.jpg";
import jnyGrade2 from "../Images/jny-grade2.jpg";

import philosophyChild from "../Images/philosophy-child.png";
import experienceChild from "../Images/experience-child.png";
import facilitiesRoom from "../Images/facilities-room.png";

/* ---------- About section ---------- */
const sw = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}>
      <path d="M12 20.5C6 16.5 3 13.3 3 9.6 3 7 5 5.2 7.3 5.2c1.9 0 3.5 1 4.7 2.8 1.2-1.8 2.8-2.8 4.7-2.8C19 5.2 21 7 21 9.6c0 3.7-3 6.9-9 10.9z" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}>
      <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />
    </svg>
  );
}
function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}>
      <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6z" />
      <path d="M8.5 12l2.5 2.5L15.5 10" />
    </svg>
  );
}


const siteStats = [
  { Icon: TeamIcon, color: "#f2a81d", num: "1000+", label: "Happy Children" },
  { Icon: CapIcon, color: "#14295f", num: "10+", label: "Years of Excellence" },
  { Icon: ShieldCheckIcon, color: "#2fa58c", num: "100%", label: "Safety Focused" },
  { Icon: HeartIcon, color: "#ef3f5a", num: "1 Big", label: "Family" },
];

const aboutCards = [
  { tone: "pink", Icon: HeartIcon, title: "Experienced Educators",
    lines: ["Our qualified and caring teachers", "nurture every child’s unique potential."] },
  { tone: "mint", Icon: ShieldCheckIcon, title: "Safe & Secure Environment",
    lines: ["Child safety is our top priority,", "with round-the-clock care and monitoring."] },
  { tone: "lilac", Icon: BulbIcon, title: "Holistic Development",
    lines: ["We focus on emotional, social,", "physical and intellectual growth."] },
  { tone: "sky", Icon: TeamIcon, title: "Play-Based Learning",
    lines: ["Learning through play makes", "education joyful and effective."] },
  { tone: "peach", Icon: SproutIcon, title: "A Brighter Future",
    lines: ["We prepare children not just for school,", "but for life."] },
];

/* ---------- Learning journey icons ---------- */
const line = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function SproutIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line}>
      <path d="M12 21v-9" />
      <path d="M12 13c0-4-3-7-8-7 0 4 3 7 8 7z" />
      <path d="M12 15c0-3 2-6 7-6 0 3-2 6-7 6z" />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line}>
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...line}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/* ---------- Learning journey ---------- */
function FaceIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}>
      <circle cx="12" cy="13.5" r="7" />
      <circle cx="6" cy="6.5" r="2.2" />
      <circle cx="18" cy="6.5" r="2.2" />
      <path d="M9 15c1 1.5 5 1.5 6 0" />
      <path d="M9.5 12h.01M14.5 12h.01" />
    </svg>
  );
}
function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}>
      <path d="M12 6.5C10 5 7 4.6 3.5 5v13c3.5-.4 6.5 0 8.5 1.5 2-1.5 5-1.9 8.5-1.5V5c-3.5-.4-6.5 0-8.5 1.5zM12 6.5v13" />
    </svg>
  );
}
function CapIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}>
      <path d="M2 9l10-5 10 5-10 5z" />
      <path d="M6 11.5v4.5c0 1.5 3 3 6 3s6-1.5 6-3v-4.5M22 9v6" />
    </svg>
  );
}
function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
      <path d="M12 12l8-8M17 3.5V7h3.5" />
    </svg>
  );
}
function CheckDot() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <polyline points="7 12.5 10.5 16 17 9" fill="none" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const stages = [
  { tone: "rose", img: jnyPlaygroup, Icon: FaceIcon, name: "Playgroup", age: "Age 2 – 3",
    title: "Explore & Discover",
    lines: ["Building social skills, curiosity", "and confidence through play."],
    items: ["Sensory Play", "Basic Communication", "Social Interaction"] },
  { tone: "green", img: jnyNursery, Icon: SproutIcon, name: "Nursery", age: "Age 3 – 4",
    title: "Learn & Build",
    lines: ["Developing early concepts", "and independence through", "fun activities."],
    items: ["Early Literacy & Numeracy", "Creative Expression", "Motor Skills"] },
  { tone: "blue", img: jnyLkg, Icon: BookIcon, name: "LKG", age: "Age 4 – 5",
    title: "Explore & Express",
    lines: ["Strengthening foundation", "skills with structured and", "interactive learning."],
    items: ["Phonics & Language", "Problem Solving", "Art & Music"] },
  { tone: "orange", img: jnyUkg, Icon: StarIcon, name: "UKG", age: "Age 5 – 6",
    title: "Grow & Achieve",
    lines: ["Preparing for school life", "with focus, discipline and", "self-belief."],
    items: ["Reading & Writing", "Logical Thinking", "Leadership Skills"] },
  { tone: "purple", img: jnyGrade1, Icon: CapIcon, name: "Grade 1", age: "Age 6 – 7",
    title: "Think & Create",
    lines: ["Encouraging independence,", "creativity and a love for", "learning."],
    items: ["Advanced Literacy", "STEM Exploration", "Confidence Building"] },
  { tone: "teal", img: jnyGrade2, Icon: TargetIcon, name: "Grade 2", age: "Age 7 – 8",
    title: "Be Future Ready",
    lines: ["Shaping curious, kind and", "capable learners for", "tomorrow’s world."],
    items: ["Critical Thinking", "Technology & Innovation", "Personal Growth"] },
];

/* ---------- Learning philosophy ---------- */
function RunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}>
      <circle cx="15.5" cy="4.5" r="2" />
      <path d="M9 21l2.5-5 3 1.5 1.5-4.5-3.5-2-3 3-2.5-1M12.5 9.5l3 1.8 3 .2M11.5 16l-.5 5" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5L21 21M7.5 9.5a3.5 3.5 0 0 1 3-2.5" />
    </svg>
  );
}
function PaletteIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}>
      <path d="M12 3C6.5 3 3 7 3 11.5S6.5 20 11 20c1.6 0 2-1 1.5-2-.6-1.2.2-2.5 1.6-2.5H17c2.2 0 4-1.6 4-4C21 6.6 17 3 12 3z" />
      <circle cx="7.8" cy="11" r="1" />
      <circle cx="10.5" cy="7.5" r="1" />
      <circle cx="15" cy="7.8" r="1" />
    </svg>
  );
}
function DashArrow() {
  return (
    <svg viewBox="0 0 60 12" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 6h8M15 6h8M28 6h8M41 6h15" />
      <path d="M52 2l5 4-5 4" />
    </svg>
  );
}

const philosophy = [
  { tone: "orange", Icon: RunIcon, name: "Play", sub: "Build curiosity" },
  { tone: "green", Icon: SearchIcon, name: "Explore", sub: "Ask questions" },
  { tone: "blue", Icon: BulbIcon, name: "Discover", sub: "Find solutions" },
  { tone: "purple", Icon: PaletteIcon, name: "Create", sub: "Express ideas" },
  { tone: "pink", Icon: SproutIcon, name: "Grow", sub: "Achieve dreams" },
];

/* ---------- What children experience ---------- */
function AtomIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}>
      <circle cx="12" cy="12" r="1.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
    </svg>
  );
}
function MusicIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}>
      <path d="M9 18V5l11-2v13" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="17.5" cy="16" r="2.5" />
    </svg>
  );
}
function ExpBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}>
      <path d="M12 12C9.500 6 4 6 4 10c0 3 3.500 3.500 8 2zM12 12c2.500-6 8-6 8-2 0 3-3.500 3.500-8 2zM12 12c-2 2.500-2 5.500 0 8 2-2.500 2-5.500 0-8z" />
    </svg>
  );
}

const experiences = [
  { tone: "white", ic: "pink", Icon: PaletteIcon, title: "Creative Arts & Craft", sub: "Imagine • Create • Express" },
  { tone: "mint", ic: "green", Icon: RunIcon, title: "Outdoor Play & Sports", sub: "Active Bodies • Healthy Minds" },
  { tone: "sky", ic: "blue", Icon: AtomIcon, title: "STEM Discovery", sub: "Think • Build • Innovate" },
  { tone: "lilac", ic: "violet", Icon: BookIcon, title: "Story Time & Language", sub: "Better Words • Brighter Futures" },
  { tone: "lilac", ic: "purple", Icon: MusicIcon, title: "Music & Movement", sub: "Move • Groove • Be Happy" },
  { tone: "rose", ic: "red", Icon: HeartIcon, title: "Social & Emotional Growth", sub: "Kind Hearts • Confident Minds" },
];

/* ---------- Learning environment (facilities) ---------- */
function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}>
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <rect x="6" y="7.5" width="12" height="6" rx="1" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}
function GateHouseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}>
      <path d="M2.5 10.5L12 3l9.500 7.500M5 9v12M19 9v12M9 21v-7a3 3 0 0 1 6 0v7M3 21h18" />
    </svg>
  );
}
function TreesIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}>
      <ellipse cx="7" cy="8.500" rx="3.800" ry="5.500" />
      <path d="M7 14v7" />
      <ellipse cx="17" cy="11.500" rx="3.800" ry="5.500" />
      <path d="M17 17v4" />
    </svg>
  );
}
function BrushIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}>
      <path d="M20.500 3.500c-5 2.500-9 6.500-11 11l3 3c4.500-2 8.500-6 11-11z" />
      <path d="M9.500 14.500c-3 0-5 2-5 5.500 3.500 0 5.500-2 5.500-5" />
    </svg>
  );
}
function DiningIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}>
      <path d="M5 3v6a2 2 0 0 0 4 0V3M7 3v18" />
      <path d="M17 3c-2.500 2-2.500 8 0 10v8M17 3v10" />
    </svg>
  );
}
function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}>
      <path d="M3 13.500L5.200 7.500A2 2 0 0 1 7 6h10a2 2 0 0 1 1.800 1.500L21 13.500V19H3z" />
      <path d="M3 13.500h18M7.500 16.500h.01M16.500 16.500h.01M5 19v2M19 19v2" />
    </svg>
  );
}

const facilities = [
  { tone: "white", color: "#1f5fd8", Icon: MonitorIcon, label: "Smart Classrooms" },
  { tone: "white", color: "#1c9a4a", Icon: PaletteIcon, label: "Activity Rooms" },
  { tone: "white", color: "#ee3f66", Icon: GateHouseIcon, label: "Indoor Play Area" },
  { tone: "white", color: "#1c9a4a", Icon: TreesIcon, label: "Outdoor Play Area" },
  { tone: "white", color: "#1f5fd8", Icon: BookIcon, label: "Reading Corner" },
  { tone: "sky", color: "#1f7de8", Icon: AtomIcon, label: "STEM & Discovery Zone" },
  { tone: "sky", color: "#1f5fd8", Icon: BrushIcon, label: "Art & Creative Zone" },
  { tone: "white", color: "#f59e1b", Icon: DiningIcon, label: "Child-Friendly Dining" },
  { tone: "sky", color: "#ee4f7a", Icon: CarIcon, label: "Safe Pick-up & Drop-off" },
];

/* ---------- Hero video player ---------- */
const vi = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
const PlayGlyph = () => (<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l13-7.5z" fill="currentColor" /></svg>);
const PauseGlyph = () => (<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h3.5v16H7zM13.500 4H17v16h-3.500z" fill="currentColor" /></svg>);
const VolGlyph = () => (<svg viewBox="0 0 24 24" aria-hidden="true" {...vi}><path d="M4 9.500v5h4l5 4v-13l-5 4z" fill="currentColor" /><path d="M16.500 8.500a5 5 0 0 1 0 7M19 6a8.500 8.500 0 0 1 0 12" /></svg>);
const MuteGlyph = () => (<svg viewBox="0 0 24 24" aria-hidden="true" {...vi}><path d="M4 9.500v5h4l5 4v-13l-5 4z" fill="currentColor" /><path d="M17 9.500l5 5M22 9.500l-5 5" /></svg>);
const GearGlyph = () => (<svg viewBox="0 0 24 24" aria-hidden="true" {...vi}><circle cx="12" cy="12" r="3" /><path d="M12 2.500l1.600 2.300 2.700-.6.900 2.600 2.600.9-.6 2.700 2.300 1.600-2.300 1.600.6 2.700-2.600.9-.9 2.600-2.700-.6L12 21.500l-1.600-2.300-2.700.6-.9-2.600-2.600-.9.600-2.700L2.500 12l2.300-1.600-.6-2.700 2.600-.9.900-2.600 2.700.6z" /></svg>);
const FullGlyph = () => (<svg viewBox="0 0 24 24" aria-hidden="true" {...vi}><path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" /></svg>);

const fmt = (t) => {
  if (!isFinite(t)) return "0:00";
  return `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;
};
const SPEEDS = [1, 1.5, 2, 0.5];

function HeroVideo({ src, poster }) {
  const wrap = useRef(null);
  const vid = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [time, setTime] = useState(0);
  const [dur, setDur] = useState(0);
  const [speed, setSpeed] = useState(0);

  const toggle = () => {
    const v = vid.current;
    if (!v) return;
    if (v.paused) v.play(); else v.pause();
  };
  const seek = (e) => {
    vid.current.currentTime = Number(e.target.value);
    setTime(vid.current.currentTime);
  };
  const toggleMute = () => {
    vid.current.muted = !vid.current.muted;
    setMuted(vid.current.muted);
  };
  const cycleSpeed = () => {
    const n = (speed + 1) % SPEEDS.length;
    vid.current.playbackRate = SPEEDS[n];
    setSpeed(n);
  };
  const fullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else wrap.current?.requestFullscreen?.();
  };

  return (
    <div className={`lk-hv${playing ? " is-playing" : ""}`}>
      <div className="lk-hv__frame" ref={wrap}>
        <video
          ref={vid}
          className="lk-hv__video"
          src={src}
          poster={poster}
          playsInline
          preload="metadata"
          onClick={toggle}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
        />

        <button type="button" className="lk-hv__big" onClick={toggle} aria-label="Play video">
          <PlayGlyph />
        </button>

        <div className="lk-hv__bar">
          <button type="button" className="lk-hv__ctl" onClick={toggle} aria-label={playing ? "Pause" : "Play"}>
            {playing ? <PauseGlyph /> : <PlayGlyph />}
          </button>
          <span className="lk-hv__time">{fmt(time)} / {fmt(dur)}</span>
          <input
            className="lk-hv__range"
            type="range" min="0" max={dur || 0} step="0.1" value={time}
            onChange={seek} aria-label="Seek"
            style={{ "--p": `${dur ? (time / dur) * 100 : 0}%` }}
          />
          <button type="button" className="lk-hv__ctl" onClick={toggleMute} aria-label="Mute">
            {muted ? <MuteGlyph /> : <VolGlyph />}
          </button>
          <button type="button" className="lk-hv__ctl" onClick={cycleSpeed} aria-label="Playback speed" title={`Speed ${SPEEDS[speed]}x`}>
            <GearGlyph />
          </button>
          <button type="button" className="lk-hv__ctl" onClick={fullscreen} aria-label="Fullscreen">
            <FullGlyph />
          </button>
        </div>
      </div>

      <button type="button" className="lk-hv__pill" onClick={toggle}>
        <span className="lk-hv__pill-dot"><PlayGlyph /></span>
        Discover the First WYN Experience
      </button>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="lk-page">
      <Navbar />

      {/* ====================== SECTION 1 : HERO (text left, video right) ====================== */}
      <section className="lk-hx" id="home">
        {/* decorations */}
        <span className="lk-hx__blob lk-hx__blob--tr" aria-hidden="true" />
        <span className="lk-hx__blob lk-hx__blob--br" aria-hidden="true" />
        <span className="lk-hx__blob lk-hx__blob--bl" aria-hidden="true" />
        <span className="lk-hx__blob lk-hx__blob--tl" aria-hidden="true" />
        <svg className="lk-hx__leaf lk-hx__leaf--bl" viewBox="0 0 90 110" aria-hidden="true">
          <path fill="#2f9e48" d="M0 40C8 14 34 2 66 8C66 40 40 68 4 82Z" />
          <path fill="#7cc243" d="M10 110C8 78 26 52 56 46C62 76 44 102 10 110Z" />
        </svg>
        <svg className="lk-hx__leaf lk-hx__leaf--chip" viewBox="0 0 60 40" aria-hidden="true">
          <path fill="#f7c531" d="M2 30C6 10 30 2 56 8C52 28 28 40 2 30Z" />
        </svg>

        <div className="lk-hx__inner">
          {/* left : content */}
          <div className="lk-hx__content">
            <span className="lk-hx__badge">
              <SproutIcon /> First WYN Global Play School
            </span>

            <h1 className="lk-hx__title">
              A Joyful Beginning
              <svg className="lk-hx__sun" viewBox="0 0 64 64" aria-hidden="true">
                <g stroke="#f5b81c" strokeWidth="2.6" strokeLinecap="round" fill="none">
                  {[...Array(8)].map((_, i) => (
                    <line key={i} x1="32" y1="4" x2="32" y2="13" transform={`rotate(${i * 45} 32 32)`} />
                  ))}
                  <circle cx="32" cy="32" r="9" />
                </g>
              </svg>
              {" "}<br />
              to <span>Lifelong Learning</span>
              <svg className="lk-hx__under" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 9C50 4 130 2 198 5" fill="none" stroke="#f5b81c" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </h1>

            <p className="lk-hx__text">
              At First WYN Global Play School, we provide a nurturing and inspiring
              environment where children learn through <b>play</b>, <b>explore</b> their{" "}
              <b>potential</b> and grow into confident, kind and future-ready individuals.
            </p>

            <div className="lk-hx__actions">
              <a href="#programs" className="lk-hx__btn lk-hx__btn--solid">
                Explore Our Programs <ArrowIcon />
              </a>
              <a href="#enquire" className="lk-hx__btn lk-hx__btn--ghost">
                <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>
                Admission Enquiry <ArrowIcon />
              </a>
            </div>

            <ul className="lk-hx__stats">
              {siteStats.map(({ Icon, color, num, label }) => (
                <li key={label}>
                  <span className="lk-hx__stat-ic" style={{ color }}><Icon /></span>
                  <strong>{num}</strong>
                  <small>{label}</small>
                </li>
              ))}
            </ul>
          </div>

          {/* right : video (set its path in the heroVideo import at the top of this file) */}
          <HeroVideo src={heroVideo} poster={heroKids} />
        </div>
      </section>

      {/* ====================== SECTION 2 : ABOUT ====================== */}
      <section className="lk-story" id="about">
        <div className="lk-story__stage">
          <svg className="lk-story__leaf lk-story__leaf--l" viewBox="0 0 90 110" aria-hidden="true">
            <path fill="#2f9e48" d="M0 40C8 14 34 2 66 8C66 40 40 68 4 82Z" />
            <path fill="#7cc243" d="M10 110C8 78 26 52 56 46C62 76 44 102 10 110Z" />
          </svg>
          <svg className="lk-story__leaf lk-story__leaf--r" viewBox="0 0 90 110" aria-hidden="true">
            <path fill="#2f9e48" d="M90 30C70 10 40 12 20 30C34 52 62 56 90 46Z" />
            <path fill="#7cc243" d="M90 110C90 78 70 54 40 52C34 82 56 106 90 110Z" />
          </svg>

          <div className="lk-story__left">
            <span className="lk-story__badge">
              <SproutIcon /> About First WYN
            </span>

            <h2 className="lk-story__title">
              A Safe, Nurturing &amp;{" "}<br />
              Inspiring Place for{" "}<br />
              <em>Every Child</em>
              <svg className="lk-story__spark" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M6 20l7-5M12 28l4-8M22 12l6-6" fill="none" stroke="#f2b51d" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </h2>

            <p className="lk-story__text">
              At First WYN Global Play School, we believe that childhood is the
              foundation for a lifetime of success. Our purpose is to provide a
              safe, loving and stimulating environment where children learn,
              explore and grow at their own pace.
            </p>

            <a href="#philosophy" className="lk-story__btn">
              Learn More <ArrowRight />
            </a>
          </div>

          <div className="lk-story__art">
            <span className="lk-story__ring" aria-hidden="true" />
            <img
              src={aboutCenter}
              alt="Smiling First WYN student in school uniform writing in a notebook"
              width="860"
              height="1040"
              loading="lazy"
              decoding="async"
            />
            <span className="lk-story__leafchip" aria-hidden="true">
              <SproutIcon />
            </span>
          </div>

          <div className="lk-story__cards">
            {aboutCards.map(({ tone, Icon, title, lines }) => (
              <div key={title} className={`lk-story__card lk-story__card--${tone}`}>
                <span className="lk-story__card-icon"><Icon /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{lines.join(" ")}</p>
                </div>
              </div>
            ))}
          </div>

          <ul className="lk-story__stats">
            {siteStats.map(({ Icon, color, num, label }) => (
              <li key={label}>
                <span className="lk-story__stat-icon" style={{ color }}><Icon /></span>
                <div>
                  <strong>{num}</strong>
                  <small>{label}</small>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ====================== SECTION 3 : LEARNING JOURNEY ====================== */}
      <section className="lk-jny" id="programs">
        <div className="lk-jny__stage">
          <header className="lk-jny__head">
            <span className="lk-jny__badge">
              <SproutIcon /> Our Learning Journey
            </span>
            <h2 className="lk-jny__title">
              <span className="l1">From Curious Minds to Confident Learners</span>
              <span className="l2">
                A <em>Journey of Growth</em>
              </span>
            </h2>
            <p className="lk-jny__sub">
              We design a progressive learning journey, carefully planned for each
              stage of your child’s development — from their first steps to a
              bright future.
            </p>
          </header>

          <ul className="lk-jny__grid">
            {stages.map(({ tone, img, Icon, name, age, title, lines, items }) => (
              <li key={name} className={`lk-jny__item lk-jny__item--${tone}`}>
                <article className="lk-jny__card">
                  <img
                    className="lk-jny__photo"
                    src={img}
                    alt={`${name} child learning`}
                    width="700"
                    height="400"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="lk-jny__body">
                    <div className="lk-jny__pill">
                      <span className="lk-jny__pill-icon"><Icon /></span>
                      <span className="lk-jny__pill-txt">
                        <b>{name}</b>
                        <small>({age})</small>
                      </span>
                    </div>
                    <h3>{title}</h3>
                    <p>{lines.join(" ")}</p>
                    <ul className="lk-jny__list">
                      {items.map((it) => (
                        <li key={it}><CheckDot />{it}</li>
                      ))}
                    </ul>
                  </div>
                </article>
                <span className="lk-jny__arrow" aria-hidden="true"><ArrowRight /></span>
              </li>
            ))}
          </ul>

          <div className="lk-jny__bar">
            <p className="lk-jny__script">
              <span>Small Steps</span>
              <span>Make Big Dreams <svg viewBox="0 0 24 24" aria-hidden="true" {...sw}><path d="M12 20.5C6 16.5 3 13.3 3 9.6 3 7 5 5.2 7.3 5.2c1.9 0 3.5 1 4.7 2.8 1.2-1.8 2.8-2.8 4.7-2.8C19 5.2 21 7 21 9.6c0 3.7-3 6.9-9 10.9z" /></svg></span>
            </p>
            <p className="lk-jny__bar-text">
              Every child grows at their own pace. Visit us and see how First WYN helps them flourish.
            </p>
            <a href="#enquire" className="lk-jny__btn">
              Join Our Learning Journey <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ====================== SECTION 4 : LEARNING PHILOSOPHY ====================== */}
      <section className="lk-phil" id="philosophy">
        <div className="lk-phil__stage">
          <div className="lk-phil__main">
            <span className="lk-phil__badge">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#b9a6ee" d="M12 12C9 5 3 5 3 9.5c0 3 3.5 4.5 9 2.5z" />
                <path fill="#d7c9f6" d="M12 12c3-7 9-7 9-2.5 0 3-3.5 4.500-9 2.500z" />
                <path fill="#9d86e0" d="M12 12c-3 1-6 4-5 8 3 0 5-3 5-8zM12 12c3 1 6 4 5 8-3 0-5-3-5-8z" opacity="0.8" />
              </svg>
              Our <b>Learning Philosophy</b>
            </span>

            <h2 className="lk-phil__title">
              <span>Play</span>
              <i aria-hidden="true">→</i>
              <span>Explore</span>
              <i aria-hidden="true">→</i>
              <span>Discover</span>
              <i aria-hidden="true">→</i>
              <span className="c-orange">Create</span>
              <i aria-hidden="true">→</i>
              <span className="c-green">Grow</span>
            </h2>

            <p className="lk-phil__text">
              We believe children learn best when they play, explore their
              surroundings, discover new ideas, create their own expressions and
              grow with confidence.
            </p>

            <ul className="lk-phil__steps">
              {philosophy.map(({ tone, Icon, name, sub }, i) => (
                <li key={name} className={`lk-phil__step lk-phil__step--${tone}`}>
                  <span className="lk-phil__circle"><Icon /></span>
                  <strong>{name}</strong>
                  <small>{sub}</small>
                  {i < philosophy.length - 1 && (
                    <span className="lk-phil__dash" aria-hidden="true"><DashArrow /></span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lk-phil__art">
            {/* exact blob outline (traced from the design) used to clip the photo */}
            <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
              <defs>
                <clipPath id="lkPhilBlob" clipPathUnits="objectBoundingBox">
                  <path d="M0.1087 0.1632C0.1268 0.1272 0.1558 0.0742 0.2029 0.0474C0.25 0.0205 0.3382 0.0091 0.3913 0.0021C0.4444 -0.0049 0.4758 0.0004 0.5217 0.0053C0.5676 0.0102 0.6232 0.0167 0.6667 0.0316C0.7101 0.0465 0.7536 0.0702 0.7826 0.0947C0.8116 0.1193 0.8164 0.1579 0.8406 0.1789C0.8647 0.2 0.9087 0.207 0.9275 0.2211C0.9464 0.2351 0.9476 0.2404 0.9536 0.2632C0.9597 0.286 0.9645 0.3281 0.9638 0.3579C0.963 0.3877 0.9444 0.4105 0.9493 0.4421C0.9541 0.4737 0.9855 0.5123 0.9928 0.5474C1.0 0.5825 0.9988 0.614 0.9928 0.6526C0.9867 0.6912 0.9722 0.7439 0.9565 0.7789C0.9408 0.814 0.9227 0.8386 0.8986 0.8632C0.8744 0.8877 0.8454 0.907 0.8116 0.9263C0.7778 0.9456 0.7391 0.9675 0.6957 0.9789C0.6522 0.9904 0.5966 0.9921 0.5507 0.9947C0.5048 0.9974 0.4638 0.9991 0.4203 0.9947C0.3768 0.9904 0.3261 0.9798 0.2899 0.9684C0.2536 0.957 0.2295 0.9439 0.2029 0.9263C0.1763 0.9088 0.1534 0.886 0.1304 0.8632C0.1075 0.8404 0.0833 0.8175 0.0652 0.7895C0.0471 0.7614 0.0307 0.7281 0.0217 0.6947C0.0128 0.6614 0.0128 0.6246 0.0116 0.5895C0.0104 0.5544 0.0104 0.514 0.0145 0.4842C0.0186 0.4544 0.029 0.4316 0.0362 0.4105C0.0435 0.3895 0.0483 0.3825 0.058 0.3579C0.0676 0.3333 0.0857 0.2956 0.0942 0.2632C0.1027 0.2307 0.0906 0.1991 0.1087 0.1632Z" />
                </clipPath>
              </defs>
            </svg>

            <div className="lk-phil__photo">
              <img
                src={philosophyChild}
                alt="Smiling First WYN student in school uniform with a backpack and books"
                width="690"
                height="950"
                loading="lazy"
                decoding="async"
              />
            </div>

            <svg className="lk-phil__outline" viewBox="0 0 690 950" aria-hidden="true" fill="none" strokeLinecap="round">
              <defs>
                <linearGradient id="lkPhilRing" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#7fd0b8" />
                  <stop offset="0.5" stopColor="#8fd8c4" />
                  <stop offset="0.72" stopColor="#f2c94c" />
                  <stop offset="1" stopColor="#f2c94c" />
                </linearGradient>
              </defs>
              <g transform="translate(345 475) scale(1.045) translate(-345 -475)">
                <path d="M75 155C87.5 120.8 107.5 70.5 140 45C172.5 19.5 233.3 8.7 270 2C306.7 -4.7 328.3 0.3 360 5C391.7 9.7 430.0 15.8 460 30C490.0 44.2 520.0 66.7 540 90C560.0 113.3 563.3 150.0 580 170C596.7 190.0 627.0 196.7 640 210C653.0 223.3 653.8 228.3 658 250C662.2 271.7 665.5 311.7 665 340C664.5 368.3 651.7 390.0 655 420C658.3 450.0 680.0 486.7 685 520C690.0 553.3 689.2 583.3 685 620C680.8 656.7 670.8 706.7 660 740C649.2 773.3 636.7 796.7 620 820C603.3 843.3 583.3 861.7 560 880C536.7 898.3 510.0 919.2 480 930C450.0 940.8 411.7 942.5 380 945C348.3 947.5 320.0 949.2 290 945C260.0 940.8 225.0 930.8 200 920C175.0 909.2 158.3 896.7 140 880C121.7 863.3 105.8 841.7 90 820C74.2 798.3 57.5 776.7 45 750C32.5 723.3 21.2 691.7 15 660C8.8 628.3 8.8 593.3 8 560C7.2 526.7 7.2 488.3 10 460C12.8 431.7 20.0 410.0 25 390C30.0 370.0 33.3 363.3 40 340C46.7 316.7 59.2 280.8 65 250C70.8 219.2 62.5 189.2 75 155Z" stroke="url(#lkPhilRing)" strokeWidth="4" />
              </g>
              <g transform="translate(345 475) scale(1.02) translate(-345 -475)">
                <path d="M75 155C87.5 120.8 107.5 70.5 140 45C172.5 19.5 233.3 8.7 270 2C306.7 -4.7 328.3 0.3 360 5C391.7 9.7 430.0 15.8 460 30C490.0 44.2 520.0 66.7 540 90C560.0 113.3 563.3 150.0 580 170C596.7 190.0 627.0 196.7 640 210C653.0 223.3 653.8 228.3 658 250C662.2 271.7 665.5 311.7 665 340C664.5 368.3 651.7 390.0 655 420C658.3 450.0 680.0 486.7 685 520C690.0 553.3 689.2 583.3 685 620C680.8 656.7 670.8 706.7 660 740C649.2 773.3 636.7 796.7 620 820C603.3 843.3 583.3 861.7 560 880C536.7 898.3 510.0 919.2 480 930C450.0 940.8 411.7 942.5 380 945C348.3 947.5 320.0 949.2 290 945C260.0 940.8 225.0 930.8 200 920C175.0 909.2 158.3 896.7 140 880C121.7 863.3 105.8 841.7 90 820C74.2 798.3 57.5 776.7 45 750C32.5 723.3 21.2 691.7 15 660C8.8 628.3 8.8 593.3 8 560C7.2 526.7 7.2 488.3 10 460C12.8 431.7 20.0 410.0 25 390C30.0 370.0 33.3 363.3 40 340C46.7 316.7 59.2 280.8 65 250C70.8 219.2 62.5 189.2 75 155Z" stroke="#58b8e8" strokeWidth="3" strokeDasharray="120 2200" strokeDashoffset="-1560" />
              </g>
            </svg>

            {/* sun */}
            <span className="lk-phil__sun" aria-hidden="true">
              <svg viewBox="0 0 64 64">
                <g stroke="#f7b92e" strokeWidth="2.6" strokeLinecap="round" fill="none">
                  {[...Array(8)].map((_, i) => (
                    <line key={i} x1="32" y1="5" x2="32" y2="13" transform={`rotate(${i * 45} 32 32)`} />
                  ))}
                  <circle cx="32" cy="32" r="10" />
                  <path d="M29 31c1.500-2 4.500-2 5.500.5" />
                </g>
              </svg>
            </span>

            {/* little sprout-in-circle doodle */}
            <svg className="lk-phil__doodle" viewBox="0 0 40 40" aria-hidden="true" fill="none" stroke="#5fbf6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="20" cy="20" r="11" />
              <path d="M20 10V5M20 24v-6M20 18c0-3 2-5 5-5 0 3-2 5-5 5z" />
            </svg>

            {/* leaf */}
            <svg className="lk-phil__leaf" viewBox="0 0 70 50" aria-hidden="true">
              <path d="M4 26C10 8 34 2 54 12 50 32 28 46 4 38z" fill="#7cc243" />
              <path d="M4 38C20 30 38 24 62 40" fill="none" stroke="#4a9e36" strokeWidth="2" strokeLinecap="round" />
              <path d="M10 28C24 22 38 18 50 14" fill="none" stroke="#4a9e36" strokeWidth="1.600" strokeLinecap="round" />
            </svg>

            {/* squiggles */}
            <svg className="lk-phil__squiggle" viewBox="0 0 160 40" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 30C30 24 54 34 82 26" stroke="#f7c531" strokeWidth="4" />
              <path d="M70 32C96 22 124 34 152 14" stroke="#58b8e8" strokeWidth="3.500" />
            </svg>
          </div>
        </div>

        {/* soft light-blue waves */}
        <svg className="lk-phil__wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 70C220 40 420 60 700 82C980 104 1200 70 1440 20L1440 120L0 120Z" fill="#e6f0fb" opacity="0.75" />
          <path d="M0 98C260 76 560 112 860 100C1120 90 1300 70 1440 56L1440 120L0 120Z" fill="#dbe9f9" opacity="0.8" />
        </svg>
      </section>

      {/* ====================== SECTION 5 : WHAT CHILDREN EXPERIENCE ====================== */}
      <section className="lk-exp" id="experience">
        <div className="lk-exp__stage">
          <div className="lk-exp__main">
            <span className="lk-exp__badge">
              <ExpBadgeIcon /> What Children Experience
            </span>

            <h2 className="lk-exp__title">More Than Just Academics</h2>

            <p className="lk-exp__text">
              We offer a rich blend of activities that nurture creativity,
              confidence and a joyful learning experience.
            </p>

            <ul className="lk-exp__grid">
              {experiences.map(({ tone, ic, Icon, title, sub }) => (
                <li key={title} className={`lk-exp__card lk-exp__card--${tone}`}>
                  <span className={`lk-exp__icon lk-exp__icon--${ic}`}><Icon /></span>
                  <h3>{title}</h3>
                  <small>{sub}</small>
                </li>
              ))}
            </ul>
          </div>

          <div className="lk-exp__art">
            <span className="lk-exp__bubble" aria-hidden="true" />
            <img
              className="lk-exp__img"
              src={experienceChild}
              alt="Smiling First WYN student in school uniform painting in class"
              width="880"
              height="944"
              loading="lazy"
              decoding="async"
            />
            {/* outline traced from the photo blob: teal left/top, yellow right */}
            <svg className="lk-exp__outline" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true" fill="none">
              <defs>
                <linearGradient id="lkExpRing" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#7fd0b8" />
                  <stop offset="0.55" stopColor="#8fd8c4" />
                  <stop offset="0.8" stopColor="#f2c94c" />
                  <stop offset="1" stopColor="#f2c94c" />
                </linearGradient>
              </defs>
              <g transform="translate(500 500) scale(1.045) translate(-500 -500)">
                <path d="M453 34C439 38 397 49 369 59C341 68 313 76 286 91C258 106 227 128 203 150C179 171 164 199 142 220C120 242 86 256 70 279C54 302 54 331 46 357C37 383 26 409 18 435C11 461 1 487 1 513C1 539 9 565 17 591C25 617 40 643 50 669C61 695 75 721 81 747C88 773 84 799 89 825C95 851 99 878 117 903C135 927 170 955 197 971C225 987 253 995 281 998C309 1001 337 996 365 990C393 985 420 973 448 966C476 959 504 951 532 947C560 942 588 943 616 937C644 931 672 924 700 911C727 899 756 883 783 863C811 843 847 816 864 792C880 767 880 741 883 715C886 689 883 663 883 637C883 611 873 579 883 559C893 539 926 534 944 518C962 502 982 485 991 463C1000 440 1001 411 999 385C997 359 997 330 981 307C964 283 928 255 900 241C873 228 843 236 817 223C790 211 761 189 742 167C723 144 723 110 703 89C683 67 650 48 623 38C595 29 567 35 539 34C511 33 470 34 455 34C441 34 467 30 453 34Z" stroke="url(#lkExpRing)" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
              </g>
            </svg>

            {/* sparkle top */}
            <svg className="lk-exp__spark lk-exp__spark--top" viewBox="0 0 32 40" aria-hidden="true" fill="none" stroke="#f2c94c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 3c1 8 4 11 12 13-8 2-11 5-12 13-1-8-4-11-12-13 8-2 11-5 12-13z" />
            </svg>
            {/* star bottom-left */}
            <svg className="lk-exp__spark lk-exp__spark--bl" viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke="#f2c94c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 3l3.800 8 8.700 1.200-6.300 6.100 1.500 8.700L16 22.800 8.300 27l1.500-8.700L3.500 12.200 12.200 11z" />
            </svg>
            {/* leaf */}
            <svg className="lk-exp__leaf" viewBox="0 0 70 60" aria-hidden="true">
              <path d="M6 54C2 28 22 6 62 4 64 34 42 56 6 54z" fill="#6cc04a" />
              <path d="M8 52C24 38 42 24 58 10" fill="none" stroke="#3f9a35" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* decorations */}
        <svg className="lk-exp__plane" viewBox="0 0 160 110" aria-hidden="true">
          <path d="M4 100C10 78 30 62 62 64" fill="none" stroke="#58b8e8" strokeWidth="1.8" strokeDasharray="3 6" strokeLinecap="round" />
          <path d="M70 52L134 14 108 82 94 60Z" fill="#fff" stroke="#1f4fc4" strokeWidth="2.600" strokeLinejoin="round" />
          <path d="M134 14L94 60" stroke="#1f4fc4" strokeWidth="2.600" />
        </svg>
        <svg className="lk-exp__wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 40C120 30 260 70 420 112L420 120L0 120Z" fill="#e3eefb" opacity="0.8" />
          <path d="M1440 30C1300 40 1180 70 1060 120L1440 120Z" fill="#dbe9f9" opacity="0.85" />
        </svg>
      </section>

      {/* ====================== SECTION 6 : LEARNING ENVIRONMENT (image left, text right) ====================== */}
      <section className="lk-fac" id="facilities">
        <div className="lk-fac__stage">
          <div className="lk-fac__art">
            <img
              className="lk-fac__img"
              src={facilitiesRoom}
              alt="Bright First WYN classroom with colourful chairs, tables and learning shelves"
              width="1188"
              height="888"
              loading="lazy"
              decoding="async"
            />
            <svg className="lk-fac__outline" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true" fill="none">
              <defs>
                <linearGradient id="lkFacRing" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#8fd8c4" />
                  <stop offset="0.5" stopColor="#a9d3f2" />
                  <stop offset="1" stopColor="#8fd8c4" />
                </linearGradient>
              </defs>
              <g transform="translate(500 500) scale(1.03) translate(-500 -500)">
                <path d="M15 232C19 221 25 212 32 202C38 193 46 185 54 176C62 166 71 156 81 147C91 137 101 128 113 119C124 111 136 104 149 96C162 89 175 82 189 74C202 66 215 56 229 48C243 40 257 31 273 25C288 18 305 14 322 10C338 6 356 3 374 2C392 1 410 3 428 5C447 6 466 9 483 11C501 14 517 16 534 18C551 20 567 23 584 25C601 27 618 29 635 30C652 32 668 33 685 34C702 35 719 35 736 35C753 35 769 35 786 34C803 33 822 30 839 29C856 29 874 27 887 29C901 31 911 36 921 42C931 47 939 55 946 63C954 72 960 81 966 93C971 104 976 117 980 131C984 145 986 160 988 177C991 194 992 212 993 232C995 252 996 274 997 296C998 319 998 342 998 367C998 392 998 421 998 447C997 474 996 502 995 525C994 548 993 568 991 586C990 605 988 622 985 637C982 653 979 665 974 678C970 690 965 700 958 709C951 719 944 727 935 735C926 743 916 750 904 757C892 764 879 770 865 776C851 782 836 788 820 795C804 802 787 810 770 817C754 825 736 833 719 840C702 848 685 855 668 863C652 870 635 878 618 885C601 893 584 900 567 908C551 915 534 922 517 930C500 938 483 947 466 954C449 962 433 970 416 975C399 981 382 984 365 987C348 990 332 991 315 993C298 995 280 998 263 999C246 999 229 1000 214 998C199 996 186 991 173 985C161 980 149 973 138 964C127 955 116 945 106 934C97 922 88 910 79 896C71 883 63 870 56 855C49 840 43 824 37 806C31 788 27 768 22 747C18 727 15 704 12 682C9 660 7 638 5 616C3 593 2 570 2 547C1 524 1 500 1 478C1 455 2 432 2 412C2 392 2 375 2 358C2 341 3 326 3 311C4 296 5 282 7 269C9 255 11 243 15 232Z" stroke="url(#lkFacRing)" strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
              </g>
            </svg>

            <span className="lk-fac__sun" aria-hidden="true">
              <svg viewBox="0 0 64 64">
                <g stroke="#f7b92e" strokeWidth="2.6" strokeLinecap="round" fill="none">
                  {[...Array(8)].map((_, i) => (
                    <line key={i} x1="32" y1="5" x2="32" y2="13" transform={`rotate(${i * 45} 32 32)`} />
                  ))}
                  <circle cx="32" cy="32" r="10" />
                  <path d="M29 31c1.500-2 4.500-2 5.500.5" />
                </g>
              </svg>
            </span>

            <svg className="lk-fac__bubble" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="#58b8e8" strokeWidth="1.600">
              <circle cx="12" cy="12" r="7" />
              <circle cx="12" cy="12" r="2" />
            </svg>

            <svg className="lk-fac__leaves" viewBox="0 0 160 155" aria-hidden="true">
              <path d="M52 22C70 60 100 88 132 100" fill="none" stroke="#3f9a35" strokeWidth="2.200" strokeLinecap="round" />
              <path d="M28 20C30 4 56 0 72 14 68 38 42 46 28 20z" fill="#5cb54a" />
              <path d="M36 18C46 20 58 22 66 18" fill="none" stroke="#3f9a35" strokeWidth="1.400" strokeLinecap="round" />
              <path d="M112 38C122 18 150 22 156 46 142 64 120 58 112 38z" fill="#6cc04a" />
              <path d="M146 78C158 76 164 96 152 110 142 102 140 90 146 78z" fill="#5cb54a" />
            </svg>

            <svg className="lk-fac__leaf" viewBox="0 0 70 50" aria-hidden="true">
              <path d="M4 26C10 8 34 2 54 12 50 32 28 46 4 38z" fill="#7cc243" />
              <path d="M8 36C22 28 38 22 54 14" fill="none" stroke="#4a9e36" strokeWidth="2" strokeLinecap="round" />
            </svg>

            <p className="lk-fac__script">
              <span>A Happy Place</span>
              <span>for Happy Minds</span>
            </p>
            <svg className="lk-fac__heart" viewBox="0 0 24 24" aria-hidden="true" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="lkFacHeart" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#f2b51d" />
                  <stop offset="1" stopColor="#1c9a4a" />
                </linearGradient>
              </defs>
              <path stroke="url(#lkFacHeart)" d="M12 20.5C6 16.5 3 13.3 3 9.6 3 7 5 5.2 7.3 5.2c1.9 0 3.5 1 4.7 2.8 1.2-1.8 2.8-2.8 4.7-2.8C19 5.2 21 7 21 9.6c0 3.7-3 6.9-9 10.9z" />
            </svg>
          </div>

          <div className="lk-fac__main">
            <span className="lk-fac__badge">
              <ExpBadgeIcon /> Our Learning Environment
            </span>

            <h2 className="lk-fac__title">Modern Facilities for a Brighter Future</h2>

            <p className="lk-fac__text">
              Designed to inspire, our facilities provide the perfect space for
              learning, play and discovery.
            </p>

            <ul className="lk-fac__grid">
              {facilities.map(({ tone, color, Icon, label }) => (
                <li key={label} className={`lk-fac__card lk-fac__card--${tone}`}>
                  <span className="lk-fac__icon" style={{ color }}><Icon /></span>
                  <h3>{label}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <svg className="lk-fac__wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M1440 20C1300 30 1150 60 1000 120L1440 120Z" fill="#dbe9f9" opacity="0.85" />
        </svg>
      </section>
    </div>
  );
}