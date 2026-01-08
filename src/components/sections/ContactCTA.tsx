"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";

export default function ContactCTA() {
    return (
        <section className="relative py-48 px-6 overflow-hidden">
            {/* Decorative localized caustic effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-50 rounded-full blur-[120px] opacity-30" />
            </div>

            <div className="relative mx-auto max-w-4xl text-center">
                <FadeIn>
                    <h2 className="text-4xl md:text-6xl font-extralight text-navy-900 mb-8 leading-tight">
                        問いが、明日を創る。<br />
                        <span className="text-2xl md:text-3xl text-slate-400 block mt-4 font-extralight">Question creates the future.</span>
                    </h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p className="text-lg md:text-xl font-light text-slate-600 mb-16 max-w-2xl mx-auto leading-relaxed">
                        解のない時代に、共に立ち向かう。<br />
                        プロセスの中にこそ、本質的な価値が宿る。
                    </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center px-12 py-5 bg-navy-900 text-white transition-all duration-500 hover:bg-navy-800"
                    >
                        <span className="relative z-10 font-light tracking-widest uppercase text-sm">
                            Contact us
                        </span>
                        <div className="absolute inset-0 w-0 bg-rose-500 group-hover:w-full transition-all duration-500 -z-0" />
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
}
