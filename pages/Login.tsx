import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { Lock, UserPlus } from 'lucide-react';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        if (isSignUp) {
            const { error: signUpError } = await supabase.auth.signUp({
                email,
                password,
            });
            if (signUpError) {
                setError(signUpError.message);
            } else {
                setMessage('Account created! Please check your email for confirmation (if enabled) or try logging in.');
                setIsSignUp(false); // Switch back to login
            }
        } else {
            const { error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            if (signInError) {
                setError(signInError.message);
            } else {
                navigate('/admin');
            }
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-richBlack px-4">
            <div className="w-full max-w-md bg-darkGreen/30 border border-bangladeshGreen/30 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-caribbeanGreen/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-antiFlashWhite mb-2 flex items-center">
                        {isSignUp ? <UserPlus className="w-6 h-6 mr-3 text-caribbeanGreen" /> : <Lock className="w-6 h-6 mr-3 text-caribbeanGreen" />}
                        {isSignUp ? 'Create Admin' : 'Admin Access'}
                    </h2>
                    <p className="text-stone mb-8">
                        {isSignUp
                            ? 'Create your admin account. IMPORTANT: Disable signups in Supabase after this.'
                            : 'Authenticate to manage your portfolio.'}
                    </p>

                    <form onSubmit={handleAuth} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-stone mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-richBlack/50 border border-darkGreen rounded-xl px-4 py-3 text-antiFlashWhite focus:outline-none focus:border-caribbeanGreen/50 transition-colors"
                                placeholder="admin@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-stone mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-richBlack/50 border border-darkGreen rounded-xl px-4 py-3 text-antiFlashWhite focus:outline-none focus:border-caribbeanGreen/50 transition-colors"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        {error && (
                            <div className="text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                                {error}
                            </div>
                        )}

                        {message && (
                            <div className="text-caribbeanGreen text-sm bg-caribbeanGreen/10 p-3 rounded-lg border border-caribbeanGreen/20">
                                {message}
                            </div>
                        )}

                        <Button variant="primary" className="w-full justify-center">
                            {loading ? (isSignUp ? 'Creating Account...' : 'Authenticating...') : (isSignUp ? 'Create Account' : 'Enter Dashboard')}
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <button
                            onClick={() => setIsSignUp(!isSignUp)}
                            className="text-sm text-stone/70 hover:text-caribbeanGreen transition-colors"
                        >
                            {isSignUp ? 'Already have an account? Log In' : 'Need an account? Sign Up'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
