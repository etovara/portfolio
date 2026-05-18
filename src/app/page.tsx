/* === PÁGINA PRINCIPAL (/) === */
/* Punto de entrada único de la SPA. Importa data.json, tipa los datos y distribuye props a cada componente */

import data from "@/data/data.json";
import type { PortfolioData } from "@/types";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/* Extrae y tipa las secciones del archivo JSON de datos centralizado */
const { personal, experience, projects, education, certifications } = data as PortfolioData;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Cada componente recibe únicamente los props que necesita (inversión de dependencias) */}
        <Hero personal={personal} />
        <About personal={personal} education={education} certifications={certifications} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Contact email={personal.email} />
      </main>
      <Footer name={personal.name} />
    </>
  );
}
