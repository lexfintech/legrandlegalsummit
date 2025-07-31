'use client';

import { useState, useEffect } from 'react'; // Import useEffect
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NavItem } from '../types';
import { pastEvents, upcomingEvents } from '../data/events';

const NominationForm = () => {
  // ... (navItems and initialForm declarations remain the same)
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
    category: '',
    bestDescribe: '',
    experience: '',
    bio: '',
    expertise: '',
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

  // NEW: useEffect to load draft from localStorage on component mount
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
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // ... (validate function remains the same)
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
      category: 'Category',
      bestDescribe: 'Nominee Description',
      experience: 'Years of Experience',
      bio: 'Brief Bio',
      expertise: 'Key Expertise',
      awardCategory: 'Award Category',
      city: 'City',
      state: 'State',
      date: 'Date',
      hours: 'Hour',
      minutes: 'Minutes',
    };

    // Check for empty fields
    Object.entries(form).forEach(([key, value]) => {
      if (!String(value).trim()) {
        newErrors[key] = `${fieldLabels[key] || 'This field'} is required.`;
      }
    });

    // Specific format validations
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Form Submitted Successfully:', form);

    // NEW: Clear the draft from localStorage on successful submission
    try {
      localStorage.removeItem('nominationFormDraft');
      console.log('Draft removed from localStorage after submission.');
    } catch (error) {
      console.error('Failed to remove draft from localStorage:', error);
    }
    // Here you would typically send the data to your API and reset the form
    // setForm(initialForm);
  };

  // NEW: Function to handle saving the form data as a draft
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
    'p-3 border rounded-md w-full text-sm text-gray-800 placeholder-gray-400 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition duration-200';

  return (
    <>
      <Navbar navItems={navItems} ticketLink={'#'} />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20 py-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-5xl bg-white shadow-xl rounded-lg p-6 sm:p-8 space-y-6"
        >
          {/* ... (Your form fields remain exactly the same) ... */}
          <h2 className="text-3xl font-bold text-gray-900">Nomination Form</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {/* Your Details */}
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

            {/* Nominee Details */}
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
                <option value="">
                  Select Educational Background of the Nominee
                </option>
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
            <div>
              <label
                htmlFor="bestDescribe"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nominee is a...
              </label>
              <select
                id="bestDescribe"
                name="bestDescribe"
                value={form.bestDescribe}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select Description</option>
                <option value="In-House Counsel">In-House Counsel</option>
                <option value="Law Firm Partner">Law Firm Partner</option>
                <option value="Law Firm">Law Firm</option>
                <option value="LegalTech Company">LegalTech Company</option>
                <option value="Independent Lawyer">Independent Lawyer</option>
                <option value="LegalTech Contributor">
                  LegalTech Contributor
                </option>
                <option value="Legal Team">Legal Team</option>
                <option value="Other">Other</option>
              </select>
              {errors.bestDescribe && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.bestDescribe}
                </p>
              )}
            </div>
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
                placeholder="e.g., 15"
                value={form.experience}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.experience && (
                <p className="text-red-600 text-xs mt-1">{errors.experience}</p>
              )}
            </div>
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
                placeholder="e.g., Hyderabad"
                value={form.city}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.city && (
                <p className="text-red-600 text-xs mt-1">{errors.city}</p>
              )}
            </div>
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
                placeholder="e.g., Telangana"
                value={form.state}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.state && (
                <p className="text-red-600 text-xs mt-1">{errors.state}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Preferred Interview Date
              </label>
              <input
                id="date"
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className={inputClass}
              />
              {errors.date && (
                <p className="text-red-600 text-xs mt-1">{errors.date}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Interview Time
              </label>
              <div className="grid grid-cols-3 gap-2">
                <select
                  name="hours"
                  value={form.hours}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Hour</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {String(i + 1).padStart(2, '0')}
                    </option>
                  ))}
                </select>
                <select
                  name="minutes"
                  value={form.minutes}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Min</option>
                  {[
                    '00',
                    '05',
                    '10',
                    '15',
                    '20',
                    '25',
                    '30',
                    '35',
                    '40',
                    '45',
                    '50',
                    '55',
                  ].map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <select
                  name="ampm"
                  value={form.ampm}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
              {(errors.hours || errors.minutes) && (
                <p className="text-red-600 text-xs mt-1">
                  Please select a full time.
                </p>
              )}
            </div>
          </div>

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
            >
              <option value="">Choose Award Category</option>
              <option value="In-House Counsel Excellence">
                In-House Counsel Excellence
              </option>
              <option value="Top Leadership & Lifetime Honors">
                Top Leadership & Lifetime Honors
              </option>
              <option value="Law Firm & Practice Area Awards">
                Law Firm & Practice Area Awards
              </option>
              <option value="Young Talent, Diversity & Inclusion">
                Young Talent, Diversity & Inclusion
              </option>
              <option value="Public Service, Education & Innovation">
                Public Service, Education & Innovation
              </option>
              <option value="Core Practice Excellence">
                Core Practice Excellence
              </option>
              <option value="Youth & Rising Talent">
                Youth & Rising Talent
              </option>
              <option value="Leadership & Community Impact">
                Leadership & Community Impact
              </option>
              <option value="Pro Bono & Ethical Practice">
                Pro Bono & Ethical Practice
              </option>
            </select>
            {errors.awardCategory && (
              <p className="text-red-600 text-xs mt-1">
                {errors.awardCategory}
              </p>
            )}
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
            {/* UPDATED: Added onClick handler to the Save as Draft button */}
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
