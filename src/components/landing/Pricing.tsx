
import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: "Free Trial",
      price: "$0",
      period: "7 days",
      description: "Try out our platform with limited features",
      features: [
        { name: "3 Practice Interviews", included: true },
        { name: "Basic AI Feedback", included: true },
        { name: "Performance Reports", included: true },
        { name: "Expert Review", included: false },
        { name: "Technical Interviews", included: false },
        { name: "Unlimited Interviews", included: false },
        { name: "Priority Support", included: false },
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline",
      popular: false,
    },
    {
      name: "Professional",
      price: "$29",
      period: "per month",
      description: "Perfect for job seekers",
      features: [
        { name: "15 Interviews per Month", included: true },
        { name: "Advanced AI Feedback", included: true },
        { name: "Detailed Performance Reports", included: true },
        { name: "2 Expert Reviews per Month", included: true },
        { name: "Technical Interviews", included: true },
        { name: "Unlimited Interviews", included: false },
        { name: "Priority Support", included: false },
      ],
      buttonText: "Choose Professional",
      buttonVariant: "default",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For serious professionals",
      features: [
        { name: "Unlimited Interviews", included: true },
        { name: "Premium AI Feedback", included: true },
        { name: "Comprehensive Reports", included: true },
        { name: "10 Expert Reviews per Month", included: true },
        { name: "Technical Interviews", included: true },
        { name: "Custom Interview Types", included: true },
        { name: "Priority Support", included: true },
      ],
      buttonText: "Choose Enterprise",
      buttonVariant: "outline",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-iqlight">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-iqdark-500">
            Choose the plan that fits your interview preparation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative ${
                plan.popular
                  ? "border-iqblue shadow-lg transform md:-translate-y-4"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-iqblue text-white text-sm font-semibold py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-end justify-center mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-iqdark-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-iqdark-500">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center text-iqdark-500"
                  >
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                    )}
                    <span
                      className={
                        feature.included ? "text-iqdark-800" : "text-gray-500"
                      }
                    >
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.buttonVariant as "default" | "outline"}
                className={`w-full ${
                  plan.buttonVariant === "default"
                    ? "bg-iqblue hover:bg-iqblue-600"
                    : "border-iqblue text-iqblue hover:bg-iqblue-50"
                }`}
                asChild
              >
                <Link to="/auth/signup">{plan.buttonText}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
