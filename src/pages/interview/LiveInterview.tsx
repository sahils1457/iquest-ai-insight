
import { Helmet } from "react-helmet";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, MicOff, Video, VideoOff, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const aiResponses = [
  "Hello! I'm your AI interviewer today. Let's start with a simple question - can you tell me about yourself?",
  "That's interesting. Can you elaborate on your experience with React and frontend development?",
  "I see you have experience with modern frameworks. What challenges have you faced while working with APIs?",
  "Great! Now let's talk about problem-solving. Can you walk me through how you would debug a performance issue?",
  "Excellent explanation. Do you have any questions about the role or our company?"
];

const LiveInterview = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [conversation, setConversation] = useState<Array<{role: 'ai' | 'user', message: string}>>([]);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Start camera
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(err => {
        toast({
          title: "Camera access required",
          description: "Please allow camera and microphone access",
          variant: "destructive",
        });
      });

    // Start with AI greeting
    addAIMessage(aiResponses[0]);
  }, []);

  const addAIMessage = (message: string) => {
    setConversation(prev => [...prev, { role: 'ai', message }]);
  };

  const addUserMessage = (message: string) => {
    setConversation(prev => [...prev, { role: 'user', message }]);
  };

  const startListening = () => {
    setIsListening(true);
    toast({
      title: "Listening...",
      description: "Speak your answer clearly",
    });
    
    // Simulate speech recognition
    setTimeout(() => {
      const userResponse = "Thank you for the question. I have 5 years of experience in frontend development...";
      addUserMessage(userResponse);
      setIsListening(false);
      
      // AI responds after user
      setTimeout(() => {
        if (currentStep < aiResponses.length - 1) {
          addAIMessage(aiResponses[currentStep + 1]);
          setCurrentStep(currentStep + 1);
        } else {
          // Interview complete
          navigate("/interview/results", { state: { type: "live", conversation } });
        }
      }, 2000);
    }, 3000);
  };

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
    toast({
      title: isVideoOn ? "Video turned off" : "Video turned on",
    });
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    toast({
      title: isMuted ? "Microphone unmuted" : "Microphone muted",
    });
  };

  const endInterview = () => {
    navigate("/interview/results", { state: { type: "live", conversation } });
  };

  return (
    <>
      <Helmet>
        <title>Live AI Interview - iQuest AI</title>
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Live AI Interview</h1>
              <Badge variant="outline" className="bg-green-100 text-green-800">
                Live Session
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Video Call</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-black rounded-lg mb-4 relative">
                    <video 
                      ref={videoRef} 
                      autoPlay 
                      muted 
                      className={`w-full h-full object-cover rounded-lg ${!isVideoOn ? 'hidden' : ''}`}
                    />
                    {!isVideoOn && (
                      <div className="w-full h-full flex items-center justify-center text-white">
                        <VideoOff className="w-16 h-16" />
                      </div>
                    )}
                    
                    {/* AI Avatar */}
                    <div className="absolute top-4 left-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                      <div className="text-white font-bold text-xl">AI</div>
                    </div>
                    
                    {isListening && (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          Listening...
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-center gap-4">
                    <Button 
                      variant={isMuted ? "destructive" : "outline"} 
                      size="icon"
                      onClick={toggleMute}
                    >
                      {isMuted ? <MicOff /> : <Mic />}
                    </Button>
                    <Button 
                      variant={!isVideoOn ? "destructive" : "outline"} 
                      size="icon"
                      onClick={toggleVideo}
                    >
                      {isVideoOn ? <Video /> : <VideoOff />}
                    </Button>
                    <Button 
                      onClick={startListening} 
                      disabled={isListening}
                      className="px-6"
                    >
                      {isListening ? "Listening..." : "Speak"}
                    </Button>
                    <Button variant="destructive" onClick={endInterview}>
                      End Interview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Conversation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {conversation.map((message, index) => (
                    <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs rounded-lg p-3 ${
                        message.role === 'user' 
                          ? 'bg-primary text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        <div className="text-xs font-semibold mb-1">
                          {message.role === 'user' ? 'You' : 'AI Interviewer'}
                        </div>
                        <div className="text-sm">{message.message}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveInterview;
