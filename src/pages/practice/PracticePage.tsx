
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  CalendarPlus, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Users, 
  Briefcase,
  Code,
  PanelLeft,
  Building2,
  GraduationCap
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const PracticePage = () => {
  const interviewTypes = [
    {
      icon: <PanelLeft className="h-10 w-10 text-iqblue" />,
      title: "Behavioral Interview",
      description: "Practice answering questions about your experiences, work style, and how you handle different situations.",
      duration: "30-45 minutes",
      popular: true
    },
    {
      icon: <Code className="h-10 w-10 text-iqblue" />,
      title: "Technical Interview",
      description: "Tackle coding problems, system design questions, and technical concepts relevant to your field.",
      duration: "45-60 minutes",
      popular: false
    },
    {
      icon: <Building2 className="h-10 w-10 text-iqblue" />,
      title: "Case Interview",
      description: "Navigate through business scenarios and problem-solving exercises common in consulting roles.",
      duration: "45-60 minutes",
      popular: false
    },
    {
      icon: <Briefcase className="h-10 w-10 text-iqblue" />,
      title: "Job-Specific Interview",
      description: "Custom interview tailored to your target position with industry-specific questions.",
      duration: "30-45 minutes",
      popular: false
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-iqblue" />,
      title: "Entry-Level Interview",
      description: "Perfect for recent graduates or those with limited work experience.",
      duration: "20-30 minutes",
      popular: false
    },
    {
      icon: <Users className="h-10 w-10 text-iqblue" />,
      title: "Leadership Interview",
      description: "Questions focused on leadership qualities, team management, and strategic thinking.",
      duration: "30-45 minutes",
      popular: false
    }
  ];

  const benefits = [
    "Real-time AI feedback on your performance",
    "Industry-specific interview questions",
    "Body language and communication analysis",
    "Detailed performance reports with actionable insights",
    "Practice anytime, anywhere at your convenience",
    "Progress tracking to measure improvement"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-iqlight to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-iqdark">Practice Interviews With AI</h1>
              <p className="text-xl text-iqdark-500 mb-8">
                Choose from a variety of interview types and start practicing now with our intelligent AI interviewer.
              </p>
              <Button className="bg-iqblue hover:bg-iqblue-600 text-white text-lg px-8 py-6 rounded-lg flex items-center shadow-lg" asChild>
                <Link to="/auth/signup">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Interview Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Choose Your Interview Type</h2>
              <p className="text-lg text-iqdark-500">
                Select the interview format that best matches your needs and career goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {interviewTypes.map((type, index) => (
                <Card key={index} className={`relative overflow-hidden hover:shadow-lg transition-all ${type.popular ? 'border-iqblue' : ''}`}>
                  {type.popular && (
                    <div className="absolute top-0 right-0 bg-iqblue text-white text-xs px-3 py-1">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <div className="mb-4">{type.icon}</div>
                    <CardTitle>{type.title}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{type.duration}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-iqdark-500">{type.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-iqblue hover:bg-iqblue-600" asChild>
                      <Link to="/auth/signup">
                        Select & Continue
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-iqlight">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-iqdark-500">
                Our AI-powered interview practice platform makes it easy to prepare for your next interview
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: 1,
                  title: "Choose Interview Type",
                  description: "Select from various interview formats based on your needs"
                },
                {
                  step: 2,
                  title: "Practice with AI",
                  description: "Answer questions from our AI interviewer in a realistic setting"
                },
                {
                  step: 3,
                  title: "Get Instant Feedback",
                  description: "Receive detailed analysis on your performance"
                },
                {
                  step: 4,
                  title: "Track Progress",
                  description: "Monitor your improvement over time"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-iqblue text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-iqdark-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Why Practice With iQuest?</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 bg-iqblue hover:bg-iqblue-600 text-white" asChild>
                  <Link to="/auth/signup">
                    Get Started Now
                  </Link>
                </Button>
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-gray-100 rounded-lg p-6 relative">
                  <div className="absolute top-0 left-0 right-0 h-10 bg-gray-200 flex items-center px-4 rounded-t-lg">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="pt-12 pb-4">
                    <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                      <div className="flex items-start">
                        <div className="bg-iqblue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                          AI
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-iqdark-500">Tell me about a time when you had to adapt to a significant change at work or school. How did you handle it?</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-iqblue-50 rounded-lg p-4 mb-4 shadow-sm">
                      <div className="flex items-start">
                        <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                          You
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-iqdark-500">When our company transitioned to remote work due to COVID-19, I had to quickly adapt my project management approach...</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 shadow-sm">
                      <div className="flex items-start">
                        <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                          AI
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium mb-1">Feedback:</p>
                          <p className="text-sm text-gray-600">Good start! You've chosen a relevant example. Try to be more specific about the challenges you faced and the actions you took. Also, don't forget to mention the results you achieved.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-iqblue to-iqblue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ace Your Next Interview?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              Start practicing now and gain the confidence you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-iqblue hover:bg-gray-100 text-lg px-8 py-6 rounded-lg" asChild>
                <Link to="/auth/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-lg" asChild>
                <Link to="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PracticePage;
