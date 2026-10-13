import { useState } from "react";
import { MotionConfig } from "framer-motion";
import { Navigation, Footer, Loader } from "./components/Layout";
import { Hero } from "./components/Hero";
import { About, Experience } from "./components/Story";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Services, FAQ, Contact } from "./components/Contact";
import { WhatsAppLauncher } from "./components/WhatsAppLauncher";
export function App() {
  const [ready, setReady] = useState(false);
  return (
    <MotionConfig reducedMotion="user">
      <Loader onReady={() => setReady(true)} />
      <a className="skip-link" href="#about">
        Skip introduction
      </a>
      <Navigation />
      <main>
        <Hero ready={ready} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppLauncher />
    </MotionConfig>
  );
}
