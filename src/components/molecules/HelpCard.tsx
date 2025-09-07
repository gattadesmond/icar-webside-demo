import { Card, CardContent } from '@/components/ui/card';

interface HelpCardProps {
  title: string;
  description: string;
  className?: string;
}

export default function HelpCard({ title, description, className = '' }: HelpCardProps) {
  return (
    <Card className={`bg-gray-800 border-gray-700 ${className}`}>
      <CardContent className="p-6">
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
