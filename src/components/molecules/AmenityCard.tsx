import { Shield, Wrench, Calendar, Award } from 'lucide-react';

interface AmenityCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

const iconMap = {
  shield: Shield,
  wrench: Wrench,
  calendar: Calendar,
  award: Award,
};

export default function AmenityCard({ title, description, icon, className = '' }: AmenityCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Shield;

  return (
    <div className={`flex gap-4 ${className}`}>
      <div className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0">
        <IconComponent className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
