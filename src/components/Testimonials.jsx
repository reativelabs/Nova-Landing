import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager at TechFlow',
    image: '/images/avatars/avatar-3.jpg',
    content: "NovaLanding has completely transformed how we build landing pages. The components are beautiful and easy to customize. Highly recommended!"
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, StartupX',
    content: 'The templates are incredibly easy to customize. We launched our new site in just under 24 hours.',
    rating: 5,
    image: '/images/avatars/avatar-6.jpg',
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Marketing Director, GrowthCo',
    content: 'Conversion rates have increased by 40% since we switched to NovaLanding. Highly recommended!',
    rating: 5,
    image: '/images/avatars/avatar-7.jpg',
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-bg-light">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by industry leaders</h2>
          <p className="text-lg text-text-muted">
            Don't just take our word for it. Here's what our customers have to say about NovaLanding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm relative">
              <Quote className="absolute top-8 right-8 w-8 h-8 text-primary/10" />

              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-text-main mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-text-muted">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
