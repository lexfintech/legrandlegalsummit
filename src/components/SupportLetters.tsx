import { FileCheck, Shield } from 'lucide-react';

const SupportLetters = () => {
  const supportLetters = [
    {
      title:
        'Ministry of State for Social Justice & Empowerment, Government of India',
      image: './images/docs/MSJE-support-letter.jpg',
      description:
        "The Bharat Nyaya Puraskar celebrates excellence in law, justice, and legal services. Ramdas Athawale, Union Minister of State for Social Justice, supports this initiative and will attend Season 2 on 19th July 2025. He commends the platform's role in promoting justice and honoring legal professionals' exceptional contributions.",
    },
    {
      title:
        'Dr. Raghuraj Singh, Chairman/State Minister, Uttar Pradesh State Social Welfare Committee - Labour and Service Planning',
      image: './images/docs/leconfluence-support-letter.jpg',
      description:
        'Shri. Raghuraj Singh commends Bharat Nyaya Puraskar Season 2 for advancing legal awareness and ethical advocacy. Accepting the Guest of Honor invitation for July 19, 2025, he applauds its role in promoting justice, equity, and responsible legal practices, and endorses its continued impact on inclusive legal fraternity development.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-primary-main mb-6`}
          >
            Recommendation Letters from Ministry
          </h2>
          <div className={`w-24 h-1 bg-secondary-main mx-auto mb-6`}></div>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          {supportLetters.map((letter, index) => (
            <a
              key={index}
              className="bg-background-primary cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
              href={letter.image}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={letter.image}
                  alt={letter.title}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className={`bg-secondary-main p-2 rounded-lg`}>
                    <FileCheck className="text-white" size={20} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3
                  className={`text-xl font-bold text-primary-main mb-3 group-hover:text-secondary-main transition-colors duration-300`}
                >
                  {letter.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {letter.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div
            className={`inline-flex items-center gap-3 bg-secondary-main/10 px-6 py-3 rounded-lg`}
          >
            <Shield className={`text-secondary-main`} size={24} />
            <span className={`text-primary-main font-semibold`}>
              In Collaboration with Government of India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportLetters;
