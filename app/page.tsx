import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Section id="about" label="01" title="About">
          <About />
        </Section>

        <Section id="experience" label="02" title="Experience">
          <Experience />
        </Section>

        <Section id="projects" label="03" title="Projects">
          <Projects />
        </Section>

        <Section id="skills" label="04" title="Skills">
          <Skills />
        </Section>

        <Section id="education" label="05" title="Education">
          <Education />
        </Section>

        <Section id="contact" label="06" title="Contact">
          <Contact />
        </Section>

        <footer className="border-t border-stone-800 py-8 text-center text-sm text-stone-500">
          Built with Next.js, Tailwind, and a lot of caffeine.
        </footer>
      </main>
    </>
  );
}