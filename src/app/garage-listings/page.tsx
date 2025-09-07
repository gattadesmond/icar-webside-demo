'use client';

import { useState } from 'react';
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import GarageListItem from "@/components/molecules/GarageListItem";
import RepairPalSearchBox from "@/components/organisms/RepairPalSearchBox";
import SearchBox from '@/components/molecules/SearchBox';
import Container from '@/components/atoms/Container';
import ViewToggle from '@/components/molecules/ViewToggle';
import GarageMap from '@/components/organisms/GarageMap';
import Image from 'next/image';
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
}

const mockGarages: Garage[] = [
  {
    id: 1,
    name: 'Gara Ô Tô Minh Tâm',
    rating: 4.8,
    reviewCount: 156,
    distance: '2.3 km',
    address: '123 Đường Lê Văn Việt',
    city: 'Quận 9',
    state: 'TP.HCM',
    status: 'open',
    openTime: 'Mở cửa 7:00 ',
    image: 'https://garageoto.vn/wp-content/uploads/garageoto-image-stores/gara-o-to-zestech-viet-map-847-9.jpg',
  },
  {
    id: 2,
    name: 'Trung Tâm Sửa Chữa Xe Hơi Đức Thành',
    rating: 4.6,
    reviewCount: 89,
    distance: '4.7 km',
    address: '456 Đường Nguyễn Thị Minh Khai',
    city: 'Quận 1',
    state: 'TP.HCM',
    status: 'open',
    openTime: 'Mở cửa 6:30 ',
    image: 'https://garageoto.vn/wp-content/uploads/garageoto-image-stores/gara-o-to-auto365-an-giang-848-14.jpg',
  },
  {
    id: 3,
    name: 'Gara Sửa Xe Cao Cấp Phú Mỹ',
    rating: 4.9,
    reviewCount: 234,
    distance: '1.8 km',
    address: '789 Đường Võ Văn Tần',
    city: 'Quận 3',
    state: 'TP.HCM',
    status: 'closed',
    openTime: 'Mở cửa 8:00 ',
    image: 'https://garageoto.vn/wp-content/uploads/garageoto-default/garaoto-lon.jpg',
  },
  {
    id: 4,
    name: 'Xưởng Sửa Chữa Ô Tô Thành Đạt',
    rating: 4.5,
    reviewCount: 67,
    distance: '3.2 km',
    address: '321 Đường Cách Mạng Tháng 8',
    city: 'Quận 10',
    state: 'TP.HCM',
    status: 'open',
    openTime: 'Mở cửa 7:30 ',
    image: 'https://garageoto.vn/wp-content/uploads/garageoto-image-stores/gara-o-to-hyundai-1992-11.jpg',
  },
  {
    id: 5,
    name: 'Gara Bảo Dưỡng Xe Hơi An Phú',
    rating: 4.7,
    reviewCount: 178,
    distance: '5.1 km',
    address: '654 Đường Lê Đức Thọ',
    city: 'Quận Gò Vấp',
    state: 'TP.HCM',
    status: 'open',
    openTime: 'Mở cửa 6:00 ',
    image: 'https://garageoto.vn/wp-content/uploads/garageoto-default/garaoto-lon.jpg',
  },
  {
    id: 6,
    name: 'Trung Tâm Dịch Vụ Ô Tô Hùng Vương',
    rating: 4.4,
    reviewCount: 92,
    distance: '6.8 km',
    address: '987 Đường Hùng Vương',
    city: 'Quận 5',
    state: 'TP.HCM',
    status: 'closed',
    openTime: 'Mở cửa 8:30 ',
    image: 'https://garageoto.vn/wp-content/uploads/garageoto-default/garaoto-lon.jpg',
  },
  {
    id: 7,
    name: 'Gara Sửa Xe Chuyên Nghiệp Tân Bình',
    rating: 4.8,
    reviewCount: 145,
    distance: '4.2 km',
    address: '147 Đường Cộng Hòa',
    city: 'Quận Tân Bình',
    state: 'TP.HCM',
    status: 'open',
    openTime: 'Mở cửa 7:15 ',
    image: 'https://garageoto.vn/wp-content/uploads/garageoto-image-stores/gara-o-to-van-ben-2813-2.jpg',
  },
  {
    id: 8,
    name: 'Xưởng Ô Tô Đại Lộc',
    rating: 4.6,
    reviewCount: 203,
    distance: '3.7 km',
    address: '258 Đường Trường Chinh',
    city: 'Quận 12',
    state: 'TP.HCM',
    status: 'open',
    openTime: 'Mở cửa 6:45 ',
    image: 'https://garageoto.vn/wp-content/uploads/garageoto-default/garaoto-lon.jpg',
  },
  {
    id: 9,
    name: 'Gara Bảo Dưỡng Xe Hơi Minh Khang',
    rating: 4.9,
    reviewCount: 167,
    distance: '2.9 km',
    address: '369 Đường Lý Thường Kiệt',
    city: 'Quận 11',
    state: 'TP.HCM',
    status: 'closed',
    openTime: 'Mở cửa 8:15 ',
    image: 'https://garageoto.vn/wp-content/uploads/garageoto-image-stores/gara-o-to-zestech-viet-map-847-9.jpg',
  },
  {
    id: 10,
    name: 'Trung Tâm Sửa Chữa Ô Tô Thành Công',
    rating: 4.5,
    reviewCount: 134,
    distance: '5.6 km',
    address: '741 Đường Nguyễn Văn Cừ',
    city: 'Quận 5',
    state: 'TP.HCM',
    status: 'open',
    openTime: 'Mở cửa 7:45 ',
    image: 'https://garageoto.vn/wp-content/uploads/garageoto-image-stores/gara-o-to-auto365-an-giang-848-14.jpg',
  },
  {
    id: 11,
    name: 'Gara Ô Tô Phú Thọ',
    rating: 4.7,
    reviewCount: 98,
    distance: '4.1 km',
    address: '852 Đường Phú Thọ',
    city: 'Quận 11',
    state: 'TP.HCM',
    status: 'open',
    openTime: 'Mở cửa 6:30 ',
    image: 'https://garageoto.vn/wp-content/uploads/garageoto-default/garaoto-lon.jpg',
  },
  {
    id: 12,
    name: 'Xưởng Sửa Xe Hơi Đông Á',
    rating: 4.3,
    reviewCount: 76,
    distance: '7.2 km',
    address: '963 Đường Đông Á',
    city: 'Quận 7',
    state: 'TP.HCM',
    status: 'closed',
    openTime: 'Mở cửa 9:00 ',
    image: 'https://garageoto.vn/wp-content/uploads/garageoto-image-stores/gara-o-to-chau-hen-2809-1.jpg',
  },
];

