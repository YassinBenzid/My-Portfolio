export type ServiceType = {
    title: string;
    boxClass: string;
    icon: string;
    polygon?: boolean
    aosDuration: number;
}

export type SkillType = {
    aos: string;
    aosDuration: number;
    skillBoxes: {
        title: string;
        count: number;
        polygon?: boolean;
        icon: string;
        boxClass?: string;
        aos?: string;
        aosDuration?: number;
    }[]
}

export type PortfolioItem = {
    image: string;
    background: string;
    hashtag?: string;
    title?: string;
    hashtagKey?: string;
    titleKey?: string;
    boxClass?: string;
}
