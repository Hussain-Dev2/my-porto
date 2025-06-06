'use client';
import Link from 'next/link';

// Hero component - Main landing section of the portfolio
const Hero = () => {
  return (
    // Main container with gradient background and full viewport height
    <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
      {/* Semi-transparent overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Main content container with higher z-index to appear above overlay */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        {/* Main heading with animation */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Welcome to My Portfolio
        </h1>
        {/* Subheading with responsive text size */}
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          I create beautiful and functional digital experiences
        </p>
        {/* Call-to-action buttons container */}
        <div className="flex gap-4 justify-center">
          {/* Primary CTA button - View Projects */}
          <Link href="/#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            View Projects
          </Link>
          {/* Secondary CTA button - About Me */}
          <Link href="/about" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero; 