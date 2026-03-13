import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, MapPin, ShieldCheck } from "lucide-react";

const providers = [
  { name: "Sharma Constructions", location: "Mumbai", rating: 4.8, reviews: 124, services: ["Painting", "Waterproofing"], verified: true },
  { name: "GreenHome Interiors", location: "Bangalore", rating: 4.9, reviews: 98, services: ["Interior Design", "Modular Kitchen"], verified: true },
  { name: "QuickFix Plumbing", location: "Delhi", rating: 4.6, reviews: 210, services: ["Plumbing", "Electrical"], verified: true },
  { name: "DreamSpace Architects", location: "Pune", rating: 4.7, reviews: 67, services: ["Architecture", "Renovation"], verified: true },
  { name: "SafeGuard Electricals", location: "Hyderabad", rating: 4.5, reviews: 156, services: ["Electrical", "Smart Home"], verified: false },
  { name: "PureClean Services", location: "Chennai", rating: 4.8, reviews: 89, services: ["Deep Cleaning", "Pest Control"], verified: true },
];

const ServiceProvidersPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-24 pb-16 gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-extrabold text-primary-foreground sm:text-5xl">Service Providers</h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Connect with verified, rated professionals for all your home improvement needs.
        </p>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {providers.map((p) => (
            <div key={p.name} className="card-hover rounded-xl bg-card p-6 shadow-md border border-border/50">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-primary text-primary-foreground font-heading font-bold">{p.name[0]}</div>
                {p.verified && <span className="flex items-center gap-1 text-xs font-medium text-accent"><ShieldCheck size={14} />Verified</span>}
              </div>
              <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">{p.name}</h3>
              <p className="flex items-center gap-1 text-sm text-muted-foreground"><MapPin size={14} />{p.location}</p>
              <div className="mt-2 flex items-center gap-2">
                <Star size={14} className="fill-accent text-accent" />
                <span className="text-sm font-medium">{p.rating}</span>
                <span className="text-xs text-muted-foreground">({p.reviews} reviews)</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.services.map((s) => (
                  <span key={s} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{s}</span>
                ))}
              </div>
              <Button className="mt-4 w-full" size="sm" asChild>
                <Link to="/signup">Contact</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ServiceProvidersPage;
