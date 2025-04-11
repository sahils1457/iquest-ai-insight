
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, ArrowUp, Wallet, Plus } from "lucide-react";

const CandidateWallet: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">My Wallet</h2>
        <p className="text-muted-foreground mt-1">Manage your interview credits and subscription</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-iqblue" />
              Credit Balance
            </CardTitle>
            <CardDescription>Your available interview credits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold">5</div>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                <span>Buy Credits</span>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground mt-3">
              Each credit allows you to schedule one interview session
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Wallet className="h-5 w-5 text-iqblue" />
              Current Plan
            </CardTitle>
            <CardDescription>Your subscription details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-iqblue-50 p-4 rounded-lg border border-iqblue-100">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-iqblue">Free Plan</h3>
                <span className="text-xs bg-iqblue px-2 py-1 rounded text-white">ACTIVE</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Basic access with limited features
              </p>
              <Button variant="outline" className="w-full">Upgrade Plan</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>Your recent credit purchases and usage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <div className="mx-auto h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-3">
              <ArrowUp className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="font-medium">No transactions yet</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Your credit purchases and usage will appear here
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CandidateWallet;
