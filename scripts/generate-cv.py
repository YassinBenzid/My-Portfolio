#!/usr/bin/env python3
"""Generate the English and French, text-selectable portfolio CVs (requires reportlab)."""
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether, Table, TableStyle, Image, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.units import mm
from xml.sax.saxutils import escape
from pathlib import Path

out = Path(__file__).resolve().parents[1] / 'src/assets/img/cv'
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameCV', fontName='Helvetica-Bold', fontSize=19, leading=22, textColor=colors.HexColor('#1a2825'), spaceAfter=3))
styles.add(ParagraphStyle(name='RoleCV', fontName='Helvetica', fontSize=10, leading=13, textColor=colors.HexColor('#536d47'), spaceAfter=4))
styles.add(ParagraphStyle(name='ContactCV', fontName='Helvetica', fontSize=9, leading=13, spaceAfter=5))
styles.add(ParagraphStyle(name='HeadingCV', fontName='Helvetica-Bold', fontSize=10, leading=14, textColor=colors.HexColor('#385c32'), spaceBefore=11, spaceAfter=4))
styles.add(ParagraphStyle(name='BodyCV', fontName='Helvetica', fontSize=10, leading=14, spaceAfter=4))
styles.add(ParagraphStyle(name='JobCV', fontName='Helvetica-Bold', fontSize=10, leading=14, spaceBefore=7, spaceAfter=3))
styles.add(ParagraphStyle(name='BulletCV', fontName='Helvetica', fontSize=10, leading=14, leftIndent=11, firstLineIndent=-8, spaceAfter=4))

