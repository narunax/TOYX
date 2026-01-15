"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { LAYOUT_PX } from "@/lib/constants";
import CreativeOS from "@/components/sections/CreativeOS";
import AxesSection from "@/components/sections/AxesSection";
import Image from "next/image";

export default function IdentityPage() {
    return (
        <main className="relative pt-32 selection:bg-rose-100 selection:text-rose-900">
            <div className="h-24 md:h-32" />

            {/* Profile Section - Reconstructed for Architectural Intent */}
            <section className={`${LAYOUT_PX} mb-48`}>
                <div className="max-w-5xl mx-auto">
                    {/* Main Content Area */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* Left Column: Core Narrative (8 cols) */}
                        <div className="lg:col-span-8 space-y-16">
                            <FadeIn delay={0.2}>
                                <div className="space-y-10">
                                    <div className="flex items-start gap-8">
                                        {/* Integrated Subtle Image */}
                                        <div className="relative w-16 h-16 md:w-20 md:h-20 bg-slate-100 overflow-hidden border border-navy-50 opacity-40 grayscale hover:opacity-100 transition-all duration-1000 flex-shrink-0 mt-2">
                                            <Image
                                                src="/image/profile.jpg"
                                                alt="Naruhito Inaba"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <span className="text-[10px] font-light tracking-[0.5em] text-rose-500 uppercase block opacity-80 mb-4">
                                                    Identity
                                                </span>
                                                <h1 className="text-xl md:text-2xl font-light text-navy-900 font-serif tracking-[0.15em] leading-tight">
                                                    稲葉成人｜Creative AI Director
                                                </h1>
                                                <h2 className="text-lg md:text-xl font-light text-slate-400 font-serif tracking-widest leading-snug">
                                                    Creative × AI × 経営
                                                </h2>
                                            </div>
                                            <div className="w-12 h-px bg-rose-400 opacity-60" />
                                        </div>
                                    </div>

                                    <p className="text-slate-600 text-sm leading-[2.4] tracking-wider font-light max-w-2xl">
                                        映像制作20年。IMAGICAからフリーランス、そしてJUNESEP共同創業者を経て、再び個人の探究へ。<br />
                                        AIが進化し、成果物が量産される時代。だからこそ「作る前」に意味を見出し、それを価値にすることに心血を注ぐ。<br />
                                        肩書きや案件に迷わず、本質的な選択を行うためのOS（Identity）を構築しています。
                                    </p>
                                </div>
                            </FadeIn>

                            {/* Data Blocks - Horizontal Layout */}
                            <FadeIn delay={0.4}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-navy-50/50">
                                    {/* Experiences / Mindset */}
                                    <div className="space-y-4">
                                        <span className="text-[10px] tracking-[0.3em] text-rose-500 uppercase font-light">Background</span>
                                        <div className="space-y-2 text-xs text-navy-900 font-serif tracking-widest">
                                            <p>・経営を支える右腕としての伴走</p>
                                            <p>・数字と実務を繋ぐ経営管理リテラシー</p>
                                            <p>・事象の深層を突く問題発見力と分析</p>
                                        </div>
                                    </div>
                                    {/* Personal Info */}
                                    <div className="space-y-4">
                                        <span className="text-[10px] tracking-[0.3em] text-slate-400 uppercase font-light">Identity Info</span>
                                        <div className="space-y-2 text-xs text-slate-500 font-sans tracking-[0.1em] font-light italic">
                                            <p>Born: 1981</p>
                                            <p>Location: Tokyo / Japan</p>
                                            <p className="text-navy-900 not-italic font-serif tracking-widest mt-2">Role: Creative AI Director</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Right Column: Technical Stack (4 cols) */}
                        <div className="lg:col-span-4 space-y-12 lg:border-l lg:border-navy-50 lg:pl-16">
                            <FadeIn delay={0.6}>
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-rose-400 opacity-60" />
                                            <span className="text-[10px] tracking-[0.3em] text-navy-900 uppercase font-bold">Visual Technicals</span>
                                        </div>
                                        <div className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] text-navy-800 font-light tracking-[0.15em]">
                                            <span className="text-sky-600 font-medium">Aftereffects</span>
                                            <span>Premiere</span>
                                            <span>Cinema4D</span>
                                            <span>NUKE</span>
                                        </div>
                                    </div>

                                    <div className="w-full h-px bg-navy-50/50" />

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-rose-400 opacity-60" />
                                            <span className="text-[10px] tracking-[0.3em] text-navy-900 uppercase font-bold">AI Stack</span>
                                        </div>
                                        <div className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] text-navy-800 font-light tracking-[0.15em]">
                                            <span className="text-sky-600 font-medium">Antigravity</span>
                                            <span className="text-sky-600 font-medium">Claude Code</span>
                                            <span>ComfyUI</span>
                                            <span>Gemini</span>
                                            <span>Claude</span>
                                            <span>ChatGPT</span>
                                        </div>
                                    </div>

                                    <div className="w-full h-px bg-navy-50/50" />

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-navy-900 opacity-60" />
                                            <span className="text-[10px] tracking-[0.3em] text-navy-900 uppercase font-bold">Core OS</span>
                                        </div>
                                        <div className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] text-navy-800 font-light tracking-[0.15em]">
                                            <span>Philosophy</span>
                                            <span className="text-sky-600 font-medium">Creative Thinking</span>
                                            <span>Deep Questioning</span>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career OS Visualization */}
            <CreativeOS />

            {/* The 3 Axes (Concept) */}
            <section className={`${LAYOUT_PX} py-32 bg-white`}>
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <FadeIn>
                        <h2 className="text-4xl font-extralight text-navy-900 font-serif tracking-widest mb-8">3つの活動軸</h2>
                        <p className="text-slate-500 text-sm font-light tracking-widest leading-relaxed">
                            TOYXという事業体は、3つの領域が有機的に結合し、<br />
                            相互にリソースを循環させることで成立しています。
                        </p>
                    </FadeIn>
                </div>
                <AxesSection />
            </section>

            {/* Integration Message */}
            <section className={`${LAYOUT_PX} py-32 bg-navy-50/20 backdrop-blur-sm border-y border-navy-100/50`}>
                <div className="max-w-2xl mx-auto text-center space-y-12">
                    <FadeIn>
                        <p className="text-sm font-light leading-[2.5] tracking-widest text-slate-700">
                            TOYXは、単なる屋号ではありません。<br />
                            「個人の創造性」を「AI」で拡張し、組織に頼らずとも<br />
                            個人価値のインパクトを最大化できることを証明する私の挑戦です。
                        </p>
                        <div className="pt-12">
                            <span className="text-[10px] tracking-[0.5em] text-rose-500 uppercase opacity-60">Career Judgment</span>
                            <h3 className="text-xl font-serif text-navy-900 mt-4 tracking-widest italic">その仕事は、「意味の起点」に関われるか。</h3>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
