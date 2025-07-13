import React from 'react';
import { Youtube, Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Refund Policy', href: '#refund' },
    { name: 'Terms & Conditions', href: '#terms' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Youtube, href: '#', color: 'hover:text-red-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: MessageCircle, href: '#', color: 'hover:text-green-500' }
  ];

  return (
    <footer className="bg-[#1B263B] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-[#2E86AB] mb-4">Le Confluence</h3>
            <p className="text-[#C0C0C0] leading-relaxed mb-6">
              India's premier legal conference bringing together distinguished legal minds, innovative solutions, 
              and transformative discussions. Join us in shaping the future of the Indian legal system.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail className="text-[#2E86AB]" size={18} />
                <span className="text-[#C0C0C0]">info@leconfluence.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#2E86AB]" size={18} />
                <span className="text-[#C0C0C0]">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-[#2E86AB]" size={18} />
                <span className="text-[#C0C0C0]">New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#C0C0C0] hover:text-[#2E86AB] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-[#4A4A4A] rounded-lg flex items-center justify-center text-[#C0C0C0] ${social.color} transition-all duration-300 hover:transform hover:scale-110`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-[#4A4A4A] border border-[#C0C0C0]/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#2E86AB] text-white placeholder-[#C0C0C0]"
                />
                <button className="bg-[#2E86AB] hover:bg-[#2E86AB]/80 px-4 py-2 rounded-r-lg transition-colors duration-300">
                  <Mail size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#4A4A4A] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#C0C0C0] text-sm">
              © 2025 Le Confluence. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-[#C0C0C0] hover:text-[#2E86AB] text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-[#C0C0C0] hover:text-[#2E86AB] text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#cookies" className="text-[#C0C0C0] hover:text-[#2E86AB] text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;