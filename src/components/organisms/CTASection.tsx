import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  className?: string;
}

export default function CTASection({ className = '' }: CTASectionProps) {
  return (
    <section className={`relative min-h-[600px] md:min-h-[700px] overflow-hidden ${className}`}>
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
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black/70 " />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[600px] md:min-h-[700px] flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Hãy coi đây là lời mời cá nhân để khám phá đối tác với iGara
                </h2>
                <p className="md:text-xl text-neutral-300 leading-relaxed">
                  Chuyển đổi garage của bạn thành một trong những cơ sở sửa chữa xe tốt nhất thế giới. 
                  Với iGara, chúng tôi biến tài sản của bạn thành một tài sản tài chính hoạt động hiệu quả 
                  và quản lý nó theo tiêu chuẩn cao nhất. Bạn gặt hái thành quả mà không cần động tay.
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-neutral-100 px-8 py-4 text-lg font-medium"
                >
                  Đăng ký trở thành đối tác iGara
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Right Side - Background Image (visible on larger screens) */}
            <div className="hidden lg:block">
              {/* This space is intentionally left for the background image to show through */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
