import React, { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Phone, MessageCircle, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    // Sign up at https://www.emailjs.com/
    const SERVICE_ID = 'service_0wlslgi';
    const TEMPLATE_ID = 'template_0xz2xyk'; // Note: Double check if this is different from Service ID
    const PUBLIC_KEY = '1XZn9XSheIpOOsqk-';

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
          setLoading(false);
          setSuccess(true);
          if (form.current) form.current.reset();
        }, (error) => {
          console.error(error.text);
          setLoading(false);
          setError(true);
        });
    }
  };

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
          <form ref={form} className="space-y-6" onSubmit={sendEmail}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full bg-richBlack border border-bangladeshGreen/50 rounded-lg px-4 py-3 text-antiFlashWhite focus:ring-2 focus:ring-caribbeanGreen focus:border-transparent outline-none transition-all placeholder-stone/30"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full bg-richBlack border border-bangladeshGreen/50 rounded-lg px-4 py-3 text-antiFlashWhite focus:ring-2 focus:ring-caribbeanGreen focus:border-transparent outline-none transition-all placeholder-stone/30"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full bg-richBlack border border-bangladeshGreen/50 rounded-lg px-4 py-3 text-antiFlashWhite focus:ring-2 focus:ring-caribbeanGreen focus:border-transparent outline-none transition-all resize-none placeholder-stone/30"
                placeholder="Tell me about the problem you're solving..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-caribbeanGreen hover:bg-mountainMeadow text-richBlack font-bold py-4 rounded-xl transition-all shadow-[0_4px_20px_rgba(0,204,153,0.2)] hover:shadow-[0_4px_25px_rgba(0,204,153,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? <Loader2 className="animate-spin w-5 h-5 mr-2" /> : <Send className="w-5 h-5 mr-2" />}
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {success && (
              <div className="flex items-center text-caribbeanGreen bg-caribbeanGreen/10 p-4 rounded-lg border border-caribbeanGreen/20 animate-fade-in-up">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}

            {error && (
              <div className="flex items-center text-red-400 bg-red-400/10 p-4 rounded-lg border border-red-400/20 animate-fade-in-up">
                <AlertCircle className="w-5 h-5 mr-2" />
                <span>Something went wrong. Please try again or email me directly.</span>
              </div>
            )}
          </form>
        </div>

        {/* Direct Info */}
        <div className="md:col-span-2 flex flex-col justify-center space-y-8 opacity-0 animate-fade-in-up delay-200">
          <div>
            <h3 className="text-lg font-bold text-antiFlashWhite mb-4">Direct Contact</h3>

            <a href="mailto:kanoonhazan@gmail.com" className="flex items-center text-stone hover:text-caribbeanGreen transition-colors mb-4 group">
              <div className="w-10 h-10 rounded-full bg-darkGreen flex items-center justify-center mr-3 border border-bangladeshGreen/30 group-hover:border-caribbeanGreen transition-colors">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              kanoonhazan@gmail.com
            </a>

            <a href="tel:+94758089209" className="flex items-center text-stone hover:text-caribbeanGreen transition-colors mb-4 group">
              <div className="w-10 h-10 rounded-full bg-darkGreen flex items-center justify-center mr-3 border border-bangladeshGreen/30 group-hover:border-caribbeanGreen transition-colors">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              +94 75 808 9209
            </a>

            <a href="https://wa.me/94758089209" target="_blank" rel="noopener noreferrer" className="flex items-center text-stone hover:text-caribbeanGreen transition-colors mb-4 group">
              <div className="w-10 h-10 rounded-full bg-darkGreen flex items-center justify-center mr-3 border border-bangladeshGreen/30 group-hover:border-caribbeanGreen transition-colors">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              WhatsApp
            </a>

            <a href="https://www.linkedin.com/in/kanoon-hazan" target="_blank" rel="noopener noreferrer" className="flex items-center text-stone hover:text-caribbeanGreen transition-colors mb-4 group">
              <div className="w-10 h-10 rounded-full bg-darkGreen flex items-center justify-center mr-3 border border-bangladeshGreen/30 group-hover:border-caribbeanGreen transition-colors">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              LinkedIn
            </a>

            <a href="https://github.com/kanoonhazan" target="_blank" rel="noopener noreferrer" className="flex items-center text-stone hover:text-caribbeanGreen transition-colors group">
              <div className="w-10 h-10 rounded-full bg-darkGreen flex items-center justify-center mr-3 border border-bangladeshGreen/30 group-hover:border-caribbeanGreen transition-colors">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </div>
              GitHub
            </a>
          </div>

          <div className="bg-richBlack p-6 rounded-2xl border border-darkGreen relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-caribbeanGreen/5 rounded-full blur-xl"></div>
            <p className="text-sm text-stone leading-relaxed relative z-10">
              "The interface is the system." <br />
              <span className="text-mountainMeadow mt-2 block">— Jef Raskin</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;