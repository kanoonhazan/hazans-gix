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
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="relative mb-16 opacity-0 animate-fade-in-up">
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-caribbeanGreen/5 rounded-full blur-3xl"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-caribbeanGreen via-mint to-mountainMeadow relative z-10 pb-4">
          The Operator's Mindset
        </h1>
        <p className="text-xl text-stone/80 max-w-2xl">
          Why I build across the entire stack.
        </p>
      </div>

      {/* Main Content - Narrative */}
      <div className="space-y-8 text-lg text-stone leading-relaxed mb-24 opacity-0 animate-fade-in-up delay-100">
        <p>
          My background spans <span className="text-antiFlashWhite font-medium">mechatronics</span>, <span className="text-antiFlashWhite font-medium">product design</span>, and <span className="text-antiFlashWhite font-medium">software development</span>. To some, this looks like a lack of focus. To me, it’s the only way to build things that actually work.
        </p>
        <p>
          I’ve seen excellent code written for hardware that couldn't support it. I’ve seen beautiful interfaces designed for users who were wearing thick safety gloves. <span className="text-antiFlashWhite">Isolation is the enemy of reliability.</span>
        </p>

        <div className="bg-gradient-to-r from-darkGreen/40 to-transparent border-l-4 border-caribbeanGreen pl-8 py-6 my-10 rounded-r-2xl transform hover:translate-x-1 transition-transform duration-300">
          <p className="text-antiFlashWhite font-medium italic text-xl">
            "I operate at the intersection—where constraints are real, and every decision has a trade-off."
          </p>
        </div>

        <p>
          I don't just hand off a design. I don't just push code. I own the outcome. Whether it's optimizing a robotics fleet or refining a mobile checkout flow, I care about the total system performance.
        </p>
      </div>

      {/* Technical Proficiency Grid */}
      <div className="mb-24 opacity-0 animate-fade-in-up delay-200">
        <h2 className="text-2xl font-bold text-antiFlashWhite mb-8 flex items-center">
          <Database className="w-5 h-5 mr-3 text-caribbeanGreen" /> Technical Toolbox
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skillGroup, idx) => (
            <div key={skillGroup.category} className="bg-richBlack/50 border border-darkGreen rounded-2xl p-6 hover:border-caribbeanGreen/30 transition-colors group">
              <div className="flex items-center mb-4 text-antiFlashWhite font-semibold">
                <skillGroup.icon className="w-5 h-5 mr-2 text-caribbeanGreen group-hover:scale-110 transition-transform" />
                {skillGroup.category}
              </div>
              <ul className="space-y-2">
                {skillGroup.items.map(item => (
                  <li key={item} className="text-sm text-stone flex items-center">
                    <span className="w-1 h-1 bg-stone/50 rounded-full mr-2 group-hover:bg-caribbeanGreen transition-colors"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Principles Section */}
      <div className="mb-24 opacity-0 animate-fade-in-up delay-200">
        <h2 className="text-2xl font-bold text-antiFlashWhite mb-8 pb-4 border-b border-darkGreen flex items-center">
          <Hexagon className="w-5 h-5 mr-3 text-caribbeanGreen" /> Principles I Work By
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle, idx) => (
            <div key={idx} className="bg-gradient-to-br from-darkGreen to-richBlack p-6 rounded-2xl border border-bangladeshGreen/30 hover:border-caribbeanGreen/30 hover:bg-darkGreen/80 transition-all duration-300 flex items-start group relative overflow-hidden">
              <div className="absolute inset-0 bg-caribbeanGreen/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CheckCircle className="w-6 h-6 text-mountainMeadow mr-4 shrink-0 mt-1 group-hover:text-caribbeanGreen transition-colors relative z-10" />
              <span className="text-lg text-stone font-medium group-hover:text-antiFlashWhite transition-colors relative z-10">{principle}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-darkGreen to-richBlack border border-bangladeshGreen/30 rounded-3xl p-12 text-center opacity-0 animate-fade-in-up delay-300 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,204,153,0.03)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s] duration-0 group-hover:bg-[position:200%_0,0_0] group-hover:duration-[1500ms]"></div>
        <h2 className="text-3xl font-bold text-antiFlashWhite mb-6 relative z-10">Interested in how I think?</h2>
        <div className="flex justify-center gap-4 relative z-10">
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