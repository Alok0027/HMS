import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart, LineChart, PieChart } from "lucide-react";

const Analytics = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="col-span-1 md:col-span-2">
        <CardHeader>
          <CardTitle>Patient Growth</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <div className="h-[300px]">
            <LineChart className="h-full w-full" />
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-1 md:col-span-2">
        <CardHeader>
          <CardTitle>Appointments per Month</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <div className="h-[300px]">
            <BarChart className="h-full w-full" />
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-1 md:col-span-2 lg:col-span-4">
        <CardHeader>
          <CardTitle>Services Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <PieChart className="h-full w-full" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
