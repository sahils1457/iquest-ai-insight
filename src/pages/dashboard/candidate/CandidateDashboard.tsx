
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LayoutDashboard, Calendar, FileText, Wallet, Settings } from "lucide-react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import CandidateHome from "./CandidateHome";
import BookInterview from "./BookInterview";
import Reports from "./Reports";
import CandidateWallet from "./CandidateWallet";
import CandidateSettings from "./CandidateSettings";
import OneWayInterview from "./interview/OneWayInterview";
import LiveInterview from "./interview/LiveInterview";
import InterviewReport from "./report/InterviewReport";
import InterviewReady from "./report/InterviewReady";
import InterviewScheduled from "./report/InterviewScheduled";

const sidebarItems = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    path: "/dashboard/candidate/home",
  },
  {
    icon: Calendar,
    title: "Book Interview",
    path: "/dashboard/candidate/book-interview",
  },
  {
    icon: FileText,
    title: "My Reports",
    path: "/dashboard/candidate/reports",
  },
  {
    icon: Wallet,
    title: "Wallet",
    path: "/dashboard/candidate/wallet",
  },
  {
    icon: Settings,
    title: "Settings",
    path: "/dashboard/candidate/settings",
  },
];

const CandidateDashboard: React.FC = () => {
  return (
    <DashboardLayout sidebarItems={sidebarItems} userType="candidate" userName="John Doe">
      <Routes>
        <Route path="home" element={<CandidateHome />} />
        <Route path="book-interview" element={<BookInterview />} />
        <Route path="book-interview/one-way" element={<OneWayInterview />} />
        <Route path="book-interview/live" element={<LiveInterview />} />
        <Route path="reports" element={<Reports />} />
        <Route path="reports/:id" element={<InterviewReport />} />
        <Route path="reports/interview-ready" element={<InterviewReady />} />
        <Route path="reports/interview-scheduled" element={<InterviewScheduled />} />
        <Route path="wallet" element={<CandidateWallet />} />
        <Route path="settings" element={<CandidateSettings />} />
        <Route path="*" element={<Navigate to="/dashboard/candidate/home" replace />} />
      </Routes>
    </DashboardLayout>
  );
};

export default CandidateDashboard;
