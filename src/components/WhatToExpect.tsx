import React from 'react';
import { 
  Lightbulb, Award, Star, Users, Laptop, Coffee, 
  Camera, FileText, BookOpen, UserCheck, Globe, Handshake 
} from 'lucide-react';

const WhatToExpect = () => {
  const expectations = [
    {
      icon: Lightbulb,
      title: 'Insight Sessions',
      description: 'Deep-dive sessions with industry experts and thought leaders'
    },
    {
      icon: Award,
      title: 'Bharat Nyaya Puraskar',
      description: 'Prestigious awards recognizing excellence in legal practice'
    },
    {
      icon: Star,
      title: 'Celebrity Presence',
      description: 'Meet renowned personalities from legal and entertainment industry'
    },
    {
      icon: Users,
      title: '500+ Legal Professionals',
      description: 'Network with top lawyers, judges, and legal practitioners'
    },
    {
      icon: Laptop,
      title: 'Legal Tech Expo',
      description: 'Explore cutting-edge technology solutions for legal practice'
    },
    {
      icon: Coffee,
      title: 'Exclusive Networking Lounges',
      description: 'Premium networking spaces for meaningful connections'
    },
    {
      icon: Camera,
      title: 'Media Coverage',
      description: 'Comprehensive coverage by leading legal and mainstream media'
    },
    {
      icon: FileText,
      title: 'Participation Certificates',
      description: 'Official certificates for professional development records'
    },
    {
      icon: BookOpen,
      title: 'Summit Magazine',
      description: 'Exclusive publication with conference insights and articles'
    },
    {
      icon: UserCheck,
      title: 'Access to Legal Influencers',
      description: 'Direct interaction with top legal influencers and thought leaders'
    },
    {
      icon: Globe,
      title: 'GCS Participation',
      description: 'Global Compliance Summit integration and international perspectives'
    },
    {
      icon: Handshake,
      title: 'Strategic Partners',
      description: 'Meet with leading legal tech companies and service providers'
    }
  ];

  return (
    <section className="pt-10 pb-20 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-6">
            What to Expect
          </h2>
          <div className="w-24 h-1 bg-[#2E86AB] mx-auto mb-6"></div>
          <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">
            Le Confluence offers an unparalleled experience with exclusive opportunities for learning, networking, and professional growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expectations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#2E86AB]/10 rounded-lg flex items-center justify-center group-hover:bg-[#2E86AB]/20 transition-colors duration-300">
                    <item.icon className="text-[#2E86AB]" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1B263B] mb-2 group-hover:text-[#2E86AB] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;