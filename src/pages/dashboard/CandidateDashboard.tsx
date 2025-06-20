
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CandidateDashboard = () => {
  return (
    <>
      <Helmet>
        <title>Candidate Dashboard - iQuest AI</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Candidate Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Practice Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-2">12</p>
                  <p className="text-gray-600">Completed this month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Average Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-2">85%</p>
                  <p className="text-gray-600">Last 10 sessions</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Improvement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-2">+15%</p>
                  <p className="text-gray-600">Since last month</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">Start New Practice Session</Button>
                  <Button variant="outline" className="w-full">View Progress Report</Button>
                  <Button variant="outline" className="w-full">Schedule Mock Interview</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="border-b pb-2">
                      <p className="font-medium">Technical Interview Practice</p>
                      <p className="text-sm text-gray-600">Completed 2 hours ago</p>
                    </div>
                    <div className="border-b pb-2">
                      <p className="font-medium">Behavioral Questions Session</p>
                      <p className="text-sm text-gray-600">Completed yesterday</p>
                    </div>
                    <div>
                      <p className="font-medium">AI Feedback Review</p>
                      <p className="text-sm text-gray-600">3 days ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CandidateDashboard;
