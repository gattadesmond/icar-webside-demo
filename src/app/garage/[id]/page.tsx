'use client';

import { useState } from 'react';
import Container from '@/components/atoms/Container';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Breadcrumb from '@/components/molecules/Breadcrumb';
import PhotoGallery from '@/components/molecules/PhotoGallery';
import TabNavigation from '@/components/molecules/TabNavigation';
import BookingCard from '@/components/molecules/BookingCard';
import HelpCard from '@/components/molecules/HelpCard';
import GarageInfo from '@/components/molecules/GarageInfo';
import AmenitiesSection from '@/components/molecules/AmenitiesSection';
import ScorecardSection from '@/components/molecules/ScorecardSection';
import ReviewsSection from '@/components/molecules/ReviewsSection';
import AboutSection from '@/components/molecules/AboutSection';

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
  phone: string;
  website: string;
  description: string;
  amenities: {
    title: string;
    description: string;
    icon: string;
  }[];
  scorecard: {
    technicalAbility: number;
    toolsEquipment: number;
    customerService: number;
    customerAmenities: number;
  };
  reviews: {
    id: number;
    name: string;
    car: string;
    date: string;
    rating: number;
    comment: string;
  }[];
}

// Mock data for garage detail
const mockGarage: Garage = {
  id: 1,
  name: 'Gara Ô Tô Minh Đức',
  rating: 4.4,
  reviewCount: 152,
  distance: '6.24 km',
  address: '123 Đường Lê Lợi',
  city: 'Quận 1',
  state: 'TP. Hồ Chí Minh',
  status: 'closed',
  openTime: 'Mở cửa 7:30 sáng thứ 2',
  image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=800&h=600&fit=crop',
  phone: '(028) 1234-5678',
  website: 'garaminhduc.com',
  description: 'Gara sửa chữa ô tô toàn diện với bảo hành 12 tháng/20.000 km và giá cả hợp lý.',
  amenities: [
    {
      title: 'Gara Sửa Chữa Ô Tô Được Chứng Nhận',
      description: 'Gara đáng tin cậy này không bao giờ tính phí quá cao và đáp ứng tiêu chuẩn giá cả hợp lý.',
      icon: 'shield'
    },
    {
      title: 'Phục Vụ 46 Hãng Xe, Bao Gồm Toyota',
      description: 'Gara Minh Đức là gara toàn diện có thể thực hiện tất cả các sửa chữa lớn và bảo dưỡng định kỳ.',
      icon: 'wrench'
    },
    {
      title: 'Lịch Hẹn Linh Hoạt',
      description: 'Gara này có dịch vụ gửi xe sớm và muộn. Bạn có thể chọn các tùy chọn này và xem hướng dẫn khi đặt lịch hẹn.',
      icon: 'calendar'
    },
    {
      title: 'Bảo Hành',
      description: 'Gara Minh Đức bảo hành công việc của họ trong 20.000 km và 12 tháng.',
      icon: 'shield'
    }
  ],
  scorecard: {
    technicalAbility: 90,
    toolsEquipment: 93,
    customerService: 90,
    customerAmenities: 95
  },
  reviews: [
    {
      id: 1,
      name: 'NGUYỄN VĂN A',
      car: '2006 Toyota Camry',
      date: '05/09/2025',
      rating: 1,
      comment: 'Dịch vụ tệ, giá cao, nhân viên không chuyên nghiệp. Tôi đã mang xe đi chỗ khác và được sửa với giá rẻ hơn một nửa và nhanh hơn nhiều.'
    },
    {
      id: 2,
      name: 'TRẦN THỊ B',
      car: '2019 Honda CR-V',
      date: '04/09/2025',
      rating: 1,
      comment: 'Họ mất hai ngày chỉ để sửa ổ bi xe tôi và gara không bao giờ gọi điện thông báo tình hình. Tôi phải gọi cho họ và họ tỏ ra khó chịu khi tôi gọi.'
    },
    {
      id: 3,
      name: 'LÊ VĂN C',
      car: '2013 Mazda 3',
      date: '03/09/2025',
      rating: 5,
      comment: 'Cảm ơn gara!'
    },
    {
      id: 4,
      name: 'PHẠM VĂN D',
      car: '2013 Hyundai Elantra',
      date: '03/09/2025',
      rating: 3,
      comment: 'Hơi đắt một chút'
    },
    {
      id: 5,
      name: 'HOÀNG THỊ E',
      car: '2018 Toyota Vios',
      date: '02/09/2025',
      rating: 5,
      comment: 'Dịch vụ khách hàng tuyệt vời, nhanh chóng, giá cả hợp lý. Nhân viên rất tận tâm!'
    }
  ]
};

