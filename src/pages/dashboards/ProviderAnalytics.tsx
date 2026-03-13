import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, IndianRupee, Star, Calendar } from "lucide-react";

const analytics = {
  overview: {
    totalBookings: 44,
    totalRevenue: 1250000,
    averageRating: 4.8,
    responseRate: 95
  },
  monthlyData: [
    { month: "Aug", bookings: 8, revenue: 240000 },
    { month: "Sep", bookings: 12, revenue: 320000 },
    { month: "Oct", bookings: 15, revenue: 410000 },
    { month: "Nov", bookings: 9, revenue: 280000 },
  ],
  topServices: [
    { name: "Interior Painting", bookings: 24, revenue: 650000 },
    { name: "Kitchen Renovation", bookings: 12, revenue: 420000 },
    { name: "Bathroom Remodeling", bookings: 8, revenue: 180000 },
  ],
  clientLocations: [
    { location: "Mumbai", percentage: 35 },
    { location: "Bangalore", percentage: 28 },
    { location: "Delhi", percentage: 20 },
    { location: "Pune", percentage: 17 },
  ]
};

const ProviderAnalytics = () => {
  return (
    <DashboardLayout role="provider">
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-2xl font-bold">Analytics</h1>
          <p className="text-sm text-muted-foreground mt-1">Track your business performance and insights</p>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.overview.totalBookings}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <IndianRupee className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{(analytics.overview.totalRevenue / 100000).toFixed(1)}L</div>
              <p className="text-xs text-muted-foreground">+18% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.overview.averageRating}</div>
              <p className="text-xs text-muted-foreground">Based on 44 reviews</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.overview.responseRate}%</div>
              <p className="text-xs text-muted-foreground">Within 2 hours</p>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Monthly Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.monthlyData.map((data) => (
                <div key={data.month} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 text-sm font-medium">{data.month}</div>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Bookings: {data.bookings}</span>
                        <span>Revenue: ₹{(data.revenue / 1000).toFixed(0)}K</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${(data.bookings / 15) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Services */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Top Performing Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.topServices.map((service, index) => (
                <div key={service.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{service.name}</p>
                      <p className="text-sm text-muted-foreground">{service.bookings} bookings</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹{(service.revenue / 100000).toFixed(1)}L</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Client Locations */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Client Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analytics.clientLocations.map((location) => (
                <div key={location.location} className="flex items-center justify-between">
                  <span className="font-medium">{location.location}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div
                        className="bg-accent h-2 rounded-full"
                        style={{ width: `${location.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground w-12">{location.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ProviderAnalytics;