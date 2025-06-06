"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#858d71] to-[#0b2c3d] bg-clip-text text-transparent">
          About Me
        </h1>
        <div className="relative w-48 h-48 mx-auto mb-8">
          <Image
            src="/Hu.jpg"
            alt="Profile Picture"
            fill
            className="rounded-full object-cover border-4 border-[#0b2c3d]"
          />
        </div>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Full Stack Developer passionate about creating innovative web solutions
        </p>
      </div>

      {/* Skills Section */}
      <div className="bg-white dark:bg-[#0b2c3d] p-8 rounded-xl shadow-lg mb-16">
        <h2 className="text-2xl font-bold mb-6 text-[#858d71]">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-[#1a1a1a] rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-[#858d71]">Frontend</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>React.js</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-[#1a1a1a] rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-[#858d71]">Backend</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-[#1a1a1a] rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-[#858d71]">Tools</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Git</li>
              <li>Docker</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-white dark:bg-[#0b2c3d] p-8 rounded-xl shadow-lg mb-16">
        <h2 className="text-2xl font-bold mb-6 text-[#858d71]">Experience</h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-lg mb-2">Full Stack Developer</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">2021 - Present</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Developed and maintained multiple web applications</li>
              <li>Implemented responsive designs and modern UI/UX practices</li>
              <li>Collaborated with cross-functional teams to deliver projects</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#858d71]">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Interested in working together? Let&apos;s connect!
        </p>
        <Link href="/Pages/contact">
          <button className="btn-login px-8 py-3 rounded-lg text-white font-semibold">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
} 