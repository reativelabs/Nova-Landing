import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Hero />
            <Services />
            <About />
            <Testimonials />
            <div className="bg-bg-light">
                <Team />
            </div>
            {/* CTA Section */}
            <section className="py-20 bg-primary text-white text-center">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied users and take your business to the next level today.
                    </p>
                    <a href="/contact" className="btn bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                        Start Your Free Trial
                    </a>
                </div>
            </section>
        </main>
    );
};

export default Home;
