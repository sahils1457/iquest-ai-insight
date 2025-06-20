
import { Helmet } from "react-helmet";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Square, Mic, MicOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const questions = [
  "Tell me about yourself and your background.",
  "Why are you interested in this position?",
  "What is your greatest strength?",
  "Describe a challenging project you worked on.",
  "Where do you see yourself in 5 years?"
];

const OneWayInterview = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [recordings, setRecordings] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes per question
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
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
          description: "Please allow camera access to continue",
          variant: "destructive",
        });
      });
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      stopRecording();
    }
    return () => clearInterval(interval);
  }, [isRecording, timeLeft]);

  const startRecording = () => {
    setIsRecording(true);
    toast({
      title: "Recording started",
      description: "Answer the question naturally",
    });
  };

  const stopRecording = () => {
    setIsRecording(false);
    setRecordings([...recordings, `Recording ${currentQuestion + 1}`]);
    toast({
      title: "Recording stopped",
      description: "Your answer has been saved",
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(120);
    } else {
      // Interview complete
      navigate("/interview/results", { state: { type: "one-way", recordings } });
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <Helmet>
        <title>One-Way Interview - iQuest AI</title>
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">One-Way Interview</h1>
              <Badge variant="outline">
                Question {currentQuestion + 1} of {questions.length}
              </Badge>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Question</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">{questions[currentQuestion]}</p>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-gray-600">
                    Time remaining: <span className="font-mono">{formatTime(timeLeft)}</span>
                  </div>
                  <Badge variant={timeLeft < 30 ? "destructive" : "secondary"}>
                    {timeLeft < 30 ? "Hurry up!" : "Take your time"}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Video Recording</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-black rounded-lg mb-4 relative">
                  <video 
                    ref={videoRef} 
                    autoPlay 
                    muted 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {isRecording && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      REC
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  {!isRecording ? (
                    <Button onClick={startRecording} className="flex-1">
                      <Mic className="w-4 h-4 mr-2" />
                      Start Recording
                    </Button>
                  ) : (
                    <Button onClick={stopRecording} variant="destructive" className="flex-1">
                      <Square className="w-4 h-4 mr-2" />
                      Stop Recording
                    </Button>
                  )}
                  {recordings.length > currentQuestion && (
                    <Button onClick={nextQuestion} variant="outline">
                      Next Question
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneWayInterview;
