import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const UpcomingEvents = () => {
  const upcomingEvents = [
    {
      title: 'Le Grand Legal Summit - Dubai',
      date: 'February, 2026',
      location: 'Dubai, UAE',
      description:
        'Exploring the intersection of artificial intelligence and legal practice with focus on automation, ethics, and future trends.',
      image:
        './images/misc/dubai.webp',
    },
    {
      title: 'Le Grand Legal Summit - UK',
      date: 'March, 2026',
      location: 'United Kingdom',
      description:
        'Deep dive into recent constitutional amendments, fundamental rights evolution, and judicial interpretation of constitutional principles.',
      image:
        './images/misc/uk.webp',
    },
    {
      title: 'Le Grand Legal Summit - New York',
      date: 'October, 2026',
      location: 'New York, USA',
      description:
        'Comprehensive discussion on corporate compliance, ESG frameworks, and emerging challenges in corporate governance.',
      image:
        './images/misc/nyc.webp',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-primary-main mb-6`}
          >
            All Upcoming Events
          </h2>
          <div className={`w-24 h-1 bg-secondary-main mx-auto mb-6`}></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Stay ahead with our series of specialized legal conferences and
            professional development events
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
