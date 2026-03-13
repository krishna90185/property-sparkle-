import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Calendar, Clock, CheckCircle, Plus } from "lucide-react";

const consultations = [
  {
    id: 1,
    consultant: "Dr. Anil Mehta",
    specialization: "Property Valuation",
    date: "Dec 10, 2024",
    time: "2:00 PM",
    status: "Scheduled",
    type: "Video Call",
    property: "2BHK Apartment, Mumbai"
  },
  {
    id: 2,
    consultant: "Sneha Iyer",
    specialization: "Interior Design Strategy",
    date: "Nov 25, 2024",
    time: "10:00 AM",
    status: "Completed",
    type: "In-person",
    property: "3BHK Flat, Bangalore"
  },
  {
    id: 3,
    consultant: "Vikram Singh",
    specialization: "Structural Assessment",
    date: "Dec 5, 2024",
    time: "4:00 PM",
    status: "Pending",
    type: "Video Call",
    property: "2BHK Apartment, Mumbai"
  },
];

const HomeownerConsultations = () => {
  return (
    <DashboardLayout role="homeowner">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold">My Consultations</h1>
            <p className="text-sm text-muted-foreground mt-1">Manage your property consultation appointments</p>
          </div>
          <Button variant="accent">
            <Plus size={16} className="mr-2" /> Book Consultation
          </Button>
        </div>

        <div className="grid gap-6">
          {consultations.map((consultation) => (
            <Card key={consultation.id} className="card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading">{consultation.consultant}</CardTitle>
                  <Badge variant={
                    consultation.status === "Completed" ? "secondary" :
                    consultation.status === "Scheduled" ? "default" :
                    "outline"
                  }>
                    {consultation.status === "Completed" && <CheckCircle size={12} className="mr-1" />}
                    {consultation.status === "Scheduled" && <Calendar size={12} className="mr-1" />}
                    {consultation.status === "Pending" && <Clock size={12} className="mr-1" />}
                    {consultation.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{consultation.specialization}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Date & Time</p>
                    <p className="font-medium">{consultation.date} at {consultation.time}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Type</p>
                    <p className="font-medium">{consultation.type}</p>
                  </div>
                </div>

                <div>
                  <p className="text-muted-foreground text-sm">Property</p>
                  <p className="font-medium">{consultation.property}</p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <MessageSquare size={14} className="mr-2" />
                    Chat
                  </Button>
                  {consultation.status === "Scheduled" && (
                    <Button size="sm" variant="accent" className="flex-1">Join Call</Button>
                  )}
                  {consultation.status === "Pending" && (
                    <Button size="sm" variant="accent" className="flex-1">Confirm</Button>
                  )}
                  {consultation.status === "Completed" && (
                    <Button size="sm" variant="outline" className="flex-1">View Report</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {consultations.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">No consultations booked</h3>
            <p className="text-muted-foreground mb-4">Get expert advice from certified property consultants.</p>
            <Button variant="accent">
              <Plus size={16} className="mr-2" /> Book Your First Consultation
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default HomeownerConsultations;