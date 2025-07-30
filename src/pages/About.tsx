import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar';
import { NavItem } from '../types';
import leconfluenceLogo from '/images/logos/leconfluence.webp';
import { Building, Users, Award, Target } from 'lucide-react';
import { upcomingEvents, pastEvents } from '../data/events';

const aboutContent = [
  `<strong>Le Grand Legal Summit</strong> is India's premier legal conference series, bringing together the most influential minds in the legal profession. Our mission is to create a platform where legal excellence meets innovation, fostering collaboration and knowledge exchange among legal professionals across the globe.`,
  `Founded with the vision of elevating the legal profession in India, Le Grand Legal Summit has become the definitive gathering for General Counsels, Law Firm Partners, Judges, Senior Advocates, LegalTech innovators, and corporate legal teams. Each summit is meticulously designed to address the evolving challenges and opportunities in the legal landscape.`,
  `Our events feature world-class keynote speakers, cutting-edge legal technology showcases, panel discussions on emerging legal trends, and the prestigious <strong>Bharat Nyaya Puraskar</strong> awards ceremony that recognizes outstanding contributions across 50+ legal categories.`,
  `Beyond networking and recognition, Le Grand Legal Summit serves as a catalyst for legal transformation in India, promoting best practices, ethical standards, and innovation that shapes the future of law. We are committed to creating meaningful connections that drive the legal profession forward.`,
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
    title: 'Legal Professionals',
    description:
      '500+ attendees including General Counsels, Law Firm Partners, and Senior Advocates',
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
    icon: Target,
    title: 'Innovation Focus',
    description:
      'Showcasing cutting-edge legal technology and emerging trends in the profession',
    color: 'text-green-600',
  },
  {
    icon: Building,
    title: 'Pan-India Network',
    description:
      'Connecting legal minds from across major cities and legal hubs in India',
    color: 'text-purple-600',
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
                Why Le Grand Legal Summit?
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
    </>
  );
}
