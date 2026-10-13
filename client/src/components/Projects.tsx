import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Github,
  Plus,
  X,
} from "lucide-react";
import {
  featuredProjects,
  projects,
  type PortfolioProject,
} from "../data/projects";
import { CrossRule, ease, Reveal, SectionHeading } from "./Common";
function ProjectDialog({
  project,
  onClose,
}: {
  project: PortfolioProject | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null),
    previousFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (project) {
      previousFocus.current = document.activeElement as HTMLElement;
      ref.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      ref.current?.close();
      document.body.style.overflow = "";
      previousFocus.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);
  return (
    <dialog
      ref={ref}
      className="project-dialog"
      aria-labelledby="project-title"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="project-dialog-inner">
          <button
            className="dialog-close"
            onClick={onClose}
            aria-label="Close project details"
          >
            <X />
          </button>
          <p className="eyebrow">
            {project.type} / {project.year}
          </p>
          <h2 id="project-title">{project.title}</h2>
          <p className="project-long-description">{project.longDescription}</p>
          <div className="project-tags">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="dialog-links">
            <a
              className="pill pill-orange"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.demoStatus === "unavailable"
                ? "Original project URL"
                : "Visit website"}{" "}
              <ExternalLink size={16} />
            </a>
            {project.githubUrl && (
              <a
                className="pill pill-dark"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} /> Source code
              </a>
            )}
          </div>
          {project.demoStatus === "unavailable" && (
            <p className="project-availability">
              This live demo was unavailable at the last check. The project is
              preserved here as part of my portfolio.
            </p>
          )}
          <div className="project-gallery">
            {project.gallery.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${project.title} — ${i === 0 ? "homepage" : "project screenshot"}`}
                width="1265"
                height="800"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      )}
    </dialog>
  );
}
export function Projects() {
  const ref = useRef<HTMLElement>(null),
    reduced = useReducedMotion();
  const [active, setActive] = useState(0),
    [filter, setFilter] = useState("All"),
    [selected, setSelected] = useState<PortfolioProject | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!reduced && window.innerWidth > 600)
      setActive(
        Math.min(
          featuredProjects.length - 1,
          Math.floor(v * featuredProjects.length),
        ),
      );
  });
  const change = (next: number) => {
    const clamped = (next + featuredProjects.length) % featuredProjects.length;
    setActive(clamped);
    if (!reduced && ref.current) {
      const height = ref.current.offsetHeight - window.innerHeight;
      if (height > 0)
        window.scrollTo({
          top:
            ref.current.offsetTop +
            height * ((clamped + 0.15) / featuredProjects.length),
          behavior: "instant",
        });
    }
  };
  const current = featuredProjects[active];
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);
  return (
    <>
      <div className="work-intro section-pad">
        <p className="eyebrow">04 / Selected projects</p>
        <Reveal>
          <h2>
            Behind the
            <br />
            <span className="accent">build.</span>
          </h2>
        </Reveal>
        <Reveal>
          <p>
            Client websites, product concepts, and digital experiences. A
            selection of what I’ve brought to the web.
          </p>
          <a href="#project-archive" className="text-link">
            Browse all {projects.length} projects <ArrowDown size={16} />
          </a>
        </Reveal>
      </div>
      <section id="projects" ref={ref} className="project-scroll">
        <div className="project-stage">
          <div className="stage-top">
            <span className="eyebrow">
              Selected work / {String(active + 1).padStart(2, "0")}
            </span>
            <a href="#project-archive" className="text-link small">
              All projects <Plus size={15} />
            </a>
          </div>
          <div className="project-theater">
            <div className="theater-glow" />
            <div className="project-carousel">
              {featuredProjects.map((p, i) => {
                let d = i - active;
                if (d > featuredProjects.length / 2)
                  d -= featuredProjects.length;
                if (d < -featuredProjects.length / 2)
                  d += featuredProjects.length;
                return (
                  <motion.button
                    className={`cinema-card ${d === 0 ? "is-active" : ""}`}
                    key={p.slug}
                    onClick={() => (d === 0 ? setSelected(p) : change(i))}
                    tabIndex={d === 0 ? 0 : -1}
                    aria-label={`View ${p.title} project`}
                    style={{
                      zIndex: 10 - Math.abs(d),
                      pointerEvents: Math.abs(d) > 1 ? "none" : "auto",
                    }}
                    animate={{
                      x: `${d * 112}%`,
                      rotateY: d === 0 ? 0 : d < 0 ? 24 : -24,
                      scale: d === 0 ? 1 : 0.83,
                      opacity: Math.abs(d) > 1 ? 0 : d === 0 ? 1 : 0.38,
                    }}
                    transition={{ duration: reduced ? 0 : 0.8, ease }}
                  >
                    <img
                      src={p.image}
                      alt={`${p.title} homepage screenshot`}
                      loading="lazy"
                      width="1265"
                      height="712"
                    />
                    <span className="project-view">
                      Explore project <ArrowUpRight size={17} />
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
          <div className="project-stage-info">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                className="project-meta"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
              >
                <div>
                  <button
                    className="project-title-button"
                    onClick={() => setSelected(current)}
                  >
                    {current.title}
                    <ArrowUpRight size={18} />
                  </button>
                  <p className="accent">{current.type.toLowerCase()}</p>
                </div>
                <span className="project-year">{current.year}</span>
                <p className="project-short-description">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="project-stage-controls">
              <button
                className="circle-button"
                onClick={() => change(active - 1)}
                aria-label="Previous project"
              >
                <ArrowLeft size={18} />
              </button>
              <div
                className="project-progress"
                role="group"
                aria-label="Select project"
              >
                {featuredProjects.map((p, i) => (
                  <button
                    key={p.slug}
                    className={i === active ? "active" : ""}
                    aria-label={`Show ${p.title}`}
                    aria-pressed={i === active}
                    onClick={() => change(i)}
                  />
                ))}
              </div>
              <button
                className="circle-button"
                onClick={() => change(active + 1)}
                aria-label="Next project"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="project-archive" className="archive paper section-pad">
        <SectionHeading
          label="The complete collection"
          text="Different ideas. The same attention to detail."
          accent="detail."
          description="A collection of client work and independent builds. Explore the design, read the story, or open the live site."
        />
        <div className="archive-toolbar">
          <p>{String(filtered.length).padStart(2, "0")} projects</p>
          <div role="group" aria-label="Filter projects">
            {["All", "Vercel", "Webflow"].map((f) => (
              <button
                className={filter === f ? "active" : ""}
                aria-pressed={filter === f}
                key={f}
                onClick={() => setFilter(f)}
              >
                {f === "Vercel" ? "Web development" : f}
              </button>
            ))}
          </div>
        </div>
        <div className="archive-grid">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08}>
              <article className="archive-card">
                <button
                  className="archive-image"
                  onClick={() => setSelected(p)}
                  aria-label={`Read about ${p.title}`}
                >
                  <img
                    src={p.image}
                    alt={`${p.title} website`}
                    width="1265"
                    height="850"
                    loading="lazy"
                  />
                  <span className="archive-index">
                    {String(projects.indexOf(p) + 1).padStart(2, "0")} /{" "}
                    {p.year}
                  </span>
                  <span className="archive-open">
                    <ArrowUpRight size={26} />
                  </span>
                </button>
                <div className="archive-card-title">
                  <button onClick={() => setSelected(p)}>
                    <h3>{p.title}</h3>
                  </button>
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${p.title} website`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p>{p.description}</p>
                <div className="project-tags">
                  {p.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <CrossRule />
        <div className="archive-bottom">
          <p>From the interface to the system behind it.</p>
          <a href="#contact" className="pill pill-ink">
            Have something in mind? <ArrowRight size={16} />
          </a>
        </div>
      </section>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
