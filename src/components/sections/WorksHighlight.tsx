"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featuredWorks = [
    {
        title: "Project Genesis",
        category: "Corporate Video",
        placeholder: "bg-navy-100",
        slug: "project-genesis"
    },
    {
        title: "Urban Echoes",
        category: "Event Documentary",
        placeholder: "bg-slate-100",
        slug: "urban-echoes"
    },
    {
        title: "Digital Silence",
        category: "Art Installation",
        placeholder: "bg-navy-50",
        slug: "digital-silence"
    },
    {
        title: "Future Pulse",
        category: "Brand Film",
        placeholder: "bg-slate-50",
        slug: "future-pulse"
    }
];

export default function WorksHighlight() {
    return (
        <section className="py-32 px-6 bg-white">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <FadeIn direction="right">
                        <div>
                            <span className="text-xs font-light tracking-[0.3em] text-rose-500 uppercase mb-4 block">
                                Selected Works
                            </span>
                            <h2 className="text-4xl font-extralight text-navy-900">実績と表現</h2>
                        </div>
                    </FadeIn>

                    <FadeIn direction="left">
                        <Link
                            href="/works"
                            className="group flex items-center text-sm font-light text-slate-400 hover:text-navy-900 transition-colors duration-500"
                        >
                            View all projects
                            <span className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">
                                <ArrowUpRight className="w-4 h-4" />
                            </span>
                        </Link>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {featuredWorks.map((work, i) => (
                        <FadeIn key={work.title} delay={i * 0.1}>
                            <Link href={`/works/${work.slug}`} className="group block">
                                <div className={`relative aspect-video overflow-hidden rounded-sm ${work.placeholder} mb-6`}>
                                    {/* High-end placeholder overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    {/* Symbolic geometric pattern as placeholder content */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:scale-110 transition-transform duration-1000">
                                        <div className="w-24 h-24 border border-navy-900 rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-light text-navy-900 group-hover:text-rose-500 transition-colors duration-500 mb-1">
                                        {work.title}
                                    </h3>
                                    <p className="text-sm font-light text-slate-400 tracking-wide uppercase">
                                        {work.category}
                                    </p>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
