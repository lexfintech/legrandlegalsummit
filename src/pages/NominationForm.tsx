import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NavItem } from '../types';
import { pastEvents, upcomingEvents } from '../data/events';

const awardCategoriesData = [
  {
    head: 'General Counsel of the Year',
    subcategories: [
      'General Counsel – Banking & Financial Services',
      'General Counsel – Pharmaceuticals & Healthcare',
      'General Counsel – Technology & IT Services',
      'General Counsel – Manufacturing & Heavy Industries',
      'General Counsel – Energy, Oil & Gas',
      'General Counsel – Retail & Consumer Products',
      'General Counsel – Real Estate & Infrastructure',
      'General Counsel – Public Sector & PSU',
      'General Counsel – Private Equity & Venture Capital',
      'General Counsel – Overall Excellence (Pan-Industry)',
    ],
  },
  {
    head: 'Rising Star Counsel',
    subcategories: [
      'Rising Star – Corporate Law',
      'Rising Star – Litigation & Disputes',
      'Rising Star – M&A and PE Transactions',
      'Rising Star – Data Privacy & Cyber Law',
      'Rising Star – Employment & Labour',
      'Rising Star – Environmental & ESG Law',
      'Rising Star – Banking & Finance',
      'Rising Star – In-House Counsel',
      'Rising Star – Women in Law',
      'Rising Star – Innovation in Practice',
    ],
  },
  {
    head: 'Law Firm of the Year',
    subcategories: [
      'Full-Service Law Firm of the Year',
      'Boutique Firm of the Year',
      'Emerging Law Firm (under 5 years)',
      'Best Litigation Practice',
      'Best Corporate & M&A Practice',
      'Best Technology Law Practice',
      'Best Real Estate & Infra Practice',
      'Best Regulatory & Compliance Team',
      'Best Firm for Diversity & Inclusion',
      'Best Regional Law Firm (Tier-2/3 Cities)',
    ],
  },
  {
    head: 'Outstanding Litigation Counsel',
    subcategories: [
      'Civil Litigation – Individual',
      'Criminal Litigation – Individual',
      'Commercial Litigation',
      'Constitutional & Writ Practice',
      'Arbitration Counsel – Domestic',
      'Arbitration Counsel – International',
      'Public Interest Litigation',
      'White-Collar Crime',
      'Appellate Practice Specialist',
      'Young Litigator of the Year',
    ],
  },
  {
    head: 'In-House Legal Team Excellence',
    subcategories: [
      'In-House Team – Financial Sector',
      'In-House Team – Healthcare & Pharma',
      'In-House Team – Technology & Digital',
      'In-House Team – Infrastructure',
      'In-House Team – FMCG/Retail',
      'In-House Team – Sustainability & ESG',
      'In-House Team – M&A and Compliance',
      'In-House Team – IP and Innovation',
      'In-House Team – Crisis Response',
      'Legal Team of the Year – Overall',
    ],
  },
  {
    head: 'Excellence in Corporate Advisory',
    subcategories: [
      'M&A Advisory – Domestic',
      'M&A Advisory – Cross-Border',
      'Corporate Governance Excellence',
      'Private Equity Transactions',
      'IPO & Capital Markets',
      'Joint Ventures & Strategic Alliances',
      'Restructuring & Insolvency',
      'ESG & Regulatory Advisory',
      'Investment Structuring & Tax',
      'Start-Up Legal Advisory',
    ],
  },
  {
    head: 'Innovation in Legal Practice',
    subcategories: [
      'Legal Tech Implementation',
      'Innovative Legal Research',
      'Alternative Billing Models',
      'Virtual Law Office of the Year',
      'Legal Analytics & AI Usage',
      'Client-Centric Legal Service',
      'Legal Design Thinking',
      'Online Dispute Resolution Advocate',
      'Legal Communication & Public Education',
      'Legal Service Delivery Model',
    ],
  },
  {
    head: 'Leadership in Compliance & Ethics',
    subcategories: [
      'Compliance Officer – BFSI',
      'Compliance Officer – Corporate Sector',
      'Anti-Bribery/Anti-Corruption Specialist',
      'Data Privacy & Protection',
      'Ethics & Integrity Champion',
      'AML/KYC Compliance Expert',
      'Regulatory Affairs Manager',
      'Whistleblower Management Framework',
      'ESG & Climate Compliance',
      'Internal Investigations Leadership',
    ],
  },
  {
    head: 'Best Legal Strategy in Crisis Management',
    subcategories: [
      'Corporate Crisis Response',
      'Regulatory Investigations Handling',
      'Litigation Avoidance Strategy',
      'Labour & Layoff Strategy',
      'Cyberattack & Data Breach Response',
      'Crisis Mediation & Arbitration',
      'Reputation & Defamation Defense',
      'Supply Chain Legal Resolution',
      'Multi-Jurisdiction Risk Handling',
      'Post-Crisis Regulatory Recovery',
    ],
  },
  {
    head: 'Trailblazer in Legal Technology & Transformation',
    subcategories: [
      'Best LegalTech Startup',
      'Most Innovative Legal Automation Tool',
      'E-Discovery Specialist',
      'AI in Legal Practice Champion',
      'Virtual Hearings & Paperless Courts Leader',
      'SaaS Legal Tools Designer',
      'Contract Lifecycle Management Leader',
      'Blockchain & Smart Contracts Counsel',
      'Online IP Protection Innovator',
      'Digital Transformation – In-House or Firm',
    ],
  },
];

