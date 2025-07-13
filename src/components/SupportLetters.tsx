import React from 'react';
import { FileCheck, Shield, Building2 } from 'lucide-react';

const SupportLetters = () => {
  const supportLetters = [
    {
      title: 'Ministry of Law & Justice',
      image: 'https://images.pexels.com/photos/8112190/pexels-photo-8112190.jpeg',
      description: 'Official endorsement from the Ministry of Law & Justice, Government of India'
    },
    {
      title: 'Supreme Court of India',
      image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg',
      description: 'Support letter from the Hon\'ble Supreme Court of India'
    },
    {
      title: 'Bar Council of India',
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg',
      description: 'Formal recognition and support from Bar Council of India'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-6">
            Support Letters from Ministry
          </h2>
          <div className="w-24 h-1 bg-[#2E86AB] mx-auto mb-6"></div>
          <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">
            Le Confluence is officially recognized and supported by leading institutions in the Indian legal system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportLetters.map((letter, index) => (
            <div
              key={index}
              className="bg-[#F7F7F7] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={letter.image}
                  alt={letter.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-[#2E86AB] p-2 rounded-lg">
                    <FileCheck className="text-white" size={20} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B263B] mb-3 group-hover:text-[#2E86AB] transition-colors duration-300">
                  {letter.title}
                </h3>
                <p className="text-[#4A4A4A] leading-relaxed">
                  {letter.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-[#2E86AB]/10 px-6 py-3 rounded-lg">
            <Shield className="text-[#2E86AB]" size={24} />
            <span className="text-[#1B263B] font-semibold">
              Officially Recognized by Government of India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportLetters;