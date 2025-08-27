import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import ComponentShowcase from "@/components/demo/ComponentShowcase";
import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import HeroSection1 from "@/components/organisms/HeroSection1";
import { Users, Car, Wrench, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />
      <section className="relative isolate mx-auto min-h-fit w-full max-w-screen-xl px-5 py-10 md:px-20 md:py-0">
        <div className="grid grid-cols-2 gap-x-12 gap-y-16 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex h-6 w-6 items-center justify-center text-primary">
              <Users className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-medium">10,000+</span>
              <p className="text-muted-foreground">Khách hàng hài lòng</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex h-6 w-6 items-center justify-center text-primary">
              <Car className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-medium">5,000+</span>
              <p className="text-muted-foreground">Xe đã bảo dưỡng</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex h-6 w-6 items-center justify-center text-primary">
              <Wrench className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-medium">15,000+</span>
              <p className="text-muted-foreground">Lần bảo dưỡng</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex h-6 w-6 items-center justify-center text-primary">
              <Star className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-medium">4.9/5</span>
              <p className="text-muted-foreground">Đánh giá trung bình</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-screen-xl flex-col gap-10 px-5 py-10 md:flex-row md:justify-between md:px-16  lg:py-20 xl:px-20">
        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
          <div className="relative h-24 w-24 lg:h-28 lg:w-28">
            <Image
              src="/images/feature-1.png"
              alt="Chẩn đoán chính xác"
              fill
              className="object-cover rounded-lg animate-fade-in duration-300"
              priority
            />
          </div>
          <div className="space-y-2 md:max-w-[266px]">
            <p className="text-xl font-medium">Chẩn đoán chính xác</p>
            <p className="text-white/40">
              Sử dụng thiết bị chẩn đoán hiện đại để xác định chính xác vấn đề của xe.
              Tiết kiệm thời gian và chi phí với chẩn đoán nhanh chóng.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
          <div className="relative h-24 w-24 lg:h-28 lg:w-28">
            <Image
              src="/images/feature-2.png"
              alt="Sửa chữa chuyên nghiệp"
              fill
              className="object-cover rounded-lg animate-fade-in duration-300"
              priority
            />
          </div>
          <div className="space-y-2 md:max-w-[266px]">
            <p className="text-xl font-medium">Sửa chữa chuyên nghiệp</p>
            <p className="text-white/40">
              Đội ngũ kỹ thuật viên giàu kinh nghiệm với chứng chỉ chuyên môn.
              Sửa chữa đúng chuẩn nhà sản xuất với bảo hành chính hãng.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
          <div className="relative h-24 w-24 lg:h-28 lg:w-28">
            <Image
              src="/images/feature-3.png"
              alt="Dịch vụ tận tâm"
              fill
              className="object-cover rounded-lg animate-fade-in duration-300"
              priority
            />
          </div>
          <div className="space-y-2 md:max-w-[266px]">
            <p className="text-xl font-medium">Dịch vụ tận tâm</p>
            <p className="text-white/40">
              Cam kết hoàn thành đúng hẹn với chất lượng cao nhất.
              Tư vấn miễn phí và hỗ trợ 24/7 cho mọi vấn đề về xe.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-5 py-10 md:px-16 md:py-20 xl:px-20">
        <div className="mb-12 space-y-4">
          <h6 className="text-reit-gray text-[10px] font-medium tracking-[2px] uppercase">
            THE THESIS
          </h6>
          <p className="font-headline text-4.5xl mx-auto mt-0 !block text-start font-bold text-balance xl:text-5xl">
            Why Wander works
          </p>
          <p className="text-w-3005">
            Wander has verticalized the traditionally fragmented components of the
            travel ecosystem into one unified experience.
          </p>
        </div>
        <div className="mx-auto my-0 hidden max-w-[calc(410px*3+24px*2)] items-center justify-center gap-x-4 lg:flex">
          <span className="bg-gray-800 flex h-[42px] w-[42px] items-center justify-center rounded-full text-xl font-semibold">
            1
          </span>
          <div className="bg-gray-900 h-[1px] w-[calc(28%)] max-w-[365px]" />
          <span className="bg-gray-800 flex h-[42px] w-[42px] items-center justify-center rounded-full text-xl font-semibold">
            2
          </span>
          <div className="bg-gray-900 h-[1px] w-[calc(28%)] max-w-[365px]" />
          <span className="bg-gray-800 flex h-[42px] w-[42px] items-center justify-center rounded-full text-xl font-semibold">
            3
          </span>
        </div>
        <div className="mt-6 flex max-w-[calc(410px*3+24px*2)] flex-col items-center justify-center gap-6 md:gap-y-10 lg:mx-auto lg:flex-row lg:justify-start">
          <div className="bg-w-90015 h-fit w-full max-w-[410px] grow overflow-hidden rounded-2xl">
            <figure className="relative h-[220px] w-full">
              <img
                alt="We consolidate the top 1% of properties on one platform"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="animate-fade-in duration-300"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: "cover",
                  color: "transparent"
                }}
                src="https://www.datocms-assets.com/53643/1713379108-rectangle-26299.jpg"
              />
            </figure>
            <div className="min-h-[calc(100%-220px)] space-y-2 p-6">
              <h6 className="text-reit-gray text-[10px] font-medium tracking-[2px] whitespace-nowrap uppercase">
                CONSOLIDATION
              </h6>
              <h3 className="mt-0 text-start text-xl font-medium">
                We consolidate the top 1% of properties on one platform
              </h3>
              <p className="text-w-3005">
                The top 1% of vacation rentals generate 35% of revenue. With the best
                vacation rentals in one place, consumers only have one place to look.
              </p>
            </div>
          </div>
          <div className="bg-w-90015 h-fit w-full max-w-[410px] grow overflow-hidden rounded-2xl">
            <figure className="relative h-[220px] w-full">
              <img
                alt="We standardize operations and distribute to our audience"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="animate-fade-in duration-300"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: "cover",
                  color: "transparent"
                }}
                src="https://www.datocms-assets.com/53643/1713390317-work_from_wander_11zon-1-1.jpg"
              />
            </figure>
            <div className="min-h-[calc(100%-220px)] space-y-2 p-6">
              <h6 className="text-reit-gray text-[10px] font-medium tracking-[2px] whitespace-nowrap uppercase">
                STANDARDIZATION
              </h6>
              <h3 className="mt-0 text-start text-xl font-medium">
                We standardize operations and distribute to our audience
              </h3>
              <p className="text-w-3005">
                Our standardized hospitality experience across our portfolio delivers
                a consistent guest experience and compounds a distribution moat.
              </p>
            </div>
          </div>
          <div className="bg-w-90015 h-fit w-full max-w-[410px] grow overflow-hidden rounded-2xl">
            <figure className="relative h-[220px] w-full">
              <img
                alt="We run operations on WanderOS with deep automation and AI"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="animate-fade-in duration-300"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: "cover",
                  color: "transparent"
                }}
                src="https://www.datocms-assets.com/53643/1713379190-rectangle-26299-1.jpg"
              />
            </figure>
            <div className="min-h-[calc(100%-220px)] space-y-2 p-6">
              <h6 className="text-reit-gray text-[10px] font-medium tracking-[2px] whitespace-nowrap uppercase">
                AUTOMATION
              </h6>
              <h3 className="mt-0 text-start text-xl font-medium">
                We run operations on WanderOS with deep automation and AI
              </h3>
              <p className="text-w-3005">
                By moving more and more of our operations into WanderOS and operating
                like a software business, we achieve software-level margins.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
