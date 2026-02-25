import React from 'react';
import { Mail, Linkedin, Github, Phone, MessageCircle, MapPin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-caribbeanGreen via-mint to-mountainMeadow mb-6 pb-2">Let's Build Something.</h1>
        <p className="text-xl text-stone leading-relaxed">
          I'm currently open to senior product/engineering roles or consulting on complex system challenges spanning hardware, code, and design.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Details Card */}
          <div className="bg-gradient-to-br from-darkGreen to-richBlack rounded-[2.5rem] p-10 border border-bangladeshGreen/30 opacity-0 animate-fade-in-up delay-100 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-caribbeanGreen/5 rounded-full blur-[100px] group-hover:bg-caribbeanGreen/10 transition-colors duration-500 gpu-layer"></div>

            <h3 className="text-2xl font-bold text-antiFlashWhite mb-8 relative z-10">Direct Reach</h3>

            <div className="space-y-6 relative z-10">
              <a href="mailto:kanoonhazan@gmail.com" className="flex items-center text-stone hover:text-caribbeanGreen transition-all duration-300 group/link">
                <div className="w-12 h-12 rounded-2xl bg-richBlack flex items-center justify-center mr-4 border border-bangladeshGreen/30 group-hover/link:border-caribbeanGreen shadow-lg">
                  <Mail className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-stone/50 font-mono">Email</span>
                  <span className="text-lg font-medium group-hover/link:text-antiFlashWhite">kanoonhazan@gmail.com</span>
                </div>
              </a>

              <a href="tel:+94758089209" className="flex items-center text-stone hover:text-caribbeanGreen transition-all duration-300 group/link">
                <div className="w-12 h-12 rounded-2xl bg-richBlack flex items-center justify-center mr-4 border border-bangladeshGreen/30 group-hover/link:border-caribbeanGreen shadow-lg">
                  <Phone className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-stone/50 font-mono">Phone</span>
                  <span className="text-lg font-medium group-hover/link:text-antiFlashWhite">+94 75 808 9209</span>
                </div>
              </a>

              <div className="flex items-center text-stone transition-all duration-300 group/link">
                <div className="w-12 h-12 rounded-2xl bg-richBlack flex items-center justify-center mr-4 border border-bangladeshGreen/30 shadow-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-stone/50 font-mono">Location</span>
                  <span className="text-lg font-medium text-antiFlashWhite">Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>

          {/* Socials & Agency Card */}
          <div className="flex flex-col gap-6">
            <div className="bg-richBlack rounded-[2.5rem] p-10 border border-darkGreen opacity-0 animate-fade-in-up delay-200 shadow-xl flex-grow group relative overflow-hidden">
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-mountainMeadow/5 rounded-full blur-3xl group-hover:bg-mountainMeadow/10 transition-colors duration-500 gpu-layer"></div>

              <h3 className="text-2xl font-bold text-antiFlashWhite mb-8 relative z-10">Ecosystem</h3>

              <div className="grid grid-cols-2 gap-4 relative z-10">
                <a href="https://www.linkedin.com/in/kanoon-hazan" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 bg-darkGreen/20 rounded-3xl border border-transparent hover:border-caribbeanGreen/30 hover:bg-darkGreen/40 transition-all group/item">
                  <Linkedin className="w-6 h-6 text-stone group-hover/item:text-caribbeanGreen group-hover/item:scale-110 transition-all mb-2" />
                  <span className="text-sm font-medium text-stone group-hover/item:text-antiFlashWhite">LinkedIn</span>
                </a>

                <a href="https://github.com/kanoonhazan" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 bg-darkGreen/20 rounded-3xl border border-transparent hover:border-caribbeanGreen/30 hover:bg-darkGreen/40 transition-all group/item">
                  <Github className="w-6 h-6 text-stone group-hover/item:text-caribbeanGreen group-hover/item:scale-110 transition-all mb-2" />
                  <span className="text-sm font-medium text-stone group-hover/item:text-antiFlashWhite">GitHub</span>
                </a>

                <a href="https://wa.me/94758089209" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 bg-darkGreen/20 rounded-3xl border border-transparent hover:border-caribbeanGreen/30 hover:bg-darkGreen/40 transition-all group/item">
                  <MessageCircle className="w-6 h-6 text-stone group-hover/item:text-caribbeanGreen group-hover/item:scale-110 transition-all mb-2" />
                  <span className="text-sm font-medium text-stone group-hover/item:text-antiFlashWhite">WhatsApp</span>
                </a>

                <a href="https://naxit.vercel.app" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 bg-darkGreen/20 rounded-3xl border border-transparent hover:border-caribbeanGreen/30 hover:bg-darkGreen/40 transition-all group/item">
                  <Globe className="w-6 h-6 text-stone group-hover/item:text-caribbeanGreen group-hover/item:scale-110 transition-all mb-2" />
                  <span className="text-sm font-medium text-stone group-hover/item:text-antiFlashWhite">Agency</span>
                </a>
              </div>
            </div>

            <div className="bg-darkGreen/30 backdrop-blur-md p-8 rounded-3xl border border-bangladeshGreen/20 opacity-0 animate-fade-in-up delay-300">
              <p className="text-base text-stone/80 italic leading-relaxed">
                "The interface is the system." <br />
                <span className="text-caribbeanGreen mt-2 block font-mono text-sm not-italic font-bold">— Jef Raskin</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;