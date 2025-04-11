
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Clock 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-iqdark text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">iQuest</span>
              <span className="ml-1 text-sm bg-iqblue text-white px-1.5 py-0.5 rounded">AI</span>
            </div>
            <p className="text-gray-300 mb-4">
              AI-powered interview preparation platform to help you land your dream job.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-iqblue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-iqblue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-iqblue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-iqblue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-iqblue transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-300 hover:text-iqblue transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-iqblue transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-iqblue transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-iqblue transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-iqblue transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-iqblue transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-300 hover:text-iqblue transition-colors">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/compliance" className="text-gray-300 hover:text-iqblue transition-colors">Compliance</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-iqblue" />
                <a href="mailto:contact@iquest.ai" className="text-gray-300 hover:text-iqblue transition-colors">
                  contact@iquest.ai
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-iqblue" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-iqblue transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-iqblue" />
                <span className="text-gray-300">
                  1234 Innovation Drive, Tech City, CA 94043
                </span>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="mr-2 text-iqblue" />
                <span className="text-gray-300">
                  Mon-Fri: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} iQuest AI. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-gray-400 text-sm hover:text-iqblue transition-colors">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
