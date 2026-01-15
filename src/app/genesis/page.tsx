"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { LAYOUT_PX } from "@/lib/constants";
import { motion } from "framer-motion";

export default function GenesisPage() {
    return (
        <main className="relative pt-32 selection:bg-rose-100 selection:text-rose-900">
            {/* Header spacing */}
            <div className="h-24 md:h-32" />

            {/* Hero Section */}
            <section className={`${LAYOUT_PX} mb-32`}>
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <span className="text-[10px] font-light tracking-[0.5em] text-rose-500 uppercase mb-8 block opacity-80">
                            Genesis
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extralight text-navy-900 mb-12 tracking-tight font-serif leading-tight">
                            問いかけることで、<br />本質が見える。
                        </h1>
                        <p className="text-slate-400 font-light tracking-[0.3em] uppercase text-xs mb-24 font-serif italic">
                            Vision Through Questioning
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Why Section - Deep Philosophy */}
            <section className={`${LAYOUT_PX} py-32 bg-navy-50/30 backdrop-blur-sm relative overflow-hidden`}>
                {/* Background Element */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-linear-to-b from-navy-100/50 via-transparent to-navy-100/50 opacity-30" />

                <div className="max-w-2xl mx-auto relative z-10">
                    <FadeIn>
                        <h2 className="text-3xl font-extralight text-navy-900 mb-16 tracking-widest font-serif text-center">
                            理念の背景：なぜ「問い」なのか
                        </h2>
                    </FadeIn>

                    <div className="space-y-24 text-slate-700 font-light leading-relaxed tracking-wide">
                        <FadeIn delay={0.2}>
                            <div className="space-y-6">
                                <h3 className="text-xl text-navy-800 font-serif border-l-2 border-rose-200 pl-6 py-1">答えが溢れる時代</h3>
                                <p className="pl-7">
                                    現代は効率化・合理化が極限まで進んだ時代。<br />
                                    AIが瞬時に答えを出し、検索すればあらゆる情報が手に入る。<br />
                                    最適解が即座に提示される、静かな飽和。
                                </p>
                                <div className="pl-7 py-8">
                                    <p className="text-navy-900 font-medium italic font-serif text-lg leading-loose">
                                        しかし――<br />
                                        その答えは、本当に必要だったのか？<br />
                                        そもそも、正しい問いを立てていたのか？
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="space-y-6 text-center">
                                <h3 className="text-xl text-navy-800 font-serif mb-8 whitespace-nowrap">大切なのは「何を問うか」</h3>
                                <p className="max-w-lg mx-auto">
                                    答えの質は、問いの質で決まる。<br />
                                    浅い問いは浅い答えを、本質的な問いは本質的な答えを生む。
                                </p>
                                <p className="text-2xl text-navy-900 font-serif mt-12 tracking-widest leading-relaxed">
                                    問いが変われば、<br />見える世界が変わる。
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.6}>
                            <div className="space-y-8 bg-white/40 p-12 border border-white/60 shadow-sm">
                                <h3 className="text-xs font-light tracking-[0.3em] text-rose-500 uppercase text-center mb-0">TOYXの立場</h3>
                                <p className="text-center">
                                    私は、答えを急がない。まず、問う。<br />
                                    本当に解決すべき課題は何か？ なぜ、それが必要なのか？<br />
                                    どう問えば、本質に辿り着けるか？
                                </p>
                                <p className="text-center text-navy-900 font-medium font-serif mt-6">
                                    問いかけることで、本質が見える。<br />
                                    それが、TOYXの仕事。
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Values & Methodology */}
            <section className={`${LAYOUT_PX} py-48`}>
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
                        <FadeIn>
                            <div className="sticky top-48">
                                <h2 className="text-4xl font-extralight text-navy-900 mb-8 font-serif">価値観・哲学</h2>
                                <div className="w-12 h-px bg-rose-400 opacity-60 mb-8" />
                                <p className="text-slate-500 text-sm leading-relaxed max-w-sm tracking-widest">
                                    TOY（問い・遊び）と X（未知）の掛け合わせ。<br />
                                    それは、真剣に遊び、遊ぶように探求する姿勢そのものです。
                                </p>
                            </div>
                        </FadeIn>

                        <div className="space-y-16">
                            {[
                                { title: "答えより、問い", desc: "効率化・最適化が進む時代だからこそ、「これは本当に必要か？」という根源的な疑問に立ち戻る。その一歩に最大の重心を置く。" },
                                { title: "遊び心を忘れない", desc: "真剣に遊び、遊ぶように探求する。固定観念を脱ぎ捨て、自由な発想で本質に迫るクリエイティブの純度。" },
                                { title: "対話という共創", desc: "答えの提示ではなく、問いの深掘り。共に不確実性に潜るプロセスそのものが、揺るぎない価値の源泉となる。" },
                                { title: "探求に終わりはない", desc: "一度の充足に満足せず、問いを磨き続ける。本質とは、絶えざる問いの集積の先に出現するもの。" },
                                { title: "未知を歓迎する", desc: "変化を受け入れる。未知と掛け合わせる。X（変数）という不確定要素は、さらなる拡張への入り口となる。" }
                            ].map((item, i) => (
                                <FadeIn key={item.title} delay={i * 0.1}>
                                    <div className="group">
                                        <div className="flex items-baseline gap-6 mb-4">
                                            <span className="text-[10px] text-rose-400 font-sans opacity-40 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                                            <h3 className="text-xl font-light text-navy-900 font-serif tracking-widest transition-colors duration-500">{item.title}</h3>
                                        </div>
                                        <p className="pl-10 text-slate-600 text-sm leading-relaxed tracking-wider font-light">
                                            {item.desc}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className={`${LAYOUT_PX} py-48 bg-navy-900 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <FadeIn>
                        <p className="text-rose-400 text-xs tracking-[0.5em] mb-16 uppercase opacity-80">Mission</p>
                        <h2 className="text-2xl md:text-3xl font-extralight leading-[2.2] tracking-[0.1em] font-serif">
                            課題に「答え」を出すことよりも、<br />
                            本質的な「問い」を見つけ出すことに執着する。<br />
                            その問いを共有できた瞬間こそが、最も価値ある成果物となる。
                        </h2>
                        <div className="mt-24 inline-flex items-center gap-4">
                            <div className="w-8 h-px bg-white/30" />
                            <p className="text-sm font-light tracking-widest text-white/60">TOYX Philosophy</p>
                            <div className="w-8 h-px bg-white/30" />
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
