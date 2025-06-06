'use client';

import { FaCode, FaServer, FaMobile, FaDesktop } from 'react-icons/fa';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: <FaCode className="text-4xl text-[#858d71]" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Next.js, and TypeScript.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "Modern UI/UX"
      ],
      show: true
    },
    {
      icon: <FaServer className="text-4xl text-[#858d71]" />,
      title: "Backend Development",
      description: "Robust server-side solutions using Node.js, Express, and various databases.",
      features: [
        "API Development",
        "Database Design",
        "Authentication",
        "Cloud Integration"
      ],
      show: false
    },
    {
      icon: <FaMobile className="text-4xl text-[#858d71]" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications using React Native and modern frameworks.",
      features: [
        "iOS & Android Apps",
        "Native Features",
        "Push Notifications",
        "Offline Support"
      ],
      show: false
    },
    {
      icon: <FaDesktop className="text-4xl text-[#858d71]" />,
      title: "Desktop Applications",
      description: "Cross-platform desktop applications using Electron and modern web technologies.",
      features: [
        "Windows & Mac Support",
        "System Integration",
        "Auto Updates",
        "Offline Capability"
      ],
      show: false
    }
  ];

  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#858d71] to-[#0b2c3d] bg-clip-text text-transparent">
          My Services
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Comprehensive development solutions tailored to your needs
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`bg-white dark:bg-[#0b2c3d] p-8 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform duration-300 ${!service.show ? 'disappear' : ''}`}
          >
            <div className="flex items-center mb-6">
              <div className="p-4 bg-opacity-10 bg-[#858d71] rounded-lg">
                {service.icon}
              </div>
              <h2 className="text-3xl font-bold ml-6 text-[#858d71]">{service.title}</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {service.description}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, featureIndex) => (
                <li 
                  key={featureIndex}
                  className="flex items-center text-gray-600 dark:text-gray-300 text-lg"
                >
                  <span className="w-3 h-3 bg-[#858d71] rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#858d71]">Ready to Start?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Let&apos;s discuss your project and create something amazing together.
        </p>
        <Link 
          href="/Pages/contact"
          className="btn-login px-8 py-3 rounded-lg text-white font-semibold inline-block hover:scale-105 transition-transform"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
} 