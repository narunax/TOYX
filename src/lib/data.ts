import { Work, Service } from "@/types";
import servicesData from "@/data/services.json";

// Type assertion for JSON data safety
// Since worksData is removed from the project, we provide an empty array as the source
const works: Work[] = [];
const services = servicesData as Service[];

export function getWorks(): Work[] {
    return works;
}

export function getWorkBySlug(slug: string): Work | undefined {
    return undefined;
}

export function getServices(): Service[] {
    return services;
}
