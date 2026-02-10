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
    `relative text-[13px] font-semibold tracking-[0.1em] transition-all duration-500 px-5 py-2 rounded-full overflow-hidden group/link ${isActive
      ? 'text-caribbeanGreen'
      : 'text-stone hover:text-antiFlashWhite'
    }`;

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-3 left-0 right-0 z-50 px-4 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-none">
        <div className="bg-richBlack/50 backdrop-blur-2xl border border-white/10 rounded-full px-5 h-14 flex justify-between items-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5),0_0_20px_rgba(0,204,153,0.05)] ring-1 ring-white/5 relative overflow-hidden pointer-events-auto">
          {/* Top Edge Shine */}
          <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          <NavLink to="/" onClick={handleScrollTop} className="flex items-center space-x-2.5 group shrink-0 relative z-10">
            <div className="relative">
              <img src="/images/favicon.png" alt="Logo" className="w-8 h-8 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-caribbeanGreen/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <span className="font-bold tracking-tighter text-lg text-transparent bg-clip-text bg-gradient-to-r from-caribbeanGreen via-mint to-mountainMeadow group-hover:brightness-125 transition-all hidden sm:block">HAZAN'S GIX</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 relative z-10">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path} className={linkClasses}>
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{item.name.toUpperCase()}</span>
                    {isActive && (
                      <div className="absolute inset-0 bg-caribbeanGreen/10 border border-caribbeanGreen/20 rounded-full animate-fade-in"></div>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone hover:text-antiFlashWhite focus:outline-none p-2 rounded-full hover:bg-white/5 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden mt-3 transition-all duration-500 ease-out ${isOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}`}>
          <div className="bg-richBlack/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-4 shadow-3xl space-y-2 ring-1 ring-white/5">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-300 ${isActive
                    ? 'text-caribbeanGreen bg-caribbeanGreen/10 border border-caribbeanGreen/20'
                    : 'text-stone hover:text-antiFlashWhite hover:bg-white/5'
                  }`
                }
              >
                {item.name.toUpperCase()}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;