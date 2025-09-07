import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
  className?: string;
}

export default function StarRating({ 
  rating, 
  maxRating = 5, 
  size = 'md', 
  showNumber = false,
  className = '' 
}: StarRatingProps) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <Star
          key={i}
          className={`${sizeClasses[size]} ${
            i <= rating ? 'text-yellow-500 fill-current' : 'text-gray-400'
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex items-center gap-1">
        {renderStars()}
      </div>
      {showNumber && (
        <span className="text-white font-medium ml-1">{rating}</span>
      )}
    </div>
  );
}
