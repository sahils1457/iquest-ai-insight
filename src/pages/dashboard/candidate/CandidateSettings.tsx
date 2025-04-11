
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Bell, Shield, Save } from "lucide-react";

const CandidateSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Settings</h2>
        <p className="text-muted-foreground mt-1">Manage your account preferences</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-iqblue" />
              Profile Information
            </CardTitle>
            <CardDescription>Update your personal details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium block mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  defaultValue="John Doe"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md"
                  defaultValue="john.doe@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your job title"
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
                  <h4 className="font-medium">Email Notifications</h4>
                  <p className="text-sm text-muted-foreground">Receive email updates about your activity</p>
                </div>
                <div className="h-6 w-12 bg-iqblue rounded-full relative p-1 cursor-pointer">
                  <div className="h-4 w-4 bg-white rounded-full absolute right-1"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Interview Reminders</h4>
                  <p className="text-sm text-muted-foreground">Get notified before scheduled interviews</p>
                </div>
                <div className="h-6 w-12 bg-iqblue rounded-full relative p-1 cursor-pointer">
                  <div className="h-4 w-4 bg-white rounded-full absolute right-1"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Report Notifications</h4>
                  <p className="text-sm text-muted-foreground">Get notified when a new report is ready</p>
                </div>
                <div className="h-6 w-12 bg-iqblue rounded-full relative p-1 cursor-pointer">
                  <div className="h-4 w-4 bg-white rounded-full absolute right-1"></div>
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
            <CardDescription>Manage your account security</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <label className="text-sm font-medium block mb-2">
                Current Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter your current password"
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium block mb-2">
                New Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter new password"
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium block mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Confirm new password"
              />
            </div>
            <Button className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              <span>Update Password</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CandidateSettings;
