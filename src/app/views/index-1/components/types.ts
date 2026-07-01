export type ServiceType = {
    titleKey: string;
    boxClass: string;
    bgImage: string;
    icon: string;
    polygon?: boolean
    aosDuration: number;
}

export type SkillType = {
    aos: string;
    aosDuration: number;
    skillBoxes: {
        titleKey: string;
        count: number;
        polygon?: boolean;
        icon: string;
        boxClass?: string;
        aos?: string;
        aosDuration?: number;
    }[]
}

export type BlogType = {
    image: string;
    date: string;
    author: string;
    title: string;
    description: string;
}
