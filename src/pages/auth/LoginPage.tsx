
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoginForm from '@/components/auth/LoginForm';
import { Building, User } from 'lucide-react';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('candidate');

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-iqdark">Welcome back to iQuest</h1>
            <p className="text-gray-600 mt-2">Sign in to continue your interview preparation journey</p>
          </div>

          <Tabs 
            defaultValue="candidate" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="candidate" className="flex items-center justify-center">
                <User className="mr-2 h-4 w-4" />
                <span>Candidate</span>
              </TabsTrigger>
              <TabsTrigger value="corporate" className="flex items-center justify-center">
                <Building className="mr-2 h-4 w-4" />
                <span>Corporate</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="candidate">
              <LoginForm userType="candidate" />
            </TabsContent>
            <TabsContent value="corporate">
              <LoginForm userType="corporate" />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Right side - Image/Illustration */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-iqblue to-iqblue-700 text-white p-10 items-center justify-center">
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-bold mb-4">Prepare for interviews with confidence</h2>
          <p className="mb-6">Get personalized AI feedback on your interview skills and land your dream job.</p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm opacity-80">Interview Session</div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 p-3 rounded-md">
                <div className="font-medium">AI Interviewer</div>
                <p className="text-sm opacity-80">Tell me about a time you had to work under pressure.</p>
              </div>
              <div className="bg-white/20 p-3 rounded-md">
                <div className="font-medium">You</div>
                <p className="text-sm opacity-90">During my last project, we had a tight deadline...</p>
              </div>
              <div className="bg-white/10 p-3 rounded-md">
                <div className="font-medium">AI Feedback</div>
                <p className="text-sm opacity-80">Great start! Try to include specific actions you took.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
