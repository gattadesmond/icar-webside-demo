import { Button } from '@/components/ui/button';
import MapSection from './MapSection';

interface AboutSectionProps {
  garageName: string;
  aboutText: string;
  messageText: string;
  className?: string;
}

export default function AboutSection({ 
  garageName, 
  aboutText, 
  messageText, 
  className = '' 
}: AboutSectionProps) {
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Map Section */}
      <MapSection />

      {/* About Content */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Giới Thiệu {garageName}</h2>
        <p className="text-gray-300 leading-relaxed">
          {aboutText}
        </p>
      </div>

      {/* Message from Garage */}
      <div className="border-t border-gray-700 pt-8">
        <h2 className="text-2xl font-bold text-white mb-4">Thông Điệp Từ {garageName}</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          {messageText}
        </p>
        <div className="flex gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Gửi Tin Nhắn
          </Button>
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
            Truy Cập Website
          </Button>
        </div>
      </div>
    </div>
  );
}
