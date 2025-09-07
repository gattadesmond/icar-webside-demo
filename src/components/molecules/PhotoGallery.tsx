import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface PhotoGalleryProps {
  images: string[];
  alt: string;
  className?: string;
}

export default function PhotoGallery({ images, alt, className = '' }: PhotoGalleryProps) {
  const mainImage = images[0];
  const sideImages = images.slice(1, 3);

  return (
    <div className={`relative ${className}`}>
      <div className="grid grid-cols-3 gap-2 h-48 rounded-2xl overflow-hidden">
        {/* Main Image */}
        <div className="col-span-2">
          <Image
            src={mainImage}
            alt={alt}
            width={600}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Side Images */}
        <div className="space-y-2">
          {sideImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${alt} ${index + 2}`}
              width={300}
              height={100}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>
      
      {/* See All Photos Button */}
      <Button className="absolute bottom-4 right-4 bg-white/90 text-gray-900 hover:bg-white border border-white">
        Xem Tất Cả Ảnh
      </Button>
    </div>
  );
}
