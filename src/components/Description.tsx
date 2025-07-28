import Gallery from './Gallery';
import leconfluenceLogo from '/images/logos/leconfluence.webp';
import { Calendar, MapPin, Phone, IndianRupee, Ticket } from 'lucide-react';
import { DescriptionDetails } from '../types';

const Description = ({ images, descriptionDetails }: { images: string[], descriptionDetails: DescriptionDetails }) => {
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
                About {descriptionDetails.title}
              </h2>
              <div className={`w-24 h-1 bg-secondary-main mb-6`}></div>
              {descriptionDetails.description.map((description, index) => (
                <p dangerouslySetInnerHTML={{ __html: description }} key={index} className="text-lg text-text-secondary leading-relaxed">
                </p>
              ))}
            </div>
            <Gallery images={images} />
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
                      {descriptionDetails.date}
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
                      {descriptionDetails.location}
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
                    <p className="text-text-muted">{descriptionDetails.contactNumber}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IndianRupee
                    className={`text-secondary-main mt-1`}
                    size={20}
                  />
                  <div>
                    <p className="font-semibold">Ticket Price</p>
                    <p className="font-bold text-2xl text-white">{descriptionDetails.ticketPrice}</p>
                  </div>
                </div>
                {descriptionDetails.ticketLink !== '#' && (
                  <a
                    href={descriptionDetails.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full bg-secondary-main hover:bg-secondary-main/80 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center gap-2`}
                  >
                    <Ticket size={20} />
                    Buy Ticket
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
