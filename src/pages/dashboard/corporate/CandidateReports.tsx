
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Search, 
  Filter, 
  Download, 
  BarChart3 
} from "lucide-react";

const CandidateReports: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Candidate Reports</h2>
        <p className="text-muted-foreground mt-1">View and analyze interview performance data</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Interview Reports</CardTitle>
              <CardDescription>Comprehensive candidate evaluations</CardDescription>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search reports..."
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
          <div className="overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left font-medium text-sm p-3">Candidate</th>
                  <th className="text-left font-medium text-sm p-3">Position</th>
                  <th className="text-left font-medium text-sm p-3">Date</th>
                  <th className="text-left font-medium text-sm p-3">Score</th>
                  <th className="text-right font-medium text-sm p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 text-blue-600 h-8 w-8 rounded-full flex items-center justify-center font-medium">
                        RW
                      </div>
                      <span>Robert Wilson</span>
                    </div>
                  </td>
                  <td className="p-3 text-sm">Frontend Developer</td>
                  <td className="p-3 text-sm">Apr 10, 2025</td>
                  <td className="p-3">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                      85%
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <Button variant="outline" size="sm" className="mr-2">View</Button>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-100 text-purple-600 h-8 w-8 rounded-full flex items-center justify-center font-medium">
                        SL
                      </div>
                      <span>Sara Lee</span>
                    </div>
                  </td>
                  <td className="p-3 text-sm">UX Designer</td>
                  <td className="p-3 text-sm">Apr 8, 2025</td>
                  <td className="p-3">
                    <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs font-medium">
                      72%
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <Button variant="outline" size="sm" className="mr-2">View</Button>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-100 text-red-600 h-8 w-8 rounded-full flex items-center justify-center font-medium">
                        BT
                      </div>
                      <span>Brian Thompson</span>
                    </div>
                  </td>
                  <td className="p-3 text-sm">Backend Developer</td>
                  <td className="p-3 text-sm">Apr 5, 2025</td>
                  <td className="p-3">
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">
                      58%
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <Button variant="outline" size="sm" className="mr-2">View</Button>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Analytics</CardTitle>
            <CardDescription>Candidate performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <h3 className="font-medium">Analytics Dashboard</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  View detailed performance metrics across candidates
                </p>
                <Button className="mt-4">View Analytics</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Performance by Skill</CardTitle>
            <CardDescription>Breakdown of candidate skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Technical Knowledge</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full">
                  <div className="h-2 bg-iqblue rounded-full w-[78%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Problem Solving</span>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full">
                  <div className="h-2 bg-iqblue rounded-full w-[65%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Communication</span>
                  <span className="text-sm font-medium">82%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full">
                  <div className="h-2 bg-iqblue rounded-full w-[82%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Teamwork</span>
                  <span className="text-sm font-medium">71%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full">
                  <div className="h-2 bg-iqblue rounded-full w-[71%]"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CandidateReports;
