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

  const [activeTab, setActiveTab] = React.useState('Product Design (UX / UI)');

  const toolboxData = {
    'Product Design (UX / UI)': {
      icon: PenTool,
      description: 'Engineering-led design focusing on high-density information architecture and safety-critical HMI.',
      stats: [
        { label: 'Usability Standards', value: 'IEC 62366' },
        { label: 'Prototyping Speed', value: 'High-Fidelity' },
      ],
      methodologies: ['Heuristic Evaluation', 'Atomic Design Systems', 'User Journey Mapping', 'Cognitive Walkthrough'],
      techStack: ['Figma (Advanced)', 'Protopie', 'Storybook', 'Adobe Suite'],
      focus: 'Human-Machine Interface (HMI)',
      highlight: 'Specializing in reducing cognitive load for operators in high-stress, safety-critical environments.'
    },
    'Mechatronics & Automation': {
      icon: Cpu,
      description: 'Low-latency control systems and hardware-software integration for industrial robotics.',
      stats: [
        { label: 'Control Latency', value: '< 10ms' },
        { label: 'Protocols', value: 'CAN, EtherCAT' },
      ],
      methodologies: ['PID Control Tuning', 'Finite State Machines', 'Sensor Fusion (Kalman)', 'DFM/DFA'],
      techStack: ['C/C++ (Embedded)', 'SolidWorks', 'Altium Designer', 'ROS2'],
      focus: 'Distributed Robotics Fleet',
      highlight: 'Resolving traffic orchestration and deadlock issues in warehouse automation through decentralized logic.'
    },
    'Software & Mobile Apps': {
      icon: Code,
      description: 'Building resilient, distributed architectures that handle high concurrency and real-time data.',
      stats: [
        { label: 'Architecture', value: 'Micro-services' },
        { label: 'Data Sync', value: 'WebSockets' },
      ],
      methodologies: ['TDD / BDD', 'CI/CD Pipelines', 'REST/GraphQL Design', 'Cloud-Native Scalability'],
      techStack: ['React / Next.js', 'TypeScript', 'Node.js (Bun)', 'PostgreSQL / Redis'],
      focus: 'High-Performance Systems',
      highlight: 'Developing secure, scalable foundations for hardware-integrated software and mobile platforms.'
    }
  };

  const categories = Object.keys(toolboxData) as Array<keyof typeof toolboxData>;

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

      {/* Technical Proficiency Playground */}
      <div className="mb-20 md:mb-32 opacity-0 animate-fade-in-up delay-300 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-antiFlashWhite flex items-center mb-2">
              <Database className="w-6 h-6 mr-3 text-caribbeanGreen" /> Technical Toolbox
            </h2>
            <p className="text-stone/60 text-sm font-mono uppercase tracking-widest">Cross-disciplinary Engineering Stack</p>
          </div>
          <div className="hidden lg:flex items-center space-x-4 text-[10px] font-mono text-caribbeanGreen/40">
            <span>READY://STABLE</span>
            <div className="w-2 h-2 bg-caribbeanGreen rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Console Switcher - Sticky */}
        <div className="sticky top-[64px] z-40 mb-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 pointer-events-none">
          <div className="max-w-6xl mx-auto pointer-events-auto">
            <div className="bg-richBlack/50 backdrop-blur-2xl border border-white/10 rounded-full px-5 py-2.5 flex justify-between items-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5),0_0_20px_rgba(0,204,153,0.05)] ring-1 ring-white/5 relative overflow-hidden">
              {/* Top Edge Shine */}
              <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              <div className="grid grid-cols-3 gap-1 md:gap-1.5 w-full relative z-10">
                {categories.map((cat, idx) => {
                  const Icon = toolboxData[cat].icon;
                  const isActive = activeTab === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveTab(cat)}
                      className={`relative flex flex-row items-center justify-center md:justify-start gap-1.5 md:gap-4 px-3 md:px-5 py-2 rounded-full transition-all duration-500 group/link overflow-hidden ${isActive
                        ? 'text-caribbeanGreen'
                        : 'text-stone hover:text-antiFlashWhite'
                        }`}
                    >
                      <div className={`p-1.5 rounded-lg transition-colors shrink-0 relative z-10 ${isActive ? 'bg-caribbeanGreen/10' : 'bg-darkGreen/20 text-caribbeanGreen group-hover/link:bg-caribbeanGreen group-hover/link:text-richBlack'}`}>
                        <Icon className="w-3.5 h-3.5 md:w-5 md:h-5" />
                      </div>
                      <div className="text-center md:text-left truncate relative z-10">
                        <span className="block text-[8px] md:text-[10px] font-mono opacity-50 leading-none mb-0.5 hidden sm:block">MODE_0{idx + 1}</span>
                        <span className="text-[11px] md:text-[13px] font-semibold uppercase tracking-[0.1em] block truncate">
                          {cat.split(' (')[0].replace('Mechatronics & ', '').replace('Software & ', '').replace('Product ', '')}
                        </span>
                      </div>

                      {isActive && (
                        <div className="absolute inset-0 bg-caribbeanGreen/10 border border-caribbeanGreen/20 rounded-full animate-fade-in"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Content: Flexible Bento Grid */}
        <div key={activeTab} className="grid grid-cols-1 md:grid-cols-12 gap-6 transition-all duration-500 animate-fade-in-blur">

          {/* Main Context Card */}
          <div className="md:col-span-8 bg-gradient-to-br from-darkGreen/30 to-richBlack p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-white/5 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-caribbeanGreen/5 rounded-full blur-[120px]"></div>

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 mb-8 md:mb-10">
                <div className="p-4 bg-caribbeanGreen/10 rounded-2xl border border-caribbeanGreen/20 w-fit">
                  {React.createElement(toolboxData[activeTab as keyof typeof toolboxData].icon, { className: "w-7 h-7 md:w-8 md:h-8 text-caribbeanGreen" })}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-antiFlashWhite mb-2">{activeTab}</h3>
                  <div className="flex flex-wrap gap-2">
                    {toolboxData[activeTab as keyof typeof toolboxData].stats.map(stat => (
                      <div key={stat.label} className="text-[10px] font-mono text-caribbeanGreen bg-caribbeanGreen/5 px-2.5 py-1 rounded-md border border-caribbeanGreen/10">
                        {stat.label.toUpperCase()}: {stat.value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-xl md:text-2xl text-stone leading-relaxed mb-8 md:mb-12 max-w-3xl">
                {toolboxData[activeTab as keyof typeof toolboxData].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                <div>
                  <h4 className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-caribbeanGreen mb-4 md:mb-6">Core Methodologies</h4>
                  <ul className="space-y-3 md:space-y-4">
                    {toolboxData[activeTab as keyof typeof toolboxData].methodologies.map(m => (
                      <li key={m} className="flex items-center text-antiFlashWhite/90 text-sm md:text-base font-medium">
                        <div className="w-1.5 h-1.5 bg-caribbeanGreen rounded-full mr-4 shadow-[0_0_8px_rgba(0,204,153,0.5)]"></div>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/5">
                  <h4 className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-stone/50 mb-3 md:mb-4">Focus Outcome</h4>
                  <p className="text-stone leading-relaxed text-base md:text-lg">
                    {toolboxData[activeTab as keyof typeof toolboxData].highlight}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-10 md:mt-16 pt-6 md:pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-stone/40 font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase">Specialization Depth</span>
              <span className="text-caribbeanGreen font-bold tracking-tight text-base md:text-lg">{toolboxData[activeTab as keyof typeof toolboxData].focus}</span>
            </div>
          </div>

          {/* Side Column: Stack & Insight */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-richBlack border border-white/10 rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 flex flex-col group hover:border-caribbeanGreen/30 transition-all duration-500 shadow-xl min-h-[300px]">
              <h4 className="text-lg font-bold text-antiFlashWhite mb-6 md:mb-8 flex items-center justify-between">
                Production Stack
                <div className="flex space-x-1.5">
                  {[1, 2, 3].map(i => <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-caribbeanGreen animate-pulse' : 'bg-white/10'}`}></div>)}
                </div>
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                {toolboxData[activeTab as keyof typeof toolboxData].techStack.map(tech => (
                  <div key={tech} className="flex items-center p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl border border-transparent group-hover:border-white/5 group-hover:bg-darkGreen/10 transition-all text-sm md:text-base">
                    <span className="text-antiFlashWhite/75 font-medium truncate">{tech}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/5">
                <p className="text-xs md:text-sm text-stone/60 italic leading-relaxed">
                  Prioritizing tools that offer the highest "Clarity-to-Complexity" ratio for the end operator.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-darkGreen to-richBlack p-px rounded-3xl md:rounded-[2.5rem] shadow-2xl">
              <div className="bg-richBlack rounded-[calc(1.5rem-1px)] md:rounded-[calc(2.5rem-1px)] p-6 md:p-8">
                <span className="text-[9px] md:text-[10px] font-mono text-caribbeanGreen uppercase tracking-widest block mb-3 md:mb-4">Philosophy</span>
                <p className="text-antiFlashWhite/80 text-xs md:text-sm leading-relaxed italic">
                  "I build for those who need to understand the system at a glance, not just those who built it."
                </p>
              </div>
            </div>
          </div>
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