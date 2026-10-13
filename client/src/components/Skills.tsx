import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Atom,
  Braces,
  Workflow,
  Bot,
  Layers,
  PenTool,
  ArrowLeft,
  ArrowRight,
  Plus,
} from "lucide-react";
import { originalSkills } from "../data/original-skills";
const cards = [
  {
    title: "Frontend",
    tools: "React · TypeScript · Tailwind CSS",
    text: "Considered interfaces. Responsive by default.",
    icon: Atom,
    tone: "paper",
  },
  {
    title: "Automation",
    tools: "n8n · APIs · Webhooks",
    text: "Less repetition. More room to do real work.",
    icon: Workflow,
    tone: "orange",
  },
  {
    title: "Backend",
    tools: "Node.js · Express · MongoDB",
    text: "The reliable systems behind the screen.",
    icon: Braces,
    tone: "dark-card",
  },
  {
    title: "AI & chatbots",
    tools: "AI tools · Conversational flows",
    text: "Practical intelligence, thoughtfully connected.",
    icon: Bot,
    tone: "teal",
  },
  {
    title: "Design",
    tools: "Figma · Motion · Accessibility",
    text: "A good experience lives in the details.",
    icon: PenTool,
    tone: "paper",
  },
  {
    title: "Platforms",
    tools: "Webflow · Framer · Shopify",
    text: "Flexible websites and content platforms.",
    icon: Layers,
    tone: "wine",
  },
];
export function Skills() {
  const ref = useRef<HTMLElement>(null),
    reduced = useReducedMotion();
  const [offset, setOffset] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const rotation = useTransform(scrollYProgress, [0, 1], [-20, -285]);
  const smooth = useSpring(rotation, { stiffness: 100, damping: 30 });
  const angle = useTransform(smooth, (v) => v + offset);
  const transform = useTransform(
    angle,
    (v) => `rotateX(-9deg) rotateY(${v}deg)`,
  );
  return (
    <>
      <section id="skills" className="skills-scroll" ref={ref}>
        <div className="skills-stage">
          <div className="stage-top">
            <p className="eyebrow">03 / Skills</p>
            <span className="eyebrow">
              Scroll to explore <ArrowRight size={13} />
            </span>
          </div>
          <div className="skills-words" aria-hidden="true">
            <span>Skills in</span>
            <span>
              motion<span className="accent">.</span>
            </span>
          </div>
          <p className="skills-subtitle">
            The tools behind
            <br />
            the ideas I bring to life.
          </p>
          <div className="ring-perspective">
            <motion.div
              className="skills-ring"
              style={{
                transform: reduced
                  ? `rotateX(-9deg) rotateY(${offset - 20}deg)`
                  : transform,
              }}
            >
              {cards.map(({ title, tools, text, icon: Icon, tone }, i) => (
                <div
                  className={`skill-face ${tone}`}
                  key={title}
                  style={{ "--face": i } as React.CSSProperties}
                >
                  <div className="skill-face-top">
                    <Icon size={30} />
                    <span>0{i + 1}</span>
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{tools}</p>
                    <span className="skill-caption">{text}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="skills-bottom">
            <p>
              Code, no-code, and intelligent workflows.
              <br />
              The right tools for the right problem.
            </p>
            <div
              className="ring-controls"
              role="group"
              aria-label="Rotate skills"
            >
              <button
                onClick={() => setOffset((v) => v + 60)}
                aria-label="Previous skill"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => setOffset((v) => v - 60)}
                aria-label="Next skill"
              >
                <ArrowRight size={18} />
              </button>
            </div>
            <a href="#projects" className="pill pill-dark">
              See my work <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <div className="toolkit section-pad">
        <details>
          <summary>
            Explore my complete toolkit <Plus size={20} />
          </summary>
          <div className="toolkit-grid">
            {originalSkills.map((group) => (
              <div key={group.label}>
                <h3>{group.label}</h3>
                <p>{group.items.join(" · ")}</p>
              </div>
            ))}
            <div>
              <h3>AI & Automation</h3>
              <p>AI automation · Chatbots · n8n · API integration</p>
            </div>
            <div>
              <h3>Interface Styling</h3>
              <p>Tailwind CSS · Responsive design · HTML · CSS</p>
            </div>
          </div>
        </details>
      </div>
    </>
  );
}
