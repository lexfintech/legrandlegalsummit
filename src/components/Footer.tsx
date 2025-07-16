import {
  Youtube,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    {
      icon: Youtube,
      href: 'https://www.youtube.com/@leconfluence',
      color: 'hover:text-red-500',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/legrandlegalsummit/',
      color: 'hover:text-pink-500',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/le-grand-legal-summit/',
      color: 'hover:text-blue-600',
    },
    // { icon: MessageCircle, href: 'sms:+919582723995', color: 'hover:text-green-500' },
  ];

  return (
    <footer className={`bg-primary-main text-white py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-3">
            <h3 className={`text-3xl font-bold text-secondary-main mb-4`}>
              Le Grand Legal Summit
            </h3>
            <p className="text-text-muted leading-relaxed mb-6">
              India's premier legal conference bringing together distinguished
              legal minds, innovative solutions, and transformative discussions.
              Join us in shaping the future of the Indian legal system.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Mail className={`text-secondary-main`} size={18} />
                <span className="text-text-muted">
                  info@legrandlegalsummit.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className={`text-secondary-main`} size={18} />
                <span className="text-text-muted">+91 95827 23995</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className={`text-secondary-main`} size={18} />
                <span className="text-text-muted">New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-text-secondary rounded-lg flex items-center justify-center text-text-muted ${social.color} transition-all duration-300 hover:transform hover:scale-110`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-text-secondary mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-muted text-sm">
              © 2025 Le Grand Legal Summit. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link
                to="/privacy-policy"
                className={`text-text-muted hover:text-secondary-main text-sm transition-colors duration-300`}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className={`text-text-muted hover:text-secondary-main text-sm transition-colors duration-300`}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
