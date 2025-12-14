import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { CheckCircle, Hexagon } from 'lucide-react';

const About: React.FC = () => {
  const principles = [
    "Start with the problem, not the tool",
    "Design for reality, not ideal scenarios",
    "Optimize for clarity before complexity",
    "Build systems people can trust"
  ];

  return (
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="relative mb-12 opacity-0 animate-fade-in-up">
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-caribbeanGreen/5 rounded-full blur-3xl"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-caribbeanGreen via-mint to-mountainMeadow relative z-10 pb-2">
          About
        </h1>
      </div>

      {/* Main Content */}
      <div className="space-y-8 text-lg md:text-xl text-stone leading-relaxed mb-20 opacity-0 animate-fade-in-up delay-100">
        <p>
          My background spans mechatronics, product design, and software development—not because I wanted to do everything, but because modern products demand systems thinking.
        </p>
        <p>
          I’ve seen technically sound solutions fail due to poor usability. <br/>
          I’ve seen beautiful interfaces break under real-world constraints.
        </p>
        
        <div className="bg-gradient-to-r from-darkGreen/40 to-transparent border-l-4 border-caribbeanGreen pl-6 py-4 my-8 rounded-r-lg">
          <p className="text-antiFlashWhite font-medium">
            That’s why my focus sits at the intersection—where decisions hold up across hardware, software, and human behavior.
          </p>
        </div>

        <p>
          I care less about trends and more about:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-antiFlashWhite font-medium">
            <li className="flex items-center bg-darkGreen/50 px-4 py-3 rounded-lg border border-bangladeshGreen/30 hover:border-caribbeanGreen/50 transition-colors">
                <span className="w-2 h-2 bg-caribbeanGreen rounded-full mr-3 shadow-[0_0_8px_rgba(0,204,153,0.5)]"></span> Clarity
            </li>
            <li className="flex items-center bg-darkGreen/50 px-4 py-3 rounded-lg border border-bangladeshGreen/30 hover:border-caribbeanGreen/50 transition-colors">
                <span className="w-2 h-2 bg-caribbeanGreen rounded-full mr-3 shadow-[0_0_8px_rgba(0,204,153,0.5)]"></span> Reliability
            </li>
            <li className="flex items-center bg-darkGreen/50 px-4 py-3 rounded-lg border border-bangladeshGreen/30 hover:border-caribbeanGreen/50 transition-colors">
                <span className="w-2 h-2 bg-caribbeanGreen rounded-full mr-3 shadow-[0_0_8px_rgba(0,204,153,0.5)]"></span> Long-term impact
            </li>
        </ul>

        <p className="pt-4">
          I enjoy working on problems where the answer isn’t obvious, constraints are real, and decisions matter.
        </p>
      </div>

      {/* Principles Section */}
      <div className="mb-20 opacity-0 animate-fade-in-up delay-200">
        <h2 className="text-2xl font-bold text-antiFlashWhite mb-8 pb-4 border-b border-darkGreen flex items-center">
          <Hexagon className="w-5 h-5 mr-3 text-caribbeanGreen" /> Principles I Work By
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle, idx) => (
            <div key={idx} className="bg-gradient-to-br from-darkGreen to-richBlack p-6 rounded-2xl border border-bangladeshGreen/30 hover:border-caribbeanGreen/30 transition-colors flex items-start group">
               <CheckCircle className="w-6 h-6 text-mountainMeadow mr-4 shrink-0 mt-1 group-hover:text-caribbeanGreen transition-colors" />
               <span className="text-lg text-stone font-medium group-hover:text-antiFlashWhite transition-colors">{principle}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA - Keeping consistent with other pages */}
      <div className="bg-gradient-to-br from-darkGreen to-richBlack border border-bangladeshGreen/30 rounded-3xl p-10 text-center opacity-0 animate-fade-in-up delay-300 shadow-xl">
         <h2 className="text-2xl font-bold text-antiFlashWhite mb-4">Interested in how I think?</h2>
         <div className="flex justify-center gap-4">
            <Link to="/work">
              <Button variant="secondary">View Work</Button>
            </Link>
            <Link to="/contact">
              <Button variant="primary" icon>Let's Talk</Button>
            </Link>
         </div>
      </div>

    </div>
  );
};

export default About;