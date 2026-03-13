import { Link, useLocation } from "react-router-dom";
import { Home, Wrench, BarChart3, Users, MessageSquare, Settings, Bell, Search, LogOut, Menu, Building2, ClipboardList, ShieldCheck, UserCheck, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: "homeowner" | "provider" | "consultant" | "admin";
}

const menuItems = {
  homeowner: [
    { icon: Home, label: "Dashboard", path: "/dashboard/homeowner" },
    { icon: Building2, label: "My Properties", path: "/dashboard/homeowner/properties" },
    { icon: Wrench, label: "Renovation Ideas", path: "/dashboard/homeowner/renovations" },
    { icon: Users, label: "Find Providers", path: "/dashboard/homeowner/providers" },
    { icon: MessageSquare, label: "Consultations", path: "/dashboard/homeowner/consultations" },
    { icon: BarChart3, label: "Value Tracker", path: "/dashboard/homeowner/tracker" },
  ],
  provider: [
    { icon: Home, label: "Dashboard", path: "/dashboard/provider" },
    { icon: Wrench, label: "My Services", path: "/dashboard/provider/services" },
    { icon: ClipboardList, label: "Bookings", path: "/dashboard/provider/bookings" },
    { icon: MessageSquare, label: "Requests", path: "/dashboard/provider/requests" },
    { icon: BarChart3, label: "Analytics", path: "/dashboard/provider/analytics" },
  ],
  consultant: [
    { icon: Home, label: "Dashboard", path: "/dashboard/consultant" },
    { icon: Building2, label: "Review Properties", path: "/dashboard/consultant/properties" },
    { icon: MessageSquare, label: "Chat", path: "/dashboard/consultant/chat" },
    { icon: ClipboardList, label: "Recommendations", path: "/dashboard/consultant/recommendations" },
  ],
  admin: [
    { icon: Home, label: "Dashboard", path: "/dashboard/admin" },
    { icon: ShieldCheck, label: "Verify Providers", path: "/dashboard/admin/verify" },
    { icon: Building2, label: "Approve Listings", path: "/dashboard/admin/listings" },
    { icon: Activity, label: "Platform Activity", path: "/dashboard/admin/activity" },
    { icon: UserCheck, label: "Manage Users", path: "/dashboard/admin/users" },
  ],
};

const roleLabels = {
  homeowner: "Homeowner",
  provider: "Service Provider",
  consultant: "Property Consultant",
  admin: "Admin",
};

const DashboardLayout = ({ children, role }: DashboardLayoutProps) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const items = menuItems[role];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 flex h-full flex-col transition-all duration-300 gradient-primary text-primary-foreground ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4">
          {sidebarOpen && (
            <Link to="/" className="font-heading text-lg font-bold">
              PropValue<span className="text-accent">+</span>
            </Link>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="rounded-lg p-1.5 hover:bg-sidebar-accent">
            <Menu size={20} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {items.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-md"
                    : "text-primary-foreground/70 hover:bg-sidebar-accent/50 hover:text-primary-foreground"
                }`}
              >
                <item.icon size={18} className="shrink-0" />
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-sidebar-border p-3">
          <Link
            to="/login"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-primary-foreground/70 hover:bg-sidebar-accent/50 hover:text-primary-foreground transition-all"
          >
            <LogOut size={18} />
            {sidebarOpen && <span>Logout</span>}
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-16"}`}>
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-card px-6">
          <div className="flex items-center gap-4">
            <h2 className="font-heading text-sm font-semibold text-muted-foreground">{roleLabels[role]} Dashboard</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search..." className="w-64 rounded-xl pl-10 h-9 text-sm" />
            </div>
            <button className="relative rounded-xl p-2 text-muted-foreground hover:bg-muted transition-colors">
              <Bell size={18} />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent" />
            </button>
            <div className="flex h-8 w-8 items-center justify-center rounded-full gradient-accent text-accent-foreground font-heading text-xs font-bold">
              U
            </div>
          </div>
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
