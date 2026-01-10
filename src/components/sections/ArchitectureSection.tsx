"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { LAYOUT_PX } from "@/lib/constants";
import { Search, Eye, Cpu } from "lucide-react";

const layers = [
    {
        role: "Concept Creator",
        level: "WHY",
        title: "意味を定義し、迷いを終わらせる",
        desc: "「何を問うべきか」を定め、プロジェクトの存在理由を言語化する。ここが定まることで、後工程のすべてのリソースが「消費」から「資産」へと変わります。",
        icon: <Search className="w-5 h-5" />,
        highlight: false // Flat design
    },
    {
        role: "Visual Creator",
        level: "HOW",
        title: "見えない価値を、可視化する",
        desc: "言語化できない想いや概念を、映像・UI・デザインの力で直感的に伝わる「体験」へと翻訳します。論理を超えて、人の心を動かすための設計図。",
        icon: <Eye className="w-5 h-5" />,
        highlight: false
    },
    {
        role: "AI Product Designer",
        level: "WHAT",
        title: "「概念」を「実装」する",
        desc: "固定化された成果物ではなく、現場で動き続けるプロトタイプやシステムを構築。AIを手段として使いこなし、絵に描いた餅で終わらせない「実効性」をつくります。",
        icon: <Cpu className="w-5 h-5" />,
        highlight: false
    }
];

export default function ArchitectureSection() {
    return (
        <section className={`py-32 ${LAYOUT_PX} bg-navy-50/30 backdrop-blur-sm`}>
            <div className="mx-auto max-w-5xl">
                <FadeIn>
                    <div className="mb-24 text-center">
                        <span className="text-[10px] font-light tracking-[0.4em] text-rose-500 uppercase mb-4 block opacity-80">
                            Role Architecture
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extralight text-navy-900 tracking-tight">
                            意味・統合・実装の連環
                        </h2>
                        <p className="mt-8 text-slate-400 font-light text-sm tracking-widest max-w-xl mx-auto leading-relaxed">
                            「なぜ作るのか」から「どう定着させるか」までを一人で往復することで、<br />
                            情報の分断を防ぎ、最速で本質的な成果へと導きます。
                        </p>
                    </div>
                </FadeIn>

                <div className="space-y-6">
                    {layers.map((layer, i) => (
                        <FadeIn key={layer.role} delay={i * 0.2}>
                            <div className={`relative p-8 md:p-12 border ${layer.highlight ? 'bg-navy-900 text-white border-navy-800 shadow-xl shadow-navy-900/10' : 'bg-white text-navy-900 border-navy-100'} group transition-all duration-700`}>
                                <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
                                    <div className={`flex flex-col items-center justify-center w-24 h-24 border ${layer.highlight ? 'border-navy-700 bg-navy-800 text-rose-400' : 'border-navy-50 bg-navy-50/50 text-navy-400'} flex-shrink-0 transition-colors duration-500`}>
                                        <span className={`text-[10px] font-light tracking-widest mb-2 ${layer.highlight ? 'text-rose-400' : 'text-rose-500'}`}>{layer.level}</span>
                                        {layer.icon}
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-4">
                                            <h3 className="text-2xl font-light tracking-widest">
                                                {layer.role}
                                            </h3>
                                            <span className={`text-[10px] tracking-widest font-light opacity-60`}>
                                                — {layer.title}
                                            </span>
                                        </div>
                                        <p className={`text-sm font-light leading-relaxed max-w-2xl ${layer.highlight ? 'text-white/70' : 'text-slate-600'}`}>
                                            {layer.desc}
                                        </p>
                                    </div>
                                </div>

                                {i < layers.length - 1 && (
                                    <div className="absolute left-[88px] -bottom-[40px] hidden md:flex flex-col items-center gap-2 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                                        <div className="w-px h-8 bg-navy-400" />
                                        <div className="w-1.5 h-1.5 border border-navy-400" />
                                    </div>
                                )}
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
