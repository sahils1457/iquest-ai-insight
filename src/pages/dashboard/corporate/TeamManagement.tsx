
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  UserPlus, 
  Search, 
  Filter,
  Mail,
  Phone,
  MoreHorizontal,
  Users
} from "lucide-react";

const TeamManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Team Management</h2>
          <p className="text-muted-foreground mt-1">Manage team members and permissions</p>
        </div>
        <Button className="flex items-center gap-2">
          <UserPlus className="h-4 w-4" />
          <span>Add Team Member</span>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>All users with access to your organization</CardDescription>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search members..."
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
                  <th className="text-left font-medium text-sm p-3">Name</th>
                  <th className="text-left font-medium text-sm p-3">Email</th>
                  <th className="text-left font-medium text-sm p-3">Role</th>
                  <th className="text-left font-medium text-sm p-3">Status</th>
                  <th className="text-right font-medium text-sm p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-iqblue-100 text-iqblue h-8 w-8 rounded-full flex items-center justify-center font-medium">
                        JD
                      </div>
                      <span>Jane Doe</span>
                    </div>
                  </td>
                  <td className="p-3 text-sm">jane.doe@example.com</td>
                  <td className="p-3 text-sm">Admin</td>
                  <td className="p-3">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                      Active
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-100 text-purple-600 h-8 w-8 rounded-full flex items-center justify-center font-medium">
                        MS
                      </div>
                      <span>Mark Smith</span>
                    </div>
                  </td>
                  <td className="p-3 text-sm">mark.smith@example.com</td>
                  <td className="p-3 text-sm">Recruiter</td>
                  <td className="p-3">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                      Active
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-amber-100 text-amber-600 h-8 w-8 rounded-full flex items-center justify-center font-medium">
                        AL
                      </div>
                      <span>Anna Lee</span>
                    </div>
                  </td>
                  <td className="p-3 text-sm">anna.lee@example.com</td>
                  <td className="p-3 text-sm">Interviewer</td>
                  <td className="p-3">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      Invited
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Role Permissions</CardTitle>
            <CardDescription>Manage access levels for team roles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-md p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">Admin</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Full Access</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Can manage all aspects of the organization, including team members, billing, and settings.
                </p>
              </div>
              
              <div className="border rounded-md p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">Recruiter</h3>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Standard Access</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Can schedule interviews, view candidate reports, and manage the hiring process.
                </p>
              </div>
              
              <div className="border rounded-md p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">Interviewer</h3>
                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">Limited Access</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Can conduct assigned interviews and submit evaluations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Pending Invitations</CardTitle>
            <CardDescription>Team members waiting to join</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="border rounded-md p-3 flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Thomas Wilson</h4>
                  <p className="text-xs text-muted-foreground">thomas.wilson@example.com • Recruiter</p>
                </div>
                <Button variant="outline" size="sm">Resend</Button>
              </div>
              
              <div className="border rounded-md p-3 flex justify-between items-center">
                <div>
                  <h4 className="font-medium">Emily Chen</h4>
                  <p className="text-xs text-muted-foreground">emily.chen@example.com • Interviewer</p>
                </div>
                <Button variant="outline" size="sm">Resend</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeamManagement;
