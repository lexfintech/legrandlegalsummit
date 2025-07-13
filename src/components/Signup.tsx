import React, { useState } from 'react';
import { Mail, User, Phone, Building } from 'lucide-react';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    interests: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section className="py-20 bg-[#1B263B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Connected
          </h2>
          <div className="w-24 h-1 bg-[#2E86AB] mx-auto mb-6"></div>
          <p className="text-xl text-[#C0C0C0] max-w-3xl mx-auto">
            Subscribe to our newsletter for updates on Le Confluence and
            upcoming legal events
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl p-8 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-[#1B263B] mb-2"
              >
                Full Name *
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4A4A4A]"
                  size={20}
                />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-[#C0C0C0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E86AB] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#1B263B] mb-2"
              >
                Email Address *
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4A4A4A]"
                  size={20}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-[#C0C0C0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E86AB] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-[#1B263B] mb-2"
              >
                Phone Number
              </label>
              <div className="relative">
                <Phone
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4A4A4A]"
                  size={20}
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-[#C0C0C0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E86AB] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-semibold text-[#1B263B] mb-2"
              >
                Organization
              </label>
              <div className="relative">
                <Building
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4A4A4A]"
                  size={20}
                />
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-[#C0C0C0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E86AB] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your organization"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="interests"
              className="block text-sm font-semibold text-[#1B263B] mb-2"
            >
              Areas of Interest
            </label>
            <textarea
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-[#C0C0C0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E86AB] focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Tell us about your legal interests and practice areas"
            />
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-[#2E86AB] hover:bg-[#2E86AB]/80 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
            >
              Subscribe to Newsletter
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
