
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CreditCard, 
  Wallet, 
  Plus, 
  FileText, 
  ArrowDown,
  Check 
} from "lucide-react";

const CorporateWallet: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Wallet & Credits</h2>
        <p className="text-muted-foreground mt-1">Manage your interview credits and billing</p>
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
              <div className="text-4xl font-bold">250</div>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                <span>Buy Credits</span>
              </Button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Used this month: <span className="font-medium">48 credits</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Auto-renew: <span className="font-medium text-green-600">Enabled</span>
              </div>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full mt-2">
              <div className="h-2 bg-iqblue rounded-full w-[19%]"></div>
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
            <div className="bg-iqdark p-4 rounded-lg text-white">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Enterprise Plan</h3>
                <span className="text-xs bg-iqblue px-2 py-1 rounded">ACTIVE</span>
              </div>
              <p className="text-sm text-gray-300 mb-3">
                Unlimited team members, priority support, and advanced analytics
              </p>
              <div className="text-sm text-gray-300 space-y-1 mb-4">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span>Unlimited interviews per month</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span>Custom interview templates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span>Advanced analytics dashboard</span>
                </div>
              </div>
              <Button variant="outline" className="w-full bg-transparent text-white border-white hover:bg-white/10">
                Manage Subscription
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>Your recent transactions and invoices</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Download All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left font-medium text-sm p-3">Date</th>
                  <th className="text-left font-medium text-sm p-3">Description</th>
                  <th className="text-left font-medium text-sm p-3">Amount</th>
                  <th className="text-left font-medium text-sm p-3">Status</th>
                  <th className="text-right font-medium text-sm p-3">Invoice</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3 text-sm">Apr 10, 2025</td>
                  <td className="p-3 text-sm">Monthly Subscription - Enterprise Plan</td>
                  <td className="p-3 text-sm font-medium">$599.00</td>
                  <td className="p-3">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                      Paid
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <Button variant="ghost" size="icon">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3 text-sm">Apr 2, 2025</td>
                  <td className="p-3 text-sm">Credit Purchase - 100 Credits</td>
                  <td className="p-3 text-sm font-medium">$199.00</td>
                  <td className="p-3">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                      Paid
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <Button variant="ghost" size="icon">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3 text-sm">Mar 10, 2025</td>
                  <td className="p-3 text-sm">Monthly Subscription - Enterprise Plan</td>
                  <td className="p-3 text-sm font-medium">$599.00</td>
                  <td className="p-3">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                      Paid
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <Button variant="ghost" size="icon">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CorporateWallet;
