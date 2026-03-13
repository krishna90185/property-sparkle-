import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">
              PropValue<span className="text-accent">+</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Helping Indian homeowners improve property value through affordable upgrades, renovation services, and expert consultation.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {["Services", "Renovation Ideas", "Service Providers", "Consultants", "About Us"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">For Homeowners</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Dashboard", to: "/dashboard/homeowner" },
                { label: "List Your Property", to: "/dashboard/homeowner/properties" },
                { label: "Track Improvements", to: "/dashboard/homeowner/tracker" },
                { label: "Find Providers", to: "/dashboard/homeowner/providers" },
                { label: "Get Consultation", to: "/dashboard/homeowner/consultations" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="font-heading font-semibold mb-4">For Pros</h4>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold text-primary-foreground/70 mb-2">Providers</p>
                  {[
                    { label: "Dashboard", to: "/dashboard/provider" },
                    { label: "My Services", to: "/dashboard/provider/services" },
                    { label: "Bookings", to: "/dashboard/provider/bookings" },
                    { label: "Requests", to: "/dashboard/provider/requests" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="block text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary-foreground/70 mb-2">Consultants / Admin</p>
                  {[
                    { label: "Consultant Dashboard", to: "/dashboard/consultant" },
                    { label: "Consultant Chat", to: "/dashboard/consultant/chat" },
                    { label: "Admin Dashboard", to: "/dashboard/admin" },
                    { label: "Verify Providers", to: "/dashboard/admin/verify" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="block text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin size={16} className="shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone size={16} className="shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail size={16} className="shrink-0" />
                <span>hello@propvalue.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/50">
          © 2026 PropValue+. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
