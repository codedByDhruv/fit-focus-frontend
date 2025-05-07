
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "1-on-1 Personal Training",
    description: "Personalized training sessions tailored to your specific goals, fitness level, and preferences.",
    price: "$65",
    duration: "per session",
    features: ["Custom workout plans", "Form correction", "Progress tracking", "Nutritional guidance"]
  },
  {
    title: "Online Coaching",
    description: "Expert guidance and accountability from anywhere in the world.",
    price: "$199",
    duration: "per month",
    features: ["Weekly check-ins", "Custom workout plans", "Nutrition planning", "24/7 support"]
  },
  {
    title: "Group Training",
    description: "Fun, motivating group sessions that push you to your limits while building community.",
    price: "$30",
    duration: "per session",
    features: ["High energy workouts", "Team motivation", "Varied routines", "Affordable training"]
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <div className="h-1 w-20 bg-primary-blue mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Choose the training option that best fits your lifestyle, goals, and preferences.
            Each service is designed to maximize results and provide an exceptional experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary-blue">{service.price}</span>
                  <span className="text-gray-500 ml-1">{service.duration}</span>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <svg className="h-5 w-5 text-primary-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary-blue hover:bg-blue-600">Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