const NominationForm = () => {
  const navItems: NavItem[] = [
    {
      name: 'Upcoming Events',
      href: '#upcoming-events',
      dropdownItems: upcomingEvents.map((event) => ({
        name: event.title,
        href: event.route,
      })),
    },
    {
      name: 'Past Events',
      href: '#past-events',
      dropdownItems: pastEvents.map((event) => ({
        name: event.title,
        href: event.route,
      })),
    },
    { name: 'Awards', href: 'https://bharatnyayapuraskar.com/' },
    { name: 'Recommendation Letters', href: '/recommendation-letters' },
    { name: 'About', href: '/about' },
  ];

  const initialForm = {
    name: '',
    email: '',
    phone: '',
    nomineeName: '',
    designation: '',
    company: '',
    profileLink: '',
    education: '',
    bestDescribe: '',
    experience: '',
    bio: '',
    expertise: '',
    categoryHead: '',
    awardCategory: '',
    city: '',
    state: '',
    date: '',
    hours: '',
    minutes: '',
    ampm: 'AM',
  };

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    try {
      const savedDraft = localStorage.getItem('nominationFormDraft');
      if (savedDraft) {
        setForm(JSON.parse(savedDraft));
        console.log('Draft loaded from localStorage.');
      }
    } catch (error) {
      console.error('Failed to load draft from localStorage:', error);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const newForm = { ...prev, [name]: value };
      if (name === 'categoryHead') {
        newForm.awardCategory = '';
      }
      return newForm;
    });

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    const fieldLabels: { [key: string]: string } = {
        name: 'Your Name',
        email: 'Email',
        phone: 'Phone Number',
        nomineeName: 'Nominee Name',
        designation: 'Designation',
        company: 'Company',
        profileLink: 'Profile Link',
        education: 'Education',
        bestDescribe: 'Nominee Description',
        experience: 'Years of Experience',
        bio: 'Brief Bio',
        expertise: 'Key Expertise',
        categoryHead: 'Category Head',
        awardCategory: 'Award Category',
        city: 'City',
        state: 'State',
        date: 'Date',
        hours: 'Hour',
        minutes: 'Minutes',
    };

    Object.entries(form).forEach(([key, value]) => {
      if (key !== 'ampm' && !String(value).trim()) {
        newErrors[key] = `${fieldLabels[key] || 'This field'} is required.`;
      }
    });

    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (form.phone && !/^\d{10}$/.test(form.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits.';
    }
    if (
      form.profileLink &&
      !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
        form.profileLink,
      )
    ) {
      newErrors.profileLink = 'Please enter a valid profile URL.';
    }
    if (form.experience && isNaN(Number(form.experience))) {
      newErrors.experience = 'Experience must be a number.';
    }
    if (form.bio && form.bio.split(/\s+/).length > 150) {
      newErrors.bio = 'Bio must not exceed 150 words.';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    console.log('Form', form);

    const validationErrors = validate();
    console.log('Validation Errors', validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${apiBaseUrl}/email.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (result.success) {
        console.log('Form Submitted Successfully');
        setForm(initialForm);
        alert('Nomination submitted successfully!');
        try {
          localStorage.removeItem('nominationFormDraft');
        } catch (error) {
          console.error('Failed to remove draft:', error);
        }
      } else {
        if (result.errors) {
          setErrors(result.errors);
        } else {
          alert(result.message || 'Submission failed');
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleSaveDraft = () => {
    try {
      localStorage.setItem('nominationFormDraft', JSON.stringify(form));
      alert('Your nomination has been saved as a draft!');
    } catch (error) {
      console.error('Failed to save draft to localStorage:', error);
      alert(
        'Could not save draft. Please ensure you have sufficient storage and permissions.',
      );
    }
  };

  const inputClass =
    'p-3 border rounded-md w-full text-sm text-gray-800 placeholder-gray-400 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed';

  const subcategories =
    awardCategoriesData.find((cat) => cat.head === form.categoryHead)
      ?.subcategories || [];

  return (
    <>
      <Navbar navItems={navItems} ticketLink={'#'} />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-24 py-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-5xl bg-white shadow-xl rounded-lg p-6 sm:p-8 space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-900">Nomination Form</h2>

          {/* Grid container for form fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {/* Your Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="e.g., John Doe"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.name && (
                <p className="text-red-600 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Your Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Email
              </label>
              <input
                id="email"
                name="email"
                placeholder="e.g., john.doe@example.com"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.email && (
                <p className="text-red-600 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Your Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Phone
              </label>
              <input
                id="phone"
                name="phone"
                placeholder="10-digit mobile number"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.phone && (
                <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Nominee's Name */}
            <div>
              <label
                htmlFor="nomineeName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nominee's Name
              </label>
              <input
                id="nomineeName"
                name="nomineeName"
                placeholder="e.g., Jane Smith"
                value={form.nomineeName}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.nomineeName && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.nomineeName}
                </p>
              )}
            </div>
            
            {/* Designation */}
            <div>
              <label
                htmlFor="designation"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Designation
              </label>
              <input
                id="designation"
                name="designation"
                placeholder="e.g., Senior Partner"
                value={form.designation}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.designation && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.designation}
                </p>
              )}
            </div>

            {/* Company / Firm */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company / Firm
              </label>
              <input
                id="company"
                name="company"
                placeholder="e.g., Smith & Associates"
                value={form.company}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.company && (
                <p className="text-red-600 text-xs mt-1">{errors.company}</p>
              )}
            </div>

            {/* LinkedIn Profile */}
            <div>
              <label
                htmlFor="profileLink"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                LinkedIn Profile
              </label>
              <input
                id="profileLink"
                name="profileLink"
                placeholder="https://linkedin.com/in/..."
                value={form.profileLink}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.profileLink && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.profileLink}
                </p>
              )}
            </div>

            {/* Highest Education */}
            <div>
              <label
                htmlFor="education"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Highest Education
              </label>
              <select
                id="education"
                name="education"
                value={form.education}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select Educational Background</option>
                <option value="Bachelor of Laws (LLB)">
                  Bachelor of Laws (LLB)
                </option>
                <option value="Master of Laws (LLM)">
                  Master of Laws (LLM)
                </option>
                <option value="Doctor of Laws (LLD)">
                  Doctor of Laws (LLD)
                </option>
                <option value="Juris Doctor (JD)">Juris Doctor (JD)</option>
                <option value="Master of Studies in Law (MSL)">
                  Master of Studies in Law (MSL)
                </option>
                <option value="Doctor of Philosophy (PhD)">
                  Doctor of Philosophy (PhD)
                </option>
                <option value="Doctor of Juridical Science (SJD)">
                  Doctor of Juridical Science (SJD)
                </option>
                <option value="Other">Other</option>
              </select>
              {errors.education && (
                <p className="text-red-600 text-xs mt-1">{errors.education}</p>
              )}
            </div>

            {/* Years of Experience - NEWLY ADDED */}
            <div>
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Years of Experience
              </label>
              <input
                id="experience"
                name="experience"
                type="number"
                placeholder="e.g., 10"
                value={form.experience}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.experience && (
                <p className="text-red-600 text-xs mt-1">{errors.experience}</p>
              )}
            </div>

            {/* City - NEWLY ADDED */}
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="e.g., Mumbai"
                value={form.city}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.city && (
                <p className="text-red-600 text-xs mt-1">{errors.city}</p>
              )}
            </div>

            {/* State - NEWLY ADDED */}
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                State
              </label>
              <input
                id="state"
                name="state"
                type="text"
                placeholder="e.g., Maharashtra"
                value={form.state}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.state && (
                <p className="text-red-600 text-xs mt-1">{errors.state}</p>
              )}
            </div>

            {/* Date - NEWLY ADDED */}
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.date && (
                <p className="text-red-600 text-xs mt-1">{errors.date}</p>
              )}
            </div>

            {/* Interview Time Slot - NEWLY ADDED */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                 Time
              </label>
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <select
                    name="hours"
                    value={form.hours}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Hour</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i} value={String(i + 1).padStart(2, '0')}>
                        {String(i + 1).padStart(2, '0')}
                      </option>
                    ))}
                  </select>
                  {errors.hours && (
                    <p className="text-red-600 text-xs mt-1">{errors.hours}</p>
                  )}
                </div>
                <div className="flex-1">
                  <select
                    name="minutes"
                    value={form.minutes}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Minutes</option>
                    {["00", "15", "30", "45"].map((min) => (
                       <option key={min} value={min}>{min}</option>
                    ))}
                  </select>
                   {errors.minutes && (
                    <p className="text-red-600 text-xs mt-1">{errors.minutes}</p>
                  )}
                </div>
                <div className="flex-1">
                  <select
                    name="ampm"
                    value={form.ampm}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>

          </div>

          {/* This section contains all other non-grid fields */}

           {/* Nominee Description - NEWLY ADDED */}
           <div>
            <label
              htmlFor="bestDescribe"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              How would you best describe the nominee?
            </label>
            <textarea
              id="bestDescribe"
              name="bestDescribe"
              placeholder="Provide a concise description of the nominee's qualities and suitability..."
              value={form.bestDescribe}
              onChange={handleChange}
              rows={4}
              className={inputClass}
            />
            {errors.bestDescribe && (
              <p className="text-red-600 text-xs mt-1">{errors.bestDescribe}</p>
            )}
          </div>

          {/* Brief Bio */}
          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Brief Bio (max 150 words)
            </label>
            <textarea
              id="bio"
              name="bio"
              placeholder="Provide a short description of the nominee's career and achievements..."
              value={form.bio}
              onChange={handleChange}
              rows={4}
              className={inputClass}
            />
            {errors.bio && (
              <p className="text-red-600 text-xs mt-1">{errors.bio}</p>
            )}
          </div>

          {/* Key Areas of Expertise */}
          <div>
            <label
              htmlFor="expertise"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Key Areas of Expertise
            </label>
            <textarea
              id="expertise"
              name="expertise"
              placeholder="e.g., Mergers & Acquisitions, Intellectual Property, Litigation"
              value={form.expertise}
              onChange={handleChange}
              rows={3}
              className={inputClass}
            />
            {errors.expertise && (
              <p className="text-red-600 text-xs mt-1">{errors.expertise}</p>
            )}
          </div>

          {/* Award Category Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <label
                htmlFor="categoryHead"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category Head
              </label>
              <select
                id="categoryHead"
                name="categoryHead"
                value={form.categoryHead}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Choose a Main Category</option>
                {awardCategoriesData.map((category) => (
                  <option key={category.head} value={category.head}>
                    {category.head}
                  </option>
                ))}
              </select>
              {errors.categoryHead && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.categoryHead}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="awardCategory"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Award Category
              </label>
              <select
                id="awardCategory"
                name="awardCategory"
                value={form.awardCategory}
                onChange={handleChange}
                className={inputClass}
                disabled={!form.categoryHead}
              >
                <option value="">
                  {form.categoryHead
                    ? 'Choose a Sub-Category'
                    : 'Please select a Category Head first'}
                </option>
                {subcategories.map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
              {errors.awardCategory && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.awardCategory}
                </p>
              )}
            </div>
          </div>

          <div className="text-xs text-gray-500">
            Your data is safe with us. We will not share your details with any
            third parties.
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
            >
              Submit Nomination
            </button>
            <button
              type="button"
              onClick={handleSaveDraft}
              className="w-full sm:w-auto border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-200"
            >
              Save as Draft
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default NominationForm;