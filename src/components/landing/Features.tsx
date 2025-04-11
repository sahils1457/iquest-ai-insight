
import React from 'react';
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
  Clock
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BrainCircuit className="h-10 w-10 text-iqblue" />,
      title: "AI-Powered Evaluation",
      description: "Our advanced AI analyzes your responses, body language, and communication style to provide objective feedback."
    },
    {
      icon: <Video className="h-10 w-10 text-iqblue" />,
      title: "One-Way & Two-Way Interviews",
      description: "Practice with recorded one-way interviews or schedule live two-way sessions with AI or human experts."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-iqblue" />,
      title: "Detailed Analytics",
      description: "Track your progress with comprehensive performance metrics and identify areas for improvement."
    },
    {
      icon: <Users className="h-10 w-10 text-iqblue" />,
      title: "Industry Experts",
      description: "Access a network of industry professionals for specialized interview coaching and feedback."
    },
    {
      icon: <ClipboardCheck className="h-10 w-10 text-iqblue" />,
      title: "Custom Reports",
      description: "Receive personalized reports with actionable insights to enhance your interview performance."
    },
    {
      icon: <Calendar className="h-10 w-10 text-iqblue" />,
      title: "Flexible Scheduling",
      description: "Book interviews at your convenience, 24/7 access to practice whenever you want."
    },
    {
      icon: <Laptop className="h-10 w-10 text-iqblue" />,
      title: "Technical Interviews",
      description: "Specialized practice for technical roles with code evaluation and problem-solving assessment."
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
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Interview Preparation Features</h2>
          <p className="text-lg text-iqdark-500">
            iQuest offers a complete suite of tools to help you excel in any interview scenario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
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
  );
};

export default Features;
