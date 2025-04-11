
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building, 
  Bell, 
  Shield, 
  Users, 
  Save 
} from "lucide-react";

const CorporateSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Settings</h2>
        <p className="text-muted-foreground mt-1">Manage your corporate account settings</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-iqblue" />
              Company Information
            </CardTitle>
            <CardDescription>Update your organization details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium block mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  defaultValue="Tech Corp"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">
                  Industry
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  defaultValue="Technology"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">
                  Company Size
                </label>
                <select className="w-full px-3 py-2 border rounded-md">
                  <option>1-10 employees</option>
                  <option>11-50 employees</option>
                  <option selected>51-200 employees</option>
                  <option>201-500 employees</option>
                  <option>501-1000 employees</option>
                  <option>1000+ employees</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">
                  Company Website
                </label>
                <input
                  type="url"
                  className="w-full px-3 py-2 border rounded-md"
                  defaultValue="https://techcorp.example.com"
                />
              </div>
            </div>
            <Button className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              <span>Save Changes</span>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-iqblue" />
              Notification Settings
            </CardTitle>
            <CardDescription>Manage your notification preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Interview Notifications</h4>
                  <p className="text-sm text-muted-foreground">Notify when interviews are scheduled or completed</p>
                </div>
                <div className="h-6 w-12 bg-iqblue rounded-full relative p-1 cursor-pointer">
                  <div className="h-4 w-4 bg-white rounded-full absolute right-1"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Team Notifications</h4>
                  <p className="text-sm text-muted-foreground">Notify about team member actions and status changes</p>
                </div>
                <div className="h-6 w-12 bg-iqblue rounded-full relative p-1 cursor-pointer">
                  <div className="h-4 w-4 bg-white rounded-full absolute right-1"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Billing Notifications</h4>
                  <p className="text-sm text-muted-foreground">Receive updates about invoices and subscription</p>
                </div>
                <div className="h-6 w-12 bg-iqblue rounded-full relative p-1 cursor-pointer">
                  <div className="h-4 w-4 bg-white rounded-full absolute right-1"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Marketing Communications</h4>
                  <p className="text-sm text-muted-foreground">Receive product updates and promotional content</p>
                </div>
                <div className="h-6 w-12 bg-gray-200 rounded-full relative p-1 cursor-pointer">
                  <div className="h-4 w-4 bg-white rounded-full absolute left-1"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-iqblue" />
              Security Settings
            </CardTitle>
            <CardDescription>Manage account security options</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Two-Factor Authentication</h4>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                </div>
                <Button>Enable</Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Session Management</h4>
                  <p className="text-sm text-muted-foreground">Manage your active sessions</p>
                </div>
                <Button variant="outline">Manage</Button>
              </div>
              
              <div className="border-t pt-4 mt-4">
                <h4 className="font-medium mb-3">Password Update</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm font-medium block mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Enter current password"
                    />
                  </div>
                  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium block mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Enter new password"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>
                </div>
                <Button>Update Password</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-iqblue" />
              User Management
            </CardTitle>
            <CardDescription>Manage user roles and permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Role Management</h4>
                  <p className="text-sm text-muted-foreground">Create and manage custom roles for your team</p>
                </div>
                <Button variant="outline">Manage Roles</Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Permission Templates</h4>
                  <p className="text-sm text-muted-foreground">Set default permissions for new users</p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Single Sign-On (SSO)</h4>
                  <p className="text-sm text-muted-foreground">Enable SSO integration for your organization</p>
                </div>
                <Button>Configure SSO</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CorporateSettings;
