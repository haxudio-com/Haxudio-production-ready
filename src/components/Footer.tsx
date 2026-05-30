import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-section border-t border-border-s pt-16 pb-8" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Col */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold gradient-text">Haxudio</span>
            </Link>
            <p className="text-text-m text-sm leading-relaxed max-w-xs">
              Building digital experiences that drive growth. We transform visions into stunning digital products through innovative tech and design.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/company/haxudio-digital-solutions" className="p-2.5 bg-bg-main border border-border-s rounded-xl text-text-m hover:text-primary transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2.5 bg-bg-main border border-border-s rounded-xl text-text-m hover:text-primary transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61567343046881" className="p-2.5 bg-bg-main border border-border-s rounded-xl text-text-m hover:text-primary transition-all duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>  

          {/* Quick Links */}
          <div>
            <h4 className="text-text-h font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-text-m text-sm hover:text-primary transition-all duration-300">Our Services</Link></li>
              <li><Link to="/projects" className="text-text-m text-sm hover:text-primary transition-all duration-300">Our Projects</Link></li>
              <li><Link to="/about" className="text-text-m text-sm hover:text-primary transition-all duration-300">About Us</Link></li>
              <li><Link to="/contact" className="text-text-m text-sm hover:text-primary transition-all duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-text-h font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-text-m text-sm">
                <Mail size={18} className="text-primary mt-0.5 shrink-0" />
                <span>hello@haxudio.com</span>
              </li>
              <li className="flex items-start space-x-3 text-text-m text-sm">
                <Phone size={18} className="text-primary mt-0.5 shrink-0" />
                <span>+92 318 3690179</span>
              </li>
              <li className="flex items-start space-x-3 text-text-m text-sm">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span>A-1 City, Brewery Road Quetta, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-s pt-8 text-center text-text-m text-xs">
          <p>© {currentYear} Haxudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
