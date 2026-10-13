import { useRef } from "react";
import type { ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
export const ease = [0.22, 1, 0.36, 1] as const;
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
}
function Word({
  children,
  progress,
  index,
  total,
  accent,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
  accent: boolean;
}) {
  const opacity = useTransform(
    progress,
    [(index / total) * 0.7, ((index + 1) / total) * 0.7],
    [0.18, 1],
  );
  const reduced = useReducedMotion();
  return (
    <motion.span
      style={{ opacity: reduced ? 1 : opacity }}
      className={accent ? "accent" : ""}
    >
      {children}{" "}
    </motion.span>
  );
}
export function WordReveal({
  text,
  accent = "",
  className = "",
}: {
  text: string;
  accent?: string;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start .94", "end .38"],
  });
  const words = text.split(" ");
  return (
    <h2 ref={ref} className={`word-heading ${className}`} aria-label={text}>
      <span aria-hidden="true">
        {words.map((w, i) => (
          <Word
            key={i}
            progress={scrollYProgress}
            index={i}
            total={words.length}
            accent={w.toLowerCase().includes(accent.toLowerCase()) && !!accent}
          >
            {w}
          </Word>
        ))}
      </span>
    </h2>
  );
}
export function SectionHeading({
  label,
  text,
  accent,
  description,
}: {
  label: string;
  text: string;
  accent?: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <div>
        <WordReveal text={text} accent={accent} />
        {description && (
          <Reveal>
            <p className="section-description">{description}</p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
export function CrossRule() {
  return (
    <div className="cross-rule" aria-hidden="true">
      <i>+</i>
      <i>+</i>
      <i>+</i>
    </div>
  );
}
export function OutLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}
