import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob" />
        <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New v2.0 is now available
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-text-main mb-8 leading-[1.1]">
            Build your next idea <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              faster than ever
            </span>
          </h1>

          <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            NovaLanding provides everything you need to create a modern, high-converting landing page. Beautifully designed, easy to customize, and built for performance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/contact" className="btn btn-primary px-8 py-4 rounded-full text-lg w-full sm:w-auto group">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="btn btn-secondary px-8 py-4 rounded-full text-lg w-full sm:w-auto">
              View Features
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-text-muted mb-20">
            {['No credit card required', '14-day free trial', 'Cancel anytime'].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                {item}
              </div>
            ))}
          </div>

          {/* Dashboard Preview */}
          <div className="relative mx-auto max-w-5xl rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4 animate-fade-in-up animation-delay-500">
            <img
              src="/images/landing/saas-dashboard.jpg"
              alt="App screenshot"
              className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
