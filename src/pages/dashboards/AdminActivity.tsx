import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Users, Building2, MessageSquare, TrendingUp, AlertTriangle } from "lucide-react";

const recentActivity = [
  {
    id: 1,
    type: "user_registration",
    description: "New homeowner registered",
    user: "Amit Patel",
    time: "5 min ago",
    status: "success"
  },
  {
    id: 2,
    type: "provider_verification",
    description: "Service provider verified",
    user: "GreenHome Interiors",
    time: "15 min ago",
    status: "success"
  },
  {
    id: 3,
    type: "property_listing",
    description: "New property listed",
    user: "Rajesh Kumar",
    time: "1 hour ago",
    status: "pending"
  },
  {
    id: 4,
    type: "consultation_booked",
    description: "Consultation appointment booked",
    user: "Priya Sharma",
    time: "2 hours ago",
    status: "success"
  },
  {
    id: 5,
    type: "service_booking",
    description: "Service booking completed",
    user: "QuickFix Plumbing",
    time: "3 hours ago",
    status: "success"
  },
  {
    id: 6,
    type: "report_generated",
    description: "Property valuation report generated",
    user: "Dr. Anil Mehta",
    time: "4 hours ago",
    status: "success"
  },
];

const platformStats = {
  activeUsers: 1250,
  totalProperties: 450,
  activeProviders: 89,
  consultationsToday: 24,
  bookingsToday: 67,
  reportsGenerated: 156
};

const AdminActivity = () => {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-2xl font-bold">Platform Activity</h1>
          <p className="text-sm text-muted-foreground mt-1">Monitor real-time platform activity and performance</p>
        </div>

        {/* Platform Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{platformStats.activeUsers}</div>
              <p className="text-xs text-muted-foreground">+12% from yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{platformStats.totalProperties}</div>
              <p className="text-xs text-muted-foreground">+5 new today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Providers</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{platformStats.activeProviders}</div>
              <p className="text-xs text-muted-foreground">+3 verified today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Consultations Today</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{platformStats.consultationsToday}</div>
              <p className="text-xs text-muted-foreground">8 pending</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bookings Today</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{platformStats.bookingsToday}</div>
              <p className="text-xs text-muted-foreground">15 completed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reports Generated</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{platformStats.reportsGenerated}</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading">Recent Activity</CardTitle>
            <p className="text-sm text-muted-foreground">Latest platform events and user actions</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg border">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.status === "success" ? "bg-green-500" :
                    activity.status === "pending" ? "bg-yellow-500" :
                    "bg-red-500"
                  }`} />

                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">by {activity.user}</p>
                  </div>

                  <div className="text-right">
                    <Badge variant={
                      activity.type === "user_registration" ? "default" :
                      activity.type === "provider_verification" ? "secondary" :
                      activity.type === "property_listing" ? "outline" :
                      activity.type === "consultation_booked" ? "default" :
                      activity.type === "service_booking" ? "secondary" :
                      "outline"
                    } className="text-xs mb-1">
                      {activity.type.replace("_", " ")}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              System Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-yellow-800">High server load detected</p>
                  <p className="text-xs text-yellow-700">Response time increased by 15% in the last hour</p>
                </div>
                <Badge variant="outline" className="text-xs">Warning</Badge>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                <Activity className="h-4 w-4 text-green-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-green-800">Backup completed successfully</p>
                  <p className="text-xs text-green-700">Daily database backup finished at 2:00 AM</p>
                </div>
                <Badge variant="secondary" className="text-xs">Info</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminActivity;