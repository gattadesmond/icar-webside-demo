'use client';

import { MapPin, Clock, Star } from 'lucide-react';

export default function MapLegend() {
  return (
    <div className="absolute top-4 left-4 bg-white/98 backdrop-blur-md rounded-xl p-5 shadow-2xl border border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-blue-600" />
        <h4 className="text-base font-bold text-gray-800">Chú thích</h4>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full border-3 border-white shadow-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold">1</div>
          </div>
          <div>
            <span className="text-sm font-semibold text-gray-800">Mở cửa</span>
            <p className="text-xs text-gray-600">Gara đang hoạt động</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full border-3 border-white shadow-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold">2</div>
          </div>
          <div>
            <span className="text-sm font-semibold text-gray-800">Đóng cửa</span>
            <p className="text-xs text-gray-600">Gara đã đóng cửa</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full border-3 border-white shadow-xl scale-110 ring-4 ring-red-200"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold">3</div>
          </div>
          <div>
            <span className="text-sm font-semibold text-gray-800">Đã chọn</span>
            <p className="text-xs text-gray-600">Gara được chọn</p>
          </div>
        </div>
      </div>
      
      <div className="mt-5 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="font-medium">Đánh giá trung bình</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
          <Clock className="w-4 h-4 text-blue-500" />
          <span className="font-medium">Giờ mở cửa</span>
        </div>
      </div>
    </div>
  );
}
