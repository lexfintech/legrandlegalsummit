import { ExternalLink, Instagram, Linkedin, Youtube } from 'lucide-react';

const AdvisoryBoard = () => {
  const boardMembers = [
    {
      name: 'Honourable Sri Justice B.Prakash Rao (Retd.)',
      designation: ['Former High Court Judge'],
      image: './images/advisory-board/prakash-rao.webp',
      linkedin: '#',
      youtube: 'https://youtu.be/eb2Hh7-VknU?si=g-a2ZuhHlQgIsRhD',
      website: 'https://tshc.gov.in/showFormerJudgeProfile?id=330',
      instagram: '#',
    },
    {
      name: 'Dr. CS Ahalada Rao',
      designation: [
        'Practicing Company Secretary & Former Vice President - ICSI',
      ],
      image: './images/advisory-board/cs-ahalada-rao.webp',
      linkedin:
        'https://www.linkedin.com/in/cs-dr-ahalada-rao-v-telangana-05a1781aa/',
      youtube: 'https://youtu.be/OdyqRauH2pk?si=AnXqt80-pbE5iL5e',
      website: '#',
      instagram: '#',
    },
    {
      name: 'Ashok Ram Kumar',
      designation: ['Senior Advocate'],
      image: './images/advisory-board/ashok-ram-kumar.webp',
      linkedin: 'https://www.linkedin.com/in/ashok-ram-kumar-2505b423/',
      youtube: 'https://youtu.be/zBUSYNJDjvA?si=oEETMOebAQKonVck',
      website: '#',
      instagram: '#',
    },
    {
      name: 'Dr. Moksha Kalyanram',
      designation: ['Advocate'],
      image: './images/advisory-board/moksha-kalyanram.webp',
      linkedin: 'https://www.linkedin.com/in/drmoksha-advocate/',
      youtube: 'https://youtu.be/TdDa7Q-P_r4?si=2BouZGhcsrFuJshb',
      website: '#',
      instagram: '#',
    },
    {
      name: 'Dr. A. V. Narasimha Rao',
      designation: ['Accredited Mediator'],
      image: './images/advisory-board/a-v-narasimha-rao.webp',
      linkedin: 'https://insolvencylawacademy.com/prof-a-v-narsimha-rao/',
      youtube: '#',
      website: 'https://insolvencylawacademy.com/',
      instagram: '#',
    },
    {
      name: 'Adv. Saurabh Sharma',
      designation: ['Senior Advocate'],
      image: './images/advisory-board/saurabh-sharma.webp',
      linkedin: 'https://www.linkedin.com/in/saurabh-sharma-3169167/',
      youtube: 'https://youtu.be/rDiPD4tKE7Q?si=IYoWXr5c3yZQ6ds7',
      website: '#',
      instagram: '#',
    },
    {
      name: 'Balakrishna Gopalakrishnan',
      designation: ['Senior Advocate'],
      image: './images/advisory-board/balakrishna-gopalakrishnan.webp',
      linkedin:
        'https://www.linkedin.com/in/balakrishna-gopalakrishnan-015b7014/',
      youtube: 'https://youtu.be/dbZ_LXRlFYA?si=RZ2EIjbgAGQmCU_B',
      website: '#',
      instagram: '#',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-6">
            Our Advisory Board Members
          </h2>
          <div className="w-24 h-1 bg-[#2E86AB] mx-auto mb-6"></div>
          <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">
            Distinguished legal experts and thought leaders guiding our vision
            and mission
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#F7F7F7] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B263B] mb-2 group-hover:text-[#2E86AB] transition-colors duration-300">
                  {member.name}
                </h3>
                <div className="text-[#4A4A4A] mb-4">
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
                      className="flex items-center justify-center w-10 h-10 bg-[#2E86AB]/10 rounded-lg group-hover:bg-[#2E86AB] transition-all duration-300"
                    >
                      <ExternalLink
                        size={16}
                        className="text-[#2E86AB] group-hover:text-white"
                      />
                    </a>
                  )}
                  {member.youtube && member.youtube !== '#' && (
                    <a
                      href={member.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-[#2E86AB]/10 rounded-lg group-hover:bg-red-600 transition-all duration-300"
                    >
                      <Youtube
                        size={16}
                        className="text-[#2E86AB] group-hover:text-white"
                      />
                    </a>
                  )}
                  {member.instagram && member.instagram !== '#' && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-[#2E86AB]/10 rounded-lg group-hover:bg-[linear-gradient(45deg,_#405de6,_#5851db,_#833ab4,_#c13584,_#e1306c,_#fd1d1d)] transition-all duration-300"
                    >
                      <Instagram
                        size={16}
                        className="text-[#2E86AB] group-hover:text-white"
                      />
                    </a>
                  )}
                  {member.linkedin && member.linkedin !== '#' && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-[#2E86AB]/10 rounded-lg group-hover:bg-blue-600 transition-all duration-300"
                    >
                      <Linkedin
                        size={16}
                        className="text-[#2E86AB] group-hover:text-white"
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
