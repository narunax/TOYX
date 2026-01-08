"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FadeIn } from "@/components/animations/FadeIn";
import { Loader2, CheckCircle } from "lucide-react";

// Validation Schema
const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    company: z.string().optional(),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to send");

            setIsSuccess(true);
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="mx-auto max-w-xl">
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="text-xs font-light tracking-[0.3em] text-rose-500 uppercase mb-6 block">
                            Contact
                        </span>
                        <h1 className="text-4xl font-extralight text-navy-900 mb-6">
                            Dialogue.
                        </h1>
                        <p className="text-slate-600 font-light text-sm">
                            まだ言葉になっていない構想や、<br />
                            形のない問いについて。
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    {isSuccess ? (
                        <div className="bg-green-50 border border-green-200 rounded-sm p-12 text-center animate-in fade-in zoom-in duration-500">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-light text-navy-900 mb-2">Message Sent</h3>
                            <p className="text-slate-600 font-light">
                                お問い合わせありがとうございます。<br />
                                確認次第、ご連絡させていただきます。
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-white p-8 md:p-12 shadow-sm border border-slate-100 rounded-sm">

                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs font-light tracking-widest text-slate-400 uppercase">
                                    Name <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="name"
                                    {...register("name")}
                                    className="w-full border-b border-slate-200 py-2 text-navy-900 focus:outline-none focus:border-navy-900 transition-colors bg-transparent placeholder:text-slate-300 font-light"
                                    placeholder="Your Name"
                                />
                                {errors.name && <p className="text-rose-500 text-xs">{errors.name.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-light tracking-widest text-slate-400 uppercase">
                                    Email <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    {...register("email")}
                                    className="w-full border-b border-slate-200 py-2 text-navy-900 focus:outline-none focus:border-navy-900 transition-colors bg-transparent placeholder:text-slate-300 font-light"
                                    placeholder="your.email@example.com"
                                />
                                {errors.email && <p className="text-rose-500 text-xs">{errors.email.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="company" className="text-xs font-light tracking-widest text-slate-400 uppercase">
                                    Company
                                </label>
                                <input
                                    id="company"
                                    {...register("company")}
                                    className="w-full border-b border-slate-200 py-2 text-navy-900 focus:outline-none focus:border-navy-900 transition-colors bg-transparent placeholder:text-slate-300 font-light"
                                    placeholder="Company Name (Optional)"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-light tracking-widest text-slate-400 uppercase">
                                    Message <span className="text-rose-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    {...register("message")}
                                    className="w-full border border-slate-200 p-4 text-navy-900 focus:outline-none focus:border-navy-900 transition-colors bg-transparent placeholder:text-slate-300 font-light rounded-sm resize-none"
                                    placeholder="What is your question?"
                                />
                                {errors.message && <p className="text-rose-500 text-xs">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-navy-900 text-white py-4 font-light tracking-widest uppercase text-sm hover:bg-navy-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                            >
                                {isSubmitting ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    )}
                </FadeIn>
            </div>
        </main>
    );
}
