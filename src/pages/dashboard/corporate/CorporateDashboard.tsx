
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  FileText, 
  Wallet, 
  Settings 
} from "lucide-react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import CorporateHome from "./CorporateHome";
import InterviewScheduling from "./InterviewScheduling";
import TeamManagement from "./TeamManagement";
import CandidateReports from "./CandidateReports";
import CorporateWallet from "./CorporateWallet";
import CorporateSettings from "./CorporateSettings";

const sidebarItems = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    path: "/dashboard/corporate/home",
  },
  {
    icon: Calendar,
    title: "Interview Scheduling",
    path: "/dashboard/corporate/scheduling",
  },
  {
    icon: Users,
    title: "Team Management",
    path: "/dashboard/corporate/team",
  },
  {
    icon: FileText,
    title: "Candidate Reports",
    path: "/dashboard/corporate/reports",
  },
  {
    icon: Wallet,
    title: "Wallet & Credits",
    path: "/dashboard/corporate/wallet",
  },
  {
    icon: Settings,
    title: "Settings",
    path: "/dashboard/corporate/settings",
  },
];

const CorporateDashboard: React.FC = () => {
  return (
    <DashboardLayout sidebarItems={sidebarItems} userType="corporate" userName="Tech Corp">
      <Routes>
        <Route path="home" element={<CorporateHome />} />
        <Route path="scheduling" element={<InterviewScheduling />} />
        <Route path="team" element={<TeamManagement />} />
        <Route path="reports" element={<CandidateReports />} />
        <Route path="wallet" element={<CorporateWallet />} />
        <Route path="settings" element={<CorporateSettings />} />
        <Route path="*" element={<Navigate to="/dashboard/corporate/home" replace />} />
      </Routes>
    </DashboardLayout>
  );
};

export default CorporateDashboard;
