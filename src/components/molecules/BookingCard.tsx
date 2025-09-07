import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BookingCardProps {
  availableTime: string;
  onBookAppointment: () => void;
  onCheckAvailability: () => void;
  className?: string;
}

export default function BookingCard({ 
  availableTime, 
  onBookAppointment, 
  onCheckAvailability, 
  className = '' 
}: BookingCardProps) {
  return (
    <Card className={`bg-gray-800 border-gray-700 ${className}`}>
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <p className="text-gray-400 text-sm mb-2">Thời gian sớm nhất có thể:</p>
          <p className="text-white font-bold text-lg">{availableTime}</p>
        </div>
        <div className="space-y-3">
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={onBookAppointment}
          >
            Đặt Lịch Hẹn
          </Button>
          <Button 
            variant="outline" 
            className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
            onClick={onCheckAvailability}
          >
            Kiểm Tra Lịch Trống
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
