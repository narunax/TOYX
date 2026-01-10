"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { LAYOUT_PX } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getWorks } from "@/lib/data";

export default function WorksHighlight() {
    const works = getWorks().slice(0, 4);

    return (
        <section className={`py-32 ${LAYOUT_PX} bg-white`}>
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
                    {works.map((work, i) => (
                        <FadeIn key={work.id} delay={i * 0.1}>
                            <Link href={`/works/${work.slug}`} className="group block">
                                <div className="relative aspect-video overflow-hidden rounded-sm mb-6 bg-navy-50">
                                    <Image
                                        src={work.thumbnailUrl}
                                        alt={work.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    {/* High-end placeholder overlay */}
                                    <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-navy-900/0 transition-colors duration-700" />
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
