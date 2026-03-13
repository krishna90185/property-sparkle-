import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-24 pb-16 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-extrabold text-primary-foreground sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 max-w-4xl mx-auto">
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground">Get in Touch</h2>
              <p className="mt-2 text-muted-foreground">Fill out the form and our team will respond within 24 hours.</p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm"><Mail size={18} className="text-primary" /><span>support@propvalueplus.in</span></div>
                <div className="flex items-center gap-3 text-sm"><Phone size={18} className="text-primary" /><span>+91 98765 43210</span></div>
                <div className="flex items-center gap-3 text-sm"><MapPin size={18} className="text-primary" /><span>Bandra West, Mumbai, Maharashtra 400050</span></div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 rounded-xl bg-card p-8 shadow-md border border-border/50">
              <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              <Input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              <Textarea placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
              <Button type="submit" className="w-full" variant="accent">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
