import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar';
import { NavItem } from '../types';
import leconfluenceLogo from '/images/logos/leconfluence.webp';
import { Globe, Users, Award, Target, Trophy, Network } from 'lucide-react';
import { upcomingEvents, pastEvents } from '../data/events';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';


const aboutContent = [
  `<strong>Le Grand Legal Summit</strong>  is one of the world’s most prestigious platforms celebrating excellence, innovation, and leadership in the legal and intellectual property domains. Hosted annually by Le Confluence, this landmark event convenes a global community of influential legal professionals, corporate counsel, policymakers, thought leaders and innovators for an immersive experience of ideas, dialogue and recognition.
Designed as a crucible for visionary conversations and actionable strategies, the Summit is shaping the future of law, justice and governance across jurisdictions and continents.`,
`<strong>Our Vision</strong> <br>To elevate the global legal landscape by fostering meaningful dialogue, showcasing transformative leadership and honouring those who drive impact across the legal, regulatory and policy spheres. `,
`<strong>Why It Matters</strong> <br>In an increasingly complex and interconnected world, Le Grand Legal Summit serves as a beacon for ethical leadership, cross-border collaboration and transformational thinking. It’s more than just a conference- it’s a global movement for legal excellence, driving systemic change and collective progress across the international legal ecosystem.`,
`<strong>Join the Movement</strong> <br>Whether you're a seasoned legal expert, a rising star, or an innovator at the intersection of law and technology, the Le Grand Legal Summit is your global platform to connect, contribute and lead.`,
]

const popularFAQs = [
    {
      question: "What is the Le Grand Legal Summit?",
      answer: "Le Grand Legal Summit is a premier annual gathering that brings together over 300 of India’s most distinguished legal professionals—General Counsels, Law Firm Partners, Judges, Senior Advocates, and LegalTech innovators. The summit is a hub for knowledge-sharing, networking, innovation, and celebrating legal excellence."
      },
    {
      question: "Who can attend?",
      answer: `The summit is open to: 
      <ul class="list-disc pl-6">
      <li>Legal practitioners and law firm leaders</li>
<li>In-house counsels and corporate legal teams</li>
<li>Policymakers and regulatory professionals</li>
<li>LegalTech professionals and startup founders</li>
<li>Law students and academicians</li>
<li>Anyone passionate about the future of legal practice</li>
</ul>`
      
    },
    {
      question: " What are the main highlights of the event?",
      answer: `<ul class="list-disc pl-6">
      <li>Keynote addresses by India’s leading legal minds</li>
<li>Bharat Nyaya Puraskar Awards – honoring Indian legal excellence across 50+ categories</li>
<li>Global Jurist Awards – recognizing outstanding international legal achievers</li>
<li>LegalTech Expo and startup showcase</li>
<li>Exclusive roundtables and networking lounges</li>
<li>Official Summit Magazine and media coverage</li>
<li>Certificates of Participation for all attendees</li>
</ul>`
     },
     {
      question: "Will attendees receive certificates?",
      answer: "Yes. All registered participants will receive an official Certificate of Participation."
      },
      {
      question: "Are meals and refreshments provided?",
      answer: "Yes. Complimentary lunch, high tea, and refreshments will be available to all registered attendees."
      },
      {
      question: "Can I apply to speak at the summit?",
      answer: "Yes. Legal professionals, thought leaders, and academics can apply via the official summit website. Speaking slots are limited and granted based on experience and proposal strength."
      },
      {
      question: "What awards are presented at the summit?",
      answer: "Bharat Nyaya Puraskar, Global Jurist Awards"
      },
      {
      question: " Who organizes the summit?",
      answer: "Le Grand Legal Summit is organized by Le Confluence, a thought leadership platform uniting legal, policy, and innovation leaders across the globe."
      },
      {
      question: " What networking opportunities are available?",
      answer:`<ul class="list-disc pl-6">
      <li>GC Roundtables and leadership dialogues</li>
<li>LegalTech exhibitions and startup showcases</li>
<li>Curated networking lounges during lunch, tea breaks, and evening sessions</li>
    </ul>`
      },
      {
      question: " Are sponsorship opportunities available?",
      answer:`Yes. Strategic sponsorship packages include options to:
      <ul class="list-disc pl-6">
      <li>Showcase your brand to key legal decision-makers</li>
<li>Launch or demo LegalTech products/services</li>
<li>Gain media exposure and placement in the official Summit Magazine</li>
<li>Host branded sessions, lounges, or award categories</li>
     </ul>`
      },
      {
      question: "How can I contact the organizers?",
      answer:`For queries, speaker applications, registration support, or sponsorship discussions:
      <ul class="list-disc pl-6">
      <li>Visit the official event website</li>
<li>Follow Le Confluence on LinkedIn, Instagram, and other platforms for updates</li>

     </ul>`
      },
    
  ];
  
