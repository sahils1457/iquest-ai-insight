
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>iQuest AI - Interview Preparation Platform</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <HeroSection />
          <FeaturesSection />
          <TestimonialsSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
