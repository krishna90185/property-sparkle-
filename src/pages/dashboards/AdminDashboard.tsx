import { useMemo, useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ShieldCheck, Building2, Activity, Users, TrendingUp } from "lucide-react";
import { useLocalStorageState } from "@/hooks/use-local-storage-state";

const stats = [
  { icon: Users, label: "Total Users", value: "2,456", color: "gradient-primary" },
  { icon: ShieldCheck, label: "Pending Verifications", value: "18", color: "gradient-accent" },
  { icon: Building2, label: "Listed Properties", value: "1,234", color: "gradient-secondary" },
  { icon: TrendingUp, label: "Platform Growth", value: "+23%", color: "gradient-primary" },
];

type VerificationRequest = {
  id: number;
  providerName: string;
  organization: string;
  email: string;
  status: "Pending" | "Approved" | "Rejected";
};

const initialRequests: VerificationRequest[] = [
  { id: 1, providerName: "Sharma Interiors", organization: "Sharma Interiors", email: "contact@sharmainteriors.com", status: "Pending" },
  { id: 2, providerName: "QuickFix Services", organization: "QuickFix Services", email: "hello@quickfix.io", status: "Pending" },
  { id: 3, providerName: "BrightBuild", organization: "BrightBuild", email: "info@brightbuild.co", status: "Approved" },
];

const AdminDashboard = () => {
  const [requests, setRequests] = useLocalStorageState<VerificationRequest[]>(
    "admin:verifications",
    initialRequests,
  );
  const [selected, setSelected] = useState<VerificationRequest | null>(null);
  const [note, setNote] = useState("");

  const pending = useMemo(() => requests.filter((request) => request.status === "Pending"), [requests]);

  const updateStatus = (id: number, status: VerificationRequest["status"], note?: string) => {
    setRequests((prev) =>
      prev.map((request) => (request.id === id ? { ...request, status, ...(note ? { note } : {}) } : request)),
    );
    setSelected(null);
    setNote("");
  };

  return (
    <DashboardLayout role="admin">
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Monitor and manage the platform</p>
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

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-lg font-semibold">Pending Provider Verifications</h2>
            <span className="text-xs text-muted-foreground">Approve or reject requests to keep the platform safe.</span>
          </div>

          {pending.length ? (
            <div className="space-y-3">
              {pending.map((req) => (
                <div
                  key={req.id}
                  className="card-hover flex items-center justify-between gap-4 rounded-xl bg-card p-5 shadow-sm border border-border/50"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-semibold">{req.providerName}</span>
                      <Badge variant="outline">{req.organization}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">{req.email}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => {
                        setSelected(req);
                        setNote("");
                      }}
                    >
                      Review
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => updateStatus(req.id, "Rejected")}>Reject</Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl bg-card p-6 text-center text-sm text-muted-foreground shadow-sm border border-border/50">
              No pending verifications. Great work keeping things clean!
            </div>
          )}
        </div>

        <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Review Verification</DialogTitle>
              <DialogDescription>Approve or reject this provider verification request.</DialogDescription>
            </DialogHeader>

            {selected ? (
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium">{selected.providerName}</div>
                  <div className="text-xs text-muted-foreground">{selected.organization} — {selected.email}</div>
                </div>
                <Input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a note (optional)" />
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Select a request to review.</p>
            )}

            <DialogFooter>
              <Button variant="secondary" onClick={() => setSelected(null)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={() => selected && updateStatus(selected.id, "Rejected", note)}>
                Reject
              </Button>
              <Button variant="accent" onClick={() => selected && updateStatus(selected.id, "Approved", note)}>
                Approve
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
