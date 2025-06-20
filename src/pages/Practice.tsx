
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Practice = () => {
  const navigate = useNavigate();

  const handleOneWayInterview = () => {
    navigate("/interview/one-way");
  };

  const handleLiveInterview = () => {
    navigate("/interview/live");
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
              <div className="border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📹</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">One-Way Interview</h3>
                <p className="text-gray-600 mb-8">
                  Record your responses to pre-selected questions and receive AI feedback.
                </p>
                <ul className="text-left text-sm text-gray-600 mb-6 space-y-2">
                  <li>• 5 common interview questions</li>
                  <li>• 2 minutes per question</li>
                  <li>• Video recording with playback</li>
                  <li>• Detailed AI analysis</li>
                </ul>
                <Button onClick={handleOneWayInterview} className="w-full">
                  Start One-Way Interview
                </Button>
              </div>
              
              <div className="border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Live AI Interview</h3>
                <p className="text-gray-600 mb-8">
                  Interact with our AI interviewer in a realistic conversation.
                </p>
                <ul className="text-left text-sm text-gray-600 mb-6 space-y-2">
                  <li>• Real-time AI conversation</li>
                  <li>• Dynamic follow-up questions</li>
                  <li>• Natural interview flow</li>
                  <li>• Immediate feedback</li>
                </ul>
                <Button onClick={handleLiveInterview} className="w-full">
                  Start Live Interview
                </Button>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Tips for Success</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Ensure good lighting and clear audio</li>
                <li>• Maintain eye contact with the camera</li>
                <li>• Speak clearly and at a moderate pace</li>
                <li>• Use the STAR method for behavioral questions</li>
              </ul>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Practice;
