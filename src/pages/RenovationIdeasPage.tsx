import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TrendingUp, IndianRupee } from "lucide-react";

const ideas = [
  { title: "Modern Bathroom Upgrade", budget: "₹50,000 - ₹1.5L", valueIncrease: "8-12%", desc: "Replace old fittings, add modern tiles, and install a rain shower for a spa-like experience." },
  { title: "Kitchen Remodeling", budget: "₹1L - ₹3L", valueIncrease: "10-15%", desc: "Upgrade to modular kitchen with granite countertops, chimney, and smart storage solutions." },
  { title: "Balcony Garden Setup", budget: "₹10,000 - ₹30,000", valueIncrease: "3-5%", desc: "Create a beautiful green space with planters, vertical gardens, and outdoor seating." },
  { title: "Floor Upgrade to Vitrified Tiles", budget: "₹40,000 - ₹1.2L", valueIncrease: "6-10%", desc: "Replace old mosaic flooring with premium vitrified or wooden laminate tiles." },
  { title: "Smart Home Automation", budget: "₹20,000 - ₹80,000", valueIncrease: "5-8%", desc: "Install smart lights, automated curtains, and voice-controlled home systems." },
  { title: "Fresh Paint & Wall Textures", budget: "₹15,000 - ₹60,000", valueIncrease: "4-7%", desc: "A fresh coat of paint with accent walls and texture finishes transforms any space." },
];

const RenovationIdeasPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-24 pb-16 gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-extrabold text-primary-foreground sm:text-5xl">Renovation Ideas</h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Budget-friendly renovation ideas that maximize your property's market value.
        </p>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ideas.map((idea) => (
            <div key={idea.title} className="card-hover rounded-xl bg-card p-8 shadow-md border border-border/50">
              <h3 className="font-heading text-lg font-semibold text-foreground">{idea.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{idea.desc}</p>
              <div className="mt-5 flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1 text-primary font-medium"><IndianRupee size={14} />{idea.budget}</span>
                <span className="flex items-center gap-1 text-accent font-medium"><TrendingUp size={14} />+{idea.valueIncrease}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default RenovationIdeasPage;