const galleryImages: string[] = [
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

const highlights = [
  {
    icon: Users,
    title: 'Curated Knowledge Exchange',
    description:
      'Engage with leading legal minds through thought-provoking keynotes, high-level panels and fireside chats addressing the most pressing legal challenges and transformative innovations of our time.',
    color: 'text-blue-600',
  },
  {
    icon: Award,
    title: 'Bharat Nyaya Puraskar',
    description:
      'Prestigious awards ceremony recognizing excellence across 50+ legal categories',
    color: 'text-yellow-600',
  },
  {
    icon: Trophy,
    title: 'Global Jurist Awards',
    description:
      'Recognising trailblazing legal professionals and thought leaders from around the world who are driving progress across legal systems and shaping the future of international law.',
    color: 'text-green-600',
  },
  {
    icon: Network,
    title: 'Strategic Networking Opportunities',
    description:
      'Connect with a dynamic mix of general counsel, judges, legal tech pioneers, regulators and advisors in a collaborative and immersive environment.',
    color: 'text-purple-600',
  },
  {
    icon: Target,
    title: 'Future-Ready Focus',
    description:
      'Explore the cutting edge of legal innovation- from AI and legal automation to emerging global compliance standards and policy frameworks.',
    color: 'text-yellow-600',
  },
  {
    icon: Globe,
    title: 'Global Legal Collaboration Forums',
    description:
      'Participate in exclusive roundtables and bilateral forums designed to foster cross-border legal cooperation, promote harmonisation of regulations, and encourage legal diplomacy among nations, institutions and international organisations.',
    color: 'text-blue-600',
  },
];

export const navItems: NavItem[] = [
  {
    name: 'Upcoming Events',
    href: '#upcoming-events',
    dropdownItems: upcomingEvents.map((event) => ({
      name: event.title,
      href: event.route,
    })),
  },
  {
    name: 'Past Events',
    href: '#past-events',
    dropdownItems: pastEvents.map((event) => ({
      name: event.title,
      href: event.route,
    })),
  },
  { name: 'Awards', href: 'https://bharatnyayapuraskar.com/' },
  { name: 'Recommendation Letters', href: '/recommendation-letters' },
  { name: 'About', href: '/about' },
];

export default function About() {
  return (
    <>
      <Navbar navItems={navItems} ticketLink={'#'} />
      <section className="pt-24 pb-10 bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-main mb-4">
                About Le Grand Legal Summit
              </h1>
              <div className="w-24 h-1 bg-secondary-main mb-6"></div>
              {aboutContent.map((content, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: content }}
                  className="text-lg text-text-secondary leading-relaxed"
                />
              ))}
            </div>

            {/* Organizer Info */}
            <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={leconfluenceLogo}
                  alt="Le Confluence Logo"
                  className="h-16 w-auto rounded bg-white p-2 border"
                />
                <div>
                  <h3 className="text-2xl font-bold text-primary-main">
                    Organized by Le Confluence
                  </h3>
                  <p className="text-text-secondary">
                    India's Leading Legal Event Management Company
                  </p>
                </div>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed">
                Le Confluence is dedicated to creating world-class legal events
                that bring together the brightest minds in the Indian legal
                ecosystem. With a deep understanding of the legal profession's
                needs and challenges, we design experiences that foster
                meaningful connections, knowledge exchange, and professional
                growth.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-main mb-8 text-center">
                What We Offer
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`inline-block bg-gray-100 p-3 rounded-full`}
                      >
                        <highlight.icon
                          className={`${highlight.color}`}
                          size={24}
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-primary-main mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-text-secondary">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* FAQ Sections */}
            <div>
              <h2 className="text-3xl font-bold text-primary-main mb-8 text-center">
                FAQ's
                </h2>
                <FAQ faqs={popularFAQs} />
            </div>
            {/* Gallery */}
            <div>
              <h2 className="text-3xl font-bold text-primary-main mb-8 text-center">
                Event Gallery
              </h2>
              <Gallery images={galleryImages} />
            </div>
          </div>
        </div>
      </section>
             
      <Footer />
    </>
  );
}
