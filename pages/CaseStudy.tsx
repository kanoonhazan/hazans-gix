import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Layers, LayoutGrid, Loader } from 'lucide-react';
import { supabase } from '../lib/supabase';
import Button from '../components/Button';
import { CaseStudyDetail } from '../types';

const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<CaseStudyDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (!id) return;

      // Fetch from case_studies table which holds the JSONB content
      const { data, error: fetchError } = await supabase
        .from('case_studies')
        .select('content')
        .eq('id', id)
        .single();

      if (data && data.content) {
        setProject(data.content as CaseStudyDetail);
      } else {
        console.error('Project not found', fetchError);
        setError(fetchError || { message: 'Row not found in case_studies table' });
      }
      setLoading(false);
    };
    fetchProject();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-caribbeanGreen"><Loader className="w-8 h-8 animate-spin" /></div>;

  if (!project) {
    return (
      <div className="min-h-screen pt-32 px-4 text-center">
        <h1 className="text-3xl text-antiFlashWhite mb-4">Project not found.</h1>
        {error && (
          <div className="max-w-md mx-auto bg-red-500/10 border border-red-500/50 p-4 rounded-xl mb-6 text-left">
            <p className="text-red-400 font-mono text-xs">Debug Error: {JSON.stringify(error, null, 2)}</p>
            <p className="text-stone text-xs mt-2">ID Requested: {id}</p>
          </div>
        )}
        <Link to="/work"><Button variant="secondary">Back to Work</Button></Link>
      </div>
    )
  }

  return (
    <article className="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Link */}
      <Link to="/work" className="inline-flex items-center text-stone hover:text-caribbeanGreen mb-12 transition-colors opacity-0 animate-fade-in-up">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
      </Link>

      {/* Main Header with Gradient Mesh */}
      <header className="mb-16 border-b border-darkGreen pb-12 opacity-0 animate-fade-in-up delay-100 relative">
        {/* Background Mesh */}
        <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-darkGreen/50 to-transparent -z-10 rounded-l-3xl pointer-events-none"></div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="text-mountainMeadow font-mono text-sm tracking-wider uppercase bg-darkGreen/50 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-caribbeanGreen via-mint to-mountainMeadow mb-6 leading-tight pb-2">
          {project.title}
        </h1>
        <p className="text-xl md:text-2xl text-stone leading-relaxed max-w-3xl">
          {project.summary}
        </p>
      </header>

      {/* Project Snapshot */}
      <section className="mb-20 bg-gradient-to-br from-darkGreen/40 to-richBlack rounded-2xl p-8 border border-darkGreen hover:border-bangladeshGreen/50 transition-colors opacity-0 animate-fade-in-up delay-200 shadow-lg">
        <h2 className="text-caribbeanGreen font-mono text-sm uppercase tracking-widest mb-8 flex items-center">
          <Layers className="w-4 h-4 mr-2" />
          Project Snapshot
        </h2>
        <div className="grid gap-8">
          <div className="grid md:grid-cols-4 gap-4">
            <h3 className="text-sm font-bold text-antiFlashWhite uppercase tracking-wide md:text-right">One-Line Summary</h3>
            <p className="text-stone md:col-span-3">{project.snapshot.summary}</p>
          </div>
          <div className="h-px bg-darkGreen/50 w-full"></div>
          <div className="grid md:grid-cols-4 gap-4">
            <h3 className="text-sm font-bold text-antiFlashWhite uppercase tracking-wide md:text-right">Context</h3>
            <p className="text-stone md:col-span-3">{project.snapshot.context}</p>
          </div>
          <div className="h-px bg-darkGreen/50 w-full"></div>
          <div className="grid md:grid-cols-4 gap-4">
            <h3 className="text-sm font-bold text-antiFlashWhite uppercase tracking-wide md:text-right">My Role</h3>
            <p className="text-stone md:col-span-3">{project.snapshot.role}</p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="mb-20 opacity-0 animate-fade-in-up delay-300">
        <h2 className="text-caribbeanGreen font-mono text-sm uppercase tracking-widest mb-6">The Problem</h2>
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-antiFlashWhite font-medium text-xl leading-relaxed">
            {project.problem.content}
          </p>
        </div>
      </section>

      {/* Constraints & Context */}
      <section className="mb-20 opacity-0 animate-fade-in-up delay-300">
        <h2 className="text-caribbeanGreen font-mono text-sm uppercase tracking-widest mb-6">Constraints & Context</h2>
        <p className="text-stone text-lg mb-6 leading-relaxed">{project.constraints.content}</p>
        <ul className="space-y-4">
          {project.constraints.bulletPoints?.map((point, i) => (
            <li key={i} className="flex items-start bg-richBlack/50 p-4 rounded-lg border border-darkGreen/80 hover:border-bangladeshGreen/50 transition-colors">
              <span className="mr-4 text-mountainMeadow mt-1">▹</span>
              <span className="text-stone">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Key Decisions & Thinking */}
      <section className="mb-20 opacity-0 animate-fade-in-up delay-300">
        <h2 className="text-caribbeanGreen font-mono text-sm uppercase tracking-widest mb-6">Key Decisions & Thinking</h2>
        <div className="bg-gradient-to-r from-darkGreen/20 to-transparent border-l-4 border-caribbeanGreen pl-8 py-6 mb-8 rounded-r-xl">
          <p className="text-lg italic text-stone">"Rather than redesign everything, I focused on high-impact decision points."</p>
        </div>
        <p className="text-stone text-lg leading-relaxed whitespace-pre-line">
          {project.decisions.content}
        </p>
      </section>

      {/* Solution */}
      <section className="mb-20 opacity-0 animate-fade-in-up delay-300">
        <h2 className="text-caribbeanGreen font-mono text-sm uppercase tracking-widest mb-6">Solution</h2>
        <p className="text-stone text-lg mb-8 leading-relaxed">{project.solution.content}</p>

        {/* Visual Artifact */}
        <div className="w-full h-80 bg-richBlack rounded-xl border border-darkGreen flex items-center justify-center mb-6 relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-darkGreen/30 to-richBlack"></div>
          {/* Abstract grid pattern */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,204,153,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,204,153,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

          <div className="z-10 text-center p-6 bg-richBlack/80 backdrop-blur border border-bangladeshGreen/30 rounded-lg">
            <p className="text-caribbeanGreen font-mono text-sm mb-2">SYSTEM ARCHITECTURE</p>
            <p className="text-stone text-xs">[ Visual Artifact / Schematic View ]</p>
          </div>
        </div>

        {project.solution.bulletPoints && (
          <div className="grid md:grid-cols-2 gap-4">
            {project.solution.bulletPoints.map((point, i) => (
              <div key={i} className="flex items-center text-stone bg-darkGreen/20 p-3 rounded-lg border border-transparent hover:border-darkGreen transition-colors">
                <span className="w-1.5 h-1.5 bg-caribbeanGreen rounded-full mr-3 shrink-0"></span>
                {point}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Impact & Outcomes */}
      <section className="mb-20 opacity-0 animate-fade-in-up delay-300">
        <h2 className="text-caribbeanGreen font-mono text-sm uppercase tracking-widest mb-6">Impact & Outcomes</h2>
        <p className="text-stone text-lg mb-8 leading-relaxed">{project.impact.content}</p>
        <div className="grid grid-cols-1 gap-4">
          {project.impact.bulletPoints?.map((point, i) => (
            <div key={i} className="bg-gradient-to-r from-darkGreen/30 to-richBlack p-5 rounded-xl border border-darkGreen flex items-start hover:border-caribbeanGreen/30 transition-colors">
              <span className="text-caribbeanGreen font-bold mr-4 text-xl font-mono">{(i + 1).toString().padStart(2, '0')}</span>
              <p className="text-stone">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="mb-20 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-caribbeanGreen font-mono text-sm uppercase tracking-widest mb-8 flex items-center">
            <LayoutGrid className="w-4 h-4 mr-2" /> Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="relative group rounded-xl overflow-hidden border border-darkGreen bg-richBlack/50">
                <div className="absolute inset-0 bg-caribbeanGreen/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                <img
                  src={img}
                  alt={`Project visual ${idx + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Reflection */}
      <section className="mb-20 border-t border-darkGreen pt-12 opacity-0 animate-fade-in-up delay-300">
        <h2 className="text-caribbeanGreen font-mono text-sm uppercase tracking-widest mb-6">Reflection</h2>
        <div className="bg-bangladeshGreen/5 rounded-2xl p-8 border border-bangladeshGreen/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-caribbeanGreen/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
          <p className="text-stone text-lg leading-relaxed relative z-10">{project.reflection.content}</p>
        </div>
      </section>

      {/* Bottom Nav */}
      <div className="flex justify-between items-center border-t border-darkGreen pt-12 opacity-0 animate-fade-in-up delay-500">
        <Link to="/work"><Button variant="outline">Back to Projects</Button></Link>
        <Link to="/contact"><Button variant="primary" icon>Start a Conversation</Button></Link>
      </div>

    </article>
  );
};

export default CaseStudy;