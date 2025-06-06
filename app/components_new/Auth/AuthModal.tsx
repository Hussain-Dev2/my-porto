"use client";
import { useState, FormEvent } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [name, setName] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (isSignUp) {
            console.log('Sign up submitted:', { name, email, password });
        } else {
            console.log('Sign in submitted:', { email, password });
        }
        onClose();
    };

    const handleGoogleSignIn = () => {
        // Implement Google sign-in logic here
        console.log('Google sign-in clicked');
    };

    const handleFacebookSignIn = () => {
        // Implement Facebook sign-in logic here
        console.log('Facebook sign-in clicked');
    };

    const toggleAuthMode = () => {
        setIsSignUp(!isSignUp);
        setEmail('');
        setPassword('');
        setName('');
    };

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-[#1a1a1a] rounded-lg p-6 w-[400px] border border-gray-800">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-white">{isSignUp ? 'Sign Up' : 'Login'}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-200">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {isSignUp && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 bg-[#2a2a2a] text-white border border-gray-700 rounded focus:outline-none focus:border-blue-500 placeholder-gray-400"
                            required
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 bg-[#2a2a2a] text-white border border-gray-700 rounded focus:outline-none focus:border-blue-500 placeholder-gray-400"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 bg-[#2a2a2a] text-white border border-gray-700 rounded focus:outline-none focus:border-blue-500 placeholder-gray-400"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full btn-login p-3 rounded hover:scale-105 transition-transform"
                    >
                        {isSignUp ? 'Sign Up' : 'Login'}
                    </button>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-[#1a1a1a] text-gray-400">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4">
                        <button
                            onClick={handleGoogleSignIn}
                            className="flex items-center justify-center px-4 py-2 border border-gray-700 rounded-md shadow-sm text-white bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors"
                        >
                            <FaGoogle className="mr-2" />
                            Google
                        </button>
                        <button
                            onClick={handleFacebookSignIn}
                            className="flex items-center justify-center px-4 py-2 border border-gray-700 rounded-md shadow-sm text-white bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors"
                        >
                            <FaFacebook className="mr-2" />
                            Facebook
                        </button>
                    </div>
                </div>

                <div className="mt-4 text-center">
                    <button 
                        onClick={toggleAuthMode}
                        className="text-blue-400 text-sm hover:text-blue-300"
                    >
                        {isSignUp 
                            ? "Already have an account? Sign in" 
                            : "Don't have an account? Sign up"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthModal; 