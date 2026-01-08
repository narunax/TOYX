import { Work, Service } from "@/types";
import worksData from "@/data/works.json";
import servicesData from "@/data/services.json";

// Type assertion for JSON data safety
const works = worksData as Work[];
const services = servicesData as Service[];

export function getWorks(): Work[] {
    return works.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
}

export function getWorkBySlug(slug: string): Work | undefined {
    return works.find((work) => work.slug === slug);
}

export function getServices(): Service[] {
    return services;
}
