"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { LAYOUT_PX } from "@/lib/constants";
import ContactForm from "@/components/contact/ContactForm";

export default function DialoguePage() {
    return (
        <main className="relative pt-32 selection:bg-rose-100 selection:text-rose-900">
            <div className="h-24 md:h-32" />

            {/* Hero Section */}
            <section className={`${LAYOUT_PX} mb-32`}>
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <span className="text-[10px] font-light tracking-[0.5em] text-rose-500 uppercase mb-8 block opacity-80">
                            Dialogue
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extralight text-navy-900 mb-12 tracking-tight font-serif leading-tight">
                            Dialogue
                        </h1>
                        <p className="text-slate-500 font-light tracking-[0.2em] text-sm max-w-xl mx-auto leading-relaxed">
                            プロセスの中にこそ、本質的な価値が宿る。<br />
                            ここから対話という余白をひらく。
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Contact Content */}
            <section className={`${LAYOUT_PX} py-32 bg-navy-50/20 border-y border-navy-100/50 backdrop-blur-sm`}>
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
                    {/* Text and Philosophy */}
                    <FadeIn>
                        <div className="space-y-16">
                            <div className="space-y-6">
                                <h2 className="text-2xl font-light text-navy-900 font-serif tracking-widest">
                                    対話の入口
                                </h2>
                                <p className="text-slate-600 text-sm leading-[2.2] tracking-wider font-light">
                                    「答えを教える側」ではなく、「問いを深める側」として存在する。<br />
                                    対話を通じて本質的な問いに辿り着くこと。そのプロセスこそが、最も価値ある成果となる。
                                </p>
                            </div>

                            <div className="space-y-12">
                                <div className="space-y-4">
                                    <h3 className="text-rose-500 text-[10px] tracking-[0.4em] uppercase">Partner for...</h3>
                                    <ul className="space-y-4 text-navy-900 font-serif tracking-widest text-sm">
                                        <li>・中小企業経営者 / 事業責任者</li>
                                        <li>・0→1、1→10のフェーズにある方</li>
                                        <li>・意味や軸を大切に。共に対話を深め、思索を愉しめる方</li>
                                        <li>・AIを「手段」として使い倒したい方</li>
                                    </ul>
                                </div>

                                <div className="pt-12 border-t border-navy-100">
                                    <p className="text-xs text-slate-400 font-light tracking-widest">
                                        返信の目安：通常24時間以内に応答する。<br />
                                        内容が具体的であるほど、より精度の高い「問い」を準備できる。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Contact Form */}
                    <FadeIn delay={0.3}>
                        <div className="bg-white p-12 border border-navy-100 shadow-2xl shadow-navy-900/5">
                            <ContactForm />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Footer-like closing message */}
            <section className={`${LAYOUT_PX} py-48 text-center`}>
                <FadeIn>
                    <p className="text-rose-400 text-xs tracking-[0.5em] mb-12 uppercase opacity-80">Perspective</p>
                    <h2 className="text-xl md:text-2xl font-extralight text-navy-900 font-serif italic tracking-[0.15em] leading-[2.5]">
                        "Question becomes the asset."<br />
                        問いは、いつかあなたの会社の資産になる。
                    </h2>
                </FadeIn>
            </section>
        </main>
    );
}
