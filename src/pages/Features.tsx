
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Features = () => {
  return (
    <>
      <Helmet>
        <title>Features - iQuest AI</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Features</h1>
            <p className="text-gray-600 text-lg mb-12">
              Discover all the powerful features that iQuest AI offers to help you ace your interviews.
            </p>
            
            {/* Feature content would go here */}
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">Feature details coming soon!</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Features;
