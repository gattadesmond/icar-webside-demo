import AmenityCard from './AmenityCard';

interface Amenity {
  title: string;
  description: string;
  icon: string;
}

interface AmenitiesSectionProps {
  garageName: string;
  amenities: Amenity[];
  className?: string;
}

export default function AmenitiesSection({ garageName, amenities, className = '' }: AmenitiesSectionProps) {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-white mb-6">Tiện Ích {garageName}</h2>
      <div className="space-y-6">
        {amenities.map((amenity, index) => (
          <AmenityCard
            key={index}
            title={amenity.title}
            description={amenity.description}
            icon={amenity.icon}
          />
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-700">
        <button className="text-blue-400 hover:text-blue-300 text-sm">
          Xem thêm tiện ích
        </button>
      </div>
    </div>
  );
}
