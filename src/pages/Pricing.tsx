
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - iQuest AI</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center">Pricing Plans</h1>
            <p className="text-gray-600 text-lg mb-12 text-center">
              Choose the right plan for your interview preparation needs
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border rounded-lg p-8">
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <p className="text-3xl font-bold mb-4">Free</p>
                <p className="text-gray-600 mb-6">For individuals just getting started</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>5 practice interviews</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Basic feedback</span>
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </div>
              
              <div className="border rounded-lg p-8 bg-primary/5 shadow-md">
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <p className="text-3xl font-bold mb-4">$19<span className="text-base font-normal">/mo</span></p>
                <p className="text-gray-600 mb-6">For serious job seekers</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Unlimited practice interviews</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Advanced AI feedback</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Industry-specific questions</span>
                  </li>
                </ul>
                <Button className="w-full">Subscribe</Button>
              </div>
              
              <div className="border rounded-lg p-8">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-3xl font-bold mb-4">Contact Us</p>
                <p className="text-gray-600 mb-6">For companies and teams</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>All Pro features</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Custom interview scenarios</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Admin dashboard</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Contact Sales</Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Pricing;
