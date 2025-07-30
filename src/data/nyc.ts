import { Award, BookOpen, Calendar, Camera, Coffee, FileText, Globe, Laptop, Lightbulb, Mic, Users } from 'lucide-react';
import { bharatNyayaPuraskar, delhi, delhi2026, dubai, southEastAsia, uk } from './events';
import { type Agenda, DescriptionDetails, HeroSection, KeyHighlight, Member, Partner, Event, VideoHighlight, WhatToExpect } from '../types';

export const boardMembers: Member[] = [
    {
        name: 'Dr. Moksha Kalyanram',
        designation: ['Advocate'],
        image: './images/advisory-board/moksha-kalyanram.webp',
        linkedin: 'https://www.linkedin.com/in/drmoksha-advocate/',
        youtube: 'https://youtu.be/TdDa7Q-P_r4?si=2BouZGhcsrFuJshb',
        website: '#',
        instagram: '#',
    },
    {
        name: 'Honourable Sri Justice B.Prakash Rao (Retd.)',
        designation: ['Former High Court Judge'],
        image: './images/advisory-board/prakash-rao.webp',
        linkedin: '#',
        youtube: 'https://youtu.be/eb2Hh7-VknU?si=g-a2ZuhHlQgIsRhD',
        website: 'https://tshc.gov.in/showFormerJudgeProfile?id=330',
        instagram: '#',
    },
    {
        name: 'Dr. CS Ahalada Rao',
        designation: [
            'Practicing Company Secretary & Former Vice President - ICSI',
        ],
        image: './images/advisory-board/cs-ahalada-rao.webp',
        linkedin:
            'https://www.linkedin.com/in/cs-dr-ahalada-rao-v-telangana-05a1781aa/',
        youtube: 'https://youtu.be/OdyqRauH2pk?si=AnXqt80-pbE5iL5e',
        website: '#',
        instagram: '#',
    },
    {
        name: 'Ashok Ram Kumar',
        designation: ['Senior Advocate'],
        image: './images/advisory-board/ashok-ram-kumar.webp',
        linkedin: 'https://www.linkedin.com/in/ashok-ram-kumar-2505b423/',
        youtube: 'https://youtu.be/zBUSYNJDjvA?si=oEETMOebAQKonVck',
        website: '#',
        instagram: '#',
    },
    {
        name: 'Dr. A. V. Narasimha Rao',
        designation: ['Accredited Mediator'],
        image: './images/advisory-board/a-v-narasimha-rao.webp',
        linkedin: 'https://insolvencylawacademy.com/prof-a-v-narsimha-rao/',
        youtube: '#',
        website: 'https://insolvencylawacademy.com/',
        instagram: '#',
    },
    {
        name: 'Adv. Saurabh Sharma',
        designation: ['Senior Advocate'],
        image: './images/advisory-board/saurabh-sharma.webp',
        linkedin: 'https://www.linkedin.com/in/saurabh-sharma-3169167/',
        youtube: 'https://youtu.be/rDiPD4tKE7Q?si=IYoWXr5c3yZQ6ds7',
        website: '#',
        instagram: '#',
    },
    {
        name: 'Balakrishna Gopalakrishnan',
        designation: ['Senior Advocate'],
        image: './images/advisory-board/balakrishna-gopalakrishnan.webp',
        linkedin:
            'https://www.linkedin.com/in/balakrishna-gopalakrishnan-015b7014/',
        youtube: 'https://youtu.be/dbZ_LXRlFYA?si=RZ2EIjbgAGQmCU_B',
        website: '#',
        instagram: '#',
    },
];

export const galleryImages: string[] = [
    './images/gallery/DSC00249-scaled.webp',
    './images/gallery/DSC00265-scaled.webp',
    './images/gallery/DSC00317-scaled.webp',
    './images/gallery/DSC00369-scaled.webp',
    './images/gallery/DSC00485-scaled.webp',
    './images/gallery/DSC00534-scaled.webp',
    './images/gallery/DSC00633-scaled.webp',
    './images/gallery/DSC00742-scaled.webp',
    './images/gallery/DSC00744-scaled.webp',
    './images/gallery/DSC01451.webp',
    './images/gallery/DSC01452.webp',
    './images/gallery/DSC01457.webp',
    './images/gallery/DSC01460.webp',
    './images/gallery/DSC01463.webp',
    './images/gallery/DSC01464.webp',
    './images/gallery/DSC01472.webp',
    './images/gallery/DSC01475-min-scaled.webp',
    './images/gallery/DSC01477-min-scaled.webp',
    './images/gallery/DSC01488.webp',
    './images/gallery/DSC01489.webp',
    './images/gallery/DSC01491.webp',
    './images/gallery/DSC01499-Copy.webp',
    './images/gallery/DSC01502-min-scaled.webp',
    './images/gallery/DSC01502.webp',
    './images/gallery/DSC01504-1.webp',
    './images/gallery/DSC01504.webp',
    './images/gallery/DSC01519-Copy.webp',
    './images/gallery/DSC01525.webp',
    './images/gallery/DSC01535.webp',
    './images/gallery/DSC01541-Copy.webp',
    './images/gallery/DSC01547-Copy.webp',
    './images/gallery/DSC01551-min-scaled.webp',
    './images/gallery/DSC01563.webp',
    './images/gallery/DSC01572.webp',
    './images/gallery/DSC01574.webp',
    './images/gallery/DSC01595-min-scaled.webp',
    './images/gallery/DSC01611.webp',
    './images/gallery/DSC01618-min-scaled.webp',
    './images/gallery/DSC01618.webp',
    './images/gallery/DSC01628.webp',
    './images/gallery/DSC01629.webp',
    './images/gallery/DSC01643.webp',
    './images/gallery/DSC01674-min-1-scaled.webp',
    './images/gallery/DSC01674-min-scaled.webp',
    './images/gallery/DSC01678-min-scaled.webp',
    './images/gallery/DSC01684-min-scaled.webp',
    './images/gallery/DSC01693.webp',
    './images/gallery/DSC01694-min-1-scaled.webp',
    './images/gallery/DSC01694-min-scaled.webp',
    './images/gallery/DSC01697.webp',
    './images/gallery/DSC01701-min-scaled.webp',
    './images/gallery/DSC01703.webp',
    './images/gallery/DSC01707.webp',
    './images/gallery/DSC01709.webp',
    './images/gallery/DSC01714.webp',
    './images/gallery/DSC01715-min-scaled.webp',
    './images/gallery/DSC01718.webp',
    './images/gallery/DSC01724-1.webp',
    './images/gallery/DSC01724.webp',
    './images/gallery/DSC01728.webp',
    './images/gallery/DSC01730.webp',
    './images/gallery/DSC01731-min-scaled.webp',
    './images/gallery/DSC01737-min-scaled.webp',
    './images/gallery/DSC01741.webp',
    './images/gallery/DSC01744-min-scaled.webp',
    './images/gallery/DSC01746-min-scaled.webp',
    './images/gallery/DSC01748.webp',
    './images/gallery/DSC01752.webp',
    './images/gallery/DSC01760.webp',
    './images/gallery/DSC01765.webp',
    './images/gallery/DSC01766-Copy.webp',
    './images/gallery/DSC01781.webp',
    './images/gallery/DSC01815.webp',
    './images/gallery/DSC01817.webp',
    './images/gallery/DSC01826.webp',
    './images/gallery/DSC01830.webp',
    './images/gallery/DSC01836.webp',
    './images/gallery/DSC01840.webp',
    './images/gallery/DSC01847.webp',
    './images/gallery/DSC01982-scaled.webp',
    './images/gallery/DSC02051-scaled.webp',
    './images/gallery/DSC02057-scaled.webp',
    './images/gallery/DSC02069-scaled.webp',
    './images/gallery/DSC02107-scaled.webp',
    './images/gallery/DSC02115-scaled.webp',
    './images/gallery/DSC02117-scaled.webp',
    './images/gallery/DSC02164-scaled.webp',
    './images/gallery/DSC02170-scaled.webp',
    './images/gallery/DSC02175-scaled.webp',
    './images/gallery/DSC02179-scaled.webp',
    './images/gallery/DSC02183-scaled.webp',
    './images/gallery/DSC02187-scaled.webp',
    './images/gallery/DSC02196-scaled.webp',
    './images/gallery/DSC02211-scaled.webp',
    './images/gallery/DSC02212-scaled.webp',
    './images/gallery/DSC02264-scaled.webp',
    './images/gallery/DSC02268-scaled.webp',
    './images/gallery/DSC02273-scaled.webp',
];

export const title = 'Le Grand Legal Summit'
export const date = 'October 2026'
export const timerCountdownEndDateTimeStamp = '2026-10-01T09:00:00';
export const location = 'New Work, USA'
export const contactNumber = '+91 95827 23995'
export const ticketPrice = '₹10,000'
export const ticketLink = 'https://allevents.in/new-delhi/le-grand-legal-summit-tickets/80003171334744?aff=u1gjbz'
export const description = [
    `Step into the heart of the Indian legal landscape at
    <strong>Le Grand Legal Summit 2025</strong>, happening on
    <strong>July 19th &amp; 20th</strong> in Welcomhotel by ITC,
    Dwarka, New Delhi. This landmark event, organized by Le
    Confluence, will bring together
    <strong>500+ leading legal professionals</strong> — from General
    Counsels and Law Firm Partners to Judges, LegalTech innovators,
    and Senior Advocates — for a day of learning, recognition, and
    high-powered networking.`,
    `The summit will feature insightful keynote sessions, legal tech
    showcases, and engaging discussions on the future of law in
    India. One of the major highlights will be the
    <strong>Bharat Nyaya Puraskar</strong> — a prestigious legal
    award ceremony honoring outstanding contributions across 50+
    categories.`,
    `Whether you’re a legal practitioner, innovator, policymaker, or
    part of a corporate legal team, Le Grand Legal Summit offers
    unmatched visibility, collaboration opportunities, and thought
    leadership in a vibrant, prestigious setting.`
]

export const supportedBy: string[] = [

]

export const backgroundImages: string[] = [
    './images/misc/newyork1.webp',
    './images/misc/newyork2.webp',
    './images/misc/statue-newyork.webp',
    './images/misc/nyc.webp',
    
]

export const videoHighlight: VideoHighlight = {
    title: 'View the Past Event Highlight',
    description: 'The Panel Discussion on Turning Notes into Rights: Protecting Creativity in the Music Industry',
    videoLink: 'https://www.youtube.com/embed/fL-52NajvGw?si=NLOohSlOLpi3JcFh&autoplay=1',
    backgroundImage: './images/misc/DSC01629.webp',
};

export const whatToExpect: WhatToExpect[] = [
    {
        icon: Lightbulb,
        title: 'Insight Sessions',
        description: 'from India’s top legal minds',
    },
    {
        icon: Award,
        title: 'Global Jurist Awards',
        description: 'Ceremony with 50+ Legal Awards',
    },
    
    {
        icon: Users,
        title: '500+ Legal Professionals',
        description: 'from across Globe',
    },
    {
        icon: Laptop,
        title: 'Legal Tech Expo',
        description: 'Startup Showcase',
    },
    {
        icon: Coffee,
        title: 'Exclusive Networking Lounges',
        description: 'over lunch & high tea',
    },
    {
        icon: Camera,
        title: 'Media Coverage',
        description: 'and post-event brand exposure',
    },
    {
        icon: FileText,
        title: 'Participation Certificates',
        description: 'for all attendees',
    },
    {
        icon: BookOpen,
        title: 'Summit Magazine',
        description: ' featuring insights, sponsors, and awardees',
    },

    {
        icon: Globe,
        title: 'Access to legal influencers, GCs & Partners',
        description: 'for networking and collaboration',
    },
];

export const supportLetterSection = {
    title: 'Recommendation Letters from Ministry, GoI',
    supportLetters: [
        {
            title:
                'Ministry of State for Social Justice & Empowerment, Government of India',
            image: './images/docs/MSJE-support-letter.jpg',
            description:
                "The Bharat Nyaya Puraskar celebrates excellence in law, justice, and legal services. Ramdas Athawale, Union Minister of State for Social Justice, supports this initiative and will attend Season 2 on 19th July 2025. He commends the platform's role in promoting justice and honoring legal professionals' exceptional contributions.",
        },
        {
            title:
                'Dr. Raghuraj Singh, Chairman/State Minister, Uttar Pradesh State Social Welfare Committee - Labour and Service Planning',
            image: './images/docs/leconfluence-support-letter.jpg',
            description:
                'Shri. Raghuraj Singh commends Bharat Nyaya Puraskar Season 2 for advancing legal awareness and ethical advocacy. Accepting the Guest of Honor invitation for July 19, 2025, he applauds its role in promoting justice, equity, and responsible legal practices, and endorses its continued impact on inclusive legal fraternity development.',
        },
    ],
    endText: 'In Collaboration with Government of India',
}

export const descriptionDetails: DescriptionDetails = {
    title,
    date,
    location,
    contactNumber,
    ticketPrice,
    ticketLink,
    description,
}

export const heroSection: HeroSection = {
    date,
    location,
    timerCountdownEndDateTimeStamp,
    supportedBy,
    backgroundImages,
}

