import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const recommendations = [
  {
    name: "Sarah Johnson",
    role: "Senior Frontend Engineer • 95% match",
    avatar: "/avatars/01.png",
  },
  {
    name: "Michael Chen",
    role: "Full Stack Developer • 93% match",
    avatar: "/avatars/02.png",
  },
  {
    name: "Maya Patel",
    role: "DevOps Engineer • 89% match",
    avatar: "/avatars/03.png",
  },
  {
    name: "James Wilson",
    role: "Backend Developer • 87% match",
    avatar: "/avatars/04.png",
  },
];

interface RecentRecommendationsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function RecentRecommendations({
  className,
  ...props
}: RecentRecommendationsProps) {
  return (
    <Card className={cn("col-span-4", className)} {...props}>
      <CardHeader>
        <CardTitle>Recent Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {recommendations.map((recommendation) => (
            <div key={recommendation.name} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={recommendation.avatar} alt="Avatar" />
                <AvatarFallback>
                  {recommendation.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {recommendation.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {recommendation.role}
                </p>
              </div>
              <div className="ml-auto flex space-x-2">
                <Button variant="ghost" size="icon">
                  <span className="sr-only">View profile</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Add to shortlist</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
