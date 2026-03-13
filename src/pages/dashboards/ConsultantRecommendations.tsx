import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Building2, CheckCircle, Clock, Eye, Download } from "lucide-react";

const recommendations = [
  {
    id: 1,
    property: "3BHK Villa, Pune",
    client: "Rajesh Kumar",
    type: "Renovation Plan",
    status: "Draft",
    created: "2 days ago",
    priority: "High",
    summary: "Comprehensive renovation plan focusing on kitchen and bathrooms"
  },
  {
    id: 2,
    property: "2BHK Apartment, Bangalore",
    client: "Priya Sharma",
    type: "Value Enhancement",
    status: "Completed",
    created: "1 week ago",
    priority: "Medium",
    summary: "Recommendations to increase property value by 15-20%"
  },
  {
    id: 3,
    property: "4BHK Duplex, Hyderabad",
    client: "Amit Patel",
    type: "Structural Assessment",
    status: "In Review",
    created: "3 days ago",
    priority: "High",
    summary: "Detailed structural evaluation and improvement suggestions"
  },
  {
    id: 4,
    property: "Commercial Space, Delhi",
    client: "Sneha Iyer",
    type: "Commercial Valuation",
    status: "Completed",
    created: "5 days ago",
    priority: "Low",
    summary: "Market analysis and valuation report for commercial property"
  },
];

const ConsultantRecommendations = () => {
  return (
    <DashboardLayout role="consultant">
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-2xl font-bold">My Recommendations</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage and track your property consultation reports</p>
        </div>

        <div className="grid gap-6">
          {recommendations.map((rec) => (
            <Card key={rec.id} className="card-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-heading">{rec.type}</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant={
                      rec.priority === "High" ? "destructive" :
                      rec.priority === "Medium" ? "default" :
                      "secondary"
                    }>
                      {rec.priority}
                    </Badge>
                    <Badge variant={
                      rec.status === "Completed" ? "secondary" :
                      rec.status === "In Review" ? "default" :
                      "outline"
                    }>
                      {rec.status === "Completed" && <CheckCircle size={12} className="mr-1" />}
                      {rec.status === "In Review" && <Clock size={12} className="mr-1" />}
                      {rec.status === "Draft" && <FileText size={12} className="mr-1" />}
                      {rec.status}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{rec.property}</p>
                <p className="text-sm text-muted-foreground">Client: {rec.client}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">{rec.summary}</p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Created {rec.created}</span>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Building2 size={14} />
                    Property Report
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye size={14} className="mr-1" />
                    View
                  </Button>
                  {rec.status === "Draft" && (
                    <Button size="sm" variant="accent" className="flex-1">Edit</Button>
                  )}
                  {rec.status === "In Review" && (
                    <Button size="sm" variant="accent" className="flex-1">Review</Button>
                  )}
                  {rec.status === "Completed" && (
                    <>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Download size={14} className="mr-1" />
                        Download
                      </Button>
                      <Button size="sm" variant="accent" className="flex-1">Share</Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {recommendations.length === 0 && (
          <div className="text-center py-12">
            <FileText size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">No recommendations yet</h3>
            <p className="text-muted-foreground">Your consultation reports and recommendations will appear here.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ConsultantRecommendations;