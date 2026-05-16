import data from "@/data/data.json";
import type { PortfolioData } from "@/types";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const { personal, experience, projects } = data as PortfolioData;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero personal={personal} />
        <About personal={personal} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Contact email={personal.email} />
      </main>
      <Footer name={personal.name} />
    </>
  );
}
