
import React from 'react';
import SignupForm from '@/components/auth/SignupForm';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const SignupPage = () => {
  const benefits = [
    "AI-powered interview feedback",
    "Personalized performance reports",
    "Industry-specific practice interviews",
    "Expert review of your responses",
    "Track your progress over time"
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Benefits */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-iqblue to-iqblue-700 text-white p-10 items-center justify-center">
        <div className="max-w-md">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6">Elevate Your Interview Skills with iQuest</h2>
            <p className="text-blue-100 mb-8">
              Join thousands of candidates who have improved their interview performance and landed their dream jobs.
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-3 text-blue-200 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-white/10 backdrop-blur-sm rounded-lg">
            <blockquote className="italic text-blue-100">
              "iQuest transformed my interview approach completely. The AI feedback was so accurate and helpful. I'm now working at my dream company!"
            </blockquote>
            <div className="mt-4 flex items-center">
              <div className="w-10 h-10 rounded-full bg-white/20 mr-3"></div>
              <div>
                <div className="font-medium">Sarah Johnson</div>
                <div className="text-sm text-blue-200">Software Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center mb-6">
              <span className="text-2xl font-bold text-iqblue">iQuest</span>
              <span className="ml-1 text-sm bg-iqblue text-white px-1.5 py-0.5 rounded">AI</span>
            </Link>
            <h1 className="text-2xl font-bold text-iqdark">Create Your Account</h1>
            <p className="text-gray-600 mt-2">Start practicing interviews and get AI-powered feedback</p>
          </div>

          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
