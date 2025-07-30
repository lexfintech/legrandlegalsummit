import { useState } from 'react';
import { Clock, Calendar, MapPin } from 'lucide-react';
import { AgendaSection } from '../types';

const EventAgenda = ({ agendaSection }: { agendaSection: AgendaSection }) => {
  if (agendaSection.agenda.length === 0) return null;

  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="agenda" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-primary-main mb-4`}
          >
            Event Agenda
          </h2>
          <div className={`w-24 h-1 bg-secondary-main mx-auto mb-6`}></div>
          {(agendaSection.date !== '#' || agendaSection.location !== '#') && (
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-text-secondary">
              {agendaSection.date !== '#' && (
                <div className="flex items-center gap-2">
                  <Calendar size={20} />
                  <span>{agendaSection.date}</span>
                </div>
              )}
              {agendaSection.location !== '#' && (
                <div className="flex items-center gap-2">
                  <MapPin size={20} />
                  <span>{agendaSection.location}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Day Selector */}
        {agendaSection.agenda.length > 1 && (
          <div className="flex justify-center mb-12">
            <div className="bg-background-primary p-2 rounded-lg">
              {agendaSection.agenda.map((day, index) => (
                <button
                  onClick={() => setActiveDay(index)}
                  className={`px-4 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeDay === index
                      ? `bg-primary-main text-white shadow-lg`
                      : 'text-text-secondary hover:bg-white hover:shadow-md'
                  }`}
                >
                  {day.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Sessions */}
        <div className="space-y-6">
          {agendaSection.agenda[activeDay].sessions.map((session, index) => (
            <div
              key={index}
              className="bg-background-primary rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-[1.02] group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0">
                  <div
                    className={`flex items-center gap-2 text-secondary-main font-semibold`}
                  >
                    <Clock size={20} />
                    <span>{session.time}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3
                    className={`text-xl font-bold text-primary-main group-hover:text-secondary-main transition-colors duration-300`}
                  >
                    {session.title}
                  </h3>
                  {session.description && session.description !== '#' && (
                    <p className="text-text-secondary mt-2 leading-relaxed">
                      {session.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventAgenda;
