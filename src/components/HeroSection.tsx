
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary/90 to-primary py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ace Your Next Interview with AI
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8">
            iQuest AI helps you practice and prepare for interviews with realistic AI-powered simulations and personalized feedback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/practice">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Practicing Now
              </Button>
            </Link>
            <Link to="/features">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
