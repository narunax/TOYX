"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getWorks } from "@/lib/data";
import { FadeIn } from "@/components/animations/FadeIn";
import { Work } from "@/types";

const works = getWorks();
const categories = ["All", ...Array.from(new Set(works.map((w) => w.category)))];

export default function WorksPage() {
    const [filter, setFilter] = useState("All");

    const filteredWorks = filter === "All"
        ? works
        : works.filter((w) => w.category === filter);

    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="mx-auto max-w-7xl">
                <FadeIn>
                    <h1 className="text-4xl md:text-6xl font-extralight text-navy-900 mb-8">Works</h1>
                </FadeIn>

                {/* Filters */}
                <FadeIn delay={0.2}>
                    <div className="flex flex-wrap gap-4 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-light transition-all duration-300 ${filter === cat
                                        ? "bg-navy-900 text-white"
                                        : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredWorks.map((work) => (
                            <motion.div
                                layout
                                key={work.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link href={`/works/${work.slug}`} className="group block">
                                    <div className={`relative aspect-video overflow-hidden rounded-sm ${work.thumbnailUrl} mb-4`}>
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                                        {/* Placeholder Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 transition-transform duration-700">
                                            <div className="w-16 h-16 border border-white rounded-full" />
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-light text-navy-900 group-hover:text-rose-500 transition-colors">
                                        {work.title}
                                    </h3>
                                    <p className="text-xs font-light tracking-widest text-slate-400 uppercase mt-1">
                                        {work.category}
                                    </p>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    );
}
