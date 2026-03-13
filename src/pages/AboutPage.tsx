import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, TrendingUp, Heart, ShieldCheck, Star, Award, Building2 } from "lucide-react";

const values = [
  { icon: Target, title: "Our Mission", desc: "To empower Indian homeowners with affordable tools and services that increase their property value and quality of living." },
  { icon: Users, title: "Our Team", desc: "A passionate team of real estate experts, designers, and technologists working to transform how India improves homes." },
  { icon: TrendingUp, title: "Our Impact", desc: "Over 10,000 properties improved, ₹500Cr+ in value added, and a 98% customer satisfaction rate across India." },
  { icon: Heart, title: "Our Values", desc: "Transparency, affordability, and quality are at the core of everything we do. Every homeowner deserves a better home." },
];

const stats = [
  { number: "10,000+", label: "Properties Improved" },
  { number: "₹500Cr+", label: "Value Added" },
  { number: "98%", label: "Satisfaction Rate" },
  { number: "500+", label: "Verified Providers" },
];

const userTypes = [
  {
    title: "Homeowners",
    description: "Get personalized renovation advice and connect with verified service providers",
    icon: Building2,
    loginPath: "/login",
    features: ["Property Valuation", "Renovation Planning", "Provider Matching", "Progress Tracking"]
  },
  {
    title: "Service Providers",
    description: "Grow your business with our platform of verified clients and streamlined booking system",
    icon: ShieldCheck,
    loginPath: "/login",
    features: ["Client Management", "Booking System", "Payment Processing", "Analytics Dashboard"]
  },
  {
    title: "Property Consultants",
    description: "Leverage your expertise to help homeowners make informed property improvement decisions",
    icon: Award,
    loginPath: "/login",
    features: ["Client Consultations", "Report Generation", "Expert Network", "Commission Tracking"]
  },
  {
    title: "Administrators",
    description: "Manage the platform, verify providers, and ensure quality service delivery",
    icon: Star,
    loginPath: "/login",
    features: ["User Management", "Provider Verification", "Platform Analytics", "Quality Control"]
  }
];

const AboutPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-24 pb-16 gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-extrabold text-primary-foreground sm:text-5xl">About PropValue+</h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          We're on a mission to help every Indian homeowner unlock the true potential of their property through expert guidance and verified services.
        </p>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold font-heading text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-4">Why Choose PropValue+?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to revolutionizing property improvement in India through innovation, trust, and excellence.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="card-hover rounded-xl bg-card p-8 shadow-md border border-border/50">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
                <v.icon size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* User Types Section */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're a homeowner looking to improve your property or a professional offering services, PropValue+ has something for everyone.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {userTypes.map((type) => (
            <div key={type.title} className="card-hover rounded-xl bg-card p-6 shadow-md border border-border/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
                <type.icon size={20} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{type.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
              <div className="space-y-2 mb-6">
                {type.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {feature}
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to={type.loginPath}>Login as {type.title}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl font-bold mb-4">Ready to Transform Your Property?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Join thousands of satisfied homeowners and service providers who trust PropValue+ for their property improvement needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/signup">Get Started Today</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default AboutPage;
