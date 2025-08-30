import './App.css'
import 'devicon/devicon.min.css';
import { HeroFeatureBoard } from './components/HeroFeatureBoard'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';

function App() {

  return (
    <>
      <div className="min-h-screen bg-black">
      <HeroFeatureBoard
        name="Martín Ignacio De Oro"
        role="Fullstack Developer — React, Node.js & TypeScript"
        tagline="Construyo interfaces limpias, rápidas y mantenibles. Enfocado en experiencia del usuario, performance y calidad del código."
        ctaPrimary={{ label: "Ver proyectos", href: "#proyectos" }}
        ctaSecondary={{ label: "Descargar CV", href: "/cv.pdf" }}
        socials={[
          { type: "github", href: "https://github.com/tuusuario" },
          { type: "linkedin", href: "https://linkedin.com/in/tuusuario" },
          { type: "mail", href: "mailto:tuemail@dominio.com" },
        ]}
      />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      {/* Acá seguirían tus secciones en scroll: Proyectos, Experiencia, Skills, Contacto... */}
    </div>
    </>
  )
}

export default App
