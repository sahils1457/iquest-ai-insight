
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "AI Interview Preparation",
    description: "Practice with our AI interviewer that adapts to your responses in real-time.",
    icon: CheckCircle
  },
  {
    title: "Personalized Feedback",
    description: "Receive detailed analysis and suggestions to improve your interview performance.",
    icon: CheckCircle
  },
  {
    title: "Industry-Specific Questions",
    description: "Practice with questions tailored to your target industry and role.",
    icon: CheckCircle
  },
  {
    title: "Video Interview Practice",
    description: "Record your responses to review your body language and delivery.",
    icon: CheckCircle
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
