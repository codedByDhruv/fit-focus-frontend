
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Lost 25 lbs",
    content: "Working with Alex completely transformed my approach to fitness. The personalized training plan was challenging but achievable, and the results speak for themselves!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format"
  },
  {
    name: "Michael Rodriguez",
    role: "Gained Muscle",
    content: "After years of trying different gyms and routines with minimal results, Alex's program finally helped me build the strength and muscle I've always wanted.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format"
  },
  {
    name: "Emily Chen",
    role: "Improved Fitness",
    content: "The online coaching program has been a game-changer for me. Even with my busy schedule, Alex helped me establish a consistent routine that works for my lifestyle.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <div className="h-1 w-20 bg-primary-blue mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about their experiences
            and the results they've achieved.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 rounded-full border-4 border-primary-blue transform translate-x-1 translate-y-1"></div>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md relative z-10"
                    />
                  </div>
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-primary-blue">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
