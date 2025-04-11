
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  BrainCircuit, 
  BarChart3, 
  ClipboardCheck, 
  Video, 
  Users, 
  AreaChart,
  LineChart,
  Calendar,
  Laptop,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FeaturesPage = () => {
  const featureGroups = [
    {
      title: "AI-Powered Analysis",
      description: "Our advanced artificial intelligence evaluates your interview performance in detail",
      features: [
        {
          icon: <BrainCircuit className="h-10 w-10 text-iqblue" />,
          title: "AI-Powered Evaluation",
          description: "Our advanced AI analyzes your responses, body language, and communication style to provide objective feedback."
        },
        {
          icon: <BarChart3 className="h-10 w-10 text-iqblue" />,
          title: "Detailed Analytics",
          description: "Track your progress with comprehensive performance metrics and identify areas for improvement."
        },
        {
          icon: <ClipboardCheck className="h-10 w-10 text-iqblue" />,
          title: "Custom Reports",
          description: "Receive personalized reports with actionable insights to enhance your interview performance."
        },
      ]
    },
    {
      title: "Practice & Preparation",
      description: "Multiple ways to practice and prepare for your interviews",
      features: [
        {
          icon: <Video className="h-10 w-10 text-iqblue" />,
          title: "One-Way & Two-Way Interviews",
          description: "Practice with recorded one-way interviews or schedule live two-way sessions with AI or human experts."
        },
        {
          icon: <Users className="h-10 w-10 text-iqblue" />,
          title: "Industry Experts",
          description: "Access a network of industry professionals for specialized interview coaching and feedback."
        },
        {
          icon: <Laptop className="h-10 w-10 text-iqblue" />,
          title: "Technical Interviews",
          description: "Specialized practice for technical roles with code evaluation and problem-solving assessment."
        },
      ]
    },
    {
      title: "Convenience & Progress",
      description: "Flexible options to fit your schedule and track your improvement",
      features: [
        {
          icon: <Calendar className="h-10 w-10 text-iqblue" />,
          title: "Flexible Scheduling",
          description: "Book interviews at your convenience, 24/7 access to practice whenever you want."
        },
        {
          icon: <Clock className="h-10 w-10 text-iqblue" />,
          title: "Real-time Feedback",
          description: "Get immediate insights during your interview to make adjustments on the spot."
        },
        {
          icon: <LineChart className="h-10 w-10 text-iqblue" />,
          title: "Progress Tracking",
          description: "Monitor your improvement over time with historical performance data and trend analysis."
        },
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-iqlight to-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-iqdark">Comprehensive Features for Interview Success</h1>
            <p className="text-xl text-iqdark-500 max-w-3xl mx-auto mb-10">
              Discover how iQuest's powerful tools and AI-driven feedback can transform your interview performance.
            </p>
            <Button className="bg-iqblue hover:bg-iqblue-600 text-white text-lg px-8 py-6 rounded-lg" asChild>
              <Link to="/auth/signup">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Feature Groups */}
        {featureGroups.map((group, index) => (
          <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-iqlight'}`}>
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold mb-4">{group.title}</h2>
                <p className="text-lg text-iqdark-500">{group.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {group.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="feature-card hover-scale"
                  >
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-iqdark-500">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-iqblue to-iqblue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience These Features?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              Join thousands of job seekers who have already improved their interview skills with iQuest.
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

export default FeaturesPage;
