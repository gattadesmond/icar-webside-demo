'use client';

import Image from 'next/image';

interface CarBrandCarouselProps {
  className?: string;
  speed?: number; // seconds per cycle
}

const carBrands = [
  { name: 'Toyota', src: '/images/car-brand/toyota-svgrepo-com.svg' },
  { name: 'Ford', src: '/images/car-brand/ford-svgrepo-com.svg' },
  { name: 'Hyundai', src: '/images/car-brand/hyundai-svgrepo-com.svg' },
  { name: 'Kia', src: '/images/car-brand/kia-svgrepo-com.svg' },
  { name: 'Mazda', src: '/images/car-brand/mazda-svgrepo-com.svg' },
  { name: 'Nissan', src: '/images/car-brand/nissan-svgrepo-com.svg' },
  { name: 'Mercedes-Benz', src: '/images/car-brand/mercedes-benz-svgrepo-com.svg' },
  { name: 'Lexus', src: '/images/car-brand/lexus-svgrepo-com.svg' },
  { name: 'Volkswagen', src: '/images/car-brand/volkswagen-svgrepo-com.svg' },
  { name: 'Porsche', src: '/images/car-brand/porsche-svgrepo-com.svg' },
  { name: 'Ferrari', src: '/images/car-brand/ferrari-svgrepo-com.svg' },
  { name: 'Rolls-Royce', src: '/images/car-brand/rolls-royce-svgrepo-com.svg' },
  { name: 'Tesla', src: '/images/car-brand/tesla-svgrepo-com.svg' },
  { name: 'Subaru', src: '/images/car-brand/subaru-svgrepo-com.svg' },
  { name: 'Suzuki', src: '/images/car-brand/suzuki-svgrepo-com.svg' },
  { name: 'Mitsubishi', src: '/images/car-brand/mitsubishi-svgrepo-com.svg' },
  { name: 'Land Rover', src: '/images/car-brand/land-rover-svgrepo-com.svg' },
  { name: 'Infiniti', src: '/images/car-brand/infiniti-svgrepo-com.svg' },
];

export default function CarBrandCarousel({ 
  className = '', 
  speed = 30 
}: CarBrandCarouselProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div 
        className="flex items-center gap-8  animate-scroll"
        style={{ 
          animationDuration: `${speed}s`,
          width: `${carBrands.length * 120}px` // 120px per logo
        }}
      >
        {/* First set of logos */}
        {carBrands.map((brand, index) => (
          <div
            key={`${brand.name}-first-${index}`}
            className="flex-shrink-0 w-[100px] h-[60px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 group"
          >
            <Image
              src={brand.src}
              alt={brand.name}
              width={50}
              height={50}
              className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300 filter brightness-0 invert opacity-30"
              priority={index < 5}
            />
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {carBrands.map((brand, index) => (
          <div
            key={`${brand.name}-second-${index}`}
            className="flex-shrink-0 w-[100px] h-[60px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 group"
          >
            <Image
              src={brand.src}
              alt={brand.name}
              width={50}
              height={50}
              className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300 filter brightness-0 invert opacity-30"
              priority={index < 5}
            />
          </div>
        ))}
      </div>
      
      {/* Gradient overlays for smooth edges */}
      {/* <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none" /> */}
    </div>
  );
}
