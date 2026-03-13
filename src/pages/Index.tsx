import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Wrench, TrendingUp, Users, Star, ChevronRight, Paintbrush, ShieldCheck, BarChart3, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  {
    icon: Paintbrush,
    title: "Affordable Renovation Ideas",
    description: "Curated budget-friendly renovation plans that maximize your property's market value.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Service Providers",
    description: "Connect with background-checked, rated professionals for all home improvement needs.",
  },
  {
    icon: BarChart3,
    title: "Property Value Tracking",
    description: "Real-time property valuation insights and improvement score tracking dashboard.",
  },
  {
    icon: MessageSquare,
    title: "Expert Property Consultation",
    description: "Get personalized advice from certified property consultants on value-adding upgrades.",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    text: "PropValue+ helped us renovate our 2BHK apartment within budget. Our property value increased by 18% in just 6 months!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    location: "Bangalore",
    text: "The service providers recommended here are excellent. Professional, punctual, and affordable. Highly recommend!",
    rating: 5,
  },
  {
    name: "Anita Patel",
    location: "Pune",
    text: "The consultation service gave us a clear roadmap. We now know exactly which improvements will give us the best returns.",
    rating: 4,
  },
];

const stats = [
  { value: "10,000+", label: "Properties Improved" },
  { value: "₹500Cr+", label: "Value Added" },
  { value: "5,000+", label: "Service Providers" },
  { value: "98%", label: "Satisfaction Rate" },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        <div className="container relative z-10 mx-auto px-4 py-32">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl animate-fade-in">
              Upgrade Your Home, Increase Your Property Value
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 animate-fade-in" style={{ animationDelay: "0.15s" }}>
              Helping Indian homeowners improve property value through affordable upgrades, renovation services, and expert consultation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="accent" size="xl" asChild>
                <Link to="/services">Explore Services <ChevronRight size={18} /></Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/signup">List Your Property</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/consultants">Get Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 rounded-2xl bg-card p-8 shadow-xl md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-2xl font-bold text-primary sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Everything You Need to <span className="text-primary">Add Value</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform connects homeowners with the right tools, experts, and services to maximize property value.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="group card-hover rounded-xl bg-card p-8 shadow-md border border-border/50 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl gradient-primary text-primary-foreground transition-transform group-hover:scale-110">
                  <feature.icon size={24} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center font-heading text-3xl font-bold sm:text-4xl">
            How It <span className="text-accent">Works</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: "01", icon: Home, title: "List Your Property", desc: "Add your property details and get an instant improvement score." },
              { step: "02", icon: Wrench, title: "Get Recommendations", desc: "Receive curated renovation ideas and connect with verified providers." },
              { step: "03", icon: TrendingUp, title: "Track Value Growth", desc: "Monitor your property value increase with our analytics dashboard." },
            ].map((item, i) => (
              <div key={item.step} className="relative text-center animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-card shadow-lg">
                  <item.icon size={32} className="text-primary" />
                </div>
                <span className="absolute top-0 right-1/4 font-heading text-6xl font-extrabold text-primary/10">{item.step}</span>
                <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center font-heading text-3xl font-bold sm:text-4xl">
            What Our <span className="text-secondary">Users Say</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="card-hover rounded-xl bg-card p-8 shadow-md border border-border/50 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={16} className={j < t.rating ? "fill-accent text-accent" : "text-border"} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground italic">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-primary-foreground font-heading font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground sm:text-4xl">
            Ready to Increase Your Property Value?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Join thousands of homeowners who are already benefiting from our platform.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="accent" size="xl" asChild>
              <Link to="/signup">Get Started Free</Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/consultants">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
