"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { LAYOUT_PX } from "@/lib/constants";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import { motion } from "framer-motion";

export default function ArchitecturePage() {
    return (
        <main className="relative pt-32 selection:bg-rose-100 selection:text-rose-900">
            <div className="h-24 md:h-32" />

            {/* Hero Section */}
            <section className={`${LAYOUT_PX} mb-24`}>
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <span className="text-[10px] font-light tracking-[0.5em] text-rose-500 uppercase mb-8 block opacity-80">
                            Architecture
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extralight text-navy-900 mb-12 tracking-tight font-serif leading-tight">
                            連環の理 𝄇 Golden Circle への再編
                        </h1>
                    </FadeIn>
                </div>
            </section>

            {/* Main Architecture Visual/Section */}
            <ArchitectureSection />

            {/* Depth Analysis */}
            <section className={`${LAYOUT_PX} py-32`}>
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                        <FadeIn>
                            <div className="space-y-12">
                                <h2 className="text-2xl font-light text-navy-900 font-serif tracking-widest leading-loose">
                                    なぜ、「連環」なのか。<br />分断されない思考と実装。
                                </h2>
                                <p className="text-slate-600 text-sm leading-[2.2] tracking-wider font-light">
                                    WHY (起点) ⇄ HOW (翻訳・統合) ⇄ WHAT (実装)。<br />
                                    この「往復運動」を一人で完結させることは、概念の純度を保つための必然です。<br />
                                    通常、バラバラに外注される過程で思考が細切にされ、文脈という名の「血液」が失われていく。
                                </p>
                                <div className="p-8 border border-navy-50 bg-slate-50/50">
                                    <p className="text-xs font-light tracking-[0.2em] text-navy-400 mb-4 uppercase">Structural Integrity</p>
                                    <ul className="space-y-4 text-sm text-navy-900 font-serif tracking-widest">
                                        <li>・可逆性：具象から抽象へ、いつでも「本質」へと立ち戻れる</li>
                                        <li>・有機性：全体を一人の脳が把握することで、役割が分断されない</li>
                                        <li>・恒久性：成果が「消耗品」ではなく、固有の「思想」として定着する</li>
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="space-y-16">
                                <div className="space-y-6">
                                    <h3 className="text-rose-500 text-[10px] tracking-[0.4em] uppercase">WHY Layer</h3>
                                    <p className="text-navy-900 font-serif tracking-widest text-xl">Asset Strategy</p>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        存在理由を定義し、「やらないこと」を決める。ここが曖昧なまま進むと、後工程のすべては実りなき「コスト」として沈殿していく。
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-rose-500 text-[10px] tracking-[0.4em] uppercase">HOW Layer</h3>
                                    <p className="text-navy-900 font-serif tracking-widest text-xl">Integration Hub</p>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        全体の判断を統合。経営・技術・表現の「翻訳」を行い、AIを魔法ではなく実効的な手段として定義する。
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-rose-500 text-[10px] tracking-[0.4em] uppercase">WHAT Layer</h3>
                                    <p className="text-navy-900 font-serif tracking-widest text-xl">High-Definition Implementation</p>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        意味を直感に変換し、コンセプトを動く形にする。経営と現場に定着させ、自走が始まる状態を構築する。
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Trust Message */}
            <section className={`${LAYOUT_PX} py-48 bg-navy-50/10 border-t border-navy-100/50 relative overflow-hidden text-center`}>
                <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-navy-100 to-transparent" />

                <div className="max-w-3xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl font-extralight text-navy-900 mb-16 font-serif tracking-widest italic">
                            この構造（アーキテクチャ）そのものが、代わりの効かない信頼となる。
                        </h2>
                        <div className="flex flex-wrap justify-center gap-12 text-xs font-light text-slate-400 tracking-[0.3em] uppercase">
                            <span>"First Step Partner"</span>
                            <span>"Decision Hub"</span>
                            <span>"Strategic Architect"</span>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
