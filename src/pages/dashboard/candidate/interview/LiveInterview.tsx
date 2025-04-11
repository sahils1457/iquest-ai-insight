
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { 
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  Cpu,
  CheckCircle2,
  ArrowRight,
  CalendarIcon
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
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

const LiveInterview: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [jobRole, setJobRole] = useState("");
  const [interviewer, setInterviewer] = useState("ai");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBookInterview = () => {
    if (!jobRole || !date || !timeSlot) {
      toast({
        title: "Missing Information",
        description: "Please select all required fields to schedule your interview.",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Interview Scheduled",
        description: `Your live interview has been scheduled for ${format(date, "MMMM d, yyyy")} at ${timeSlot}.`,
      });
      navigate("/dashboard/candidate/reports/interview-scheduled");
    }, 1500);
  };
  
  // Generate time slots from 9 AM to 5 PM
  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 9; i <= 17; i++) {
      const hour = i > 12 ? i - 12 : i;
      const ampm = i >= 12 ? "PM" : "AM";
      slots.push(`${hour}:00 ${ampm}`);
      slots.push(`${hour}:30 ${ampm}`);
    }
    return slots;
  };
  
  const timeSlots = generateTimeSlots();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard/candidate/book-interview")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-2xl font-bold">Live Interview Setup</h2>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Schedule Your Live Interview</CardTitle>
          <CardDescription>
            Choose your interviewer type and preferred time
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
          
          <div className="space-y-3">
            <Label>Interviewer Type</Label>
            <RadioGroup value={interviewer} onValueChange={setInterviewer}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className={cn(
                  "flex flex-col items-center justify-between rounded-md border-2 border-muted p-4",
                  interviewer === "ai" && "border-iqblue"
                )}>
                  <RadioGroupItem value="ai" id="ai" className="sr-only" />
                  <Label htmlFor="ai" className="cursor-pointer flex-1">
                    <div className="mb-4 flex justify-center">
                      <Cpu className="h-10 w-10 text-iqblue" />
                    </div>
                    <div className="font-medium text-center mb-1">AI Interviewer</div>
                    <p className="text-sm text-muted-foreground text-center">
                      Available 24/7, immediate feedback
                    </p>
                    <div className="mt-3 text-center text-sm font-medium text-iqblue">
                      Free with subscription
                    </div>
                  </Label>
                </div>
                
                <div className={cn(
                  "flex flex-col items-center justify-between rounded-md border-2 border-muted p-4",
                  interviewer === "expert" && "border-iqblue"
                )}>
                  <RadioGroupItem value="expert" id="expert" className="sr-only" />
                  <Label htmlFor="expert" className="cursor-pointer flex-1">
                    <div className="mb-4 flex justify-center">
                      <Users className="h-10 w-10 text-iqblue" />
                    </div>
                    <div className="font-medium text-center mb-1">Expert Interviewer</div>
                    <p className="text-sm text-muted-foreground text-center">
                      Industry professionals, personalized feedback
                    </p>
                    <div className="mt-3 text-center text-sm font-medium text-iqblue">
                      10 credits per session
                    </div>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label>Interview Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => {
                    // Disable dates in the past
                    return date < new Date(new Date().setHours(0, 0, 0, 0));
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="time-slot">Available Time Slots</Label>
            <Select value={timeSlot} onValueChange={setTimeSlot} disabled={!date}>
              <SelectTrigger id="time-slot">
                <SelectValue placeholder={date ? "Select time slot" : "Select date first"} />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                ))}
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
          <CardTitle>Interview Preparation Tips</CardTitle>
          <CardDescription>
            Make the most of your live interview session
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Test Your Equipment</h4>
                <p className="text-sm text-muted-foreground">
                  Check your camera, microphone, and internet connection before the interview
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Find a Quiet Space</h4>
                <p className="text-sm text-muted-foreground">
                  Choose a location with minimal background noise and distractions
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Dress Professionally</h4>
                <p className="text-sm text-muted-foreground">
                  Dress as you would for an actual job interview
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Prepare Questions</h4>
                <p className="text-sm text-muted-foreground">
                  Have some questions ready to ask at the end of the interview
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveInterview;
