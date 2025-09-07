import Image from 'next/image';
import { Star, MapPin, Clock, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Garage {
  id: number;
  name: string;
  rating: number;
  reviewCount: number;
  distance: string;
  address: string;
  city: string;
  state: string;
  status: 'open' | 'closed';
  openTime: string;
  image: string;
}

interface GarageListItemProps {
  garage: Garage;
  rank: number;
}

export default function GarageListItem({ garage, rank }: GarageListItemProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 text-neutral-300" />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-neutral-300" />
      );
    }

    return stars;
  };

  return (
    <Card className="w-full py-4">
      <CardContent className="px-4">
        {/* Garage Image - 16:9 Aspect Ratio */}
        <div className="relative mb-2">
          <div className="w-full aspect-video bg-gray-100 rounded overflow-hidden">
            <Image
              src={garage.image}
              alt={garage.name}
              width={400}
              height={225}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Garage Info */}
        <div className="space-y-3 mt-4">
          {/* Garage Name */}
          <h3 className="text-base font-bold leading-tight">
            {rank}. {garage.name}
          </h3>

          {/* Rating and Distance */}
          <div className="flex items-center gap-1">
            <span className="text-sm text-neutral-300 font-normal">{garage.rating}</span>
            <div className="flex items-center gap-0.5">
              {renderStars(garage.rating)}
            </div>
            <span className="text-sm text-neutral-300 font-normal">({garage.reviewCount})</span>

            <div className="w-1 h-1 bg-gray-400 rounded-full mx-2"></div>

            <span className="text-sm text-neutral-300 font-normal">{garage.distance}</span>
          </div>

          {/* Address */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-neutral-300">
              <MapPin className="w-4 h-4 text-neutral-400" />
              <span>{garage.address}</span>
            </div>
            <div className="text-sm text-neutral-300 ml-6">
              {garage.city}, {garage.state}
            </div>
          </div>

          {/* Status and Hours */}
          <div className="flex items-center gap-2">
            <Badge
              variant={"secondary"}
              className={cn('text-xs', garage.status === 'open' ? 'bg-blue-600 text-white ' : 'bg-neutral-500 text-white dark:bg-neutral-600')}
            >
              {garage.status === 'open' ? 'Open' : 'Closed'}
            </Badge>

            <div className="w-[1px] h-[1px] bg-gray-400 rounded-full"></div>

            <div className="flex items-center gap-1 text-sm text-neutral-300">
              <Clock className="w-4 h-4 text-neutral-400" />
              <span>{garage.openTime}</span>
            </div>
          </div>
          <div className="mt-6">
            {/* Action Buttons */}
            {garage.status === 'open' ? (
              <Button className="flex-1 w-full bg-red-800 hover:bg-red-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200" size="lg">
                Kiểm tra lịch
              </Button>

            ) : (
              <Button className="w-full bg-gray-500 text-white font-semibold" size="lg" disabled>
                Đã đóng cửa
              </Button>
            )}
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
