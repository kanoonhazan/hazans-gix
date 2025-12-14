import React, { useState, useEffect } from 'react';
import { X, Upload, Save, Loader, Layout, Camera, FileText, Image as ImageIcon, Trash2, Plus } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Project, CaseStudyDetail } from '../types';
import Button from './Button';

interface ProjectFormProps {
    project?: Project | null;
    onClose: () => void;
    onSave: () => void;
}

const TABS = [
    { id: 'overview', label: 'Overview', icon: Layout },
    { id: 'snapshot', label: 'Snapshot', icon: Camera },
    { id: 'deep-dive', label: 'Deep Dive', icon: FileText },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
];

const DEFAULT_SECTION = { content: '', bulletPoints: [] };
const DEFAULT_FORM: CaseStudyDetail = {
    id: '',
    title: '',
    summary: '',
    tags: [],
    thumbnail: '',
    snapshot: { summary: '', context: '', role: '' },
    problem: { content: '' },
    constraints: { ...DEFAULT_SECTION },
    decisions: { ...DEFAULT_SECTION },
    solution: { ...DEFAULT_SECTION },
    impact: { ...DEFAULT_SECTION },
    reflection: { ...DEFAULT_SECTION },
    gallery: []
};

const ProjectForm: React.FC<ProjectFormProps> = ({ project, onClose, onSave }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [formData, setFormData] = useState<CaseStudyDetail>(DEFAULT_FORM);
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);

    // Load Initial Data
    useEffect(() => {
        const loadData = async () => {
            if (project) {
                setLoading(true);
                // Set basic data first
                setFormData(prev => ({ ...prev, ...project }));

                // Fetch deep details
                const { data, error } = await supabase
                    .from('case_studies')
                    .select('content')
                    .eq('id', project.id)
                    .single();

                if (data && data.content) {
                    // Merge deep details carefully
                    setFormData(prev => ({
                        ...prev,
                        ...data.content,
                        // Ensure ID matches current project if something is wonky
                        id: project.id
                    }));
                }
                setLoading(false);
            }
        };
        loadData();
    }, [project]);

    const handleImageUpload = async (file: File, target: 'thumbnail' | 'gallery') => {
        setUploading(true);
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `${fileName}`;

        try {
            const { error } = await supabase.storage.from('portfolio-assets').upload(filePath, file);
            if (error) throw error;

            const { data } = supabase.storage.from('portfolio-assets').getPublicUrl(filePath);

            if (target === 'thumbnail') {
                setFormData(p => ({ ...p, thumbnail: data.publicUrl }));
            } else {
                setFormData(p => ({ ...p, gallery: [...(p.gallery || []), data.publicUrl] }));
            }
        } catch (error: any) {
            alert('Upload failed: ' + error.message);
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            // 1. Save Project Metadata
            const projectMeta: Project = {
                id: formData.id || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                title: formData.title,
                summary: formData.summary,
                tags: formData.tags,
                thumbnail: formData.thumbnail
            };

            const { error: projError } = await supabase.from('projects').upsert(projectMeta);
            if (projError) throw projError;

            // 2. Save Full Case Study JSON
            // Ensure ID is synced
            const fullContent = { ...formData, id: projectMeta.id };
            const { error: csError } = await supabase.from('case_studies').upsert({
                id: projectMeta.id,
                content: fullContent
            });
            if (csError) throw csError;

            onSave();
            onClose();
        } catch (e: any) {
            alert('Error saving: ' + e.message);
        } finally {
            setSaving(false);
        }
    };

    // Helper for Section Inputs
    const renderSectionInput = (sectionName: keyof CaseStudyDetail, label: string) => {
        // @ts-ignore - dynamic access to complex object
        const section = formData[sectionName] as any;
        if (!section) return null;

        return (
            <div className="space-y-4 border-b border-darkGreen pb-6 mb-6 last:border-0">
                <h3 className="text-lg font-medium text-caribbeanGreen">{label}</h3>

                <div>
                    <label className="block text-xs text-stone mb-1">Content</label>
                    <textarea
                        value={section.content || ''}
                        onChange={e => setFormData({
                            ...formData,
                            [sectionName]: { ...section, content: e.target.value }
                        })}
                        rows={4}
                        className="w-full bg-darkGreen/20 border border-darkGreen rounded-xl px-4 py-3 text-sm text-antiFlashWhite focus:outline-none focus:border-caribbeanGreen/50"
                    />
                </div>

                {sectionName !== 'problem' && (
                    <div>
                        <label className="block text-xs text-stone mb-1">Bullet Points (One per line)</label>
                        <textarea
                            value={section.bulletPoints?.join('\n') || ''}
                            onChange={e => setFormData({
                                ...formData,
                                [sectionName]: { ...section, bulletPoints: e.target.value.split('\n') }
                            })}
                            rows={3}
                            className="w-full bg-darkGreen/10 border border-darkGreen rounded-xl px-4 py-3 text-sm text-stone focus:outline-none focus:border-caribbeanGreen/30"
                            placeholder="- Point 1&#10;- Point 2"
                        />
                    </div>
                )}
            </div>
        );
    };

    if (loading) return <div className="fixed inset-0 z-50 flex items-center justify-center bg-richBlack/80"><Loader className="w-8 h-8 animate-spin text-caribbeanGreen" /></div>;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-richBlack/90 backdrop-blur-sm">
            <div className="bg-richBlack border border-darkGreen rounded-3xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="p-6 border-b border-darkGreen flex justify-between items-center bg-richBlack">
                    <h2 className="text-2xl font-bold text-antiFlashWhite">
                        {project ? 'Edit Case Study' : 'New Case Study'}
                    </h2>
                    <div className="flex items-center space-x-4">
                        <Button variant="outline" onClick={onClose}>Cancel</Button>
                        <Button variant="primary" onClick={handleSubmit} disabled={saving}>
                            {saving ? <Loader className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                            Save Changes
                        </Button>
                    </div>
                </div>

                <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar Tabs */}
                    <div className="w-64 bg-darkGreen/10 border-r border-darkGreen p-4 overflow-y-auto">
                        <nav className="space-y-2">
                            {TABS.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === tab.id
                                            ? 'bg-caribbeanGreen text-richBlack font-bold shadow-lg shadow-caribbeanGreen/20'
                                            : 'text-stone hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <tab.icon className="w-5 h-5" />
                                    <span>{tab.label}</span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 overflow-y-auto p-8 bg-richBlack">

                        {/* Overview Tab */}
                        {activeTab === 'overview' && (
                            <div className="space-y-6 max-w-3xl">
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-stone mb-2">Title</label>
                                        <input
                                            value={formData.title}
                                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                                            className="w-full bg-darkGreen/20 border border-darkGreen rounded-xl px-4 py-3 text-white focus:outline-none focus:border-caribbeanGreen"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-stone mb-2">Slug (ID - Auto if empty)</label>
                                        <input
                                            value={formData.id}
                                            onChange={e => setFormData({ ...formData, id: e.target.value })}
                                            disabled={!!project}
                                            className="w-full bg-darkGreen/10 border border-darkGreen rounded-xl px-4 py-3 text-stone focus:outline-none focus:border-caribbeanGreen disabled:opacity-50"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-stone mb-2">Short Summary (Card)</label>
                                    <textarea
                                        value={formData.summary}
                                        onChange={e => setFormData({ ...formData, summary: e.target.value })}
                                        rows={2}
                                        className="w-full bg-darkGreen/20 border border-darkGreen rounded-xl px-4 py-3 text-white focus:outline-none focus:border-caribbeanGreen"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-stone mb-2">Tags (Comma Separated)</label>
                                    <input
                                        value={formData.tags.join(', ')}
                                        onChange={e => setFormData({ ...formData, tags: e.target.value.split(',').map(t => t.trim()) })}
                                        className="w-full bg-darkGreen/20 border border-darkGreen rounded-xl px-4 py-3 text-white focus:outline-none focus:border-caribbeanGreen"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-stone mb-2">Thumbnail Card Image</label>
                                    <div className="flex items-center space-x-6 bg-darkGreen/10 p-4 rounded-xl border border-dashed border-darkGreen">
                                        <div className="w-24 h-24 bg-black rounded-lg overflow-hidden relative">
                                            {formData.thumbnail ? (
                                                <img src={formData.thumbnail} className="w-full h-full object-cover" />
                                            ) : <ImageIcon className="w-8 h-8 text-stone m-auto mt-8" />}
                                        </div>
                                        <div>
                                            <input
                                                type="file"
                                                onChange={e => e.target.files?.[0] && handleImageUpload(e.target.files[0], 'thumbnail')}
                                                className="hidden" id="thumb-up"
                                            />
                                            <label htmlFor="thumb-up" className="cursor-pointer text-caribbeanGreen hover:underline text-sm font-bold flex items-center">
                                                <Upload className="w-4 h-4 mr-2" /> Upload Image
                                            </label>
                                            <p className="text-xs text-stone mt-1">Or paste URL below</p>
                                            <input
                                                value={formData.thumbnail}
                                                onChange={e => setFormData({ ...formData, thumbnail: e.target.value })}
                                                className="mt-2 text-xs bg-transparent border-b border-stone/30 w-full text-stone focus:outline-none"
                                                placeholder="https://..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Snapshot Tab */}
                        {activeTab === 'snapshot' && (
                            <div className="space-y-6 max-w-3xl">
                                <h3 className="text-xl font-bold text-caribbeanGreen mb-4">Project Snapshot</h3>
                                <div>
                                    <label className="block text-sm text-stone mb-2">Your Role</label>
                                    <input
                                        value={formData.snapshot.role}
                                        onChange={e => setFormData({
                                            ...formData,
                                            snapshot: { ...formData.snapshot, role: e.target.value }
                                        })}
                                        className="w-full bg-darkGreen/20 border border-darkGreen rounded-xl px-4 py-3 text-white focus:outline-none focus:border-caribbeanGreen"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-stone mb-2">Snapshot Context</label>
                                    <input
                                        value={formData.snapshot.context}
                                        onChange={e => setFormData({
                                            ...formData,
                                            snapshot: { ...formData.snapshot, context: e.target.value }
                                        })}
                                        className="w-full bg-darkGreen/20 border border-darkGreen rounded-xl px-4 py-3 text-white focus:outline-none focus:border-caribbeanGreen"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-stone mb-2">Snapshot Summary (The "Why")</label>
                                    <textarea
                                        value={formData.snapshot.summary}
                                        onChange={e => setFormData({
                                            ...formData,
                                            snapshot: { ...formData.snapshot, summary: e.target.value }
                                        })}
                                        rows={4}
                                        className="w-full bg-darkGreen/20 border border-darkGreen rounded-xl px-4 py-3 text-white focus:outline-none focus:border-caribbeanGreen"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Deep Dive Tab */}
                        {activeTab === 'deep-dive' && (
                            <div className="space-y-2 max-w-4xl">
                                {renderSectionInput('problem', 'The Problem')}
                                {renderSectionInput('constraints', 'Constraints & Challenges')}
                                {renderSectionInput('decisions', 'Strategic Decisions')}
                                {renderSectionInput('solution', 'The Solution')}
                                {renderSectionInput('impact', 'Impact & Results')}
                                {renderSectionInput('reflection', 'Reflection')}
                            </div>
                        )}

                        {/* Gallery Tab */}
                        {activeTab === 'gallery' && (
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold text-caribbeanGreen">Project Gallery</h3>
                                    <div>
                                        <input
                                            type="file"
                                            multiple
                                            className="hidden"
                                            id="gallery-up"
                                            onChange={e => {
                                                if (e.target.files) {
                                                    Array.from(e.target.files).forEach(f => handleImageUpload(f, 'gallery'));
                                                }
                                            }}
                                        />
                                        <label htmlFor="gallery-up" className="cursor-pointer bg-caribbeanGreen/10 text-caribbeanGreen px-4 py-2 rounded-lg border border-caribbeanGreen/50 hover:bg-caribbeanGreen/20 flex items-center">
                                            <Plus className="w-4 h-4 mr-2" /> Add Images
                                        </label>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {formData.gallery?.map((img, idx) => (
                                        <div key={idx} className="relative group rounded-xl overflow-hidden aspect-video bg-black border border-stone/20">
                                            <img src={img} className="w-full h-full object-cover" />
                                            <button
                                                onClick={() => setFormData({
                                                    ...formData,
                                                    gallery: formData.gallery?.filter((_, i) => i !== idx)
                                                })}
                                                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                    {(!formData.gallery || formData.gallery.length === 0) && (
                                        <div className="col-span-full py-12 text-center text-stone/50 border-2 border-dashed border-darkGreen rounded-xl">
                                            No images in gallery yet.
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectForm;
