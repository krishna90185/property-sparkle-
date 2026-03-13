import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Paintbrush, Wrench, ShieldCheck, Zap, Droplets, Home } from "lucide-react";

const services = [
  { icon: Paintbrush, title: "Interior Painting", desc: "Professional painting services to refresh your home's look and feel.", price: "₹15/sq ft" },
  { icon: Wrench, title: "Plumbing Repair", desc: "Expert plumbing solutions for leaks, installations, and maintenance.", price: "₹500/visit" },
  { icon: Zap, title: "Electrical Work", desc: "Licensed electricians for wiring, fixtures, and safety upgrades.", price: "₹600/visit" },
  { icon: Droplets, title: "Waterproofing", desc: "Protect your property from water damage with professional waterproofing.", price: "₹25/sq ft" },
  { icon: Home, title: "Modular Kitchen", desc: "Custom modular kitchen design and installation services.", price: "₹1.5L onwards" },
  { icon: ShieldCheck, title: "Home Inspection", desc: "Comprehensive property inspection to identify improvement areas.", price: "₹2,000/visit" },
];

const ServicesPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-24 pb-16 gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-extrabold text-primary-foreground sm:text-5xl">Our Services</h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Browse our wide range of home improvement services designed to increase your property value.
        </p>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group card-hover rounded-xl bg-card p-8 shadow-md border border-border/50">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl gradient-primary text-primary-foreground transition-transform group-hover:scale-110">
                <s.icon size={24} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-heading font-bold text-primary">{s.price}</span>
                <Button size="sm" variant="outline" asChild>
                  <Link to="/signup">Book Now</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ServicesPage;
