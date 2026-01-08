"use client";

import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react";

const socialLinks = [
    { icon: <Twitter className="w-4 h-4" />, href: "#", name: "Twitter" },
    { icon: <Linkedin className="w-4 h-4" />, href: "#", name: "LinkedIn" },
];

export default function Footer() {
    return (
        <footer className="py-20 px-6 border-t border-navy-50">
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-light tracking-widest text-navy-900 mb-2">TOYX</h2>
                    <p className="text-sm font-light text-slate-400">TOY × X で問いかける</p>
                </div>

                <div className="flex gap-8">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-400 hover:text-navy-900 transition-colors duration-500 p-2"
                            aria-label={link.name}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                <div className="text-center md:text-right">
                    <p className="text-xs font-light text-slate-400 mb-2">
                        © 2026 TOYX / Naruhito Inaba
                    </p>
                    <div className="flex gap-4 justify-center md:justify-end text-xs font-light text-slate-400">
                        <Link href="/privacy" className="hover:text-navy-900 transition-colors transition-duration-500">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
