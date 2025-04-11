
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { 
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  Video,
  FileText,
  Trash2,
  AlertCircle,
  X,
  ExternalLink
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";

const InterviewScheduled: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  
  const handleCancelInterview = () => {
    toast({
      title: "Interview Cancelled",
      description: "Your interview has been cancelled successfully.",
    });
    navigate("/dashboard/candidate/reports");
  };
  
  const handleAddToCalendar = () => {
    setIsCalendarOpen(false);
    toast({
      title: "Added to Calendar",
      description: "Interview reminder has been added to your calendar.",
    });
  };
  
  const handleCopyLink = () => {
    // Simulate copying the link
    setIsLinkCopied(true);
    toast({
      title: "Link Copied",
      description: "Interview join link has been copied to clipboard.",
    });
    setTimeout(() => setIsLinkCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard/candidate/reports")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h2 className="text-2xl font-bold">Scheduled Interview</h2>
          <p className="text-muted-foreground">Data Science Interview - Live</p>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Interview Details</CardTitle>
          <CardDescription>
            Your upcoming interview information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Date & Time</h4>
                  <p className="font-medium">April 18, 2025 - 2:00 PM</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Duration</h4>
                  <p className="font-medium">45 minutes</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground">Interviewer</h4>
                  <p className="font-medium">AI Interviewer (Expert Mode)</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <h3 className="font-medium text-purple-800 mb-2">Join Information</h3>
              <p className="text-sm text-purple-700 mb-4">
                This interview will be conducted via video call. Click the link below to join at the scheduled time.
              </p>
              <div className="flex flex-col space-y-3">
                <Button onClick={handleCopyLink}>
                  {isLinkCopied ? "Copied!" : "Copy Join Link"}
                </Button>
                <Button variant="outline" onClick={() => setIsCalendarOpen(true)}>
                  <Calendar className="h-4 w-4 mr-2" />
                  Add to Calendar
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
              <div>
                <h4 className="font-medium text-amber-800">Reminder</h4>
                <p className="text-sm text-amber-700 mt-1">
                  Join 5 minutes before the scheduled time to ensure your equipment is working properly. If you need to reschedule, please do so at least 24 hours in advance.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Interview Preparation</CardTitle>
          <CardDescription>
            Resources to help you prepare
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Data Science Interview Cheat Sheet</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Key concepts, algorithms, and statistics fundamentals for data science roles
                </p>
                <Button variant="link" className="p-0 h-auto text-iqblue mt-1">
                  View Document
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Video className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Mock Data Science Interview</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Watch an example interview with expert commentary
                </p>
                <Button variant="link" className="p-0 h-auto text-iqblue mt-1">
                  Watch Video
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-medium">Interview Question Bank</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Practice with 50+ sample data science interview questions
                </p>
                <Button variant="link" className="p-0 h-auto text-iqblue mt-1">
                  Access Questions
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6 flex justify-end">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700">
                <Trash2 className="h-4 w-4 mr-2" />
                Cancel Interview
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will cancel your scheduled interview. You can reschedule at any time, but your selected time slot will no longer be reserved.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Keep Interview</AlertDialogCancel>
                <AlertDialogAction onClick={handleCancelInterview} className="bg-red-600 hover:bg-red-700">
                  Cancel Interview
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>
      
      {/* Add to Calendar Dialog */}
      <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add to Calendar</DialogTitle>
            <DialogDescription>
              Choose your preferred calendar application
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <Button className="justify-start" onClick={handleAddToCalendar}>
              <Calendar className="h-4 w-4 mr-2" />
              Google Calendar
            </Button>
            <Button className="justify-start" onClick={handleAddToCalendar}>
              <Calendar className="h-4 w-4 mr-2" />
              Apple Calendar
            </Button>
            <Button className="justify-start" onClick={handleAddToCalendar}>
              <Calendar className="h-4 w-4 mr-2" />
              Outlook
            </Button>
            <Button className="justify-start" onClick={handleAddToCalendar}>
              <Calendar className="h-4 w-4 mr-2" />
              Download .ics File
            </Button>
          </div>
          <div className="flex justify-end mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InterviewScheduled;
