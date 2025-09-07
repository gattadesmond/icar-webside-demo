import { Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ScorecardCardProps {
  title: string;
  description: string;
  score: number;
  className?: string;
}

export default function ScorecardCard({ title, description, score, className = '' }: ScorecardCardProps) {
  return (
    <Card className={`bg-gray-800 border-gray-700 ${className}`}>
      <CardContent className="p-6">
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">
          {description}
        </p>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 text-blue-400">
            <Shield className="w-6 h-6" />
          </div>
          <span className="text-blue-400 font-semibold">{score} out of 100</span>
        </div>
      </CardContent>
    </Card>
  );
}
