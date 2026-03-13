import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Wrench, Clock, CheckCircle, IndianRupee, Plus } from "lucide-react";

const renovations = [
  {
    id: 1,
    title: "Kitchen Renovation",
    property: "2BHK Apartment, Mumbai",
    budget: "₹2.5L",
    progress: 75,
    status: "In Progress",
    deadline: "Dec 15, 2024",
    provider: "Sharma Constructions"
  },
  {
    id: 2,
    title: "Bathroom Remodeling",
    property: "3BHK Flat, Bangalore",
    budget: "₹1.8L",
    progress: 100,
    status: "Completed",
    deadline: "Nov 20, 2024",
    provider: "GreenHome Interiors"
  },
];

const HomeownerRenovations = () => {
  return (
    <DashboardLayout role="homeowner">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold">Renovation Projects</h1>
            <p className="text-sm text-muted-foreground mt-1">Track your home improvement projects</p>
          </div>
          <Button variant="accent">
            <Plus size={16} className="mr-2" /> Start New Project
          </Button>
        </div>

        <div className="grid gap-6">
          {renovations.map((renovation) => (
            <Card key={renovation.id} className="card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading">{renovation.title}</CardTitle>
                  <span className={`rounded-pill px-3 py-1 text-xs font-medium ${
                    renovation.status === "Completed" ? "bg-secondary/10 text-secondary" :
                    renovation.status === "In Progress" ? "bg-accent/10 text-accent" :
                    "bg-primary/10 text-primary"
                  }`}>
                    {renovation.status === "Completed" && <CheckCircle size={12} className="inline mr-1" />}
                    {renovation.status === "In Progress" && <Clock size={12} className="inline mr-1" />}
                    {renovation.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{renovation.property}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Progress</span>
                  <span className="font-medium">{renovation.progress}%</span>
                </div>
                <Progress value={renovation.progress} className="h-2" />

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Budget</p>
                    <p className="font-medium flex items-center gap-1">
                      <IndianRupee size={14} />
                      {renovation.budget}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Deadline</p>
                    <p className="font-medium">{renovation.deadline}</p>
                  </div>
                </div>

                <div>
                  <p className="text-muted-foreground text-sm">Service Provider</p>
                  <p className="font-medium">{renovation.provider}</p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">View Details</Button>
                  <Button size="sm" variant="accent" className="flex-1">Update Progress</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {renovations.length === 0 && (
          <div className="text-center py-12">
            <Wrench size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">No renovation projects yet</h3>
            <p className="text-muted-foreground mb-4">Start your first renovation project to improve your property value.</p>
            <Button variant="accent">
              <Plus size={16} className="mr-2" /> Start New Project
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default HomeownerRenovations;