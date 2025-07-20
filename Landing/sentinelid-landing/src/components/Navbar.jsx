import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Menu, X, Github, FileText, ChevronRight } from 'lucide-react';

export default function Navbar({ showBackButton = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFeatures = () => {
    navigate('/');
    setTimeout(() => {
      const featuresSection = document.getElementById('features-section');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', onClick: () => navigate('/') },
    { name: 'Features', onClick: scrollToFeatures },
    { name: 'Docs', icon: FileText, onClick: () => navigate('/docs') },
    { name: 'GitHub', icon: Github, href: 'https://github.com/sentinelid' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-3 text-white hover:text-cyan-400 transition-colors group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">SentinelID</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.href ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium group"
                >
                  {item.icon && <item.icon className="w-4 h-4 group-hover:rotate-12 transition-transform" />}
                  <span>{item.name}</span>
                </a>
              ) : (
                <button
                  key={item.name}
                  onClick={item.onClick}
                  className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors font-medium group"
                >
                  {item.icon && <item.icon className="w-4 h-4 group-hover:rotate-12 transition-transform" />}
                  <span>{item.name}</span>
                </button>
              )
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => navigate('/download')}
              className="text-gray-300 hover:text-cyan-400 font-medium transition-colors"
            >
              Integration Guide
            </button>
            
            <button 
              onClick={() => navigate('/download')}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Early Access
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 space-y-4 border-t border-gray-800/50">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  item.onClick?.();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2 w-full text-left"
              >
                {item.icon && <item.icon className="w-5 h-5" />}
                <span>{item.name}</span>
              </button>
            ))}
            
            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  navigate('/download');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-gray-300 hover:text-cyan-400 font-medium py-2 transition-colors"
              >
                Integration Guide
              </button>
              
              <button 
                onClick={() => {
                  navigate('/download');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}