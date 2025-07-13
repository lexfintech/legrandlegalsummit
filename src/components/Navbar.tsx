import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const eventLink =
  'https://allevents.in/new-delhi/le-grand-legal-summit-tickets/80003171334744?aff=u1gjbz';
const navItems = [
  { name: 'Home', href: '#home' },
  {
    name: 'Past Events Pictures',
    href: 'https://drive.google.com/drive/folders/1FyAlJl2LwuJ45RXMLBAGFueGZ8tS_zc-?usp=sharing',
  },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Awards', href: 'https://bharatnyayapuraskar.com/' },
  { name: 'Agenda', href: '#agenda' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1B263B] shadow-lg'
          : 'bg-[#1B263B]/90 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img
              src="./images/logos/legrandlegalsummit.png"
              alt="Le Grand Legal Summit"
              className="h-16 w-auto object-contain"
            />
            <h1 className="text-xl md:text-2xl font-bold text-white">
              Le Grand Legal Summit
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith('https://') ? '_blank' : '_self'}
                  rel={
                    item.href.startsWith('https://')
                      ? 'noopener noreferrer'
                      : ''
                  }
                  className="text-white hover:text-[#2E86AB] px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <a
                href={eventLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2E86AB] hover:bg-[#2E86AB]/80 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 hover:transform hover:scale-105"
              >
                Buy Ticket
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#2E86AB] transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1B263B]">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-[#2E86AB] block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href={eventLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2E86AB] hover:bg-[#2E86AB]/80 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 mt-4"
              >
                Buy Ticket
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
export { eventLink };
