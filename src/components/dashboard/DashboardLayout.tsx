
import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Bell, LogOut } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  sidebarItems: {
    icon: React.ElementType;
    title: string;
    path: string;
  }[];
  userType: "candidate" | "corporate";
  userName?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  sidebarItems,
  userType,
  userName = "User"
}) => {
  const location = useLocation();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="border-b border-sidebar-border p-4">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-iqblue">iQuest</span>
              <span className="ml-1 text-sm bg-iqblue text-white px-1.5 py-0.5 rounded">AI</span>
            </Link>
            <div className="text-sm text-muted-foreground mt-1">
              {userType === "candidate" ? "Candidate Portal" : "Corporate Portal"}
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={location.pathname === item.path}
                    asChild
                  >
                    <Link to={item.path}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          
          <SidebarFooter className="border-t border-sidebar-border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-iqblue-100 text-iqblue flex items-center justify-center">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <div className="text-sm font-medium group-data-[collapsible=icon]:hidden">
                  {userName}
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset>
          <div className="relative flex flex-col flex-1">
            <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
              <SidebarTrigger />
              <div className="flex flex-1 items-center justify-between">
                <div>
                  <h1 className="text-xl font-semibold">
                    {sidebarItems.find(item => item.path === location.pathname)?.title || "Dashboard"}
                  </h1>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-destructive" />
                  </Button>
                </div>
              </div>
            </header>
            <main className="flex-1 p-6">
              {children}
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
