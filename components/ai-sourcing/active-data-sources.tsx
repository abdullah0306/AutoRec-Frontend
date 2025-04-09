import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sources = [
  {
    name: "GitHub",
    status: "Connected",
    profiles: "5,347",
    lastUpdate: "Updated 1 min ago",
  },
  {
    name: "Stack Overflow",
    status: "Connected",
    profiles: "3,217",
    lastUpdate: "Updated 15 min ago",
  },
  {
    name: "LinkedIn",
    status: "Connected",
    profiles: "4,129",
    lastUpdate: "Updated 30 min ago",
  },
];

export function ActiveDataSources() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Data Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Source</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Profiles</TableHead>
              <TableHead>Last Update</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sources.map((source) => (
              <TableRow key={source.name}>
                <TableCell className="font-medium">{source.name}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span>{source.status}</span>
                  </div>
                </TableCell>
                <TableCell>{source.profiles}</TableCell>
                <TableCell className="text-muted-foreground">
                  {source.lastUpdate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
