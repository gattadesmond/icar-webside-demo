import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center gap-2 text-sm ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
          {item.href && !item.isActive ? (
            <a
              href={item.href}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ) : (
            <span className={item.isActive ? 'text-gray-300' : 'text-gray-400'}>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
