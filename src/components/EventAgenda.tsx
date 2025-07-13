import React, { useState } from 'react';
import { Clock, Calendar, MapPin } from 'lucide-react';

const EventAgenda = () => {
  const [activeDay, setActiveDay] = useState(1);

  const day1Sessions = [
    {
      time: '9:00 AM - 9:45 AM',
      title: 'Registrations & Hi-Tea',
      description: 'Begin your day by collecting your exclusive event kit at the registration desk, followed by a refreshing hi-tea break with snacks and engaging conversations with fellow legal professionals.'
    },
    {
      time: '9:45 AM - 10:00 AM',
      title: 'Lighting of the Lamp & Opening Ceremony',
      description: 'Lighting of the lamp and opening ceremony to mark the auspicious beginning of the summit with wisdom, purpose, and unity.'
    },
    {
      time: '10:00 AM - 10:15 AM',
      title: 'Keynote: India\'s Legal Future: Balancing Tradition, Technology, and Justice in the New Era',
      description: 'A powerful exploration of how India\'s legal system must evolve by integrating tradition with innovation to deliver faster, fairer, and more accessible justice.'
    },
    {
      time: '10:20 AM - 10:35 AM',
      title: 'Keynote: Legal Leadership in the Age of Disruption: Challenges & Opportunities',
      description: 'A compelling insight into how legal professionals can lead with agility amid rapid technological, regulatory, and societal changes shaping India\'s justice ecosystem.'
    },
    {
      time: '10:40 AM - 11:30 PM',
      title: 'Panel Discussion: The Future of Litigation in India: Reform, Technology & Access',
      description: 'Experts explore how evolving legal reforms, digital innovation, and inclusive practices are reshaping the litigation landscape in India.'
    },
   {
    time: '11:30 AM - 12:00 PM',
    title: 'Netwoking-Tea & Refreshments',
    description:'Refreshing hi-tea break with snacks and engaging conversations with fellow legal professionals.'
   },
    {
      time: '12:00 PM - 12:50 PM',
      title: 'Panel Discussion: Data Privacy and Cybersecurity Legal Challenges and Strategic Safeguards in the Age of Innovation.',
      description: 'This panel explores the evolving legal landscape of data privacy and cybersecurity, offering strategic insights to safeguard innovation in the digital era.'
    },
    {
      time: '1:00 PM - 1:50 PM',
      title: 'Panel Discussion: Driving Corporate Sustainability: Legal Strategies for ESG and Long-Term Business Impact.',
      description: 'Ensuring compliance with evolving ESG frameworks and reporting standards.'
    },
    {
      time: '1:50 PM - 2:10 PM',
      title: 'Case Study Presentation',
      description: ''
    },
    {
      time: '2:10 PM - 3:10 PM',
      title: 'Networking Over Lunch',
      description: 'Refreshing lunch break and engaging conversations with fellow legal professionals.'
    },
    {
      time: '3:10 PM - 4:00 PM',
      title: 'Panel Discussion: Is the Indian Legal System Ready for War-Time Law?',
      description: 'Exploring the preparedness of India\'s legal framework to address challenges and complexities arising in times of armed conflict and national emergency.'
    },
    {
      time: '4:00 PM - 4:50 PM',
      title: 'Panel Discussion: The Evolving Role Of In-House Counsels in Strategic Decision Making',
      description: 'Exploring how in-house counsels are increasingly shaping strategic business decisions and driving organizational value beyond traditional legal roles.'
    },
    {
      time: '4:50 PM - 5:50 PM',
      title: 'Bharat Nyaya Puraskar Awards Ceremony',
      description: 'Awardees will be honoured in with the Bharat Nyaya Purasakar - Presented by Indian Actor Sourabh Raaj Jain'
    },
    {
      time: '5:50 PM - 6:20 PM',
      title: 'Closing Ceremony of Day 1 of the Event followed by Networking-Tea & Refreshments',
      description: 'Closing of Day 1 of the event followed by Refreshing networking-tea break with snacks & engaging conversations with fellow legal professionals.'
    },
  ];

  const day2Sessions = [
    {
      time: '9:00 AM - 9:45 AM',
      title: 'Registrations & Hi-Tea',
      description: 'Begin your day by collecting your exclusive event kit at the registration desk, followed by a refreshing hi-tea break with snacks and engaging conversations with fellow legal professionals.'
    },
    {
      time: '9:45 AM - 10:00 AM',
      title: "Keynote Speech: Emerging Legal Frontiers - Navigating Industry Trends Shaping India's Regulatory Landscape",
      description: 'An insightful exploration of evolving industry trends in India, and how legal frameworks are adapting to drive innovation, compliance, and sustainable growth.'
    },
    {
      time: '10:00 AM - 10:15 AM',
      title: 'Case Study Presentation',
      description: ''
    },
    {
      time: '10:20 AM - 11:10 AM',
      title: 'Panel Discussion : Navigating Legal Risk in a Globalized Economy',
      description: 'Examining strategies for managing legal risks and ensuring compliance amid the complexities of a fast-evolving global economy.'
    },
    {
      time: '11:10 AM - 12:00 PM',
      title: 'Panel Discussion: Guardians of the Grid: Legal Strategies for Data Breaches, Ransomware, and Digital Espionage',
      description: 'Exploring legal frameworks and response strategies to combat data breaches, ransomware attacks, and cyber espionage in a digital-first world.'
    },
    {
      time: '12:00 PM - 12:30 PM',
      title: 'Netwoking-Tea & Refreshments',
      description: 'Refreshing hi-tea break with snacks and engaging conversations with fellow legal professionals.'
    },
    {
      time: '12:30 PM - 1:10 PM',
      title: 'Panel Discussion: Intellectual Property in India: Protecting Innovation- Key strategies to secure and enforce IP rights in India',
      description: 'Exploring how in-house counsels are increasingly shaping strategic business decisions and driving organizational value beyond traditional legal roles.'
    },
    {
      time: '1:10 PM - 2:00 PM',
      title: 'Panel Discussion: Markets on the Edge: Tackling Anti-Competitive Conduct in the Platform Economy',
      description: 'A deep dive into legal approaches to detect, regulate, and prevent anti-competitive behavior in the rapidly evolving platform-based digital economy.'
    },
    {
      time: '2:00 PM - 3:00 PM',
      title: 'Panel Discussion: Turbulence in the Skies: Legal Accountability and Policy Reform After the Air India Crash',
      description: 'Exploring legal accountability, regulatory challenges, and policy reforms in the wake of major aviation disasters.'
    },
    {
      time: '3:00 PM - 4:00 PM',
      title: 'Networking Over Lunch',
      description: 'Refreshing lunch break and engaging conversations with fellow legal professionals.'
    },
    {
      time: '4:00 PM - 4:50 PM',
      title: 'Panel Discussion: The Transformative Role of Al in Revolutionizing Legal Practice, Compliance, and Governance.',
      description: 'Exploring how Al is reshaping legal practice, enhancing compliance, and driving smarter governance in the digital age.'
    },
    {
      time: '4:50 PM - 5:40 PM',
      title: 'Panel Discussion: Tech & Law - The Rise of Legal Innovation',
      description: 'Exploring how technology is transforming the legal landscape through innovation, efficiency, and access to justice.'
    },
    {
      time: '5:40 PM - 6:20 PM',
      title: 'Fireside Chat by Influence Talk',
      description: ''
    },
    {
      time: '6:20 PM - 6:30 PM',
      title: 'Closing Ceremony followed by Networking-Tea & Refreshments',
      description: 'Closing of the event followed by Refreshing networking-tea break with snacks & engaging conversations with fellow legal professionals.'
    },
  ];

  return (
    <section id="agenda" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-4">
            Event Agenda
          </h2>
          <div className="w-24 h-1 bg-[#2E86AB] mx-auto mb-6"></div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[#4A4A4A]">
            <div className="flex items-center gap-2">
              <Calendar size={20} />
              <span>19th & 20th July 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>ITC Dwarka, Delhi</span>
            </div>
          </div>
        </div>

        {/* Day Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#F7F7F7] p-2 rounded-lg">
            <button
              onClick={() => setActiveDay(1)}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDay === 1
                  ? 'bg-[#1B263B] text-white shadow-lg'
                  : 'text-[#4A4A4A] hover:bg-white hover:shadow-md'
              }`}
            >
              Day 1 - July 19th
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDay === 2
                  ? 'bg-[#1B263B] text-white shadow-lg'
                  : 'text-[#4A4A4A] hover:bg-white hover:shadow-md'
              }`}
            >
              Day 2 - July 20th
            </button>
          </div>
        </div>

        {/* Sessions */}
        <div className="space-y-6">
          {(activeDay === 1 ? day1Sessions : day2Sessions).map((session, index) => (
            <div
              key={index}
              className="bg-[#F7F7F7] rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-[1.02] group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-2 text-[#2E86AB] font-semibold">
                    <Clock size={20} />
                    <span>{session.time}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-[#1B263B] group-hover:text-[#2E86AB] transition-colors duration-300">
                    {session.title}
                  </h3>
                  {session.description && session.description !== '' && <p className="text-[#4A4A4A] mt-2 leading-relaxed">
                    {session.description}
                  </p>}
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