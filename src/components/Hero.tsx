import { useState, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const delhiImages = [
    './images/misc/itcdwarka.png',
    './images/misc/indiagate.jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === delhiImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [delhiImages.length]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {delhiImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Delhi landmark ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1B263B]/60"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          {/* Logo Section */}
          <div className="mb-4 animate-fadeInUp">
            <img
              src="./images/logos/legrandlegalsummit.png"
              alt="Le Grand Legal Summit"
              className="h-48 mx-auto object-contain"
            />
          </div>

          {/* Event Details */}
          <div
            className="space-y-6 animate-fadeInUp"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="flex items-center justify-center gap-4 text-xl md:text-2xl">
              <Calendar className="text-[#2E86AB]" size={28} />
              <span className="font-semibold">19th & 20th July 2025</span>
            </div>

            <div className="flex items-center justify-center gap-4 text-lg md:text-xl">
              <MapPin className="text-[#2E86AB]" size={24} />
              <span>Welcomhotel by ITC, Dwarka, New Delhi</span>
            </div>
          </div>

          {/* Supported By */}
          <div
            className="mt-8 animate-fadeInUp"
            style={{ animationDelay: '1s' }}
          >
            <p className="text-lg mb-6">Supported By</p>
            <div className="flex justify-center gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <img
                  src="./images/logos/GOI-MOSJAE.jpg"
                  alt="Support Partner 1"
                  className="w-18 h-32 object-cover rounded"
                />
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <img
                  src="./images/logos/DOC-MOFCAI-GOI.jpg"
                  alt="Support Partner 2"
                  className="w-18 h-32 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 md:bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
