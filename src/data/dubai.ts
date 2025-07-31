import {
  Award,
  BookOpen,
  Calendar,
  Camera,
  Coffee,
  FileText,
  Globe,
  Laptop,
  Lightbulb,
  Mic,
  Users,
} from 'lucide-react';
import { upcomingEvents, pastEvents } from './events';
import {
  type Agenda,
  HeroSection,
  KeyHighlight,
  Member,
  Partner,
  VideoHighlight,
  WhatToExpect,
  NavItem,
  AgendaSection,
} from '../types';

const route = '/';
export const ticketLink = '#';
const filteredUpcomingEvents = upcomingEvents.filter(
  (event) => event.route !== route,
);
const filteredPastEvents = pastEvents.filter((event) => event.route !== route);
export const navItems: NavItem[] = [
  { name: 'Agenda', href: '#agenda' },
  {
    name: 'Upcoming Events',
    href: '#upcoming-events',
    dropdownItems: filteredUpcomingEvents.map((event) => ({
      name: event.title,
      href: event.route,
    })),
  },
  {
    name: 'Past Events',
    href: '#past-events',
    dropdownItems: filteredPastEvents.map((event) => ({
      name: event.title,
      href: event.route,
    })),
  },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Awards', href: 'https://bharatnyayapuraskar.com/' },
  { name: 'Recommendation Letters', href: '/recommendation-letters' },
  { name: 'About', href: '/about' },
  { name: 'Nominate', href: '/nominate' },
];

export const heroSection: HeroSection = {
  date: 'February 9, 2026',
  location: 'Dubai, UAE',
  timerCountdownEndDateTimeStamp: '2026-02-09T09:00:00',
  supportedBy: [],
  backgroundImages: [
    './images/misc/burj-ai-arab.webp',
    './images/misc/burj-khalifa.webp',
    './images/misc/museum-of-the-future.webp',
    './images/misc/palm-jumeriah.webp',
  ],
};

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

