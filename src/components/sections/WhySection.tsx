"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { LAYOUT_PX } from "@/lib/constants";

export default function WhySection() {
    return (
        <section className={`py-32 ${LAYOUT_PX} bg-slate-50/50`}>
            <div className="mx-auto max-w-6xl text-center">
                <FadeIn>
                    <span className="text-[10px] font-light tracking-[0.4em] text-rose-500 uppercase mb-12 block opacity-80">
                        Why we ask
                    </span>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <h2 className="text-5xl md:text-6xl font-extralight text-navy-900 leading-[1.4] mb-16 tracking-tight">
                        答えより、問い。<br />
                        <span className="italic font-thin text-slate-400 text-3xl md:text-4xl mt-4 block">Question over answer.</span>
                    </h2>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="space-y-10 text-xl md:text-2xl font-extralight text-slate-600 leading-[2.2] max-w-2xl mx-auto">
                        <p className="tracking-wide">
                            答えはノイズの中にあり、<br />
                            本質は、言葉になる前の静寂にこそ宿る。
                        </p>
                        <p className="tracking-wide">
                            大切なのは「何を問うか」。<br />
                            問いが変われば、見える世界が変わる。
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
