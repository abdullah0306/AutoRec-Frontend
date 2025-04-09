'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AISourceMetrics } from '@/components/ai-sourcing/metrics';
import { ActiveDataSources } from '@/components/ai-sourcing/active-data-sources';
import { RecentRecommendations } from '@/components/ai-sourcing/recent-recommendations';
import { AIPreferences } from '@/components/ai-sourcing/ai-preferences';

export default function AISourcePage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">AI Sourcing System</h2>
      </div>
      <p className="text-muted-foreground">
        Automate candidate discovery with AI-powered data collection and real-time recommendations
      </p>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="data-sources">Data Sources</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <AISourceMetrics />
          <ActiveDataSources />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <RecentRecommendations className="col-span-4" />
            <AIPreferences className="col-span-3" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
