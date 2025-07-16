import { ExternalLink, Instagram, Youtube, Linkedin } from 'lucide-react';

const GuestsOfHonour = () => {
  const guestsOfHonour = [
    {
      name: 'Dr. Ramdas Bandu Athawale',
      designation:
        'Union Minister of State, India: Social Justice & Empowerment',
      image: './images/guest-of-honours/ramdas-athawale.webp',
      website: 'https://en.wikipedia.org/wiki/Ramdas_Athawale',
      youtube: 'https://youtu.be/v_aAwVWnAd8?feature=shared',
      instagram: '#',
      linkedin: '#',
    },
    {
      name: 'Smt. Himadri Singh',
      designation: 'Member of Parliament, Lok Sabha',
      image: './images/guest-of-honours/himdri-singh.webp',
      website: '#',
      youtube: 'https://youtu.be/FIN9wP2t6uc?si=WhZ5Pi4Dex9V-03y',
      instagram: 'https://www.instagram.com/himadri4bjp/',
      linkedin: '#',
    },
    {
      name: 'Faggan Singh Kulaste',
      designation:
        'Former Minister of State in the Ministry of Steel; Minister of State in the Ministry of Rural Development, Government of India',
      image: './images/guest-of-honours/faggan-singh.webp',
      website: '#',
      youtube: 'https://youtu.be/GPMYw9q0Ew0?si=C1yzRN-pkLS_sT0i',
      instagram:
        'https://www.instagram.com/fskulaste?igsh=MWltZm1pbnhoenB0Mg%3D%3D',
      linkedin: '#',
    },
    {
      name: 'Shri Kapil Mishra',
      designation: 'Cabinet Minister, Govt of Delhi Vice President BJP Delhi',
      image: './images/guest-of-honours/kapil-mishra.webp',
      website: '#',
      youtube: 'https://youtu.be/INYozth43wc?si=wD3GlxMdRRaRylio',
      instagram: 'https://www.instagram.com/kapilmishra_ind/?hl=en',
      linkedin: '#',
    },
    {
      name: 'Shri Satish Upadhyay',
      designation: 'MLA - Malviya Nagar, Delhi',
      image: './images/guest-of-honours/satish-upadhyay.webp',
      website:
        'https://en.wikipedia.org/wiki/Satish_Upadhyay#:~:text=Upadhyay%20joined%20the%20Rashtriya%20Swayamsevak,Nagar%20Assembly%20constituency%20in%202025.',
      youtube: 'https://www.youtube.com/watch?v=fT1w7Xh274Q',
      instagram: '#',
      linkedin: '#',
    },
    {
      name: 'Adv. Shikha Rai',
      designation: [
        'MLA - Greater Kailash, Delhi',
        '1st Woman Chairperson Standing Committee',
        '1st Woman Leader of the House',
        'Advocate at Supreme Court of India',
      ],
      image: './images/guest-of-honours/shikha-rai.webp',
      website: '#',
      youtube: 'https://youtu.be/AFi990nGCQg?feature=shared',
      instagram:
        'https://www.instagram.com/shikharaibjp?utm_source=ig_web_button_share_sheet&igsh=c2phYzE3ZGd3MHln',
      linkedin: '#',
    },
    {
      name: 'Raghuraj Singh',
      designation: 'MLA, Uttar Pradesh',
      image: './images/guest-of-honours/raghuraj-singh.webp',
      website: '#',
      youtube: 'https://www.youtube.com/watch?v=rfPV5SPQJMU',
      instagram: 'https://www.instagram.com/raghurajsinghbjp/?hl=en',
      linkedin: '#',
    },
    {
      name: 'Pravesh Ratn',
      designation: 'MLA, Patel Nagar, Delhi',
      image: './images/guest-of-honours/pravesh-ratn.webp',
      website: '#',
      youtube: 'https://youtu.be/-4UFmKuxPLg?si=RRzyFXiz3PTldMOE',
      instagram: 'https://www.instagram.com/praveshratn/?hl=en',
      linkedin: '#',
    },
    {
      name: 'Shri Vinay Choudhary',
      designation: 'National Co-Incharge Research & Policy - BJP',
      image: './images/guest-of-honours/shri-vinay-choudhary.webp',
      website: '#',
      youtube: 'https://www.youtube.com/watch?v=rfPV5SPQJMU',
      instagram:
        'https://www.instagram.com/vinaybjpvoice?igsh=aDJ3NDZvMW1tZGoy',
      linkedin: '#',
    },
  ];

  return (
    <section className="py-10 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Guests of Honour */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-primary-main mb-6`}
          >
            Guests of Honour
          </h2>
          <div className={`w-24 h-1 bg-secondary-main mx-auto`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {guestsOfHonour.map((guest, index) => (
            <div
              key={index}
              className="w-[70%] md:w-full mx-auto bg-white cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
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
    </section>
  );
};

export default GuestsOfHonour;
