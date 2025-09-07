import StarRating from './StarRating';

interface ReviewCardProps {
  name: string;
  car: string;
  date: string;
  rating: number;
  comment: string;
  className?: string;
}

export default function ReviewCard({ name, car, date, rating, comment, className = '' }: ReviewCardProps) {
  return (
    <div className={`border-b border-gray-700 pb-6 ${className}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="text-white font-semibold">{name}</div>
        <div className="text-gray-400">{car}</div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <StarRating rating={rating} size="sm" />
        <span className="text-gray-400 text-sm">{date}</span>
      </div>
      <p className="text-gray-300 leading-relaxed">{comment}</p>
    </div>
  );
}
