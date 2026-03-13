import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Star, IndianRupee, Plus, Edit, Eye } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Kitchen Renovation",
    category: "Interior",
    price: "₹2.5L - ₹5L",
    rating: 4.8,
    bookings: 12,
    status: "Active",
    description: "Complete modular kitchen installation with appliances"
  },
  {
    id: 2,
    name: "Bathroom Remodeling",
    category: "Plumbing",
    price: "₹1L - ₹3L",
    rating: 4.6,
    bookings: 8,
    status: "Active",
    description: "Full bathroom renovation including tiles and fixtures"
  },
  {
    id: 3,
    name: "Interior Painting",
    category: "Painting",
    price: "₹50K - ₹1.5L",
    rating: 4.9,
    bookings: 24,
    status: "Active",
    description: "Professional painting services for all interior surfaces"
  },
];

const ProviderServices = () => {
  return (
    <DashboardLayout role="provider">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold">My Services</h1>
            <p className="text-sm text-muted-foreground mt-1">Manage your service offerings and pricing</p>
          </div>
          <Button variant="accent">
            <Plus size={16} className="mr-2" /> Add Service
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="card-hover">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {service.category}
                  </Badge>
                  <Badge variant={service.status === "Active" ? "default" : "secondary"}>
                    {service.status}
                  </Badge>
                </div>
                <CardTitle className="font-heading">{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{service.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-lg font-bold font-heading">
                    <IndianRupee size={16} />
                    {service.price}
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-accent text-accent" />
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{service.bookings} bookings</p>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye size={14} className="mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="accent" className="flex-1">
                    <Edit size={14} className="mr-1" />
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {services.length === 0 && (
          <div className="text-center py-12">
            <Wrench size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">No services added yet</h3>
            <p className="text-muted-foreground mb-4">Start by adding your first service to attract customers.</p>
            <Button variant="accent">
              <Plus size={16} className="mr-2" /> Add Your First Service
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ProviderServices;