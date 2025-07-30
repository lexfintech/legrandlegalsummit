import { Award, BookOpen, Calendar, Camera, Coffee, FileText, Globe, Laptop, Lightbulb, Mic, Users } from 'lucide-react';
import { bharatNyayaPuraskar, delhi, dubai, newYork, southEastAsia, uk } from './events';
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
export const date = 'TBA - 2026'
export const timerCountdownEndDateTimeStamp = '#';
export const location = 'TBA - New Delhi'
export const contactNumber = '+91 95827 23995'
export const ticketPrice = '₹10,000'
export const ticketLink = '#'
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
    './images/logos/GOI-MOSJAE.webp',
    './images/logos/DOC-MOFCAI-GOI.webp',
]

export const backgroundImages: string[] = [
    './images/misc/parliament.webp',
    './images/misc/itcdwarka.webp',
    './images/misc/parliament2.webp',
    './images/misc/indiagate.webp',
    './images/misc/parliament3.webp',
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
        description: 'from across Global',
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
        name: 'EY - Exclusive Partner',
        logo: './images/event-partners/ey.webp',
        website: 'https://www.ey.com/en_in',
    },
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
        name: 'JSSB Legal - Legal Excellence Partner',
        logo: './images/event-partners/jssb-legal.webp',
        website: 'https://www.jssblegal.com/',
    },
    {
        name: 'Gyanauka - Knowledge Partner',
        logo: './images/event-partners/gyanauka.webp',
        website: 'https://gyanauka.com/',
    },
    {
        name: 'BGK Law Associates - Supporting Partner',
        logo: './images/event-partners/bgk-law-associates.webp',
        website: 'https://bgklawassociates.co.in/',
    },
    {
        name: 'CaseDocker - Legal-Tech Partner',
        logo: './images/event-partners/casedocker.webp',
        website: 'https://www.casedocker.com/landing/',
    },
    {
        name: 'LawyerInsta - Official Legal Directory Partner',
        logo: './images/event-partners/lawyerinsta.webp',
        website: 'https://lawyerinsta.com/',
    },
    {
        name: 'Spondulix - Business Law Innovation Partner',
        logo: './images/event-partners/spondulix.webp',
        website: '#',
    },
    {
        name: 'Compage Consulting - Legal PR Partner',
        logo: './images/event-partners/compage-consulting.webp',
        website: '#',
    },
    {
        name: 'BMR Legal Advocates - Law Firm Partner',
        logo: './images/event-partners/BMR-Legal-Advocates.webp',
        website: '#',
    },
    {
        name: 'DreamLegal - Legal Tech Adoption Partner',
        logo: './images/event-partners/dreamlegal.webp',
        website: '#',
    },

    {
        name: 'Shreyans Singhvi & Associates - Law Firm Partner',
        logo: './images/event-partners/shreyans-singhvi.webp',
        website: '#',
    },
    {
        name: 'D&T Juris - Law Firm Partner',
        logo: './images/event-partners/D&T-juris.webp',
        website: '#',
    },
    {
        name: 'S. K. Singhi & Partners - Law Firm Partner',
        logo: './images/event-partners/s-k-singhi&partners.webp',
        website: '#',
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
},
{
    name: 'Rajiv Malik',
    designation: ['Legal Leader - LG Electronics'],
    image: './images/event-speakers/rajiv-malik.webp',
    linkedin: 'https://www.linkedin.com/in/rajiv-m-02890b1a/',
    youtube: '#',
    website: 'https://www.lg.com/in',
    instagram: '#',
},
{
    name: 'Anurag Pareek',
    designation: ['Vice President Legal - OYO'],
    image: './images/event-speakers/anurag-pareek.webp',
    linkedin: 'https://www.linkedin.com/in/anurag-pareek-b8380063/',
    youtube: '#',
    website: 'https://www.oyorooms.com/',
    instagram: '#',
},
{
    name: 'Susheel Jad',
    designation: ['President and General Counsel - Think Gas'],
    image: './images/event-speakers/susheel-jad.webp',
    linkedin: 'https://www.linkedin.com/in/susheel-jad-7170a2122/',
    youtube: '#',
    website: 'https://www.think-gas.com/',
    instagram: '#',
},
{
    name: 'Balakrishna Gopalakrishnan',
    designation: ['Founder - BKG Law Associate, Advocates & Legal Advisors'],
    image: './images/event-speakers/balakrishna-gopalakrishnan.webp',
    linkedin:
        'https://www.linkedin.com/in/balakrishna-gopalakrishnan-015b7014/',
    youtube: '#',
    website: 'https://bgklawassociates.co.in/',
    instagram: '#',
},
{
    name: 'Niti Mittal',
    designation: ['Global General Counsel - Coforge'],
    image: './images/event-speakers/niti-mittal.webp',
    linkedin: 'https://www.linkedin.com/in/niti-mittal-a3358518/',
    youtube: '#',
    website: 'https://www.coforge.com/',
    instagram: '#',
},
{
    name: 'Attorney. Ms. Vasundhra Prasad',
    designation: [
        "B.S.L., LL.B., LL.M. (IPR) Dean's Scholar, New York (NY), USA Supreme Court of India and Delhi High Court",
    ],
    image: './images/event-speakers/vasundhra-prasad.webp',
    linkedin:
        'https://www.linkedin.com/in/vasundhraprasad/?originalSubdomain=in',
    youtube: 'https://www.youtube.com/watch?v=OywFoOcQEZo',
    website: '#',
    instagram: '#',
},
{
    name: 'Sushma Shankar',
    designation: ['Vice President Legal Accenture'],
    image: './images/event-speakers/sushma-shankar.webp',
    linkedin: 'https://www.linkedin.com/in/sushma-shankar-8bba8a39/',
    youtube: '#',
    website: 'https://www.accenture.com/in-en',
    instagram: '#',
},
{
    name: 'Saguna Sodhi',
    designation: ['Partner - EY Forensic & Integrity Services.'],
    image: './images/event-speakers/saguna-sodhi.webp',
    linkedin: 'https://www.linkedin.com/in/sagunasodhi/?originalSubdomain=in',
    youtube: '#',
    website: 'https://www.ey.com/en_in/people/saguna-sodhi',
    instagram: '#',
},
{
    name: 'Amar Sundram',
    designation: [
        'General Counsel - Sr. Vice President (Legal) and Chief Compliance Officer - NEC Corporation India Pvt. Ltd',
    ],
    image: './images/event-speakers/amar-sundram.webp',
    linkedin: 'https://www.linkedin.com/in/amar-sundram-a7833618/',
    youtube: '#',
    website: 'https://in.nec.com/',
    instagram: '#',
},
{
    name: 'Rajeev Tripathi',
    designation: [
        'Vice President Legal & FAA - Goods And Services Tax Network',
    ],
    image: './images/event-speakers/rajeev-tripathi.webp',
    linkedin: 'https://www.linkedin.com/in/rajeevtripathi2807/',
    youtube: '#',
    website: 'https://www.gstn.org.in/',
    instagram: '#',
},
{
    name: 'Ashish Kumar Pandey',
    designation: [
        'General Counsel and Company Secretary -Luminous Power Technologies (P) Ltd.',
    ],
    image: './images/event-speakers/ashish-kumar-pandey.webp',
    linkedin: 'https://www.linkedin.com/in/ashish-kumar-p-60592037/',
    youtube: '#',
    website: 'https://www.luminousindia.com/',
    instagram: '#',
},
{
    name: 'Amit Goyal',
    designation: ['Partner - EY Forensic & Integrity Services'],
    image: './images/event-speakers/amit-goyal.webp',
    linkedin:
        'https://www.linkedin.com/in/amit-goyal-97994b17/?originalSubdomain=in',
    youtube: '#',
    website: 'https://www.ey.com/en_in/people/amit-goyal',
    instagram: '#',
},
{
    name: 'Manish Mittal',
    designation: [
        'Assistant Vice President -Legal and FCU - India first Life Insurance',
    ],
    image: './images/event-speakers/manish-mittal.webp',
    linkedin: 'https://www.linkedin.com/in/manish-mittal-601239136/',
    youtube: '#',
    website: 'https://www.indiafirstlife.com/',
    instagram: '#',
},
{
    name: 'Shweta Prasad',
    designation: ['Associate Director Accenture'],
    image: './images/event-speakers/shewta-prasad.webp',
    linkedin: 'https://www.linkedin.com/in/shweta-prasad-80378034/',
    youtube: '#',
    website: 'https://www.accenture.com/in-en',
    instagram: '#',
},
{
    name: 'Rajeev Goswami',
    designation: ['VP Legal - Indus Towers Limited'],
    image: './images/event-speakers/rajeev-goswami.webp',
    linkedin: 'https://www.linkedin.com/in/rajeevgoswami/',
    youtube: '#',
    website: 'https://www.industowers.com/',
    instagram: '#',
},
{
    name: 'Meeru Gupta',
    designation: ['General Counsel (VP) - Bata Limited'],
    image: './images/event-speakers/meeru-gupta.webp',
    linkedin: 'https://www.linkedin.com/in/meeru-gupta-596a0213/',
    youtube: '#',
    website:
        'https://www.bata.com/in/new/?utm_source=GoogleAdsNeon&utm_medium=Search&utm_campaign=Brand_Bata_Search_TopStates_MxC&gad_source=1&gad_campaignid=18004442840&gbraid=0AAAAACdrUVrlEqryxOlDE5f-ARKoihrsz&gclid=Cj0KCQjwjJrCBhCXARIsAI5x66WbUZrum1AqgIjlyCrDVqPNw3G4vMQU5rMXdE864J4ZxWlV13EVpwwaApO2EALw_wcB',
    instagram: '#',
},
{
    name: 'Jyothi VK',
    designation: [
        'General Counsel, Senior Vice President (VP) - Aditya Birla Fashion and Retail Limited',
    ],
    image: './images/event-speakers/jyothi-vk.webp',
    linkedin: 'https://www.linkedin.com/in/jyothi-v-k/',
    youtube: '#',
    website:
        'https://www.adityabirla.com/businesses/companies/aditya-birla-fashion-and-retail-limited-abfrl/',
    instagram: '#',
},
{
    name: 'Ankita Sharma',
    designation: [
        'General Counsel (VP) Legal & Regulatory - Honasa Consumer Ltd.',
    ],
    image: './images/event-speakers/ankita-sharma.webp',
    linkedin:
        'https://www.linkedin.com/in/ankita-sharma-a7871715b/?originalSubdomain=in',
    youtube: '#',
    website: 'https://honasa.in/',
    instagram: '#',
},
{
    name: 'Kapil Singhal',
    designation: ['CEO & Founder - CaseDocker'],
    image: './images/event-speakers/kapil-singhal.webp',
    linkedin: 'https://www.linkedin.com/in/singhalkapil/',
    youtube: '#',
    website: 'https://www.casedocker.com/landing/',
    instagram: '#',
},
{
    name: 'Preet Sethi',
    designation: ['Deputy General Counsel - Vedanta Resources Ltd.'],
    image: './images/event-speakers/preet-sethi.webp',
    linkedin: 'https://www.linkedin.com/in/preetsethi/',
    youtube: '#',
    website: 'https://www.vedantalimited.com/eng/',
    instagram: '#',
},
{
    name: 'Mehak Oberoi',
    designation: ['Legal Head - Hydro (APAC) - GE Vernova'],
    image: './images/event-speakers/mehak-oberoi.webp',
    linkedin: 'https://www.linkedin.com/in/oberoimehak/',
    youtube: '#',
    website: 'https://www.gevernova.com/',
    instagram: '#',
},
{
    name: 'Vidhi Thukral',
    designation: ['Chief Manager: ESG - Axis Max Life Insurance'],
    image: './images/event-speakers/vidhi-thukral.webp',
    linkedin: 'https://www.linkedin.com/in/vidhi-thukral-b5952962/',
    youtube: '#',
    website: 'https://www.axisbank.com/retail/insurance/max-life-insurance',
    instagram: '#',
},
{
    name: 'Raveena Rani',
    designation: ['Solicitor - Solicitors Regulation Authority'],
    image: './images/event-speakers/raveena-rani.webp',
    linkedin: 'http://linkedin.com/in/raveena-rani-458766116',
    youtube: '#',
    website: 'https://www.sra.org.uk/',
    instagram: '#',
},
{
    name: 'Babita Kumari',
    designation: ['Sr. Legal Counsel - Malomatia India Technology Services'],
    image: './images/event-speakers/babita-kumari.webp',
    linkedin: 'https://www.linkedin.com/in/csbabitarajput/',
    youtube: '#',
    website: 'https://www.malomatia.com/',
    instagram: '#',
},
{
    name: 'Anjali Sheoran',
    designation: ['Legal Counsel - Atlan'],
    image: './images/event-speakers/anjali-sheoran.webp',
    linkedin: 'https://www.linkedin.com/in/anjalisheoran/',
    youtube: '#',
    website: 'https://atlan.com/',
    instagram: '#',
},
{
    name: 'Dr. Akshay Kant Chaturvedi',
    designation: ['Corporate Head - IPR - Gujarat Fluorochemicals Limited'],
    image: './images/event-speakers/akshay-kant-chaturvedi.webp',
    linkedin:
        'https://www.linkedin.com/in/dr-akshay-kant-chaturvedi-38797b1/',
    youtube: '#',
    website: 'https://gfl.co.in/',
    instagram: '#',
},
{
    name: 'Shuchita Singhal',
    designation: ['COO - CaseDocker'],
    image: './images/event-speakers/shuchita-singhal.webp',
    linkedin: 'https://www.linkedin.com/in/shuchita-singhal/',
    youtube: '#',
    website: 'https://www.casedocker.com/landing/',
    instagram: '#',
},
{
    name: 'Manoj Gujaran',
    designation: [
        'Legal Strategist and Compliance Thought Leader in BFSI & Strategic Advisor - Pashyanti Ventures LLP',
    ],
    image: './images/event-speakers/manoj-gujaran.webp',
    linkedin: 'https://www.linkedin.com/in/manoj-gujaran-a8030014/',
    youtube: '#',
    website: '#',
    instagram: '#',
},
{
    name: 'Adv. Aditya Goenka',
    designation: [
        'Chief Legal & Compliance Officer - YES Securities (India) Limited',
    ],
    image: './images/event-speakers/aditya-goenka.webp',
    linkedin:
        'https://www.linkedin.com/in/adv-aditya-goenka/?originalSubdomain=in',
    youtube: '#',
    website: 'https://yesinvest.in/',
    instagram: '#',
},
{
    name: 'Hitendra Palia',
    designation: ['Legal Coundel - PhonePe'],
    image: './images/event-speakers/hitendra-palia.webp',
    linkedin: 'https://www.linkedin.com/in/hitendra-palia-3a39b045/',
    youtube: '#',
    website: 'https://www.phonepe.com/',
    instagram: '#',
},
{
    name: 'Raunak Singh',
    designation: ['Legal Counsel & Company Secretary Amway'],
    image: './images/event-speakers/raunak-singh.webp',
    linkedin:
        'https://www.linkedin.com/in/raunak-singh-9461463a/?originalSubdomain=in',
    youtube: '#',
    website: 'https://www.amway.in/',
    instagram: '#',
},
{
    name: 'Punit Babbar',
    designation: ['GM - Liaisoning & Head Complaint Management - Tide'],
    image: './images/event-speakers/punit-babbar.webp',
    linkedin: 'https://www.linkedin.com/in/punit-babbar-6b963738/',
    youtube: '#',
    website:
        'https://www.tide.co/en-IN/?srsltid=AfmBOop4_U-h6D3LzPtCR30Dn-r8AhEEWFZX1hljjf61Jdb4ejyjX8e0',
    instagram: '#',
},
{
    name: 'Dr. Richa Pathak',
    designation: [
        'Senior Corporate Counse Management - Voltas Ltd. - A Tata Enterprise',
    ],
    image: './images/event-speakers/richa-pathak.webp',
    linkedin: 'https://www.linkedin.com/in/richapathak1989/',
    youtube: '#',
    website: 'https://www.voltas.com/collections/ac',
    instagram: '#',
},
{
    name: 'Ananya Gupta',
    designation: ['Legal Counsel - UPC Solar India Private Limited'],
    image: './images/event-speakers/ananya-gupta.webp',
    linkedin: 'https://www.linkedin.com/in/lawyerananya/',
    youtube: '#',
    website: 'https://upcrenewables.com/',
    instagram: '#',
},
{
    name: 'Adv. Saurabh Sharma',
    designation: ['Managing Director - JSSB Legal'],
    image: './images/event-speakers/saurabh-sharma.webp',
    linkedin: 'https://www.linkedin.com/in/saurabh-sharma-3169167/',
    youtube: '#',
    website: 'https://www.jssblegal.com/',
    instagram: '#',
},
{
    name: 'Adv. CS Avdhesh Kr. Varshney',
    designation: ['Founder & Mentor Justicewings Lexedge Solutions LLP'],
    image: './images/event-speakers/c-s-avdhesh-kr-varshney.webp',
    linkedin: 'https://www.linkedin.com/in/avdheshvarshney/',
    youtube: '#',
    website: 'https://jwlexedge.com/',
    instagram: '#',
},
{
    name: 'Manushi Shah',
    designation: ['Partner - La Mintage Legal Llp'],
    image: './images/event-speakers/manushi-shah.webp',
    linkedin: 'https://www.linkedin.com/in/manushishah/',
    youtube: '#',
    website: 'https://lamintage.com/',
    instagram: '#',
},
{
    name: 'Anurag Goyal',
    designation: ['Head of Cyber Security RedDoorz'],
    image: './images/event-speakers/anurag-goyal.webp',
    linkedin:
        'https://www.linkedin.com/in/anuraggoyal2021/?originalSubdomain=in',
    youtube: '#',
    website: 'https://www.reddoorz.com/',
    instagram: '#',
},
{
    name: 'Shweta Bansal',
    designation: ['Managing Partner - SB Tech Associates'],
    image: './images/event-speakers/shweta-bansal.webp',
    linkedin: 'http://linkedin.com/in/shwetabansal-tl',
    youtube: '#',
    website: '#',
    instagram: 'https://www.instagram.com/advshwetabansal/',
},
{
    name: 'Akshar K Biyani',
    designation: ['Sr. DGM, Secretarial, Compliance, Legal - Adventz Group'],
    image: './images/event-speakers/akshar-k-biyani.webp',
    linkedin:
        'https://www.linkedin.com/in/akshar-biyani-67890a57?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkqcOtkt5QwO382qZ2TNG%2Bw%3D%3D',
    youtube: '#',
    website: 'https://www.adventz.com/',
    instagram: '#',
},
{
    name: 'Srijit Mukherjee',
    designation: ['Group General Counsel, Node4'],
    image: './images/event-speakers/srijit.webp',
    linkedin:
        'https://www.linkedin.com/in/srijitmukherjee/',
    youtube: '#',
    website: 'https://node4.co.uk/',
    instagram: '#',
},
{
    name: 'CA Sudheendra Rao',
    designation: ['CEO-Spondulix'],
    image: './images/event-speakers/sudheendra.webp',
    linkedin:
        '#',
    youtube: '#',
    website: '#',
    instagram: '#',
},
{
    name: 'Subham Khamar',
    designation: ['Assistant Manager - Corporate IPR Gujarat Fluorochemicals Limited'],
    image: './images/event-speakers/Subham.webp',
    linkedin:
        'https://www.linkedin.com/in/subham-khamar/?originalSubdomain=in',
    youtube: '#',
    website: '#',
    instagram: '#',
},
{
    name: 'Prof. A V Narsimharao',
    designation: ['Accredited Mediator'],
    image: './images/event-speakers/narsimharao.webp',
    linkedin:
        '#',
    youtube: '#',
    website: 'http://avnrao.com/',
    instagram: '#',
},
{
    name: 'Ranjan Singhania',
    designation: ['Founder-Dreamlegal'],
    image: './images/event-speakers/ranjan.webp',
    linkedin:
        'https://www.linkedin.com/in/ranjan-singhania-2b99ab212/',
    youtube: '#',
    website: 'https://dreamlegal.in/',
    instagram: '#',
},
{
    name: 'Dhawal Suryawanshi',
    designation: ['In-house Counsel - Gujarat Fluorochemicals Limited'],
    image: './images/event-speakers/dhawal.webp',
    linkedin:
        'https://www.linkedin.com/in/dhawal-suryawanshi-4b6572222/?originalSubdomain=in',
    youtube: '#',
    website: '#',
    instagram: '#',
}]

