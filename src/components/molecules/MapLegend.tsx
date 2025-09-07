'use client';

import { MapPin, Clock, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function MapLegend() {
  return (
    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200">
      <div className="flex items-center gap-2 mb-3">
        <MapPin className="w-4 h-4 text-gray-600" />
        <h4 className="text-sm font-semibold text-gray-800">Chú thích</h4>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-md"></div>
            <MapPin className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div>
            <span className="text-xs font-medium text-gray-800">Mở cửa</span>
            <p className="text-xs text-gray-500">Gara đang hoạt động</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-5 h-5 bg-gray-500 rounded-full border-2 border-white shadow-md"></div>
            <MapPin className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div>
            <span className="text-xs font-medium text-gray-800">Đóng cửa</span>
            <p className="text-xs text-gray-500">Gara đã đóng cửa</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-5 h-5 bg-red-600 rounded-full border-2 border-white shadow-md scale-110"></div>
            <MapPin className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div>
            <span className="text-xs font-medium text-gray-800">Đã chọn</span>
            <p className="text-xs text-gray-500">Gara được chọn</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-200">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <Star className="w-3 h-3 text-yellow-500 fill-current" />
          <span>Đánh giá trung bình</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
          <Clock className="w-3 h-3 text-gray-500" />
          <span>Giờ mở cửa</span>
        </div>
      </div>
    </div>
  );
}
