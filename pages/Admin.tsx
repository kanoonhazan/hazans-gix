import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { Plus, LogOut, LayoutDashboard, Image as ImageIcon, Database, Edit, Trash2, ExternalLink } from 'lucide-react';
import { PROJECTS, CASE_STUDIES } from '../constants';
import { Project } from '../types';

const Admin: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState<Project[]>([]);
    const [seeding, setSeeding] = useState(false);

    useEffect(() => {
        checkUser();
        fetchProjects();
    }, []);

    const checkUser = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
            navigate('/login');
        }
        setLoading(false);
    };

    const fetchProjects = async () => {
        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('created_at', { ascending: false });

        if (data) setProjects(data);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/login');
    };

    const handleSeedData = async () => {
        if (!confirm('This will overwrite existing data. Continue?')) return;
        setSeeding(true);

        try {
            // 1. Insert Projects
            for (const proj of PROJECTS) {
                const { error: projError } = await supabase.from('projects').upsert({
                    id: proj.id,
                    title: proj.title,
                    summary: proj.summary,
                    tags: proj.tags,
                    thumbnail: proj.thumbnail
                });
                if (projError) throw projError;
            }

            // 2. Insert Case Studies
            for (const key of Object.keys(CASE_STUDIES)) {
                const cs = CASE_STUDIES[key];
                const { error: csError } = await supabase.from('case_studies').upsert({
                    id: cs.id,
                    content: cs // Storing the whole object as JSONB
                });
                if (csError) throw csError;
            }

            alert('Database seeded successfully!');
            fetchProjects();
        } catch (e: any) {
            alert('Error seeding data: ' + e.message);
        } finally {
            setSeeding(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this project?')) return;

        const { error } = await supabase.from('projects').delete().eq('id', id);
        if (error) {
            alert('Error deleting: ' + error.message);
        } else {
            setProjects(projects.filter(p => p.id !== id));
        }
    };

    if (loading) return <div className="min-h-screen bg-richBlack flex items-center justify-center text-caribbeanGreen">Loading...</div>;

    return (
        <div className="min-h-screen bg-richBlack text-stone font-sans">
            {/* Top Bar */}
            <div className="border-b border-darkGreen bg-richBlack/50 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-antiFlashWhite font-bold text-xl">
                        <LayoutDashboard className="text-caribbeanGreen" />
                        <span>Control Center</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button variant="outline" className="text-xs border-red-500/30 text-red-400 hover:bg-red-500/10" onClick={handleSeedData}>
                            <Database className="w-4 h-4 mr-2" /> {seeding ? 'Seeding...' : 'Reset Data'}
                        </Button>
                        <Button variant="outline" className="text-xs" onClick={handleLogout}>
                            <LogOut className="w-4 h-4 mr-2" /> Logout
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-antiFlashWhite">Projects</h1>
                        <p className="text-stone mt-1">Manage your portfolio case studies and assets.</p>
                    </div>
                    <Button variant="primary" icon>
                        <Plus className="w-4 h-4 mr-2" /> New Project
                    </Button>
                </div>

                {/* Project List */}
                {projects.length === 0 ? (
                    <div className="col-span-full bg-darkGreen/20 border border-dashed border-darkGreen rounded-2xl p-12 flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-darkGreen/30 rounded-full flex items-center justify-center mb-4">
                            <ImageIcon className="w-8 h-8 text-stone/50" />
                        </div>
                        <h3 className="text-lg font-medium text-antiFlashWhite mb-2">No Projects Found</h3>
                        <p className="text-stone mb-6 max-w-md">
                            Your database is empty. Click "Reset Data" in the top right to import from your constants file.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        {projects.map(project => (
                            <div key={project.id} className="bg-darkGreen/30 border border-darkGreen p-6 rounded-2xl flex items-center justify-between group hover:border-caribbeanGreen/30 transition-colors">
                                <div className="flex items-center space-x-6">
                                    <div className="w-16 h-16 rounded-lg bg-richBlack overflow-hidden flex-shrink-0 border border-white/5">
                                        {project.thumbnail && <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-antiFlashWhite">{project.title}</h3>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <span className="text-xs text-caribbeanGreen font-mono bg-caribbeanGreen/10 px-2 py-0.5 rounded">{project.id}</span>
                                            <span className="text-stone text-sm truncate max-w-xs">{project.summary}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a href={`/#/work/${project.id}`} target="_blank" rel="noreferrer" className="p-2 text-stone hover:text-antiFlashWhite hover:bg-white/5 rounded-lg transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                    <button className="p-2 text-caribbeanGreen hover:bg-caribbeanGreen/10 rounded-lg transition-colors">
                                        <Edit className="w-5 h-5" />
                                    </button>
                                    <button onClick={() => handleDelete(project.id)} className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;
