
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Practice from "./pages/Practice";
import Pricing from "./pages/Pricing";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import CandidateDashboard from "./pages/dashboard/CandidateDashboard";
import CorporateDashboard from "./pages/dashboard/CorporateDashboard";
import OneWayInterview from "./pages/interview/OneWayInterview";
import LiveInterview from "./pages/interview/LiveInterview";
import InterviewResults from "./pages/interview/InterviewResults";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/candidate" element={<CandidateDashboard />} />
          <Route path="/dashboard/corporate" element={<CorporateDashboard />} />
          <Route path="/interview/one-way" element={<OneWayInterview />} />
          <Route path="/interview/live" element={<LiveInterview />} />
          <Route path="/interview/results" element={<InterviewResults />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
