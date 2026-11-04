#!/usr/bin/env python3
"""Generate the English and French, text-selectable portfolio CVs (requires reportlab)."""
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether, Table, TableStyle, Image
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
    if fr:
        bullet('Padel : conception de services NestJS pour réservation, planning, paiement et utilisateurs ; intégration Python et Roboflow pour la détection des joueurs et du ballon.')
        bullet('Darb : interfaces Angular et workflows d’appels d’offres pour administrateurs, soumissionnaires et évaluateurs ; intégration API, JWT et contrôle des accès.')
        bullet('INOVALYA : direction technique et architecture full stack d’un SaaS de gestion de projets ; attribution des tâches selon compétences et disponibilité, revue de code et mentorat.')
        bullet('Qartis / Qode : fonctionnalités de marketplace, messagerie, contrats et tableaux de bord ; évolution vers un SaaS multi-tenant en marque blanche.')
    else:
        bullet('Padel: designed NestJS services for booking, scheduling, payments and users; integrated Python and Roboflow for player and ball detection.')
        bullet('Darb: built Angular tender workflows for administrators, bidders and reviewers; integrated APIs, JWT authentication and role-based access.')
        bullet('INOVALYA: led full-stack architecture and delivery of a project-management SaaS; designed skills-based task assignment, reviewed code and mentored developers.')
        bullet('Qartis / Qode: developed marketplace listings, messaging, contracts and dashboards; helped evolve the product into a multi-tenant white-label SaaS.')
    job(('Ingénieur logiciel' if fr else 'Software Engineer') + ' | Barsha Technology', '02/2022 – 08/2024 · Tunisia')
    bullet(('Yellow Park : interfaces Angular et disponibilité du stationnement en temps réel avec WebSocket. Barsha Food : commandes, livraison et API. Barsha E-Commerce : tableaux de bord vendeurs et intégration Stripe.' if fr else 'Yellow Park: Angular interfaces and real-time parking availability using WebSockets. Barsha Food: ordering, delivery and APIs. Barsha E-Commerce: vendor dashboards and Stripe integration.'))
    job(('Développeur full stack' if fr else 'Full-Stack Developer') + ' | Solinum Consulting', '09/2021 – 01/2022 · Paris')
    bullet('ERP / RH : modules employés, présence, paie et reporting avec Java, Spring Boot, Angular et SQL.' if fr else 'Built ERP and HR modules for employee records, attendance, payroll and reporting using Java, Spring Boot, Angular and SQL.')
    job(('Ingénieur logiciel' if fr else 'Software Engineer') + ' | Samsysoft', '01/2020 – 07/2021 · Tunisia')
    bullet('FantkaLive et myTeam : API Node.js / Express, MongoDB, tableaux de bord React et Angular, Socket.io et recherche Elasticsearch.' if fr else 'FantkaLive and myTeam: Node.js / Express APIs, MongoDB, React and Angular dashboards, Socket.io and Elasticsearch search.')
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
