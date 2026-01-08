"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Layers, Lightbulb, MessageSquare } from "lucide-react";

const cards = [
    {
        title: "TOY × X",
        desc: "遊び心と未知数。規律ある実験場から、予期せぬ美しさを抽出する。",
        icon: <Layers className="w-5 h-5" />,
    },
    {
        title: "Light & Shadow",
        desc: "光を操り、影を及ぼす。映像という媒体を通じた、空間と時間の再構築。",
        icon: <Lightbulb className="w-5 h-5" />,
    },
    {
        title: "Resonance",
        desc: "言葉にならない声に耳を澄ます。対話を超えた領域での、本質的な共鳴。",
        icon: <MessageSquare className="w-5 h-5" />,
    }
];

export default function HowSection() {
    return (
        <section className="py-48 px-6 bg-navy-50/30">
            <div className="mx-auto max-w-7xl">
                <FadeIn>
                    <div className="mb-24 text-center md:text-left">
                        <span className="text-xs font-light tracking-[0.3em] text-rose-500 uppercase mb-4 block">
                            Approach
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extralight text-navy-900">思考と実験</h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                    {cards.map((card, i) => (
                        <FadeIn key={card.title} delay={i * 0.2}>
                            <div className="group relative">
                                <div className="absolute -left-6 top-0 text-slate-100 text-8xl font-thin -z-10 select-none transition-colors group-hover:text-rose-50 duration-700">
                                    0{i + 1}
                                </div>
                                <div className="mb-6 text-navy-300 group-hover:text-navy-900 transition-colors duration-500">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-light text-navy-900 mb-6 tracking-wide border-b border-navy-100 pb-2 inline-block">
                                    {card.title}
                                </h3>
                                <p className="text-slate-600 font-light leading-loose text-sm tracking-wide">
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
