"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Video, Sparkles, Megaphone } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Video Production",
        jpTitle: "映像制作",
        desc: "光を操り、物語を紡ぐ。企業VP、イベント映像、空間演出など、本質を射抜く映像表現を提供します。",
        icon: <Video className="w-8 h-8" />,
        link: "/services#video"
    },
    {
        title: "AI Strategy",
        jpTitle: "AI導入支援",
        desc: "問いから始める、本質的なAI活用。ツールの導入だけでなく、組織の創造性を拡張する設計を支援します。",
        icon: <Sparkles className="w-8 h-8" />,
        link: "/services#ai"
    },
    {
        title: "PR & Storytelling",
        jpTitle: "広報支援",
        desc: "伝わる物語を、戦略的に設計。単なる情報発信ではなく、社会との「問いの共有」を実現します。",
        icon: <Megaphone className="w-8 h-8" />,
        link: "/services#pr"
    }
];

export default function WhatSection() {
    return (
        <section className="py-32 px-6">
            <div className="mx-auto max-w-7xl">
                <FadeIn>
                    <div className="mb-20">
                        <span className="text-xs font-light tracking-[0.3em] text-rose-500 uppercase mb-4 block">
                            What we provide
                        </span>
                        <h2 className="text-4xl font-extralight text-navy-900">サービス領域</h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {services.map((service, i) => (
                        <FadeIn key={service.title} delay={i * 0.2}>
                            <div className="group border-b border-navy-100 pb-12 h-full flex flex-col">
                                <div className="text-navy-300 group-hover:text-rose-400 transition-colors duration-500 mb-8">
                                    {service.icon}
                                </div>
                                <div className="mb-6">
                                    <h3 className="text-sm font-light tracking-widest text-slate-400 uppercase mb-2">
                                        {service.title}
                                    </h3>
                                    <h4 className="text-2xl font-light text-navy-900">
                                        {service.jpTitle}
                                    </h4>
                                </div>
                                <p className="text-slate-600 font-light leading-relaxed mb-8 flex-grow">
                                    {service.desc}
                                </p>
                                <Link
                                    href={service.link}
                                    className="inline-flex items-center text-sm font-light text-navy-900 group-hover:translate-x-2 transition-transform duration-500"
                                >
                                    Learn more <span className="ml-2">→</span>
                                </Link>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
