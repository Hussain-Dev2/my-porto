"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the shape of our theme context
type ThemeContextType = {
  theme: 'light' | 'dark';      // Current theme state
  language: 'en' | 'ar';        // Current language state
  toggleTheme: () => void;      // Function to switch between light/dark themes
  toggleLanguage: () => void;   // Function to switch between English/Arabic
};

// Create the context with undefined default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component that wraps the app and provides theme functionality
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize theme and language state
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  // Effect to update document classes and attributes when theme or language changes
  useEffect(() => {
    // Update theme classes on document root
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    
    // Update document direction and language attributes
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [theme, language]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Toggle between English and Arabic languages
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  // Provide theme context to children components
  return (
    <ThemeContext.Provider value={{ theme, language, toggleTheme, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme context in components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 