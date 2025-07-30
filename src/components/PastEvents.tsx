import { Calendar, MapPin } from 'lucide-react';
import { type Event } from '../types';
import { Link } from 'react-router-dom';
import { identityURLType } from '../utils';

const PastEvents = ({ pastEvents }: { pastEvents: Event[] }) => {
  return (
    <section id="past-events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-primary-main mb-6`}
          >
            Relive Our Past Events
          </h2>
          <div className={`w-24 h-1 bg-secondary-main mx-auto mb-6`}></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We've hosted a series of specialized legal conferences and
            professional development events designed to keep you at the
            forefront of the legal field.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <Link
              key={index}
              target={
                identityURLType(event.route) === 'external' ? '_blank' : '_self'
              }
              to={event.route}
              className="bg-background-primary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3
                  className={`text-xl font-bold text-primary-main mb-3 group-hover:text-secondary-main transition-colors duration-300`}
                >
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-text-secondary">
                    <Calendar size={16} className={`text-secondary-main`} />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary">
                    <MapPin size={16} className={`text-secondary-main`} />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                {/* <p className="text-text-secondary leading-relaxed mb-6">
                  {event.description}
                </p> */}

                {/* <button
                  className={`bg-secondary-main hover:bg-secondary-main/80 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center gap-2 group`}
                >
                  More Details
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </button> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
