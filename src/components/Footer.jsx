import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Twitter, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bg-dark text-white pt-20 pb-10">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                <Rocket className="text-primary w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Nova<span className="text-primary">Landing</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building the future of digital experiences. Create stunning landing pages with ease and speed.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Product</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">License</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>123 Innovation Drive,<br />Tech City, TC 90210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:hello@novalanding.com" className="hover:text-white transition-colors">hello@novalanding.com</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} NovaLanding. Created by <a href="https://reative.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">Reative</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
