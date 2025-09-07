'use client';

import { useState } from 'react';
import { ChevronDown, Calendar, Tag, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function RepairPalSearchBox() {
  const [activeFilters, setActiveFilters] = useState(['availability']);

  const filterButtons = [
    {
      id: 'availability',
      label: 'Có sẵn',
      icon: <Calendar className="w-4 h-4" />,
      active: activeFilters.includes('availability')
    },
    {
      id: 'offers',
      label: 'Ưu đãi',
      icon: <Tag className="w-4 h-4" />,
      active: activeFilters.includes('offers')
    },
    {
      id: 'express',
      label: 'Sửa nhanh',
      icon: <Zap className="w-4 h-4" />,
      active: activeFilters.includes('express')
    },
    {
      id: 'warranty',
      label: 'Bảo hành',
      icon: <Shield className="w-4 h-4" />,
      active: activeFilters.includes('warranty')
    }
  ];

  const handleFilterToggle = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3">
        {filterButtons.map((button) => (
          <Button
            key={button.id}
            variant={button.active ? "default" : "outline"}
            onClick={() => handleFilterToggle(button.id)}
            className={`flex border-white/90 bg-transparent hover:bg-transparent border items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              button.active
                ? 'bg-white/10  text-white  shadow-md'
                : ' text-gray-300 border-gray-600 hover:bg-white/10 '
            }`}
          >
            {button.icon}
            {button.label}
          </Button>
        ))}
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-400 hidden sm:block">Sắp xếp theo:</span>
        <Select defaultValue="recommended">
          <SelectTrigger className="w-40 bg-white/10 border-gray-600 text-white hover:bg-white/20 transition-colors">
            <SelectValue />
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </SelectTrigger>
          <SelectContent className="bg-gray-900 border-gray-700">
            <SelectItem value="recommended" className="text-white hover:bg-gray-800">Được đề xuất</SelectItem>
            <SelectItem value="distance" className="text-white hover:bg-gray-800">Khoảng cách</SelectItem>
            <SelectItem value="rating" className="text-white hover:bg-gray-800">Đánh giá</SelectItem>
            <SelectItem value="price" className="text-white hover:bg-gray-800">Giá cả</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
