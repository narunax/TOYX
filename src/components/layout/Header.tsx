"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import GeometricLines from "@/components/effects/GeometricLines";
import { LAYOUT_PX } from "@/lib/constants";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 z-50 w-full glass-card ${LAYOUT_PX} py-6`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    <Link href="/" className="text-xl font-light tracking-widest text-navy-900 z-50 relative" onClick={() => setIsOpen(false)}>
                        TOYX
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden space-x-12 md:flex">
                        {[
                            { name: "Genesis", href: "/genesis" },
                            { name: "Identity", href: "/identity" },
                            { name: "Architecture", href: "/architecture" },
                            { name: "Value", href: "/value" },
                            { name: "Dialogue", href: "/dialogue" }
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="group relative text-sm font-light tracking-widest text-slate-600 transition-colors hover:text-navy-900"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 h-px w-0 bg-rose-400 transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50 md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-px bg-navy-900 origin-center transition-transform duration-300"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block w-6 h-px bg-navy-900 transition-opacity duration-300"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="block w-6 h-px bg-navy-900 origin-center transition-transform duration-300"
                        />
                    </button>
                </div>
            </motion.header>

            {/* Mobile Full Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-navy-900/75 backdrop-blur-md md:hidden flex flex-col justify-center items-center overflow-hidden"
                        onClick={() => setIsOpen(false)}
                    >
                        {/* Background Decoration */}
                        <div className="absolute inset-0 pointer-events-none">
                            <GeometricLines mode="dark" className="!absolute" />
                            <div className="absolute -top-[20%] -right-[20%] w-[500px] h-[500px] bg-rose-900/20 rounded-full blur-[100px]" />
                            <div className="absolute top-[60%] -left-[10%] w-[400px] h-[400px] bg-navy-500/10 rounded-full blur-[80px]" />
                        </div>

                        <nav className="relative z-10 flex flex-col items-center space-y-10">
                            {[
                                { name: "Genesis", href: "/genesis" },
                                { name: "Identity", href: "/identity" },
                                { name: "Architecture", href: "/architecture" },
                                { name: "Value", href: "/value" },
                                { name: "Dialogue", href: "/dialogue" }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 10, opacity: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-4xl font-thin tracking-[0.25em] text-white hover:text-rose-200 transition-colors duration-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute bottom-12 text-center"
                        >
                            <p className="text-xs font-light tracking-[0.3em] text-white/30 uppercase">
                                Question creates the future.
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
