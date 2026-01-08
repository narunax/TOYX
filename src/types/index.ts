export interface Work {
    id: string;
    title: string;
    slug: string;
    category: "Corporate" | "Event" | "Art" | "Brand" | "Documentary";
    thumbnailUrl: string; // Placeholder CSS class or image path
    videoUrl?: string; // YouTube/Vimeo ID
    client?: string;
    description: string;
    challenge: string;
    solution: string;
    result: string;
    credits: { role: string; name: string }[];
    publishedDate: string;
}

export interface Service {
    id: string;
    title: string;
    jpTitle: string;
    description: string;
    features: string[];
    priceRange: string;
    iconName: "Video" | "Sparkles" | "Megaphone";
}

export type ContactFormInputs = {
    name: string;
    email: string;
    company?: string;
    message: string;
};
