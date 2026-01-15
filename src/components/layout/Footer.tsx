"use client";

import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react";
import { LAYOUT_PX } from "@/lib/constants";

const socialLinks = [
    { icon: <Twitter className="w-4 h-4" />, href: "#", name: "Twitter" },
    { icon: <Linkedin className="w-4 h-4" />, href: "#", name: "LinkedIn" },
];

export default function Footer() {
    return (
        <footer className={`py-24 ${LAYOUT_PX} border-t border-navy-50 bg-white/30 backdrop-blur-sm relative z-10`}>
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
                    <div className="max-w-md">
                        <h2 className="text-3xl font-extralight tracking-widest text-navy-900 mb-6">TOYX</h2>
                        <p className="text-xl font-extralight text-navy-400 mb-8 leading-relaxed">
                            問いが、明日を創る。<br />
                            <span className="text-xs tracking-[0.2em] font-light italic">Question creates the future.</span>
                        </p>
                        <p className="text-sm font-light text-slate-400 leading-relaxed">
                            TOY × X で問いかける。<br />
                            遊び心と未知数の狭間から、本質的な価値を抽出する。
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-16">
                        <div className="space-y-4">
                            <span className="text-xs font-light tracking-widest text-navy-900 uppercase block mb-6">Menu</span>
                            <nav className="flex flex-col gap-3">
                                {[
                                    { name: "Genesis", href: "/genesis" },
                                    { name: "Identity", href: "/identity" },
                                    { name: "Architecture", href: "/architecture" },
                                    { name: "Value", href: "/value" },
                                    { name: "Dialogue", href: "/dialogue" }
                                ].map((item) => (
                                    <Link key={item.name} href={item.href} className="text-sm font-light text-slate-400 hover:text-navy-900 transition-colors">
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        <div className="space-y-4">
                            <span className="text-xs font-light tracking-widest text-navy-900 uppercase block mb-6">Social</span>
                            <div className="flex flex-col gap-3">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-sm font-light text-slate-400 hover:text-navy-900 transition-colors flex items-center gap-2"
                                        aria-label={link.name}
                                    >
                                        {link.icon}
                                        <span>{link.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-navy-50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs font-light text-slate-400 tracking-widest">
                        © 2026 TOYX / NARUX
                    </p>
                    <div className="flex gap-8 text-xs font-light text-slate-400">
                        <Link href="/privacy-policy" className="hover:text-navy-900 transition-colors">Privacy Policy</Link>
                        <span className="opacity-30">|</span>
                        <span className="tracking-widest capitalize">Creative AI Director Naruhito Inaba</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
