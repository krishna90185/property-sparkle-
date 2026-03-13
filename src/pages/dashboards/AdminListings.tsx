import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, CheckCircle, XCircle, Eye, AlertTriangle } from "lucide-react";

const pendingListings = [
  {
    id: 1,
    title: "3BHK Luxury Apartment",
    location: "Andheri West, Mumbai",
    owner: "Rajesh Kumar",
    type: "Residential",
    price: "₹1.2Cr",
    submitted: "1 day ago",
    status: "Pending Approval",
    images: 8,
    documents: ["Ownership", "Tax Receipt", "Floor Plan"]
  },
  {
    id: 2,
    title: "Commercial Office Space",
    location: "Connaught Place, Delhi",
    owner: "Corporate Realty Ltd",
    type: "Commercial",
    price: "₹2.5Cr",
    submitted: "2 days ago",
    status: "Under Review",
    images: 12,
    documents: ["Ownership", "Lease Agreement", "Building Plan"]
  },
  {
    id: 3,
    title: "2BHK Flat",
    location: "HSR Layout, Bangalore",
    owner: "Priya Sharma",
    type: "Residential",
    price: "₹85L",
    submitted: "3 hours ago",
    status: "Pending Approval",
    images: 6,
    documents: ["Ownership", "Tax Receipt"]
  },
];

const AdminListings = () => {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-2xl font-bold">Approve Listings</h1>
          <p className="text-sm text-muted-foreground mt-1">Review and approve property listings for the platform</p>
        </div>

        <div className="grid gap-6">
          {pendingListings.map((listing) => (
            <Card key={listing.id} className="card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading">{listing.title}</CardTitle>
                  <Badge variant={
                    listing.status === "Under Review" ? "default" :
                    "outline"
                  }>
                    {listing.status === "Under Review" && <AlertTriangle size={12} className="mr-1" />}
                    {listing.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{listing.owner} • {listing.type}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Location</p>
                    <p className="font-medium flex items-center gap-1">
                      <MapPin size={14} />
                      {listing.location}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Price</p>
                    <p className="font-medium text-lg">{listing.price}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Images</p>
                    <p className="font-medium">{listing.images} uploaded</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Documents</p>
                    <p className="font-medium">{listing.documents.length} submitted</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Submitted Documents</p>
                  <div className="flex flex-wrap gap-2">
                    {listing.documents.map((doc) => (
                      <Badge key={doc} variant="outline" className="text-xs">
                        {doc}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Submitted {listing.submitted}</span>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye size={14} className="mr-1" />
                    Review Listing
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

        {pendingListings.length === 0 && (
          <div className="text-center py-12">
            <Building2 size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">No pending listings</h3>
            <p className="text-muted-foreground">All property listings have been reviewed.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AdminListings;