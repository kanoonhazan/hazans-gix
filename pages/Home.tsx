import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Zap, Layers, Cpu, Activity, Code, GitMerge, Globe, Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import Button from '../components/Button';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('UI/UX Design');

  const filteredProjects = PROJECTS.filter(p => p.category === selectedCategory);

  const categories = ['UI/UX Design', 'Mechatronics', 'Software Solutions'];

  return (
    <div className="relative pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Background Grid for Technical Feel */}
      <div className="absolute top-0 left-0 right-0 h-[1000px] opacity-[0.05] pointer-events-none z-0"
        style={{ backgroundImage: 'linear-gradient(#00CC99 1px, transparent 1px), linear-gradient(90deg, #00CC99 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-caribbeanGreen/5 rounded-full blur-[128px] -z-10 animate-pulse-slow"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-bangladeshGreen/10 rounded-full blur-[128px] -z-10"></div>

      {/* Hero Section */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-center">
        <div className="lg:col-span-7 space-y-8 opacity-0 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-darkGreen/50 rounded-full px-4 py-1.5 border border-bangladeshGreen/30 mb-2 backdrop-blur-md shadow-lg shadow-caribbeanGreen/5">
            <div className="w-1.5 h-1.5 bg-caribbeanGreen rounded-full animate-pulse-slow"></div>
            <span className="text-caribbeanGreen/90 text-[11px] font-mono uppercase tracking-[0.2em]">Think - Design - Build</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-antiFlashWhite leading-[1.1] tracking-tight">
            Kanoon Hazan
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium leading-snug text-stone/90">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbeanGreen via-mint to-mountainMeadow font-semibold">
              Designing intelligence
            </span> <br className="hidden lg:block" />
            <span className="text-antiFlashWhite">that connects hardware, code, & people.</span>
          </h2>
          <p className="text-lg md:text-xl text-stone max-w-2xl leading-relaxed">
            I don’t just write software. I build complete systems—bridging <span className="text-antiFlashWhite font-medium border-b border-caribbeanGreen/30 pb-0.5">mechatronics</span>, <span className="text-antiFlashWhite font-medium border-b border-caribbeanGreen/30 pb-0.5">embedded logic</span>, and <span className="text-antiFlashWhite font-medium border-b border-caribbeanGreen/30 pb-0.5">human experience</span> to solve complex problems in the real world.
          </p>
          <div className="flex flex-wrap gap-4 pt-6">
            <Link to="/work">
              <Button variant="primary" icon className="shadow-[0_4px_20px_rgba(0,204,153,0.25)] hover:shadow-[0_8px_30px_rgba(0,204,153,0.35)] hover:-translate-y-1 transition-all duration-300">View Work</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="backdrop-blur-md bg-richBlack/50 hover:bg-richBlack/80 border-stone/20 hover:border-caribbeanGreen/50">Let's Talk</Button>
            </Link>
          </div>
        </div>

        {/* Hero Image - Enhanced HUD Style */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end opacity-0 animate-fade-in-up delay-200">
          <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-darkGreen/50 bg-richBlack group shadow-2xl shadow-caribbeanGreen/5 ring-1 ring-white/5">
            {/* Abstract Visual */}
            <img
              src="/images/HeroImage.jpg"
              alt="Systems Engineering Abstract"
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000 ease-out mix-blend-screen grayscale group-hover:grayscale-0"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-richBlack via-richBlack/40 to-transparent"></div>

            {/* Decorative Tech Overlay - HUD Style */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
              <div className="flex justify-between items-start">
                <Cpu className="text-stone/50 w-8 h-8" strokeWidth={1} />
                <div className="text-right">
                  <div className="text-[10px] font-mono text-caribbeanGreen/70">SYS.01</div>
                  <div className="text-[10px] font-mono text-stone/50">ONLINE</div>
                </div>
              </div>

              {/* Bottom Widget */}
              <div className="bg-richBlack/80 backdrop-blur-md rounded-xl border border-bangladeshGreen/30 p-4 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-caribbeanGreen animate-pulse" />
                    <span className="text-xs font-mono text-caribbeanGreen uppercase tracking-widest">Live Monitoring</span>
                  </div>
                  <span className="text-[10px] font-mono text-stone">v2.4.0</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-mono text-stone">
                    <span>System Load</span>
                    <span className="text-antiFlashWhite">Nominal</span>
                  </div>
                  <div className="h-1 w-full bg-darkGreen rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-caribbeanGreen to-mountainMeadow w-[85%] rounded-full opacity-80"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Positioning Block - Editorial Style */}
      <div className="mb-32 max-w-4xl opacity-0 animate-fade-in-up delay-300 relative pl-8 md:pl-10">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-caribbeanGreen via-bangladeshGreen to-transparent rounded-full opacity-80"></div>
        <h3 className="text-3xl md:text-5xl font-bold text-antiFlashWhite mb-6 leading-tight">
          Specialization is for insects. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone to-stone/50">I specialize in the glue between layers.</span>
        </h3>
        <p className="text-lg md:text-xl text-stone leading-relaxed max-w-3xl">
          Most failures happen at the interfaces—where hardware meets code, or code meets the user. By understanding the constraints of all three, I design systems that are resilient, intuitive, and actually buildable.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)] mb-32 relative z-10">

        {/* Card: How I Approach Problems */}
        <div className="col-span-1 md:col-span-2 row-span-1 lg:row-span-2 bg-gradient-to-br from-darkGreen via-richBlack to-richBlack rounded-3xl p-10 border border-bangladeshGreen/30 flex flex-col justify-between hover:border-caribbeanGreen/30 transition-all duration-500 opacity-0 animate-fade-in-up delay-300 shadow-2xl group relative overflow-hidden">
          {/* Inner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-caribbeanGreen/5 rounded-full blur-[80px] group-hover:bg-caribbeanGreen/10 transition-colors"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center p-3.5 bg-richBlack/50 rounded-xl mb-8 border border-bangladeshGreen/20 shadow-lg backdrop-blur-md group-hover:scale-105 transition-transform duration-300">
              <Zap className="text-caribbeanGreen w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold text-antiFlashWhite mb-6">How I Approach Problems</h3>
            <div className="space-y-5 text-stone text-lg">
              <p className="flex items-center group/item"><span className="w-1.5 h-1.5 bg-caribbeanGreen rounded-full mr-4 group-hover/item:scale-150 transition-transform"></span>Start with constraints, not features.</p>
              <p className="flex items-center group/item"><span className="w-1.5 h-1.5 bg-caribbeanGreen rounded-full mr-4 group-hover/item:scale-150 transition-transform"></span>Look for friction, not aesthetics.</p>
              <p className="flex items-center group/item"><span className="w-1.5 h-1.5 bg-caribbeanGreen rounded-full mr-4 group-hover/item:scale-150 transition-transform"></span>Decisions must hold up across realities.</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-bangladeshGreen/20 relative z-10">
            <p className="text-antiFlashWhite font-medium text-lg opacity-80 group-hover:opacity-100 transition-opacity">Good products aren’t just usable—they’re understandable, scalable, and intentional.</p>
          </div>
        </div>

        {/* Card: What I Work Across */}
        <div className="col-span-1 md:col-span-2 row-span-1 lg:row-span-2 bg-richBlack border border-darkGreen rounded-3xl p-10 flex flex-col justify-between items-start group hover:bg-darkGreen/20 transition-all duration-500 opacity-0 animate-fade-in-up delay-400 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-mountainMeadow/10 rounded-full blur-3xl"></div>

          <div className="w-full relative z-10">
            <h4 className="text-2xl font-bold text-antiFlashWhite mb-8 flex items-center">
              What I Work Across
            </h4>
            <ul className="space-y-4 text-stone w-full mb-8">
              <li className="flex items-center p-4 rounded-xl bg-darkGreen/20 border border-transparent hover:border-caribbeanGreen/30 hover:bg-darkGreen/40 transition-all duration-300 cursor-default group/list">
                <Cpu className="w-5 h-5 text-caribbeanGreen mr-4 shrink-0 group-hover/list:scale-110 transition-transform" />
                <span className="font-medium text-lg group-hover/list:text-antiFlashWhite transition-colors">Mechatronics & Automation</span>
              </li>
              <li className="flex items-center p-4 rounded-xl bg-darkGreen/20 border border-transparent hover:border-caribbeanGreen/30 hover:bg-darkGreen/40 transition-all duration-300 cursor-default group/list">
                <Layers className="w-5 h-5 text-caribbeanGreen mr-4 shrink-0 group-hover/list:scale-110 transition-transform" />
                <span className="font-medium text-lg group-hover/list:text-antiFlashWhite transition-colors">Product Design (UX / UI)</span>
              </li>
              <li className="flex items-center p-4 rounded-xl bg-darkGreen/20 border border-transparent hover:border-caribbeanGreen/30 hover:bg-darkGreen/40 transition-all duration-300 cursor-default group/list">
                <Code className="w-5 h-5 text-caribbeanGreen mr-4 shrink-0 group-hover/list:scale-110 transition-transform" />
                <span className="font-medium text-lg group-hover/list:text-antiFlashWhite transition-colors">Software & Mobile Apps</span>
              </li>
            </ul>
          </div>
          <div className="mt-auto w-full pt-4 border-t border-darkGreen/50 relative z-10">
            <div className="flex items-center text-mountainMeadow font-mono text-sm">
              <GitMerge className="w-4 h-4 mr-2" />
              Connected layers of one system.
            </div>
          </div>
        </div>

        {/* Featured Projects Header */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4 mt-12 mb-6 opacity-0 animate-fade-in-up delay-500">
          <div className="flex flex-col space-y-8 border-b border-darkGreen/50 pb-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
              <div>
                <h2 className="text-3xl font-bold text-antiFlashWhite mb-2">Selected Work</h2>
                <p className="text-stone max-w-xl">A small set of projects chosen to demonstrate how I think, decide, and build across disciplines.</p>
              </div>
              <Link to="/work" className="text-mountainMeadow hover:text-caribbeanGreen flex items-center font-medium transition-colors shrink-0 group">
                View All <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${selectedCategory === cat
                    ? 'bg-caribbeanGreen text-richBlack border-caribbeanGreen shadow-lg shadow-caribbeanGreen/20 scale-105'
                    : 'bg-darkGreen/20 text-stone border-bangladeshGreen/30 hover:border-caribbeanGreen/50 hover:text-antiFlashWhite'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects Cards */}
        {filteredProjects.map((project, idx) => (
          <Link
            key={project.id}
            to={`/work/${project.id}`}
            className={`group col-span-1 ${idx === 0 ? 'md:col-span-2' : ''} bg-darkGreen rounded-3xl p-8 border border-bangladeshGreen/30 hover:border-caribbeanGreen/50 transition-all duration-300 flex flex-col justify-between h-full opacity-0 animate-fade-in-up relative overflow-hidden shadow-lg`}
            style={{ animationDelay: `${500 + (idx * 100)}ms` }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkGreen via-darkGreen/80 to-darkGreen/30 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-richBlack/50 to-transparent"></div>
            </div>

            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-caribbeanGreen/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>

            {/* Background Texture on Card */}
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] z-10"></div>

            <div className="relative z-20">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-richBlack/60 backdrop-blur-md text-mint text-xs rounded-md border border-white/10 uppercase tracking-wider font-semibold shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-antiFlashWhite mb-3 group-hover:text-caribbeanGreen transition-colors drop-shadow-md">{project.title}</h3>
              <p className="text-stone/90 text-sm leading-relaxed line-clamp-3 font-medium drop-shadow-sm">{project.summary}</p>
            </div>
            <div className="mt-8 flex items-center text-sm font-bold text-antiFlashWhite group-hover:text-caribbeanGreen transition-colors relative z-20">
              View Case Study <ArrowUpRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {/* Contact & Ecosystem Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20 opacity-0 animate-fade-in-up delay-500">

        {/* Main CTA */}
        <div className="lg:col-span-8 bg-gradient-to-br from-darkGreen to-richBlack rounded-3xl p-8 md:p-12 border border-bangladeshGreen/30 relative overflow-hidden flex flex-col justify-center items-start shadow-2xl group">
          {/* Decor */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-caribbeanGreen/5 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-bangladeshGreen/10 rounded-full blur-[80px]"></div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-antiFlashWhite mb-6 leading-tight">
              Have a complex problem that spans <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbeanGreen to-mountainMeadow">hardware, software, or experience?</span>
            </h2>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/contact">
                <Button variant="primary" icon className="px-8 py-4 text-lg shadow-[0_4px_20px_rgba(0,204,153,0.3)] hover:shadow-[0_4px_25px_rgba(0,204,153,0.5)] transform hover:-translate-y-1 transition-all">Let's Talk</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Naxit Micro Agency */}
        <a href="https://naxit.vercel.app" target="_blank" rel="noopener noreferrer" className="lg:col-span-4 bg-richBlack rounded-3xl p-8 border border-darkGreen hover:border-caribbeanGreen/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group relative h-full min-h-[300px]">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(45deg,#00CC99_1px,transparent_1px)] bg-[size:16px_16px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-darkGreen/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 bg-darkGreen/50 rounded-full px-3 py-1 mb-6 border border-bangladeshGreen/30 backdrop-blur-md">
              <Globe className="w-3 h-3 text-caribbeanGreen" />
              <span className="text-caribbeanGreen text-[10px] font-mono uppercase tracking-widest">Micro Agency</span>
            </div>
            <h3 className="text-4xl font-bold text-antiFlashWhite mb-2 group-hover:text-caribbeanGreen transition-colors">Naxit</h3>
            <p className="text-stone text-sm leading-relaxed max-w-[200px]">Scalable digital solutions for growing businesses.</p>
          </div>

          <div className="relative z-10 mt-auto pt-8 flex items-center justify-between border-t border-darkGreen/50 group-hover:border-caribbeanGreen/30 transition-colors">
            <span className="font-bold text-antiFlashWhite">Visit Agency</span>
            <div className="w-8 h-8 rounded-full bg-darkGreen flex items-center justify-center group-hover:bg-caribbeanGreen group-hover:text-richBlack transition-all">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </a>

        {/* Social Bar */}
        <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/kanoon-hazan' },
            { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/94758089209?text=Hi%2C%20this%20is%20(your name)' },
            { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/itz.me.hazan' },
            { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/itz.me.hazan' }
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-darkGreen/20 hover:bg-darkGreen border border-darkGreen/50 hover:border-bangladeshGreen/50 rounded-2xl p-4 flex items-center justify-center transition-all group"
            >
              <social.icon className="w-5 h-5 text-stone group-hover:text-caribbeanGreen transition-colors mr-3" />
              <span className="text-stone font-medium group-hover:text-antiFlashWhite">{social.name}</span>
            </a>
          ))}
        </div>

      </div>

    </div >
  );
};

export default Home;