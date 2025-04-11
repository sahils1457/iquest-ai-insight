
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const benefits = [
    "Improve interview confidence with AI-powered feedback",
    "Practice industry-specific interviews for better preparation",
    "Get detailed reports to track your progress",
    "Access anytime, anywhere on any device"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-iqblue to-iqblue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Master Your Interview Skills?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Join thousands of job seekers who have transformed their interview performance with iQuest.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-iqblue hover:bg-gray-100 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center" asChild>
              <Link to="/auth/signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-lg transition-all flex items-center justify-center" asChild>
              <Link to="/#pricing">
                View Pricing
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
