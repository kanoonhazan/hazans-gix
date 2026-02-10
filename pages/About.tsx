import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { CheckCircle, Hexagon, Code, Cpu, PenTool, Database, User, Flag, Calendar, MapPin, Phone, Mail, MessageSquare, BookOpen } from 'lucide-react';

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
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-antiFlashWhite relative z-10 pb-2 md:pb-4 leading-tight tracking-tight">
              hey, this is <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbeanGreen via-mint to-mountainMeadow">Hazan.</span>
            </h1>
          </div>

          <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-stone/90 leading-relaxed mt-6 md:mt-10">
            <p className="border-l-2 border-caribbeanGreen/30 pl-4 md:pl-6 italic">
              My background spans <span className="text-antiFlashWhite font-medium">mechatronics</span>, <span className="text-antiFlashWhite font-medium">product design</span>, and <span className="text-antiFlashWhite font-medium">software development</span>. To some, this looks like a lack of focus. To me, it’s the only way to build things that actually work.
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4 border-t border-white/5">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone/40 block">Location</span>
                <p className="text-sm md:text-base font-bold text-antiFlashWhite">Mannar, Sri Lanka</p>
              </div>
              <div className="space-y-1 text-right">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone/40 block">Nationality</span>
                <p className="text-sm md:text-base font-bold text-antiFlashWhite">Sri Lankan</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone/40 block">Born</span>
                <p className="text-sm md:text-base font-bold text-antiFlashWhite">22 Dec 2000</p>
              </div>
              <div className="space-y-1 text-right">
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone/40 block">Email</span>
                <p className="text-sm md:text-base font-bold text-antiFlashWhite truncate">kanoonhazan@gmail.com</p>
              </div>
              <div className="space-y-1 pt-2 col-span-2 border-t border-white/5 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-stone/40">Phone / WhatsApp</span>
                    <p className="text-sm md:text-base font-bold text-caribbeanGreen">+94 75 808 9209</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <a href="mailto:kanoonhazan@gmail.com" className="p-2 bg-white/5 rounded-lg text-caribbeanGreen hover:bg-caribbeanGreen hover:text-richBlack transition-all">
                    <Mail className="w-4 h-4" />
                  </a>
                  <a href="https://wa.me/94758089209" className="p-2 bg-white/5 rounded-lg text-caribbeanGreen hover:bg-caribbeanGreen hover:text-richBlack transition-all">
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="lg:col-span-5 opacity-0 animate-fade-in-up delay-150 relative group max-w-[280px] sm:max-w-md mx-auto lg:max-w-none w-full">
          <div className="absolute inset-0 bg-caribbeanGreen/20 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
          <div className="relative rounded-3xl overflow-hidden border border-darkGreen shadow-2xl shadow-caribbeanGreen/10 aspect-[4/5] lg:aspect-[4/5] bg-richBlack">
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



      {/* Education Section */}
      <div className="mb-20 md:mb-32 opacity-0 animate-fade-in-up delay-[250ms]">
        <h2 className="text-2xl md:text-3xl font-bold text-antiFlashWhite mb-8 md:mb-12 flex items-center justify-center">
          <BookOpen className="w-5 h-5 md:w-6 md:h-6 mr-3 text-caribbeanGreen" /> Education
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-gradient-to-br from-darkGreen/10 to-richBlack border border-white/5 rounded-3xl p-8 md:p-10 relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Cpu className="w-20 h-20 text-caribbeanGreen" />
            </div>
            <div className="relative z-10 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-caribbeanGreen/10 border border-caribbeanGreen/20 mb-6 font-mono text-[10px] text-caribbeanGreen uppercase tracking-widest">
                Degree Program
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-antiFlashWhite mb-1">B.Sc. in Science & Technology</h3>
              <p className="text-caribbeanGreen font-bold text-lg mb-6">Specialization: Mechatronics</p>
              <p className="text-stone/50 font-medium mb-3">Uva Wellassa University of Sri Lanka</p>
              <div className="space-y-4 text-stone/80 text-base md:text-lg leading-relaxed border-l-2 border-caribbeanGreen/20 pl-6">
                <p>Focused on embedded systems, automation, control, and applied engineering.</p>
                <div className="flex items-center space-x-2 text-sm font-mono text-stone/40">
                  <Calendar className="w-4 h-4" />
                  <span>Graduating 2025</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-richBlack/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-8 italic text-stone/70 text-sm md:text-base leading-relaxed relative overflow-hidden group text-center">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-caribbeanGreen/50 to-transparent"></div>
            "Along the way, I deliberately stacked product design, UI/UX, and software skills to avoid becoming a one-dimensional engineer."
          </div>
        </div>
      </div>

      {/* Principles Section */}
      <div className="mb-20 md:mb-32 opacity-0 animate-fade-in-up delay-300">
        <h2 className="text-2xl md:text-3xl font-bold text-antiFlashWhite mb-8 md:mb-12 flex items-center justify-center">
          <Hexagon className="w-5 h-5 md:w-6 md:h-6 mr-3 text-caribbeanGreen" /> Principles I Work By
        </h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {principles.map((principle, idx) => (
            <div key={idx} className="bg-gradient-to-br from-darkGreen/20 to-richBlack p-6 md:p-8 rounded-2xl border border-darkGreen/50 hover:border-caribbeanGreen/40 hover:translate-y-[-4px] transition-all duration-300 flex items-start group relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-caribbeanGreen/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-4xl md:text-5xl font-bold text-darkGreen/30 absolute right-4 bottom-4 group-hover:text-caribbeanGreen/10 transition-colors">{idx + 1}</span>

              <div className="relative z-10 flex items-start">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-mountainMeadow mr-3 md:mr-4 shrink-0 mt-1 group-hover:text-caribbeanGreen transition-colors" />
                <span className="text-lg md:text-xl text-stone font-medium group-hover:text-white transition-colors leading-relaxed">{principle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Proficiency Playground */}
      <div className="mb-20 md:mb-32 opacity-0 animate-fade-in-up delay-300 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/5 pb-10 gap-6">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-12 bg-caribbeanGreen rounded-full hidden md:block"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-antiFlashWhite flex items-center mb-3">
              Technical Toolbox
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Rail - Selection Console */}
          <div className="lg:col-span-3 xl:col-span-2 lg:sticky lg:top-32 z-30">
            <div className="hidden lg:block mb-4">
              <p className="text-[9px] font-mono text-stone/30 uppercase tracking-[0.4em]">Select Domain</p>
            </div>

            <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 md:gap-3">
              {categories.map((cat) => {
                const Icon = toolboxData[cat].icon;
                const isActive = activeTab === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`relative w-full text-center p-3 md:p-5 rounded-xl md:rounded-2xl border transition-all duration-500 group overflow-hidden ${isActive
                      ? 'bg-caribbeanGreen/10 border-caribbeanGreen/40 shadow-lg shadow-caribbeanGreen/5'
                      : 'bg-richBlack/40 border-white/5 hover:border-white/10 text-stone hover:text-antiFlashWhite'
                      }`}
                  >
                    <div className="flex flex-col items-center text-center space-y-2 md:space-y-3 relative z-10">
                      <div className={`p-2 md:p-3 rounded-lg md:rounded-xl transition-all duration-500 ${isActive ? 'bg-caribbeanGreen text-richBlack ring-2 md:ring-4 ring-caribbeanGreen/20' : 'bg-white/5 text-caribbeanGreen/60 group-hover:text-caribbeanGreen'
                        }`}>
                        <Icon className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                      </div>
                      <div className="min-w-0">
                        <h4 className={`text-[10px] md:text-xs font-bold leading-tight transition-colors ${isActive ? 'text-caribbeanGreen' : 'text-stone/60 group-hover:text-stone'}`}>
                          {cat.split(' (')[0].replace('Mechatronics & ', '').replace('Software & ', '').replace('Product ', '')}
                        </h4>
                      </div>
                    </div>

                    {/* Background Shine */}
                    {isActive && (
                      <div className="absolute -right-4 -bottom-4 w-16 md:w-24 h-16 md:h-24 bg-caribbeanGreen/5 rounded-full blur-2xl"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Area - Main Interface */}
          <div className="lg:col-span-9 xl:col-span-10">
            <div key={activeTab} className="animate-fade-in-blur transition-all duration-700">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* 1. Header Card - Context & Title */}
                <div className="md:col-span-12 xl:col-span-8 bg-gradient-to-br from-darkGreen/20 to-richBlack border border-white/5 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group shadow-2xl min-h-[340px] flex flex-col justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[length:24px_24px] pointer-events-none"></div>
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-caribbeanGreen/5 via-transparent to-transparent opacity-60"></div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center space-x-3 mb-8 px-4 py-2 bg-white/5 border border-white/5 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-caribbeanGreen animate-pulse"></div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-caribbeanGreen/80">Active Configuration: {activeTab}</span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-extrabold text-antiFlashWhite mb-6 tracking-tight">
                      {activeTab}
                    </h3>

                    <p className="text-xl md:text-2xl text-stone/90 leading-relaxed max-w-4xl font-light">
                      {toolboxData[activeTab as keyof typeof toolboxData].description}
                    </p>
                  </div>
                </div>

                {/* 2. Production Stack Card */}
                <div className="md:col-span-6 xl:col-span-4 bg-richBlack border border-white/5 rounded-[2.5rem] p-8 flex flex-col group hover:border-caribbeanGreen/20 transition-all duration-500 shadow-xl overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-caribbeanGreen/30 to-transparent -translate-y-1 group-hover:translate-y-[500px] transition-transform duration-[3000ms] ease-in-out"></div>

                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-lg font-bold text-antiFlashWhite flex items-center">
                      Production Stack
                    </h4>
                    <Code className="w-5 h-5 text-caribbeanGreen/40" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {toolboxData[activeTab as keyof typeof toolboxData].techStack.map(tech => (
                      <div key={tech} className="flex items-center p-3 bg-white/5 rounded-xl border border-transparent hover:border-caribbeanGreen/10 hover:bg-caribbeanGreen/5 transition-all group/tech">
                        <span className="text-antiFlashWhite/75 text-[12px] font-medium truncate">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Methodologies Card (01) */}
                <div className="md:col-span-6 xl:col-span-4 bg-gradient-to-br from-darkGreen/10 to-richBlack border border-white/5 p-8 rounded-[2.5rem] relative group overflow-hidden">
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-caribbeanGreen mb-8 flex items-center">
                    <span className="mr-3">01</span> Methodologies
                  </h4>
                  <div className="space-y-4">
                    {toolboxData[activeTab as keyof typeof toolboxData].methodologies.map((m) => (
                      <div key={m} className="flex items-center text-antiFlashWhite group/item">
                        <div className="w-6 h-px bg-caribbeanGreen/20 group-hover/item:bg-caribbeanGreen/60 transition-all duration-500 mr-4"></div>
                        <span className="text-sm font-medium opacity-80 group-hover/item:opacity-100 transition-opacity">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Focus Outcome Card (02) */}
                <div className="md:col-span-6 xl:col-span-4 bg-richBlack/40 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/10 relative group/focus">
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-caribbeanGreen/5 rounded-full blur-2xl group-hover/focus:bg-caribbeanGreen/10 transition-all"></div>
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-stone/40 mb-6 flex items-center">
                    <span className="mr-3 text-caribbeanGreen">02</span> Focus Outcome
                  </h4>
                  <p className="text-stone/80 leading-relaxed text-base md:text-lg italic font-light relative z-10 mb-8">
                    "{toolboxData[activeTab as keyof typeof toolboxData].highlight}"
                  </p>
                  <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-end">
                    <div>
                      <span className="block text-[10px] font-mono text-stone/30 uppercase tracking-widest mb-1">Impact</span>
                      <span className="text-caribbeanGreen font-bold text-lg">{toolboxData[activeTab as keyof typeof toolboxData].stats[0].value}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] font-mono text-stone/30 uppercase tracking-widest mb-1">Domain</span>
                      <span className="text-antiFlashWhite/60 font-medium text-xs">{toolboxData[activeTab as keyof typeof toolboxData].focus}</span>
                    </div>
                  </div>
                </div>

                {/* 5. System LOG Card */}
                <div className="md:col-span-6 xl:col-span-4 bg-darkGreen/5 border border-darkGreen/10 rounded-[2.5rem] p-8 flex flex-col justify-center relative group">
                  <div className="absolute top-6 right-8">
                    <div className="flex space-x-1">
                      {[1, 2, 3].map(i => <div key={i} className={`w-1 h-1 rounded-full ${i === 1 ? 'bg-caribbeanGreen animate-pulse' : 'bg-white/10'}`}></div>)}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-caribbeanGreen uppercase tracking-widest block mb-4">Diagnostic Log</span>
                  <p className="text-[13px] text-stone/60 font-mono leading-relaxed">
                    <span className="text-caribbeanGreen/40 mr-2">SYS_MSG:</span>
                    Optimizing for high-performance distributed systems and industrial-grade reliability. All sectors nominal.
                  </p>
                </div>

                {/* 6. Philosophy Card - Long Bottom */}
                <div className="md:col-span-12 xl:col-span-12 bg-gradient-to-r from-caribbeanGreen/5 via-richBlack to-richBlack p-px rounded-[2.5rem]">
                  <div className="bg-richBlack rounded-[calc(2.5rem-1px)] p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-caribbeanGreen animate-ping"></div>
                      <span className="text-[10px] font-mono text-caribbeanGreen uppercase tracking-[0.3em]">Engineering Philosophy</span>
                    </div>
                    <p className="text-antiFlashWhite/90 text-xl md:text-2xl leading-relaxed font-light italic text-right max-w-3xl">
                      "I build for those who need to understand the system at a glance, not just those who built it."
                    </p>
                  </div>
                </div>

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

    </div >
  );
};

export default About;