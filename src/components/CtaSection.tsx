
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 px-6 bg-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Interview Process?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of candidates who have improved their interview skills and landed their dream jobs.
        </p>
        <Link to="/pricing">
          <Button size="lg">View Pricing</Button>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
