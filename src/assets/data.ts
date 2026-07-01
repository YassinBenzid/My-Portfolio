import type { BlogType, PortfolioItem } from "../types";

export const portfolioData: PortfolioItem[] = [
    {
        id: 'padel-app',
        image: 'assets/img/projects/padel-app-cover.jpg',
        background: 'assets/img/bg/bg2.png',
        hashtag: '#Sports Tech',
        title: 'Padel App for Booking, AI Match Analysis & E-Commerce',
        summary: 'Mobile platform for court booking, AI-powered match insights, and integrated sports commerce.',
        description: 'A sports-tech mobile app that unifies padel court reservations, AI-powered match insights, and an integrated shop for equipment. Built for players of all levels, it delivers convenience, performance tracking, and a community-driven experience in one sleek platform.',
        problem: 'A sports-tech startup wanted to go beyond standard court booking and create one product that combines seamless reservations, AI-powered match analysis, and a built-in store for padel gear. The challenge was to deliver all of that inside a smooth mobile experience that still feels simple for everyday players.',
        categories: ['Sports Tech', 'Fitness', 'E-Commerce'],
        date: 'Jun 2025',
        screenshots: [
            'assets/img/projects/padel-court-info.png',
            'assets/img/projects/padel-court-booked.png',
            'assets/img/projects/padel-search-screen.png',
        ],
        technologies: ['NestJS', 'Ionic', 'Python', 'Firebase'],
        externalUrl: 'https://padel.alkass.net/',
        externalLabel: 'Al Kass Tournament Platform',
        clientNote: 'Used by Al Kass Sport to track scores for the tournament.',
        hashtagKey: 'portfolio.items.padel.tag',
        titleKey: 'portfolio.items.padel.title',
    },
    {
        id: 'smart-delivery-app',
        image: 'assets/img/projects/packs-delivery-cover.jpg',
        background: 'assets/img/bg/bg3.png',
        hashtag: '#Logistics',
        title: 'Smart Packages Delivery App',
        summary: 'End-to-end mobile delivery platform for booking, live tracking, and package management.',
        description: 'An end-to-end delivery platform that enables users to schedule, track, and receive packages of any size quickly and securely. Designed for both individuals and businesses, it combines a smooth booking flow, live tracking, timely notifications, and an intuitive interface.',
        problem: 'A logistics company needed a modern mobile solution that makes it easier and faster for individuals and businesses to send packages. The product had to support multiple package sizes, offer a secure booking flow, and provide real-time tracking in a way that feels simple for everyday use.',
        categories: [
            'Logistics & Delivery',
            'On-Demand Services',
            'Mobility & Transportation',
            'B2C / B2B Utility',
            'Productivity',
        ],
        date: 'Jul 2025',
        screenshots: [
            'assets/img/projects/tareesh-home-screen.png',
            'assets/img/projects/tareesh-user-home.png',
            'assets/img/projects/tareesh-navigation.png',
        ],
        technologies: ['NestJS', 'Angular', 'Flutter', 'Firebase'],
        clientNote: 'The platform simplifies booking, shipment tracking, and delivery updates for both individuals and business users.',
        hashtagKey: 'portfolio.items.dashboard.tag',
        titleKey: 'portfolio.items.dashboard.title',
        boxClass: 'box2',
    },
    {
        id: 'beauty-wellness-app',
        image: 'assets/img/projects/beauty-app-cover.jpg',
        background: 'assets/img/bg/bg4.png',
        hashtag: '#Beauty',
        title: 'On-Demand Beauty & Wellness App',
        summary: 'Luxury-meets-accessibility mobile app for salon and at-home beauty and wellness bookings.',
        description: 'A luxury yet accessible mobile app that connects users to beauty and wellness services anytime, anywhere. It supports salon and at-home bookings, personalized recommendations, multilingual access, and a culturally sensitive design tailored for Qatar’s diverse market.',
        problem: 'The client wanted to create a luxury-meets-accessibility platform for beauty and wellness services in Qatar. The product needed to support high-end salon appointments, affordable grooming options, at-home treatments, and an inclusive, culturally aware experience for locals, expats, and busy professionals.',
        categories: ['Beauty', 'Wellness', 'Lifestyle'],
        date: 'Jun 2025',
        screenshots: [
            'assets/img/projects/beauty-home-page.png',
            'assets/img/projects/beauty-bookmark.png',
            'assets/img/projects/beauty-services.png',
            'assets/img/projects/beauty-notification.png',
            'assets/img/projects/beauty-login.png',
        ],
        technologies: ['Laravel', 'Flutter', 'Firebase'],
        clientNote: 'The app combines premium positioning with practical accessibility through multilingual support, at-home service flows, and location-aware booking.',
        hashtagKey: 'portfolio.items.saas.tag',
        titleKey: 'portfolio.items.saas.title',
        boxClass: 'box3',
    },
    {
        id: 'smart-invitation-app',
        image: 'assets/img/projects/invitation-app-cover.png',
        background: 'assets/img/bg/bg4.png',
        hashtag: '#Events',
        title: 'Smart Invitation App for Life Events',
        summary: 'Mobile invitation platform for weddings, funerals, and major life events with cultural sensitivity built in.',
        description: 'A culturally aware mobile solution for sending elegant, personalized invitations to weddings, funerals, and other major life events. The app streamlines event details, offers ready-made templates, supports mass sharing, and respects privacy and tradition.',
        problem: 'The client needed a respectful and culturally aware digital invitation experience for important life events, especially weddings and funerals. The platform had to simplify the invitation process while still preserving elegance, privacy, and sensitivity to personal and cultural nuances.',
        categories: ['Events', 'Lifestyle', 'Communication'],
        date: 'Jul 2025',
        screenshots: [
            'assets/img/projects/invitation-home.png',
            'assets/img/projects/invitation-members.png',
            'assets/img/projects/invitation-society.png',
            'assets/img/projects/invitation-template.png',
        ],
        technologies: ['Spring Boot', 'Angular', 'Flutter', 'Firebase'],
        clientNote: 'The app balances emotional impact, multilingual support, privacy, and convenience for large-scale event communication.',
        hashtagKey: 'portfolio.items.ai.tag',
        titleKey: 'portfolio.items.ai.title',
        boxClass: 'box4',
    }
];

