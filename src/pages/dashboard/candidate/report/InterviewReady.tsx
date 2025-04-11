
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { 
  ArrowLeft,
  Video,
  Monitor,
  Mic,
  Volume2,
  CheckCircle2,
  XCircle,
  Camera,
  ArrowRight,
  Clock,
  AlertCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const InterviewReady: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [cameraReady, setCameraReady] = useState(false);
  const [micReady, setMicReady] = useState(false);
  const [audioReady, setAudioReady] = useState(false);
  const [startingInterview, setStartingInterview] = useState(false);
  
  const handleStartInterview = () => {
    if (!cameraReady || !micReady) {
      toast({
        title: "Equipment Check Required",
        description: "Please make sure your camera and microphone are working properly.",
        variant: "destructive"
      });
      return;
    }
    
    setStartingInterview(true);
    
    // Simulate interview completion after a delay
    setTimeout(() => {
      setStartingInterview(false);
      toast({
        title: "Interview Completed",
        description: "Your answers have been recorded and are being analyzed.",
      });
      navigate("/dashboard/candidate/reports/interview-report-1");
    }, 2000);
  };
  
  const checkCamera = () => {
    // Simulating camera check
    setTimeout(() => {
      setCameraReady(true);
      toast({
        title: "Camera Check Passed",
        description: "Your camera is working properly.",
      });
    }, 1000);
  };
  
  const checkMicrophone = () => {
    // Simulating microphone check
    setTimeout(() => {
      setMicReady(true);
      toast({
        title: "Microphone Check Passed",
        description: "Your microphone is working properly.",
      });
    }, 1000);
  };
  
  const checkAudio = () => {
    // Simulating audio check
    setTimeout(() => {
      setAudioReady(true);
      toast({
        title: "Audio Check Passed",
        description: "Your speakers are working properly.",
      });
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard/candidate/reports")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h2 className="text-2xl font-bold">Start Your Interview</h2>
          <p className="text-muted-foreground">Software Engineer Interview - One Way</p>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Equipment Check</CardTitle>
          <CardDescription>
            Ensure your hardware is working properly before starting
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-iqblue" />
                <span className="font-medium">Camera</span>
              </div>
              {cameraReady ? (
                <div className="flex items-center text-green-600 gap-1">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Ready</span>
                </div>
              ) : (
                <Button size="sm" onClick={checkCamera}>Check Camera</Button>
              )}
            </div>
            {cameraReady && (
              <div className="rounded-md overflow-hidden bg-black aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Video className="h-16 w-16 text-white opacity-30" />
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Mic className="h-5 w-5 text-iqblue" />
                <span className="font-medium">Microphone</span>
              </div>
              {micReady ? (
                <div className="flex items-center text-green-600 gap-1">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Ready</span>
                </div>
              ) : (
                <Button size="sm" onClick={checkMicrophone}>Check Microphone</Button>
              )}
            </div>
            {micReady && (
              <div className="bg-gray-100 rounded-md p-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-1 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="h-3 w-1 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="h-4 w-1 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="h-2 w-1 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="h-3 w-1 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">Microphone is detecting audio</span>
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-iqblue" />
                <span className="font-medium">Speakers</span>
              </div>
              {audioReady ? (
                <div className="flex items-center text-green-600 gap-1">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Ready</span>
                </div>
              ) : (
                <Button size="sm" onClick={checkAudio}>Test Audio</Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Interview Guidelines</CardTitle>
          <CardDescription>
            Important information before you begin
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Interview Format</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  You'll be presented with 5 questions related to software engineering. You'll have 2 minutes to answer each question.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Recording Process</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  For each question, you'll see a 3-second countdown before recording begins. You can pause and re-record your answer if needed.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Time Management</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  You'll see a timer for each question. Try to use the full time available to provide comprehensive answers.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-amber-700">Important</h4>
                <p className="text-sm text-amber-600">
                  Once you start, ensure you won't be interrupted. The entire process takes approximately 15-20 minutes.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6">
          <Button 
            className="ml-auto" 
            disabled={!cameraReady || !micReady || startingInterview}
            onClick={handleStartInterview}
          >
            {startingInterview ? "Starting..." : "Start Interview"}
            {!startingInterview && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default InterviewReady;
