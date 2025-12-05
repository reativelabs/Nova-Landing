import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const team = [
    {
        name: 'David Kim',
        role: 'CEO & Co-founder',
        image: '/images/team/member-1.jpg',
        social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
        name: 'Sarah Jenkins',
        role: 'Head of Design',
        image: '/images/team/member-2.jpg',
        social: { twitter: '#', linkedin: '#', dribbble: '#' }
    },
    {
        name: 'Michael Chen',
        role: 'Lead Developer',
        image: '/images/team/member-3.jpg',
        social: { twitter: '#', linkedin: '#', github: '#' }
    },
    {
        name: 'Emily Davis',
        role: 'Marketing Director',
        image: '/images/team/member-4.jpg',
        bio: 'Creative marketer with a knack for storytelling and brand building.'
    }
];

const Team = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the minds behind NovaLanding</h2>
                    <p className="text-lg text-text-muted">
                        A diverse team of experts dedicated to helping you succeed.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="group">
                            <div className="relative overflow-hidden rounded-2xl mb-4">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="flex gap-4 text-white">
                                        <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
                                        <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                                        <a href="#" className="hover:text-primary transition-colors"><Github size={20} /></a>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-primary font-medium mb-2">{member.role}</p>
                            <p className="text-sm text-text-muted">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
