"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { LAYOUT_PX } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function ValuePage() {
    return (
        <main className="relative pt-32 selection:bg-rose-100 selection:text-rose-900">
            <div className="h-24 md:h-32" />

            {/* Hero Section */}
            <section className={`${LAYOUT_PX} mb-24 text-center`}>
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <span className="text-[10px] font-light tracking-[0.5em] text-rose-500 uppercase mb-8 block opacity-80">
                            Value
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extralight text-navy-900 mb-8 tracking-tight font-serif leading-tight">
                            Value Architecture
                        </h1>
                        <p className="text-slate-500 font-light tracking-widest text-sm max-w-xl mx-auto leading-relaxed italic">
                            意味の混濁を排し、純度の高い接続を試みる。
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className={`${LAYOUT_PX} py-32 bg-navy-900 text-white`}>
                <div className="max-w-5xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl font-extralight mb-24 font-serif tracking-widest text-center">現象の歪み、あるいは停滞の正体</h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {[
                            { title: "方向性が定まらない", desc: "「なぜ、良いものを作ったはずなのに届かないのか？」という徒労感。" },
                            { title: "企画がふわっとしている", desc: "社内の認識がズレたまま進み、手戻りで予算が溶けていく恐怖。" },
                            { title: "AIをどう使えばいいかわからない", desc: "波に乗り遅れる焦りと、導入しても使われないリスク。" },
                            { title: "後から修正が止まらない", desc: "終わりのないプロジェクトによる、精神的リソースの枯渇。" }
                        ].map((item, i) => (
                            <FadeIn key={item.title} delay={i * 0.1}>
                                <div className="p-10 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500">
                                    <h3 className="text-xl font-light mb-4 font-serif tracking-widest text-rose-300 italic"># {item.title}</h3>
                                    <p className="text-sm text-white/60 leading-relaxed font-light tracking-wider">
                                        {item.desc}
                                    </p>
                                    <div className="mt-8 h-px w-8 bg-rose-500/50" />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gain / Provided Value */}
            <section className={`${LAYOUT_PX} py-48`}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-32">
                        <FadeIn>
                            <h2 className="text-4xl font-extralight text-navy-900 font-serif tracking-widest mb-12 italic">
                                本質的な均衡への回帰
                            </h2>
                            <p className="text-slate-500 font-light tracking-[0.2em] leading-[2] max-w-2xl mx-auto">
                                正解のない問いに対して、最短距離での「納得解」を見出す。<br />
                                思考のノイズを削ぎ落とし、事業という名の表現へと沈潜する。
                            </p>
                        </FadeIn>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "起点における純度の保持", desc: "最初のボタンの掛け違いを未然に防ぎ、プロジェクト全体の輪郭を構造的に支える。" },
                            { title: "潜行の深度を深める", desc: "意思決定の摩擦を最小化し、チームが淀みなく本質へ向かうための軸を確立。" },
                            { title: "表現の組成を整える", desc: "曖昧な指示によるノイズを解消。仕事の『質』そのものを、誇りへと昇華させる。" }
                        ].map((item, i) => (
                            <FadeIn key={item.title} delay={i * 0.2}>
                                <div className="space-y-6 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 border border-navy-50 bg-slate-50 flex items-center justify-center">
                                        <Check className="w-6 h-6 text-rose-500 opacity-60" />
                                    </div>
                                    <h3 className="text-lg font-light text-navy-900 tracking-widest font-serif">{item.title}</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed tracking-wider font-light">
                                        {item.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Assets / Service details */}
            <section className={`${LAYOUT_PX} py-32 bg-slate-50 border-t border-navy-100/50`}>
                <div className="max-w-5xl mx-auto">
                    <FadeIn>
                        <div className="mb-24">
                            <span className="text-[10px] tracking-[0.4em] text-rose-500 block mb-4 uppercase">Elements</span>
                            <h2 className="text-3xl font-extralight text-navy-900 font-serif tracking-widest">表現の構成要素</h2>
                        </div>
                    </FadeIn>

                    <div className="space-y-8">
                        {[
                            { id: "WHY", role: "Concept Creator", title: "コンセプト設計", desc: "なぜそれを作るのか、その意味を定義し、組織に蓄積される資産としての形を与える。" },
                            { id: "HOW", role: "Visual Creator", title: "ビジュアル制作", desc: "想いや概念を、直感的に伝わる「構成」へと翻訳。視覚的な納得感へと接続させる。" },
                            { id: "WHAT", role: "AI Product Designer", title: "プロダクト開発", desc: "現実に動くシステムやプロトタイプを構築。検証サイクルを最速化させる実効性。" },
                            { id: "Ops", role: "中小企業 × AI 実装", title: "AI導入支援", desc: "経営と現場へ定着させ、自走が始まる状態を構築するための伴走と技術支援。" }
                        ].map((item, i) => (
                            <FadeIn key={item.id} delay={i * 0.1}>
                                <div className="group flex flex-col md:flex-row md:items-center gap-8 p-10 bg-white border border-navy-100/50 hover:border-navy-200 transition-all duration-700">
                                    <div className="flex flex-col items-center justify-center w-24 h-24 border border-navy-50 flex-shrink-0 group-hover:bg-navy-900 group-hover:text-white transition-all duration-700">
                                        <span className="text-[10px] tracking-widest font-sans mb-1 opacity-60 uppercase">{item.id}</span>
                                        <span className="text-xs font-serif italic">Layer</span>
                                    </div>
                                    <div className="flex-grow">
                                        <span className="text-[10px] tracking-[0.2em] text-rose-500 opacity-60 uppercase mb-2 block">{item.role}</span>
                                        <h3 className="text-xl font-light text-navy-900 tracking-widest font-serif mb-4">{item.title}</h3>
                                        <p className="text-sm font-light text-slate-500 tracking-wider leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcome Section */}
            <section className={`${LAYOUT_PX} py-48 text-center`}>
                <div className="max-w-3xl mx-auto">
                    <FadeIn>
                        <h2 className="text-4xl font-extralight text-navy-900 font-serif tracking-widest mb-16 italic">
                            事象をどう変容させるか
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm font-light tracking-widest text-slate-600 mb-24">
                            <p>「とりあえず」という思考の停止が消える</p>
                            <p>判断の解像度が上がる</p>
                            <p>チームの視点が一つの座標に揃う</p>
                        </div>
                        <p className="text-xl font-serif text-navy-900 leading-loose tracking-[0.1em]">
                            その結果として<br />
                            <span className="text-2xl font-medium border-b-2 border-rose-200 py-2">時間・コスト・精神的負荷が最小化</span>され、<br />
                            事業の本質のみに集中できる環境へと繋がる。
                        </p>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