export default function GarageDetailPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentPage, setCurrentPage] = useState(1);


  const tabs = [
    { id: 'overview', label: 'Tổng Quan' },
    { id: 'about', label: 'Giới Thiệu' },
    { id: 'scorecard', label: 'Đánh Giá' },
    { id: 'reviews', label: `Đánh Giá (${mockGarage.reviewCount})` }
  ];

  return (
    <div className="min-h-screen ">
      <Header />
      
      <main className="">
        <Container className="max-w-7xl">
          {/* Breadcrumb */}
          <div className="py-4">
            <Breadcrumb
              items={[
                { label: 'Danh Sách Gara', href: '/garage-listings' },
                { label: 'TP. Hồ Chí Minh', href: '/garage-listings?city=hcm' },
                { label: 'Quận 1', href: '/garage-listings?district=1' },
                { label: mockGarage.name, isActive: true }
              ]}
            />
          </div>

          {/* Photo Gallery */}
          <PhotoGallery
            images={[
              mockGarage.image,
              'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400&h=100&fit=crop',
              'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400&h=100&fit=crop'
            ]}
            alt={mockGarage.name}
            className="mb-6"
          />

          {/* Tabs */}
          <TabNavigation
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            className="mb-6"
          />

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <>
                  {/* Garage Info */}
                  <GarageInfo
                    name={mockGarage.name}
                    rating={mockGarage.rating}
                    reviewCount={mockGarage.reviewCount}
                    description={mockGarage.description}
                    address={mockGarage.address}
                    city={mockGarage.city}
                    state={mockGarage.state}
                    status={mockGarage.status}
                    openTime={mockGarage.openTime}
                    phone={mockGarage.phone}
                    website={mockGarage.website}
                  />

                  {/* Amenities */}
                  <AmenitiesSection
                    garageName={mockGarage.name}
                    amenities={mockGarage.amenities}
                  />
                </>
              )}

              {/* About Tab */}
              {activeTab === 'about' && (
                <AboutSection
                  garageName={mockGarage.name}
                  aboutText="Gara Minh Đức được thành lập vào năm 2019 và đã cung cấp dịch vụ sửa chữa ô tô chất lượng cho khu vực xung quanh từ đó. Gara được chứng nhận này có đội ngũ kỹ thuật viên giàu kinh nghiệm, được đào tạo chuyên sâu và được trang bị các công cụ và thiết bị chẩn đoán cần thiết để thực hiện nhiều loại sửa chữa khác nhau. Các sửa chữa này có thể bao gồm từ sửa chữa cơ khí nhỏ và lớn, đến lốp xe và cân chỉnh bánh xe, chẩn đoán và sửa chữa đèn báo động cơ, cũng như nhu cầu bảo dưỡng định kỳ của bạn. Công việc này được bảo hành 12 tháng / 20.000 km để bạn yên tâm. Khảo sát của chúng tôi về khách hàng gần đây cho thấy nhóm mô tả đội ngũ ở đây là tuyệt vời, hữu ích, am hiểu và tôn trọng. Dịch vụ đưa đón địa phương, thuê xe, gửi xe sớm, giờ làm việc thứ bảy và khu vực chờ với Internet không dây cũng có sẵn để thuận tiện cho bạn."
                  messageText="Gara Minh Đức là điểm đến một cửa cho phanh, thay dầu, lốp xe và tất cả nhu cầu sửa chữa ô tô của bạn. Gara được sở hữu và vận hành bởi các gia đình trong cộng đồng của bạn, cam kết cung cấp dịch vụ sửa chữa ô tô chất lượng cao với giá cả hợp lý. Và công việc của họ được bảo đảm bởi bảo hành nổi tiếng của chúng tôi*. Dù bạn cần thay dầu hay lốp xe, bảo dưỡng theo khuyến nghị của nhà sản xuất, hay sửa chữa phanh, gara địa phương của chúng tôi sẽ đáp ứng mọi nhu cầu của bạn."
                />
              )}

              {/* Scorecard Tab */}
              {activeTab === 'scorecard' && (
                <ScorecardSection
                  garageName={mockGarage.name}
                  scorecard={mockGarage.scorecard}
                />
              )}

              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <ReviewsSection
                  garageName={mockGarage.name}
                  rating={mockGarage.rating}
                  reviewCount={mockGarage.reviewCount}
                  reviews={mockGarage.reviews}
                  currentPage={currentPage}
                  totalPages={15}
                  onPageChange={setCurrentPage}
                />
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Section */}
              <BookingCard
                availableTime="Thứ 2, 08/09/2025 lúc 8:00 sáng"
                onBookAppointment={() => console.log('Đặt lịch hẹn')}
                onCheckAvailability={() => console.log('Kiểm tra lịch trống')}
              />

              {/* Help Section */}
              <HelpCard
                title="Không biết xe bị gì?"
                description="Gara này có thể giúp bạn chẩn đoán vấn đề, dù là tiếng động, khói hay mùi gì bạn đang gặp phải."
              />
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
