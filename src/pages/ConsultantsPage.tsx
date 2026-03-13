import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, MapPin, Award } from "lucide-react";

const consultants = [
  { name: "Dr. Anil Mehta", specialization: "Property Valuation", location: "Mumbai", rating: 4.9, experience: "15 years", consultations: 520 },
  { name: "Sneha Iyer", specialization: "Interior Design Strategy", location: "Bangalore", rating: 4.8, experience: "10 years", consultations: 340 },
  { name: "Vikram Singh", specialization: "Structural Assessment", location: "Delhi", rating: 4.7, experience: "12 years", consultations: 410 },
  { name: "Pooja Reddy", specialization: "Green Building Advisory", location: "Hyderabad", rating: 4.9, experience: "8 years", consultations: 210 },
  { name: "Arjun Das", specialization: "Real Estate Investment", location: "Kolkata", rating: 4.6, experience: "20 years", consultations: 680 },
  { name: "Meera Nair", specialization: "Home Staging", location: "Chennai", rating: 4.8, experience: "7 years", consultations: 190 },
];

const ConsultantsPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-24 pb-16 gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-extrabold text-primary-foreground sm:text-5xl">Property Consultants</h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Get personalized advice from certified property consultants on value-adding upgrades.
        </p>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {consultants.map((c) => (
            <div key={c.name} className="card-hover rounded-xl bg-card p-6 shadow-md border border-border/50">
              <div className="flex h-14 w-14 items-center justify-center rounded-full gradient-primary text-primary-foreground font-heading font-bold text-lg">{c.name[0]}</div>
              <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">{c.name}</h3>
              <p className="text-sm font-medium text-primary">{c.specialization}</p>
              <p className="flex items-center gap-1 text-sm text-muted-foreground mt-1"><MapPin size={14} />{c.location}</p>
              <div className="mt-3 flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1"><Star size={14} className="fill-accent text-accent" />{c.rating}</span>
                <span className="flex items-center gap-1"><Award size={14} className="text-primary" />{c.experience}</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{c.consultations}+ consultations completed</p>
              <Button className="mt-4 w-full" size="sm" variant="accent" asChild>
                <Link to="/signup">Book Consultation</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ConsultantsPage;
