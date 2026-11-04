import { Injectable, signal } from '@angular/core';

export type AppLanguage = 'en' | 'fr' | 'ar';

const TRANSLATIONS = {
    en: {
        nav: {
            home: 'Home',
            about: 'About Me',
            service: 'Service',
            skills: 'Skills',
            portfolio: 'Portfolio',
            feedback: 'Feedback',
            blog: 'Blog',
            contact: 'Contact',
        },
        hero: {
            greeting: "Hi I'm Yassine Benzid",
            titlePrefix: 'Software',
            titleAccent: 'Engineer',
            subtitle: 'Full Stack Developer',
            description: 'Full Stack Software Engineer with 4+ years of experience building scalable SaaS and enterprise applications with Angular and NestJS. I focus on clean architecture, microservices, real-time systems, TypeScript, PostgreSQL, Docker, and AI-integrated products.',
            downloadCv: 'Download CV',
            ctaWhatsapp: 'WhatsApp',
            connect: 'Connect on',
        },
        about: {
            eyebrow: 'About Me',
            titlePrefix: 'about full stack',
            titleAccent: 'engineer',
            subtitle: '& software builder',
            description: 'I build clean, scalable web applications with Angular, NestJS, TypeScript, PostgreSQL, Docker, and CI/CD workflows. My work spans microservices, real-time systems, AI integrations, and enterprise SaaS products.',
            bullet1: 'Angular & TypeScript',
            bullet2: 'NestJS & REST APIs',
            bullet3: 'PostgreSQL & Docker',
            bullet4: 'GitLab CI/CD & GitHub Actions',
            cta: 'get in touch on WhatsApp',
            stat1: 'Years Experience',
            stat2: 'Products & Projects',
            stat3: 'Remote Ready',
        },
        services: {
            eyebrow: 'WHAT I DO',
            title: 'Software Engineering',
            accent: 'full stack',
            subtitle: 'services',
            items: {
                frontend: 'frontend development',
                backend: 'backend development',
                api: 'rest api design',
                microservices: 'microservices',
                devops: 'devops & ci/cd',
                ai: 'ai integration',
            },
        },
        skills: {
            eyebrow: 'My Skills',
            titlePrefix: 'explore my',
            titleAccent: 'technical stack',
            subtitle: 'and strengths',
            items: {
                angular: 'Angular',
                nestjs: 'NestJS',
                typescript: 'TypeScript',
                postgresql: 'PostgreSQL',
                docker: 'Docker',
                cicd: 'GitLab CI/CD',
            },
        },
        portfolio: {
            eyebrow: 'my Projects',
            titlePrefix: 'Selected',
            titleAccent: 'case studies &',
            subtitle: 'work',
            items: {
                padel: {
                    tag: '#nestjs',
                    title: 'Padel booking and AI tracking platform',
                },
                dashboard: {
                    tag: '#angular',
                    title: 'Admin dashboard for operations and reviews',
                },
                saas: {
                    tag: '#saas',
                    title: 'Enterprise SaaS workflow system',
                },
                ai: {
                    tag: '#ai',
                    title: 'Real-time platform with AI integration',
                },
            },
        },
        contact: {
            eyebrow: 'contact me',
            titlePrefix: "let’s build",
            titleAccent: 'something',
            subtitle: 'together',
            description: 'If you need a full stack engineer for Angular, NestJS, TypeScript, APIs, microservices, or AI-integrated products, reach me on WhatsApp, email, or LinkedIn.',
            whatsappLabel: 'WhatsApp',
            emailLabel: 'Email',
            linkedinLabel: 'LinkedIn',
            openWhatsapp: 'Open WhatsApp',
            footerTitle: 'Stay in touch',
            footerText: 'Use WhatsApp for the fastest response, or reach me by email and LinkedIn.',
            footerCta: 'Chat on WhatsApp',
            copyright: 'Yassine Benzid. All rights reserved.',
        },
        blog: {
            eyebrow: 'our Blog',
            title: 'our latest Articles',
            accent: 'Blog and',
            subtitle: 'News',
            button: 'View More Blog',
            readMore: 'read More',
        },
        testimonials: {
            eyebrow: 'Testimonials',
            title: 'Happy Words From',
            accent: 'our BEST',
            subtitle: 'customers',
            more: 'Read More Testimonials Feedback',
        },
        modal: {
            eyebrow: 'Portfolio preview',
            author: 'Yassine Benzid',
            title: 'Selected software projects and case studies from my current portfolio',
            paragraph1: 'This preview is kept lightweight so you can swap in your own project image and live link later without changing the modal structure.',
            paragraph2: 'The focus is on Angular, NestJS, API design, microservices, and AI-integrated platforms.',
            tag: '#software-engineering',
            cta: 'Chat on WhatsApp',
            needProject: 'Need a similar project?',
            needProjectText: 'Use WhatsApp to discuss scope, timeline, or a new portfolio piece. This keeps the template clean while you update the project assets later.',
        },
    },
    fr: {
        nav: {
            home: 'Accueil',
            about: 'À propos',
            service: 'Services',
            skills: 'Compétences',
            portfolio: 'Projets',
            feedback: 'Avis',
            blog: 'Blog',
            contact: 'Contact',
        },
        hero: {
            greeting: "Salut, je suis Yassine Benzid",
            titlePrefix: 'Ingénieur',
            titleAccent: 'logiciel',
            subtitle: 'Développeur Full Stack',
            description: "Ingénieur logiciel Full Stack avec plus de 4 ans d'expérience dans la création d'applications SaaS et d'entreprise évolutives avec Angular et NestJS. Je travaille sur une architecture propre, les microservices, le temps réel, TypeScript, PostgreSQL, Docker et les produits intégrant l'IA.",
            downloadCv: 'Télécharger le CV',
            ctaWhatsapp: 'WhatsApp',
            connect: 'Me contacter sur',
        },
        about: {
            eyebrow: 'À propos',
            titlePrefix: 'ingénieur',
            titleAccent: 'full stack',
            subtitle: '& créateur logiciel',
            description: "Je développe des applications web propres et évolutives avec Angular, NestJS, TypeScript, PostgreSQL, Docker et des workflows CI/CD. Mon travail couvre les microservices, les systèmes temps réel, les intégrations IA et les produits SaaS d'entreprise.",
            bullet1: 'Angular & TypeScript',
            bullet2: 'NestJS & API REST',
            bullet3: 'PostgreSQL & Docker',
            bullet4: 'GitLab CI/CD & GitHub Actions',
            cta: 'me contacter sur WhatsApp',
            stat1: 'Années d’expérience',
            stat2: 'Produits & projets',
            stat3: 'Disponible à distance',
        },
        services: {
            eyebrow: 'CE QUE JE FAIS',
            title: 'Ingénierie logicielle',
            accent: 'full stack',
            subtitle: 'services',
            items: {
                frontend: 'développement frontend',
                backend: 'développement backend',
                api: "conception d'API REST",
                microservices: 'microservices',
                devops: 'devops & ci/cd',
                ai: 'intégration IA',
            },
        },
        skills: {
            eyebrow: 'Mes compétences',
            titlePrefix: 'découvrir ma',
            titleAccent: 'stack technique',
            subtitle: 'et mes points forts',
            items: {
                angular: 'Angular',
                nestjs: 'NestJS',
                typescript: 'TypeScript',
                postgresql: 'PostgreSQL',
                docker: 'Docker',
                cicd: 'GitLab CI/CD',
            },
        },
        portfolio: {
            eyebrow: 'mes Projets',
            titlePrefix: 'Études',
            titleAccent: 'de cas &',
            subtitle: 'travaux',
            items: {
                padel: {
                    tag: '#nestjs',
                    title: 'Plateforme de réservation de padel et suivi IA',
                },
                dashboard: {
                    tag: '#angular',
                    title: "Tableau de bord d'administration pour les opérations et les avis",
                },
                saas: {
                    tag: '#saas',
                    title: "Système de workflow SaaS d'entreprise",
                },
                ai: {
                    tag: '#ia',
                    title: "Plateforme temps réel avec intégration IA",
                },
            },
        },
        contact: {
            eyebrow: 'contactez-moi',
            titlePrefix: 'construisons',
            titleAccent: 'quelque chose',
            subtitle: 'ensemble',
            description: "Si vous avez besoin d'un ingénieur full stack pour Angular, NestJS, TypeScript, des API, des microservices ou des produits intégrant l'IA, contactez-moi sur WhatsApp, par email ou sur LinkedIn.",
            whatsappLabel: 'WhatsApp',
            emailLabel: 'Email',
            linkedinLabel: 'LinkedIn',
            openWhatsapp: 'Ouvrir WhatsApp',
            footerTitle: 'Restons en contact',
            footerText: 'Utilisez WhatsApp pour une réponse rapide, ou contactez-moi par email et LinkedIn.',
            footerCta: 'Discuter sur WhatsApp',
            copyright: 'Yassine Benzid. Tous droits réservés.',
        },
        blog: {
            eyebrow: 'notre Blog',
            title: 'nos derniers articles',
            accent: 'Blog et',
            subtitle: 'Actualités',
            button: 'Voir plus de blog',
            readMore: 'lire plus',
        },
        testimonials: {
            eyebrow: 'Témoignages',
            title: 'Des mots gentils de',
            accent: 'nos meilleurs',
            subtitle: 'clients',
            more: 'Lire plus de témoignages',
        },
        modal: {
            eyebrow: 'Aperçu du portfolio',
            author: 'Yassine Benzid',
            title: 'Sélection de projets logiciels et études de cas de mon portfolio actuel',
            paragraph1: "Cet aperçu reste léger pour que vous puissiez remplacer plus tard l'image du projet et le lien live sans modifier la structure de la fenêtre.",
            paragraph2: "L'accent est mis sur Angular, NestJS, la conception d'API, les microservices et les plateformes intégrant l'IA.",
            tag: '#ingénierie-logicielle',
            cta: 'Discuter sur WhatsApp',
            needProject: 'Besoin d’un projet similaire ?',
            needProjectText: "Utilisez WhatsApp pour discuter du périmètre, du délai ou d'une nouvelle pièce du portfolio. La maquette reste propre pendant que vous mettez à jour les éléments du projet.",
        },
    },
} as const;

