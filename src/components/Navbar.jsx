import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path
      ? 'text-primary font-semibold'
      : 'text-text-muted hover:text-primary transition-colors';
  };

  const landingPages = [
    { path: '/landing/saas', label: 'SaaS Product' },
    { path: '/landing/mobile-app', label: 'Mobile App' },
    { path: '/landing/agency', label: 'Digital Agency' },
    { path: '/landing/ebook', label: 'E-Book' },
    { path: '/landing/webinar', label: 'Webinar' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'
      }`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Rocket className="text-primary w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-text-main tracking-tight">
            Nova<span className="text-primary">Landing</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm ${isActive('/')}`}>Home</Link>

          {/* Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className={`flex items-center gap-1 text-sm ${location.pathname.includes('/landing') ? 'text-primary font-semibold' : 'text-text-muted hover:text-primary transition-colors'}`}>
              Landing Pages <ChevronDown size={14} />
            </button>

            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48 transition-all duration-200 ${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden p-2">
                {landingPages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="block px-4 py-2 text-sm text-text-muted hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/services" className={`text-sm ${isActive('/services')}`}>Features</Link>
          <Link to="/about" className={`text-sm ${isActive('/about')}`}>About</Link>
          <Link to="/blog" className={`text-sm ${isActive('/blog')}`}>Blog</Link>
          <Link to="/contact" className={`text-sm ${isActive('/contact')}`}>Contact</Link>
        </div>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="btn btn-primary px-6 py-2.5 rounded-full text-sm"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-text-main hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg md:hidden animate-in slide-in-from-top-5 duration-200 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-4 gap-2">
            <Link to="/" className={`p-3 rounded-lg hover:bg-bg-light ${isActive('/')}`} onClick={() => setIsOpen(false)}>Home</Link>

            <div className="p-3">
              <div className="text-sm font-semibold text-text-muted mb-2">Landing Pages</div>
              <div className="pl-4 flex flex-col gap-2 border-l-2 border-gray-100">
                {landingPages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className={`text-sm ${isActive(page.path)}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/services" className={`p-3 rounded-lg hover:bg-bg-light ${isActive('/services')}`} onClick={() => setIsOpen(false)}>Features</Link>
            <Link to="/about" className={`p-3 rounded-lg hover:bg-bg-light ${isActive('/about')}`} onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/blog" className={`p-3 rounded-lg hover:bg-bg-light ${isActive('/blog')}`} onClick={() => setIsOpen(false)}>Blog</Link>
            <Link to="/contact" className={`p-3 rounded-lg hover:bg-bg-light ${isActive('/contact')}`} onClick={() => setIsOpen(false)}>Contact</Link>

            <div className="h-px bg-gray-100 my-2" />
            <Link
              to="/contact"
              className="btn btn-primary w-full py-3 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
