import { ChevronDown } from 'lucide-react';
import StarRating from './StarRating';
import ReviewCard from './ReviewCard';
import Pagination from './Pagination';

interface Review {
  id: number;
  name: string;
  car: string;
  date: string;
  rating: number;
  comment: string;
}

interface ReviewsSectionProps {
  garageName: string;
  rating: number;
  reviewCount: number;
  reviews: Review[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function ReviewsSection({ 
  garageName, 
  rating, 
  reviewCount, 
  reviews, 
  currentPage, 
  totalPages, 
  onPageChange,
  className = '' 
}: ReviewsSectionProps) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Đánh Giá và Xếp Hạng {garageName}</h2>
        <div className="flex items-center gap-4">
          <StarRating rating={Math.floor(rating)} showNumber={true} />
          <span className="text-gray-400">({reviewCount} đánh giá)</span>
          <div className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2">
            <span className="text-gray-300 text-sm">Sắp xếp: Mới nhất</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            car={review.car}
            date={review.date}
            rating={review.rating}
            comment={review.comment}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        className="mt-8"
      />
    </div>
  );
}
