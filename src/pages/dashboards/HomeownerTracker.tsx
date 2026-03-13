import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, IndianRupee, BarChart3, Calendar } from "lucide-react";

const properties = [
  {
    id: 1,
    name: "2BHK Apartment, Mumbai",
    currentValue: 8500000,
    previousValue: 7800000,
    growth: 12,
    score: 72,
    lastUpdated: "Dec 1, 2024"
  },
  {
    id: 2,
    name: "3BHK Flat, Bangalore",
    currentValue: 12000000,
    previousValue: 11000000,
    growth: 8,
    score: 58,
    lastUpdated: "Nov 28, 2024"
  },
];

const marketTrends = [
  { area: "Mumbai", growth: "+15%", trend: "up" },
  { area: "Bangalore", growth: "+12%", trend: "up" },
  { area: "Delhi", growth: "+8%", trend: "up" },
  { area: "Pune", growth: "+10%", trend: "up" },
];

const HomeownerTracker = () => {
  return (
    <DashboardLayout role="homeowner">
      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-2xl font-bold">Property Value Tracker</h1>
          <p className="text-sm text-muted-foreground mt-1">Monitor your property values and market trends</p>
        </div>

        {/* Property Values */}
        <div className="grid gap-6 md:grid-cols-2">
          {properties.map((property) => (
            <Card key={property.id} className="card-hover">
              <CardHeader>
                <CardTitle className="font-heading">{property.name}</CardTitle>
                <p className="text-sm text-muted-foreground">Last updated: {property.lastUpdated}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold font-heading flex items-center gap-1">
                      <IndianRupee size={20} />
                      {(property.currentValue / 100000).toFixed(1)}L
                    </p>
                    <div className={`flex items-center gap-1 text-sm ${
                      property.growth > 0 ? "text-green-600" : "text-red-600"
                    }`}>
                      {property.growth > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                      {property.growth > 0 ? "+" : ""}{property.growth}% this month
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Property Score</p>
                    <p className="text-2xl font-bold">{property.score}/100</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>Improvement Progress</span>
                    <span>{property.score}%</span>
                  </div>
                  <Progress value={property.score} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading flex items-center gap-2">
              <BarChart3 size={20} />
              Market Trends
            </CardTitle>
            <p className="text-sm text-muted-foreground">Real estate growth in major cities</p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {marketTrends.map((trend) => (
                <div key={trend.area} className="text-center p-4 rounded-lg bg-muted/50">
                  <h4 className="font-heading font-semibold">{trend.area}</h4>
                  <div className={`flex items-center justify-center gap-1 mt-2 ${
                    trend.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}>
                    <TrendingUp size={16} />
                    <span className="font-medium">{trend.growth}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Annual growth</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="font-heading flex items-center gap-2">
              <Calendar size={20} />
              Value Improvement Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/10">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <div>
                  <p className="font-medium">Kitchen Renovation</p>
                  <p className="text-sm text-muted-foreground">Can increase property value by 8-12%</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/10">
                <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                <div>
                  <p className="font-medium">Smart Home Features</p>
                  <p className="text-sm text-muted-foreground">Modern upgrades appeal to tech-savvy buyers</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/10">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <p className="font-medium">Energy Efficiency</p>
                  <p className="text-sm text-muted-foreground">Solar panels and insulation can boost value significantly</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default HomeownerTracker;