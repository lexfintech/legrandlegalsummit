import React from 'react';
import { ExternalLink, Linkedin, Twitter } from 'lucide-react';

const AdvisoryBoard = () => {
  const boardMembers = [
    {
      name: 'Dr. Pradeep Kumar Jha',
      designation: 'Former Law Secretary, Government of India',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg',
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    {
      name: 'Ms. Indira Jaising',
      designation: 'Senior Advocate & Human Rights Lawyer',
      image: 'https://images.pexels.com/photos/8112190/pexels-photo-8112190.jpeg',
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    {
      name: 'Dr. Ashok Kumar Jain',
      designation: 'Former Chief Information Commissioner',
      image: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg',
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    {
      name: 'Justice Kailash Gambhir',
      designation: 'Former Judge, Delhi High Court',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg',
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    {
      name: 'Prof. Usha Tandon',
      designation: 'Professor of Law, University of Delhi',
      image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg',
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    {
      name: 'Mr. Rajesh Kumar Singh',
      designation: 'Managing Partner, Legal Advisors Group',
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg',
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
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
            Distinguished legal experts and thought leaders guiding our vision and mission
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#F7F7F7] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B263B] mb-2 group-hover:text-[#2E86AB] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-[#4A4A4A] mb-4">{member.designation}</p>
                <div className="flex gap-3">
                  <a
                    href={member.linkedin}
                    className="flex items-center justify-center w-10 h-10 bg-[#2E86AB]/10 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                  >
                    <Linkedin size={16} className="text-[#2E86AB] group-hover:text-white" />
                  </a>
                  <a
                    href={member.twitter}
                    className="flex items-center justify-center w-10 h-10 bg-[#2E86AB]/10 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 group"
                  >
                    <Twitter size={16} className="text-[#2E86AB] group-hover:text-white" />
                  </a>
                  <a
                    href={member.website}
                    className="flex items-center justify-center w-10 h-10 bg-[#2E86AB]/10 rounded-lg hover:bg-[#2E86AB] hover:text-white transition-all duration-300 group"
                  >
                    <ExternalLink size={16} className="text-[#2E86AB] group-hover:text-white" />
                  </a>
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