
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarPlus, ChevronRight, Award, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const CandidateHome: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <Card className="bg-gradient-to-r from-iqblue-600 to-iqblue border-none text-white">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold">Welcome back, John!</h2>
              <p className="text-blue-100 mt-1">Continue your interview preparation journey</p>
            </div>
            <Button asChild className="bg-white text-iqblue hover:bg-blue-50">
              <Link to="/dashboard/candidate/book-interview" className="inline-flex items-center gap-2">
                <CalendarPlus className="h-4 w-4" />
                <span>Book a New Interview</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Award className="h-5 w-5 text-iqblue" />
              Interview Completion
            </CardTitle>
            <CardDescription>Your progress so far</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">4</div>
              <div className="text-sm text-muted-foreground">Total Interviews</div>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full mt-4">
              <div className="h-2 bg-iqblue rounded-full w-[40%]"></div>
            </div>
            <div className="flex justify-between mt-1 text-xs text-muted-foreground">
              <span>Beginner</span>
              <span>Advanced</span>
            </div>
          </CardContent>
        </Card>
          
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="h-5 w-5 text-iqblue" />
              Focus Areas
            </CardTitle>
            <CardDescription>Skills to improve</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-iqblue-500"></div>
                <span>Technical communication</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-iqblue-500"></div>
                <span>Problem-solving speed</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-iqblue-500"></div>
                <span>Behavioral questions</span>
              </li>
            </ul>
          </CardContent>
        </Card>
          
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-iqblue" />
              Improvement Tips
            </CardTitle>
            <CardDescription>AI recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Practice structuring your answers using the STAR method (Situation, Task, Action, Result) for behavioral questions.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Interviews */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Interviews</CardTitle>
          <CardDescription>Your scheduled interview sessions</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Empty state */}
          <div className="text-center py-8">
            <div className="mx-auto h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-3">
              <Calendar className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="font-medium">No upcoming interviews</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Schedule your next interview practice session
            </p>
            <Button asChild className="mt-4">
              <Link to="/dashboard/candidate/book-interview">Book Interview</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Reports</CardTitle>
            <CardDescription>Your latest interview performances</CardDescription>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link to="/dashboard/candidate/reports" className="inline-flex items-center gap-1">
              View All
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="mx-auto h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-3">
              <FileText className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="font-medium">No reports yet</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Complete an interview to get your first report
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CandidateHome;
