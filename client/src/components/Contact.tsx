import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Code2,
  Workflow,
  Braces,
  Bot,
  Plus,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { CrossRule, Reveal, SectionHeading } from "./Common";
import contact from "../data/contact.json";
const services = [
  {
    title: "Websites",
    description:
      "Distinctive, responsive websites that give your work or business a clear online home.",
    details: "React · Webflow · Responsive design",
    icon: Code2,
    type: "Website",
  },
  {
    title: "Web applications",
    description:
      "Interfaces and the systems behind them — from dashboards to full-stack platforms.",
    details: "MERN · APIs · Admin dashboards",
    icon: Braces,
    type: "Web app",
  },
  {
    title: "AI & chatbots",
    description:
      "Useful conversational experiences and AI-powered tools, built around a specific need.",
    details: "Chatbots · AI tools · API integration",
    icon: Bot,
    type: "AI & chatbot",
  },
  {
    title: "Workflow automation",
    description:
      "Connect your tools, reduce repetitive tasks, and keep the important work moving.",
    details: "n8n · Webhooks · Connected workflows",
    icon: Workflow,
    type: "Automation",
  },
];
export function Services() {
  return (
    <section id="services" className="services section-pad">
      <SectionHeading
        label="05 / Services"
        text="What can we build together?"
        accent="build"
        description="One considered experience, from the interface to the workflow. Here’s where I can help."
      />
      <div className="service-list">
        {services.map(
          ({ title, description, details, icon: Icon, type }, i) => (
            <Reveal key={title}>
              <a
                href={`#contact`}
                className="service-row"
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent("project-type", { detail: type }),
                  )
                }
              >
                <span className="service-number">0{i + 1}</span>
                <h3>{title}</h3>
                <div>
                  <p>{description}</p>
                  <small>{details}</small>
                </div>
                <Icon className="service-icon" size={25} />
                <span className="circle-button">
                  <ArrowUpRight size={19} />
                </span>
              </a>
            </Reveal>
          ),
        )}
      </div>
      <div className="process-heading">
        <p className="eyebrow">A clear way forward</p>
      </div>
      <div className="process-grid">
        {[
          {
            title: "Understand",
            text: "Start with the idea, the audience, and the problem worth solving. Define a sensible scope before writing code.",
          },
          {
            title: "Build & refine",
            text: "Bring the interface and systems together. Share progress, explore feedback, and test the details.",
          },
          {
            title: "Launch & hand over",
            text: "Check the experience across devices, prepare the release, and make the result easier to maintain.",
          },
        ].map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <span className="process-number">0{i + 1}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </Reveal>
        ))}
      </div>
      <a href="#contact" className="pill pill-orange pill-large">
        Start a conversation <ArrowRight size={18} />
      </a>
    </section>
  );
}
const questions = [
  {
    q: "What kinds of projects can we work on?",
    a: "Websites, web applications, portfolios, AI-powered tools, chatbots, and workflow automations. Share what you need the system to do, and we can work out a suitable approach.",
  },
  {
    q: "Can you improve an existing website?",
    a: "Yes. I can work from an existing site or design, improve the interface and responsiveness, and connect the backend services or integrations it needs.",
  },
  {
    q: "How are the timeline and price decided?",
    a: "They depend on the scope, content, features, integrations, and the condition of any existing code. We can define those first and agree on a clear plan before starting.",
  },
  {
    q: "Are AI tools and automations completely free to run?",
    a: "Not always. AI APIs, hosting, messaging platforms, and automation services may have usage charges or free-tier limits. Those dependencies should be made clear before choosing a solution.",
  },
  {
    q: "Can we work together remotely?",
    a: "Yes. We can collaborate remotely, with clear communication and regular project updates. Send a short introduction and some project context by email, LinkedIn, or WhatsApp to start the conversation.",
  },
];
export function FAQ() {
  return (
    <section className="faq paper section-pad">
      <div>
        <p className="eyebrow">A few useful answers</p>
        <h2>
          Before we
          <br />
          <span className="accent">begin.</span>
        </h2>
        <p>
          Have something else in mind?
          <br />
          Let’s talk it through.
        </p>
        <a href={`mailto:${contact.email}`} className="pill pill-ink">
          Email me <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="faq-list">
        {questions.map((q, i) => (
          <details key={q.q} open={i === 0}>
            <summary>
              {q.q}
              <Plus size={19} />
            </summary>
            <p>{q.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
async function copyText(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      /* Fall back for restricted preview frames. */
    }
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.cssText = "position:fixed;opacity:0;left:-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  const ok = document.execCommand("copy");
  textarea.remove();
  return ok;
}
import { useEffect } from "react";
export function Contact() {
  const [type, setType] = useState("Website"),
    [copied, setCopied] = useState(false),
    [draft, setDraft] = useState(""),
    [notice, setNotice] = useState("");
  useEffect(() => {
    const listener = (event: Event) =>
      setType((event as CustomEvent<string>).detail);
    window.addEventListener("project-type", listener);
    return () => window.removeEventListener("project-type", listener);
  }, []);
  const copyEmail = async () => {
    const ok = await copyText(contact.email);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } else setNotice("Please select and copy the email address above.");
  };
  return (
    <section id="contact" className="contact paper section-pad">
      <SectionHeading
        label="06 / Contact"
        text="A good idea deserves a great build."
        accent="great"
        description="Tell me what you have in mind. A new website, a useful tool, or a workflow that could be simpler — I’d love to hear about it."
      />
      <CrossRule />
      <div className="contact-email">
        <div>
          <p className="eyebrow">Write directly</p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
        <button className="pill pill-ink" onClick={copyEmail}>
          {copied ? <Check size={16} /> : <Copy size={16} />}{" "}
          {copied ? "Copied" : "Copy email"}
        </button>
      </div>
      <div className="contact-grid">
        <aside>
          <div>
            <p className="eyebrow">Let’s connect</p>
            <p className="contact-meta-value">Your next idea,<br />built together.</p>
          </div>
          <div className="contact-socials">
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={17} /> LinkedIn <ArrowUpRight size={15} />
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub <ArrowUpRight size={15} />
            </a>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
          <p className="contact-small-note">
            Independent developer.
            <br />
            Open to thoughtful collaborations.
          </p>
        </aside>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const text = `Hi Ahmad,\n\nI'm ${String(data.get("name")).trim()}.\nEmail: ${String(data.get("email")).trim()}\nProject: ${type}\n\n${String(data.get("message")).trim()}\n`;
            setDraft(text);
            setNotice(
              "Your draft is ready. Open your email app below and send it there. Nothing has been sent from this website.",
            );
          }}
        >
          <div className="form-two">
            <label>
              Your name
              <input
                name="name"
                placeholder="Your name"
                autoComplete="name"
                required
                minLength={2}
                maxLength={100}
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                required
                maxLength={254}
              />
            </label>
          </div>
          <fieldset>
            <legend>Project type</legend>
            <div className="type-options">
              {[
                "Website",
                "Web app",
                "AI & chatbot",
                "Automation",
                "Something else",
              ].map((value) => (
                <label key={value} className={type === value ? "selected" : ""}>
                  <input
                    type="radio"
                    name="projectType"
                    value={value}
                    checked={type === value}
                    onChange={() => setType(value)}
                  />
                  <span>{value}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <label>
            About the project
            <textarea
              name="message"
              placeholder="What would you like to build? Tell me about the idea, the goals, and any timeline you have in mind."
              required
              minLength={10}
              maxLength={5000}
              rows={4}
            />
          </label>
          <div className="form-submit">
            <button type="submit" className="pill pill-orange pill-large">
              Prepare email <ArrowRight size={18} />
            </button>
            <p>
              Creates a draft for your email app.
              <br />
              No message is sent automatically.
            </p>
          </div>
          <p className="form-notice" role="status">
            {notice}
          </p>
          {draft && (
            <div className="email-draft">
              <h3>Your message, ready to go.</h3>
              <pre>{draft}</pre>
              <div>
                <a
                  className="pill pill-ink"
                  href={`mailto:${contact.email}?subject=${encodeURIComponent(`Portfolio enquiry — ${type}`)}&body=${encodeURIComponent(draft)}`}
                >
                  Open email app <ArrowUpRight size={16} />
                </a>
                <button
                  type="button"
                  className="text-link"
                  onClick={async () =>
                    setNotice(
                      (await copyText(draft))
                        ? "Draft copied. Paste it into your email app to send."
                        : "Select the draft above and copy it into your email app.",
                    )
                  }
                >
                  Copy draft <Copy size={15} />
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
