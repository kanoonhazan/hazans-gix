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
    <article className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Link */}
      <Link to="/work" className="inline-flex items-center text-stone hover:text-caribbeanGreen mb-12 transition-colors opacity-0 animate-fade-in-up">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
      </Link>

      {/* Main Hero Header with Background Image */}
      <header className="relative min-h-[70vh] flex items-end mb-24 rounded-3xl overflow-hidden shadow-2xl shadow-caribbeanGreen/5 border border-darkGreen opacity-0 animate-fade-in-up delay-100 group">

        {/* Background Image */}
        {project.thumbnail && (
          <>
            <img
              src={project.thumbnail}
              alt={`${project.title} Background`}
              className="absolute inset-0 w-full h-full object-cover z-0 transform group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
            />
            <div className="absolute inset-0 bg-richBlack/40 z-10 backdrop-blur-[2px]"></div>
          </>
        )}

        {/* Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-richBlack via-richBlack/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-richBlack/80 via-transparent to-transparent z-10"></div>

        {/* Content */}
        <div className="relative z-20 w-full p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-9">
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="text-caribbeanGreen font-mono text-xs tracking-widest uppercase bg-richBlack/80 border border-caribbeanGreen/20 px-3 py-1.5 rounded backdrop-blur-md shadow-lg">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-stone/90 leading-relaxed max-w-3xl font-medium drop-shadow-md">
              {project.summary}
            </p>
          </div>
        </div>
      </header>

      {/* Project Snapshot - Full Width Grid */}
      <section className="mb-24 bg-gradient-to-br from-darkGreen/40 to-richBlack rounded-3xl p-8 md:p-12 border border-darkGreen hover:border-bangladeshGreen/50 transition-colors opacity-0 animate-fade-in-up delay-200 shadow-lg">
        <h2 className="text-caribbeanGreen font-mono text-sm uppercase tracking-widest mb-10 flex items-center">
          <Layers className="w-4 h-4 mr-2" />
          Project Snapshot
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-antiFlashWhite uppercase tracking-wide border-b border-darkGreen/50 pb-2">One-Line Summary</h3>
            <p className="text-stone text-lg leading-relaxed">{project.snapshot.summary}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-antiFlashWhite uppercase tracking-wide border-b border-darkGreen/50 pb-2">Context</h3>
            <p className="text-stone text-lg leading-relaxed">{project.snapshot.context}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-antiFlashWhite uppercase tracking-wide border-b border-darkGreen/50 pb-2">My Role</h3>
            <p className="text-stone text-lg leading-relaxed">{project.snapshot.role}</p>
          </div>
        </div>
      </section>

      {/* Main Content Grid - Agency Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">

        {/* The Problem */}
        <div className="lg:col-span-4 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-caribbeanGreen font-mono text-sm uppercase tracking-widest sticky top-32">The Problem</h2>
        </div>
        <div className="lg:col-span-8 opacity-0 animate-fade-in-up delay-300">
          <div className="prose prose-xl prose-invert max-w-none">
            <p className="text-antiFlashWhite font-medium leading-relaxed">
              {project.problem.content}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="col-span-full h-px bg-darkGreen/30 my-8"></div>

        {/* Constraints & Context */}
        <div className="lg:col-span-4 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-caribbeanGreen font-mono text-sm uppercase tracking-widest sticky top-32">Constraints & Context</h2>
        </div>
        <div className="lg:col-span-8 opacity-0 animate-fade-in-up delay-300">
          <p className="text-stone text-lg mb-8 leading-relaxed">{project.constraints.content}</p>
          <ul className="space-y-4">
            {project.constraints.bulletPoints?.map((point, i) => (
              <li key={i} className="flex items-start bg-richBlack/50 p-5 rounded-xl border border-darkGreen/80 hover:border-bangladeshGreen/50 transition-colors">
                <span className="mr-4 text-mountainMeadow mt-1 text-lg">▹</span>
                <span className="text-stone text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="col-span-full h-px bg-darkGreen/30 my-8"></div>

        {/* Key Decisions */}
        <div className="lg:col-span-4 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-caribbeanGreen font-mono text-sm uppercase tracking-widest sticky top-32">Key Decisions</h2>
        </div>
        <div className="lg:col-span-8 opacity-0 animate-fade-in-up delay-300">
          <div className="bg-gradient-to-r from-darkGreen/20 to-transparent border-l-4 border-caribbeanGreen pl-8 py-6 mb-8 rounded-r-xl">
            <p className="text-xl italic text-stone">"Strategic trade-offs define the system."</p>
          </div>
          <p className="text-stone text-lg leading-relaxed whitespace-pre-line">
            {project.decisions.content}
          </p>
        </div>

        {/* Divider */}
        <div className="col-span-full h-px bg-darkGreen/30 my-8"></div>

        {/* Solution */}
        <div className="lg:col-span-4 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-caribbeanGreen font-mono text-sm uppercase tracking-widest sticky top-32">The Solution</h2>
        </div>
        <div className="lg:col-span-8 opacity-0 animate-fade-in-up delay-300">
          <p className="text-stone text-lg mb-10 leading-relaxed">{project.solution.content}</p>

          {/* Visual Artifact Placeholder - Could be replaced by a gallery image if available later */}
          <div className="w-full h-96 bg-richBlack rounded-2xl border border-darkGreen flex items-center justify-center mb-10 relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-darkGreen/30 to-richBlack"></div>
            {/* Abstract grid pattern */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,204,153,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,204,153,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="z-10 text-center p-8 bg-richBlack/80 backdrop-blur border border-bangladeshGreen/30 rounded-xl">
              <p className="text-caribbeanGreen font-mono text-sm mb-2">SYSTEM ARCHITECTURE</p>
              <p className="text-stone text-sm">[ Solution Diagram / Visual ]</p>
            </div>
          </div>

          {project.solution.bulletPoints && (
            <div className="grid md:grid-cols-2 gap-4">
              {project.solution.bulletPoints.map((point, i) => (
                <div key={i} className="flex items-center text-stone bg-darkGreen/20 p-4 rounded-xl border border-transparent hover:border-darkGreen transition-colors">
                  <span className="w-2 h-2 bg-caribbeanGreen rounded-full mr-4 shrink-0"></span>
                  {point}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="col-span-full h-px bg-darkGreen/30 my-8"></div>

        {/* Impact */}
        <div className="lg:col-span-4 opacity-0 animate-fade-in-up delay-300">
          <h2 className="text-caribbeanGreen font-mono text-sm uppercase tracking-widest sticky top-32">Impact & Outcomes</h2>
        </div>
        <div className="lg:col-span-8 opacity-0 animate-fade-in-up delay-300">
          <p className="text-stone text-lg mb-8 leading-relaxed">{project.impact.content}</p>
          <div className="grid grid-cols-1 gap-4">
            {project.impact.bulletPoints?.map((point, i) => (
              <div key={i} className="bg-gradient-to-r from-darkGreen/30 to-richBlack p-6 rounded-2xl border border-darkGreen flex items-start hover:border-caribbeanGreen/30 transition-colors">
                <span className="text-caribbeanGreen font-bold mr-6 text-2xl font-mono opacity-50">{(i + 1).toString().padStart(2, '0')}</span>
                <p className="text-stone text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Gallery - Full Width */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="mb-32 opacity-0 animate-fade-in-up delay-300 border-t border-darkGreen/50 pt-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-caribbeanGreen font-mono text-sm uppercase tracking-widest flex items-center">
              <LayoutGrid className="w-4 h-4 mr-2" /> Gallery
            </h2>
            <span className="text-stone text-sm hidden md:block">Click to expand</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="relative group rounded-2xl overflow-hidden border border-darkGreen bg-richBlack/50 aspect-video shadow-lg">
                <div className="absolute inset-0 bg-caribbeanGreen/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                <img
                  src={img}
                  alt={`Project visual ${idx + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Reflection - Centered Feature */}
      <section className="mb-32 opacity-0 animate-fade-in-up delay-300 max-w-5xl mx-auto">
        <h2 className="text-caribbeanGreen font-mono text-sm uppercase tracking-widest mb-8 text-center">Closing Thoughts</h2>
        <div className="bg-bangladeshGreen/5 rounded-3xl p-10 md:p-16 border border-bangladeshGreen/20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-caribbeanGreen/5 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-caribbeanGreen/5 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>
          <p className="text-stone text-xl md:text-2xl leading-relaxed relative z-10 font-medium">{project.reflection.content}</p>
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