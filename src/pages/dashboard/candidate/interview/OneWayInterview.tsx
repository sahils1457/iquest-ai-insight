
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { 
  ArrowLeft,
  Calendar,
  Clock,
  ListChecks,
  Video,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const OneWayInterview: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [jobRole, setJobRole] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [timeLimit, setTimeLimit] = useState("15");
  const [loading, setLoading] = useState(false);

  const handleBookInterview = () => {
    if (!jobRole || !experienceLevel) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Interview Booked",
        description: "Your one-way interview has been scheduled successfully.",
      });
      navigate("/dashboard/candidate/reports/interview-ready");
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard/candidate/book-interview")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-2xl font-bold">One-Way Interview Setup</h2>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Configure Your Interview</CardTitle>
          <CardDescription>
            Customize your one-way interview experience
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="job-role">Job Role</Label>
            <Select value={jobRole} onValueChange={setJobRole}>
              <SelectTrigger id="job-role">
                <SelectValue placeholder="Select job role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="software-engineer">Software Engineer</SelectItem>
                <SelectItem value="product-manager">Product Manager</SelectItem>
                <SelectItem value="data-scientist">Data Scientist</SelectItem>
                <SelectItem value="ux-designer">UX Designer</SelectItem>
                <SelectItem value="marketing-manager">Marketing Manager</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="experience-level">Experience Level</Label>
            <Select value={experienceLevel} onValueChange={setExperienceLevel}>
              <SelectTrigger id="experience-level">
                <SelectValue placeholder="Select experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                <SelectItem value="senior">Senior Level (6+ years)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-3">
            <Label>Question Format</Label>
            <div className="space-y-2">
              <RadioGroup defaultValue="standard">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="standard" id="standard" className="mt-1" />
                  <Label htmlFor="standard" className="font-normal flex-1 cursor-pointer">
                    <div className="font-medium">Standard Questions</div>
                    <p className="text-sm text-muted-foreground">
                      General interview questions relevant to your field
                    </p>
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="behavioral" id="behavioral" className="mt-1" />
                  <Label htmlFor="behavioral" className="font-normal flex-1 cursor-pointer">
                    <div className="font-medium">Behavioral Questions</div>
                    <p className="text-sm text-muted-foreground">
                      Questions focused on past experiences and how you handled situations
                    </p>
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="technical" id="technical" className="mt-1" />
                  <Label htmlFor="technical" className="font-normal flex-1 cursor-pointer">
                    <div className="font-medium">Technical Questions</div>
                    <p className="text-sm text-muted-foreground">
                      Questions specific to technical skills and problem-solving
                    </p>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="time-limit">Response Time Limit (per question)</Label>
            <Select value={timeLimit} onValueChange={setTimeLimit}>
              <SelectTrigger id="time-limit">
                <SelectValue placeholder="Select time limit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15">15 seconds</SelectItem>
                <SelectItem value="30">30 seconds</SelectItem>
                <SelectItem value="60">1 minute</SelectItem>
                <SelectItem value="120">2 minutes</SelectItem>
                <SelectItem value="300">5 minutes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => navigate("/dashboard/candidate/book-interview")}>
            Cancel
          </Button>
          <Button onClick={handleBookInterview} disabled={loading}>
            {loading ? "Scheduling..." : "Schedule Interview"}
            {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>What to Expect</CardTitle>
          <CardDescription>
            How the one-way interview process works
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Prepare Your Environment</h4>
                <p className="text-sm text-muted-foreground">
                  Find a quiet space with good lighting and a stable internet connection
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Answer Questions</h4>
                <p className="text-sm text-muted-foreground">
                  You'll be presented with questions one by one, with time to record each answer
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Review and Submit</h4>
                <p className="text-sm text-muted-foreground">
                  You can review your answers before final submission
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                4
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Get AI Feedback</h4>
                <p className="text-sm text-muted-foreground">
                  Receive detailed AI-generated feedback on your performance
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OneWayInterview;
