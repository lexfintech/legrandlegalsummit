import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ticketLink } from '../data/dubai';

const navItems = [
  { name: 'Home', href: '/', type: 'internal' },
  {
    name: 'Past Events Pictures',
    href: 'https://drive.google.com/drive/folders/1HQbUUUk4mrA9VjAseh30r91Sz6YEuAq0?usp=drive_link',
    type: 'external',
  },
  { name: 'Speakers', href: '/#speakers', type: 'section' },
  {
    name: 'Awards',
    href: 'https://bharatnyayapuraskar.com/',
    type: 'external',
  },
  { name: 'Agenda', href: '/#agenda', type: 'section' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash navigation when coming from other pages
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.substring(1); // Remove '#' to get section id
      const element = document.getElementById(sectionId);
      if (element) {
        // Add a small delay to ensure the page has loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleSectionClick = (href: string) => {
    setIsMobileMenuOpen(false);

    // If we're already on the home page and clicking a section link
    if (location.pathname === '/' && href.startsWith('/#')) {
      const sectionId = href.substring(2); // Remove '/#' to get section id
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-primary-main shadow-lg'
        : 'bg-primary-main/90 backdrop-blur-sm'
        }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img
              src="./images/logos/legrandlegalsummit.webp"
              alt="Le Grand Legal Summit"
              className="h-16 w-auto object-contain"
            />
            <h1 className="text-xl md:text-2xl font-bold text-white">
              Le Grand Legal Summit
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) =>
                item.type === 'external' ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white hover:text-secondary-main px-3 py-2 text-sm font-medium transition-colors duration-200`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleSectionClick(item.href)}
                    className={`text-white hover:text-secondary-main px-3 py-2 text-sm font-medium transition-colors duration-200`}
                  >
                    {item.name}
                  </Link>
                ),
              )}
              {location.pathname === '/' && (
                <a
                  href={ticketLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary-main hover:bg-secondary-main/80 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 hover:transform hover:scale-105"
                >
                  Buy Ticket
                  <ArrowRight size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`text-white hover:text-secondary-main transition-colors duration-200`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-main`}>
              {navItems.map((item) =>
                item.type === 'external' ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white hover:text-secondary-main block px-3 py-2 text-base font-medium transition-colors duration-200`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleSectionClick(item.href)}
                    className={`text-white hover:text-secondary-main block px-3 py-2 text-base font-medium transition-colors duration-200`}
                  >
                    {item.name}
                  </Link>
                ),
              )}
              {location.pathname === '/' && (
                <a
                  href={ticketLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-secondary-main hover:bg-secondary-main/80 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 mt-4`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Buy Ticket
                  <ArrowRight size={16} />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
