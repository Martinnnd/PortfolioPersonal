import type { FC } from "react";
import {
  // Zap,
  // Cpu,
  // Rocket,
  // Sparkles,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  accent?: "green" | "yellow" | "blue" | "purple";
  icon: React.ReactNode;
};

interface HeroFeatureBoardProps {
  name: string;
  role: string;
  tagline: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  socials?: { type: "github" | "linkedin" | "mail"; href: string }[];
  features?: Feature[];
}

const ACCENT_MAP: Record<
  NonNullable<Feature["accent"]>,
  { ring: string; glow: string }
> = {
  green:  { ring: "ring-emerald-400/50", glow: "shadow-[0_0_60px_-15px_rgba(16,185,129,0.55)]" },
  yellow: { ring: "ring-yellow-400/50",  glow: "shadow-[0_0_60px_-15px_rgba(250,204,21,0.55)]" },
  blue:   { ring: "ring-sky-400/50",     glow: "shadow-[0_0_60px_-15px_rgba(56,189,248,0.55)]" },
  purple: { ring: "ring-violet-400/50",  glow: "shadow-[0_0_60px_-15px_rgba(167,139,250,0.55)]" },
};

export const HeroFeatureBoard: FC<HeroFeatureBoardProps> = ({
  name,
  role,
  tagline,
  ctaPrimary,
  ctaSecondary,
  socials = [],
  features = [],
}) => {
  return (
    <section
      className="
        relative isolate overflow-hidden
        bg-gradient-to-b from-[#0A0D14] via-[#0A0D14] to-black
        text-slate-100
      "
    >
      {/* Glow de fondo */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]
        "
      >
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[56rem] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute top-48 -left-40 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute top-80 -right-40 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl" />
      </div>

      {/* Contenido */}
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-14 lg:pt-28 lg:pb-20">
        {/* Header / Presentación */}
        <header className="text-center flex flex-col items-center">
          {/* Imagen de perfil */}
          <div className="w-32 h-32 rounded-full overflow-hidden ring-2 ring-emerald-400/60 shadow-[0_0_40px_-10px_rgba(16,185,129,0.55)]">
            <img
              src="/perfil.jpg"
              alt="Foto de perfil"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Disponible para oportunidades
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            {name}
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-white/80">{role}</p>
          <p className="mt-4 max-w-3xl mx-auto text-white/70">{tagline}</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {ctaPrimary && (
              <a
                href={ctaPrimary.href}
                className="
                  rounded-xl px-5 py-2.5 text-sm font-medium
                  bg-white/10 hover:bg-white/15
                  ring-1 ring-white/15 backdrop-blur
                  transition
                "
              >
                {ctaPrimary.label}
              </a>
            )}
            {ctaSecondary && (
              <a
                href={ctaSecondary.href}
                className="
                  rounded-xl px-5 py-2.5 text-sm font-medium
                  bg-transparent hover:bg-white/5
                  ring-1 ring-white/15
                  transition
                "
              >
                {ctaSecondary.label}
              </a>
            )}
            {!!socials.length && (
              <nav aria-label="Redes" className="flex items-center gap-2 ml-1">
                {socials.map((s, i) => {
                  const Icon =
                    s.type === "github" ? Github : s.type === "linkedin" ? Linkedin : Mail;
                  const label =
                    s.type === "github" ? "GitHub" : s.type === "linkedin" ? "LinkedIn" : "Email";
                  return (
                    <a
                      key={i}
                      href={s.href}
                      aria-label={label}
                      className="rounded-lg p-2 text-white/70 hover:text-white hover:bg-white/5 ring-1 ring-white/10 transition"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </nav>
            )}
          </div>
        </header>

        {/* Grid de features */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => {
            const accent = ACCENT_MAP[f.accent ?? "green"];
            return (
              <article
                key={idx}
                className={`
                  group relative rounded-2xl
                  bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)]
                  ring-1 ${accent.ring}
                  ${accent.glow}
                  transition hover:translate-y-[-2px]
                `}
              >
                <div
                  aria-hidden
                  className="
                    absolute inset-x-0 top-0 h-[2px]
                    bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60
                    group-hover:opacity-90 transition
                    rounded-t-2xl
                  "
                />
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-2.5">
                      {f.icon}
                    </div>
                    <h3 className="text-base font-semibold">{f.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
