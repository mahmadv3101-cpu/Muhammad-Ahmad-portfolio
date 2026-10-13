import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Braces,
  Workflow,
  Atom,
  Code2,
  Layers,
  Database,
  Zap,
} from "lucide-react";
import { ease } from "./Common";
function WaveField() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let width = 0,
      height = 0,
      raf = 0,
      t = 0,
      last = 0,
      visible = true;
    const dpr = Math.min(devicePixelRatio, 1.5);
    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let line = 0; line < 31; line++) {
        ctx.beginPath();
        for (let x = 0; x <= width + 12; x += 12) {
          const y =
            height * 0.53 +
            Math.sin((x / width) * 5.7 + t + line * 0.034) * height * 0.105 +
            Math.sin((x / width) * 10.8 - t * 0.6) * 24 +
            line * 8.2;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(210,199,178,${0.019 + (line % 4) * 0.006})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible || document.hidden || now - last < 40) return;
      last = now;
      t += 0.005;
      draw();
    };
    const observer = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    observer.observe(canvas);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    if (!reduced) raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      observer.disconnect();
    };
  }, [reduced]);
  return <canvas ref={ref} className="wave-field" aria-hidden="true" />;
}
const roles = ["Full-Stack Web Developer", "AI Automation Developer"];
const stack = [
  ["React", Atom],
  ["JavaScript", Code2],
  ["Tailwind CSS", Layers],
  ["Node.js", Braces],
  ["API Integration", Database],
  ["Webflow", Layers],
  ["AI Automation", Zap],
  ["n8n", Workflow],
] as const;
export function Hero({ ready }: { ready: boolean }) {
  const reduced = useReducedMotion();
  const [role, setRole] = useState(0);
  const mx = useMotionValue(0),
    my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 80, damping: 24 }),
    y = useSpring(my, { stiffness: 80, damping: 24 });
  const rotate = useTransform(x, [-16, 16], [-1.4, 1.4]);
  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(
      () => setRole((v) => (v + 1) % roles.length),
      3800,
    );
    return () => clearInterval(timer);
  }, [reduced]);
  return (
    <section id="home" className="hero">
      <WaveField />
      <div
        className="hero-visual"
        onPointerMove={(e) => {
          if (reduced || e.pointerType !== "mouse") return;
          const r = e.currentTarget.getBoundingClientRect();
          mx.set((e.clientX - r.left - r.width / 2) / 32);
          my.set((e.clientY - r.top - r.height / 2) / 40);
        }}
        onPointerLeave={() => {
          mx.set(0);
          my.set(0);
        }}
      >
        <h1 className="hero-name" aria-label="Muhammad Ahmad">
          <motion.span
            className="first-name"
            initial={false}
            animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 15 }}
            transition={{ delay: 0.25, duration: 0.7 }}
          >
            Muhammad
          </motion.span>
          <span className="name-letters" aria-hidden="true">
            {"Ahmad".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={reduced ? false : { y: "115%", rotate: 8 }}
                animate={ready ? { y: 0, rotate: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.07, duration: 1.2, ease }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </h1>
        <motion.div
          className="hero-portrait-wrap"
          style={{
            x: reduced ? 0 : x,
            y: reduced ? 0 : y,
            rotateZ: reduced ? 0 : rotate,
          }}
        >
          <motion.img
            className="hero-portrait"
            src="./images/ahmad-laptop.webp"
            alt="Custom 3D-style developer character working on a laptop"
            width="1300"
            height="1101"
            fetchPriority="high"
            initial={reduced ? false : { opacity: 0, y: 45, scale: 1.04 }}
            animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.35, duration: 1.3, ease }}
          />
        </motion.div>
        <motion.div
          className="hero-side-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ delay: 1.2 }}
        >
          <span className="status-dot" /> Open to work
          <br />
          <span className="muted">Independent developer</span>
        </motion.div>
        <div className="hero-side-index" aria-hidden="true">
          CODE / CREATE / AUTOMATE
        </div>
      </div>
      <motion.div
        className="hero-copy"
        initial={reduced ? false : { opacity: 0, y: 25 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.9, ease }}
      >
        <p className="hero-statement">
          Websites with purpose.
          <br className="mobile-only" /> Systems with <span>intelligence.</span>
        </p>
        <div
          className="role-line"
          aria-label="Full-Stack Web Developer and AI Automation Developer"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={role}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              {roles[role]}
            </motion.span>
          </AnimatePresence>
        </div>
        <p className="hero-description">
          I bring thoughtful interfaces and powerful systems together.
          <br className="desktop-only" /> Modern websites, web apps, AI tools,
          and automations that make work simpler.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="pill pill-orange pill-large">
            Explore my work <ArrowRight size={18} />
          </a>
          <a href="#contact" className="text-link">
            Let’s build something <ArrowUpRightSmall />
          </a>
        </div>
      </motion.div>
      <div className="stack-strip">
        <span className="eyebrow">My everyday stack</span>
        <div className="stack-marquee">
          <div className="stack-track">
            {[0, 1].map((copy) => (
              <div className="stack-set" key={copy} aria-hidden={copy === 1}>
                {stack.map(([name, Icon]) => (
                  <span key={name}>
                    <Icon size={22} />
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <a href="#about" className="scroll-cue" aria-label="Scroll to About">
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
function ArrowUpRightSmall() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M6 18 18 6M6 6h12v12" />
    </svg>
  );
}
