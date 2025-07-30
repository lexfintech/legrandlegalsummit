import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';
import { identityURLType } from '../utils';

const Navbar = ({
  navItems,
  ticketLink,
}: {
  navItems: NavItem[];
  ticketLink: string;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null,
  );
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
    window.scrollTo(0, 0);
    if (location.hash) {
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

  // Handle dropdown interactions
  const handleDropdownToggle = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const handleMobileDropdownToggle = (itemName: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === itemName ? null : itemName);
  };

  const handleDropdownClose = () => {
    setOpenDropdown(null);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenDropdown(null);
    };

    if (openDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openDropdown]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
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
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdownItems ? (
                    // Dropdown item
                    <div
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={handleDropdownClose}
                    >
                      <div className="flex items-center">
                        {identityURLType(item.href) === 'external' ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-secondary-main px-3 py-2 text-sm font-medium transition-colors duration-200"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            to={item.href}
                            className="text-white hover:text-secondary-main px-3 py-2 text-sm font-medium transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        )}
                        <button
                          className="text-white hover:text-secondary-main p-1 text-sm font-medium transition-colors duration-200"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleDropdownToggle(item.name);
                          }}
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              openDropdown === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>
                      {openDropdown === item.name && (
                        <div className="absolute top-8 left-0 mt-1 bg-white rounded-md shadow-lg py-1 z-50">
                          {item.dropdownItems.map((dropdownItem) =>
                            identityURLType(dropdownItem.href) ===
                            'external' ? (
                              <a
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block whitespace-nowrap px-4 py-2 text-sm text-gray-700 hover:bg-secondary-main/30 hover:text-primary-main transition-colors duration-200"
                                onClick={handleDropdownClose}
                              >
                                {dropdownItem.name}
                              </a>
                            ) : (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="block whitespace-nowrap px-4 py-2 text-sm text-gray-700 hover:bg-secondary-main/30 hover:text-primary-main transition-colors duration-200"
                                onClick={handleDropdownClose}
                              >
                                {dropdownItem.name}
                              </Link>
                            ),
                          )}
                        </div>
                      )}
                    </div>
                  ) : // Regular item
                  identityURLType(item.href) === 'external' ? (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-secondary-main px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-white whitespace-nowrap hover:text-secondary-main px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              {ticketLink !== '#' && (
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
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdownItems ? (
                    // Mobile dropdown item
                    <div>
                      <div className="flex items-center justify-between">
                        {identityURLType(item.href) === 'external' ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-secondary-main block px-3 py-2 text-base font-medium transition-colors duration-200 flex-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            to={item.href}
                            className="text-white hover:text-secondary-main block px-3 py-2 text-base font-medium transition-colors duration-200 flex-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                        <button
                          className="text-white hover:text-secondary-main p-3 text-base font-medium transition-colors duration-200"
                          onClick={() => handleMobileDropdownToggle(item.name)}
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              mobileOpenDropdown === item.name
                                ? 'rotate-180'
                                : ''
                            }`}
                          />
                        </button>
                      </div>
                      {mobileOpenDropdown === item.name && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.dropdownItems.map((dropdownItem) =>
                            identityURLType(dropdownItem.href) ===
                            'external' ? (
                              <a
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-secondary-main block px-3 py-2 text-sm font-medium transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </a>
                            ) : (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="text-white/80 hover:text-secondary-main block px-3 py-2 text-sm font-medium transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ),
                          )}
                        </div>
                      )}
                    </div>
                  ) : // Regular mobile item
                  identityURLType(item.href) === 'external' ? (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-secondary-main block px-3 py-2 text-base font-medium transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-white hover:text-secondary-main block px-3 py-2 text-base font-medium transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              {ticketLink !== '#' && (
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
