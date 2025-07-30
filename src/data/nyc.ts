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

const route = '/nyc-26';
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
];

export const heroSection: HeroSection = {
  date: 'October, 2026',
  location: 'New York, USA',
  timerCountdownEndDateTimeStamp: '2026-10-01T09:00:00',
  supportedBy: [],
  backgroundImages: [
    './images/misc/newyork1.webp',
    './images/misc/newyork2.webp',
    './images/misc/statue-newyork.webp',
    './images/misc/nyc.webp',
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

export const agendaDetails: Agenda[] = [];

export const agendaSection: AgendaSection = {
  date: 'October, 2026',
  location: 'New York, USA',
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
