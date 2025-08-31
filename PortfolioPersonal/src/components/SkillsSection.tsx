import type { FC } from "react";
import { Layers, Wrench } from "lucide-react";
import { useState } from "react";

type Skill = { name: string; level: number }; // level: 1..100
type SkillGroup = { title: string; items: Skill[] };

const groups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind", level: 85 },
      { name: "HTML/CSS", level: 92 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 82 },
      { name: "Java (Spring)", level: 78 },
      { name: "PHP", level: 70 },
      { name: "REST APIs", level: 86 },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Docker", level: 75 },
      { name: "Git/GitHub", level: 88 },
      { name: "CI/CD ( básico )", level: 65 },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { name: "SQL", level: 78 },
      { name: "Prisma / ORMs", level: 68 },
      { name: "Vite", level: 85 },
      { name: "Postman", level: 80 },
    ],
  },
];

/** 🔽 Clases Devicon para el slider (todas “colored”; sacá `colored` si querés monocromo) */
const deviconClasses: { label: string; className: string }[] = [
  { label: "TypeScript", className: "devicon-typescript-plain colored" },
  { label: "JavaScript", className: "devicon-javascript-plain colored" },
  { label: "React", className: "devicon-react-original colored" },
  { label: "Node.js", className: "devicon-nodejs-plain colored" },
  { label: "Java", className: "devicon-java-plain colored" },
  { label: "Spring", className: "devicon-spring-plain colored" },
  { label: "PHP", className: "devicon-php-plain colored" },
  { label: "Docker", className: "devicon-docker-plain colored" },
  { label: "MySQL", className: "devicon-mysql-plain colored" },
  { label: "PostgreSQL", className: "devicon-postgresql-plain colored" },
  { label: "Tailwind", className: "devicon-tailwindcss-plain colored" },
  { label: "Git", className: "devicon-git-plain colored" },
  { label: "HTML5", className: "devicon-html5-plain colored" },
  { label: "CSS3", className: "devicon-css3-plain colored" },
  // Extras que usás seguido:
  { label: "MongoDB", className: "devicon-mongodb-plain colored" },
  // Si querés agregar más, sumalos acá:
  { label: "Vite", className: "devicon-vitejs-plain colored" }, // si tu versión de devicon lo incluye
  // { label: "Prisma",  className: "devicon-prisma-plain colored" }, // si está disponible en tu versión
  // { label: "Postman", className: "devicon-postman-plain colored" }, // idem
];

/* -------------------- DevOps: panel revelable -------------------- */
const DevOpsRevealCard: FC<{ items: { name: string; level: number }[] }> = ({ items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={[
        "group relative rounded-2xl backdrop-blur p-5 cursor-pointer select-none",
        "transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]", // hover más suave
        open
          ? "bg-white/[0.035] ring-1 ring-white/40 shadow-[0_0_60px_-15px_rgba(255,255,255,0.35)]"
          : "bg-white/[0.03] ring-1 ring-white/10 hover:ring-white/30 hover:shadow-[0_0_50px_-18px_rgba(255,255,255,0.28)] hover:scale-[1.015]"
      ].join(" ")}
      onClick={() => setOpen(v => !v)}
      role="button"
      aria-expanded={open}
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen(v => !v)}
    >
      <div className="mb-4 flex items-center gap-2 text-white/80">
        <Wrench className="h-4 w-4" />
        <h3 className="font-medium">DevOps</h3>
        {!open && <span className="ml-auto text-xs text-white/60">click para abrir</span>}
      </div>

      {!open && (
        <div className="flex h-28 items-center justify-center">
          <span
            className="
              inline-flex items-center justify-center rounded-xl px-5 py-2
              text-sm font-semibold tracking-wide
              text-white shadow-[0_0_20px_rgba(255,255,255,0.35)]
              ring-1 ring-white/30 bg-white/[0.06]
              [text-shadow:_0_0_12px_rgba(255,255,255,0.45)]
              transition
            "
          >
            VER MÁS
          </span>
          <div
            aria-hidden
            className="
              pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100
              transition-opacity duration-500
              [mask-image:radial-gradient(65%_65%_at_50%_50%,white,transparent)]
              bg-[radial-gradient(40%_40%_at_50%_50%,rgba(255,255,255,0.08),transparent)]
            "
          />
        </div>
      )}

      {open && (
        <div className="overflow-hidden">
          <ul
            className="
              space-y-3 pt-1 pb-2
              opacity-0 translate-y-2
              animate-[reveal_650ms_ease-out_forwards]
              [animation-delay:140ms]
            "
          >
            {items.map((s) => (
              <li key={s.name}>
                <div className="flex items-center justify-between text-sm text-white/70">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>

                {/* track con los mismos colores que el resto (sin borde) */}
                <div className="mt-1 relative h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="
                      absolute inset-y-0 left-0 rounded-full
                      bg-gradient-to-r from-emerald-400/80 to-sky-400/80
                      shadow-[0_0_12px_rgba(56,189,248,0.35)]
                      transition-[width] duration-700
                    "
                    style={{ width: `${s.level}%` }}
                    aria-hidden
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
/* ---------------------------------------------------------------- */

export const SkillsSection: FC<{ id?: string }> = ({ id = "skills" }) => {
  // duplicamos para marquee infinito
  const track = [...deviconClasses, ...deviconClasses];

  return (
    <section id={id} className="relative bg-gradient-to-b from-black to-[#0A0D14] py-16">
      {/* keyframes locales */}
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes reveal {
          0%   { opacity: 0; transform: translateY(8px); clip-path: inset(0 0 100% 0); }
          100% { opacity: 1; transform: translateY(0);   clip-path: inset(0 0 0    0); }
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <header className="mb-10 flex items-center gap-3">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15">
            <Layers className="h-4 w-4 text-white/80" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100">
            Habilidades técnicas
          </h2>
        </header>

        {/* Grupos (+ barras) */}
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g) =>
            g.title === "DevOps" ? (
              <DevOpsRevealCard key={g.title} items={g.items} />
            ) : (
              <div key={g.title} className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 backdrop-blur p-5">
                <div className="mb-4 flex items-center gap-2 text-white/80">
                  <Wrench className="h-4 w-4" />
                  <h3 className="font-medium">{g.title}</h3>
                </div>

                <ul className="space-y-3">
                  {g.items.map((s) => (
                    <li key={s.name}>
                      <div className="flex items-center justify-between text-sm text-white/70">
                        <span>{s.name}</span>
                        <span>{s.level}%</span>
                      </div>
                      <div className="mt-1 h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-400/80 to-sky-400/80"
                          style={{ width: `${s.level}%` }}
                          aria-hidden
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        {/* Slider Devicon */}
        <div className="mt-10 rounded-2xl ring-1 ring-white/10 bg-white/[0.03] overflow-hidden">
          <div className="group relative flex items-center overflow-hidden px-4 py-6">
            <div
              className="
                flex shrink-0 gap-10 pr-10
                [animation:marquee_22s_linear_infinite]
                group-hover:[animation-play-state:paused]
                will-change-transform
              "
              style={{ width: "200%" }}
              aria-hidden
            >
              {track.map((item, i) => (
                <span
                  key={`${item.label}-${i}`}
                  className="flex items-center justify-center"
                  aria-label={item.label}
                  title={item.label}
                >
                  <i className={`${item.className} text-6xl`} />
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-3 text-xs text-white/40">
          *Niveles estimados para referencia. Siempre aprendiendo y mejorando 🚀
        </p>
      </div>
    </section>
  );
};