export const guestsOfHonour: Member[] = [
    {
        name: 'Dr. Ramdas Bandu Athawale',
        designation: [
            'Union Minister of State, India: Social Justice & Empowerment',
        ],
        image: './images/guest-of-honours/ramdas-athawale.webp',
        website: 'https://en.wikipedia.org/wiki/Ramdas_Athawale',
        youtube: 'https://youtu.be/v_aAwVWnAd8?feature=shared',
        instagram: '#',
        linkedin: '#',
    },
    {
        name: 'Smt. Himadri Singh',
        designation: [
            'Member of Parliament, Lok Sabha',
        ],
        image: './images/guest-of-honours/himdri-singh.webp',
        website: '#',
        youtube: 'https://youtu.be/FIN9wP2t6uc?si=WhZ5Pi4Dex9V-03y',
        instagram: 'https://www.instagram.com/himadri4bjp/',
        linkedin: '#',
    },
    {
        name: 'Faggan Singh Kulaste',
        designation: [
            'Former Minister of State in the Ministry of Steel; Minister of State in the Ministry of Rural Development, Government of India',
        ],
        image: './images/guest-of-honours/faggan-singh.webp',
        website: '#',
        youtube: 'https://youtu.be/GPMYw9q0Ew0?si=C1yzRN-pkLS_sT0i',
        instagram:
            'https://www.instagram.com/fskulaste?igsh=MWltZm1pbnhoenB0Mg%3D%3D',
        linkedin: '#',
    },
    {
        name: 'Shri Kapil Mishra',
        designation: [
            'Cabinet Minister, Govt of Delhi Vice President BJP Delhi',
        ],
        image: './images/guest-of-honours/kapil-mishra.webp',
        website: '#',
        youtube: 'https://youtu.be/INYozth43wc?si=wD3GlxMdRRaRylio',
        instagram: 'https://www.instagram.com/kapilmishra_ind/?hl=en',
        linkedin: '#',
    },
    {
        name: 'Shri Satish Upadhyay',
        designation: [
            'MLA - Malviya Nagar, Delhi',
        ],
        image: './images/guest-of-honours/satish-upadhyay.webp',
        website:
            'https://en.wikipedia.org/wiki/Satish_Upadhyay#:~:text=Upadhyay%20joined%20the%20Rashtriya%20Swayamsevak,Nagar%20Assembly%20constituency%20in%202025.',
        youtube: 'https://www.youtube.com/watch?v=fT1w7Xh274Q',
        instagram: '#',
        linkedin: '#',
    },
    {
        name: 'Adv. Shikha Rai',
        designation: [
            'MLA - Greater Kailash, Delhi',
            '1st Woman Chairperson Standing Committee',
            '1st Woman Leader of the House',
            'Advocate at Supreme Court of India',
        ],
        image: './images/guest-of-honours/shikha-rai.webp',
        website: '#',
        youtube: 'https://youtu.be/AFi990nGCQg?feature=shared',
        instagram:
            'https://www.instagram.com/shikharaibjp?utm_source=ig_web_button_share_sheet&igsh=c2phYzE3ZGd3MHln',
        linkedin: '#',
    },
    {
        name: 'Raghuraj Singh',
        designation: [
            'MLA, Uttar Pradesh',
        ],
        image: './images/guest-of-honours/raghuraj-singh.webp',
        website: '#',
        youtube: 'https://www.youtube.com/watch?v=rfPV5SPQJMU',
        instagram: 'https://www.instagram.com/raghurajsinghbjp/?hl=en',
        linkedin: '#',
    },
    {
        name: 'Pravesh Ratn',
        designation: [
            'MLA, Patel Nagar, Delhi',
        ],
        image: './images/guest-of-honours/pravesh-ratn.webp',
        website: '#',
        youtube: 'https://youtu.be/-4UFmKuxPLg?si=RRzyFXiz3PTldMOE',
        instagram: 'https://www.instagram.com/praveshratn/?hl=en',
        linkedin: '#',
    },
    {
        name: 'Shri Vinay Choudhary',
        designation: [
            'National Co-Incharge Research & Policy - BJP',
        ],
        image: './images/guest-of-honours/shri-vinay-choudhary.webp',
        website: '#',
        youtube: 'https://www.youtube.com/watch?v=rfPV5SPQJMU',
        instagram:
            'https://www.instagram.com/vinaybjpvoice?igsh=aDJ3NDZvMW1tZGoy',
        linkedin: '#',
    },
]

export const honourableGuests: Member[] = [
    {
        name: 'Justice Hima Kohli (Retd.)',
        designation: ['Former Supreme Court Judge'],
        image: './images/honourable-guests/hima-kohli.webp',
        type: 'Honourable Guest',
        website: 'https://www.sci.gov.in/judge/justice-hima-kohli/',
        youtube: 'https://youtu.be/-KTgTaihOAI?si=xROCy3nDkrBcIZbT',
        instagram: '#',
        linkedin: '#',
    },
    {
        name: 'Dr. Adish C Aggarwala, Sr. Adv',
        designation: [
            'President, International Council of Jurists',
            'Former President, Supreme Court Bar Association',
            'Chairman, All India Bar Association',
            'Ex. VC- BCI',
        ],
        image: './images/honourable-guests/adish-c-aggarwala.webp',
        type: 'Eminent Guest',
        website: '#',
        youtube: 'https://www.youtube.com/watch?v=6b4blcWZnE4',
        instagram: 'https://www.instagram.com/adishaggarwala/',
        linkedin: '#',
    },
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
    newYork,
    southEastAsia,
];

export const previousEvents : Event[] = [
    bharatNyayaPuraskar,
    delhi
]