def generate(fr):
    doc = SimpleDocTemplate(str(out / ('Yassine_Benzid_CV_FR.pdf' if fr else 'Yassine_Benzid_CV_EN.pdf')), pagesize=(210*mm,297*mm), rightMargin=16*mm,leftMargin=16*mm,topMargin=14*mm,bottomMargin=14*mm, title='Yassine Benzid - CV')
    story=[]
    def p(text, style='BodyCV'): story.append(Paragraph(text, styles[style]))
    def h(text): p(text.upper(), 'HeadingCV')
    def job(title, date): p(escape(title)+' | '+escape(date),'JobCV')
    def bullet(text): p('• '+escape(text),'BulletCV')
    photo = Path(__file__).resolve().parents[1] / 'src/assets/img/all-images/yassine-enhanced.png'
    header = [Paragraph('YASSINE BENZID', styles['NameCV']), Paragraph('Ingénieur logiciel full stack senior' if fr else 'Senior Full-Stack Software Engineer', styles['RoleCV']), Paragraph(('Tunisie' if fr else 'Tunisia') + ' · WhatsApp: +33744709369 · <link href="mailto:yassinbenzid@gmail.com">yassinbenzid@gmail.com</link><br/><link href="https://www.linkedin.com/in/yassinbenzid/">linkedin.com/in/yassinbenzid</link> · <link href="https://github.com/YassinBenzid">github.com/YassinBenzid</link>', styles['ContactCV'])]
    table = Table([[header, Image(str(photo), width=24*mm, height=24*mm)]], colWidths=[150*mm, 26*mm])
    table.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 3)]))
    story.append(table)
    p('Ouvert aux opportunités internationales : CDI, temps plein, temps partiel, contrat et télétravail.' if fr else 'Open to opportunities worldwide: permanent, full-time, part-time, contract and remote roles.','BodyCV')
    h('Profil' if fr else 'Professional summary')
    p("Ingénieur logiciel full stack avec plus de 6 ans d’expérience dans les applications web, plateformes SaaS, API REST et systèmes temps réel. Expertise en Angular, TypeScript, NestJS et Node.js, de l’architecture aux bases de données, intégrations et CI/CD. Expérience en direction technique, revue de code et mentorat au sein d’équipes Agile distribuées." if fr else 'Full-stack software engineer with 6+ years of experience delivering web applications, SaaS platforms, REST APIs and real-time systems. Strong production background in Angular, TypeScript, NestJS and Node.js, spanning architecture, databases, integrations and CI/CD. Experience in technical leadership, code reviews and mentoring in distributed Agile teams.')
    h('Compétences techniques' if fr else 'Technical expertise')
    p('TypeScript, JavaScript, Angular, RxJS, NestJS, Node.js, Express, React · REST, microservices, WebSocket, Socket.io · PostgreSQL, MySQL, MongoDB, Elasticsearch · JWT, RBAC · Docker, GitLab CI/CD, GitHub Actions, Git, Jest, Mocha · Python, Roboflow, Java, Spring Boot, Tailwind CSS, NG-ZORRO · Agile / Scrum')
    h('Expérience professionnelle' if fr else 'Professional experience')
    job(('Ingénieur logiciel' if fr else 'Software Engineer') + ' | Dhahri AlKubaisi Technologies', '09/2024 – ' + ('aujourd’hui · Qatar / Télétravail' if fr else 'Present · Qatar / Remote'))
    def project(name, stack, items):
        p(escape(name) + ' <font color="#536d47">| ' + escape(stack) + '</font>', 'JobCV')
        for item in items:
            bullet(item)
    if fr:
        project('Padel — plateforme de réservation et analyse IA | Ingénieur backend', 'NestJS, TypeScript, Python, Roboflow, API REST, microservices', [
            'Conception et développement de services backend modulaires pour les réservations, les plannings, les paiements et la gestion des utilisateurs.',
            'Intégration de composants Python et Roboflow pour la détection des joueurs et du ballon, reliés aux workflows applicatifs par API REST.',
            'Définition des interfaces entre services et séparation du traitement IA de la logique métier afin de faciliter les évolutions indépendantes.'
        ])
        project('Darb — gestion des appels d’offres | Ingénieur frontend', 'Angular, TypeScript, Tailwind CSS, NG-ZORRO, JWT, RBAC, Docker', [
            'Développement d’interfaces responsives et de workflows réutilisables pour les administrateurs, soumissionnaires et évaluateurs sur tout le cycle d’appel d’offres.',
            'Intégration des API de soumission et de gestion des offres ; mise en œuvre de l’authentification JWT et des droits d’accès par rôle.',
            'Participation aux revues de code et à la livraison continue avec GitLab CI/CD au sein d’une équipe Agile distribuée.'
        ])
        project('INOVALYA — SaaS de gestion de projets | Lead technique', 'Angular, NestJS, TypeScript, API REST, Docker', [
            'Pilotage de l’architecture full stack et de la livraison technique : modules backend, contrats d’API et composants frontend réutilisables.',
            'Conception d’une fonctionnalité d’affectation des tâches selon les compétences et disponibilités ; accompagnement des développeurs et revues de code.'
        ])
        project('Qartis / Qode — marketplace et SaaS en marque blanche | Ingénieur full stack', 'Angular, NestJS, TypeScript, API REST, Docker', [
            'Développement des annonces de projets, de la messagerie, des contrats, des évaluations et de tableaux de bord adaptés aux rôles.',
            'Contribution à la transformation en SaaS multi-tenant configurable : refactorisation de modules partagés, personnalisation client et déploiement avec Docker.'
        ])
        story.append(PageBreak())
        job('Ingénieur logiciel | Barsha Technology', '02/2022 – 08/2024 · Tunisie')
        project('Yellow Park — stationnement connecté | Ingénieur frontend', 'Angular, TypeScript, WebSocket, Docker', [
            'Création d’interfaces Angular modulaires pour afficher les places disponibles et l’activité des véhicules ; synchronisation des données en temps réel via WebSocket.'
        ])
        project('Barsha Food — commande et livraison | Ingénieur full stack', 'Angular, NestJS, TypeScript, API REST, Docker', [
            'Développement des parcours panier, paiement, gestion des commandes et suivi des livraisons, ainsi que des API et mises à jour temps réel associées.',
            'Contribution aux workflows de déploiement Docker et CI/CD dans une équipe distribuée.'
        ])
        project('Barsha E-Commerce — plateforme multivendeur | Ingénieur full stack', 'Angular, NestJS, TypeScript, Stripe, API REST, Docker', [
            'Développement de tableaux de bord vendeurs et de workflows de gestion des commandes ; intégration de Stripe pour les paiements.'
        ])
        job('Développeur full stack | Solinum Consulting', '09/2021 – 01/2022 · Paris, France · Stage')
        project('ERP et gestion RH', 'Java, Spring Boot, Angular, SQL', [
            'Conception de la structure de données et développement des modules employés, présence, paie et reporting.',
            'Implémentation de la logique métier et des interfaces ; tests fonctionnels et correction des anomalies.'
        ])
        job('Ingénieur logiciel | Samsysoft', '01/2020 – 07/2021 · Sousse, Tunisie')
        project('FantkaLive — application temps réel et tableau de bord', 'Node.js, Express, MongoDB, React, Socket.io, Swagger, Mocha', [
            'Développement de services REST et d’un tableau de bord React ; communication temps réel avec Socket.io, documentation Swagger et tests backend avec Mocha.'
        ])
        project('myTeam — application web', 'Angular, Node.js, Express, MongoDB, Elasticsearch', [
            'Conception de la structure applicative, développement frontend et backend, et intégration d’Elasticsearch pour la recherche.',
            'Réalisation de maquettes et de documentation technique ; participation aux tests fonctionnels.'
        ])
    else:
        project('Padel — booking and AI tracking platform | Backend Engineer', 'NestJS, TypeScript, Python, Roboflow, REST APIs, microservices', [
            'Designed and implemented modular backend services for bookings, scheduling, payments and user management.',
            'Integrated Python and Roboflow components for player and ball detection, connecting AI processing to application workflows through REST APIs.',
            'Defined service interfaces and separated AI processing from core business logic to support independent evolution of platform components.'
        ])
        project('Darb — enterprise tender management | Front-End Engineer', 'Angular, TypeScript, Tailwind CSS, NG-ZORRO, JWT, RBAC, Docker', [
            'Built responsive interfaces and reusable workflows for administrators, bidders and reviewers across the tender lifecycle.',
            'Integrated submission and offer-management APIs; implemented JWT authentication and role-based access controls.',
            'Contributed to code reviews and GitLab CI/CD delivery within a distributed Agile team.'
        ])
        project('INOVALYA — project-management SaaS | Tech Lead', 'Angular, NestJS, TypeScript, REST APIs, Docker', [
            'Led full-stack architecture and technical delivery, defining backend modules, API contracts and reusable frontend patterns.',
            'Designed task assignment based on users’ skills and availability; provided technical direction, code reviews and developer mentoring.'
        ])
        project('Qartis / Qode — marketplace and white-label SaaS | Full-Stack Engineer', 'Angular, NestJS, TypeScript, REST APIs, Docker', [
            'Developed project listings, messaging, contracts, user evaluations and role-specific dashboards.',
            'Helped evolve the marketplace into configurable multi-tenant SaaS by refactoring shared modules, adding customer branding and contributing to Docker deployments.'
        ])
        story.append(PageBreak())
        job('Software Engineer | Barsha Technology', '02/2022 – 08/2024 · Tunisia')
        project('Yellow Park — real-time smart parking | Front-End Engineer', 'Angular, TypeScript, WebSocket, Docker', [
            'Delivered modular Angular views for live parking availability and vehicle activity, using WebSockets to synchronize user-facing data with events.'
        ])
        project('Barsha Food — ordering and delivery | Full-Stack Engineer', 'Angular, NestJS, TypeScript, REST APIs, Docker', [
            'Built cart, checkout, order-management and delivery-tracking flows, supporting REST APIs and real-time order status updates.',
            'Contributed to Docker and CI/CD delivery workflows in a distributed team.'
        ])
        project('Barsha E-Commerce — multi-vendor platform | Full-Stack Engineer', 'Angular, NestJS, TypeScript, Stripe, REST APIs, Docker', [
            'Developed vendor dashboards and multi-vendor order-management workflows; integrated Stripe for payment processing.'
        ])
        job('Full-Stack Developer | Solinum Consulting', '09/2021 – 01/2022 · Paris, France · Internship')
        project('ERP and HR management system', 'Java, Spring Boot, Angular, SQL', [
            'Designed the database structure and built employee records, attendance, payroll and reporting modules.',
            'Implemented business logic and Angular interfaces; performed functional testing and debugging.'
        ])
        job('Software Engineer | Samsysoft', '01/2020 – 07/2021 · Sousse, Tunisia')
        project('FantkaLive — real-time application and dashboard', 'Node.js, Express, MongoDB, React, Socket.io, Swagger, Mocha', [
            'Developed REST services and a React dashboard, using Socket.io for real-time communication, Swagger for documentation and Mocha for backend tests.'
        ])
        project('myTeam — web application', 'Angular, Node.js, Express, MongoDB, Elasticsearch', [
            'Designed application structure, implemented frontend and backend functionality, and integrated Elasticsearch for search.',
            'Produced UI mock-ups and technical documentation and supported functional testing.'
        ])
    h('Formation' if fr else 'Education')
    p('Diplôme d’ingénieur en génie logiciel — ESSAT Gabès, 2021<br/>Diplôme de technicien supérieur en télécommunications — ISIMG Gabès, 2018' if fr else 'Engineering Degree in Software Engineering — ESSAT Gabès, 2021<br/>Senior Technician Diploma in Telecommunications — ISIMG Gabès, 2018')
    h('Langues' if fr else 'Languages')
    p('Arabe : langue maternelle · Français et anglais : niveau professionnel' if fr else 'Arabic: native · English and French: professional working proficiency')
    def white_page(canvas, document):
        canvas.saveState()
        canvas.setFillColor(colors.white)
        canvas.rect(0, 0, document.pagesize[0], document.pagesize[1], fill=1, stroke=0)
        canvas.restoreState()
    doc.build(story, onFirstPage=white_page, onLaterPages=white_page)

generate(False); generate(True)
