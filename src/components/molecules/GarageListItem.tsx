import Image from 'next/image';
import { Star, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
    <Card className="w-full">
      <CardContent className="">
        {/* Garage Image */}
        <div className="relative mb-2">
          <div className="w-full h-38 bg-gray-100 rounded overflow-hidden">
            <Image
              src={garage.image}
              alt={garage.name}
              width={300}
              height={152}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Garage Info */}
        <div className="space-y-3">
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
              variant={garage.status === 'open' ? 'default' : 'destructive'}
              className="text-xs"
            >
              {garage.status === 'open' ? 'Mở cửa' : 'Đóng cửa'}
            </Badge>
            
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            
            <div className="flex items-center gap-1 text-sm text-neutral-300">
              <Clock className="w-4 h-4 text-neutral-400" />
              <span>{garage.openTime}</span>
            </div>
          </div>

          {/* Check Availability Button */}
          <Button className="w-full" size="lg">
            Kiểm tra lịch
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
