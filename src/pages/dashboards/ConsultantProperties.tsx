import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Clock, CheckCircle, Eye } from "lucide-react";

const properties = [
  {
    id: 1,
    name: "3BHK Villa",
    location: "Koregaon Park, Pune",
    owner: "Rajesh Kumar",
    type: "Residential",
    area: "1800 sq ft",
    status: "Pending Review",
    submitted: "2 hours ago",
    priority: "High"
  },
  {
    id: 2,
    name: "2BHK Apartment",
    location: "HSR Layout, Bangalore",
    owner: "Priya Sharma",
    type: "Residential",
    area: "1200 sq ft",
    status: "Under Review",
    submitted: "1 day ago",
    priority: "Medium"
  },
  {
    id: 3,
    name: "4BHK Duplex",
    location: "Banjara Hills, Hyderabad",
    owner: "Amit Patel",
    type: "Residential",
    area: "2400 sq ft",
    status: "Review Completed",
    submitted: "3 days ago",
    priority: "High"
  },
  {
    id: 4,
    name: "Commercial Space",
    location: "Connaught Place, Delhi",
    owner: "Sneha Iyer",
    type: "Commercial",
    area: "1500 sq ft",
    status: "Pending Review",
    submitted: "4 hours ago",
    priority: "Low"
  },
];

const ConsultantProperties = () => {
  return (
    <DashboardLayout role="consultant">
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-2xl font-bold">Review Properties</h1>
          <p className="text-sm text-muted-foreground mt-1">Evaluate and provide recommendations for property improvements</p>
        </div>

        <div className="grid gap-6">
          {properties.map((property) => (
            <Card key={property.id} className="card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading">{property.name}</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant={
                      property.priority === "High" ? "destructive" :
                      property.priority === "Medium" ? "default" :
                      "secondary"
                    }>
                      {property.priority}
                    </Badge>
                    <Badge variant={
                      property.status === "Review Completed" ? "secondary" :
                      property.status === "Under Review" ? "default" :
                      "outline"
                    }>
                      {property.status === "Review Completed" && <CheckCircle size={12} className="mr-1" />}
                      {property.status === "Under Review" && <Clock size={12} className="mr-1" />}
                      {property.status}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Owner: {property.owner}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Type</p>
                    <p className="font-medium">{property.type}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Area</p>
                    <p className="font-medium">{property.area}</p>
                  </div>
                </div>

                <div>
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="font-medium flex items-center gap-1">
                    <MapPin size={14} />
                    {property.location}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Submitted {property.submitted}</span>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye size={14} className="mr-1" />
                    View Details
                  </Button>
                  {property.status === "Pending Review" && (
                    <Button size="sm" variant="accent" className="flex-1">Start Review</Button>
                  )}
                  {property.status === "Under Review" && (
                    <Button size="sm" variant="accent" className="flex-1">Continue Review</Button>
                  )}
                  {property.status === "Review Completed" && (
                    <Button size="sm" variant="outline" className="flex-1">View Report</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {properties.length === 0 && (
          <div className="text-center py-12">
            <Building2 size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">No properties to review</h3>
            <p className="text-muted-foreground">New property submissions will appear here for your expert review.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ConsultantProperties;