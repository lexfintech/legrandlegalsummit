import Gallery from './Gallery';
import leconfluenceLogo from '/images/logos/loconfluence.png';
import { Calendar, MapPin, Phone, IndianRupee, Ticket } from 'lucide-react';

const galleryImages = [
  'DSC01709.jpg',
  'DSC01714.jpg',
  'DSC01718.jpg',
  'DSC01724-1.jpg',
  'DSC01728.jpg',
  'DSC01730.jpg',
  'DSC01741.jpg',
  'DSC01748.jpg',
  'DSC01752.jpg',
  'DSC01760.jpg',
  'DSC01765.jpg',
  'DSC01766-Copy.jpg',
  'DSC01781.jpg',
  'DSC01815.jpg',
  'DSC01817.jpg',
  'DSC01826.jpg',
  'DSC01830.jpg',
  'DSC01836.jpg',
  'DSC01840.jpg',
  'DSC01715-min-scaled.jpg',
  'DSC01678-min-scaled.jpg',
  'DSC01744-min-scaled.jpg',
  'DSC01502-min-scaled.jpg',
  'DSC01595-min-scaled.jpg',
  'DSC01618-min-scaled.jpg',
  'DSC01674-min-scaled.jpg',
  'DSC01674-min-1-scaled.jpg',
  'DSC01694-min-scaled.jpg',
  'DSC01684-min-scaled.jpg',
  'DSC01551-min-scaled.jpg',
  'DSC01694-min-1-scaled.jpg',
  'DSC01731-min-scaled.jpg',
  'DSC01737-min-scaled.jpg',
  'DSC01701-min-scaled.jpg',
  'DSC01746-min-scaled.jpg',
];

const Description = () => {
  return (
    <section className="pt-20 pb-10 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-start">
          {/* Left: Gallery + Description */}
          <div className="lg:col-span-7 w-full">
            <div className="space-y-6 mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-4">About Le Grand Legal Summit</h2>
              <div className="w-24 h-1 bg-[#2E86AB] mb-6"></div>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                Step into the heart of the Indian legal landscape at <strong>Le Grand Legal Summit 2025</strong>, happening on <strong>July 19th &amp; 20th</strong> in Welcomhotel by ITC, Dwarka, New Delhi. This landmark event, organized by Le Confluence, will bring together <strong>500+ leading legal professionals</strong> — from General Counsels and Law Firm Partners to Judges, LegalTech innovators, and Senior Advocates — for a day of learning, recognition, and high-powered networking.
              </p>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                The summit will feature insightful keynote sessions, legal tech showcases, and engaging discussions on the future of law in India. One of the major highlights will be the <strong>Bharat Nyaya Puraskar</strong> — a prestigious legal award ceremony honoring outstanding contributions across 50+ categories.
              </p>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                Whether you’re a legal practitioner, innovator, policymaker, or part of a corporate legal team, Le Grand Legal Summit offers unmatched visibility, collaboration opportunities, and thought leadership in a vibrant, prestigious setting.
              </p>
            </div>
            <Gallery images={galleryImages} />
          </div>

          {/* Right: Event & Booking Cards */}
          <div className="lg:col-span-3 w-full flex flex-col gap-8">
            {/* Event Details Card */}
            <div className="bg-[#F7F7F7] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#1B263B] mb-6 flex items-center gap-3">
                <span className="inline-block bg-[#2E86AB]/10 p-2 rounded-full">
                  <Calendar className="text-[#2E86AB]" size={28} />
                </span>
                Event Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="text-[#2E86AB] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#1B263B]">Date</p>
                    <p className="text-[#4A4A4A]">July 19th - 20th, 2025</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#2E86AB] mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-[#1B263B]">Location</p>
                    <p className="text-[#4A4A4A]">Welcomhotel by ITC, Dwarka, New Delhi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img src={leconfluenceLogo} alt="Le Confluence Logo" className="h-12 w-auto rounded bg-white p-1 border" />
                  <div>
                    <p className="font-semibold text-[#1B263B]">Organised By</p>
                    <p className="text-[#4A4A4A]">Le Confluence</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Booking Details Card */}
            <div className="bg-[#1B263B] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="inline-block bg-[#2E86AB]/20 p-2 rounded-full">
                  <Ticket className="text-[#2E86AB]" size={28} />
                </span>
                Booking Details
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Phone className="text-[#2E86AB] mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-[#C0C0C0]">+91 95827 23995</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IndianRupee className="text-[#2E86AB] mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Ticket Price</p>
                    <p className="font-bold text-2xl text-white">₹10,000</p>
                  </div>
                </div>
                <a href="https://allevents.in/new-delhi/le-grand-legal-summit-tickets/80003171334744?aff=u1gjbz" target="_blank" rel="noopener noreferrer" className="w-full bg-[#2E86AB] hover:bg-[#2E86AB]/80 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center gap-2">
                  <Ticket size={20} />
                  Buy Ticket
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;