
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  Plus, 
  Search, 
  Filter 
} from "lucide-react";

const InterviewScheduling: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Interview Scheduling</h2>
          <p className="text-muted-foreground mt-1">Manage and schedule candidate interviews</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          <span>Schedule Interview</span>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Interview Calendar</CardTitle>
              <CardDescription>Upcoming and scheduled interviews</CardDescription>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search candidates..."
                  className="pl-9 pr-3 py-2 border rounded-md w-full sm:w-64"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <div className="mx-auto h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-3">
              <Calendar className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="font-medium">No upcoming interviews</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Schedule your first interview by clicking the button above
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Past Interviews</CardTitle>
            <CardDescription>Recently completed interviews</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <h3 className="font-medium">No past interviews</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Completed interviews will appear here
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Interview Templates</CardTitle>
            <CardDescription>Reusable interview structures</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="border rounded-md p-3 flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Software Engineer (Frontend)</h4>
                  <p className="text-xs text-muted-foreground">45 min • React, JavaScript</p>
                </div>
                <Button variant="outline" size="sm">Use</Button>
              </div>
              
              <div className="border rounded-md p-3 flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Product Manager</h4>
                  <p className="text-xs text-muted-foreground">60 min • Strategy, Leadership</p>
                </div>
                <Button variant="outline" size="sm">Use</Button>
              </div>
              
              <div className="border rounded-md p-3 flex justify-between items-center">
                <div>
                  <h4 className="font-medium">UX Designer</h4>
                  <p className="text-xs text-muted-foreground">30 min • Design, User Research</p>
                </div>
                <Button variant="outline" size="sm">Use</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InterviewScheduling;
