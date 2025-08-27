'use client';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = '' }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://madebydesignesia.com/themes/autodetail/images/slider/1.webp',
    'https://madebydesignesia.com/themes/autodetail/images/slider/2.webp',
    'https://madebydesignesia.com/themes/autodetail/images/slider/3.webp'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section className="relative isolate mx-auto min-h-fit w-full py-12 pt-20 pb-16 md:py-48">

        <div className="absolute inset-0 isolate -z-10 lg:h-full overlay bg-cover bg-center overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          ))}
          {/* Overlay for better text readability */}
          <div
            className="absolute inset-0"
            style={{
              content: "",
              position: "absolute",
              inset: 0,
              backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), linear-gradient(180deg, rgba(0, 0, 0, .4) 50%, #000)"
            }}
          ></div>
        </div>

        <div className="mx-auto flex max-w-[850px] flex-col items-center gap-6 px-5">
          <h1 className="font-headline text-4.5xl mx-auto !block text-center font-bold text-balance md:text-5xl xl:text-5xl leading-normal uppercase">
            Tìm Gara Sửa Xe Uy Tín, Nhanh Chóng<br /> Chính Xác Cùng ICAR
          </h1>
          <p className="text-center text-white/80 text-balance">
            Trải nghiệm dịch vụ xe hơi chất lượng cao với đội ngũ chuyên nghiệp. Từ mua bán, bảo dưỡng đến tư vấn - chúng tôi đồng hành cùng bạn.
          </p>
          <a className="btn w-fit px-2 text-center md:px-6" href="#apply">
            Apply to become a Wander Ambassador →
          </a>
          <div className="mx-auto flex h-6 items-center">
            <div className="relative flex w-max translate-x-[15px] md:justify-self-end">
              <img
                src="https://www.datocms-assets.com/53643/1652291699-fp8hbvxr_400x400.jpeg?w=24&q=75"
                width={24}
                height={24}
                alt="wander member picture"
                className="relative float-right h-[22px] w-[22px] rounded-full sm:h-6 sm:w-6"
                style={{ left: "-0px", zIndex: 10 }}
                srcSet="https://www.datocms-assets.com/53643/1652291699-fp8hbvxr_400x400.jpeg?w=24&q=75 1x, https://www.datocms-assets.com/53643/1652291699-fp8hbvxr_400x400.jpeg?w=48&q=75 2x"
              />
              <img
                src="https://www.datocms-assets.com/53643/1653407396-darryl-b.png?w=24&q=75"
                width={24}
                height={24}
                alt="wander member picture"
                className="relative float-right h-[22px] w-[22px] rounded-full sm:h-6 sm:w-6"
                style={{ left: "-6px", zIndex: 9 }}
                srcSet="https://www.datocms-assets.com/53643/1653407396-darryl-b.png?w=24&q=75 1x, https://www.datocms-assets.com/53643/1653407396-darryl-b.png?w=48&q=75 2x"
              />
              <img
                src="https://www.datocms-assets.com/53643/1652291124-judya.jpeg?w=24&q=75"
                width={24}
                height={24}
                alt="wander member picture"
                className="relative float-right h-[22px] w-[22px] rounded-full sm:h-6 sm:w-6"
                style={{ left: "-12px", zIndex: 8 }}
                srcSet="https://www.datocms-assets.com/53643/1652291124-judya.jpeg?w=24&q=75 1x, https://www.datocms-assets.com/53643/1652291124-judya.jpeg?w=48&q=75 2x"
              />
              <img
                src="https://www.datocms-assets.com/53643/1652291173-ftz3l5bo_400x400.jpeg?w=24&q=75"
                width={24}
                height={24}
                alt="wander member picture"
                className="relative float-right h-[22px] w-[22px] rounded-full sm:h-6 sm:w-6"
                style={{ left: "-18px", zIndex: 7 }}
                srcSet="https://www.datocms-assets.com/53643/1652291173-ftz3l5bo_400x400.jpeg?w=24&q=75 1x, https://www.datocms-assets.com/53643/1652291173-ftz3l5bo_400x400.jpeg?w=48&q=75 2x"
              />
              <img
                src="https://www.datocms-assets.com/53643/1653407295-novaks.png?w=24&q=75"
                width={24}
                height={24}
                alt="wander member picture"
                className="relative float-right h-[22px] w-[22px] rounded-full sm:h-6 sm:w-6"
                style={{ left: "-24px", zIndex: 6 }}
                srcSet="https://www.datocms-assets.com/53643/1653407295-novaks.png?w=24&q=75 1x, https://www.datocms-assets.com/53643/1653407295-novaks.png?w=48&q=75 2x"
              />
            </div>
            <div className="relative flex h-full items-center gap-1 place-self-start text-left text-xs whitespace-nowrap text-white/60 sm:text-sm">
              Được tin tưởng bởi
              <span className="text-white/90"> 1000+ khách hàng</span>
            </div>
          </div>
        </div>
        <div className="overlay absolute inset-0 isolate -z-10 lg:h-full">
          <video
            poster="/assets/black.webp"
            className="absolute inset-0 -z-10 h-full w-screen object-cover"
            autoPlay=""
            loop=""
            playsInline=""
            preload="none"
          >
            <source />
            <source
              src="https://assets.wander.com/p/scott-short.webm"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <section className={`relative isolate mx-auto min-h-fit w-full py-12 pt-20 md:pt-40 ${className}`}>
        {/* Background Image Slider */}


        <div className="mx-auto max-w-screen-xl px-5 md:px-16 xl:px-20">
          <div className="grid gap-6 grid-cols-1 xl:gap-[74px]">
            {/* Content */}
            <div className="flex flex-1 flex-col gap-6">
              {/* Badge */}
              <div className="flex h-[22px] w-fit items-center gap-1 rounded-full bg-black/20 px-2 text-xs backdrop-blur-sm">
                <span className="text-white">Giải pháp xe hơi hàng đầu Việt Nam</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-headline text-balance text-center !block mx-0  text-5xl font-bold xl:text-6xl text-white leading-normal">
                KHÁM PHÁ THẾ GIỚI <br /> XE HƠI CÙNG ICAR
              </h1>

              {/* Description */}
              <p className="text-white/80 text-lg text-center leading-relaxed">
                Trải nghiệm dịch vụ xe hơi chất lượng cao với đội ngũ chuyên nghiệp. Từ mua bán, bảo dưỡng đến tư vấn - chúng tôi đồng hành cùng bạn.
              </p>
              {/* Stats */}
              {/* <div className="grid grid-cols-3 gap-8 py-6">
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
            </div> */}
              {/* CTA Button */}
              <Button className="w-fit px-6 h-12 text-base font-semibold group">
                Khám phá ngay
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Trust Indicator */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <Avatar className="h-8 w-8 border-2 border-white">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="Customer 1" />
                    <AvatarFallback className="bg-gradient-to-r from-primary to-primary/70 text-white text-xs">JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 border-2 border-white">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" alt="Customer 2" />
                    <AvatarFallback className="bg-gradient-to-r from-primary to-primary/70 text-white text-xs">MS</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 border-2 border-white">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" alt="Customer 3" />
                    <AvatarFallback className="bg-gradient-to-r from-primary to-primary/70 text-white text-xs">AL</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 border-2 border-white">
                    <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face" alt="Customer 4" />
                    <AvatarFallback className="bg-gradient-to-r from-primary to-primary/70 text-white text-xs">RK</AvatarFallback>
                  </Avatar>
                </div>
                <p className="text-sm text-white/40">
                  Được tin tưởng bởi
                  <span className="text-white/90"> 1000+ khách hàng</span>

                </p>
              </div>
            </div>

            {/* Video Button */}


          </div>



          <div className="mt-20 flex w-full flex-wrap lg:mt-32">
            <h6 className="text-w-50035 w-full text-center text-[10px] font-medium tracking-[2px] whitespace-nowrap uppercase">
              AS SEEN IN
            </h6>
            <div className="mr-auto flex h-fit w-full flex-wrap justify-evenly gap-x-10 gap-y-6 py-10 md:mx-auto">
              <img
                alt="Brand"
                loading="lazy"
                width={122}
                height={14}
                decoding="async"
                data-nimg={1}
                className="animate-fade-in duration-300"
                style={{ color: "transparent" }}
                src="https://www.datocms-assets.com/53643/1713218921-wsj.svg"
              />
              <img
                alt="Brand"
                loading="lazy"
                width={76}
                height={20}
                decoding="async"
                data-nimg={1}
                className="animate-fade-in duration-300"
                style={{ color: "transparent" }}
                src="https://www.datocms-assets.com/53643/1713218918-forbes.svg"
              />
              <img
                alt="Brand"
                loading="lazy"
                width={136}
                height={22}
                decoding="async"
                data-nimg={1}
                className="animate-fade-in duration-300"
                style={{ color: "transparent" }}
                src="https://www.datocms-assets.com/53643/1713218915-insider.svg"
              />
              <img
                alt="Brand"
                loading="lazy"
                width={59}
                height={22}
                decoding="async"
                data-nimg={1}
                className="animate-fade-in duration-300"
                style={{ color: "transparent" }}
                src="https://www.datocms-assets.com/53643/1713218913-skift.svg"
              />
              <img
                alt="Brand"
                loading="lazy"
                width={136}
                height={30}
                decoding="async"
                data-nimg={1}
                className="animate-fade-in duration-300"
                style={{ color: "transparent" }}
                src="https://www.datocms-assets.com/53643/1713218909-rolling_stone.svg"
              />
              <img
                alt="Brand"
                loading="lazy"
                width={141}
                height={20}
                decoding="async"
                data-nimg={1}
                className="animate-fade-in duration-300"
                style={{ color: "transparent" }}
                src="https://www.datocms-assets.com/53643/1719324450-fast_company_logo-1.svg"
              />
              <img
                alt="Brand"
                loading="lazy"
                width={178}
                height={26}
                decoding="async"
                data-nimg={1}
                className="animate-fade-in duration-300"
                style={{ color: "transparent" }}
                src="https://www.datocms-assets.com/53643/1719324454-usa_today-2020-01-29-1.svg"
              />
              <img
                alt="Brand"
                loading="lazy"
                width={135}
                height={18}
                decoding="async"
                data-nimg={1}
                className="animate-fade-in duration-300"
                style={{ color: "transparent" }}
                src="https://www.datocms-assets.com/53643/1720189467-vb.svg"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
