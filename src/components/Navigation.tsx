
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between bg-white shadow-sm">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold text-primary">iQuest AI</Link>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <Link to="/features" className="text-gray-700 hover:text-primary transition-colors">Features</Link>
        <Link to="/pricing" className="text-gray-700 hover:text-primary transition-colors">Pricing</Link>
        <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">About Us</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/login">
          <Button variant="outline">Log in</Button>
        </Link>
        <Link to="/signup">
          <Button>Sign up</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