export const testimonials = [
    {
      text: '“Yassine combines strong engineering discipline with real product thinking. He improved our architecture, delivered quickly, and kept the codebase maintainable.”',
      author: 'Client Testimonial / Product Lead'
    },
    {
      text: '“Reliable, structured, and easy to work with. The backend and frontend quality were both strong, and communication stayed clear throughout the delivery.”',
      author: 'Client Testimonial / Engineering Manager'
    },
    {
      text: '“A solid full-stack engineer who can move from architecture to implementation without losing quality. Strong recommendation for product teams.”',
      author: 'Client Testimonial / Startup Founder'
    }
  ];

  export const blogs: BlogType[] = [
    {
      image: 'assets/img/all-images/blog-img1.png',
      date: '23 April 2023',
      author: 'Alex Ross',
      title: 'Crafting Compelling Designs & Strategic Marketing: A Creative Journey Unveiled',
      description: 'Graphic design and digital marketing collide in a symphony of creativity and strategy. Here, we delve into the best art.',
    },
    {
      image: 'assets/img/all-images/blog-img2.png',
      date: '23 April 2023',
      author: 'Alex Ross',
      title: 'Designing for Impact: How Visuals Shape a Digital Marketing Graphic Design Success',
      description: 'From mastering the latest design trends to harnessing the power of social media algorithms, we uncover the secrets.',
    },
    {
      image: 'assets/img/all-images/blog-img3.png',
      date: '23 April 2023',
      author: 'Alex Ross',
      title: 'Navigating the Digital Landscape: Design Strategies Marketing Triumphs Strategy',
      description: 'Graphic design and digital marketing collide in a symphony of creativity and strategy. Here, we delve into the best art.',
    },
    {
      image: 'assets/img/all-images/blog-img4.png',
      date: '23 April 2023',
      author: 'Alex Ross',
      title: 'The Power of Visual Storytelling: Design Narratives Marketing Triumphs a Social',
      description: 'From mastering the latest design trends to harnessing the power of social media algorithms, we uncover the secrets.',
    }
  ];
