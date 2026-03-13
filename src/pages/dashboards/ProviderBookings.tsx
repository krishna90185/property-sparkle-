import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, User, CheckCircle, XCircle, AlertCircle } from "lucide-react";

const bookings = [
  {
    id: 1,
    service: "Kitchen Renovation",
    client: "Rajesh Kumar",
    location: "Andheri West, Mumbai",
    date: "Dec 15, 2024",
    time: "10:00 AM",
    status: "Confirmed",
    amount: "₹3.2L"
  },
  {
    id: 2,
    service: "Interior Painting",
    client: "Priya Sharma",
    location: "Whitefield, Bangalore",
    date: "Dec 12, 2024",
    time: "2:00 PM",
    status: "Pending",
    amount: "₹85K"
  },
  {
    id: 3,
    service: "Bathroom Remodeling",
    client: "Amit Patel",
    location: "HSR Layout, Bangalore",
    date: "Nov 28, 2024",
    time: "11:00 AM",
    status: "Completed",
    amount: "₹1.8L"
  },
  {
    id: 4,
    service: "Kitchen Renovation",
    client: "Sneha Iyer",
    location: "Koramangala, Bangalore",
    date: "Dec 8, 2024",
    time: "9:00 AM",
    status: "Cancelled",
    amount: "₹2.8L"
  },
];

const ProviderBookings = () => {
  return (
    <DashboardLayout role="provider">
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-2xl font-bold">Bookings</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage your service bookings and appointments</p>
        </div>

        <div className="grid gap-6">
          {bookings.map((booking) => (
            <Card key={booking.id} className="card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading">{booking.service}</CardTitle>
                  <Badge variant={
                    booking.status === "Confirmed" ? "default" :
                    booking.status === "Completed" ? "secondary" :
                    booking.status === "Cancelled" ? "destructive" :
                    "outline"
                  }>
                    {booking.status === "Confirmed" && <CheckCircle size={12} className="mr-1" />}
                    {booking.status === "Pending" && <AlertCircle size={12} className="mr-1" />}
                    {booking.status === "Completed" && <CheckCircle size={12} className="mr-1" />}
                    {booking.status === "Cancelled" && <XCircle size={12} className="mr-1" />}
                    {booking.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <User size={14} />
                  {booking.client}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Date & Time</p>
                    <p className="font-medium flex items-center gap-1">
                      <Calendar size={14} />
                      {booking.date} at {booking.time}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Amount</p>
                    <p className="font-medium text-lg">{booking.amount}</p>
                  </div>
                </div>

                <div>
                  <p className="text-muted-foreground text-sm">Location</p>
                  <p className="font-medium flex items-center gap-1">
                    <MapPin size={14} />
                    {booking.location}
                  </p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">View Details</Button>
                  {booking.status === "Confirmed" && (
                    <Button size="sm" variant="accent" className="flex-1">Start Work</Button>
                  )}
                  {booking.status === "Pending" && (
                    <>
                      <Button size="sm" variant="outline" className="flex-1">Accept</Button>
                      <Button size="sm" variant="destructive" className="flex-1">Decline</Button>
                    </>
                  )}
                  {booking.status === "Completed" && (
                    <Button size="sm" variant="accent" className="flex-1">Leave Review</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {bookings.length === 0 && (
          <div className="text-center py-12">
            <Calendar size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">No bookings yet</h3>
            <p className="text-muted-foreground">Your service bookings will appear here once clients book your services.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ProviderBookings;