import Gallery from './Gallery';
import leconfluenceLogo from '/images/logos/leconfluence.webp';
import { Calendar, MapPin, Phone, IndianRupee, Ticket } from 'lucide-react';
import { eventLink } from './Navbar';

const galleryImages = [
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

const Description = () => {
  return (
    <section className="pt-20 pb-10 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-start">
          {/* Left: Gallery + Description */}
          <div className="lg:col-span-7 w-full">
            <div className="space-y-6 mb-8">
              <h2
                className={`text-4xl md:text-5xl font-bold text-primary-main mb-4`}
              >
                About Le Grand Legal Summit
              </h2>
              <div className={`w-24 h-1 bg-secondary-main mb-6`}></div>
              <p className="text-lg text-text-secondary leading-relaxed">
                Step into the heart of the Indian legal landscape at{' '}
                <strong>Le Grand Legal Summit 2025</strong>, happening on{' '}
                <strong>July 19th &amp; 20th</strong> in Welcomhotel by ITC,
                Dwarka, New Delhi. This landmark event, organized by Le
                Confluence, will bring together{' '}
                <strong>500+ leading legal professionals</strong> — from General
                Counsels and Law Firm Partners to Judges, LegalTech innovators,
                and Senior Advocates — for a day of learning, recognition, and
                high-powered networking.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                The summit will feature insightful keynote sessions, legal tech
                showcases, and engaging discussions on the future of law in
                India. One of the major highlights will be the{' '}
                <strong>Bharat Nyaya Puraskar</strong> — a prestigious legal
                award ceremony honoring outstanding contributions across 50+
                categories.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Whether you’re a legal practitioner, innovator, policymaker, or
                part of a corporate legal team, Le Grand Legal Summit offers
                unmatched visibility, collaboration opportunities, and thought
                leadership in a vibrant, prestigious setting.
              </p>
            </div>
            <Gallery images={galleryImages} />
          </div>

          {/* Right: Event & Booking Cards */}
          <div className="lg:col-span-3 w-full flex flex-col gap-8">
            {/* Event Details Card */}
            <div className="bg-background-primary rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3
                className={`text-2xl font-bold text-primary-main mb-6 flex items-center gap-3`}
              >
                <span
                  className={`inline-block bg-secondary-main/10 p-2 rounded-full`}
                >
                  <Calendar className={`text-secondary-main`} size={28} />
                </span>
                Event Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className={`text-secondary-main mt-1`} size={20} />
                  <div>
                    <p className={`font-semibold text-primary-main`}>Date</p>
                    <p className="text-text-secondary">
                      July 19th - 20th, 2025
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className={`text-secondary-main mt-1`} size={20} />
                  <div>
                    <p className={`font-semibold text-primary-main`}>
                      Location
                    </p>
                    <p className="text-text-secondary">
                      Welcomhotel by ITC, Dwarka, New Delhi
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <img
                    src={leconfluenceLogo}
                    alt="Le Confluence Logo"
                    className="h-12 w-auto rounded bg-white p-1 border"
                  />
                  <div>
                    <p className={`font-semibold text-primary-main`}>
                      Organised By
                    </p>
                    <p className="text-text-secondary">Le Confluence</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Booking Details Card */}
            <div
              className={`bg-primary-main rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-white`}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span
                  className={`inline-block bg-secondary-main/20 p-2 rounded-full`}
                >
                  <Ticket className={`text-secondary-main`} size={28} />
                </span>
                Booking Details
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Phone className={`text-secondary-main mt-1`} size={20} />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-text-muted">+91 95827 23995</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IndianRupee
                    className={`text-secondary-main mt-1`}
                    size={20}
                  />
                  <div>
                    <p className="font-semibold">Ticket Price</p>
                    <p className="font-bold text-2xl text-white">₹10,000</p>
                  </div>
                </div>
                <a
                  href={eventLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-secondary-main hover:bg-secondary-main/80 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center gap-2`}
                >
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
