import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, XCircle, CheckCircle, Eye, AlertTriangle } from "lucide-react";

const pendingProviders = [
  {
    id: 1,
    name: "GreenHome Interiors",
    type: "Service Provider",
    location: "Bangalore",
    services: ["Interior Design", "Modular Kitchen"],
    submitted: "2 days ago",
    documents: ["License", "Insurance", "ID Proof"],
    status: "Pending Review"
  },
  {
    id: 2,
    name: "QuickFix Plumbing",
    type: "Service Provider",
    location: "Delhi",
    services: ["Plumbing", "Electrical"],
    submitted: "1 day ago",
    documents: ["License", "Insurance", "ID Proof", "Experience Cert"],
    status: "Under Review"
  },
  {
    id: 3,
    name: "DreamSpace Architects",
    type: "Consultant",
    location: "Pune",
    services: ["Architecture", "Renovation Planning"],
    submitted: "3 days ago",
    documents: ["COA License", "Insurance", "Portfolio"],
    status: "Pending Review"
  },
];

const AdminVerify = () => {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-2xl font-bold">Verify Providers</h1>
          <p className="text-sm text-muted-foreground mt-1">Review and verify service providers and consultants</p>
        </div>

        <div className="grid gap-6">
          {pendingProviders.map((provider) => (
            <Card key={provider.id} className="card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading">{provider.name}</CardTitle>
                  <Badge variant={
                    provider.status === "Under Review" ? "default" :
                    "outline"
                  }>
                    {provider.status === "Under Review" && <AlertTriangle size={12} className="mr-1" />}
                    {provider.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{provider.type} • {provider.location}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Services Offered</p>
                  <div className="flex flex-wrap gap-2">
                    {provider.services.map((service) => (
                      <Badge key={service} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Submitted Documents</p>
                  <div className="flex flex-wrap gap-2">
                    {provider.documents.map((doc) => (
                      <Badge key={doc} variant="outline" className="text-xs">
                        {doc}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Submitted {provider.submitted}</span>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye size={14} className="mr-1" />
                    Review Documents
                  </Button>
                  <Button size="sm" variant="destructive" className="flex-1">
                    <XCircle size={14} className="mr-1" />
                    Reject
                  </Button>
                  <Button size="sm" variant="default" className="flex-1">
                    <CheckCircle size={14} className="mr-1" />
                    Approve
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {pendingProviders.length === 0 && (
          <div className="text-center py-12">
            <ShieldCheck size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">No pending verifications</h3>
            <p className="text-muted-foreground">All provider applications have been reviewed.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AdminVerify;