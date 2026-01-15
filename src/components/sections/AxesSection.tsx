"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { LAYOUT_PX } from "@/lib/constants";
import { Users, Zap, Compass } from "lucide-react";

const axes = [
    {
        id: "psc",
        label: "PSC Context",
        subLabel: "Foundation / 社会・基盤",
        desc: "経営参謀としての実務と貢献。リアルな組織の課題、現場の熱量に触れる「基盤」であり、実効性のあるソリューションを育む土壌。",
        icon: <Users className="w-6 h-6" />,
        color: "bg-blue-50/50"
    },
    {
        id: "narux",
        label: "NARUX Context",
        subLabel: "Playground / 衝動・表現",
        desc: "遊び(Toy)と実験の場。ビジネスの制約を超え、最新のAIや映像表現を純粋な好奇心で探求する。ここで生まれる技術が、独自の武器（変数X）となる。",
        icon: <Zap className="w-6 h-6" />,
        color: "bg-rose-50/50"
    },
    {
        id: "toyx",
        label: "TOYX Context",
        subLabel: "Ambition / 戦略・統合",
        desc: "実務(PSC)と実験(NARUX)を「X」で統合し、Creative AI Directorとして独自の価値へ昇華させる司令塔。個人的な探求を、社会へのインパクトに変える事業体。",
        icon: <Compass className="w-6 h-6" />,
        color: "bg-navy-50/50"
    }
];

export default function AxesSection() {
    return (
        <section className={`py-32 ${LAYOUT_PX} bg-white relative overflow-hidden`}>
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-navy-50/20 rounded-full blur-[120px] -z-10" />

            <div className="mx-auto max-w-7xl">
                <FadeIn>
                    <div className="mb-24 text-center">
                        <span className="text-[10px] font-light tracking-[0.4em] text-rose-500 uppercase mb-4 block opacity-80">
                            The 3 Axes
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extralight text-navy-900 tracking-tight font-serif">
                            活動を支える、三つの領域
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {axes.map((axis, i) => (
                        <FadeIn key={axis.id} delay={i * 0.2}>
                            <div className={`h-full p-10 rounded-none border border-navy-100/50 backdrop-blur-sm ${axis.color} group hover:shadow-2xl hover:shadow-navy-900/5 transition-all duration-700`}>
                                <div className="p-3 bg-white w-fit rounded-none shadow-sm border border-navy-50 mb-8 group-hover:scale-110 transition-transform duration-500">
                                    {axis.icon}
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-light text-navy-900 tracking-widest font-serif">
                                            {axis.label}
                                        </h3>
                                        <p className="text-[10px] tracking-[0.2em] text-rose-400 uppercase mt-2 font-medium">
                                            {axis.subLabel}
                                        </p>
                                    </div>
                                    <div className="h-px w-12 bg-navy-200 group-hover:w-full transition-all duration-700" />
                                    <p className="text-sm font-light text-slate-600 leading-relaxed tracking-wide">
                                        {axis.desc}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.6}>
                    <div className="mt-20 flex flex-col items-center">
                        <p className="text-center text-sm font-light text-slate-400 italic tracking-[0.1em] mb-12">
                            これらの領域は独立しているのではなく、互いにリソースと知見を循環させ、<br className="hidden md:block" />
                            「TOYX」という一つの生態系を形作ります。
                        </p>
                        <Link href="/identity" className="group inline-flex items-center gap-6">
                            <span className="text-xs tracking-[0.4em] uppercase font-light text-navy-400 group-hover:text-rose-500 transition-colors duration-500">View Identity Deep Dive</span>
                            <div className="w-12 h-px bg-navy-100 group-hover:w-24 group-hover:bg-rose-300 transition-all duration-700" />
                        </Link>
                    </div>
                </FadeIn>
                <FadeIn delay={0.6}>
                    <div className="mt-24 text-center">
                        <Link href="/architecture" className="group inline-flex items-center gap-6">
                            <span className="text-xs tracking-[0.4em] uppercase font-light text-navy-400 group-hover:text-rose-500 transition-colors duration-500">Explore the Architecture</span>
                            <div className="w-12 h-px bg-navy-100 group-hover:w-24 group-hover:bg-rose-300 transition-all duration-700" />
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

import Link from "next/link";
