import StatCard from '@/components/molecules/StatCard';
import { stats } from '@/constants/stats';

interface StatsSectionProps {
  className?: string;
}

export default function StatsSection({ className = '' }: StatsSectionProps) {
  return (
    <section className={`relative isolate mx-auto min-h-fit w-full max-w-screen-xl px-5 py-10 md:px-20 md:py-0 ${className}`}>
      <div className="grid grid-cols-2 gap-x-12 gap-y-16 md:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}
