"use client";

import { FadeIn } from "@/components/animations/FadeIn";

export default function WhySection() {
    return (
        <section className="relative py-32 px-6">
            <div className="mx-auto max-w-4xl text-center">
                <FadeIn>
                    <span className="text-xs font-light tracking-[0.3em] text-rose-500 uppercase mb-8 block">
                        Why we ask
                    </span>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <h2 className="text-4xl md:text-5xl font-extralight text-navy-900 leading-tight mb-12">
                        答えより、問い。<br />
                        <span className="italic">Question over answer.</span>
                    </h2>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="space-y-8 text-lg md:text-xl font-light text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        <p>
                            効率化が進み、答えがすぐに手に入る時代。<br />
                            でも、その答えは本当に必要だったのか？
                        </p>
                        <p>
                            大切なのは「何を問うか」。<br />
                            問いが変われば、見える世界が変わる。
                        </p>
                        <p className="text-navy-900 font-normal">
                            私は問いかけ続ける。それが、私の仕事。
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
