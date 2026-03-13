import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, Wrench, Users, ShieldCheck, BarChart3, MessageSquare } from "lucide-react";

const roles = [
  {
    title: "Homeowner",
    description: "Manage your properties, track improvements, and connect with providers.",
    icon: Home,
    to: "/dashboard/homeowner",
  },
  {
    title: "Service Provider",
    description: "View your services, bookings, and requests from homeowners.",
    icon: Wrench,
    to: "/dashboard/provider",
  },
  {
    title: "Consultant",
    description: "Review properties, chat with homeowners, and share recommendations.",
    icon: Users,
    to: "/dashboard/consultant",
  },
  {
    title: "Admin",
    description: "Verify providers, approve listings, and monitor platform activity.",
    icon: ShieldCheck,
    to: "/dashboard/admin",
  },
];

const DashboardSelectorPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-24 pb-16 gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl font-extrabold text-primary-foreground sm:text-5xl">
          Choose a Dashboard
        </h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Select the role that best describes you to access the right tools and insights.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <div
              key={role.title}
              className="card-hover rounded-xl bg-card p-8 shadow-md border border-border/50"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl gradient-primary text-primary-foreground">
                <role.icon size={24} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{role.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{role.description}</p>
              <Button className="mt-6 w-full" asChild>
                <Link to={role.to}>Go to Dashboard</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default DashboardSelectorPage;
