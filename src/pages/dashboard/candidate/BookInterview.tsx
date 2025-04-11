
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Video, 
  Users, 
  Clock, 
  Cpu, 
  ChevronRight,
  CheckCircle2,
  Calendar 
} from "lucide-react";

const BookInterview: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Book a New Interview</h2>
        <p className="text-muted-foreground mt-1">Choose your interview type and preferences</p>
      </div>

      {/* Interview Type Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:border-iqblue hover:shadow-md transition-all cursor-pointer">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-iqblue" />
                One-Way Interview
              </CardTitle>
              <div className="text-xs bg-iqblue-100 text-iqblue px-2 py-1 rounded">Popular</div>
            </div>
            <CardDescription>Record answers at your own pace</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-iqblue mt-0.5" />
                <span className="text-sm">Record responses to pre-set questions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-iqblue mt-0.5" />
                <span className="text-sm">Get detailed AI feedback on your performance</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-iqblue mt-0.5" />
                <span className="text-sm">Practice at your own convenience</span>
              </li>
            </ul>
            <Button className="w-full">
              <span>Select One-Way</span>
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:border-iqblue hover:shadow-md transition-all cursor-pointer">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-iqblue" />
              Live Interview
            </CardTitle>
            <CardDescription>Practice with an AI or human interviewer</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-iqblue mt-0.5" />
                <span className="text-sm">Real-time interaction with interviewers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-iqblue mt-0.5" />
                <span className="text-sm">Choose AI interviewer or book with an expert</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-iqblue mt-0.5" />
                <span className="text-sm">Immediate verbal and written feedback</span>
              </li>
            </ul>
            <Button className="w-full" variant="outline">
              <span>Select Live Interview</span>
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Popular Interview Topics */}
      <Card>
        <CardHeader>
          <CardTitle>Popular Interview Topics</CardTitle>
          <CardDescription>Choose from frequently requested interview subjects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Card className="bg-white hover:bg-gray-50 transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Cpu className="h-5 w-5 text-iqblue" />
                </div>
                <div>
                  <h3 className="font-medium">Software Engineering</h3>
                  <p className="text-xs text-muted-foreground">Algorithms, System Design</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:bg-gray-50 transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">Product Management</h3>
                  <p className="text-xs text-muted-foreground">Strategy, Leadership</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white hover:bg-gray-50 transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium">Behavioral</h3>
                  <p className="text-xs text-muted-foreground">STAR Method, Leadership</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Interview Schedule</CardTitle>
          <CardDescription>Check your upcoming and past interviews</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="mx-auto h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-3">
              <Calendar className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="font-medium">No interviews scheduled</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Start by selecting an interview type above
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookInterview;
