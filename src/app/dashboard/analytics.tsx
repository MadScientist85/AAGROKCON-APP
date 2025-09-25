import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Target } from 'lucide-react';

export default function Analytics() {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Pipeline Value</CardTitle>
          <DollarSign className="h-4 w-4" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">$48B</p>
          <p className="text-sm text-gray-500">Total govcon opportunities</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>High-Priority Opps</CardTitle>
          <Target className="h-4 w-4" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">12</p>
          <p className="text-sm text-gray-500">NAICS 561720, 8(a)</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Avg AI Score</CardTitle>
          <Target className="h-4 w-4" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">92%</p>
          <p className="text-sm text-gray-500">xAI opportunity ranking</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Win Probability</CardTitle>
          <Target className="h-4 w-4" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">85%</p>
          <p className="text-sm text-gray-500">Based on AI analysis</p>
        </CardContent>
      </Card>
    </div>
  );
}
