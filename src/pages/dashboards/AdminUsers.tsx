import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Search, ShieldCheck, UserX, Edit, MoreHorizontal } from "lucide-react";

const users = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh.kumar@email.com",
    role: "homeowner",
    status: "active",
    joined: "Jan 15, 2024",
    properties: 2,
    lastActive: "2 hours ago"
  },
  {
    id: 2,
    name: "GreenHome Interiors",
    email: "contact@greenhome.com",
    role: "provider",
    status: "verified",
    joined: "Dec 8, 2023",
    services: 3,
    lastActive: "1 day ago"
  },
  {
    id: 3,
    name: "Dr. Anil Mehta",
    email: "anil.mehta@consultant.com",
    role: "consultant",
    status: "verified",
    joined: "Nov 20, 2023",
    consultations: 45,
    lastActive: "30 min ago"
  },
  {
    id: 4,
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    role: "homeowner",
    status: "active",
    joined: "Feb 3, 2024",
    properties: 1,
    lastActive: "5 hours ago"
  },
  {
    id: 5,
    name: "QuickFix Plumbing",
    email: "info@quickfix.in",
    role: "provider",
    status: "pending",
    joined: "Mar 1, 2024",
    services: 2,
    lastActive: "Never"
  },
];

const AdminUsers = () => {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-2xl font-bold">Manage Users</h1>
          <p className="text-sm text-muted-foreground mt-1">Oversee all platform users and their accounts</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search users..." className="pl-10" />
          </div>
          <Select>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="homeowner">Homeowner</SelectItem>
              <SelectItem value="provider">Provider</SelectItem>
              <SelectItem value="consultant">Consultant</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="verified">Verified</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Users List */}
        <div className="grid gap-6">
          {users.map((user) => (
            <Card key={user.id} className="card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-heading font-bold text-primary">
                        {user.name.split(" ")[0][0]}{user.name.split(" ")[1]?.[0] || ""}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="font-heading">{user.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={
                      user.role === "homeowner" ? "default" :
                      user.role === "provider" ? "secondary" :
                      user.role === "consultant" ? "outline" :
                      "destructive"
                    }>
                      {user.role}
                    </Badge>
                    <Badge variant={
                      user.status === "verified" ? "default" :
                      user.status === "active" ? "secondary" :
                      user.status === "pending" ? "outline" :
                      "destructive"
                    }>
                      {user.status === "verified" && <ShieldCheck size={12} className="mr-1" />}
                      {user.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Joined</p>
                    <p className="font-medium">{user.joined}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Last Active</p>
                    <p className="font-medium">{user.lastActive}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      {user.role === "homeowner" ? "Properties" :
                       user.role === "provider" ? "Services" :
                       user.role === "consultant" ? "Consultations" : "Activity"}
                    </p>
                    <p className="font-medium">
                      {user.properties || user.services || user.consultations || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Actions</p>
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline">
                        <Edit size={12} />
                      </Button>
                      <Button size="sm" variant="outline">
                        <MoreHorizontal size={12} />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">View Profile</Button>
                  {user.status === "pending" && (
                    <Button size="sm" variant="default" className="flex-1">
                      <ShieldCheck size={14} className="mr-1" />
                      Verify
                    </Button>
                  )}
                  {user.status === "active" || user.status === "verified" ? (
                    <Button size="sm" variant="destructive" className="flex-1">
                      <UserX size={14} className="mr-1" />
                      Suspend
                    </Button>
                  ) : (
                    <Button size="sm" variant="secondary" className="flex-1">Activate</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {users.length === 0 && (
          <div className="text-center py-12">
            <Users size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">No users found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AdminUsers;