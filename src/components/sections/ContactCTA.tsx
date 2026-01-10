"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { LAYOUT_PX } from "@/lib/constants";
import Link from "next/link";

export default function ContactCTA() {
    return (
        <section className={`py-32 ${LAYOUT_PX} relative overflow-hidden bg-navy-900`}>
            {/* Decorative localized caustic effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-50 rounded-full blur-[120px] opacity-30" />
            </div>

            <div className="relative mx-auto max-w-5xl text-center">
                <FadeIn>
                    <h2 className="text-4xl md:text-6xl font-extralight text-white mb-8 leading-tight">
                        問いが、明日を創る。<br />
                        <span className="text-2xl md:text-3xl text-white/50 block mt-4 font-extralight italic">Question creates the future.</span>
                    </h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p className="text-lg md:text-xl font-light text-white/70 mb-16 max-w-2xl mx-auto leading-relaxed">
                        解のない時代に、共に立ち向かう。<br />
                        プロセスの中にこそ、本質的な価値が宿る。
                    </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center px-12 py-5 bg-white text-navy-900 transition-all duration-700 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                    >
                        <span className="relative z-10 font-light tracking-widest uppercase text-sm">
                            Contact me
                        </span>
                        <div className="absolute inset-0 w-0 bg-rose-50 group-hover:w-full transition-all duration-700 -z-0" />
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
}
