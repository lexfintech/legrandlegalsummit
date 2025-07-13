import React from 'react';
import { ExternalLink, Youtube } from 'lucide-react';

const GuestsOfHonour = () => {
  const guestsOfHonour = [
    {
      name: 'Justice N.V. Ramana',
      designation: 'Former Chief Justice of India',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg',
      website: '#',
      youtube: '#'
    },
    {
      name: 'Dr. Harish Salve',
      designation: 'Senior Advocate, Supreme Court',
      image: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg',
      website: '#',
      youtube: '#'
    },
    {
      name: 'Justice D.Y. Chandrachud',
      designation: 'Chief Justice of India',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg',
      website: '#',
      youtube: '#'
    },
    {
      name: 'Mr. Fali Nariman',
      designation: 'Senior Advocate & Constitutional Expert',
      image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg',
      website: '#',
      youtube: '#'
    },
    {
      name: 'Justice Indu Malhotra',
      designation: 'Former Judge, Supreme Court',
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg',
      website: '#',
      youtube: '#'
    },
    {
      name: 'Mr. Mukul Rohatgi',
      designation: 'Former Attorney General of India',
      image: 'https://images.pexels.com/photos/5669691/pexels-photo-5669691.jpeg',
      website: '#',
      youtube: '#'
    }
  ];

  const honourableGuests = [
    {
      name: 'Justice Uday Umesh Lalit',
      designation: 'Former Chief Justice of India',
      image: 'https://images.pexels.com/photos/8112176/pexels-photo-8112176.jpeg'
    },
    {
      name: 'Dr. Menaka Guruswamy',
      designation: 'Senior Advocate & Constitutional Lawyer',
      image: 'https://images.pexels.com/photos/8112190/pexels-photo-8112190.jpeg'
    }
  ];

  return (
    <section className="py-20 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Guests of Honour */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-6">
            Guests of Honour
          </h2>
          <div className="w-24 h-1 bg-[#2E86AB] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {guestsOfHonour.map((guest, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={guest.image}
                  alt={guest.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B263B] mb-2 group-hover:text-[#2E86AB] transition-colors duration-300">
                  {guest.name}
                </h3>
                <p className="text-[#4A4A4A] mb-4">{guest.designation}</p>
                <div className="flex gap-3">
                  <a
                    href={guest.website}
                    className="flex items-center justify-center w-10 h-10 bg-[#2E86AB]/10 rounded-lg hover:bg-[#2E86AB] hover:text-white transition-all duration-300 group"
                  >
                    <ExternalLink size={16} className="text-[#2E86AB] group-hover:text-white" />
                  </a>
                  <a
                    href={guest.youtube}
                    className="flex items-center justify-center w-10 h-10 bg-[#2E86AB]/10 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 group"
                  >
                    <Youtube size={16} className="text-[#2E86AB] group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honourable Guests */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B263B] mb-6">
            Honourable & Eminent Guests
          </h2>
          <div className="w-24 h-1 bg-[#2E86AB] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {honourableGuests.map((guest, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={guest.image}
                  alt={guest.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B263B] mb-2 group-hover:text-[#2E86AB] transition-colors duration-300">
                  {guest.name}
                </h3>
                <p className="text-[#4A4A4A]">{guest.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestsOfHonour;