import { Award, BookOpen, Calendar, Camera, Coffee, FileText, Globe, Laptop, Lightbulb, Mic, Users } from 'lucide-react';
import { bharatNyayaPuraskar, delhi, delhi2026, newYork, southEastAsia, uk } from './events';
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
export const date = 'February 9, 2026'
export const timerCountdownEndDateTimeStamp = '2026-02-09T09:00:00';
export const location = 'Dubai'
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
    './images/misc/burj-ai-arab.webp',
    './images/misc/burj-khalifa.webp',
    './images/misc/museum-of-the-future.webp',
    './images/misc/palm-jumeriah.webp',
   
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
    title: 'February 9, 8:00AM - 6:00PM',
    sessions: [
        {
            time: '08:00 AM - Onwards ',
            title: 'Conference Registration & Networking Refreshments',
            description:
                '#',
        },
        {
            time: '08:00 AM - 09:00 AM ',
            title: 'Introductions & Speed Networking',
            description:
                'Kickstart the conference with high-energy networking designed to maximize connections in a short time. Quick introductions to set the tone for the day. Fast-paced, informal exchanges to meet a variety of peers in minutes. Identify attendees with shared interests in IP, Patent, Trademark, Privacy, Compliance & Security. Meet key stakeholders, industry experts, and service providers.',
                
        },
        {
            time: '09:00 AM - 09:40 AM ',
            title:
                "Collaborative Round Table Discussions",
            description:
                "Converging Forces: Building Trusted, Resilient, and Compliant Organizations in the Age of AI, Cyber Threats & Global Regulation. 	Balancing agility with accountability in a fast-paced regulatory environment. Connecting data privacy, cybersecurity, and IP for enterprise resilience. How AI is reshaping risk, compliance, and innovation governance. Legal-tech-business collaboration for unified strategic outcomes. Future-proofing organizations in high-risk, high-opportunity markets",
        },
        {
            time: '09:40 AM - 10:00 AM ',
            title:
                'Keynote Address',
            description:
                'Ethical Data Use and Privacy: Striking the balance between Innovation and Compliance. A leading service provider delivers a powerful, insight-rich keynote that offers exceptional value, helping the audience learn, reflect, and apply practical solutions',
        },
        {
            time: '10:00 AM - 10:20 AM ',
            title:
                'Keynote Address',
            description:
                'AI-Powered GRC: Transforming Business Success. A leading service provider delivers a powerful, insight-rich keynote that offers exceptional value, helping the audience learn, reflect, and apply practical solutions',
        },
        {
            time: '10:20 AM - 11:00 AM ',
            title:
                'Collaborative Round Table Discussions',
            description:
                'Smart Governance for Emerging Tech: Risk Management in AI, Blockchain & IP-Driven Innovation. Frameworks for governing high-impact, high-risk emerging technologies. IP risk in decentralized, open-source, and AI-generated innovation. Balancing innovation incentives with regulatory accountability. Sector-specific insights: Healthtech, fintech, smart cities, and beyond. Building trust across autonomous systems and global tech platforms. From Invention to Regulation: A CxO View on Innovation & Governance',
        },
        {
            time: '11:00 AM - 11:10 AM ',
            title:
                'Exclusive Case Study Presentation',
            description: "Automating DSARs: Efficiency, Compliance, and Innovation. A service provider showcases innovative solutions addressing key industry challenges aligned with the conference theme"
        },
        {
            time: '11:10 AM - 11:20 AM',
            title: 'Refreshments',
            description:
                'Enjoy a tea break while networking and engaging in peer-to-peer discussions',
        },
        {
            time: '11:20 AM - 11:50 AM ',
            title:
                'Peer Connect: One-on-One Conversations',
            description:
                "No panels. No slides. Just real conversations that matter. Sit with peers based on your focus area. Engage in rapid, meaningful exchanges with professionals facing similar issues. : After each chat, connect with others at your table - then rotate to another for fresh perspectives. Share real-world experiences, pain points, and proven solutions. Explore how leaders manage regulatory shifts, patent/IP protection, and compliance. Build trust-based connections in a fast-paced, energizing environment",
        },
        {
            time: '11:50 AM - 12:10 PM ',
            title:
                'Keynote Address',
            description:
                'Trademark Enforcement in the Digital Era: Balancing Brand protection with LegalTech.A leading service provider delivers a powerful, insight-rich keynote that offers exceptional value, helping the audience learn, reflect, and apply practical solutions',
        },
        {
            time: '12:10 PM - 12:30 PM ',
            title: 'Keynote Address',
            description: "Why is it important to have an IP-savvy workforce? A leading service provider delivers a powerful, insight-rich keynote that offers exceptional value, helping the audience learn, reflect, and apply practical solutions"
        },
        {
            time: '12:30 PM - 12:40 PM',
            title:
                'Exclusive Case Study Presentation',
            description:
                'From Insight to Action: Driving Trademark Value Through Strategy and Operations. A service provider showcases innovative solutions addressing key industry challenges aligned with the conference theme',
        },
        {
            time: '12:40 PM - 01:20 PM',
            title:
                'Collaborative Round Table Discussions',
            description:
                'AI, Trade Secrets & Data Privacy: Navigating the Grey Zones. Legal uncertainty in generative AI, proprietary algorithms, and training data. Trade secret risks when AI models ingest sensitive or third-party IP. Privacy-by-design vs. innovation velocity in AI system development. What regulators, courts, and governments are signaling around AI+IP. Building internal governance for emerging AI legal risks and ethics',
        },
        {
            time: '01:20 PM - 02:00 PM',
            title:
                'Lunch Break & Informal Networking',
            description:
                'Enjoy a networking lunch with speakers, sponsors, and fellow delegatesa ',
        },
         {
            time: '02:00 PM - 02:40 PM  ',
            title:
                'Live, Interactive Group Discussion',
            description:
                'Real Talk: Intellectual Property Challenges Unplugged. Break away from the traditional panel format and engage in a dynamic, peer-led group discussion focused on the real-world challenges of managing intellectual property in a fast-evolving global landscape.Attendees will self-select into three focus areas - Patents, Trademarks, and IP Strategy & Enforcement - to share experiences, explore cross-industry approaches, and collaboratively surface practical solutions.Why You Should Join:. Participate in candid, topic-driven conversations with fellow IP professionals. Gain insight into how leading companies are managing IP protection, litigation, and cross-border enforcement. Interact directly with experts and senior IP counsels seated at each table, offering real-time perspectives. Walk away with actionable ideas, new connections, and strategic insights you can apply immediately.',
        },
         {
            time: '02:40 PM - 03:20 PM ',
            title:
                'Collaborative Round Table Discussions',
            description:
                'Global Regulation Crossfire: IP, Data & Cyber Laws Collide. Managing multi-jurisdictional compliance for global enterprises. Cross-border complexities in IP transfer, data sovereignty, and cyber laws. Responding to conflicts between national security and digital trade. Strategies for global legal harmonization and operational scalability. Navigating upcoming regulatory shifts (EU AI Act, Digital India, etc.)',
        },
        {
            time: '03:20 PM - 04:00 PM ',
            title:
                'Collaborative Round Table Discussions',
            description:
                'Navigating the Privacy, Security & IP Convergence: Unified Compliance in a Fragmented World. Key overlaps and friction points between data privacy, IP law, and cybersecurity. Designing integrated, scalable compliance programs for global operations. Risk-based prioritization amid conflicting regulatory demands. Operational collaboration between IT, legal, and risk functions. Role clarity: CISOs, DPOs, and IP heads in governance ecosystems',
        },
        {
            time: '04:00 PM - 04:20 PM ',
            title:
                'Refreshments',
            description:
                'Enjoy a tea break while networking and engaging in peer-to-peer discussions ',
        },
        {
            time: '04:20 PM - 05:00 PM  ',
            title:
                'Collaborative Round Table Discussions',
            description:
                'Managing Regulations: Relationship Between GCs, GRC Heads, DPOs, CISOs, Risk Managers & IP Leaders. Evolving regulatory roles and how senior leaders collaborate to reduce silos. Managing compliance overlap across legal, privacy, and security domains. Unified risk and incident response frameworks post-regulatory breach. Governance models for shared accountability and strategic alignment. Practical examples of board-level coordination on compliance and risk',
        },
        {
            time: '05:00 PM - 05:30 PM  ',
            title:
                'Awards ceremony',
            description:
                '#',
        },
        {
            time: '5:30PM - 6:00 PM',
            title:
                'Thank you and Closing Remarks!',
            description:
                'A heartfelt thanks to all the speakers and delegates for their invaluable support and participation.',
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
}]

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
    uk,
    delhi2026,
    newYork,
    southEastAsia,
];

export const previousEvents : Event[] = [
    bharatNyayaPuraskar,
    delhi
]