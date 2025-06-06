// Import necessary components and dependencies
import Link from "next/link";
import Card from "./components_new/cards/card1";
import Hero from "./components_new/hero/Hero";

// Home page component - Main landing page of the application
export default function Home() {
  return (
    // Main container with a dark gradient background
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero section component for the landing page */}
      <Hero />
      
      {/* Portfolio section displaying work examples */}
      <section className="py-16 px-4">
        {/* Section heading */}
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Explore My Work
        </h2>
        {/* Container for the card grid */}
        <div className="container mx-auto">
          {/* Responsive grid layout for portfolio cards
              - 1 column on mobile
              - 2 columns on medium screens
              - 3 columns on large screens
              - 4 columns on extra large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {/* First card with navigation link to About page */}
            <Link href="/Pages/about" className="transform hover:scale-105 transition-transform duration-300">
              <Card/>
            </Link>
            {/* Additional portfolio cards with hover animation */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Card/>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Card/>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Card/>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Card/>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Card/>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Card/>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Card/>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
