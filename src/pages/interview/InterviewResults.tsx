
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertCircle, TrendingUp, Download } from "lucide-react";

const InterviewResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state || { type: "one-way" };

  const mockResults = {
    overallScore: 85,
    categories: [
      { name: "Communication", score: 90, feedback: "Excellent verbal communication and clarity" },
      { name: "Technical Knowledge", score: 82, feedback: "Strong understanding with room for improvement" },
      { name: "Problem Solving", score: 88, feedback: "Great analytical approach to challenges" },
      { name: "Confidence", score: 80, feedback: "Good confidence level, slight nervousness noted" }
    ],
    strengths: [
      "Clear and articulate communication",
      "Strong technical foundation",
      "Good problem-solving approach",
      "Professional demeanor"
    ],
    improvements: [
      "Practice more complex algorithmic questions",
      "Work on reducing filler words",
      "Improve eye contact with camera"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Interview Results - iQuest AI</title>
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Interview Results</h1>
            <p className="text-gray-600">
              Here's your detailed performance analysis from the {data.type === "one-way" ? "one-way" : "live"} interview
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{mockResults.overallScore}%</div>
                  <p className="text-gray-600">Overall Score</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">B+</div>
                  <p className="text-gray-600">Grade</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">7.2</div>
                  <p className="text-gray-600">Interview Rating</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Performance Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockResults.categories.map((category, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{category.name}</span>
                      <span className="text-sm text-gray-600">{category.score}%</span>
                    </div>
                    <Progress value={category.score} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">{category.feedback}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Strengths
                    </h4>
                    <ul className="space-y-1">
                      {mockResults.strengths.map((strength, index) => (
                        <li key={index} className="text-sm text-gray-600">• {strength}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Areas for Improvement
                    </h4>
                    <ul className="space-y-1">
                      {mockResults.improvements.map((improvement, index) => (
                        <li key={index} className="text-sm text-gray-600">• {improvement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>AI Feedback Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Your interview performance demonstrates strong technical knowledge and excellent communication skills. 
                You showed confidence in discussing your experience and provided detailed examples. To further improve, 
                focus on practicing more complex problem-solving scenarios and work on maintaining consistent eye contact 
                during video interviews. Overall, this was a solid performance that showcases your potential as a candidate.
              </p>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button onClick={() => navigate("/dashboard/candidate")}>
              Back to Dashboard
            </Button>
            <Button variant="outline" onClick={() => navigate("/practice")}>
              Practice Again
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterviewResults;
