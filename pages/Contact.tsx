import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16 opacity-0 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-caribbeanGreen via-mint to-mountainMeadow mb-6 pb-2">Let's Build Something.</h1>
        <p className="text-xl text-stone">
          I'm currently open to senior product/engineering roles or consulting on complex system challenges.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
        
        {/* Contact Form */}
        <div className="md:col-span-3 bg-gradient-to-b from-darkGreen to-richBlack rounded-3xl p-8 border border-bangladeshGreen/30 opacity-0 animate-fade-in-up delay-100 shadow-xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-richBlack border border-bangladeshGreen/50 rounded-lg px-4 py-3 text-antiFlashWhite focus:ring-2 focus:ring-caribbeanGreen focus:border-transparent outline-none transition-all placeholder-stone/30"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-richBlack border border-bangladeshGreen/50 rounded-lg px-4 py-3 text-antiFlashWhite focus:ring-2 focus:ring-caribbeanGreen focus:border-transparent outline-none transition-all placeholder-stone/30"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone mb-2">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-richBlack border border-bangladeshGreen/50 rounded-lg px-4 py-3 text-antiFlashWhite focus:ring-2 focus:ring-caribbeanGreen focus:border-transparent outline-none transition-all resize-none placeholder-stone/30"
                placeholder="Tell me about the problem you're solving..."
              ></textarea>
            </div>
            <Button type="submit" variant="primary" className="w-full shadow-lg shadow-caribbeanGreen/20">Send Message</Button>
          </form>
        </div>

        {/* Direct Info */}
        <div className="md:col-span-2 flex flex-col justify-center space-y-8 opacity-0 animate-fade-in-up delay-200">
           <div>
             <h3 className="text-lg font-bold text-antiFlashWhite mb-4">Direct Contact</h3>
             <a href="mailto:hello@example.com" className="flex items-center text-stone hover:text-caribbeanGreen transition-colors mb-4 group">
               <div className="w-10 h-10 rounded-full bg-darkGreen flex items-center justify-center mr-3 border border-bangladeshGreen/30 group-hover:border-caribbeanGreen transition-colors">
                 <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
               </div>
               hello@example.com
             </a>
             <a href="#" className="flex items-center text-stone hover:text-caribbeanGreen transition-colors mb-4 group">
               <div className="w-10 h-10 rounded-full bg-darkGreen flex items-center justify-center mr-3 border border-bangladeshGreen/30 group-hover:border-caribbeanGreen transition-colors">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
               </div>
               LinkedIn Profile
             </a>
             <a href="#" className="flex items-center text-stone hover:text-caribbeanGreen transition-colors group">
               <div className="w-10 h-10 rounded-full bg-darkGreen flex items-center justify-center mr-3 border border-bangladeshGreen/30 group-hover:border-caribbeanGreen transition-colors">
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
               </div>
               GitHub Profile
             </a>
           </div>
           
           <div className="bg-richBlack p-6 rounded-2xl border border-darkGreen relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-caribbeanGreen/5 rounded-full blur-xl"></div>
              <p className="text-sm text-stone leading-relaxed relative z-10">
                "The interface is the system." <br/>
                <span className="text-mountainMeadow mt-2 block">— Jef Raskin</span>
              </p>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;