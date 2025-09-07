'use client';

import { useState, useEffect } from 'react';
import { MapPin, Star, Clock, Phone, Navigation } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import MapLegend from '@/components/molecules/MapLegend';

interface Garage {
  id: number;
  name: string;
  rating: number;
  reviewCount: number;
  distance: string;
  address: string;
  city: string;
  state: string;
  status: 'open' | 'closed';
  openTime: string;
  image: string;
  lat?: number;
  lng?: number;
}

interface GarageMapProps {
  garages: Garage[];
  selectedGarage?: Garage | null;
  onGarageSelect: (garage: Garage) => void;
  className?: string;
}

// Mock coordinates for garages (in real app, these would come from API)
const mockCoordinates = [
  { lat: 10.7769, lng: 106.7009 }, // Ho Chi Minh City area
  { lat: 10.7875, lng: 106.7051 },
  { lat: 10.7626, lng: 106.6602 },
  { lat: 10.7984, lng: 106.6851 },
  { lat: 10.7503, lng: 106.6667 },
  { lat: 10.8231, lng: 106.6297 },
];

export default function GarageMap({ garages, selectedGarage, onGarageSelect, className = '' }: GarageMapProps) {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Add coordinates to garages
  const garagesWithCoords = garages.map((garage, index) => ({
    ...garage,
    lat: mockCoordinates[index]?.lat || 10.7769,
    lng: mockCoordinates[index]?.lng || 106.7009,
  }));

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => setMapLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative w-full h-full min-h-[600px] bg-gray-100 rounded-lg overflow-hidden ${className}`}>
      {/* Map Placeholder - In real app, this would be Google Maps or Mapbox */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100">
        {/* Grid pattern to simulate map */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
        
        {/* Streets simulation */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 right-0 h-1 bg-gray-400 opacity-30" />
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-400 opacity-30" />
          <div className="absolute top-3/4 left-0 right-0 h-1 bg-gray-400 opacity-30" />
          <div className="absolute left-1/4 top-0 bottom-0 w-1 bg-gray-400 opacity-30" />
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-400 opacity-30" />
          <div className="absolute left-3/4 top-0 bottom-0 w-1 bg-gray-400 opacity-30" />
        </div>

        {/* Garage Markers */}
        {garagesWithCoords.map((garage, index) => {
          const position = {
            top: `${20 + (index * 15) % 60}%`,
            left: `${15 + (index * 20) % 70}%`,
          };

          return (
            <div
              key={garage.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={position}
              onClick={() => onGarageSelect(garage)}
            >
              {/* Marker */}
              <div className={`relative w-8 h-8 rounded-full border-2 border-white shadow-lg transition-all duration-200 ${
                selectedGarage?.id === garage.id 
                  ? 'bg-red-600 scale-125' 
                  : garage.status === 'open' 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : 'bg-gray-500 hover:bg-gray-600'
              }`}>
                <MapPin className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <Card className="w-48 p-2 shadow-lg">
                  <CardContent className="p-0">
                    <div className="space-y-1">
                      <h4 className="font-semibold text-sm truncate">{garage.name}</h4>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span className="text-xs text-gray-600">{garage.rating} ({garage.reviewCount})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-500" />
                        <span className="text-xs text-gray-600">{garage.openTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          );
        })}

        {/* Loading overlay */}
        {!mapLoaded && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto mb-2"></div>
              <p className="text-sm text-gray-600">Đang tải bản đồ...</p>
            </div>
          </div>
        )}
      </div>

      {/* Map Legend */}
      <MapLegend />

      {/* Map Controls */}
      <div className="absolute top-4 right-4 space-y-2">
        <Button
          variant="outline"
          size="sm"
          className="bg-white/90 backdrop-blur-sm hover:bg-white"
        >
          <Navigation className="w-4 h-4" />
        </Button>
      </div>

      {/* Selected Garage Info Panel */}
      {selectedGarage && (
        <div className="absolute bottom-4 left-4 right-4">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{selectedGarage.name}</h3>
                    <Badge variant={selectedGarage.status === 'open' ? 'default' : 'secondary'}>
                      {selectedGarage.status === 'open' ? 'Mở cửa' : 'Đóng cửa'}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{selectedGarage.rating}</span>
                    <span className="text-sm text-gray-600">({selectedGarage.reviewCount} đánh giá)</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-2">{selectedGarage.address}</p>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{selectedGarage.openTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 ml-4">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    <Phone className="w-4 h-4 mr-1" />
                    Gọi
                  </Button>
                  <Button variant="outline" size="sm">
                    Chi tiết
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
