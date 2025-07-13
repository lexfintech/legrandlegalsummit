import React from 'react';

const EventPartners = () => {
  const partners = [
    {
      name: 'Legal Tech Solutions',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg',
      description: 'Leading provider of AI-powered legal research and case management solutions'
    },
    {
      name: 'Indian Legal Network',
      image: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg',
      description: 'Premier platform connecting legal professionals across India'
    },
    {
      name: 'LawCorp India',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg',
      description: 'Comprehensive legal services and corporate law specialists'
    },
    {
      name: 'Digital Justice Foundation',
      image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg',
      description: 'Advancing digital transformation in the Indian judicial system'
    },
    {
      name: 'Legal Publishing House',
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg',
      description: 'Trusted source for legal publications and educational resources'
    },
    {
      name: 'Bar Association Network',
      image: 'https://images.pexels.com/photos/8112190/pexels-photo-8112190.jpeg',
      description: 'Supporting legal professionals through networking and development programs'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-6">
            Event Partners
          </h2>
          <div className="w-24 h-1 bg-[#2E86AB] mx-auto mb-6"></div>
          <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">
            Partnering with industry leaders to deliver exceptional value and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-[#F7F7F7] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B263B] mb-3 group-hover:text-[#2E86AB] transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-[#4A4A4A] leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventPartners;