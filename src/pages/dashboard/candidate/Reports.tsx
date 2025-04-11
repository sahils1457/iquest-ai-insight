
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Reports: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">My Reports</h2>
        <p className="text-muted-foreground mt-1">View and analyze your interview performance</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Interview Reports</CardTitle>
          <CardDescription>Your past interview feedback and performance analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <div className="mx-auto h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-3">
              <FileText className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="font-medium">No reports available yet</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Complete an interview to receive detailed performance feedback
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
