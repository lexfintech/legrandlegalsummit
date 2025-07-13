import React from 'react';
import { ExternalLink, Linkedin, Youtube, Instagram } from 'lucide-react';

const EventSpeakers = () => {
  const speakers = [
    {
      name: 'Rajiv Malik',
      designation: ['Legal Leader - LG Electronics'],
      image: './images/event-speakers/rajiv-malik.jpg',
      linkedin: 'https://www.linkedin.com/in/rajiv-m-02890b1a/',
      youtube: '#',
      website: 'https://www.lg.com/in',
      instagram: '#',
    },
    {
      name: 'Anurag Pareek',
      designation: ['Vice President Legal - OYO'],
      image: './images/event-speakers/anurag-pareek.jpg',
      linkedin: 'https://www.linkedin.com/in/anurag-pareek-b8380063/',
      youtube: '#',
      website: 'https://www.oyorooms.com/',
      instagram: '#',
    },
    {
      name: 'Susheel Jad',
      designation: ['President and General Counsel - Think Gas'],
      image: './images/event-speakers/susheel-jad.jpg',
      linkedin: 'https://www.linkedin.com/in/susheel-jad-7170a2122/',
      youtube: '#',
      website: 'https://www.think-gas.com/',
      instagram: '#',
    },
    {
      name: 'Balakrishna Gopalakrishnan',
      designation: ['Founder - BKG Law Associate, Advocates & Legal Advisors'],
      image: './images/event-speakers/balakrishna-gopalakrishnan.jpg',
      linkedin:
        'https://www.linkedin.com/in/balakrishna-gopalakrishnan-015b7014/',
      youtube: '#',
      website: 'https://bgklawassociates.co.in/',
      instagram: '#',
    },
    {
      name: 'Niti Mittal',
      designation: ['Global General Counsel - Coforge'],
      image: './images/event-speakers/niti-mittal.jpg',
      linkedin: 'https://www.linkedin.com/in/niti-mittal-a3358518/',
      youtube: '#',
      website: 'https://www.coforge.com/',
      instagram: '#',
    },
    {
      name: 'Attorney. Ms. Vasundhra Prasad',
      designation: [
        "B.S.L., LL.B., LL.M. (IPR) Dean's Scholar, New York (NY), USA Supreme Court of India and Delhi High Court",
      ],
      image: './images/event-speakers/vasundhra-prasad.jpg',
      linkedin:
        'https://www.linkedin.com/in/vasundhraprasad/?originalSubdomain=in',
      youtube: 'https://www.youtube.com/watch?v=OywFoOcQEZo',
      website: '#',
      instagram: '#',
    },
    {
      name: 'Sushma Shankar',
      designation: ['Vice President Legal Accenture'],
      image: './images/event-speakers/sushma-shankar.jpg',
      linkedin: 'https://www.linkedin.com/in/sushma-shankar-8bba8a39/',
      youtube: '#',
      website: 'https://www.accenture.com/in-en',
      instagram: '#',
    },
    {
      name: 'Saguna Sodhi',
      designation: ['Partner - EY Forensic & Integrity Services.'],
      image: './images/event-speakers/saguna-sodhi.jpg',
      linkedin: 'https://www.linkedin.com/in/sagunasodhi/?originalSubdomain=in',
      youtube: '#',
      website: 'https://www.ey.com/en_in/people/saguna-sodhi',
      instagram: '#',
    },
    {
      name: 'Amar Sundram',
      designation: [
        'General Counsel - Sr. Vice President (Legal) and Chief Compliance Officer - NEC Corporation India Pvt. Ltd',
      ],
      image: './images/event-speakers/amar-sundram.jpg',
      linkedin: 'https://www.linkedin.com/in/amar-sundram-a7833618/',
      youtube: '#',
      website: 'https://in.nec.com/',
      instagram: '#',
    },
    {
      name: 'Rajeev Tripathi',
      designation: [
        'Vice President Legal & FAA - Goods And Services Tax Network',
      ],
      image: './images/event-speakers/rajeev-tripathi.jpg',
      linkedin: 'https://www.linkedin.com/in/rajeevtripathi2807/',
      youtube: '#',
      website: 'https://www.gstn.org.in/',
      instagram: '#',
    },
    {
      name: 'Ashish Kumar Pandey',
      designation: [
        'General Counsel and Company Secretary -Luminous Power Technologies (P) Ltd.',
      ],
      image: './images/event-speakers/ashish-kumar-pandey.jpg',
      linkedin: 'https://www.linkedin.com/in/ashish-kumar-p-60592037/',
      youtube: '#',
      website: 'https://www.luminousindia.com/',
      instagram: '#',
    },
    {
      name: 'Amit Goyal',
      designation: ['Partner - EY Forensic & Integrity Services'],
      image: './images/event-speakers/amit-goyal.jpg',
      linkedin:
        'https://www.linkedin.com/in/amit-goyal-97994b17/?originalSubdomain=in',
      youtube: '#',
      website: 'https://www.ey.com/en_in/people/amit-goyal',
      instagram: '#',
    },
    {
      name: 'Manish Mittal',
      designation: [
        'Assistant Vice President -Legal and FCU - India first Life Insurance',
      ],
      image: './images/event-speakers/manish-mittal.jpg',
      linkedin: 'https://www.linkedin.com/in/manish-mittal-601239136/',
      youtube: '#',
      website: 'https://www.indiafirstlife.com/',
      instagram: '#',
    },
    {
      name: 'Shweta Prasad',
      designation: ['Associate Director Accenture'],
      image: './images/event-speakers/shewta-prasad.jpg',
      linkedin: 'https://www.linkedin.com/in/shweta-prasad-80378034/',
      youtube: '#',
      website: 'https://www.accenture.com/in-en',
      instagram: '#',
    },
    {
      name: 'Rajeev Goswami',
      designation: ['VP Legal - Indus Towers Limited'],
      image: './images/event-speakers/rajeev-goswami.jpg',
      linkedin: 'https://www.linkedin.com/in/rajeevgoswami/',
      youtube: '#',
      website: 'https://www.industowers.com/',
      instagram: '#',
    },
    {
      name: 'Meeru Gupta',
      designation: ['General Counsel (VP) - Bata Limited'],
      image: './images/event-speakers/meeru-gupta.jpg',
      linkedin: 'https://www.linkedin.com/in/meeru-gupta-596a0213/',
      youtube: '#',
      website:
        'https://www.bata.com/in/new/?utm_source=GoogleAdsNeon&utm_medium=Search&utm_campaign=Brand_Bata_Search_TopStates_MxC&gad_source=1&gad_campaignid=18004442840&gbraid=0AAAAACdrUVrlEqryxOlDE5f-ARKoihrsz&gclid=Cj0KCQjwjJrCBhCXARIsAI5x66WbUZrum1AqgIjlyCrDVqPNw3G4vMQU5rMXdE864J4ZxWlV13EVpwwaApO2EALw_wcB',
      instagram: '#',
    },
    {
      name: 'Jyothi VK',
      designation: [
        'General Counsel, Senior Vice President (VP) - Aditya Birla Fashion and Retail Limited',
      ],
      image: './images/event-speakers/jyothi-vk.jpg',
      linkedin: 'https://www.linkedin.com/in/jyothi-v-k/',
      youtube: '#',
      website:
        'https://www.adityabirla.com/businesses/companies/aditya-birla-fashion-and-retail-limited-abfrl/',
      instagram: '#',
    },
    {
      name: 'Ankita Sharma',
      designation: [
        'General Counsel (VP) Legal & Regulatory - Honasa Consumer Ltd.',
      ],
      image: './images/event-speakers/ankita-sharma.jpg',
      linkedin:
        'https://www.linkedin.com/in/ankita-sharma-a7871715b/?originalSubdomain=in',
      youtube: '#',
      website: 'https://honasa.in/',
      instagram: '#',
    },
    {
      name: 'Kapil Singhal',
      designation: ['CEO & Founder - CaseDocker'],
      image: './images/event-speakers/kapil-singhal.png',
      linkedin: 'https://www.linkedin.com/in/singhalkapil/',
      youtube: '#',
      website: 'https://www.casedocker.com/landing/',
      instagram: '#',
    },
    {
      name: 'Preet Sethi',
      designation: ['Deputy General Counsel - Vedanta Resources Ltd.'],
      image: './images/event-speakers/preet-sethi.jpg',
      linkedin: 'https://www.linkedin.com/in/preetsethi/',
      youtube: '#',
      website: 'https://www.vedantalimited.com/eng/',
      instagram: '#',
    },
    {
      name: 'Mehak Oberoi',
      designation: ['Legal Head - Hydro (APAC) - GE Vernova'],
      image: './images/event-speakers/mehak-oberoi.jpg',
      linkedin: 'https://www.linkedin.com/in/oberoimehak/',
      youtube: '#',
      website: 'https://www.gevernova.com/',
      instagram: '#',
    },
    {
      name: 'Vidhi Thukral',
      designation: ['Chief Manager: ESG - Axis Max Life Insurance'],
      image: './images/event-speakers/vidhi-thukral.jpg',
      linkedin: 'https://www.linkedin.com/in/vidhi-thukral-b5952962/',
      youtube: '#',
      website: 'https://www.axisbank.com/retail/insurance/max-life-insurance',
      instagram: '#',
    },
    {
      name: 'Raveena Rani',
      designation: ['Solicitor - Solicitors Regulation Authority'],
      image: './images/event-speakers/raveena-rani.jpg',
      linkedin: 'http://linkedin.com/in/raveena-rani-458766116',
      youtube: '#',
      website: 'https://www.sra.org.uk/',
      instagram: '#',
    },
    {
      name: 'Babita Kumari',
      designation: ['Sr. Legal Counsel - Malomatia India Technology Services'],
      image: './images/event-speakers/babita-kumari.jpg',
      linkedin: 'https://www.linkedin.com/in/csbabitarajput/',
      youtube: '#',
      website: 'https://www.malomatia.com/',
      instagram: '#',
    },
    {
      name: 'Anjali Sheoran',
      designation: ['Legal Counsel - Atlan'],
      image: './images/event-speakers/anjali-sheoran.jpg',
      linkedin: 'https://www.linkedin.com/in/anjalisheoran/',
      youtube: '#',
      website: 'https://atlan.com/',
      instagram: '#',
    },
    {
      name: 'Dr. Akshay Kant Chaturvedi',
      designation: ['Corporate Head - IPR - Gujarat Fluorochemicals Limited'],
      image: './images/event-speakers/akshay-kant-chaturvedi.jpg',
      linkedin:
        'https://www.linkedin.com/in/dr-akshay-kant-chaturvedi-38797b1/',
      youtube: '#',
      website: 'https://gfl.co.in/',
      instagram: '#',
    },
    {
      name: 'Shuchita Singhal',
      designation: ['COO - CaseDocker'],
      image: './images/event-speakers/shuchita-singhal.png',
      linkedin: 'https://www.linkedin.com/in/shuchita-singhal/',
      youtube: '#',
      website: 'https://www.casedocker.com/landing/',
      instagram: '#',
    },
    {
      name: 'Manoj Gujaran',
      designation: [
        'Legal Strategist and Compliance Thought Leader in BFSI & Strategic Advisor - Pashyanti Ventures LLP',
      ],
      image: './images/event-speakers/manoj-gujaran.jpg',
      linkedin: 'https://www.linkedin.com/in/manoj-gujaran-a8030014/',
      youtube: '#',
      website: '#',
      instagram: '#',
    },
    {
      name: 'Adv. Aditya Goenka',
      designation: [
        'Chief Legal & Compliance Officer - YES Securities (India) Limited',
      ],
      image: './images/event-speakers/aditya-goenka.jpg',
      linkedin:
        'https://www.linkedin.com/in/adv-aditya-goenka/?originalSubdomain=in',
      youtube: '#',
      website: 'https://yesinvest.in/',
      instagram: '#',
    },
    {
      name: 'Hitendra Palia',
      designation: ['Legal Coundel - PhonePe'],
      image: './images/event-speakers/hitendra-palia.jpg',
      linkedin: 'https://www.linkedin.com/in/hitendra-palia-3a39b045/',
      youtube: '#',
      website: 'https://www.phonepe.com/',
      instagram: '#',
    },
    {
      name: 'Raunak Singh',
      designation: ['Legal Counsel & Company Secretary Amway'],
      image: './images/event-speakers/raunak-singh.jpg',
      linkedin:
        'https://www.linkedin.com/in/raunak-singh-9461463a/?originalSubdomain=in',
      youtube: '#',
      website: 'https://www.amway.in/',
      instagram: '#',
    },
    {
      name: 'Punit Babbar',
      designation: ['GM - Liaisoning & Head Complaint Management - Tide'],
      image: './images/event-speakers/punit-babbar.jpg',
      linkedin: 'https://www.linkedin.com/in/punit-babbar-6b963738/',
      youtube: '#',
      website:
        'https://www.tide.co/en-IN/?srsltid=AfmBOop4_U-h6D3LzPtCR30Dn-r8AhEEWFZX1hljjf61Jdb4ejyjX8e0',
      instagram: '#',
    },
    {
      name: 'Dr. Richa Pathak',
      designation: [
        'Senior Corporate Counse Management - Voltas Ltd. - A Tata Enterprise',
      ],
      image: './images/event-speakers/richa-pathak.jpg',
      linkedin: 'https://www.linkedin.com/in/richapathak1989/',
      youtube: '#',
      website: 'https://www.voltas.com/collections/ac',
      instagram: '#',
    },
    {
      name: 'Ananya Gupta',
      designation: ['Legal Counsel - UPC Solar India Private Limited'],
      image: './images/event-speakers/ananya-gupta.jpg',
      linkedin: 'https://www.linkedin.com/in/lawyerananya/',
      youtube: '#',
      website: 'https://upcrenewables.com/',
      instagram: '#',
    },
    {
      name: 'Dr. Moksha Kalyanram',
      designation: [
        'Advocate, Member TAC, Dept of Telecommunication, Ministry of Communication, Govt of India',
      ],
      image: './images/event-speakers/moksha-kalyanram.jpg',
      linkedin: 'https://www.linkedin.com/in/drmoksha-advocate/',
      youtube: '#',
      website: '#',
      instagram: 'https://www.instagram.com/drmoksha.advocate/?hl=en',
    },
    {
      name: 'Adv. Saurabh Sharma',
      designation: ['Managing Director - JSSB Legal'],
      image: './images/event-speakers/saurabh-sharma.jpg',
      linkedin: 'https://www.linkedin.com/in/saurabh-sharma-3169167/',
      youtube: '#',
      website: 'https://www.jssblegal.com/',
      instagram: '#',
    },
    {
      name: 'Adv. C.S. Avdhesh Kr. Varshney',
      designation: ['Founder & Mentor Justicewings Lexedge Solutions LLP'],
      image: './images/event-speakers/c-s-avdhesh-kr-varshney.png',
      linkedin: 'https://www.linkedin.com/in/avdheshvarshney/',
      youtube: '#',
      website: 'https://jwlexedge.com/',
      instagram: '#',
    },
    {
      name: 'Manushi Shah',
      designation: ['Partner - La Mintage Legal Llp'],
      image: './images/event-speakers/manushi-shah.jpg',
      linkedin: 'https://www.linkedin.com/in/manushishah/',
      youtube: '#',
      website: 'https://lamintage.com/',
      instagram: '#',
    },
    {
      name: 'Anurag Goyal',
      designation: ['Head of Cyber Security RedDoorz'],
      image: './images/event-speakers/anurag-goyal.jpg',
      linkedin:
        'https://www.linkedin.com/in/anuraggoyal2021/?originalSubdomain=in',
      youtube: '#',
      website: 'https://www.reddoorz.com/',
      instagram: '#',
    },
    {
      name: 'Shweta Bansal',
      designation: ['Managing Partner - SB Tech Associates'],
      image: './images/event-speakers/shweta-bansal.jpg',
      linkedin: 'http://linkedin.com/in/shwetabansal-tl',
      youtube: '#',
      website: '#',
      instagram: 'https://www.instagram.com/advshwetabansal/',
    },
    {
      name: 'Akshar K Biyani',
      designation: ['Sr. DGM, Secretarial, Compliance, Legal - Adventz Group'],
      image: './images/event-speakers/akshar-k-biyani.png',
      linkedin:
        'https://www.linkedin.com/in/akshar-biyani-67890a57?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkqcOtkt5QwO382qZ2TNG%2Bw%3D%3D',
      youtube: '#',
      website: 'https://www.adventz.com/',
      instagram: '#',
    },
  ];

  return (
    <section id="speakers" className="py-20 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B263B] mb-6">
            Event Speakers
          </h2>
          <div className="w-24 h-1 bg-[#2E86AB] mx-auto mb-6"></div>
          <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">
            Learn from the most distinguished voices in the Indian legal system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B263B] mb-2 group-hover:text-[#2E86AB] transition-colors duration-300">
                  {speaker.name}
                </h3>
                <div className="text-[#4A4A4A] mb-4">
                  {Array.isArray(speaker.designation)
                    ? speaker.designation.map((d, i) => <div key={i}>{d}</div>)
                    : speaker.designation}
                </div>
                <div className="flex gap-3">
                  {speaker.website && speaker.website !== '#' && (
                    <a
                      href={speaker.website}
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
                  {speaker.youtube && speaker.youtube !== '#' && (
                    <a
                      href={speaker.youtube}
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
                  {speaker.instagram && speaker.instagram !== '#' && (
                    <a
                      href={speaker.instagram}
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
                  {speaker.linkedin && speaker.linkedin !== '#' && (
                    <a
                      href={speaker.linkedin}
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

export default EventSpeakers;
