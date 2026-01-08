"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Layers, Lightbulb, MessageSquare } from "lucide-react";

const cards = [
    {
        title: "TOY × X",
        desc: "問い・遊び場 × 未知・可能性。組み合わせによる化学反応を探求します。",
        icon: <Layers className="w-6 h-6" />,
    },
    {
        title: "Creative",
        desc: "20年の映像制作経験を軸に、光と思想を掛け合わせた表現を構築します。",
        icon: <Lightbulb className="w-6 h-6" />,
    },
    {
        title: "Dialogue",
        desc: "対話を通じて、クライアントの内側にある「真の問い」を共に発見します。",
        icon: <MessageSquare className="w-6 h-6" />,
    }
];

export default function HowSection() {
    return (
        <section className="py-32 px-6 bg-navy-50/50">
            <div className="mx-auto max-w-7xl">
                <FadeIn>
                    <div className="mb-16 text-center">
                        <span className="text-xs font-light tracking-[0.3em] text-rose-500 uppercase mb-4 block">
                            How we work
                        </span>
                        <h2 className="text-3xl font-extralight text-navy-900">探求のプロセス</h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <FadeIn key={card.title} delay={i * 0.2}>
                            <div className="glass-card p-10 h-full flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-500">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-rose-400 shadow-sm mb-6">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-light text-navy-900 mb-4 tracking-wide">{card.title}</h3>
                                <p className="text-slate-600 font-light leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
