
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">iQuest AI</h3>
            <p className="text-gray-600">
              AI-powered interview preparation and assessment platform for candidates and companies.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-600 hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Dashboards</h3>
            <ul className="space-y-2">
              <li><Link to="/dashboard/candidate" className="text-gray-600 hover:text-primary transition-colors">Candidate Dashboard</Link></li>
              <li><Link to="/dashboard/corporate" className="text-gray-600 hover:text-primary transition-colors">Corporate Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">support@iquestai.com</li>
              <li className="text-gray-600">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} iQuest AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
