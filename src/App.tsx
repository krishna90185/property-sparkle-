import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import RenovationIdeasPage from "./pages/RenovationIdeasPage.tsx";
import ServiceProvidersPage from "./pages/ServiceProvidersPage.tsx";
import ConsultantsPage from "./pages/ConsultantsPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import HomeownerDashboard from "./pages/dashboards/HomeownerDashboard.tsx";
import ProviderDashboard from "./pages/dashboards/ProviderDashboard.tsx";
import ConsultantDashboard from "./pages/dashboards/ConsultantDashboard.tsx";
import AdminDashboard from "./pages/dashboards/AdminDashboard.tsx";
import DashboardSelectorPage from "./pages/DashboardSelectorPage.tsx";
// Sub-dashboard imports
import HomeownerProperties from "./pages/dashboards/HomeownerProperties.tsx";
import HomeownerRenovations from "./pages/dashboards/HomeownerRenovations.tsx";
import HomeownerProviders from "./pages/dashboards/HomeownerProviders.tsx";
import HomeownerConsultations from "./pages/dashboards/HomeownerConsultations.tsx";
import HomeownerTracker from "./pages/dashboards/HomeownerTracker.tsx";
import HomeownerPropertyDetail from "./pages/dashboards/HomeownerPropertyDetail.tsx";
import ProviderServices from "./pages/dashboards/ProviderServices.tsx";
import ProviderBookings from "./pages/dashboards/ProviderBookings.tsx";
import ProviderRequests from "./pages/dashboards/ProviderRequests.tsx";
import ProviderAnalytics from "./pages/dashboards/ProviderAnalytics.tsx";
import ConsultantProperties from "./pages/dashboards/ConsultantProperties.tsx";
import ConsultantChat from "./pages/dashboards/ConsultantChat.tsx";
import ConsultantRecommendations from "./pages/dashboards/ConsultantRecommendations.tsx";
import AdminVerify from "./pages/dashboards/AdminVerify.tsx";
import AdminListings from "./pages/dashboards/AdminListings.tsx";
import AdminActivity from "./pages/dashboards/AdminActivity.tsx";
import AdminUsers from "./pages/dashboards/AdminUsers.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/renovation-ideas" element={<RenovationIdeasPage />} />
          <Route path="/service-providers" element={<ServiceProvidersPage />} />
          <Route path="/consultants" element={<ConsultantsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard" element={<DashboardSelectorPage />} />
          {/* Main Dashboards */}
          <Route path="/dashboard/homeowner" element={<HomeownerDashboard />} />
          <Route path="/dashboard/provider" element={<ProviderDashboard />} />
          <Route path="/dashboard/consultant" element={<ConsultantDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          {/* Homeowner Sub-dashboards */}
          <Route path="/dashboard/homeowner/properties" element={<HomeownerProperties />} />
          <Route path="/dashboard/homeowner/properties/:id" element={<HomeownerPropertyDetail />} />
          <Route path="/dashboard/homeowner/renovations" element={<HomeownerRenovations />} />
          <Route path="/dashboard/homeowner/providers" element={<HomeownerProviders />} />
          <Route path="/dashboard/homeowner/consultations" element={<HomeownerConsultations />} />
          <Route path="/dashboard/homeowner/tracker" element={<HomeownerTracker />} />
          {/* Provider Sub-dashboards */}
          <Route path="/dashboard/provider/services" element={<ProviderServices />} />
          <Route path="/dashboard/provider/bookings" element={<ProviderBookings />} />
          <Route path="/dashboard/provider/requests" element={<ProviderRequests />} />
          <Route path="/dashboard/provider/analytics" element={<ProviderAnalytics />} />
          {/* Consultant Sub-dashboards */}
          <Route path="/dashboard/consultant/properties" element={<ConsultantProperties />} />
          <Route path="/dashboard/consultant/chat" element={<ConsultantChat />} />
          <Route path="/dashboard/consultant/recommendations" element={<ConsultantRecommendations />} />
          {/* Admin Sub-dashboards */}
          <Route path="/dashboard/admin/verify" element={<AdminVerify />} />
          <Route path="/dashboard/admin/listings" element={<AdminListings />} />
          <Route path="/dashboard/admin/activity" element={<AdminActivity />} />
          <Route path="/dashboard/admin/users" element={<AdminUsers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
