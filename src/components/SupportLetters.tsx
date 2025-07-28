import { FileCheck, Shield } from 'lucide-react';
import { SupportLetterSection } from '../types';

const SupportLetters = ({ supportLetterSection }: { supportLetterSection: SupportLetterSection }) => {

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-primary-main mb-6`}
          >
            {supportLetterSection.title}
          </h2>
          <div className={`w-24 h-1 bg-secondary-main mx-auto mb-6`}></div>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
          {supportLetterSection.supportLetters.map((letter, index) => (
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
              {supportLetterSection.endText}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportLetters;
