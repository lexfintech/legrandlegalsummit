import { type WhatToExpect } from '../types';

const WhatToExpect = ({ expectations }: { expectations: WhatToExpect[] }) => {
  return (
    <section className="pt-10 pb-20 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-primary-main mb-6`}
          >
            What to Expect
          </h2>
          <div className={`w-24 h-1 bg-secondary-main mx-auto mb-6`}></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Le Confluence offers an unparalleled experience with exclusive
            opportunities for learning, networking, and professional growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expectations.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div
                    className={`w-12 h-12 bg-secondary-main/10 rounded-lg flex items-center justify-center group-hover:bg-secondary-main/20 transition-colors duration-300`}
                  >
                    <item.icon className={`text-secondary-main`} size={24} />
                  </div>
                </div>
                <div>
                  <h3
                    className={`text-lg font-bold text-primary-main mb-2 group-hover:text-secondary-main transition-colors duration-300`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-text-secondary lowercase text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
