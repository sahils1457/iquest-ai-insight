
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { HomeIcon, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-iqblue mb-4">404</h1>
        <p className="text-2xl font-medium text-iqdark-500 mb-6">Oops! Page not found</p>
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" className="flex items-center gap-2">
            <Link to="/" className="inline-flex items-center">
              <ArrowLeft size={16} />
              <span>Go Back</span>
            </Link>
          </Button>
          <Button asChild className="bg-iqblue hover:bg-iqblue-600 text-white">
            <Link to="/" className="inline-flex items-center gap-2">
              <HomeIcon size={16} />
              <span>Return to Home</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
