'use client';

import { useState } from 'react';
import { MapPin, Wrench, Car, ChevronDown, Calendar, Tag, Bus, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


export default function RepairPalSearchBox() {


  const filterButtons = [
    {
      label: 'Availability',
      icon: <Calendar className="w-4 h-4" />,
      active: true
    },
    {
      label: 'Active Offers',
      icon: <Tag className="w-4 h-4" />,
      active: false
    },
    {
      label: 'Shuttle',
      icon: <Bus className="w-4 h-4" />,
      active: false
    },
    {
      label: 'Early Dropoff',
      icon: <Sun className="w-4 h-4" />,
      active: false
    }
  ];

  return (
    <div className=" py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    

        {/* Results Summary */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex flex-wrap gap-3 mb-8">
            {filterButtons.map((button, index) => (
              <Button
                key={index}
                variant={button.active ? "default" : "outline"}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${button.active
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-600 hover:text-blue-600'
                  }`}
              >
                {button.icon}
                {button.label}
              </Button>
            ))}
          </div>


          <div className="flex items-center gap-2">
            <Select defaultValue="recommended">
              <SelectTrigger className="w-40 bg-white border-gray-300 text-gray-900">
                <SelectValue />
                <ChevronDown className="w-4 h-4 text-blue-600" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="distance">Distance</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="price">Price</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
