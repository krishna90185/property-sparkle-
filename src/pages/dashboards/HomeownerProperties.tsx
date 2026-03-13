import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Plus, MapPin, IndianRupee, TrendingUp } from "lucide-react";
import { useLocalStorageState } from "@/hooks/use-local-storage-state";
import { initialProperties, Property } from "@/data/properties";

const HomeownerProperties = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useLocalStorageState<Property[]>("homeowner:properties", initialProperties);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const [newProperty, setNewProperty] = useState<Omit<Property, "id">>({
    name: "",
    location: "",
    value: "",
    growth: "",
    image: "🏠",
    status: "Active",
    description: "",
  });

  const handleAddProperty = () => {
    const nextId = Math.max(0, ...properties.map((p) => p.id)) + 1;
    setProperties((prev) => [{ id: nextId, ...newProperty }, ...prev]);
    setNewProperty({
      name: "",
      location: "",
      value: "",
      growth: "",
      image: "🏠",
      status: "Active",
      description: "",
    });
    setIsAddOpen(false);
  };

  const activeProperty = useMemo(
    () => (selectedProperty ? properties.find((p) => p.id === selectedProperty.id) : null),
    [properties, selectedProperty],
  );

  return (
    <DashboardLayout role="homeowner">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold">My Properties</h1>
            <p className="text-sm text-muted-foreground mt-1">Manage and track your property portfolio</p>
          </div>
          <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
            <DialogTrigger asChild>
              <Button variant="accent">
                <Plus size={16} className="mr-2" /> Add Property
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add a New Property</DialogTitle>
                <DialogDescription>Fill in basic details to track and manage your property.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-2">
                <Input
                  placeholder="Property name"
                  value={newProperty.name}
                  onChange={(e) => setNewProperty((prev) => ({ ...prev, name: e.target.value }))}
                />
                <Input
                  placeholder="Location"
                  value={newProperty.location}
                  onChange={(e) => setNewProperty((prev) => ({ ...prev, location: e.target.value }))}
                />
                <Input
                  placeholder="Current value (e.g. ₹75L)"
                  value={newProperty.value}
                  onChange={(e) => setNewProperty((prev) => ({ ...prev, value: e.target.value }))}
                />
                <Input
                  placeholder="Estimated growth (e.g. +10%)"
                  value={newProperty.growth}
                  onChange={(e) => setNewProperty((prev) => ({ ...prev, growth: e.target.value }))}
                />
                <Textarea
                  placeholder="Short description"
                  value={newProperty.description}
                  onChange={(e) => setNewProperty((prev) => ({ ...prev, description: e.target.value }))}
                />
              </div>
              <DialogFooter>
                <Button variant="secondary" onClick={() => setIsAddOpen(false)}>
                  Cancel
                </Button>
                <Button variant="accent" onClick={handleAddProperty}>
                  Add Property
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <Card key={property.id} className="card-hover">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="text-3xl">{property.image}</div>
                  <span className="rounded-pill bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                    {property.status}
                  </span>
                </div>
                <CardTitle className="font-heading">{property.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} />
                  {property.location}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-lg font-bold font-heading">
                      <IndianRupee size={16} />
                      {property.value}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-green-600">
                      <TrendingUp size={14} />
                      {property.growth} growth
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => setSelectedProperty(property)}
                  >
                    View Details
                  </Button>
                  <Button
                    size="sm"
                    variant="accent"
                    className="flex-1"
                    onClick={() => navigate(`/dashboard/homeowner/properties/${property.id}`)}
                  >
                    Manage
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {properties.length === 0 && (
          <div className="text-center py-12">
            <Building2 size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">No properties added yet</h3>
            <p className="text-muted-foreground mb-4">Start by adding your first property to track its value and improvements.</p>
            <Button variant="accent" onClick={() => setIsAddOpen(true)}>
              <Plus size={16} className="mr-2" /> Add Your First Property
            </Button>
          </div>
        )}

        <Dialog open={!!selectedProperty} onOpenChange={(open) => !open && setSelectedProperty(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Property Details</DialogTitle>
              <DialogDescription>Review basic information about your property.</DialogDescription>
            </DialogHeader>
            {activeProperty ? (
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{activeProperty.image}</div>
                  <div>
                    <div className="text-lg font-semibold">{activeProperty.name}</div>
                    <div className="text-sm text-muted-foreground">{activeProperty.location}</div>
                  </div>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div>
                    <div className="text-xs text-muted-foreground">Current Value</div>
                    <div className="text-lg font-semibold flex items-center gap-1">
                      <IndianRupee size={14} /> {activeProperty.value}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Growth</div>
                    <div className="text-lg font-semibold text-green-600 flex items-center gap-1">
                      <TrendingUp size={14} /> {activeProperty.growth}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Description</div>
                  <p className="mt-1 text-sm text-foreground">{activeProperty.description}</p>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Property not found.</p>
            )}
            <DialogFooter>
              <Button variant="secondary" onClick={() => setSelectedProperty(null)}>
                Close
              </Button>
              {activeProperty && (
                <Button
                  variant="accent"
                  onClick={() => {
                    navigate(`/dashboard/homeowner/properties/${activeProperty.id}`);
                    setSelectedProperty(null);
                  }}
                >
                  Manage
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default HomeownerProperties;