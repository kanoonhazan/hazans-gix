import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Project } from '../types';

const Work: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      if (data) setProjects(data);
    }
    fetchProjects();
  }, []);

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-[80vh]">
      <div className="mb-16 opacity-0 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-caribbeanGreen via-mint to-mountainMeadow mb-6 pb-2">Projects</h1>
        <p className="text-xl text-stone max-w-3xl leading-relaxed">
          Each project below was selected intentionally—not to show volume, but to show decision-making, trade-offs, and outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {projects.map((project, idx) => (
          <Link
            to={`/work/${project.id}`}
            key={project.id}
            className="group block opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            <article
              className="h-full bg-darkGreen rounded-3xl overflow-hidden border border-bangladeshGreen/30 group-hover:border-caribbeanGreen/50 transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-caribbeanGreen/5 relative"
            >
              {/* Thumbnail Area with Gradient Overlay */}
              <div className="h-64 bg-richBlack w-full relative overflow-hidden shrink-0">
                {/* Background Image */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-darkGreen via-richBlack/50 to-transparent"></div>
                <div className="absolute inset-0 bg-caribbeanGreen/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Tags positioned on image */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-richBlack/80 backdrop-blur text-mint text-xs font-mono rounded border border-bangladeshGreen/50 uppercase tracking-wider shadow-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow relative bg-gradient-to-b from-darkGreen to-richBlack/50">
                <h2 className="text-2xl font-bold text-antiFlashWhite mb-3 group-hover:text-caribbeanGreen transition-colors">
                  {project.title}
                </h2>
                <p className="text-stone mb-8 line-clamp-3 text-lg">
                  {project.summary}
                </p>

                <div className="mt-auto">
                  <span className="text-antiFlashWhite font-bold inline-flex items-center group-hover:text-caribbeanGreen transition-colors text-sm uppercase tracking-wide">
                    View Case Study <ArrowUpRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="mt-auto border-t border-darkGreen pt-12 text-center md:text-left opacity-0 animate-fade-in-up delay-500">
        <p className="text-stone italic text-lg">
          These projects represent real constraints, real decisions, and real systems—academic, client-based, and self-initiated.
        </p>
      </div>
    </div>
  );
};

export default Work;