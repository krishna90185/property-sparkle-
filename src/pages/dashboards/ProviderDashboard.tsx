import { useMemo, useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, ClipboardList, Star, Plus, IndianRupee } from "lucide-react";
import { useLocalStorageState } from "@/hooks/use-local-storage-state";

type Service = {
  id: number;
  name: string;
  price: string;
  bookings: number;
  rating: number;
  description?: string;
};

const initialServices: Service[] = [
  { id: 1, name: "Kitchen Renovation", price: "₹2.5L - ₹5L", bookings: 12, rating: 4.8, description: "End-to-end kitchen remodeling with custom cabinetry." },
  { id: 2, name: "Bathroom Remodeling", price: "₹1L - ₹3L", bookings: 8, rating: 4.6, description: "Modern bathroom upgrades with waterproofing and fittings." },
  { id: 3, name: "Interior Painting", price: "₹50K - ₹1.5L", bookings: 24, rating: 4.9, description: "Professional painting with premium finishes." },
];

const stats = [
  { icon: Wrench, label: "Active Services", value: "3", color: "gradient-primary" },
  { icon: ClipboardList, label: "Total Bookings", value: "44", color: "gradient-secondary" },
  { icon: Star, label: "Avg Rating", value: "4.8", color: "gradient-accent" },
  { icon: IndianRupee, label: "Revenue", value: "₹12.5L", color: "gradient-primary" },
];

const ProviderDashboard = () => {
  const [services, setServices] = useLocalStorageState<Service[]>("provider:services", initialServices);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [newService, setNewService] = useState<Omit<Service, "id">>({
    name: "",
    price: "",
    bookings: 0,
    rating: 0,
    description: "",
  });

  const activeService = useMemo(
    () => (selectedService ? services.find((s) => s.id === selectedService.id) : null),
    [services, selectedService],
  );

  const handleAddService = () => {
    const nextId = Math.max(0, ...services.map((s) => s.id)) + 1;
    setServices((prev) => [{ id: nextId, ...newService }, ...prev]);
    setNewService({ name: "", price: "", bookings: 0, rating: 0, description: "" });
    setIsAddOpen(false);
  };

  return (
    <DashboardLayout role="provider">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold">Service Provider Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-1">Manage your services and bookings</p>
          </div>
          <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
            <DialogTrigger asChild>
              <Button variant="accent">
                <Plus size={16} className="mr-2" /> Add Service
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add a New Service</DialogTitle>
                <DialogDescription>Enter service details to make it available to homeowners.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-2">
                <Input
                  placeholder="Service name"
                  value={newService.name}
                  onChange={(e) => setNewService((prev) => ({ ...prev, name: e.target.value }))}
                />
                <Input
                  placeholder="Price range"
                  value={newService.price}
                  onChange={(e) => setNewService((prev) => ({ ...prev, price: e.target.value }))}
                />
                <Input
                  placeholder="Estimated bookings"
                  type="number"
                  value={newService.bookings}
                  onChange={(e) => setNewService((prev) => ({ ...prev, bookings: Number(e.target.value) }))}
                />
                <Input
                  placeholder="Rating (0-5)"
                  type="number"
                  value={newService.rating}
                  onChange={(e) => setNewService((prev) => ({ ...prev, rating: Number(e.target.value) }))}
                />
              </div>
              <DialogFooter>
                <Button variant="secondary" onClick={() => setIsAddOpen(false)}>
                  Cancel
                </Button>
                <Button variant="accent" onClick={handleAddService}>
                  Add Service
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
          <h2 className="font-heading text-lg font-semibold mb-4">My Services</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="card-hover rounded-xl bg-card p-6 shadow-sm border border-border/50">
                <h3 className="font-heading font-semibold">{service.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{service.price}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{service.bookings} bookings</span>
                  <span className="flex items-center gap-1 text-accent font-medium">
                    <Star size={14} className="fill-accent" /> {service.rating}
                  </span>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1" onClick={() => setSelectedService(service)}>
                    View
                  </Button>
                  <Button size="sm" variant="accent" className="flex-1" onClick={() => setSelectedService(service)}>
                    Manage
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Service Details</DialogTitle>
              <DialogDescription>Review and manage your service listing.</DialogDescription>
            </DialogHeader>
            {activeService ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{activeService.name}</h3>
                    <p className="text-sm text-muted-foreground">{activeService.description}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{activeService.price}</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-muted p-4">
                    <div className="text-xs text-muted-foreground">Bookings</div>
                    <div className="text-xl font-semibold">{activeService.bookings}</div>
                  </div>
                  <div className="rounded-xl bg-muted p-4">
                    <div className="text-xs text-muted-foreground">Rating</div>
                    <div className="text-xl font-semibold">{activeService.rating}</div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Service not found.</p>
            )}
            <DialogFooter>
              <Button variant="secondary" onClick={() => setSelectedService(null)}>
                Close
              </Button>
              {activeService && (
                <Button
                  variant="accent"
                  onClick={() => {
                    setSelectedService(null);
                  }}
                >
                  Save
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default ProviderDashboard;
