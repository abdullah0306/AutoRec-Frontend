import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function AISourceMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sourcing Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2,345</div>
          <p className="text-xs text-muted-foreground">
            Total candidates sourced
          </p>
          <Button variant="outline" className="mt-4 w-full">
            View Details
          </Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">Connected</div>
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            All data sources operational
          </p>
          <Button variant="outline" className="mt-4 w-full">
            Check Connection
          </Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Top Matches</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">98%</div>
          <p className="text-xs text-muted-foreground">
            Match accuracy rate
          </p>
          <Progress value={98} className="mt-2" />
        </CardContent>
      </Card>
    </div>
  );
}
