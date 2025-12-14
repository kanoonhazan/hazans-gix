import React, { useState, useEffect } from 'react';
import { X, Upload, Save, Loader } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Project } from '../types';
import Button from './Button';

interface ProjectFormProps {
    project?: Project | null;
    onClose: () => void;
    onSave: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ project, onClose, onSave }) => {
    const [formData, setFormData] = useState<Partial<Project>>({
        id: '',
        title: '',
        summary: '',
        tags: [],
        thumbnail: '',
    });
    const [tagInput, setTagInput] = useState('');
    const [uploading, setUploading] = useState(false);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (project) {
            setFormData(project);
            setTagInput(project.tags.join(', '));
        }
    }, [project]);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        setUploading(true);
        const file = e.target.files[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `${fileName}`;

        try {
            const { error: uploadError } = await supabase.storage
                .from('portfolio-assets')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data } = supabase.storage
                .from('portfolio-assets')
                .getPublicUrl(filePath);

            setFormData(prev => ({ ...prev, thumbnail: data.publicUrl }));
        } catch (error: any) {
            alert('Error uploading image: ' + error.message);
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);

        try {
            const tags = tagInput.split(',').map(t => t.trim()).filter(t => t);
            const projectData = {
                ...formData,
                tags,
                // Ensure ID is url-friendly if creating new
                id: formData.id || formData.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'new-project'
            };

            const { error } = await supabase
                .from('projects')
                .upsert(projectData as Project);

            if (error) throw error;

            onSave();
            onClose();
        } catch (error: any) {
            alert('Error saving project: ' + error.message);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-richBlack/80 backdrop-blur-sm">
            <div className="bg-richBlack border border-darkGreen rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                <div className="p-6 border-b border-darkGreen flex justify-between items-center bg-richBlack/50 sticky top-0 backdrop-blur-md z-10">
                    <h2 className="text-2xl font-bold text-antiFlashWhite">
                        {project ? 'Edit Project' : 'New Project'}
                    </h2>
                    <button onClick={onClose} className="text-stone hover:text-red-400 transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-stone mb-2">Project Title</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={e => setFormData({ ...formData, title: e.target.value })}
                                className="w-full bg-darkGreen/20 border border-darkGreen rounded-xl px-4 py-3 text-antiFlashWhite focus:outline-none focus:border-caribbeanGreen/50 transition-colors"
                                required
                            />
                        </div>

                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-stone mb-2">Slug (ID)</label>
                            <input
                                type="text"
                                value={formData.id}
                                onChange={e => setFormData({ ...formData, id: e.target.value })}
                                disabled={!!project} // Lock ID when editing
                                className="w-full bg-darkGreen/10 border border-darkGreen rounded-xl px-4 py-3 text-stone focus:outline-none focus:border-caribbeanGreen/50 transition-colors disabled:opacity-50"
                                placeholder="auto-generated-from-title"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-stone mb-2">Summary</label>
                        <textarea
                            value={formData.summary}
                            onChange={e => setFormData({ ...formData, summary: e.target.value })}
                            rows={3}
                            className="w-full bg-darkGreen/20 border border-darkGreen rounded-xl px-4 py-3 text-antiFlashWhite focus:outline-none focus:border-caribbeanGreen/50 transition-colors"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-stone mb-2">Tags (comma separated)</label>
                        <input
                            type="text"
                            value={tagInput}
                            onChange={e => setTagInput(e.target.value)}
                            className="w-full bg-darkGreen/20 border border-darkGreen rounded-xl px-4 py-3 text-antiFlashWhite focus:outline-none focus:border-caribbeanGreen/50 transition-colors"
                            placeholder="React, IoT, Design..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-stone mb-2">Thumbnail Imge</label>
                        <div className="flex items-start space-x-6">
                            <div className="w-32 h-32 bg-darkGreen/30 rounded-xl border border-dashed border-stone/30 overflow-hidden flex items-center justify-center relative group">
                                {formData.thumbnail ? (
                                    <img src={formData.thumbnail} alt="Preview" className="w-full h-full object-cover" />
                                ) : (
                                    <Upload className="w-8 h-8 text-stone/50" />
                                )}
                                {uploading && (
                                    <div className="absolute inset-0 bg-richBlack/60 flex items-center justify-center">
                                        <Loader className="w-6 h-6 text-caribbeanGreen animate-spin" />
                                    </div>
                                )}
                            </div>
                            <div className="flex-1">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                    id="thumbnail-upload"
                                />
                                <label
                                    htmlFor="thumbnail-upload"
                                    className="inline-flex items-center px-4 py-2 bg-darkGreen/30 border border-caribbeanGreen/30 rounded-lg text-sm text-caribbeanGreen cursor-pointer hover:bg-caribbeanGreen/10 transition-colors"
                                >
                                    <Upload className="w-4 h-4 mr-2" /> Upload New Image
                                </label>
                                <p className="text-xs text-stone mt-2">
                                    Max 2MB. JPG, PNG, WEBP.
                                </p>
                                <input
                                    type="text"
                                    value={formData.thumbnail}
                                    onChange={e => setFormData({ ...formData, thumbnail: e.target.value })}
                                    className="w-full bg-transparent border-b border-stone/20 text-xs text-stone mt-3 py-1 focus:outline-none focus:border-caribbeanGreen"
                                    placeholder="Or paste image URL..."
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-darkGreen flex justify-end space-x-4">
                        <Button variant="outline" onClick={onClose} type="button">
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit" className="min-w-[120px] justify-center">
                            {saving ? (
                                <Loader className="w-4 h-4 animate-spin" />
                            ) : (
                                <>
                                    <Save className="w-4 h-4 mr-2" /> Save Project
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectForm;