export default function GarageListingsPage() {
  const [currentView, setCurrentView] = useState<'list' | 'map'>('list');
  const [selectedGarage, setSelectedGarage] = useState<Garage | null>(null);

  const handleViewChange = (view: 'list' | 'map') => {
    setCurrentView(view);
    if (view === 'list') {
      setSelectedGarage(null);
    }
  };

  const handleGarageSelect = (garage: Garage) => {
    setSelectedGarage(garage);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header  />

      {/* Main Content */}
      <main className="bg-black">
        <div className="relative pt-20 pb-10">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/sua-oto.webp"
              alt="Modern garage with advanced technology"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/90" />
          </div>
          <Container className="md:py-0 py-0 mt-5">
            <SearchBox />
          </Container>
        </div>

        {/* Search Section */}
        <Container className="md:pt-0 pt-0 mt-5 max-w-9xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-white">Garage sửa xe TOYOTA ở Tp.HCM</h1>
            <ViewToggle 
              currentView={currentView} 
              onViewChange={handleViewChange}
              className="self-end sm:self-auto"
            />
          </div>
          <RepairPalSearchBox />
        </Container>

        {/* Content Area */}
        <Container className="md:pt-0 pt-0  max-w-9xl">
          {currentView === 'list' ? (
            <>
              {/* Garage List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mockGarages.map((garage, index) => (
                  <GarageListItem
                    key={garage.id}
                    garage={garage}
                    rank={index + 1}
                  />
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                  Xem thêm gara
                </button>
              </div>
            </>
          ) : (
            /* Split Layout: List + Map */
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 h-[70vh] min-h-[600px]">
              {/* Left Side - Garage List */}
              <div className="space-y-4 overflow-y-auto pr-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">
                    {mockGarages.length} gara được tìm thấy
                  </h3>
                </div>
                
                {mockGarages.map((garage, index) => (
                  <div
                    key={garage.id}
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedGarage?.id === garage.id 
                        ? 'ring-2 ring-red-500 rounded-lg' 
                        : 'hover:bg-white/5 rounded-lg p-1'
                    }`}
                    onClick={() => handleGarageSelect(garage)}
                  >
                    <GarageListItem
                      garage={garage}
                      rank={index + 1}
                    />
                  </div>
                ))}
              </div>

              {/* Right Side - Map */}
              <div className="relative">
                <GarageMap
                  garages={mockGarages}
                  selectedGarage={selectedGarage}
                  onGarageSelect={handleGarageSelect}
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>
          )}
        </Container>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
