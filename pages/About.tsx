import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { CheckCircle, Hexagon, Code, Cpu, PenTool, Database } from 'lucide-react';

const About: React.FC = () => {
  const principles = [
    "Start with the problem, not the tool",
    "Design for reality, not ideal scenarios",
    "Optimize for clarity before complexity",
    "Build systems people can trust"
  ];

  const skills = [
    { category: "Engineering", icon: Cpu, items: ["System Architecture", "Mechatronics", "Embedded Systems (C/C++)", "IoT Protocols (MQTT/CoAP)"] },
    { category: "Web & Mobile", icon: Code, items: ["React / TypeScript", "React Native", "Node.js", "Tailwind CSS"] },
    { category: "Product", icon: PenTool, items: ["UI/UX Strategy", "Prototyping (Figma)", "User Research", "Agile Management"] }
  ];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Hero Section - Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-32">
        {/* Left: Text */}
        <div className="lg:col-span-7 opacity-0 animate-fade-in-up">
          <div className="relative mb-8">
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-caribbeanGreen/5 rounded-full blur-3xl"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-caribbeanGreen via-mint to-mountainMeadow relative z-10 pb-4 leading-tight">
              The Operator’s<br /> Mindset.
            </h1>
          </div>
          <div className="space-y-6 text-xl text-stone/90 leading-relaxed">
            <p>
              My background spans <span className="text-antiFlashWhite font-medium">mechatronics</span>, <span className="text-antiFlashWhite font-medium">product design</span>, and <span className="text-antiFlashWhite font-medium">software development</span>. To some, this looks like a lack of focus. To me, it’s the only way to build things that actually work.
            </p>
            <p>
              I don't just hand off a design. I don't just push code. <span className="text-caribbeanGreen font-bold">I own the outcome.</span> Whether it's optimizing a robotics fleet or refining a mobile checkout flow, I care about the total system performance.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="lg:col-span-5 opacity-0 animate-fade-in-up delay-150 relative group">
          <div className="absolute inset-0 bg-caribbeanGreen/20 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
          <div className="relative rounded-3xl overflow-hidden border border-darkGreen shadow-2xl shadow-caribbeanGreen/10 aspect-[4/5] bg-richBlack">
            <img
              src="/images/HeroImage.jpg"
              alt="Hazan working on code"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-richBlack/80 to-transparent opacity-60"></div>
            <div className="absolute bottom-6 left-6 text-antiFlashWhite font-mono text-sm">
              <span className="text-caribbeanGreen">●</span> SYSTEM_READY
            </div>
          </div>
        </div>
      </div>

      {/* Quote Break */}
      <div className="max-w-4xl mx-auto mb-32 opacity-0 animate-fade-in-up delay-200">
        <div className="bg-gradient-to-r from-darkGreen/20 to-transparent border-l-4 border-caribbeanGreen pl-8 py-8 rounded-r-2xl">
          <p className="text-2xl md:text-3xl text-antiFlashWhite font-medium italic leading-relaxed">
            "I operate at the intersection—where constraints are real, and every decision has a trade-off. Isolation is the enemy of reliability."
          </p>
        </div>
      </div>

      {/* Principles Section */}
      <div className="mb-32 opacity-0 animate-fade-in-up delay-300">
        <h2 className="text-3xl font-bold text-antiFlashWhite mb-12 flex items-center justify-center">
          <Hexagon className="w-6 h-6 mr-3 text-caribbeanGreen" /> Principles I Work By
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {principles.map((principle, idx) => (
            <div key={idx} className="bg-gradient-to-br from-darkGreen/20 to-richBlack p-8 rounded-2xl border border-darkGreen/50 hover:border-caribbeanGreen/40 hover:translate-y-[-4px] transition-all duration-300 flex items-start group relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-caribbeanGreen/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-5xl font-bold text-darkGreen/30 absolute right-4 bottom-4 group-hover:text-caribbeanGreen/10 transition-colors">{idx + 1}</span>

              <div className="relative z-10 flex items-start">
                <CheckCircle className="w-6 h-6 text-mountainMeadow mr-4 shrink-0 mt-1 group-hover:text-caribbeanGreen transition-colors" />
                <span className="text-xl text-stone font-medium group-hover:text-white transition-colors leading-relaxed">{principle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Proficiency Grid */}
      <div className="mb-32 opacity-0 animate-fade-in-up delay-300">
        <div className="flex items-center justify-between mb-12 border-b border-darkGreen pb-6">
          <h2 className="text-3xl font-bold text-antiFlashWhite flex items-center">
            <Database className="w-6 h-6 mr-3 text-caribbeanGreen" /> Technical Toolbox
          </h2>
          <span className="hidden md:block text-stone font-mono text-sm">STACK_OVERVIEW</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <div key={skillGroup.category} className="bg-richBlack/50 border border-darkGreen/50 rounded-2xl p-8 hover:border-caribbeanGreen/50 hover:bg-darkGreen/10 transition-all duration-300 group">
              <div className="flex items-center mb-6 text-antiFlashWhite font-bold text-xl">
                <div className="p-3 bg-darkGreen/30 rounded-lg mr-4 group-hover:text-caribbeanGreen transition-colors">
                  <skillGroup.icon className="w-6 h-6" />
                </div>
                {skillGroup.category}
              </div>
              <ul className="space-y-4">
                {skillGroup.items.map(item => (
                  <li key={item} className="text-stone flex items-center group-hover:text-antiFlashWhite transition-colors">
                    <span className="w-1.5 h-1.5 bg-stone/30 rounded-full mr-3 group-hover:bg-caribbeanGreen transition-colors"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>


      {/* CTA */}
      <div className="bg-gradient-to-br from-darkGreen to-richBlack border border-bangladeshGreen/30 rounded-3xl p-16 text-center opacity-0 animate-fade-in-up delay-500 shadow-2xl relative overflow-hidden group max-w-5xl mx-auto">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,204,153,0.03)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s] duration-0 group-hover:bg-[position:200%_0,0_0] group-hover:duration-[1500ms]"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-antiFlashWhite mb-8 relative z-10">Interested in how I think?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
          <Link to="/work">
            <Button variant="secondary" className="w-full sm:w-auto justify-center">View Work</Button>
          </Link>
          <Link to="/contact">
            <Button variant="primary" icon className="w-full sm:w-auto justify-center">Let's Talk</Button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default About;