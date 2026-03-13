import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Home, MapPin, IndianRupee, TrendingUp } from "lucide-react";
import { useLocalStorageState } from "@/hooks/use-local-storage-state";
import { initialProperties, Property } from "@/data/properties";

const HomeownerPropertyDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [properties] = useLocalStorageState<Property[]>("homeowner:properties", initialProperties);

  const property = useMemo<Property | undefined>(() => {
    if (!id) return undefined;
    const propertyId = Number(id);
    return properties.find((p) => p.id === propertyId);
  }, [id, properties]);

  if (!property) {
    return (
      <DashboardLayout role="homeowner">
        <div className="space-y-6">
          <h1 className="font-heading text-2xl font-bold">Property not found</h1>
          <p className="text-muted-foreground">We couldn’t find the property you’re looking for.</p>
          <Button onClick={() => navigate(-1)}>Back</Button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout role="homeowner">
      <div className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold">{property.name}</h1>
            <p className="text-sm text-muted-foreground">Details & management</p>
          </div>
          <Button variant="secondary" onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>

        <Card className="card-hover">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{property.image}</span>
                <div>
                  <CardTitle className="font-heading">{property.name}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} /> {property.location}
                  </div>
                </div>
              </div>
              <span className="rounded-pill bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                {property.status}
              </span>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <IndianRupee size={16} />
                <span className="font-medium">Current Value</span>
                <span className="text-foreground">{property.value}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp size={16} />
                <span className="font-medium">Growth</span>
                <span className="text-foreground">{property.growth}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Search size={16} />
                <span className="font-medium">Description</span>
              </div>
              <p className="text-sm text-foreground">{property.description}</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading text-lg font-semibold">Actions</h3>
              <Button variant="outline" className="w-full" onClick={() => navigate(`/dashboard/homeowner/properties/${property.id}`)}>
                Refresh
              </Button>
              <Button variant="accent" className="w-full" onClick={() => navigate("/dashboard/homeowner")}> 
                Back to Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default HomeownerPropertyDetail;
