
import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CorporateDashboard = () => {
  return (
    <>
      <Helmet>
        <title>Corporate Dashboard - iQuest AI</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Corporate Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Active Candidates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-2">247</p>
                  <p className="text-gray-600">In assessment pipeline</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Completed Assessments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-2">1,856</p>
                  <p className="text-gray-600">This month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Average Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-2">78%</p>
                  <p className="text-gray-600">All assessments</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Time Saved</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-2">340hrs</p>
                  <p className="text-gray-600">This month</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Assessment Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">Create New Assessment</Button>
                  <Button variant="outline" className="w-full">View Candidate Reports</Button>
                  <Button variant="outline" className="w-full">Manage Question Bank</Button>
                  <Button variant="outline" className="w-full">Export Analytics</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Assessments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="border-b pb-2">
                      <p className="font-medium">Software Engineer - Frontend</p>
                      <p className="text-sm text-gray-600">15 candidates assessed today</p>
                    </div>
                    <div className="border-b pb-2">
                      <p className="font-medium">Product Manager</p>
                      <p className="text-sm text-gray-600">8 candidates assessed yesterday</p>
                    </div>
                    <div>
                      <p className="font-medium">Data Scientist</p>
                      <p className="text-sm text-gray-600">22 candidates assessed this week</p>
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

export default CorporateDashboard;
