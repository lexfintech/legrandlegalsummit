const EventPartners = () => {
  const partners = [
    {
      name: 'EY - Exclusive Partner',
      logo: './images/event-partners/ey.webp',
      website: 'https://www.ey.com/en_in',
    },
    {
      name: 'La Mintage Legal - Strategic Legal Partner',
      logo: './images/event-partners/lawmintage.webp',
      website: 'https://lamintage.com/',
    },
    {
      name: 'Dispute Resolution Hub - Resolution Partner',
      logo: './images/event-partners/dispute-hub.webp',
      website: 'https://resolutionhub.in/',
    },
    {
      name: 'JSSB Legal - Legal Excellence Partner',
      logo: './images/event-partners/jssb-legal.webp',
      website: 'https://www.jssblegal.com/',
    },
    {
      name: 'Gyanauka - Knowledge Partner',
      logo: './images/event-partners/gyanauka.webp',
      website: 'https://gyanauka.com/',
    },
    {
      name: 'BGK Law Associates - Supporting Partner',
      logo: './images/event-partners/bgk-law-associates.webp',
      website: 'https://bgklawassociates.co.in/',
    },
    {
      name: 'CaseDocker - Legal-Tech Partner',
      logo: './images/event-partners/casedocker.webp',
      website: 'https://www.casedocker.com/landing/',
    },
    {
      name: 'LawyerInsta - Official Legal Directory Partner',
      logo: './images/event-partners/lawyerinsta.webp',
      website: 'https://lawyerinsta.com/',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-primary-main mb-6`}
          >
            Event Partners
          </h2>
          <div className={`w-24 h-1 bg-secondary-main mx-auto mb-6`}></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Partnering with industry leaders to deliver exceptional value and
            innovation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <a
              key={index}
              className="bg-background-primary cursor-pointer rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group flex flex-col items-center"
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="max-w-full max-h-40 mb-4 overflow-hidden rounded-lg">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3
                className={`text-center text-md md:text-2xl font-bold text-primary-main group-hover:text-secondary-main transition-colors duration-300`}
              >
                {partner.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventPartners;
