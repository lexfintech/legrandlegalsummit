const MediaPartners = () => {
  const mediaPartners = [
    {
      name: 'The Bharat News',
      logo: './images/media-partners/the-bharat-news.webp',
      website: 'https://thebharatnewsnetwork.in/',
    },
    {
      name: 'Quatro Hive',
      logo: './images/media-partners/quatro-hive.webp',
      website: 'https://quatrohive.com/',
    },
    {
      name: 'Conventus Law',
      logo: './images/media-partners/conventus-law.webp',
      website: 'https://conventuslaw.com/',
    },
    {
      name: 'LawTeller',
      logo: './images/media-partners/lawteller.webp',
      website: 'https://lawteller.com/',
    },
    {
      name: 'CIO Tech Outlook',
      logo: './images/media-partners/cio-tech-outlook.webp',
      website: 'https://www.ciotechoutlook.com/',
    },
    {
      name: 'LatestLaws.com',
      logo: './images/media-partners/latestlaws.webp',
      website: 'https://www.latestlaws.com/',
    },
    {
      name: 'Asia Briefing',
      logo: './images/media-partners/asia-briefing.webp',
      website: 'https://www.asiabriefing.com/',
    },
  ];

  return (
    <section className="py-20 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-6">
            Media Partners
          </h2>
          <div className="w-24 h-1 bg-[#2E86AB] mx-auto mb-6"></div>
          <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">
            Leading legal media organizations covering Le Confluence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {mediaPartners.map((partner, index) => (
            <a
              key={index}
              className="bg-white cursor-pointer rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group flex flex-col items-center"
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
              <h3 className="text-center text-md md:text-2xl font-semibold text-[#1B263B] group-hover:text-[#2E86AB] transition-colors duration-300">
                {partner.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaPartners;
