
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Practice = () => {
  const { toast } = useToast();

  const handleOneWayInterview = () => {
    toast({
      title: "One-Way Interview",
      description: "Starting one-way interview session...",
    });
    console.log("One-way interview clicked");
  };

  const handleLiveInterview = () => {
    toast({
      title: "Live AI Interview",
      description: "Connecting to AI interviewer...",
    });
    console.log("Live interview clicked");
  };

  return (
    <>
      <Helmet>
        <title>Practice - iQuest AI</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Practice Interviews</h1>
            <p className="text-gray-600 text-lg mb-12">
              Choose from different practice modes to prepare for your upcoming interviews.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="border rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">One-Way Interview</h3>
                <p className="text-gray-600 mb-8">
                  Record your responses to pre-selected questions and receive AI feedback.
                </p>
                <Button onClick={handleOneWayInterview}>Start One-Way Interview</Button>
              </div>
              
              <div className="border rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Live AI Interview</h3>
                <p className="text-gray-600 mb-8">
                  Interact with our AI interviewer in a realistic conversation.
                </p>
                <Button onClick={handleLiveInterview}>Start Live Interview</Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Practice;
