
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, PlayCircle, FileText, TrendingUp, Star, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CandidateDashboard = () => {
  const navigate = useNavigate();

  const recentInterviews = [
    { id: 1, type: "One-Way", score: 85, date: "2 hours ago", company: "TechCorp" },
    { id: 2, type: "Live AI", score: 78, date: "Yesterday", company: "StartupXYZ" },
    { id: 3, type: "One-Way", score: 92, date: "3 days ago", company: "BigTech Inc" }
  ];

  const skillProgress = [
    { skill: "Communication", level: 85 },
    { skill: "Technical Knowledge", level: 78 },
    { skill: "Problem Solving", level: 82 },
    { skill: "Leadership", level: 70 }
  ];

  return (
    <>
      <Helmet>
        <title>Candidate Dashboard - iQuest AI</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Welcome back, John!</h1>
              <p className="text-gray-600">Track your progress and continue improving your interview skills</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <PlayCircle className="w-4 h-4" />
                    Practice Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-1">12</p>
                  <p className="text-xs text-gray-600">Completed this month</p>
                  <div className="mt-2">
                    <Badge variant="secondary" className="text-xs">+3 this week</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Average Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-1">85%</p>
                  <p className="text-xs text-gray-600">Last 10 sessions</p>
                  <div className="mt-2">
                    <Badge variant="default" className="text-xs">+15% improvement</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Best Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-1">92%</p>
                  <p className="text-xs text-gray-600">Personal best</p>
                  <div className="mt-2">
                    <Badge variant="outline" className="text-xs">One-Way Interview</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Study Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-1">24h</p>
                  <p className="text-xs text-gray-600">Total practice time</p>
                  <div className="mt-2">
                    <Badge variant="secondary" className="text-xs">2.4h avg/week</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button 
                      className="h-20 flex flex-col gap-2" 
                      onClick={() => navigate("/practice")}
                    >
                      <PlayCircle className="w-6 h-6" />
                      Start New Practice
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-20 flex flex-col gap-2"
                      onClick={() => navigate("/interview/results")}
                    >
                      <FileText className="w-6 h-6" />
                      View Last Report
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-20 flex flex-col gap-2"
                    >
                      <Calendar className="w-6 h-6" />
                      Schedule Mock Interview
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-20 flex flex-col gap-2"
                    >
                      <TrendingUp className="w-6 h-6" />
                      View Progress
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Skill Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skillProgress.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.skill}</span>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Interview History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInterviews.map((interview) => (
                    <div key={interview.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <PlayCircle className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{interview.type} Interview</p>
                          <p className="text-sm text-gray-600">{interview.company} • {interview.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge 
                          variant={interview.score >= 85 ? "default" : interview.score >= 70 ? "secondary" : "outline"}
                          className="px-3 py-1"
                        >
                          {interview.score}%
                        </Badge>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CandidateDashboard;
