
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-white to-iqlight overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-iqblue-100 text-iqblue mb-4">
              <span className="text-sm font-medium">AI-Powered Interview Practice</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-iqblue to-iqblue-600 bg-clip-text text-transparent">
              Master Interviews with AI-Driven Feedback
            </h1>
            <p className="text-lg text-iqdark-500 mb-8 max-w-xl">
              Practice with our AI interviewer, receive real-time feedback on your responses, 
              body language, and communication style to land your dream job.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-iqblue hover:bg-iqblue-600 text-white text-lg py-6 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center" asChild>
                <Link to="/practice">
                  Start Practicing Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="border-iqblue text-iqblue hover:bg-iqblue-50 text-lg py-6 px-8 rounded-lg transition-all" asChild>
                <Link to="/features">
                  Explore Features
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Award className="h-8 w-8 text-iqblue" />
                <span className="text-iqdark-500 font-medium">AI Evaluation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-8 w-8 text-iqblue" />
                <span className="text-iqdark-500 font-medium">Industry Experts</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-8 w-8 text-iqblue" />
                <span className="text-iqdark-500 font-medium">Custom Reports</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="absolute top-0 left-0 right-0 h-12 bg-gray-100 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-sm text-gray-500">iQuest AI Interview</div>
              </div>
              <div className="pt-16 pb-8 px-6">
                <div className="aspect-video bg-iqdark rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-white">
                    <div className="rounded-full bg-iqblue w-16 h-16 mx-auto flex items-center justify-center mb-4">
                      <Users className="h-8 w-8" />
                    </div>
                    <p className="text-lg font-medium">AI Interview Simulation</p>
                    <p className="text-sm text-gray-300 mt-2">Real-time feedback on responses and body language</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-iqblue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        AI
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-iqdark-500">Tell me about a challenging project you worked on and how you approached it?</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-iqblue-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-gray-200 text-iqdark rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        You
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-iqdark-500">I recently led a team to redesign our company's client portal under a tight deadline...</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-iqblue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                        AI
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-500">Feedback: Good example! Try to include more specific metrics about the project's success.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-iqblue-200 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-iqblue-300 rounded-full opacity-40 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
