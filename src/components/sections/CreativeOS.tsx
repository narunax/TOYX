"use client";

import { motion, Variants } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import Image from "next/image";

export default function CreativeOS() {
    // Animation variants for consistency
    const lineVariant: Variants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeInOut" }
        }
    };

    const nodeVariant: Variants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5, ease: "backOut" }
        }
    };

    // Synced pulse animation for nodes (triggered by the orbiting dot)
    // Duration matches the animateMotion (40s)
    const pulseKeyframes = {
        scale: [1, 1.2, 2, 1.2, 1],
        opacity: [0, 0.4, 0.8, 0.4, 0],
    };

    return (
        <section className="py-32 bg-navy-50/40 backdrop-blur-md overflow-hidden relative border-t border-navy-100/50">
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <FadeIn>
                    <div className="text-center mb-24">
                        <span className="text-xs font-light tracking-[0.3em] text-rose-500 uppercase mb-4 block">
                            Creative OS
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extralight text-navy-900 mb-6 tracking-tight font-serif">
                            Creative OS
                        </h2>
                        <p className="text-slate-500 font-light text-sm tracking-widest max-w-xl mx-auto leading-[2.2]">
                            立ち止まり、深く問い直すこと。<br />
                            そこに沈殿する「本質」と「意味」を掬いあげるとき、<br />
                            それは必然の中で、確かな「価値」へと姿を変える。
                        </p>
                    </div>
                </FadeIn>

                <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1] flex items-center justify-center">

                    {/* Mobile View: Image Asset */}
                    <div className="lg:hidden absolute inset-0 w-full h-full overflow-hidden border border-white/50 shadow-sm bg-slate-50">
                        <Image
                            src="/image/creative-os-diagram.png"
                            alt="Creative OS Diagram"
                            fill
                            className="object-cover scale-105"
                        />
                    </div>

                    {/* Desktop View: Interactive SVG (Square Axis) */}
                    <div className="hidden lg:block w-full h-full relative">
                        {/* Background Container - Transparent */}
                        <div className="absolute inset-0 bg-transparent -z-10" />

                        {/* SVG Visualization */}
                        <svg className="w-full h-full absolute inset-0 text-navy-900" viewBox="0 0 1200 800">

                            {/* THE ORBIT (Connection Ring - Faint) */}
                            <motion.circle
                                cx="600" cy="400" r="320"
                                fill="none"
                                stroke="#94a3b8" // slate-400
                                strokeWidth="0.5"
                                opacity="0.3"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 0.3 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                viewport={{ once: true }}
                            />

                            {/* AXIS CONNECTIONS */}
                            {/* To Top (Origin) */}
                            <motion.line
                                x1="600" y1="240" x2="600" y2="80"
                                stroke="#cbd5e1" strokeWidth="0.5"
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={lineVariant}
                            />
                            {/* To Bottom Left (Expression) */}
                            <motion.line
                                x1="480" y1="480" x2="323" y2="560"
                                stroke="#cbd5e1" strokeWidth="0.5"
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={lineVariant}
                            />
                            {/* To Bottom Right (Implementation) */}
                            <motion.line
                                x1="720" y1="480" x2="877" y2="560"
                                stroke="#cbd5e1" strokeWidth="0.5"
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={lineVariant}
                            />

                            {/* CENTRAL AXIS (Diamond Shape) */}
                            <motion.g initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delayChildren: 0.4 }}>
                                {/* Semi-transparent Fill */}
                                <motion.rect
                                    x="430" y="230" width="340" height="340"
                                    rx="2" ry="2"
                                    fill="rgba(255, 255, 255, 0.6)" // White, semi-transparent
                                    transform="rotate(45 600 400)"
                                    variants={nodeVariant}
                                />
                                {/* Border Line */}
                                <motion.rect
                                    x="430" y="230" width="340" height="340"
                                    rx="2" ry="2"
                                    stroke="#0f172a" strokeWidth="0.5" fill="none"
                                    opacity="0.8"
                                    transform="rotate(45 600 400)"
                                    variants={nodeVariant}
                                />
                                {/* Inner Decorative Line */}
                                <motion.rect
                                    x="450" y="250" width="300" height="300"
                                    rx="2" ry="2"
                                    stroke="#0f172a" strokeWidth="0.5" fill="none"
                                    opacity="0.1"
                                    strokeDasharray="4 4"
                                    transform="rotate(45 600 400)"
                                    variants={nodeVariant}
                                />
                            </motion.g>

                            {/* OUTER NODES (Precisely on Orbit r=320) */}
                            {/* 1. Origin (Top) */}
                            <motion.g initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delayChildren: 0.8 }}>
                                <motion.circle cx="600" cy="80" r="4" fill="#0f172a" variants={nodeVariant} />
                                <motion.circle cx="600" cy="80" r="30" stroke="#0f172a" strokeWidth="0.5" fill="none" opacity="0.1" variants={nodeVariant} />

                                {/* Pulse Effect (SMIL for perfect sync) */}
                                <circle cx="600" cy="80" r="4" fill="#f43f5e" opacity="0">
                                    <animate attributeName="r" values="4;50;50" dur="12s" repeatCount="indefinite" begin="0s" keyTimes="0;0.12;1" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1" />
                                    <animate attributeName="opacity" values="0;0.15;0;0" dur="12s" repeatCount="indefinite" begin="0s" keyTimes="0;0.06;0.12;1" />
                                </circle>
                            </motion.g>

                            {/* 2. Expression (Bottom Right) */}
                            <motion.g initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delayChildren: 1.0 }}>
                                <motion.circle cx="877" cy="560" r="4" fill="#0f172a" variants={nodeVariant} />
                                <motion.circle cx="877" cy="560" r="30" stroke="#0f172a" strokeWidth="0.5" fill="none" opacity="0.1" variants={nodeVariant} />

                                {/* Pulse Effect (SMIL for perfect sync) */}
                                <circle cx="877" cy="560" r="4" fill="#f43f5e" opacity="0">
                                    <animate attributeName="r" values="4;4;50;50" dur="12s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;0.45;1" calcMode="spline" keySplines="0 0 1 1; 0.4 0 0.2 1; 0 0 1 1" />
                                    <animate attributeName="opacity" values="0;0;0.15;0;0" dur="12s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;0.39;0.45;1" />
                                </circle>
                            </motion.g>

                            {/* 3. Implementation (Bottom Left) */}
                            <motion.g initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delayChildren: 1.0 }}>
                                <motion.circle cx="323" cy="560" r="4" fill="#0f172a" variants={nodeVariant} />
                                <motion.circle cx="323" cy="560" r="30" stroke="#0f172a" strokeWidth="0.5" fill="none" opacity="0.1" variants={nodeVariant} />

                                {/* Pulse Effect (SMIL for perfect sync) */}
                                <circle cx="323" cy="560" r="4" fill="#f43f5e" opacity="0">
                                    <animate attributeName="r" values="4;4;50;50" dur="12s" repeatCount="indefinite" begin="0s" keyTimes="0;0.66;0.78;1" calcMode="spline" keySplines="0 0 1 1; 0.4 0 0.2 1; 0 0 1 1" />
                                    <animate attributeName="opacity" values="0;0;0.15;0;0" dur="12s" repeatCount="indefinite" begin="0s" keyTimes="0;0.66;0.72;0.78;1" />
                                </circle>
                            </motion.g>

                            {/* CYCLE ANIMATION (Orbiting Red Dot) */}
                            <motion.circle
                                r="4" fill="#f43f5e"
                                style={{ filter: "drop-shadow(0 0 6px rgba(244, 63, 94, 0.4))" }}
                            >
                                <animateMotion
                                    dur="12s"
                                    repeatCount="indefinite"
                                    path="M 600, 80 A 320,320 0 1,1 599.9, 80"
                                />
                            </motion.circle>

                        </svg>

                        {/* HTML OVERLAY FOR TYPOGRAPHY */}
                        <div className="absolute inset-0 w-full h-full pointer-events-none font-serif">

                            {/* 1. ORIGIN (Top) */}
                            <div className="absolute top-[0%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-64 pb-12">
                                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                                    <span className="text-[10px] tracking-[0.2em] text-rose-500 uppercase block mb-1 font-sans">01. Origin</span>
                                    <h3 className="text-3xl text-navy-900 mb-1 font-medium tracking-widest">起点</h3>
                                    <p className="text-[10px] text-slate-400 font-sans tracking-wider uppercase">Concept Creator</p>
                                </motion.div>
                            </div>

                            {/* 2. CORE AXIS (Center - Inside the Square) */}
                            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 w-64">
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}>
                                    <span className="text-[10px] tracking-[0.3em] text-rose-500 uppercase block mb-3 font-sans">Core. Axis</span>
                                    <h3 className="text-5xl text-navy-900 mb-4 font-medium tracking-widest leading-none">軸</h3>
                                    <div className="border border-navy-100 bg-white/50 backdrop-blur-sm inline-block px-3 py-1 whitespace-nowrap">
                                        <p className="text-[10px] text-navy-800 font-sans tracking-[0.15em] uppercase font-medium">
                                            Creative AI Director
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* 3. EXPRESSION (Bottom Right) */}
                            <div className="absolute top-[82%] left-[77%] -translate-x-1/2 -translate-y-1/2 text-center w-56">
                                <motion.div initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }}>
                                    <span className="text-[10px] tracking-[0.2em] text-slate-400 uppercase block mb-2 font-sans">02. Expression</span>
                                    <h3 className="text-2xl text-navy-900 mb-1 font-medium tracking-widest">表現</h3>
                                    <p className="text-[10px] text-slate-400 font-sans tracking-wider uppercase">Visual Creator</p>
                                </motion.div>
                            </div>

                            {/* 4. IMPLEMENTATION (Bottom Left) */}
                            <div className="absolute top-[82%] left-[23%] -translate-x-1/2 -translate-y-1/2 text-center w-56">
                                <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }}>
                                    <span className="text-[10px] tracking-[0.2em] text-slate-400 uppercase block mb-2 font-sans">03. Implementation</span>
                                    <h3 className="text-2xl text-navy-900 mb-1 font-medium tracking-widest">実装</h3>
                                    <p className="text-[10px] text-slate-400 font-sans tracking-wider uppercase">AI Product Designer</p>
                                </motion.div>
                            </div>

                            {/* 5. CYCLE (Partner) - Positioned Right */}
                            <div className="hidden lg:block absolute top-[50%] right-[0%] xl:right-[3%] -translate-y-1/2 text-left w-64 pl-4">
                                <motion.div
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.6 }}
                                >
                                    <div className="pl-6 border-l border-rose-200/50">
                                        <span className="text-[10px] tracking-[0.2em] text-rose-400 uppercase block mb-2 font-sans">Cycle of Value</span>
                                        <h3 className="text-xl text-navy-900 mb-1 font-medium tracking-widest leading-tight">
                                            中小企業<br />AI 実装
                                        </h3>
                                        <p className="text-[10px] text-slate-400 mt-2 font-sans tracking-wider uppercase">Circulation & Support</p>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
