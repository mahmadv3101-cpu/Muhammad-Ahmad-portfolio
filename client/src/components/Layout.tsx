import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  Menu as MenuIcon,
  X,
  Github,
  Linkedin,
} from "lucide-react";
import contact from "../data/contact.json";
import { ease } from "./Common";
const sections = [
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Services",
  "Contact",
];
export function Loader({ onReady }: { onReady: () => void }) {
  const [open, setOpen] = useState(true);
  const reduced = useReducedMotion();
  const done = useRef(onReady);
  done.current = onReady;
  useEffect(() => {
    let live = true;
    const img = new Image();
    const imageReady = new Promise<void>((resolve) => {
      img.onload = () => resolve();
      img.onerror = () => resolve();
      img.src = "./images/ahmad-laptop.webp";
    });
    Promise.race([
      Promise.all([imageReady, document.fonts.ready]),
      new Promise((resolve) => setTimeout(resolve, 3500)),
    ]).then(() => {
      if (live) {
        setOpen(false);
        done.current();
      }
    });
    return () => {
      live = false;
    };
  }, []);
  return (
    <AnimatePresence>
      {open && !reduced && (
        <motion.div
          className="loader"
          role="status"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease }}
        >
          <div className="loader-monogram">
            ma<span>.</span>
          </div>
          <p>
            Loading portfolio <span className="loading-dot">●</span>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export function Navigation() {
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 180);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (open) {
      previousFocus.current = document.activeElement as HTMLElement;
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
      previousFocus.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const menuButton = (
    <button
      className="pill pill-dark"
      onClick={() => setOpen(true)}
      aria-expanded={open}
      aria-controls="site-menu"
    >
      Menu <MenuIcon size={15} />
    </button>
  );
  return (
    <>
      <header className={`top-nav ${scrolled ? "out" : ""}`}>
        <a
          href="#home"
          className="hello"
          aria-label="Muhammad Ahmad, back to top"
        >
          Hi, I’m
          <span className="typing-caret" />
        </a>
        <div className="nav-actions">
          <a className="pill pill-orange" href="#contact">
            Let’s talk
          </a>
          {menuButton}
        </div>
      </header>
      <nav
        aria-label="Quick navigation"
        className={`floating-nav ${scrolled ? "visible" : ""}`}
        inert={!scrolled}
      >
        <a href="#contact" className="pill pill-orange">
          Let’s talk
        </a>
        {menuButton}
      </nav>
      <dialog
        id="site-menu"
        ref={dialog}
        className="menu-dialog"
        onCancel={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
        aria-label="Site menu"
      >
        <div className="menu-inner">
          <div className="menu-top">
            <span className="monogram">
              ma<span>.</span>
            </span>
            <button
              className="pill pill-dark"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              Close <X size={16} />
            </button>
          </div>
          <nav aria-label="Main navigation">
            {sections.map((s, i) => (
              <a
                href={`#${s.toLowerCase()}`}
                key={s}
                onClick={() => setOpen(false)}
              >
                <span className="nav-number">0{i + 1}</span>
                <span>{s}</span>
                <ArrowUpRight className="nav-arrow" />
              </a>
            ))}
          </nav>
          <div className="menu-meta">
            <div>
              <p className="eyebrow">Business enquiries</p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>
          <div className="menu-social">
            <a href={contact.github} target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer paper">
      <div className="footer-top">
        <nav aria-label="Footer navigation">
          {sections.map((s) => (
            <a key={s} href={`#${s.toLowerCase()}`}>
              {s}
            </a>
          ))}
        </nav>
        <a className="back-top" href="#home">
          Back to top <ArrowUp size={16} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Muhammad Ahmad</span>
        <span>Built with care. Made to work.</span>
      </div>
    </footer>
  );
}
