
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  PieChart, 
  BarChart, 
  Users, 
  BarChart3, 
  CalendarPlus, 
  FileText, 
  Award, 
  ChevronRight 
} from "lucide-react";
import { Link } from "react-router-dom";

// Sample data for charts
const monthlyInterviews = [
  { name: 'Jan', count: 20 },
  { name: 'Feb', count: 15 },
  { name: 'Mar', count: 25 },
  { name: 'Apr', count: 30 },
  { name: 'May', count: 22 },
  { name: 'Jun', count: 35 },
];

const CorporateHome: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <Card className="bg-gradient-to-r from-iqdark-600 to-iqdark-800 border-none text-white">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold">Welcome back, Tech Corp!</h2>
              <p className="text-gray-300 mt-1">Manage your team's interview process</p>
            </div>
            <Button asChild className="bg-white text-iqdark hover:bg-gray-100">
              <Link to="/dashboard/corporate/scheduling" className="inline-flex items-center gap-2">
                <CalendarPlus className="h-4 w-4" />
                <span>Schedule New Interview</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <BarChart className="h-5 w-5 text-iqblue" />
              Total Interviews
            </CardTitle>
            <CardDescription>All scheduled interviews</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">127</div>
              <div className="text-sm text-emerald-500 flex items-center gap-1">
                +24%
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">12 interviews this week</p>
          </CardContent>
        </Card>
          
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Award className="h-5 w-5 text-iqblue" />
              Average Score
            </CardTitle>
            <CardDescription>Candidate performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">76%</div>
              <div className="text-sm text-amber-500 flex items-center gap-1">
                -2%
              </div>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full mt-4">
              <div className="h-2 bg-iqblue rounded-full w-[76%]"></div>
            </div>
          </CardContent>
        </Card>
          
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="h-5 w-5 text-iqblue" />
              Active Candidates
            </CardTitle>
            <CardDescription>In process candidates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">42</div>
              <div className="text-sm text-emerald-500 flex items-center gap-1">
                +8%
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">14 new this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Interview Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Interview Success Trends</CardTitle>
          <CardDescription>Monthly interview completion and success rates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center">
            {/* Placeholder for chart - In a real app, you'd use Recharts here */}
            <div className="w-full h-full flex flex-col">
              <div className="flex justify-between mb-2">
                <div className="text-sm font-medium">Monthly Interviews</div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 bg-iqblue rounded"></div>
                    <span className="text-xs">Completed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 bg-gray-300 rounded"></div>
                    <span className="text-xs">Scheduled</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex items-end">
                <div className="w-full flex justify-between items-end h-full pt-4">
                  {monthlyInterviews.map((month) => (
                    <div key={month.name} className="flex flex-col items-center">
                      <div 
                        className="w-10 bg-iqblue rounded-t" 
                        style={{ height: `${month.count * 5}px` }}
                      ></div>
                      <div className="text-xs mt-2">{month.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Upcoming Interviews</CardTitle>
              <CardDescription>Next 7 days</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link to="/dashboard/corporate/scheduling" className="inline-flex items-center gap-1">
                View All
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-iqblue-100 text-iqblue h-10 w-10 rounded-full flex items-center justify-center font-medium">
                    JS
                  </div>
                  <div>
                    <h4 className="font-medium">John Smith</h4>
                    <p className="text-xs text-muted-foreground">Software Engineer, React</p>
                  </div>
                </div>
                <div className="text-sm">Today, 2:00 PM</div>
              </div>
              
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 text-green-600 h-10 w-10 rounded-full flex items-center justify-center font-medium">
                    AD
                  </div>
                  <div>
                    <h4 className="font-medium">Alice Davis</h4>
                    <p className="text-xs text-muted-foreground">Product Manager</p>
                  </div>
                </div>
                <div className="text-sm">Tomorrow, 10:30 AM</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 text-purple-600 h-10 w-10 rounded-full flex items-center justify-center font-medium">
                    MJ
                  </div>
                  <div>
                    <h4 className="font-medium">Michael Johnson</h4>
                    <p className="text-xs text-muted-foreground">Data Scientist</p>
                  </div>
                </div>
                <div className="text-sm">Thu, 4:15 PM</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Reports</CardTitle>
              <CardDescription>Latest candidate evaluations</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link to="/dashboard/corporate/reports" className="inline-flex items-center gap-1">
                View All
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-100 text-amber-600 h-10 w-10 rounded-full flex items-center justify-center font-medium">
                    RW
                  </div>
                  <div>
                    <h4 className="font-medium">Robert Wilson</h4>
                    <p className="text-xs text-muted-foreground">Frontend Developer</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded text-xs font-medium">
                    85%
                  </div>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-600 h-10 w-10 rounded-full flex items-center justify-center font-medium">
                    SL
                  </div>
                  <div>
                    <h4 className="font-medium">Sara Lee</h4>
                    <p className="text-xs text-muted-foreground">UX Designer</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-amber-100 text-amber-600 px-2 py-1 rounded text-xs font-medium">
                    72%
                  </div>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 text-red-600 h-10 w-10 rounded-full flex items-center justify-center font-medium">
                    BT
                  </div>
                  <div>
                    <h4 className="font-medium">Brian Thompson</h4>
                    <p className="text-xs text-muted-foreground">Backend Developer</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
                    58%
                  </div>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team Performance */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Team Overview</CardTitle>
            <CardDescription>Monthly team performance and interview stats</CardDescription>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link to="/dashboard/corporate/team">
              Manage Team
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
              <div className="text-sm font-medium mb-2">Active Recruiters</div>
              <div className="text-4xl font-bold text-iqblue">8</div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
              <div className="text-sm font-medium mb-2">Interviews / Recruiter</div>
              <div className="text-4xl font-bold text-iqblue">15.9</div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg">
              <div className="text-sm font-medium mb-2">Avg. Time to Hire</div>
              <div className="text-4xl font-bold text-iqblue">12d</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CorporateHome;
