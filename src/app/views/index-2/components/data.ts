import type { ServiceType, SkillType } from "./types";

export const services: ServiceType[] = [
    {
        boxClass: 'box1',
        icon: 'assets/img/icons/service7.svg',
        title: 'Frontend',
        polygon: false,
        aosDuration: 700
    },
    {
        boxClass: 'box2',
        icon: 'assets/img/icons/service8.svg',
        title: 'Backend',
        aosDuration: 800,
        polygon: true,
    },
    {
        boxClass: 'box3',
        icon: 'assets/img/icons/service9.svg',
        title: 'API Design',
        aosDuration: 900,
        polygon: true,
    },
    {
        boxClass: 'box4',
        icon: 'assets/img/icons/service10.svg',
        title: 'microservices',
        aosDuration: 1000,
        polygon: true,
    },
    {
        boxClass: 'box5',
        icon: 'assets/img/icons/service11.svg',
        title: 'DevOps & CI/CD',
        aosDuration: 1100,
        polygon: true,
    },
    {
        boxClass: 'box6',
        icon: 'assets/img/icons/service12.svg',
        title: 'AI Integration',
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
                count: 98,
                polygon: true,
                icon: 'assets/img/tech/angular.svg',
                title: 'Angular',

            },
            {
                count: 80,
                polygon: false,
                icon: 'assets/img/tech/nestjs-logo.png',
                title: 'NestJS',
                boxClass: 'box2',
                aos: 'fade-left',
                aosDuration: 1000
            },
            {
                count: 80,
                polygon: true,
                icon: 'assets/img/tech/typescript.svg',
                title: 'TypeScript',
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
                count: 98,
                polygon: true,
                icon: 'assets/img/tech/postgresql.svg',
                title: 'PostgreSQL',
                boxClass: 'box4',

            },
            {
                count: 98,
                polygon: true,
                icon: 'assets/img/tech/docker.svg',
                title: 'Docker',
                boxClass: 'box5',
                aos: 'fade-right',
                aosDuration: 1200
            },
            {
                count: 98,
                polygon: true,
                icon: 'assets/img/tech/github-logo.png',
                title: 'GitHub Actions',
                boxClass: 'box6',
            },
        ],
    },
]
