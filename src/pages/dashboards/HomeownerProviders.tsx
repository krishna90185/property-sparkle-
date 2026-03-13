import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MapPin, ShieldCheck, Search, Users } from "lucide-react";

const providers = [
  {
    id: 1,
    name: "Sharma Constructions",
    location: "Mumbai",
    rating: 4.8,
    reviews: 124,
    services: ["Painting", "Waterproofing"],
    verified: true,
    responseTime: "2 hours"
  },
  {
    id: 2,
    name: "GreenHome Interiors",
    location: "Bangalore",
    rating: 4.9,
    reviews: 98,
    services: ["Interior Design", "Modular Kitchen"],
    verified: true,
    responseTime: "1 hour"
  },
  {
    id: 3,
    name: "QuickFix Plumbing",
    location: "Delhi",
    rating: 4.6,
    reviews: 210,
    services: ["Plumbing", "Electrical"],
    verified: true,
    responseTime: "30 min"
  },
];

const HomeownerProviders = () => {
  return (
    <DashboardLayout role="homeowner">
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-2xl font-bold">Find Service Providers</h1>
          <p className="text-sm text-muted-foreground mt-1">Connect with verified professionals for your home improvement needs</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search providers..." className="pl-10" />
          </div>
          <Select>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Service Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="painting">Painting</SelectItem>
              <SelectItem value="plumbing">Plumbing</SelectItem>
              <SelectItem value="electrical">Electrical</SelectItem>
              <SelectItem value="kitchen">Modular Kitchen</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="bangalore">Bangalore</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Providers Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {providers.map((provider) => (
            <Card key={provider.id} className="card-hover">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-primary text-primary-foreground font-heading font-bold">
                    {provider.name[0]}
                  </div>
                  {provider.verified && (
                    <span className="flex items-center gap-1 text-xs font-medium text-accent">
                      <ShieldCheck size={14} />
                      Verified
                    </span>
                  )}
                </div>
                <CardTitle className="font-heading">{provider.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} />
                  {provider.location}
                </div>

                <div className="flex items-center gap-2">
                  <Star size={14} className="fill-accent text-accent" />
                  <span className="text-sm font-medium">{provider.rating}</span>
                  <span className="text-xs text-muted-foreground">({provider.reviews} reviews)</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {provider.services.map((service) => (
                    <span key={service} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {service}
                    </span>
                  ))}
                </div>

                <div className="text-xs text-muted-foreground">
                  Response time: {provider.responseTime}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">View Profile</Button>
                  <Button size="sm" variant="accent" className="flex-1">Contact</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {providers.length === 0 && (
          <div className="text-center py-12">
            <Users size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">No providers found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria or location.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default HomeownerProviders;