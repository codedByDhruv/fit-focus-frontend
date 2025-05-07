
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-primary-blue rounded-full opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format" 
              alt="Personal Trainer" 
              className="rounded-lg shadow-lg relative z-10 w-full"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Hi, I'm <span className="text-primary-blue">Alex Johnson</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              With over 10 years of experience as a certified personal trainer, 
              I've helped hundreds of clients achieve their fitness goals and transform their lives.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My approach to fitness combines personalized workout programs, 
              nutrition guidance, and ongoing motivation to ensure you not only 
              reach your goals but maintain your results for the long term.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-primary-blue">10+</span>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-primary-blue">500+</span>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-primary-blue">5</span>
                <p className="text-gray-600">Certifications</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-primary-blue">100%</span>
                <p className="text-gray-600">Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
