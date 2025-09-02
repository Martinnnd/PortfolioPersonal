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
          ctaPrimary={{ label: "Descargar CV", href: "/cv/Cv MartindeOroES.pdf" }} 
          ctaSecondary={{ label: "Ver proyectos", href: "#proyectos" }}
          socials={[
            { type: "github", href: "https://github.com/Martinnnd" },
            { type: "linkedin", href: "https://www.linkedin.com/in/martindeoro/" },
            { type: "mail", href: "mailto:deoromartinignacio@gmail.com" },
          ]}
        />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
      </div>
    </>
  )
}

export default App
