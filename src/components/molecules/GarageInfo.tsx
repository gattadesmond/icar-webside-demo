import { ExternalLink } from 'lucide-react';
import StarRating from './StarRating';

interface GarageInfoProps {
  name: string;
  rating: number;
  reviewCount: number;
  description: string;
  address: string;
  city: string;
  state: string;
  status: 'open' | 'closed';
  openTime: string;
  phone: string;
  website: string;
  className?: string;
}

export default function GarageInfo({
  name,
  rating,
  reviewCount,
  description,
  address,
  city,
  state,
  status,
  openTime,
  phone,
  website,
  className = ''
}: GarageInfoProps) {
  return (
    <div className={`border-b border-gray-700 pb-6 ${className}`}>
      <div className="flex items-center gap-4 mb-4">
        <StarRating rating={Math.floor(rating)} showNumber={true} />
        <span className="text-gray-400">·</span>
        <span className="text-gray-400">{reviewCount} đánh giá</span>
      </div>

      <h1 className="text-3xl font-bold text-white mb-4">{name}</h1>
      <p className="text-gray-300 text-lg mb-6">{description}</p>

      <div className="space-y-3">
        <div className="text-white font-semibold">{address}</div>
        <div className="text-gray-300">{city}, {state}</div>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-blue-400 hover:text-blue-300 cursor-pointer">Chỉ Đường</span>
          <span className="text-gray-500">|</span>
          <span className="text-blue-400 hover:text-blue-300 cursor-pointer">Xem Đường Phố</span>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <div className="flex items-center gap-2">
          <span className={`text-sm font-semibold ${status === 'open' ? 'text-green-400' : 'text-gray-400'}`}>
            {status === 'open' ? 'Mở cửa' : 'Đóng cửa'} · {openTime}
          </span>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-gray-300 font-semibold">{phone}</div>
      </div>

      <div className="mt-2">
        <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
          {website}
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
