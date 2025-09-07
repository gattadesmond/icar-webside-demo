import { MapPin } from 'lucide-react';

interface MapSectionProps {
  className?: string;
}

export default function MapSection({ className = '' }: MapSectionProps) {
  return (
    <div className={`bg-gray-800 rounded-lg p-6 ${className}`}>
      <div className="aspect-video bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-2" />
          <p className="text-gray-400">Interactive Map</p>
        </div>
      </div>
    </div>
  );
}
