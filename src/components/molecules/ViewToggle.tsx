'use client';

import { useState } from 'react';
import { List, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ViewToggleProps {
  currentView: 'list' | 'map';
  onViewChange: (view: 'list' | 'map') => void;
  className?: string;
}

export default function ViewToggle({ currentView, onViewChange, className = '' }: ViewToggleProps) {
  return (
    <div className={`flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-white/20 ${className}`}>
      <Button
        variant={currentView === 'list' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewChange('list')}
        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${
          currentView === 'list'
            ? 'bg-red-600 text-white hover:bg-red-700 shadow-md'
            : 'text-gray-300 hover:text-white hover:bg-white/10'
        }`}
      >
        <List className="w-4 h-4" />
        <span className="hidden sm:inline">Danh sách</span>
      </Button>
      
      <Button
        variant={currentView === 'map' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onViewChange('map')}
        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${
          currentView === 'map'
            ? 'bg-red-600 text-white hover:bg-red-700 shadow-md'
            : 'text-gray-300 hover:text-white hover:bg-white/10'
        }`}
      >
        <MapPin className="w-4 h-4" />
        <span className="hidden sm:inline">Bản đồ</span>
      </Button>
    </div>
  );
}
