import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface AIPreferencesProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AIPreferences({ className, ...props }: AIPreferencesProps) {
  return (
    <Card className={cn("col-span-3", className)} {...props}>
      <CardHeader>
        <CardTitle>AI Sourcing Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="role">Role Priority</Label>
          <Input
            id="role"
            defaultValue="JavaScript, React.js, TypeScript, AWS"
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="experience">Experience Level</Label>
          <Input
            id="experience"
            defaultValue="3-7 years"
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location Preferences</Label>
          <Input
            id="location"
            defaultValue="Remote, New York, San Francisco, London"
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="notes">Additional Notes</Label>
          <Input
            id="notes"
            defaultValue="Looking for candidates with experience in agile environments and strong communication skills"
            className="w-full"
          />
        </div>
        <Button className="w-full mt-4">Save Preferences</Button>
      </CardContent>
    </Card>
  );
}
