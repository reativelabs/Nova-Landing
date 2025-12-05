import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about/team-meeting.jpg"
                alt="Team collaboration"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block animate-fade-in-up">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white" />
                  ))}
                </div>
                <span className="font-bold text-lg">2k+ Users</span>
              </div>
              <p className="text-sm text-text-muted">Trusted by thousands of teams worldwide.</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Designed for modern teams who move fast
            </h2>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              We believe that great software should be intuitive, powerful, and beautiful. That's why we built NovaLanding with a focus on user experience and performance.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Seamless integration with your existing tools',
                'Real-time collaboration features',
                'Advanced analytics and reporting',
                '24/7 dedicated support team'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-text-main font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="btn btn-secondary px-8 py-3 rounded-lg">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