@Injectable({ providedIn: 'root' })
export class LanguageService {
    readonly lang = signal<AppLanguage>(this.getInitialLanguage());

    constructor() {
        this.applyLanguage(this.lang());
    }

    setLanguage(lang: AppLanguage) {
        this.lang.set(lang);
        localStorage.setItem('portfolio-lang', lang);
        this.applyLanguage(lang);
    }

    toggleLanguage() {
        this.setLanguage(this.lang() === 'en' ? 'fr' : 'en');
    }

    is(lang: AppLanguage) {
        return this.lang() === lang;
    }

    t(path: string): string {
        const current = this.lang();
        const value = path.split('.').reduce<any>((acc, key) => acc?.[key], TRANSLATIONS[current === 'ar' ? 'en' : current]);
        return typeof value === 'string' ? value : path;
    }

    private getInitialLanguage(): AppLanguage {
        if (typeof window === 'undefined') {
            return 'en';
        }
        const stored = localStorage.getItem('portfolio-lang');
        if (stored === 'en' || stored === 'fr' || stored === 'ar') return stored;
        const preferred = navigator.language.toLowerCase();
        const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const middleEast = new Set(['Asia/Riyadh', 'Asia/Qatar', 'Asia/Bahrain', 'Asia/Kuwait', 'Asia/Dubai', 'Asia/Muscat', 'Asia/Baghdad', 'Asia/Amman', 'Asia/Beirut', 'Asia/Damascus', 'Asia/Jerusalem', 'Asia/Gaza', 'Asia/Hebron', 'Asia/Aden']);
        if (preferred.startsWith('ar') || middleEast.has(zone)) return 'ar';
        return preferred.startsWith('fr') || zone === 'Europe/Paris' ? 'fr' : 'en';
    }

    private applyLanguage(lang: AppLanguage) {
        if (typeof document !== 'undefined') {
            document.documentElement.lang = lang;
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        }
    }
}
