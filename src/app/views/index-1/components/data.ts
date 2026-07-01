import type { ServiceType, SkillType } from "./types";

export const services: ServiceType[] = [
    {
        boxClass: 'box1',
        bgImage: 'assets/img/bg/polygon-bg2.png',
        icon: 'assets/img/icons/service1.svg',
        titleKey: 'services.items.frontend',
        polygon: false,
        aosDuration: 700
    },
    {
        boxClass: 'box2',
        bgImage: 'assets/img/bg/polygon-bg3.svg',
        icon: 'assets/img/icons/service2.svg',
        titleKey: 'services.items.backend',
        aosDuration: 800,
        polygon: true,
    },
    {
        boxClass: 'box3',
        bgImage: 'assets/img/bg/polygon-bg3.svg',
        icon: 'assets/img/icons/service3.svg',
        titleKey: 'services.items.api',
        aosDuration: 900,
        polygon: true,
    },
    {
        boxClass: 'box4',
        bgImage: 'assets/img/bg/polygon-bg3.svg',
        icon: 'assets/img/icons/service4.svg',
        titleKey: 'services.items.microservices',
        aosDuration: 1000,
        polygon: true,
    },
    {
        boxClass: 'box5',
        bgImage: 'assets/img/bg/polygon-bg3.svg',
        icon: 'assets/img/icons/service5.svg',
        titleKey: 'services.items.devops',
        aosDuration: 1100,
        polygon: true,
    },
    {
        boxClass: 'box6',
        bgImage: 'assets/img/bg/polygon-bg3.svg',
        icon: 'assets/img/icons/service6.svg',
        titleKey: 'services.items.ai',
        aosDuration: 1200,
        polygon: true,
    },
];

export const skillsData: SkillType[] = [
    {
        aos: '',
        aosDuration: 0,
        skillBoxes: [
            {
                count: 95,
                polygon: true,
                icon: 'assets/img/icons/skills1.svg',
                titleKey: 'skills.items.angular',

            },
            {
                count: 92,
                polygon: false,
                icon: 'assets/img/icons/skills3.svg',
                titleKey: 'skills.items.nestjs',
                boxClass: 'box2',
                aos: 'fade-left',
                aosDuration: 1000
            },
            {
                count: 90,
                polygon: true,
                icon: 'assets/img/icons/skills2.svg',
                titleKey: 'skills.items.typescript',
                boxClass: '',
                aos: 'fade-right',
                aosDuration: 800
            },
        ],
    },
    {
        aos: 'fade-right',
        aosDuration: 1000,
        skillBoxes: [
            {
                count: 88,
                polygon: true,
                icon: 'assets/img/icons/skills4.svg',
                titleKey: 'skills.items.postgresql',
                boxClass: 'box4',

            },
            {
                count: 85,
                polygon: true,
                icon: 'assets/img/icons/skills5.svg',
                titleKey: 'skills.items.docker',
                boxClass: 'box5',
                aos: 'fade-right',
                aosDuration: 1200
            },
            {
                count: 82,
                polygon: true,
                icon: 'assets/img/icons/skills6.svg',
                titleKey: 'skills.items.cicd',
                boxClass: 'box6',
            },
        ],
    },
]