export const agendaDetails: Agenda[] = [{
    title: 'Day 1 - July 19th',
    sessions: [
        {
            time: '9:00 AM - 9:45 AM',
            title: 'Registrations & Hi-Tea',
            description:
                'Begin your day by collecting your exclusive event kit at the registration desk, followed by a refreshing hi-tea break with snacks and engaging conversations with fellow legal professionals.',
        },
        {
            time: '9:45 AM - 10:45 AM',
            title: 'Lighting of the Lamp & Opening Ceremony',
            description:
                'Lighting of the lamp and opening ceremony to mark the auspicious beginning of the summit with wisdom, purpose, and unity.',
        },
        {
            time: '10:45 AM - 11:00 AM',
            title:
                "Keynote: India's Legal Future: Balancing Tradition, Technology, and Justice in the New Era",
            description:
                "A powerful exploration of how India's legal system must evolve by integrating tradition with innovation to deliver faster, fairer, and more accessible justice.",
        },
        {
            time: '11:00 AM - 12:00 AM',
            title:
                'Panel Discussion: The Future of Litigation in India: Reform, Technology & Access',
            description:
                'Experts explore how evolving legal reforms, digital innovation, and inclusive practices are reshaping the litigation landscape in India.',
        },
        {
            time: '12:00 AM - 12:30 PM',
            title: 'Netwoking-Tea & Refreshments',
            description:
                'Refreshing hi-tea break with snacks and engaging conversations with felow legal professionals.',
        },
        {
            time: '12:30 AM - 1:30 PM',
            title:
                'Panel Discussion: Data Privacy and Cybersecurity Legal Challenges and Strategic Safeguards in the Age of Innovation.',
            description:
                'This panel explores the evolving legal landscape of data privacy and cybersecurity, offering strategic insights to safeguard innovation in the digital era.',
        },
        {
            time: '1:30 PM - 2:30 PM',
            title:
                'Panel Discussion: Driving Corporate Sustainability: Legal Strategies for ESG and Long-Term Business Impact.',
            description:
                'Ensuring compliance with evolving ESG frameworks and reporting standards.',
        },
        {
            time: '2:30 PM - 2:50 PM',
            title:
                'Case Study Presentation: Connecting Law and Business: How LegalTech Enables Process-Driven Legal Frameworks',
            description: "#"
        },
        {
            time: '2:50 PM - 3:50 PM',
            title: 'Networking Over Lunch',
            description:
                'Refreshing lunch break and engaging conversations with fellow legal professionals.',
        },
        {
            time: '3:50 PM - 4:50 PM',
            title:
                'Panel Discussion: Is the Indian Legal System Ready for War-Time Law?',
            description:
                "Exploring the preparedness of India's legal framework to address challenges and complexities arising in times of armed conflict and national emergency.",
        },
        {
            time: '4:50 PM - 5:50 PM',
            title:
                'Panel Discussion: The Evolving Role Of In-House Counsels in Strategic Decision Making',
            description:
                'Exploring how in-house counsels are increasingly shaping strategic business decisions and driving organizational value beyond traditional legal roles.',
        },
        {
            time: '5:50 PM - 6:20 PM',
            title: 'Fireside Chat by Influence Talk',
            description: "#"
        },
        {
            time: '6:20 PM - 6:30 PM',
            title:
                'Closing Ceremony of Day 1 of the Event followed by Networking-Tea & Refreshments',
            description:
                'Closing of Day 1 of the event followed by Refreshing networking-tea break with snacks & engaging conversations with fellow legal professionals.',
        },
    ]
}, {
    title: 'Day 2 - July 20th',
    sessions: [
        {
            time: '9:00 AM - 9:45 AM',
            title: 'Registrations & Hi-Tea',
            description:
                'Begin your day by collecting your exclusive event kit at the registration desk, followed by a refreshing hi-tea break with snacks and engaging conversations with fellow legal professionals.',
        },
        {
            time: '9:45 AM - 10:50 AM',
            title: 'Keynote Speeches',
            description: "#"
        },
        {
            time: '10:50 AM - 11:10 AM',
            title: 'Case Study Presentation',
            description: "#"
        },
        {
            time: '11:10 AM - 12:10 PM',
            title: 'Panel Discussion : Navigating Legal Risk in a Globalized Economy',
            description:
                'Examining strategies for managing legal risks and ensuring compliance amid the complexities of a fast-evolving global economy',
        },
        {
            time: '12:10 PM - 12:30 PM',
            title: 'Case Study Presentation',
            description: "#"
        },
        {
            time: '12:30 PM - 1:00 PM',
            title: ' Netwoking-Tea & Refreshment',
            description:
                'Refreshing hi-tea break with snacks and engaging conversations with felow legal professionals.',
        },
        {
            time: '1:00 PM - 2:00 PM',
            title:
                'Panel Discussion: Intellectual Property in India: Protecting Innovation – Key strategies to secure and enforce IP rights in Indi',
            description:
                'Exploring how in-house counsels are increasingly shaping strategic business decisions and driving organizational value beyond traditional legal roles.',
        },
        {
            time: '2:00 PM - 3:00 PM',
            title: 'Networking Over Lunch',
            description:
                'Refreshing lunch break and engaging conversations with felow legal professionals.',
        },
        {
            time: '3:00 PM - 4:00 PM',
            title:
                'Panel Discussion: The Transformative Role of AI in Revolutionizing Legal Practice, Compliance, and Governance.',
            description:
                'Exploring how AI is reshaping legal practice, enhancing compliance, and driving smarter governance in the digital age.',
        },
        {
            time: '4:00 PM - 5:00 PM',
            title: 'Panel Discussion: Tech & Law - The Rise of Legal Innovation',
            description:
                'Exploring how technology is transforming the legal landscape through innovation, efficiency, and access to justice.',
        },
        {
            time: '5:00 PM - 6:00PM',
            title: 'Bharat Nyaya Puraskar Awards Ceremony.',
            description:
                'Awardees will be honoured in with the Bharat Nyaya Purasakar',
        },
        {
            time: '6:00 PM - 6:10 PM',
            title: ' Closing Ceremony followed by Networking-Tea & Refreshment',
            description:
                'Closing of the event of the event followed by Refreshing networking-tea break with snacks & engaging conversations with fellow legal professionals.',
        },
    ]
}]

