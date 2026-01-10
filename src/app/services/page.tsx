"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { LAYOUT_PX } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
    return (
        <main className={`min-h-screen pt-32 pb-20 ${LAYOUT_PX} bg-slate-50/50`}>
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <section className="mb-32">
                    <FadeIn>
                        <span className="text-xs font-light tracking-[0.3em] text-rose-500 uppercase mb-8 block">
                            Services
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extralight text-navy-900 mb-12 leading-tight">
                            意味を定義し、<br />
                            形を与え、<br />
                            資産にする。
                        </h1>
                        <p className="text-lg font-light text-slate-600 leading-relaxed max-w-2xl">
                            作ることは、目的ではありません。<br />
                            TOYXは、クリエイティブ・AI・経営という異なる領域を統合し、<br />
                            一過性の「消費」で終わらせない、事業の「資産」となるプロジェクトを設計します。
                        </p>
                    </FadeIn>
                </section>

                {/* Domains */}
                <div className="space-y-32">
                    {/* 01: Concept */}
                    <section className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-slate-200 pt-16">
                        <div className="md:col-span-4">
                            <FadeIn>
                                <span className="text-6xl font-thin text-slate-200 block mb-4">01</span>
                                <h2 className="text-2xl font-light text-navy-900 tracking-wide">
                                    Concept Design
                                </h2>
                                <span className="text-xs font-light text-slate-400 block mt-2 tracking-widest uppercase">
                                    Why / Meaning
                                </span>
                            </FadeIn>
                        </div>
                        <div className="md:col-span-8">
                            <FadeIn delay={0.2}>
                                <p className="text-lg font-light text-slate-600 leading-relaxed mb-8">
                                    プロジェクトの成否は、作る前の「問い」で決まります。<br />
                                    なぜやるのか。誰のためにあるのか。その核となる概念を言語化し、ぶれない指針を策定します。<br />
                                    「とりあえず作る」という迷走を防ぎ、経営資源の最大化を図ります。
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-baseline text-sm font-light text-slate-500 border-b border-slate-100 pb-2">
                                        <span className="w-2 h-2 bg-rose-300 rounded-full mr-4 flex-shrink-0"></span>
                                        ブランディング / コンセプト開発
                                    </li>
                                    <li className="flex items-baseline text-sm font-light text-slate-500 border-b border-slate-100 pb-2">
                                        <span className="w-2 h-2 bg-rose-300 rounded-full mr-4 flex-shrink-0"></span>
                                        新規事業の壁打ち / 企画立案
                                    </li>
                                    <li className="flex items-baseline text-sm font-light text-slate-500 border-b border-slate-100 pb-2">
                                        <span className="w-2 h-2 bg-rose-300 rounded-full mr-4 flex-shrink-0"></span>
                                        クリエイティブ・ディレクション
                                    </li>
                                </ul>
                            </FadeIn>
                        </div>
                    </section>

                    {/* 02: Visual */}
                    <section className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-slate-200 pt-16">
                        <div className="md:col-span-4">
                            <FadeIn>
                                <span className="text-6xl font-thin text-slate-200 block mb-4">02</span>
                                <h2 className="text-2xl font-light text-navy-900 tracking-wide">
                                    Visual Architecture
                                </h2>
                                <span className="text-xs font-light text-slate-400 block mt-2 tracking-widest uppercase">
                                    How / Expression
                                </span>
                            </FadeIn>
                        </div>
                        <div className="md:col-span-8">
                            <FadeIn delay={0.2}>
                                <p className="text-lg font-light text-slate-600 leading-relaxed mb-8">
                                    見えない価値を、見える形へ。<br />
                                    25年のキャリアで培った映像言語と、最新のAI生成技術を融合。<br />
                                    ただ美しいだけでなく、思想を直感的に「伝える」ための機能するデザインを構築します。
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-baseline text-sm font-light text-slate-500 border-b border-slate-100 pb-2">
                                        <span className="w-2 h-2 bg-navy-300 rounded-full mr-4 flex-shrink-0"></span>
                                        映像制作 (TVCM / Web / Brand Movie)
                                    </li>
                                    <li className="flex items-baseline text-sm font-light text-slate-500 border-b border-slate-100 pb-2">
                                        <span className="w-2 h-2 bg-navy-300 rounded-full mr-4 flex-shrink-0"></span>
                                        UI/UXデザイン / Webデザイン
                                    </li>
                                    <li className="flex items-baseline text-sm font-light text-slate-500 border-b border-slate-100 pb-2">
                                        <span className="w-2 h-2 bg-navy-300 rounded-full mr-4 flex-shrink-0"></span>
                                        ロゴ / グラフィック / アートディレクション
                                    </li>
                                </ul>
                            </FadeIn>
                        </div>
                    </section>

                    {/* 03: AI Integration */}
                    <section className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-slate-200 pt-16">
                        <div className="md:col-span-4">
                            <FadeIn>
                                <span className="text-6xl font-thin text-slate-200 block mb-4">03</span>
                                <h2 className="text-2xl font-light text-navy-900 tracking-wide">
                                    AI Product Design
                                </h2>
                                <span className="text-xs font-light text-slate-400 block mt-2 tracking-widest uppercase">
                                    What / Implementation
                                </span>
                            </FadeIn>
                        </div>
                        <div className="md:col-span-8">
                            <FadeIn delay={0.2}>
                                <p className="text-lg font-light text-slate-600 leading-relaxed mb-8">
                                    AIは魔法ではありません。実務で機能しなければ意味がない。<br />
                                    現場レベルでのプロトタイピングから、組織への導入支援まで。<br />
                                    「人間の創造性」を拡張するための、現実的で持続可能なAI活用を実装します。
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-baseline text-sm font-light text-slate-500 border-b border-slate-100 pb-2">
                                        <span className="w-2 h-2 bg-slate-400 rounded-full mr-4 flex-shrink-0"></span>
                                        AIプロトタイピング / PoC開発
                                    </li>
                                    <li className="flex items-baseline text-sm font-light text-slate-500 border-b border-slate-100 pb-2">
                                        <span className="w-2 h-2 bg-slate-400 rounded-full mr-4 flex-shrink-0"></span>
                                        業務フロー改善 / 生成AI導入コンサルティング
                                    </li>
                                    <li className="flex items-baseline text-sm font-light text-slate-500 border-b border-slate-100 pb-2">
                                        <span className="w-2 h-2 bg-slate-400 rounded-full mr-4 flex-shrink-0"></span>
                                        インハウス・クリエイティブ支援
                                    </li>
                                </ul>
                            </FadeIn>
                        </div>
                    </section>
                </div>

                {/* Footer CTA */}
                <section className="mt-32 pt-16 border-t border-navy-900/10 text-center">
                    <FadeIn>
                        <p className="text-slate-600 font-light mb-8">
                            プロジェクトの規模は問いません。<br />
                            本質的な変化を望むパートナーとして、対話から始めましょう。
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center text-navy-900 border border-navy-900 px-8 py-3 hover:bg-navy-900 hover:text-white transition-all duration-300"
                        >
                            <span className="tracking-widest mr-4 text-sm font-light">CONTACT</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </FadeIn>
                </section>
            </div>
        </main>
    );
}
