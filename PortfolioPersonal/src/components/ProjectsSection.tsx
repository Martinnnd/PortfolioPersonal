// src/components/ProjectsSection.tsx
import type { FC } from "react";
import { Code2, ExternalLink, Code, Github } from "lucide-react";
import { useInViewOnce } from "../hooks/useInViewOnce"; // 👈 agregado

type Project = {
    title: string;
    summary: string;
    image: string;
    tech: string[];
    codeUrl?: string;
    demoUrl?: string;
};

export const ProjectsSection: FC = () => {
    const projects: Project[] = [
        {
            title: "Gestor de Gastos — Planificador",
            summary:
                "Aplicación para gestionar presupuesto: creación/edición de gastos por categorías, filtro, porcentaje gastado y reset rápido. UI clara con foco en accesibilidad y feedback visual.",
            image: "/gestorPage.jpg",
            tech: ["React", "TypeScript", "Tailwind"],
        },
        {
            title: "Adopets — Adopción Responsable",
            summary:
                "Plataforma para publicar y adoptar mascotas. Listado con filtros, vistas de detalle y flujo de adopción. Backend en Java con Spring y persistencia.",
            image: "/petsPage.jpg",
            tech: ["Java", "Spring Boot", "Thymeleaf", "Hibernate", "Docker"],
        },
        {
            title: "Desarrollos Web — Landing de Servicios",
            summary:
                "Landing corporativa en React/TS para ofrecer servicios web. Hero con CTA, secciones de servicios y contacto, optimizada para performance y SEO básico.",
            image: "/DWPage.jpg",
            tech: ["React", "TypeScript", "Tailwind"],
        },
        {
            title: "Raco De Loix — E-commerce",
            summary:
                "Front moderno con TS + Tailwind, carrito, variantes y chatbot. Integración con pasarela de pago.",
            image: "/racoPage.jpg",
            tech: ["React", "TypeScript", "Tailwind"],
            demoUrl: "https://raco.tu-dominio.dev",
        },
    ];

    return (
        <section id="proyectos" className="relative bg-gradient-to-b from-black/30 to-black py-16">
            <div className="mx-auto max-w-6xl px-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100 flex items-center gap-3 mb-8">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15">
                        <Code className="h-4 w-4 text-white/80" />
                    </div>
                    Proyectos
                </h2>

                <div className="space-y-8">
                    {projects.map((p, i) => {
                        const fromLeft = i % 2 === 0;
                        const { ref, inView } = useInViewOnce<HTMLDivElement>();
                        const hidden = fromLeft ? "-translate-x-10 opacity-0" : "translate-x-10 opacity-0";
                        const shown = "translate-x-0 opacity-100";

                        return (
                            <article
                                key={i}
                                ref={ref}
                                className={`grid items-stretch gap-6 lg:grid-cols-2 rounded-2xl ring-1 ring-white/10 bg-white/[0.03] backdrop-blur overflow-hidden will-change-transform motion-reduce:transition-none motion-reduce:transform-none transition duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${inView ? shown : hidden}`}
                                style={{ transitionDelay: `${i * 80}ms` }}
                            >
                                <a
                                    href={p.demoUrl || p.codeUrl || "#"}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group relative block overflow-hidden rounded-2xl lg:rounded-r-none"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/[0.06]" />
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                    />
                                </a>
                                <div className="p-6 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-semibold text-slate-100">
                                            {p.title}
                                        </h3>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {p.tech.map((t, idx) => (
                                                <span
                                                    key={idx}
                                                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="mt-4 text-white/70 leading-relaxed">{p.summary}</p>
                                    </div>
                                    <div className="mt-5 flex flex-wrap gap-3">
                                        {p.codeUrl && (
                                            <a
                                                href={p.codeUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 px-4 py-2 text-sm text-slate-100 ring-1 ring-white/15 transition"
                                            >
                                                <Code2 className="h-4 w-4" /> Code
                                            </a>
                                        )}
                                        {p.demoUrl && (
                                            <a
                                                href={p.demoUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-2 rounded-xl bg-transparent hover:bg-white/5 px-4 py-2 text-sm text-white/80 ring-1 ring-white/15 transition"
                                            >
                                                <ExternalLink className="h-4 w-4" /> Preview
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* 👇 Botón para ver más proyectos en GitHub */}
                <div className="mt-12 flex justify-center">
                    <a
                        href="https://github.com/Martinnnd?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 px-6 py-3 text-base font-medium text-slate-100 ring-1 ring-white/20 transition"
                    >
                        <Github className="h-5 w-5" />
                        Ver más proyectos en GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};
