"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Video, Sparkles, Megaphone } from "lucide-react";
import Link from "next/link";
import { LAYOUT_PX } from "@/lib/constants";

const services = [
    {
        title: "Visual Narrative",
        jpTitle: "映像表現",
        desc: "光と時間軸の設計。目に見えない想いや空気感を、視覚体験として定着させる。",
        icon: <Video className="w-5 h-5" />,
        link: "/services#video"
    },
    {
        title: "Computational Creativity",
        jpTitle: "生成AI・共創",
        desc: "人間の想像力を拡張するパートナーとしてのAI。偶発性と意図の狭間にある新しい美。",
        icon: <Sparkles className="w-5 h-5" />,
        link: "/services#ai"
    },
    {
        title: "Social Sculpture",
        jpTitle: "広報・関係性",
        desc: "社会という大きなキャンバスに、問いを投げかける。共鳴を生み出す文脈の設計。",
        icon: <Megaphone className="w-5 h-5" />,
        link: "/services#pr"
    }
];

export default function WhatSection() {
    return (
        <section id="services" className={`py-32 ${LAYOUT_PX} bg-slate-50/50`}>
            <div className="mx-auto max-w-7xl">
                <FadeIn>
                    <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between">
                        <div>
                            <span className="text-xs font-light tracking-[0.3em] text-rose-500 uppercase mb-4 block">
                                Domains
                            </span>
                            <h2 className="text-4xl font-extralight text-navy-900">表現領域</h2>
                        </div>
                        <p className="text-sm font-light text-slate-400 mt-6 md:mt-0 max-w-xs leading-relaxed">
                            静止することのない、<br />探求のフィールド。
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-slate-200">
                    {services.map((service, i) => (
                        <FadeIn key={service.title} delay={i * 0.1}>
                            <Link href={service.link} className="group block border-b border-slate-200 p-8 md:p-12 hover:bg-slate-50/50 transition-colors duration-700 h-full">
                                <div className="flex justify-between items-start mb-12">
                                    <span className="text-xs font-light tracking-widest text-slate-400 uppercase group-hover:text-rose-400 transition-colors">
                                        0{i + 1}
                                    </span>
                                    <div className="text-slate-300 group-hover:text-navy-900 transition-colors duration-500 rotate-0 group-hover:-rotate-12 transform origin-center">
                                        {service.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-light text-navy-900 mb-2 group-hover:translate-x-2 transition-transform duration-500">
                                    {service.jpTitle}
                                </h3>
                                <p className="text-xs font-light tracking-widest text-slate-400 uppercase mb-8 group-hover:translate-x-2 transition-transform duration-500 delay-75">
                                    {service.title}
                                </p>

                                <p className="text-sm text-slate-600 font-light leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                    {service.desc}
                                </p>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
