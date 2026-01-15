"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
            >
                <h3 className="text-2xl font-serif text-navy-900 mb-4 tracking-widest">Message Received.</h3>
                <p className="text-sm text-slate-500 font-light tracking-wide italic">
                    思索の準備を整えます。
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-[10px] tracking-[0.3em] uppercase text-rose-500 border-b border-rose-200 pb-1"
                >
                    Back to Form
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 font-serif">
            <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-sans tracking-[0.2em] uppercase text-slate-400">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-navy-100 py-3 focus:outline-none focus:border-rose-300 transition-colors text-navy-900 font-light placeholder:text-navy-100 placeholder:italic"
                    placeholder="Name"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-sans tracking-[0.2em] uppercase text-slate-400">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-navy-100 py-3 focus:outline-none focus:border-rose-300 transition-colors text-navy-900 font-light placeholder:text-navy-100 placeholder:italic"
                    placeholder="example@domain.com"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-sans tracking-[0.2em] uppercase text-slate-400">Message / Inquiry</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-navy-100 py-3 focus:outline-none focus:border-rose-300 transition-colors text-navy-900 font-light placeholder:text-navy-100 placeholder:italic resize-none"
                    placeholder="Message"
                />
            </div>

            {status === "error" && (
                <p className="text-xs text-rose-500 italic">
                    送信に失敗しました。時間をおいて再度お試しください。
                </p>
            )}

            <button
                type="submit"
                disabled={status === "submitting"}
                className={`w-full py-5 text-sm tracking-[0.3em] uppercase font-light transition-all duration-700 ${status === "submitting"
                    ? "bg-slate-50 text-slate-300 cursor-not-allowed"
                    : "bg-navy-900 text-white hover:bg-navy-800 hover:shadow-xl hover:shadow-navy-900/10"
                    }`}
            >
                {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
        </form>

    );
}
