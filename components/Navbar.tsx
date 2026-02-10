import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
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
    <nav className="fixed top-3 left-0 right-0 z-50 px-4 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <div className="bg-richBlack/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex justify-between items-center shadow-2xl shadow-caribbeanGreen/5">
          <NavLink to="/" onClick={handleScrollTop} className="flex items-center space-x-2 group shrink-0">
            <img src="/images/favicon.png" alt="Hazan's Gix Logo" className="w-8 h-8 object-contain" />
            <span className="font-bold tracking-tight text-lg text-transparent bg-clip-text bg-gradient-to-r from-caribbeanGreen to-mountainMeadow group-hover:brightness-110 transition-all hidden sm:block">HAZAN'S GIX</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
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
              className="text-stone hover:text-antiFlashWhite focus:outline-none p-1"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden mt-3 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="bg-richBlack/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 shadow-2xl space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-3 rounded-2xl text-base font-medium transition-all ${isActive
                    ? 'text-caribbeanGreen bg-white/5 shadow-inner shadow-caribbeanGreen/10'
                    : 'text-stone hover:text-antiFlashWhite hover:bg-white/5'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;