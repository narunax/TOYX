"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { getServices } from "@/lib/data";
import { Video, Sparkles, Megaphone, Check } from "lucide-react";
import Link from "next/link";

const iconMap = {
    Video: Video,
    Sparkles: Sparkles,
    Megaphone: Megaphone,
};

export default function ServicesPage() {
    const services = getServices();

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 bg-slate-50/50">
            <div className="mx-auto max-w-7xl">
                <FadeIn>
                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-6xl font-extralight text-navy-900 mb-6">Services</h1>
                        <p className="text-slate-600 font-light max-w-2xl mx-auto">
                            伴走し、共に問いを立てる。<br />
                            答えを出すことではなく、そのプロセスから意味と意義を見出していく。
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 gap-12">
                    {services.map((service, i) => {
                        const Icon = iconMap[service.iconName];

                        return (
                            <FadeIn key={service.id} delay={i * 0.2}>
                                <div id={service.id} className="bg-white p-8 md:p-12 shadow-sm border border-slate-100 rounded-sm hover:shadow-md transition-shadow duration-500">
                                    <div className="flex flex-col md:flex-row gap-12">
                                        <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                                            <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center text-navy-900 mb-6">
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <h2 className="text-2xl font-light text-navy-900 mb-2">{service.jpTitle}</h2>
                                            <span className="text-xs font-light tracking-widest text-slate-400 uppercase mb-6 block">
                                                {service.title}
                                            </span>
                                            <div className="mt-auto pt-6 border-t border-slate-100 w-full">
                                                <p className="text-rose-500 font-normal text-lg">
                                                    {service.priceRange}
                                                </p>
                                                <span className="text-xs text-slate-400 block mt-1">
                                                    ※ 内容により変動します
                                                </span>
                                            </div>
                                        </div>

                                        <div className="md:w-2/3">
                                            <p className="text-lg font-light text-slate-600 leading-relaxed mb-8">
                                                {service.description}
                                            </p>

                                            <div className="bg-slate-50 p-6 rounded-sm">
                                                <h3 className="text-sm font-normal text-navy-900 mb-4 block">主な提供内容</h3>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {service.features.map((feature) => (
                                                        <li key={feature} className="flex items-start text-sm font-light text-slate-600">
                                                            <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="mt-8 text-right">
                                                <Link
                                                    href="/contact"
                                                    className="inline-flex items-center text-sm font-light text-navy-900 border-b border-rose-400 pb-1 hover:text-rose-500 transition-colors"
                                                >
                                                    このサービスについて相談する
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
