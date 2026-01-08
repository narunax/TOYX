"use client";

import { FadeIn } from "@/components/animations/FadeIn";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="mx-auto max-w-4xl">
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
                                私たちは日々、膨大な情報の波に揉まれています。<br />
                                答えを急ぐあまり、大切な「問い」を見失ってはいないでしょうか。
                            </p>
                            <p>
                                TOYXは、映像とAIという二つの武器を用いて、<br />
                                あなたのビジネスやブランドに、本質的な問いを投げかけます。
                            </p>
                            <p>
                                なぜ、そのサービスが必要なのか。<br />
                                誰のための、どのような価値なのか。
                            </p>
                            <p>
                                問い続けるプロセスそのものが、<br />
                                唯一無二の物語（ストーリー）を生み出します。
                            </p>
                        </div>
                    </FadeIn>
                </section>

                {/* Profile */}
                <section className="border-t border-navy-100 pt-32">
                    <FadeIn>
                        <span className="text-xs font-light tracking-[0.3em] text-rose-500 uppercase mb-12 block">
                            Profile
                        </span>
                    </FadeIn>

                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <FadeIn delay={0.2}>
                            <div className="w-full md:w-64 aspect-[3/4] bg-navy-50 relative rounded-sm overflow-hidden">
                                {/* Profile Placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-navy-200 to-slate-100 opacity-50" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="block text-xs font-light tracking-widest text-navy-900">FOUNDER</span>
                                </div>
                            </div>
                        </FadeIn>

                        <div className="flex-1">
                            <FadeIn delay={0.4}>
                                <h2 className="text-3xl font-light text-navy-900 mb-2">
                                    稲葉 成人
                                </h2>
                                <span className="text-sm font-light text-slate-400 block mb-8">
                                    Naruhito Inaba / Video Creator & AI Strategist
                                </span>

                                <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                                    <p>
                                        映像制作歴20年。TVCM、MV、企業VPなど多岐にわたる制作に携わる。<br />
                                        「美しい映像」を作るのは当たり前。そこに「思想」がなければ、人の心は動かせないという信念を持つ。
                                    </p>
                                    <p>
                                        2023年より生成AIの研究を開始。<br />
                                        クリエイティブの現場におけるAIの実践的な活用法を探求し、
                                        「AI × 人間の共創」をテーマに活動している。
                                    </p>
                                    <p>
                                        JUNESEP 代表。<br />
                                        TOYX プロジェクト主宰。
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
