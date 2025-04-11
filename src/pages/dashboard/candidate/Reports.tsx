
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { 
  FileText,
  Calendar,
  Clock,
  Download,
  ArrowRight,
  BarChart3,
  Video,
  Users
} from "lucide-react";

const reportsData = [
  {
    id: "interview-report-1",
    title: "Software Engineer Interview",
    type: "one-way",
    date: "April 11, 2025",
    score: 82,
    status: "completed"
  },
  {
    id: "interview-report-2",
    title: "Product Manager Interview",
    type: "live",
    date: "March 28, 2025",
    score: 78,
    status: "completed"
  },
  {
    id: "interview-ready",
    title: "Software Engineer Interview",
    type: "one-way",
    date: "April 15, 2025",
    status: "ready"
  },
  {
    id: "interview-scheduled",
    title: "Data Science Interview",
    type: "live",
    date: "April 18, 2025 - 2:00 PM",
    status: "scheduled"
  }
];

const Reports: React.FC = () => {
  const navigate = useNavigate();

  const handleViewReport = (id: string) => {
    navigate(`/dashboard/candidate/reports/${id}`);
  };

  const getStatusBadge = (status: string, score?: number) => {
    if (status === "completed") {
      return (
        <div className={`px-2 py-1 rounded text-xs font-medium ${
          score && score >= 80 ? "bg-green-100 text-green-700" :
          score && score >= 70 ? "bg-blue-100 text-blue-700" :
          "bg-amber-100 text-amber-700"
        }`}>
          {score}%
        </div>
      );
    } else if (status === "ready") {
      return (
        <div className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-700">
          Ready to Start
        </div>
      );
    } else if (status === "scheduled") {
      return (
        <div className="px-2 py-1 rounded text-xs font-medium bg-purple-100 text-purple-700">
          Scheduled
        </div>
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">My Reports</h2>
          <p className="text-muted-foreground mt-1">View and analyze your interview performance</p>
        </div>
        <Button onClick={() => navigate("/dashboard/candidate/book-interview")}>
          Book New Interview
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Interview Reports</CardTitle>
          <CardDescription>Your interview performance analysis and feedback</CardDescription>
        </CardHeader>
        <CardContent>
          {reportsData.length > 0 ? (
            <div className="space-y-4">
              {reportsData.map((report) => (
                <Card key={report.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-1/12 flex items-center justify-center p-4 bg-gray-50">
                        {report.type === "one-way" ? (
                          <Video className="h-6 w-6 text-iqblue" />
                        ) : (
                          <Users className="h-6 w-6 text-iqblue" />
                        )}
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <h3 className="font-medium text-lg">{report.title}</h3>
                            <div className="flex items-center text-sm text-muted-foreground gap-4 mt-1">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{report.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <FileText className="h-4 w-4" />
                                <span>{report.type === "one-way" ? "One-Way Interview" : "Live Interview"}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {getStatusBadge(report.status, report.score)}
                            
                            {report.status === "completed" && (
                              <Button variant="outline" size="sm" className="ml-auto">
                                <Download className="h-4 w-4 mr-2" />
                                PDF
                              </Button>
                            )}
                            
                            <Button 
                              onClick={() => handleViewReport(report.id)}
                              variant={report.status === "completed" ? "default" : "outline"}
                              size="sm"
                            >
                              {report.status === "ready" ? "Start Interview" : 
                               report.status === "scheduled" ? "View Details" : "View Report"}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        
                        {report.status === "completed" && (
                          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="bg-gray-50 p-3 rounded">
                              <div className="text-sm font-medium">Overall Score</div>
                              <div className="font-bold text-xl mt-1">{report.score}%</div>
                            </div>
                            <div className="bg-gray-50 p-3 rounded">
                              <div className="text-sm font-medium">Technical</div>
                              <div className="font-bold text-xl mt-1">{report.score + 5}%</div>
                            </div>
                            <div className="bg-gray-50 p-3 rounded">
                              <div className="text-sm font-medium">Communication</div>
                              <div className="font-bold text-xl mt-1">{report.score - 3}%</div>
                            </div>
                            <div className="bg-gray-50 p-3 rounded">
                              <div className="text-sm font-medium">Problem Solving</div>
                              <div className="font-bold text-xl mt-1">{report.score + 2}%</div>
                            </div>
                          </div>
                        )}
                        
                        {report.status === "ready" && (
                          <div className="mt-4 bg-blue-50 p-3 rounded border border-blue-100">
                            <div className="flex items-start gap-2">
                              <Video className="h-5 w-5 text-blue-600" />
                              <div>
                                <div className="font-medium text-blue-800">Ready to Start</div>
                                <p className="text-sm text-blue-700 mt-1">
                                  Your one-way interview is prepared and ready for you to complete at your convenience.
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {report.status === "scheduled" && (
                          <div className="mt-4 bg-purple-50 p-3 rounded border border-purple-100">
                            <div className="flex items-start gap-2">
                              <Calendar className="h-5 w-5 text-purple-600" />
                              <div>
                                <div className="font-medium text-purple-800">Interview Scheduled</div>
                                <p className="text-sm text-purple-700 mt-1">
                                  Your live interview is scheduled for {report.date}. Please ensure you're ready 5 minutes before the start time.
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-3">
                <FileText className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="font-medium">No reports available yet</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Complete an interview to receive detailed performance feedback
              </p>
              <Button className="mt-4" onClick={() => navigate("/dashboard/candidate/book-interview")}>
                Book Your First Interview
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Trends</CardTitle>
            <CardDescription>Track your progress over time</CardDescription>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <h3 className="font-medium">Performance Analytics</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Complete at least 3 interviews to see your performance trends
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Interview Resources</CardTitle>
            <CardDescription>Helpful materials to improve your skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Top 10 Software Engineering Interview Questions</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Prepare for common technical questions with sample answers
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Video className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Video: Mastering the STAR Method</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Learn how to structure your answers effectively
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Body Language Tips for Virtual Interviews</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Make a strong impression through your screen
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
