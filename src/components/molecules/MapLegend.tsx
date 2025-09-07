'use client';

import { MapPin, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function MapLegend() {
  return (
    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
      <h4 className="text-sm font-semibold mb-2 text-gray-800">Chú thích</h4>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
          <span className="text-xs text-gray-700">Mở cửa</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-500 rounded-full border-2 border-white shadow-sm"></div>
          <span className="text-xs text-gray-700">Đóng cửa</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-sm scale-125"></div>
          <span className="text-xs text-gray-700">Đã chọn</span>
        </div>
      </div>
    </div>
  );
}
