import type { FC } from "react";
import { BadgeCheck, User2, Mail, Download } from "lucide-react";

interface AboutSectionProps {
  id?: string;
  avatarSrc?: string; // default: /perfil.jpg
  title?: string;
  pitch?: string[];   // 4–6 líneas
  highlights?: string[];
  email?: string;
  cvHref?: string;
}

export const AboutSection: FC<AboutSectionProps> = ({
  id = "sobre-mi",
  avatarSrc = "/perfil.jpg",
  title = "Sobre mí",
  pitch = [
    "Me llamo Martín Ignacio De Oro, aunque la mayoría me dice Tincho. Empecé en el mundo de la programación en 2019.",
    "Actualmente estoy cursando la Tecnicatura Universitaria en Desarrollo Web en la UNLaM, donde sigo fortaleciendo mis bases y explorando nuevas tecnologías.",
    "Soy desarrollador Fullstack, aunque siento una gran pasión por el frontend, ya que me encanta diseñar y construir interfaces modernas, dinámicas y con buena experiencia de usuario.",
    "Disfruto del proceso creativo de transformar una idea en algo visual, accesible y bien implementado, sin descuidar la solidez del backend y las buenas prácticas de desarrollo.",
    "Mi objetivo es seguir creciendo como profesional, aportando valor a los proyectos en los que participo y combinando creatividad con ingeniería para construir productos que realmente marquen la diferencia."
  ],
  highlights = ["Fullstack", "React • Node.js • TS", "Orientado a performance", "UX/UI lover"],
  email = "mailto:deoromartinignacio@gmail.com",
  cvHref = "/cv/Cv MartindeOroES.pdf",
}) => {
  // Normalizamos el link del CV para manejar espacios y forzamos descarga si es PDF
  const cvHrefEncoded = encodeURI(cvHref);
  const isPdf = /\.pdf(\?.*)?$/i.test(cvHref.trim());
  const isExternal = /^https?:\/\//i.test(cvHref);

  return (
    <section
      id={id}
      className="relative bg-gradient-to-b from-[#0A0D14] to-black py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <header className="mb-8 flex items-center gap-3">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15">
            <User2 className="h-4 w-4 text-white/80" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100">
            {title}
          </h2>
        </header>

        <div
          className="
            grid gap-8 lg:grid-cols-[1.2fr_0.8fr]
            rounded-2xl ring-1 ring-white/10 bg-white/[0.03] backdrop-blur p-6
          "
        >
          {/* Texto */}
          <div className="flex flex-col justify-center">
            <div className="space-y-3 text-white/80 leading-relaxed">
              {pitch.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            {/* Highlights */}
            {!!highlights.length && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {highlights.map((h, i) => (
                  <li
                    key={i}
                    className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10"
                  >
                    <BadgeCheck className="h-3.5 w-3.5" />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {/* Acciones */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={email}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 px-4 py-2 text-sm text-slate-100 ring-1 ring-white/15 transition"
              >
                <Mail className="h-4 w-4" />
                Contacto
              </a>
              <a
                href={cvHrefEncoded}
                download={isPdf ? "Cv MartindeOroES.pdf" : undefined}
                type={isPdf ? "application/pdf" : undefined}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-xl bg-transparent hover:bg-white/5 px-4 py-2 text-sm text-white/80 ring-1 ring-white/15 transition"
                title="Descargar CV"
              >
                <Download className="h-4 w-4" />
                Descargar CV
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-2 rounded-full bg-emerald-500/10 blur-2xl" aria-hidden />
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-2 ring-emerald-400/60 shadow-[0_0_50px_-15px_rgba(16,185,129,0.55)]">
                <img
                  src={avatarSrc}
                  alt="Foto de perfil"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Nota pequeña opcional */}
        <p className="mt-3 text-xs text-white/40">
          *Siempre aprendiendo y empujando el nivel 🚀
        </p>
      </div>
    </section>
  );
};
