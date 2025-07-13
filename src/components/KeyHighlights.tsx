import React, { useState, useEffect } from 'react';
import { Users, Calendar, Mic, Award } from 'lucide-react';

const KeyHighlights = () => {
  const [counts, setCounts] = useState({
    attendees: 0,
    sessions: 0,
    speakers: 0,
    awardees: 0,
  });

  const highlights = [
    {
      icon: Users,
      number: 500,
      label: 'Attendees',
      color: 'text-[#2E86AB]',
      key: 'attendees',
    },
    {
      icon: Calendar,
      number: 30,
      label: 'Sessions',
      color: 'text-[#2E86AB]',
      key: 'sessions',
    },
    {
      icon: Mic,
      number: 60,
      label: 'Speakers',
      color: 'text-[#2E86AB]',
      key: 'speakers',
    },
    {
      icon: Award,
      number: 50,
      label: 'Awardees',
      color: 'text-[#2E86AB]',
      key: 'awardees',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start counting animation
            highlights.forEach((highlight) => {
              const target = highlight.number;
              const duration = 2000; // 2 seconds
              const increment = target / (duration / 16); // 60fps
              let current = 0;

              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }

                setCounts((prev) => ({
                  ...prev,
                  [highlight.key]: Math.floor(current),
                }));
              }, 16);
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    const section = document.querySelector('#key-highlights');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="key-highlights" className="py-20 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-4">
            Key Highlights
          </h2>
          <div className="w-24 h-1 bg-[#2E86AB] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div
                className={`${highlight.color} mb-2 md:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <highlight.icon size={32} className="md:w-12 md:h-12" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-[#1B263B] mb-1 md:mb-2">
                {counts[highlight.key as keyof typeof counts]}+
              </h3>
              <p className="text-[#4A4A4A] font-semibold text-sm md:text-lg">
                {highlight.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
