import type { FC } from "react";
import { GraduationCap, BookOpen } from "lucide-react";
import { useInViewOnce } from "../hooks/useInViewOnce";

type Academic = {
  title: string;
  institution: string;
  period: string;
  description?: string;
  highlights?: string[];
};

type Course = {
  name: string;
  provider?: string;
};

const academics: Academic[] = [
  {
    title: "Tecnicatura Universitaria en Desarrollo Web",
    institution: "Universidad Nacional de La Matanza (UNLaM)",
    period: "Marzo 2023 — Actualidad",
    description: "Carrera orientada al desarrollo web fullstack.",
    highlights: [
      "Lenguajes y tecnologías vistas: HTML, CSS, JavaScript, Angular, Java, PHP, SQL, .NET, C#.",
      "Enfoque en programación, bases de datos, y prácticas de desarrollo profesional.",
    ],
  },
];

const courses: Course[] = [
  { name: "React & TypeScript" },
  { name: "JavaScript Avanzado" },
  { name: "HTML5 y CSS3" },
  { name: "Python Essentials" },
  { name: "AWS Cloud Fundamentals" },
];

export const EducationSection: FC<{ id?: string }> = ({ id = "formacion" }) => {
  return (
    <section id={id} className="relative bg-gradient-to-b from-[#0A0D14] to-black py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <header className="mb-8 flex items-center gap-3">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15">
            <GraduationCap className="h-4 w-4 text-white/80" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100">
            Formación
          </h2>
        </header>

        {/* Académica */}
        <div className="space-y-8">
          {academics.map((a, idx) => {
            const { ref, inView } = useInViewOnce<HTMLDivElement>();
            return (
              <div
                key={idx}
                ref={ref}
                className={`
                  rounded-2xl ring-1 ring-white/10 bg-white/[0.03] backdrop-blur p-6
                  transition duration-700 ease-[cubic-bezier(.22,1,.36,1)]
                  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                `}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <h3 className="text-lg font-semibold text-slate-100">{a.title}</h3>
                <p className="text-white/80">{a.institution}</p>
                <p className="text-sm text-white/60">{a.period}</p>
                {a.description && (
                  <p className="mt-2 text-white/70">{a.description}</p>
                )}
                {a.highlights && (
                  <ul className="mt-3 list-disc list-inside text-sm text-white/70 space-y-1">
                    {a.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Cursos */}
        <div className="mt-12">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-100">
            <BookOpen className="h-4 w-4 text-white/80" /> Cursos y certificaciones
          </h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {courses.map((c, idx) => {
              const { ref, inView } = useInViewOnce<HTMLLIElement>();
              return (
                <li
                  key={idx}
                  ref={ref}
                  className={`
                    rounded-xl bg-white/[0.04] ring-1 ring-white/10 px-4 py-3 text-sm text-white/80
                    transition duration-500 ease-out
                    ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                  `}
                  style={{ transitionDelay: `${idx * 60}ms` }}
                >
                  {c.name}
                  {c.provider && <span className="text-white/50"> — {c.provider}</span>}
                </li>
              );
            })}
          </ul>
        </div>

        <p className="mt-4 text-xs text-white/40">
          *La formación académica y cursos reflejan mi camino en constante aprendizaje 🚀
        </p>
      </div>
    </section>
  );
};
