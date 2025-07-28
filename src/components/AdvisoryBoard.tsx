import { ExternalLink, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Member } from '../types';

const AdvisoryBoard = ({ members }: { members: Member[] }) => {

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-main mb-6">
            Our Advisory Board Members
          </h2>
          <div className="w-24 h-1 bg-secondary-main mx-auto mb-6"></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Distinguished legal experts and thought leaders guiding our vision
            and mission
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="w-[70%] md:w-full mx-auto bg-background-primary cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-main mb-2 group-hover:text-secondary-main transition-colors duration-300">
                  {member.name}
                </h3>
                <div className="text-text-secondary mb-4">
                  {Array.isArray(member.designation)
                    ? member.designation.map((d, i) => <div key={i}>{d}</div>)
                    : member.designation}
                </div>
                <div className="flex gap-3">
                  {member.website && member.website !== '#' && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-secondary-main/10 rounded-lg group-hover:bg-secondary-main transition-all duration-300"
                    >
                      <ExternalLink
                        size={16}
                        className="text-secondary-main group-hover:text-white"
                      />
                    </a>
                  )}
                  {member.youtube && member.youtube !== '#' && (
                    <a
                      href={member.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-secondary-main/10 rounded-lg group-hover:bg-red-600 transition-all duration-300"
                    >
                      <Youtube
                        size={16}
                        className="text-secondary-main group-hover:text-white"
                      />
                    </a>
                  )}
                  {member.instagram && member.instagram !== '#' && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-secondary-main/10 rounded-lg group-hover:bg-[linear-gradient(45deg,_#405de6,_#5851db,_#833ab4,_#c13584,_#e1306c,_#fd1d1d)] transition-all duration-300"
                    >
                      <Instagram
                        size={16}
                        className="text-secondary-main group-hover:text-white"
                      />
                    </a>
                  )}
                  {member.linkedin && member.linkedin !== '#' && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-secondary-main/10 rounded-lg group-hover:bg-blue-600 transition-all duration-300"
                    >
                      <Linkedin
                        size={16}
                        className="text-secondary-main group-hover:text-white"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryBoard;
