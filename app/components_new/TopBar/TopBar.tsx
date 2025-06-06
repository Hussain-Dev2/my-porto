"use client";
import Link from "next/link";
import "./TobBarArt.css";
import { useState } from "react";
import AuthModal from "../Auth/AuthModal";

// TopBar component - Main navigation component of the application
function TopBar() {
    // Authentication state (temporary hardcoded value)
    const Auth = false;
    // State for mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // State for authentication modal visibility
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    // Toggle mobile menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle opening the authentication modal
    const handleOpenAuthModal = () => {
        setIsAuthModalOpen(true);
    };

    // Handle closing the authentication modal
    const handleCloseAuthModal = () => {
        setIsAuthModalOpen(false);
    };
    
    return (
        <>
            {/* Conditional rendering based on authentication state */}
            {!Auth ? (
                // Non-authenticated user view
                <div className="con p-4 text-white">
                    <div className="flex justify-between items-center">
                        {/* Logo/Brand */}
                        <div className="cursor-pointer text-lg font-bold">
                            <Link href="/">Hussain-Dev</Link>
                        </div>
                        
                        {/* Hamburger Menu Button - Only visible on mobile */}
                        <button 
                            className="md:hidden p-2"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                {/* Dynamic icon based on menu state */}
                                {isMenuOpen ? (
                                    // Close (X) icon
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    // Hamburger menu icon
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>

                        {/* Desktop Navigation - Hidden on mobile */}
                        <nav className="hidden md:flex space-x-4 items-center">
                            <Link href="/" className="hover:text-gray-400">Home</Link>
                            <Link href="/Pages/about" className="hover:text-gray-400">About</Link>
                            <Link href="/Pages/services" className="hover:text-gray-400">Services</Link>
                            <Link href="/projects" className="hover:text-gray-400">My Projects</Link>
                            <button 
                                onClick={handleOpenAuthModal}
                                className="hover:text-gray-400 rounded-2xl px-4 py-1 cursor-pointer btn-login"
                            >
                                Login
                            </button>
                        </nav>
                    </div>

                    {/* Mobile Navigation - Only visible when menu is open */}
                    <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col items-center mt-4 space-y-4`}>
                        <Link href="/" className="hover:text-gray-400 w-full text-center py-2">Home</Link>
                        <Link href="/Pages/about" className="hover:text-gray-400 w-full text-center py-2">About</Link>
                        <Link href="/Pages/services" className="hover:text-gray-400 w-full text-center py-2">Services</Link>
                        <Link href="/projects" className="hover:text-gray-400 w-full text-center py-2">My Projects</Link>
                        <button 
                            onClick={handleOpenAuthModal}
                            className="hover:text-gray-400 rounded-2xl px-4 py-1 cursor-pointer btn-login w-full"
                        >
                            Login
                        </button>
                    </nav>

                    {/* Authentication Modal Component */}
                    <AuthModal 
                        isOpen={isAuthModalOpen}
                        onClose={handleCloseAuthModal}
                    />
                </div>
            ) : (
                // Authenticated user view
                <div className="con p-4 text-white">
                    <div className="flex justify-between items-center">
                        {/* Logo/Brand */}
                        <div className="cursor-pointer text-lg font-bold">
                            <Link href="/">Hussain-Dev</Link>
                        </div>
                        
                        {/* Hamburger Menu Button - Only visible on mobile */}
                        <button 
                            className="md:hidden p-2"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                {/* Dynamic icon based on menu state */}
                                {isMenuOpen ? (
                                    // Close (X) icon
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    // Hamburger menu icon
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>

                        {/* Desktop Navigation - Hidden on mobile */}
                        <nav className="hidden md:flex space-x-4">
                            <Link href="/" className="hover:text-gray-400">Home</Link>
                            <Link href="/Pages/about" className="hover:text-gray-400">About</Link>
                            <Link href="/Pages/services" className="hover:text-gray-400">Services</Link>
                            <Link href="/projects" className="hover:text-gray-400">My Projects</Link>
                            <Link href="/Pages/contact" className="hover:text-gray-400">Contact</Link>
                        </nav>
                    </div>

                    {/* Mobile Navigation - Only visible when menu is open */}
                    <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col items-center mt-4 space-y-4`}>
                        <Link href="/" className="hover:text-gray-400 w-full text-center py-2">Home</Link>
                        <Link href="/Pages/about" className="hover:text-gray-400 w-full text-center py-2">About</Link>
                        <Link href="/Pages/services" className="hover:text-gray-400 w-full text-center py-2">Services</Link>
                        <Link href="/projects" className="hover:text-gray-400 w-full text-center py-2">My Projects</Link>
                        <Link href="/Pages/contact" className="hover:text-gray-400 w-full text-center py-2">Contact</Link>
                    </nav>
                </div>
            )}
        </>
    );
}

export default TopBar;