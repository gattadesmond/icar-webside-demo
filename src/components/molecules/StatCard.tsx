import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  className?: string;
}

export default function StatCard({ icon: Icon, value, label, className = '' }: StatCardProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="flex h-6 w-6 items-center justify-center text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-2xl font-medium">{value}</span>
        <p className="text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