export const agendaDetails: Agenda[] = [
  {
    title: 'February 9, 8:00AM - 6:00PM',
    sessions: [
      {
        time: '08:00 AM - Onwards ',
        title: 'Conference Registration & Networking Refreshments',
        description: '#',
      },
      {
        time: '08:00 AM - 09:00 AM ',
        title: 'Introductions & Speed Networking',
        description:
          'Kickstart the conference with high-energy networking designed to maximize connections in a short time. Quick introductions to set the tone for the day. Fast-paced, informal exchanges to meet a variety of peers in minutes. Identify attendees with shared interests in IP, Patent, Trademark, Privacy, Compliance & Security. Meet key stakeholders, industry experts, and service providers.',
      },
      {
        time: '09:00 AM - 09:40 AM ',
        title: 'Collaborative Round Table Discussions',
        description:
          'Converging Forces: Building Trusted, Resilient, and Compliant Organizations in the Age of AI, Cyber Threats & Global Regulation. 	Balancing agility with accountability in a fast-paced regulatory environment. Connecting data privacy, cybersecurity, and IP for enterprise resilience. How AI is reshaping risk, compliance, and innovation governance. Legal-tech-business collaboration for unified strategic outcomes. Future-proofing organizations in high-risk, high-opportunity markets',
      },
      {
        time: '09:40 AM - 10:00 AM ',
        title: 'Keynote Address',
        description:
          'Ethical Data Use and Privacy: Striking the balance between Innovation and Compliance. A leading service provider delivers a powerful, insight-rich keynote that offers exceptional value, helping the audience learn, reflect, and apply practical solutions',
      },
      {
        time: '10:00 AM - 10:20 AM ',
        title: 'Keynote Address',
        description:
          'AI-Powered GRC: Transforming Business Success. A leading service provider delivers a powerful, insight-rich keynote that offers exceptional value, helping the audience learn, reflect, and apply practical solutions',
      },
      {
        time: '10:20 AM - 11:00 AM ',
        title: 'Collaborative Round Table Discussions',
        description:
          'Smart Governance for Emerging Tech: Risk Management in AI, Blockchain & IP-Driven Innovation. Frameworks for governing high-impact, high-risk emerging technologies. IP risk in decentralized, open-source, and AI-generated innovation. Balancing innovation incentives with regulatory accountability. Sector-specific insights: Healthtech, fintech, smart cities, and beyond. Building trust across autonomous systems and global tech platforms. From Invention to Regulation: A CxO View on Innovation & Governance',
      },
      {
        time: '11:00 AM - 11:10 AM ',
        title: 'Exclusive Case Study Presentation',
        description:
          'Automating DSARs: Efficiency, Compliance, and Innovation. A service provider showcases innovative solutions addressing key industry challenges aligned with the conference theme',
      },
      {
        time: '11:10 AM - 11:20 AM',
        title: 'Refreshments',
        description:
          'Enjoy a tea break while networking and engaging in peer-to-peer discussions',
      },
      {
        time: '11:20 AM - 11:50 AM ',
        title: 'Peer Connect: One-on-One Conversations',
        description:
          'No panels. No slides. Just real conversations that matter. Sit with peers based on your focus area. Engage in rapid, meaningful exchanges with professionals facing similar issues. : After each chat, connect with others at your table - then rotate to another for fresh perspectives. Share real-world experiences, pain points, and proven solutions. Explore how leaders manage regulatory shifts, patent/IP protection, and compliance. Build trust-based connections in a fast-paced, energizing environment',
      },
      {
        time: '11:50 AM - 12:10 PM ',
        title: 'Keynote Address',
        description:
          'Trademark Enforcement in the Digital Era: Balancing Brand protection with LegalTech.A leading service provider delivers a powerful, insight-rich keynote that offers exceptional value, helping the audience learn, reflect, and apply practical solutions',
      },
      {
        time: '12:10 PM - 12:30 PM ',
        title: 'Keynote Address',
        description:
          'Why is it important to have an IP-savvy workforce? A leading service provider delivers a powerful, insight-rich keynote that offers exceptional value, helping the audience learn, reflect, and apply practical solutions',
      },
      {
        time: '12:30 PM - 12:40 PM',
        title: 'Exclusive Case Study Presentation',
        description:
          'From Insight to Action: Driving Trademark Value Through Strategy and Operations. A service provider showcases innovative solutions addressing key industry challenges aligned with the conference theme',
      },
      {
        time: '12:40 PM - 01:20 PM',
        title: 'Collaborative Round Table Discussions',
        description:
          'AI, Trade Secrets & Data Privacy: Navigating the Grey Zones. Legal uncertainty in generative AI, proprietary algorithms, and training data. Trade secret risks when AI models ingest sensitive or third-party IP. Privacy-by-design vs. innovation velocity in AI system development. What regulators, courts, and governments are signaling around AI+IP. Building internal governance for emerging AI legal risks and ethics',
      },
      {
        time: '01:20 PM - 02:00 PM',
        title: 'Lunch Break & Informal Networking',
        description:
          'Enjoy a networking lunch with speakers, sponsors, and fellow delegatesa ',
      },
      {
        time: '02:00 PM - 02:40 PM  ',
        title: 'Live, Interactive Group Discussion',
        description:
          'Real Talk: Intellectual Property Challenges Unplugged. Break away from the traditional panel format and engage in a dynamic, peer-led group discussion focused on the real-world challenges of managing intellectual property in a fast-evolving global landscape.Attendees will self-select into three focus areas - Patents, Trademarks, and IP Strategy & Enforcement - to share experiences, explore cross-industry approaches, and collaboratively surface practical solutions.Why You Should Join:. Participate in candid, topic-driven conversations with fellow IP professionals. Gain insight into how leading companies are managing IP protection, litigation, and cross-border enforcement. Interact directly with experts and senior IP counsels seated at each table, offering real-time perspectives. Walk away with actionable ideas, new connections, and strategic insights you can apply immediately.',
      },
      {
        time: '02:40 PM - 03:20 PM ',
        title: 'Collaborative Round Table Discussions',
        description:
          'Global Regulation Crossfire: IP, Data & Cyber Laws Collide. Managing multi-jurisdictional compliance for global enterprises. Cross-border complexities in IP transfer, data sovereignty, and cyber laws. Responding to conflicts between national security and digital trade. Strategies for global legal harmonization and operational scalability. Navigating upcoming regulatory shifts (EU AI Act, Digital India, etc.)',
      },
      {
        time: '03:20 PM - 04:00 PM ',
        title: 'Collaborative Round Table Discussions',
        description:
          'Navigating the Privacy, Security & IP Convergence: Unified Compliance in a Fragmented World. Key overlaps and friction points between data privacy, IP law, and cybersecurity. Designing integrated, scalable compliance programs for global operations. Risk-based prioritization amid conflicting regulatory demands. Operational collaboration between IT, legal, and risk functions. Role clarity: CISOs, DPOs, and IP heads in governance ecosystems',
      },
      {
        time: '04:00 PM - 04:20 PM ',
        title: 'Refreshments',
        description:
          'Enjoy a tea break while networking and engaging in peer-to-peer discussions ',
      },
      {
        time: '04:20 PM - 05:00 PM  ',
        title: 'Collaborative Round Table Discussions',
        description:
          'Managing Regulations: Relationship Between GCs, GRC Heads, DPOs, CISOs, Risk Managers & IP Leaders. Evolving regulatory roles and how senior leaders collaborate to reduce silos. Managing compliance overlap across legal, privacy, and security domains. Unified risk and incident response frameworks post-regulatory breach. Governance models for shared accountability and strategic alignment. Practical examples of board-level coordination on compliance and risk',
      },
      {
        time: '05:00 PM - 05:30 PM  ',
        title: 'Awards ceremony',
        description: '#',
      },
      {
        time: '5:30PM - 6:00 PM',
        title: 'Thank you and Closing Remarks!',
        description:
          'A heartfelt thanks to all the speakers and delegates for their invaluable support and participation.',
      },
    ],
  },
];

export const agendaSection: AgendaSection = {
  date: 'February 9, 2026',
  location: 'Dubai, UAE',
  agenda: agendaDetails,
};

export const whatToExpect: WhatToExpect[] = [
  {
    icon: Lightbulb,
    title: 'Insight Sessions',
    description: 'from World’s top legal minds',
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

export const guestsOfHonour: Member[] = [];

export const honourableGuests: Member[] = [];

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

export const eventSpeakers: Member[] = [
  {
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
];

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
    website: '#',
  },
];

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

export const videoHighlight: VideoHighlight = {
  title: 'View the Past Event Highlight',
  description:
    'The Panel Discussion on Turning Notes into Rights: Protecting Creativity in the Music Industry',
  videoLink:
    'https://www.youtube.com/embed/fL-52NajvGw?si=NLOohSlOLpi3JcFh&autoplay=1',
  backgroundImage: './images/misc/DSC01629.webp',
};

export {
  filteredUpcomingEvents as upcomingEvents,
  filteredPastEvents as pastEvents,
};
