import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getWorkBySlug, getWorks } from "@/lib/data";
import { FadeIn } from "@/components/animations/FadeIn";
import { LAYOUT_PX } from "@/lib/constants";

export function generateStaticParams() {
    const works = getWorks();
    return works.map((work) => ({
        slug: work.slug,
    }));
}

export default async function WorkDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const work = getWorkBySlug(slug);

    if (!work) {
        notFound();
    }

    return (
        <article className={`min-h-screen pt-32 pb-20 ${LAYOUT_PX}`}>
            <div className="mx-auto max-w-6xl">
                <FadeIn>
                    <Link
                        href="/works"
                        className="inline-flex items-center text-sm font-light text-slate-400 hover:text-navy-900 mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Works
                    </Link>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <h1 className="text-4xl md:text-6xl font-extralight text-navy-900 mb-4">
                        {work.title}
                    </h1>
                    <div className="flex flex-wrap gap-4 text-sm font-light text-slate-500 mb-12">
                        <span>{work.category}</span>
                        <span>/</span>
                        <span>{work.client || "Self Production"}</span>
                        <span>/</span>
                        <span>{work.publishedDate}</span>
                    </div>
                </FadeIn>

                {/* Hero Image / Video Placeholder */}
                <FadeIn delay={0.4}>
                    <div className="aspect-video w-full rounded-sm mb-20 relative overflow-hidden bg-navy-50">
                        <Image
                            src={work.thumbnailUrl}
                            alt={work.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent" />
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
                    {/* Sidebar */}
                    <aside className="space-y-8">
                        <FadeIn delay={0.6}>
                            <div>
                                <h3 className="text-xs font-light tracking-[0.2em] text-rose-500 uppercase mb-4">
                                    Credits
                                </h3>
                                <ul className="space-y-2">
                                    {work.credits.map((credit, i) => (
                                        <li key={i} className="text-sm font-light text-navy-900">
                                            <span className="text-slate-400 block text-xs mb-1">{credit.role}</span>
                                            {credit.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </aside>

                    {/* Main Content */}
                    <div className="space-y-16">
                        <FadeIn delay={0.6}>
                            <div className="prose prose-slate max-w-none">
                                <p className="text-lg font-light leading-relaxed text-slate-600">
                                    {work.description}
                                </p>
                            </div>
                        </FadeIn>

                        <div className="space-y-12 border-l border-navy-100 pl-8">
                            <FadeIn delay={0.7}>
                                <div>
                                    <h3 className="text-xl font-light text-navy-900 mb-4">Challenge</h3>
                                    <p className="text-slate-600 font-light leading-relaxed">
                                        {work.challenge}
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.8}>
                                <div>
                                    <h3 className="text-xl font-light text-navy-900 mb-4">Solution</h3>
                                    <p className="text-slate-600 font-light leading-relaxed">
                                        {work.solution}
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.9}>
                                <div>
                                    <h3 className="text-xl font-light text-navy-900 mb-4">Result</h3>
                                    <p className="text-slate-600 font-light leading-relaxed">
                                        {work.result}
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
