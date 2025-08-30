import type { FC } from "react";
import { BriefcaseBusiness, ArrowRight } from "lucide-react";
import { useInViewOnce } from "../hooks/useInViewOnce";

type Experience = {
  role: string;
  company: string;
  period: string;      // "Jun 2024 — Presente"
  location?: string;
  highlights: string[]; // 2–3 bullets
  current?: boolean;
};

const experiences: Experience[] = [
  {
    role: "Fullstack / Frontend Developer",
    company: "Desarrollos Web",
    period: "2024 — Presente",
    highlights: [
      "Emprendimiento propio para diseño y desarrollo de sitios y apps web con React, TypeScript y Tailwind.",
      "Enfoque en performance, UX y SEO básico; integración de APIs y despliegue en Vercel/Netlify.",
    ],
    current: true,
  },
  {
    role: "Frontend Developer",
    company: "Sirius Software",
    period: "2023 — Jun 2024",
    highlights: [
      "Implementación de interfaces responsivas y componentes reutilizables en React/TS.",
      "Mejora del flujo de desarrollo con prácticas de versionado, revisiones y small PRs.",
    ],
  },
];

export const ExperienceSection: FC<{ id?: string }> = ({ id = "experiencia" }) => {
  return (
    <section id={id} className="relative bg-gradient-to-b from-black to-[#0A0D14] py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <header className="mb-8 flex items-center gap-3">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15">
            <BriefcaseBusiness className="h-4 w-4 text-white/80" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100">
            Experiencia laboral
          </h2>
        </header>

        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-4 top-0 bottom-0 hidden sm:block">
            <div className="h-full w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
          </div>

          <ul className="space-y-8">
            {experiences.map((exp, idx) => {
              const { ref, inView } = useInViewOnce<HTMLLIElement>();
              return (
                <li
                  key={`${exp.company}-${idx}`}
                  ref={ref}
                  className={`
                    grid sm:grid-cols-[32px_1fr_1fr] gap-4 sm:gap-8
                    rounded-2xl ring-1 ring-white/10 bg-white/[0.03] backdrop-blur p-5
                    transition duration-700 ease-[cubic-bezier(.22,1,.36,1)]
                    will-change-transform motion-reduce:transition-none
                    ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                  `}
                  style={{ transitionDelay: `${idx * 90}ms` }}
                >
                  {/* Punto */}
                  <div className="hidden sm:flex items-start justify-center">
                    <span
                      className={`mt-2 h-3.5 w-3.5 rounded-full ring-2 ring-white/20 ${
                        exp.current ? "bg-emerald-400" : "bg-yellow-400"
                      }`}
                    />
                  </div>

                  {/* Columna izquierda: título */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-100">
                      {exp.role}
                    </h3>
                    <p className="text-white/80">{exp.company}</p>
                    <p className="text-sm text-white/60">{exp.period}</p>
                  </div>

                  {/* Columna derecha: descripción */}
                  <div className="sm:border-l sm:border-white/10 sm:pl-6">
                    <ul className="space-y-2 text-white/80 leading-relaxed">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2">
                          <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-emerald-400/80" />
                          <span className="text-sm">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="mt-3 text-xs text-white/40">
          *Resumen de roles recientes. Detalle completo disponible en el CV.
        </p>
      </div>
    </section>
  );
};
