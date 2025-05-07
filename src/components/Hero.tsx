
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1920&auto=format')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10 px-4">
        <div className="max-w-xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Transform Your Body, <span className="text-primary-blue">Transform Your Life</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Personalized training programs designed to help you reach your fitness goals, 
            no matter where you're starting from.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary-blue hover:bg-blue-600 text-white text-lg py-6 px-8">
              Get Started
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-lg py-6 px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
