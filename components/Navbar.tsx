import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'UI/UX', path: '/work/ui-ux' },
    { name: 'Mechatronics', path: '/work/mechatronics' },
    { name: 'Software', path: '/work/software' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium tracking-wide transition-colors duration-200 ${isActive ? 'text-caribbeanGreen' : 'text-stone hover:text-antiFlashWhite'
    }`;

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-richBlack/80 backdrop-blur-md border-b border-darkGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" onClick={handleScrollTop} className="flex items-center space-x-2 group">
            <img src="/images/favicon.png" alt="Hazan's Gix Logo" className="w-8 h-8 object-contain" />
            <span className="font-bold tracking-tight text-lg text-transparent bg-clip-text bg-gradient-to-r from-caribbeanGreen to-mountainMeadow group-hover:brightness-110 transition-all">HAZAN'S GIX</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path} className={linkClasses}>
                {item.name.toUpperCase()}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone hover:text-antiFlashWhite focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-richBlack border-b border-darkGreen">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive
                    ? 'text-caribbeanGreen bg-darkGreen'
                    : 'text-stone hover:text-antiFlashWhite hover:bg-darkGreen/50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;