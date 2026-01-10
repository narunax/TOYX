"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";
import { LAYOUT_PX } from "@/lib/constants";
import { CareerOS } from "@/components/sections/CareerOS";

export default function AboutPage() {
    return (
        <main className={`min-h-screen pt-32 pb-20 ${LAYOUT_PX}`}>
            <div className="mx-auto max-w-6xl mb-48">
                {/* Philosophy */}
                <section className="mb-32">
                    <FadeIn>
                        <span className="text-xs font-light tracking-[0.3em] text-rose-500 uppercase mb-8 block">
                            Philosophy
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extralight text-navy-900 mb-12 leading-tight">
                            問いかけることで、<br />本質が見える。
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="prose prose-lg prose-slate font-light leading-relaxed">
                            <p>
                                世界は、すでに答えで溢れている。<br />
                                誰もが容易に正解を手にし、最短距離を走ろうとする。<br />
                                けれど、本当に見たい景色は、道草や遠回りのなかにこそ、潜んでいる。
                            </p>
                            <p>
                                TOYXは、クリエイティブとAIという二つの眼差しで、<br />
                                対象の内側に潜む、微細な光を捉える。
                            </p>
                            <p>
                                それは、何のために存在するのか。<br />
                                誰の心に、どんな波紋を広げるのか。
                            </p>
                            <p>
                                問い続けること。<br />
                                そこから、本当の輝きが見えてくる。
                            </p>
                        </div>
                    </FadeIn>
                </section>

                {/* Profile / Career OS */}
                <section className="border-t border-navy-100 pt-32">
                    <FadeIn>
                        <span className="text-xs font-light tracking-[0.3em] text-rose-500 uppercase mb-12 block">
                            Creative AI Director
                        </span>
                    </FadeIn>

                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="w-48 md:w-80 flex-shrink-0">
                            <FadeIn delay={0.2}>
                                <div className="w-full aspect-[3/4] bg-navy-50 relative rounded-sm overflow-hidden mb-8">
                                    <Image
                                        src="/image/profile.jpg"
                                        alt="Naruhito Inaba"
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-sm">
                                        <span className="text-[10px] tracking-[0.2em] text-slate-400 uppercase block mb-2">Core Domain</span>
                                        <p className="text-sm font-light text-navy-900 leading-relaxed">
                                            Creative × AI × 経営
                                        </p>
                                    </div>
                                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-sm">
                                        <span className="text-[10px] tracking-[0.2em] text-slate-400 uppercase block mb-2">Philosophy</span>
                                        <p className="text-sm font-light text-navy-900 leading-relaxed">
                                            Question over Answer.
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        <div className="flex-1">
                            <FadeIn delay={0.4}>
                                <div className="mb-12">
                                    <h2 className="text-3xl font-light text-navy-900 mb-2">
                                        稲葉 成人
                                    </h2>
                                    <span className="text-sm font-light text-slate-400 block tracking-widest">
                                        Naruhito Inaba / Creative AI Director
                                    </span>
                                </div>

                                <div className="space-y-8 text-slate-600 font-light leading-relaxed">
                                    <div>
                                        <h3 className="text-navy-900 font-normal mb-4 border-l-2 border-rose-300 pl-4">
                                            「翻訳」と「統合」の25年
                                        </h3>
                                        <p>
                                            映像制作の現場で25年、編集・CG・VFX・モーショングラフィックスといった技術の変遷を最前線で体現。東京でポストプロダクションスタジオを起業し、経営とクリエイティブの双方に深く携わってきました。
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-navy-900 font-normal mb-4 border-l-2 border-rose-300 pl-4">
                                            AIとの共創、その先へ
                                        </h3>
                                        <p>
                                            現在は独立し、AIを単なる効率化ツールではなく、人間の想像力を拡張するパートナーとして定義。技術・表現・経営が分断されがちな現代において、それらを一つの判断軸で繋ぎ直す「Creative AI Director」として活動しています。
                                        </p>
                                        <p className="mt-4">
                                            作る前に意味を見出すこと。そして、未知への実験（TOY）を楽しみながら、人間と技術の可能性（X）を拡張し続ける。それが私たちの終わらない挑戦です。
                                        </p>
                                    </div>

                                    <div className="pt-8">
                                        <Image
                                            src="/image/brand/signature.png"
                                            alt="TOYX Inaba"
                                            width={240}
                                            height={75}
                                            className="opacity-90"
                                        />
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>
            </div>
            {/* Career OS Visualization */}
            <CareerOS />
        </main>
    );
}
