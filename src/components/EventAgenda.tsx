import { useState } from 'react';
import { Clock, Calendar, MapPin } from 'lucide-react';

const EventAgenda = () => {
  const [activeDay, setActiveDay] = useState(1);

  const day1Sessions = [
    {
      time: '9:00 AM - 9:45 AM',
      title: 'Registrations & Hi-Tea',
      description:
        'Begin your day by collecting your exclusive event kit at the registration desk, followed by a refreshing hi-tea break with snacks and engaging conversations with fellow legal professionals.',
    },
    {
      time: '9:45 AM - 10:45 AM',
      title: 'Lighting of the Lamp & Opening Ceremony',
      description:
        'Lighting of the lamp and opening ceremony to mark the auspicious beginning of the summit with wisdom, purpose, and unity.',
    },
    {
      time: '10:45 AM - 11:00 AM',
      title:
        "Keynote: India's Legal Future: Balancing Tradition, Technology, and Justice in the New Era",
      description:
        "A powerful exploration of how India's legal system must evolve by integrating tradition with innovation to deliver faster, fairer, and more accessible justice.",
    },
    {
      time: '11:00 AM - 12:00 AM',
      title:
        ' Panel Discussion: The Future of Litigation in India: Reform, Technology & Access',
      description:
        'Experts explore how evolving legal reforms, digital innovation, and inclusive practices are reshaping the litigation landscape in India.',
    },
    {
      time: '12:00 AM - 12:30 PM',
      title: 'Netwoking-Tea & Refreshments',
      description:
        'Refreshing hi-tea break with snacks and engaging conversations with felow legal professionals.',
    },
    {
      time: '12:30 AM - 1:30 PM',
      title:
        'anel Discussion: Data Privacy and Cybersecurity Legal Challenges and Strategic Safeguards in the Age of Innovation.',
      description:
        'This panel explores the evolving legal landscape of data privacy and cybersecurity, offering strategic insights to safeguard innovation in the digital era.',
    },
    {
      time: '1:30 PM - 2:30 PM',
      title:
        'Panel Discussion: Driving Corporate Sustainability: Legal Strategies for ESG and Long-Term Business Impact.',
      description:
        'Ensuring compliance with evolving ESG frameworks and reporting standards.',
    },
    {
      time: '2:30 PM - 2:50 PM',
      title:
        'Case Study Presentation: Connecting Law and Business: How LegalTech Enables Process-Driven Legal Frameworks',
    },
    {
      time: '2:50 PM - 3:50 PM',
      title: 'Networking Over Lunch',
      description:
        'Refreshing lunch break and engaging conversations with fellow legal professionals.',
    },
    {
      time: '3:50 PM - 4:50 PM',
      title:
        'Panel Discussion: Is the Indian Legal System Ready for War-Time Law?',
      description:
        "Exploring the preparedness of India's legal framework to address challenges and complexities arising in times of armed conflict and national emergency.",
    },
    {
      time: '4:50 PM - 5:50 PM',
      title:
        'Panel Discussion: The Evolving Role Of In-House Counsels in Strategic Decision Making',
      description:
        'Exploring how in-house counsels are increasingly shaping strategic business decisions and driving organizational value beyond traditional legal roles.',
    },
    {
      time: '5:50 PM - 6:20 PM',
      title: 'Fireside Chat by Influence Talk',
    },
    {
      time: '6:20 PM - 6:30 PM',
      title:
        ' Closing Ceremony of Day 1 of the Event followed by Networking-Tea & Refreshments',
      description:
        'Closing of Day 1 of the event followed by Refreshing networking-tea break with snacks & engaging conversations with fellow legal professionals.',
    },
  ];

  const day2Sessions = [
    {
      time: '9:00 AM - 9:45 AM',
      title: 'Registrations & Hi-Tea',
      description:
        'Begin your day by collecting your exclusive event kit at the registration desk, followed by a refreshing hi-tea break with snacks and engaging conversations with fellow legal professionals.',
    },
    {
      time: '9:45 AM - 10:50 AM',
      title: 'Keynote Speeches',
    },
    {
      time: '10:50 AM - 11:10 AM',
      title: 'Case Study Presentation',
      description: '',
    },
    {
      time: '11:10 AM - 12:10 pM',
      title:
        ' Panel Discussion : Navigating Legal Risk in a Globalized Economy',
      description:
        'Examining strategies for managing legal risks and ensuring compliance amid the complexities of a fast-evolving global economy',
    },
    {
      time: '12:10 pM - 12:30 PM',
      title: 'Case Study Presentation',
    },
    {
      time: '12:30 PM - 1:00 PM',
      title: ' Netwoking-Tea & Refreshment',
      description:
        'Refreshing hi-tea break with snacks and engaging conversations with felow legal professionals.',
    },
    {
      time: '1:00 PM - 2:00 PM',
      title:
        'Panel Discussion: Intellectual Property in India: Protecting Innovation – Key strategies to secure and enforce IP rights in Indi',
      description:
        'Exploring how in-house counsels are increasingly shaping strategic business decisions and driving organizational value beyond traditional legal roles.)',
    },
    {
      time: '2:00 PM - 3:00 PM',
      title: 'Networking Over Lunch',
      description:
        '(Refreshing lunch break and engaging conversations with felow legal professionals.',
    },
    {
      time: '3:00 PM - 4:00 PM',
      title:
        'Panel Discussion: The Transformative Role of AI in Revolutionizing Legal Practice, Compliance, and Governance.',
      description:
        'Exploring how AI is reshaping legal practice, enhancing compliance, and driving smarter governance in the digital age.',
    },
    {
      time: '4:00 PM - 5:00 PM',
      title: 'Panel Discussion: Tech & Law - The Rise of Legal Innovation',
      description:
        'Exploring how technology is transforming the legal landscape through innovation, efficiency, and access to justice.',
    },
    {
      time: '5:00 PM - 6:00PM',
      title: 'Bharat Nyaya Puraskar Awards Ceremony.',
      description:
        'Awardees will be honoured in with the Bharat Nyaya Purasakar',
    },
    {
      time: '6:00 PM - 6:10 PM',
      title: ' Closing Ceremony followed by Networking-Tea & Refreshment',
      description:
        'Closing of the event of the event followed by Refreshing networking-tea break with snacks & engaging conversations with fellow legal professionals.',
    },
  ];

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
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-text-secondary">
            <div className="flex items-center gap-2">
              <Calendar size={20} />
              <span>19th & 20th July 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Welcomhotel by ITC Dwarka, Delhi</span>
            </div>
          </div>
        </div>

        {/* Day Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-background-primary p-2 rounded-lg">
            <button
              onClick={() => setActiveDay(1)}
              className={`px-4 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDay === 1
                  ? `bg-primary-main text-white shadow-lg`
                  : 'text-text-secondary hover:bg-white hover:shadow-md'
              }`}
            >
              Day 1 - July 19th
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`px-4 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDay === 2
                  ? `bg-primary-main text-white shadow-lg`
                  : 'text-text-secondary hover:bg-white hover:shadow-md'
              }`}
            >
              Day 2 - July 20th
            </button>
          </div>
        </div>

        {/* Sessions */}
        <div className="space-y-6">
          {(activeDay === 1 ? day1Sessions : day2Sessions).map(
            (session, index) => (
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
                    {session.description && session.description !== '' && (
                      <p className="text-text-secondary mt-2 leading-relaxed">
                        {session.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default EventAgenda;
