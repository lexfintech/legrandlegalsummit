import { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const delhiImages = [
    './images/misc/itcdwarka.webp',
    './images/misc/parliament.jpg',
    './images/misc/indiagate.webp',
    './images/misc/parliament2.jpg',
    './images/misc/parliament3.jpg',
  ];

  // Event date: July 19, 2025
  const eventDate = new Date('2025-07-19T09:00:00').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === delhiImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [delhiImages.length]);

  useEffect(() => {
    // Initialize countdown
    setCountdown(calculateTimeLeft());

    // Update countdown every second
    const countdownInterval = setInterval(() => {
      setCountdown(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [eventDate]);

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
            <div className={`absolute inset-0 bg-[#1B263B]/60`}></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          {/* Logo Section */}
          <div className="mb-2 animate-fadeInUp">
            <img
              src="./images/logos/legrandlegalsummit.webp"
              alt="Le Grand Legal Summit"
              className="h-28 md:h-36 mx-auto object-contain"
            />
          </div>

          {/* Event Details */}
          <div
            className="space-y-3 animate-fadeInUp"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="flex items-center justify-center gap-4 text-lg md:text-2xl">
              <Calendar className="text-secondary-main" size={28} />
              <span className="font-semibold">19th & 20th July 2025</span>
            </div>

            <div className="flex items-center justify-center gap-4 text-md md:text-xl">
              <MapPin className="text-secondary-main" size={24} />
              <span>Welcomhotel by ITC, Dwarka, New Delhi</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div
            className="mt-6 animate-fadeInUp"
            style={{ animationDelay: '1.3s' }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="text-secondary-main" size={20} />
              <span className="text-base md:text-lg font-semibold">
                Event Starts In
              </span>
            </div>
            <div className="flex justify-center gap-2 md:gap-4 flex-wrap max-w-sm md:max-w-none mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-2 md:p-4 rounded-lg border border-white/20 min-w-[60px] md:min-w-[80px] text-center">
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-secondary-main">
                  {countdown.days}
                </div>
                <div className="text-xs md:text-sm text-white/80 mt-1">
                  Days
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-2 md:p-4 rounded-lg border border-white/20 min-w-[60px] md:min-w-[80px] text-center">
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-secondary-main">
                  {countdown.hours}
                </div>
                <div className="text-xs md:text-sm text-white/80 mt-1">
                  Hours
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-2 md:p-4 rounded-lg border border-white/20 min-w-[60px] md:min-w-[80px] text-center">
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-secondary-main">
                  {countdown.minutes}
                </div>
                <div className="text-xs md:text-sm text-white/80 mt-1">
                  Minutes
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-2 md:p-4 rounded-lg border border-white/20 min-w-[60px] md:min-w-[80px] text-center">
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-secondary-main">
                  {countdown.seconds}
                </div>
                <div className="text-xs md:text-sm text-white/80 mt-1">
                  Seconds
                </div>
              </div>
            </div>
          </div>

          {/* Supported By */}
          <div
            className="mt-6 animate-fadeInUp"
            style={{ animationDelay: '1s' }}
          >
            <p className="text-md md:text-lg mb-3">Supported By</p>
            <div className="flex justify-center gap-4 md:gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg">
                <img
                  src="./images/logos/GOI-MOSJAE.webp"
                  alt="Support Partner 1"
                  className="w-18 h-24 md:w-18 md:h-28 object-cover rounded"
                />
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg">
                <img
                  src="./images/logos/DOC-MOFCAI-GOI.webp"
                  alt="Support Partner 2"
                  className="w-18 h-24 md:w-18 md:h-28 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#key-highlights"
        className="absolute bottom-3 md:bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group z-10"
        aria-label="Scroll to Key Highlights"
      >
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white transition-colors duration-200">
          <div className="w-1 h-2 md:h-3 bg-white/50 rounded-full mt-1 md:mt-2 animate-pulse group-hover:bg-white transition-colors duration-200"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
