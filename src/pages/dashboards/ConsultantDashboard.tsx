import { useMemo, useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, MessageSquare, ClipboardList, TrendingUp } from "lucide-react";
import { useLocalStorageState } from "@/hooks/use-local-storage-state";

const stats = [
  { icon: Building2, label: "Properties Reviewed", value: "45", color: "gradient-primary" },
  { icon: MessageSquare, label: "Active Chats", value: "12", color: "gradient-secondary" },
  { icon: ClipboardList, label: "Recommendations", value: "89", color: "gradient-accent" },
  { icon: TrendingUp, label: "Success Rate", value: "94%", color: "gradient-primary" },
];

type PropertyReview = {
  id: number;
  name: string;
  location: string;
  status: "Pending Review" | "Reviewed" | "In Progress";
  notes?: string;
};

const initialPropertyReviews: PropertyReview[] = [
  { id: 1, name: "3BHK Villa", location: "Koregaon Park, Pune", status: "Pending Review" },
  { id: 2, name: "2BHK Apartment", location: "HSR Layout, Bangalore", status: "Reviewed" },
  { id: 3, name: "4BHK Duplex", location: "Banjara Hills, Hyderabad", status: "In Progress" },
];

const ConsultantDashboard = () => {
  const [propertyReviews, setPropertyReviews] = useLocalStorageState<PropertyReview[]>(
    "consultant:propertyReviews",
    initialPropertyReviews,
  );
  const [activeReview, setActiveReview] = useState<PropertyReview | null>(null);
  const [notes, setNotes] = useState("");

  const selectedReview = useMemo(
    () => (activeReview ? propertyReviews.find((p) => p.id === activeReview.id) : null),
    [activeReview, propertyReviews],
  );

  const saveNotes = () => {
    if (!selectedReview) return;
    setPropertyReviews((prev) =>
      prev.map((p) => (p.id === selectedReview.id ? { ...p, notes, status: "Reviewed" } : p)),
    );
    setActiveReview(null);
    setNotes("");
  };

  return (
    <DashboardLayout role="consultant">
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-2xl font-bold">Consultant Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Review properties and provide expert recommendations</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card-hover rounded-xl bg-card p-6 shadow-sm border border-border/50">
              <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${stat.color} text-primary-foreground`}>
                <stat.icon size={18} />
              </div>
              <div className="text-2xl font-bold font-heading">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-lg font-semibold">Property Reviews</h2>
            <span className="text-xs text-muted-foreground">Click a property to add notes and mark it reviewed</span>
          </div>
          <div className="space-y-3">
            {propertyReviews.map((prop) => (
              <div
                key={prop.id}
                className="card-hover flex cursor-pointer items-center justify-between rounded-xl bg-card p-5 shadow-sm border border-border/50"
                onClick={() => {
                  setActiveReview(prop);
                  setNotes(prop.notes ?? "");
                }}
              >
                <div>
                  <h3 className="font-heading font-semibold">{prop.name}</h3>
                  <p className="text-sm text-muted-foreground">{prop.location}</p>
                </div>
                <span
                  className={`rounded-pill px-3 py-1 text-xs font-medium ${
                    prop.status === "Reviewed" ? "bg-secondary/10 text-secondary" :
                    prop.status === "Pending Review" ? "bg-accent/10 text-accent" :
                    "bg-primary/10 text-primary"
                  }`}
                >
                  {prop.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Dialog open={!!activeReview} onOpenChange={(open) => !open && setActiveReview(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Review Property</DialogTitle>
              <DialogDescription>Add notes and mark this property reviewed.</DialogDescription>
            </DialogHeader>
            {selectedReview ? (
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium">{selectedReview.name}</div>
                  <div className="text-xs text-muted-foreground">{selectedReview.location}</div>
                </div>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add your recommendations here..."
                />
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Select a property to review.</p>
            )}
            <DialogFooter>
              <Button variant="secondary" onClick={() => setActiveReview(null)}>
                Cancel
              </Button>
              <Button variant="accent" onClick={saveNotes} disabled={!selectedReview}>
                Save Review
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default ConsultantDashboard;
