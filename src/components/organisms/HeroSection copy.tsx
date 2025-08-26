import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star } from 'lucide-react';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = '' }: HeroSectionProps) {
    return (
    <section className={`relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <Star className="w-4 h-4 mr-2 fill-current" />
              <span>Giải pháp xe hơi hàng đầu Việt Nam</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Khám phá thế giới{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                  xe hơi
                </span>{' '}
                cùng ICAR
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Trải nghiệm dịch vụ xe hơi chất lượng cao với đội ngũ chuyên nghiệp.
                Từ mua bán, bảo dưỡng đến tư vấn - chúng tôi đồng hành cùng bạn.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Khách hàng hài lòng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Xe đã bán</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">Đánh giá trung bình</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Khám phá ngay
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="h-4 w-4" />
                Xem video giới thiệu
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary/70 border-2 border-background"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Được tin tưởng bởi 1000+ khách hàng</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Car Image */}
              <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-background/20 to-background/10 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="text-center text-foreground">
                    {/* <div className="text-6xl mb-4" role="img" aria-label="Xe hơi">🚗</div>
                    <div className="text-xl font-semibold">Xe hơi chất lượng</div>
                    <div className="text-sm opacity-80">Hình ảnh minh họa</div> */}
                  </div>
                  <img src="https://www.garagebox.io/_next/image?url=https%3A%2F%2Fgaragebox.s3.ap-south-1.amazonaws.com%2Fweb-assets%2Ffeatures%2Fpowerful_garage_management_software.webp%3Fv%3D3&w=3840&q=75" alt="Xe hơi" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-background rounded-xl p-4 shadow-lg border border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">Có sẵn</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-background rounded-xl p-4 shadow-lg border border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.9</div>
                  <div className="text-xs text-muted-foreground">Đánh giá</div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl -z-10 transform rotate-3 scale-105" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
          role="img"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
