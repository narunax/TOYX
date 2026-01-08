"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 z-50 w-full glass-card px-6 py-4"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <Link href="/" className="text-xl font-light tracking-widest text-navy-900">
                    TOYX
                </Link>
                <nav className="hidden space-x-8 md:flex">
                    {["About", "Services", "Works", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="group relative text-sm font-light text-slate-600 transition-colors hover:text-navy-900"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 h-px w-0 bg-rose-400 transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>
            </div>
        </motion.header>
    );
}
