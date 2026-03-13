import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Building2, TrendingUp, Wrench, Users, Plus, MapPin, IndianRupee } from "lucide-react";

const properties = [
  { name: "2BHK Apartment", location: "Andheri West, Mumbai", score: 72, value: "₹85L", image: "🏠" },
  { name: "3BHK Flat", location: "Whitefield, Bangalore", score: 58, value: "₹1.2Cr", image: "🏡" },
];

const quickStats = [
  { icon: Building2, label: "Properties", value: "2", color: "gradient-primary" },
  { icon: TrendingUp, label: "Avg. Value Growth", value: "+12%", color: "gradient-secondary" },
  { icon: Wrench, label: "Active Renovations", value: "3", color: "gradient-accent" },
  { icon: Users, label: "Connected Providers", value: "8", color: "gradient-primary" },
];

const HomeownerDashboard = () => {
  return (
    <DashboardLayout role="homeowner">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold">Welcome back! 👋</h1>
            <p className="text-sm text-muted-foreground mt-1">Here's an overview of your properties</p>
          </div>
          <Button variant="accent">
            <Plus size={16} className="mr-2" /> Add Property
          </Button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickStats.map((stat) => (
            <div key={stat.label} className="card-hover rounded-xl bg-card p-6 shadow-sm border border-border/50">
              <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${stat.color} text-primary-foreground`}>
                <stat.icon size={18} />
              </div>
              <div className="text-2xl font-bold font-heading">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Properties */}
        <div>
          <h2 className="font-heading text-lg font-semibold mb-4">My Properties</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {properties.map((prop) => (
              <div key={prop.name} className="card-hover rounded-xl bg-card p-6 shadow-sm border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-muted text-3xl">
                    {prop.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold">{prop.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <MapPin size={12} /> {prop.location}
                    </div>
                    <div className="flex items-center gap-1 text-sm font-semibold text-secondary mt-1">
                      <IndianRupee size={14} /> {prop.value}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-muted-foreground">Improvement Score</span>
                    <span className="font-semibold text-primary">{prop.score}%</span>
                  </div>
                  <Progress value={prop.score} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div>
          <h2 className="font-heading text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["View Renovation Ideas", "Find Service Providers", "Request Consultation", "Track Improvements"].map((action) => (
              <Button key={action} variant="outline" className="h-auto py-4 justify-start">
                {action}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HomeownerDashboard;
