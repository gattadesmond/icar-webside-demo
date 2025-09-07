'use client';

import { useState, useEffect } from 'react';
import { Star, Clock, Phone, Navigation } from 'lucide-react';
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
    <div className={`relative w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl overflow-hidden shadow-lg border border-gray-200 ${className}`}>
      {/* Google Maps Demo - Embedded iframe */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3251233643167!2d106.7009!3d10.7769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b90b68bd3%3A0x4b0b3d7c8b8b8b8b!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        />
        
        {/* Overlay for custom markers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Custom markers overlay */}
          <div className="absolute inset-0">
            {/* Garage Markers */}
            {garagesWithCoords.map((garage, index) => {
              const position = {
                top: `${20 + (index * 15) % 60}%`,
                left: `${15 + (index * 20) % 70}%`,
              };

              return (
                <div
                  key={garage.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group pointer-events-auto"
                  style={position}
                  onClick={() => onGarageSelect(garage)}
                >
                  {/* Marker */}
                  <div className={`relative w-10 h-10 rounded-full border-3 border-white shadow-xl transition-all duration-300 hover:scale-110 ${
                    selectedGarage?.id === garage.id 
                      ? 'bg-gradient-to-br from-red-500 to-red-600 scale-125 shadow-2xl ring-4 ring-red-200' 
                      : garage.status === 'open' 
                        ? 'bg-gradient-to-br from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700' 
                        : 'bg-gradient-to-br from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600'
                  }`}>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <Card className="w-56 p-3 shadow-2xl border border-gray-200 bg-white/95 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-sm text-gray-800 truncate">{garage.name}</h4>
                            <Badge 
                              variant={garage.status === 'open' ? 'default' : 'secondary'}
                              className={`text-xs ${garage.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}
                            >
                              {garage.status === 'open' ? 'Mở' : 'Đóng'}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span className="text-xs text-gray-700 font-medium">{garage.rating}</span>
                            <span className="text-xs text-gray-500">({garage.reviewCount} đánh giá)</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-blue-500" />
                            <span className="text-xs text-gray-600">{garage.openTime}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Loading overlay */}
        {!mapLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-600 mx-auto mb-4"></div>
              <p className="text-sm text-gray-700 font-medium">Đang tải bản đồ...</p>
              <p className="text-xs text-gray-500 mt-1">Vui lòng chờ trong giây lát</p>
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
          className="bg-white/95 backdrop-blur-sm hover:bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <Navigation className="w-4 h-4 text-gray-700" />
        </Button>
      </div>

      {/* Selected Garage Info Panel */}
      {selectedGarage && (
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <Card className="bg-white/98 backdrop-blur-md shadow-2xl border border-gray-200 rounded-xl overflow-hidden">
            <CardContent className="">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-bold text-xl text-gray-800">{selectedGarage.name}</h3>
                    <Badge 
                      variant={selectedGarage.status === 'open' ? 'default' : 'secondary'}
                      className={`px-3 py-1 text-sm font-medium ${
                        selectedGarage.status === 'open' 
                          ? 'bg-green-100 text-green-800 border-green-200' 
                          : 'bg-gray-100 text-gray-600 border-gray-200'
                      }`}
                    >
                      {selectedGarage.status === 'open' ? 'Mở cửa' : 'Đóng cửa'}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold text-gray-800">{selectedGarage.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({selectedGarage.reviewCount} đánh giá)</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{selectedGarage.distance}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{selectedGarage.address}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="font-medium">{selectedGarage.openTime}</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 ml-6">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Gọi điện
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
                  >
                    Xem chi tiết
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
