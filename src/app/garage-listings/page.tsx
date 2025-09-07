import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import GarageListItem from "@/components/molecules/GarageListItem";
import RepairPalSearchBox from "@/components/organisms/RepairPalSearchBox";
import SearchBox from '@/components/molecules/SearchBox';
import Container from '@/components/atoms/Container';
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
    name: 'Quality 1st Auto Repair',
    rating: 4.7,
    reviewCount: 12,
    distance: '4.59 mi',
    address: '300 Saint Georges Avenue',
    city: 'Rahway',
    state: 'NJ',
    status: 'closed',
    openTime: 'Mở cửa 8:00 AM T2',
    image: 'https://storage.googleapis.com/rp-production-public-content/9y15pk2dvkut375ly6r62lsu2o4o',
  },
  {
    id: 2,
    name: 'Midas - Woodbridge',
    rating: 4.4,
    reviewCount: 152,
    distance: '6.24 mi',
    address: '495 Route 9 S',
    city: 'Woodbridge',
    state: 'NJ',
    status: 'closed',
    openTime: 'Mở cửa 7:30 AM T2',
    image: 'https://storage.googleapis.com/rp-production-public-content/t9dagnvm3hinu82bjr8oh8delcqs',
  },
  {
    id: 3,
    name: 'AutoCare Plus',
    rating: 4.8,
    reviewCount: 89,
    distance: '3.12 mi',
    address: '123 Main Street',
    city: 'Edison',
    state: 'NJ',
    status: 'open',
    openTime: 'Mở cửa 7:00 AM T2',
    image: 'https://storage.googleapis.com/rp-production-public-content/xxnhib0gwvf8bjkh3hgioz1ed8rq',
  },
  {
    id: 4,
    name: 'Precision Auto Service',
    rating: 4.6,
    reviewCount: 234,
    distance: '5.87 mi',
    address: '456 Oak Avenue',
    city: 'Metuchen',
    state: 'NJ',
    status: 'closed',
    openTime: 'Mở cửa 8:30 AM T2',
    image: 'https://storage.googleapis.com/rp-production-public-content/zjrb51k16xs2fu67onyyo0t9dwa0',
  },
  {
    id: 5,
    name: 'Express Auto Repair',
    rating: 4.3,
    reviewCount: 67,
    distance: '2.45 mi',
    address: '789 Pine Street',
    city: 'Carteret',
    state: 'NJ',
    status: 'open',
    openTime: 'Mở cửa 6:30 AM T2',
    image: 'https://storage.googleapis.com/rp-production-public-content/g0k8f6ccs2ahg8f5yyajgoa22oue',
  },
  {
    id: 6,
    name: 'Reliable Auto Center',
    rating: 4.9,
    reviewCount: 178,
    distance: '7.89 mi',
    address: '321 Elm Street',
    city: 'Perth Amboy',
    state: 'NJ',
    status: 'closed',
    openTime: 'Mở cửa 9:00 AM T2',
    image: 'https://storage.googleapis.com/rp-production-public-content/3z624a2usqnwc07nb8ni93deixc7',
  },
];

export default function GarageListingsPage() {
  return (
    <div className="min-h-screen ">
      {/* Header */}
      <Header />

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
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/90 " />
          </div>
          <Container className="md:py-0 py-0 mt-5">
            <SearchBox />
          </Container>
        </div>


        {/* Search Section */}
        <Container className="md:pt-0 pt-0 mt-5">
          <h1 className="text-2xl font-bold">Garage sửa xe TOYOTA ở Tp.HCM</h1>
          <RepairPalSearchBox />
        </Container>


        <Container className="md:pt-0 pt-0">
          {/* Page Header */}


          {/* Garage List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </Container>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
