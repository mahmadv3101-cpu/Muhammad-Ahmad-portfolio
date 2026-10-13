import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Braces,
  Layers,
  Database,
  GraduationCap,
  Code2,
  Workflow,
} from "lucide-react";
import type { ReactNode } from "react";
import { CrossRule, Reveal, SectionHeading } from "./Common";
export function About() {
  return (
    <section id="about" className="about section-pad">
      <SectionHeading
        label="01 / About"
        text="I turn ideas into thoughtful websites and intelligent systems."
        accent="intelligent"
        description="Full-stack development, AI, and automation — connected by one thing: making technology genuinely useful."
      />
      <CrossRule />
      <div className="about-detail">
        <Reveal>
          <p className="about-caption">
            A clear interface.
            <br />A solid foundation.
            <br />A little less busywork.
          </p>
        </Reveal>
        <Reveal>
          <p>
            I’m Muhammad Ahmad, an independent full-stack developer and Computer
            Science student at Virtual University. I work across frontend
            interfaces, backend services, and content platforms.
          </p>
          <p>
            From a graphic designer’s portfolio to a marketing agency website
            and admin dashboard, I connect what people see with the systems
            behind it. My focus is modern web experiences, practical AI tools,
            chatbots, and workflow automation.
          </p>
          <a className="pill pill-dark" href="#contact">
            Let’s talk <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
      <div className="process-marquee" aria-hidden="true">
        <div>
          {[0, 1].map((i) => (
            <span key={i}>
              Design <b>+</b> Develop <b>+</b> Automate <b>+</b> Deliver{" "}
              <b>+</b>{" "}
            </span>
          ))}
        </div>
      </div>
      <div className="marquee-caption">
        <span>From the first idea to the final interaction.</span>
        <span>Build with intent.</span>
      </div>
    </section>
  );
}
function Chapter({
  children,
  className = "",
  index,
}: {
  children: ReactNode;
  className?: string;
  index: number;
}) {
  const ref = useRef<HTMLElement>(null),
    reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  return (
    <motion.article
      ref={ref}
      className={`chapter-card ${className}`}
      style={{ top: 80 + index * 14, scale: reduced ? 1 : scale }}
    >
      {children}
    </motion.article>
  );
}
function MiniStack({
  items,
}: {
  items: { title: string; description: string; icon: typeof Code2 }[];
}) {
  return (
    <div className="mini-stack">
      {items.map(({ title, description, icon: Icon }, i) => (
        <div
          className="mini-card"
          key={title}
          style={{ "--i": i } as React.CSSProperties}
        >
          <div>
            <Icon size={23} />
            <span>{title}</span>
            <small>
              0{i + 1}/0{items.length}
            </small>
          </div>
          <strong>{description}</strong>
        </div>
      ))}
    </div>
  );
}
export function Experience() {
  return (
    <section id="experience" className="experience section-pad">
      <SectionHeading
        label="02 / Experience"
        text="Real projects. A continually evolving craft."
        accent="craft."
        description="Independent development, client work, and a Computer Science foundation — the chapters behind my work."
      />
      <div className="chapters">
        <Chapter index={0} className="paper">
          <div className="chapter-label">
            <span>Chapter 01</span>
            <span>Independent / Client Projects</span>
            <span className="chapter-date">2021 — Now</span>
          </div>
          <div className="chapter-main">
            <div>
              <p className="eyebrow">End-to-end development</p>
              <h3>
                Full-stack
                <br />
                developer.
              </h3>
            </div>
            <MiniStack
              items={[
                {
                  title: "Frontend",
                  description: "Interfaces with intent.",
                  icon: Code2,
                },
                {
                  title: "Backend",
                  description: "Systems that connect.",
                  icon: Database,
                },
                {
                  title: "Integration",
                  description: "The pieces, together.",
                  icon: Workflow,
                },
              ]}
            />
          </div>
          <div className="chapter-foot">
            <p>
              Designing and building interfaces, backend services, integrations,
              and content platforms.
            </p>
            <p>
              Discover the brief. Build the right system.
              <br />
              Refine the details before launch.
            </p>
          </div>
        </Chapter>
        <Chapter index={1} className="orange">
          <div className="chapter-label">
            <span>Chapter 02</span>
            <span>Selected client & agency work</span>
            <span className="chapter-date">2026</span>
          </div>
          <div className="chapter-main">
            <div>
              <p className="eyebrow">From identity to online experience</p>
              <h3>
                Work made
                <br />
                for people.
              </h3>
            </div>
            <div className="client-collage">
              <img
                src="./images/ayyan-khan-home.webp"
                alt="Ayyan Khan graphic designer portfolio"
                loading="lazy"
                width="1265"
                height="712"
              />
              <img
                src="./images/boost-vertex-home.webp"
                alt="Boost Vertex marketing agency website"
                loading="lazy"
                width="1265"
                height="712"
              />
            </div>
          </div>
          <div className="chapter-foot">
            <p>
              <strong>Ayyan Khan Portfolio</strong>
              <br />
              An online home for a graphic designer’s creative work.
            </p>
            <p>
              <strong>Boost Vertex</strong>
              <br />A marketing agency website with an admin dashboard.
            </p>
            <a
              className="round-link"
              href="#projects"
              aria-label="Explore client projects"
            >
              <ArrowRight />
            </a>
          </div>
        </Chapter>
        <Chapter index={2} className="teal">
          <div id="education" className="chapter-label">
            <span>Chapter 03</span>
            <span>Education</span>
            <span className="chapter-date">In progress</span>
          </div>
          <div className="chapter-main">
            <div>
              <p className="eyebrow">Virtual University</p>
              <h3>
                Computer
                <br />
                Science.
              </h3>
              <p className="degree">Bachelor of Science</p>
            </div>
            <div className="education-visual" aria-hidden="true">
              <div className="education-orbit">
                <Braces />
                <Layers />
                <GraduationCap />
              </div>
              <span>
                Always
                <br />
                <em>learning.</em>
              </span>
            </div>
          </div>
          <div className="chapter-foot">
            <p>
              Grounding practical development in programming fundamentals, web
              engineering, and software systems.
            </p>
            <p>
              Ask better questions.
              <br />
              Keep building. Keep learning.
            </p>
          </div>
        </Chapter>
      </div>
    </section>
  );
}
