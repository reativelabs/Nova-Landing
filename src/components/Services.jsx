import React from 'react';
import { Zap, Shield, Smartphone, Globe, BarChart, Users } from 'lucide-react';

const services = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance to ensure your users have the best experience possible.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Secure by Default',
    description: 'Enterprise-grade security features built-in to protect your data and your users.'
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Mobile First',
    description: 'Responsive design that looks and works perfectly on any device, from mobile to desktop.'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Global Scale',
    description: 'Infrastructure designed to scale with your business, reaching users anywhere in the world.'
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: 'Analytics Ready',
    description: 'Integrated analytics tools to help you understand your users and grow your business.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Team Collaboration',
    description: 'Built-in tools to help your team work together more effectively and efficiently.'
  }
];

const Services = () => {
  return (
    <section className="section-padding bg-bg-light">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to succeed</h2>
          <p className="text-lg text-text-muted">
            Powerful features to help you build, launch, and scale your next big idea.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