export const eventPartners: Partner[] = [
    
    {
        name: 'La Mintage Legal - Strategic Legal Partner',
        logo: './images/event-partners/lawmintage.webp',
        website: 'https://lamintage.com/',
    },
    {
        name: 'Dispute Resolution Hub - Resolution Partner',
        logo: './images/event-partners/dispute-hub.webp',
        website: 'https://resolutionhub.in/',
    },
    
    {
        name: 'Gyanauka - Knowledge Partner',
        logo: './images/event-partners/gyanauka.webp',
        website: 'https://gyanauka.com/',
    },
    
    {
        name: 'LawyerInsta - Official Legal Directory Partner',
        logo: './images/event-partners/lawyerinsta.webp',
        website: 'https://lawyerinsta.com/',
    },
    {
        name: 'Spondulix - Business Law Innovation Partner',
        logo: './images/event-partners/spondulix.webp',
        website:'#',
    },
]

export const mediaPartners: Partner[] = [
    {
        name: 'The Bharat News',
        logo: './images/media-partners/the-bharat-news.webp',
        website: 'https://thebharatnewsnetwork.in/',
    },
    {
        name: 'Quatro Hive',
        logo: './images/media-partners/quatro-hive.webp',
        website: 'https://quatrohive.com/',
    },
    {
        name: 'Conventus Law',
        logo: './images/media-partners/conventus-law.webp',
        website: 'https://conventuslaw.com/',
    },
    {
        name: 'LawTeller',
        logo: './images/media-partners/lawteller.webp',
        website: 'https://lawteller.com/',
    },
    {
        name: 'CIO Tech Outlook',
        logo: './images/media-partners/cio-tech-outlook.webp',
        website: 'https://www.ciotechoutlook.com/',
    },
    {
        name: 'LatestLaws.com',
        logo: './images/media-partners/latestlaws.webp',
        website: 'https://www.latestlaws.com/',
    },
    {
        name: 'Asia Briefing',
        logo: './images/media-partners/asia-briefing.webp',
        website: 'https://www.asiabriefing.com/',
    },
];

export const eventSpeakers: Member[] = [{
    name: 'Dr. Moksha Kalyanram',
    designation: [
        'Advocate, Member TAC, Dept of Telecommunication, Ministry of Communication, Govt of India',
    ],
    image: './images/event-speakers/moksha-kalyanram.webp',
    linkedin: 'https://www.linkedin.com/in/drmoksha-advocate/',
    youtube: '#',
    website: '#',
    instagram: 'https://www.instagram.com/drmoksha.advocate/?hl=en',
},]

export const guestsOfHonour: Member[] = [
    
]

export const honourableGuests: Member[] = [
    
];

export const keyHighlights: KeyHighlight[] = [
    {
        icon: Users,
        number: 500,
        label: 'Attendees',
        color: 'text-secondary-main',
        key: 'attendees',
    },
    {
        icon: Calendar,
        number: 30,
        label: 'Sessions',
        color: 'text-secondary-main',
        key: 'sessions',
    },
    {
        icon: Mic,
        number: 60,
        label: 'Speakers',
        color: 'text-secondary-main',
        key: 'speakers',
    },
    {
        icon: Award,
        number: 50,
        label: 'Awardees',
        color: 'text-secondary-main',
        key: 'awardees',
    },
];

export const upcomingEvents: Event[] = [
    dubai,
    uk,
    delhi2026,
    southEastAsia
];

export const previousEvents : Event[] = [
    bharatNyayaPuraskar,
    delhi
]