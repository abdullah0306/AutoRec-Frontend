"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardShell } from "@/components/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle, Clock, Folder, MessageSquare, MoreHorizontal, Plus,
  Users, Briefcase, FileText, ClipboardList, Pencil, Mail, Shapes,
  Check, Search, MoreVertical, Edit, Trash, FilePlus, FileChartColumn,
  Copy, Link2, Database, BarChart, Activity, User, Settings, TrendingUp, RefreshCcw,
  Eye, EyeOff, Save, BookmarkIcon
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type EyeStatesType = {
  [key: number]: boolean;
};

export default function AISourcePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Overview");
  const [eyeStates, setEyeStates] = useState<EyeStatesType>({});

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Initialize eye states for all candidates
    const initialEyeStates:EyeStatesType = {};
    candidateRecommendations.forEach((_, index) => {
      initialEyeStates[index] = true; // true means eye is open
    });
    setEyeStates(initialEyeStates);
  }, []);

  const toggleEye = (index:any) => {
    setEyeStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const tabs = ["Overview", "Data Sources", "Recommendations", "Settings"];

  // Candidate recommendations data
  const candidateRecommendations = [
    {
      name: "Sarah Johnson",
      position: "Senior Frontend Developer",
      match: "84%",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      position: "Full Stack Engineer",
      match: "91%",
      avatar: "MC"
    },
    {
      name: "Priya Patel",
      position: "UX/UI Designer",
      match: "85%",
      avatar: "PP"
    },
    {
      name: "David Wilson",
      position: "DevOps Engineer",
      match: "87%",
      avatar: "DW"
    }
  ];

  // Data sources
  const dataSources = [
    {
      name: "LinkedIn",
      connected: true,
      profiles: "5,432",
      lastUpdated: "Updated 2 min ago"
    },
    {
      name: "GitHub",
      connected: true,
      profiles: "3,217",
      lastUpdated: "Updated 15 min ago"
    },
    {
      name: "Stack Overflow",
      connected: true,
      profiles: "2,843",
      lastUpdated: "Updated 1 hour ago"
    },
    {
      name: "Indeed",
      connected: true,
      profiles: "4,129",
      lastUpdated: "Updated 30 min ago"
    }
  ];

  // AI Sourcing preferences
  const [sourcingPreferences, setSourcingPreferences] = useState({
    skillsPriority: "JavaScript, React, Node.js, TypeScript, AWS",
    experienceLevel: "3-7 years",
    locationPreferences: "Remote, New York, San Francisco, London",
    additionalNotes: "Looking for candidates with experience in agile environments and strong communication skills."
  });

  return (
    <DashboardShell>
      <div className="mx-auto space-y-6 p-0 md:p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold tracking-tight">AI Sourcing System</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Automate candidate discovery with AI-powered data collection and real-time recommendations
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b">
          <div className="flex gap-4 overflow-x-auto">
            {tabs.map((tab) => (
              <div key={tab} className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-sm rounded-lg font-medium px-3 py-1 ${activeTab === tab ? 'text-blue-700' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </Button>
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Performance Metrics Card */}
          <Card className="rounded-3xl bg-[#1231AA0D] border-0">
            <CardHeader className="pb-2">
              <div className="flex flex-col items-start">
                <div className="h-10 w-10 rounded-full bg-[#1231AA0D] flex items-center justify-center mb-2">
                  <TrendingUp className="h-4 w-4 text-blue-600 mr-2" />
                </div>
                <CardTitle className="text-sm text-muted-foreground">PERFORMANCE</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-bold">Sourcing Metrics</h3>
              <p className="text-sm text-muted-foreground mt-2">
                AI has found 127 candidates matching your criteria this week, a 35% increase from last week.
              </p>
              <Button
                variant="default"
                size="sm"
                className="text-xs mt-4 rounded-3xl bg-blue-600 hover:bg-blue-700 text-white"
              >
                View Details
              </Button>
            </CardContent>
          </Card>

          {/* System Status Card */}
          <Card className="rounded-3xl bg-[#1231AA0D] border-0 ">
            <CardHeader className="pb-2">
              <div className="flex flex-col items-start">
                <div className="h-10 w-10 rounded-full bg-[#1231AA0D] flex items-center justify-center mb-2">
                  <RefreshCcw className="h-4 w-4 text-blue-600 mr-2" />
                </div>
                <CardTitle className="text-sm text-muted-foreground">STATUS</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-bold">System Status</h3>
              <p className="text-sm text-muted-foreground mt-2">
                All data sources are connected and system is running. Last sync: today at 10:23 AM
              </p>
              <Button
                variant="default"
                size="sm"
                className="text-xs mt-4 rounded-3xl bg-blue-600 hover:bg-blue-700 text-white"
              >
                Check Connections
              </Button>
            </CardContent>
          </Card>

          {/* Top Matches Card */}
          <Card className="rounded-3xl bg-[#1231AA0D] border-0">
            <CardHeader className="pb-2">
              <div className="flex flex-col items-start">
                <div className="h-10 w-10 rounded-full bg-[#1231AA0D] flex items-center justify-center mb-2">
                  <User className="h-4 w-4 text-blue-600 mr-2 items-center" />
                </div>
                <CardTitle className="text-sm text-muted-foreground">CANDIDATES</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-bold">Top Matches</h3>
              <p className="text-sm text-muted-foreground mt-2">
                15 high-quality candidates identified today that are based on your job requirements.
              </p>
              <div className="flex gap-2 mt-4">
                <Button
                  variant="default"
                  size="sm"
                  className="text-xs rounded-3xl bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Browse Candidates
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs rounded-3xl hover:bg-blue-700 hover:text-white"
                >
                  Adjust Criteria
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Data Sources */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Active Data Sources</h2>
          </div>
          <div className="space-y-3">
            {dataSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between py-3 bg-white rounded-lg shadow-sm px-4">
                <div className="flex items-center gap-3 w-1/4">
                  <div className=" flex items-center justify-center">
                    <Shapes className="h-4 w-4 text-[#000000] fill-black" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">{source.name}</h4>
                  </div>
                </div>
                <div className="text-sm text-center w-1/4">
                  {source.connected ? (
                    <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700">
                      Connected
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-red-50 border-red-200 text-red-700">
                      Disconnected
                    </Badge>
                  )}
                </div>
                <div className="text-sm text-muted-foreground w-1/4 text-center">{source.profiles} profiles</div>
                <div className="text-sm text-muted-foreground w-1/4 text-right">{source.lastUpdated}</div>
              </div>
            ))}
          </div>
          <div className="pt-2">
            <Button
              variant="default"
              size="default"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-3xl"
            >
              <Plus className="mr-2 h-4 w-4" /> Add New Data Source
            </Button>
          </div>
        </div>

        {/* Recent Recommendations */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Recent Recommendations</h2>
          </div>
          <div className="space-y-3">
            {candidateRecommendations.map((candidate, index) => (
              <div key={index} className="flex items-center justify-between py-3 bg-white rounded-lg shadow-sm px-4">
                <div className="flex items-center gap-3 w-1/2">
                  <Avatar className="h-10 w-10 bg-blue-100 text-blue-700">
                    <AvatarFallback>{candidate.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-sm font-medium">{candidate.name}</h4>
                    <p className="text-xs text-muted-foreground">{candidate.position}</p>
                    <p className="text-xs text-blue-600 font-medium mt-1">{candidate.match} match</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => toggleEye(index)}
                  >
                    {eyeStates[index] ? (
                      <Eye className="h-4 w-4" />
                    ) : (
                      <EyeOff className="h-4 w-4" />
                    )}
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <BookmarkIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-2">
            <Button
              variant="default"
              size="default"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-3xl"
            >
              View All Recommendations
            </Button>
          </div>
        </div>

        {/* AI Sourcing Preferences */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">AI Sourcing Preferences</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {/* Skills Priority */}
            <div className="px-4 py-3">
              <h4 className="text-sm font-medium mb-2">Skills Priority</h4>
              <div className="relative">
                <Input
                  type="text"
                  value={sourcingPreferences.skillsPriority}
                  onChange={(e) => setSourcingPreferences({ ...sourcingPreferences, skillsPriority: e.target.value })}
                  className="pr-8 rounded-3xl"
                />
                <Button variant="ghost" size="icon" className="h-8 w-8 absolute right-1 top-0">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Experience Level */}
            <div className=" px-4 py-3">
              <h4 className="text-sm font-medium mb-2">Experience Level</h4>
              <div className="relative">
                <Input
                  type="text"
                  value={sourcingPreferences.experienceLevel}
                  onChange={(e) => setSourcingPreferences({ ...sourcingPreferences, experienceLevel: e.target.value })}
                  className="pr-8 rounded-3xl"
                />
                <Button variant="ghost" size="icon" className="h-8 w-8 absolute right-1 top-0">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Location Preferences */}
            <div className="px-4 py-3">
              <h4 className="text-sm font-medium mb-2">Location Preferences</h4>
              <div className="relative">
                <Input
                  type="text"
                  value={sourcingPreferences.locationPreferences}
                  onChange={(e) => setSourcingPreferences({ ...sourcingPreferences, locationPreferences: e.target.value })}
                  className="pr-8 rounded-3xl"
                />
                <Button variant="ghost" size="icon" className="h-8 w-8 absolute right-1 top-0">
                  <Edit className="h-4 w-4 " />
                </Button>
              </div>
            </div>

            {/* Additional Notes as Textarea */}
            <div className="bg-white rounded-3xl shadow-sm px-4 py-3">
              <h4 className="text-sm font-medium mb-2">Additional Notes</h4>
              <Textarea
                value={sourcingPreferences.additionalNotes}
                onChange={(e) => setSourcingPreferences({ ...sourcingPreferences, additionalNotes: e.target.value })}
                className="min-h-20 rounded-3xl"
              />
            </div>
          </div>
          <div className="flex gap-2 pt-2">
            <Button
              variant="default"
              size="default"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-3xl"
            > Save Preferences
            </Button>
            <Button
              variant="outline"
              size="default"
              className="rounded-3xl hover:bg-blue-700 hover:text-white"
            >
              Reset to Default
            </Button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}