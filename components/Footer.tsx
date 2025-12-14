import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-richBlack border-t border-darkGreen py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-stone font-mono text-sm">© {new Date().getFullYear()} Hazan's Gix. All rights reserved.</span>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/kanoon-hazan" target="_blank" rel="noopener noreferrer" className="text-stone hover:text-caribbeanGreen text-sm transition-colors">LinkedIn</a>
          <a href="https://github.com/kanoonhazan" target="_blank" rel="noopener noreferrer" className="text-stone hover:text-caribbeanGreen text-sm transition-colors">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-stone hover:text-caribbeanGreen text-sm transition-colors">Instagram</a>
          <a href="/#/login" className="text-stone/50 hover:text-caribbeanGreen text-xs transition-colors ml-4 border-l border-stone/20 pl-4">Admin</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;