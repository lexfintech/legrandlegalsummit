import { ExternalLink, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Member } from '../types';

const HonourableGuests = ({ honourableGuests }: { honourableGuests: Member[] }) => {

  return (
    <div className="py-16 px-2 md:px-8 rounded-2xl bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {honourableGuests.map((guest, index) => (
          <div
            key={index}
            className="bg-white cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <div
              className={`bg-secondary-main/10 text-secondary-main font-bold text-center py-2 text-xl uppercase tracking-wide`}
            >
              {guest.type}
            </div>
            <div className="relative overflow-hidden">
              <img
                src={guest.image}
                alt={guest.name}
                className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3
                className={`text-xl font-bold text-primary-main mb-2 group-hover:text-secondary-main transition-colors duration-300`}
              >
                {guest.name}
              </h3>
              <div className="text-text-secondary mb-4">
                {Array.isArray(guest.designation)
                  ? guest.designation.map((d, i) => <div key={i}>{d}</div>)
                  : guest.designation}
              </div>
              <div className="flex gap-3">
                {guest.website && guest.website !== '#' && (
                  <a
                    href={guest.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-10 h-10 bg-secondary-main/10 rounded-lg group-hover:bg-secondary-main transition-all duration-300`}
                  >
                    <ExternalLink
                      size={16}
                      className={`text-secondary-main group-hover:text-white`}
                    />
                  </a>
                )}
                {guest.youtube && guest.youtube !== '#' && (
                  <a
                    href={guest.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-10 h-10 bg-secondary-main/10 rounded-lg group-hover:bg-red-600 transition-all duration-300`}
                  >
                    <Youtube
                      size={16}
                      className={`text-secondary-main group-hover:text-white`}
                    />
                  </a>
                )}
                {guest.instagram && guest.instagram !== '#' && (
                  <a
                    href={guest.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-10 h-10 bg-secondary-main/10 rounded-lg group-hover:bg-[linear-gradient(45deg,_#405de6,_#5851db,_#833ab4,_#c13584,_#e1306c,_#fd1d1d)] transition-all duration-300`}
                  >
                    <Instagram
                      size={16}
                      className={`text-secondary-main group-hover:text-white`}
                    />
                  </a>
                )}
                {guest.linkedin && guest.linkedin !== '#' && (
                  <a
                    href={guest.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-10 h-10 bg-secondary-main/10 rounded-lg group-hover:bg-blue-600 transition-all duration-300`}
                  >
                    <Linkedin
                      size={16}
                      className={`text-secondary-main group-hover:text-white`}
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HonourableGuests;
