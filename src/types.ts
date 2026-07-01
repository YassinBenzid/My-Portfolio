export type PortfolioItem = {
    id?: string;
    image: string;
    background: string;
    hashtag?: string;
    title?: string;
    titleKey?: string;
    hashtagKey?: string;
    summary?: string;
    description?: string;
    problem?: string;
    categories?: string[];
    date?: string;
    screenshots?: string[];
    technologies?: string[];
    externalUrl?: string;
    externalLabel?: string;
    clientNote?: string;
    boxClass?: string;
}


export type BlogType = {
    image: string;
    date: string;
    author: string;
    title: string;
    description: string;
}
