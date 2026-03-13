import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, MapPin, User, Clock, CheckCircle, XCircle } from "lucide-react";

const requests = [
  {
    id: 1,
    service: "Interior Painting",
    client: "Anita Desai",
    location: "Powai, Mumbai",
    description: "Need painting for 3BHK apartment - 1200 sq ft",
    budget: "₹1.2L",
    timeline: "Within 2 weeks",
    posted: "2 hours ago",
    status: "New"
  },
  {
    id: 2,
    service: "Kitchen Renovation",
    client: "Vikram Singh",
    location: "Indiranagar, Bangalore",
    description: "Modular kitchen installation with appliances",
    budget: "₹4L",
    timeline: "Flexible",
    posted: "1 day ago",
    status: "Responded"
  },
  {
    id: 3,
    service: "Bathroom Remodeling",
    client: "Meera Nair",
    location: "T. Nagar, Chennai",
    description: "Complete bathroom renovation including waterproofing",
    budget: "₹2.5L",
    timeline: "ASAP",
    posted: "3 days ago",
    status: "Quoted"
  },
];

const ProviderRequests = () => {
  return (
    <DashboardLayout role="provider">
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-2xl font-bold">Service Requests</h1>
          <p className="text-sm text-muted-foreground mt-1">Browse and respond to client service requests</p>
        </div>

        <div className="grid gap-6">
          {requests.map((request) => (
            <Card key={request.id} className="card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading">{request.service}</CardTitle>
                  <Badge variant={
                    request.status === "New" ? "default" :
                    request.status === "Responded" ? "secondary" :
                    "outline"
                  }>
                    {request.status === "New" && <Clock size={12} className="mr-1" />}
                    {request.status === "Responded" && <MessageSquare size={12} className="mr-1" />}
                    {request.status === "Quoted" && <CheckCircle size={12} className="mr-1" />}
                    {request.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <User size={14} />
                  {request.client}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">{request.description}</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Budget</p>
                    <p className="font-medium">{request.budget}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Timeline</p>
                    <p className="font-medium">{request.timeline}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    {request.location}
                  </div>
                  <span className="text-xs text-muted-foreground">Posted {request.posted}</span>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">View Details</Button>
                  {request.status === "New" && (
                    <Button size="sm" variant="accent" className="flex-1">Send Quote</Button>
                  )}
                  {request.status === "Responded" && (
                    <Button size="sm" variant="accent" className="flex-1">Follow Up</Button>
                  )}
                  {request.status === "Quoted" && (
                    <Button size="sm" variant="outline" className="flex-1">View Quote</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {requests.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">No service requests</h3>
            <p className="text-muted-foreground">New client requests will appear here. Keep your profile updated to attract more requests.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ProviderRequests;