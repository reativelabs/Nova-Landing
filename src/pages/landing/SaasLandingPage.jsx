import React, { useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, BarChart } from 'lucide-react';

const SaasLandingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 lg:py-32 text-center container">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    v2.0 is now live
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-text-main mb-8 leading-[1.1]">
                    Manage your team <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                        with confidence
                    </span>
                </h1>
                <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                    The all-in-one platform to streamline your workflow, boost productivity, and scale your business.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <button className="btn btn-primary px-8 py-4 rounded-full text-lg w-full sm:w-auto group">
                        Start Free Trial
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="btn btn-secondary px-8 py-4 rounded-full text-lg w-full sm:w-auto">
                        Watch Demo
                    </button>
                </div>

                {/* Dashboard Preview */}
                <div className="relative mx-auto max-w-5xl rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4">
                    <img
                        src="/images/landing/saas-dashboard.jpg"
                        alt="Dashboard"
                        className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                    />
                </div>
            </section>

            {/* Features Grid */}
            <section className="section-padding bg-bg-light">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful features for modern teams</h2>
                        <p className="text-lg text-text-muted">Everything you need to manage your projects and team in one place.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Zap />, title: 'Real-time Sync', desc: 'Changes are saved instantly across all devices.' },
                            { icon: <Shield />, title: 'Enterprise Security', desc: 'Bank-grade encryption to keep your data safe.' },
                            { icon: <BarChart />, title: 'Advanced Analytics', desc: 'Gain insights into your team performance.' }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-text-muted">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="section-padding">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple pricing</h2>
                        <p className="text-lg text-text-muted">Start for free, upgrade as you grow.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { name: 'Starter', price: '$0', features: ['Up to 3 users', 'Basic features'] },
                            { name: 'Pro', price: '$29', features: ['Unlimited users', 'Advanced analytics', 'Priority support'], popular: true },
                            { name: 'Enterprise', price: 'Custom', features: ['Dedicated account manager', 'Custom integrations', 'SLA'] }
                        ].map((plan, idx) => (
                            <div key={idx} className={`p-8 rounded-2xl border transition-all duration-300 ${plan.popular ? 'border-primary shadow-xl relative bg-white scale-105' : 'border-gray-200 bg-bg-light hover:border-primary/30'}`}>
                                {plan.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</div>}
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg text-text-muted font-normal">/mo</span></div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-text-muted">
                                            <CheckCircle className="w-5 h-5 text-primary" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                                    Choose Plan
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-20 bg-primary text-white text-center">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join over 10,000 teams who use our platform to manage their projects.
                    </p>
                    <button className="bg-white text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
                        Start Your Free Trial
                    </button>
                    <p className="mt-4 text-sm text-white/70">No credit card required. Cancel anytime.</p>
                </div>
            </section>
        </div>
    );
};

export default SaasLandingPage;
