import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '@app/services/language.service';

@Component({
  selector: 'app-index-2',
  imports: [CommonModule],
  templateUrl: './index-2.component.html',
  styleUrl: './index-2.component.scss'
})
export class Index2Component {
  readonly language = inject(LanguageService);
  readonly technologies = [
    { name: 'Angular', icon: 'angular.svg' },
    { name: 'NestJS', icon: 'nestjs.svg' },
    { name: 'TypeScript', icon: 'typescript.svg' },
    { name: 'PostgreSQL', icon: 'postgresql.svg' },
    { name: 'Docker', icon: 'docker.svg' },
    { name: 'Ionic', icon: 'ionic.svg' },
    { name: 'Flutter', icon: 'flutter.svg' },
    { name: 'Spring Boot', icon: 'spring-boot.svg' },
    { name: 'Python', icon: 'python.svg' },
    { name: 'Firebase', icon: 'firebase.svg' },
    { name: 'GitLab CI/CD', icon: 'gitlab-ci-cd.svg' },
    { name: 'GitHub Actions', icon: 'github-actions.svg' },
  ];
  get fr(): boolean { return this.language.is('fr'); }
  get ar(): boolean { return this.language.is('ar'); }
  menuOpen = false;
  get projectDetails(): string[] {
    if (this.ar) return [
      'الدور: مهندس خلفية. صممت خدمات NestJS للحجوزات والمواعيد والمدفوعات والمستخدمين، ودمجت Python وRoboflow لرصد اللاعبين والكرة.',
      'الدور: مهندس متكامل. طورت الإعلانات والرسائل والعقود ولوحات التحكم، وساهمت في تحويل المنتج إلى منصة SaaS متعددة العملاء.',
      'الدور: مهندس واجهات. طورت مسارات Angular للمسؤولين والمتقدمين والمقيّمين، مع دمج واجهات API والمصادقة وصلاحيات الوصول.',
      'حل يشمل حجز الشحنات وتتبع الطرود والإشعارات للأفراد والشركات.',
      'تجربة حجز متعددة اللغات لخدمات الجمال والعناية في الصالون أو المنزل.',
      'قوالب وأدوات مشاركة لإنشاء دعوات شخصية للمناسبات المهمة.'
    ];
    return this.fr ? [
      'Rôle : ingénieur backend. Conception de services NestJS pour les réservations, les plannings, les paiements et les utilisateurs ; intégration Python et Roboflow pour la détection des joueurs et du ballon.',
      'Rôle : ingénieur full stack. Développement des annonces, de la messagerie, des contrats et des tableaux de bord, puis contribution à une architecture SaaS multi-tenant en marque blanche.',
      'Rôle : ingénieur frontend. Création de workflows Angular pour les administrateurs, soumissionnaires et évaluateurs ; intégration des API, de JWT et des droits d’accès.',
      'Une solution couvrant la réservation, le suivi des colis et les notifications pour les particuliers et les entreprises.',
      'Une expérience multilingue de réservation de soins et de services de beauté en salon ou à domicile.',
      'Des modèles et des outils de partage pour créer des invitations personnalisées adaptées aux événements importants.'
    ] : [
      'Role: backend engineer. Designed NestJS services for bookings, scheduling, payments and users; integrated Python and Roboflow for player and ball detection.',
      'Role: full-stack engineer. Developed listings, messaging, contracts and dashboards, then helped evolve the product into a multi-tenant white-label SaaS.',
      'Role: frontend engineer. Built Angular workflows for administrators, bidders and reviewers, integrating APIs, JWT and role-based access.',
      'A solution covering shipment booking, package tracking and notifications for individuals and businesses.',
      'A multilingual booking experience for beauty and wellness services at a salon or at home.',
      'Templates and sharing tools for personalized invitations to important life events.'
    ];
  }
  private createEnglishProjects(): any[] {
    return [
      {number:'01', image:'assets/img/projects/padel-live.png', stack:'Ionic · NestJS · Python · Firebase', links:[]},
      {number:'02', image:'assets/img/projects/qode-live.png', stack:'Angular · NestJS · TypeScript · Docker', links:[{label:'Qode',url:'https://qode.qa/'}]},
      {number:'03', image:'assets/img/projects/darb-live.png', stack:'Angular · TypeScript · Tailwind CSS · Docker', links:[{label:'Darb',url:'https://darb.qa/'}]},
      {number:'04', image:'assets/img/projects/tareesh-home-screen.png', stack:'Angular · NestJS · Flutter · Firebase', links:[]},
      {number:'05', image:'assets/img/projects/beauty-home-page.png', stack:'Laravel · Flutter · Firebase', links:[]},
      {number:'06', image:'assets/img/projects/invitation-home.png', stack:'Angular · Spring Boot · Flutter · Firebase', links:[]}
    ];
  }
  private projectCache: Partial<Record<'en' | 'fr' | 'ar', any[]>> = {};
  get projects() {
    const lang = this.language.lang();
    if (this.projectCache[lang]) return this.projectCache[lang]!;
    if (this.ar) {
      const english = this.projectCache['en'] || this.createEnglishProjects();
      const content = [
        ['الرياضة · تطبيق ويب وجوال', 'Padel', 'تجربة تجمع حجز ملاعب البادل وتحليل المباريات والتسوق في تطبيق واحد للاعبين.'],
        ['منصة خدمات · SaaS متعدد العملاء', 'Qartis / Qode', 'منصة تحولت إلى SaaS بعلامة بيضاء تضم الإعلانات والرسائل والعقود ولوحات التحكم.'],
        ['الأعمال · إدارة المناقصات', 'Darb', 'واجهات ومسارات للمسؤولين والمتقدمين والمقيّمين خلال دورة المناقصة.'],
        ['الخدمات اللوجستية · تطبيق جوال', 'التوصيل الذكي', 'منصة لحجز الشحنات وتتبع الطرود وتلقي التحديثات الفورية.'],
        ['العناية والجمال · تطبيق جوال', 'الجمال والعناية', 'تطبيق متعدد اللغات لاكتشاف وحجز خدمات الجمال والعناية في الصالون أو المنزل.'],
        ['المناسبات · تطبيق جوال', 'الدعوات الذكية', 'دعوات رقمية مخصصة للمناسبات المهمة، مع قوالب ومشاركة مبسطة.']
      ];
      return this.projectCache[lang] = english.map((item, i) => ({ ...item, category: content[i][0], title: content[i][1], description: content[i][2], links: i === 0 ? [{ label: 'الموقع التعريفي', url: 'https://padel-6beb1-landing.web.app/' }, { label: 'التطبيق', url: 'https://padel-6beb1-app.web.app/' }] : item.links }));
    }
    return this.projectCache[lang] = [
      { number: '01', category: this.fr ? 'SPORT · APPLICATION WEB & MOBILE' : 'SPORT · WEB & MOBILE APP', title: 'Padel', image: 'assets/img/projects/padel-live.png', description: this.fr ? 'Une expérience de padel réunissant réservation de terrains, analyse de matchs et boutique dans une application pensée pour les joueurs.' : 'A padel experience bringing court booking, match analysis and a shop together in an app designed for players.', stack: 'Ionic · NestJS · Python · Firebase', links: [{label: this.fr ? 'Site vitrine' : 'Landing page', url: 'https://padel-6beb1-landing.web.app/'}, {label: this.fr ? 'Application' : 'Live app', url: 'https://padel-6beb1-app.web.app/'}] },
      { number: '02', category: this.fr ? 'MARCHÉ · SAAS MULTI-TENANT' : 'MARKETPLACE · MULTI-TENANT SAAS', title: 'Qartis / Qode', image: 'assets/img/projects/qode-live.png', description: this.fr ? 'Une plateforme de mise en relation devenue SaaS en marque blanche : annonces, messagerie, contrats et tableaux de bord.' : 'A marketplace developed into a white-label SaaS product, with listings, messaging, contracts and role-based dashboards.', stack: 'Angular · NestJS · TypeScript · Docker', links: [{label: 'Qode', url: 'https://qode.qa/'}] },
      { number: '03', category: this.fr ? 'ENTREPRISE · GESTION DES APPELS D’OFFRES' : 'ENTERPRISE · TENDER MANAGEMENT', title: 'Darb', image: 'assets/img/projects/darb-live.png', description: this.fr ? 'Des interfaces et workflows pour les administrateurs, soumissionnaires et évaluateurs tout au long du cycle d’appel d’offres.' : 'Interfaces and workflows for administrators, bidders and reviewers across the tender lifecycle.', stack: 'Angular · TypeScript · Tailwind CSS · Docker', links: [{label: 'Darb', url: 'https://darb.qa/'}] },
      { number: '04', category: this.fr ? 'LOGISTIQUE · APPLICATION MOBILE' : 'LOGISTICS · MOBILE APP', title: this.fr ? 'Livraison intelligente' : 'Smart delivery', image: 'assets/img/projects/tareesh-home-screen.png', description: this.fr ? 'Une plateforme de livraison pour réserver un envoi, suivre les colis et recevoir des notifications en temps réel.' : 'A delivery platform for booking shipments, tracking packages and receiving real-time updates.', stack: 'Angular · NestJS · Flutter · Firebase', links: [] },
      { number: '05', category: this.fr ? 'BIEN-ÊTRE · APPLICATION MOBILE' : 'WELLNESS · MOBILE APP', title: this.fr ? 'Beauté & bien-être' : 'Beauty & wellness', image: 'assets/img/projects/beauty-home-page.png', description: this.fr ? 'Une application multilingue pour découvrir et réserver des services de beauté en salon ou à domicile.' : 'A multilingual app to discover and book beauty and wellness services at a salon or at home.', stack: 'Laravel · Flutter · Firebase', links: [] },
      { number: '06', category: this.fr ? 'ÉVÉNEMENTIEL · APPLICATION MOBILE' : 'EVENTS · MOBILE APP', title: this.fr ? 'Invitations intelligentes' : 'Smart invitations', image: 'assets/img/projects/invitation-home.png', description: this.fr ? 'Des invitations numériques personnalisées pour les moments importants, avec modèles et partage simplifié.' : 'Personalized digital invitations for important life events, with templates and streamlined sharing.', stack: 'Angular · Spring Boot · Flutter · Firebase', links: [] }
    ];
  }
}
