import SectionDivider from "@/components/section-divider";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Skills from "@/components/skills";
import Intro from "@/components/intro";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
