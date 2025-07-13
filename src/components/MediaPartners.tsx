import React from 'react';

const MediaPartners = () => {
  const mediaPartners = [
    {
      name: 'Legal India Today',
      logo: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg'
    },
    {
      name: 'Bar & Bench',
      logo: 'https://images.pexels.com/photos/7688374/pexels-photo-7688374.jpeg'
    },
    {
      name: 'Live Law',
      logo: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg'
    },
    {
      name: 'The Legal News',
      logo: 'https://images.pexels.com/photos/7688370/pexels-photo-7688370.jpeg'
    },
    {
      name: 'Legal Era',
      logo: 'https://images.pexels.com/photos/7688367/pexels-photo-7688367.jpeg'
    },
    {
      name: 'Indian Legal',
      logo: 'https://images.pexels.com/photos/7688390/pexels-photo-7688390.jpeg'
    },
    {
      name: 'Legal Correspondent',
      logo: 'https://images.pexels.com/photos/7688420/pexels-photo-7688420.jpeg'
    },
    {
      name: 'Justice Tribune',
      logo: 'https://images.pexels.com/photos/7688371/pexels-photo-7688371.jpeg'
    }
  ];

  return (
    <section className="py-20 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-6">
            Media Partners
          </h2>
          <div className="w-24 h-1 bg-[#2E86AB] mx-auto mb-6"></div>
          <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">
            Leading legal media organizations covering Le Confluence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {mediaPartners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group flex flex-col items-center"
            >
              <div className="w-20 h-20 mb-4 overflow-hidden rounded-lg">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-center font-semibold text-[#1B263B] group-hover:text-[#2E86AB] transition-colors duration-300">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaPartners;