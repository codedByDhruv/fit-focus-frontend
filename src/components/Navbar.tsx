
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary-blue">FitFocus</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-800 hover:text-primary-blue font-medium">Home</a>
          <a href="#about" className="text-gray-800 hover:text-primary-blue font-medium">About</a>
          <a href="#services" className="text-gray-800 hover:text-primary-blue font-medium">Services</a>
          <a href="#testimonials" className="text-gray-800 hover:text-primary-blue font-medium">Testimonials</a>
          <a href="#contact">
            <Button className="bg-primary-blue hover:bg-blue-600 text-white">Contact Me</Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <a href="#home" className="text-gray-800 hover:text-primary-blue font-medium" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="text-gray-800 hover:text-primary-blue font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#services" className="text-gray-800 hover:text-primary-blue font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#testimonials" className="text-gray-800 hover:text-primary-blue font-medium" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="bg-primary-blue hover:bg-blue-600 text-white w-full">Contact Me</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
