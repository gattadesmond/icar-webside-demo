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
import Footer from "@/components/organisms/Footer";
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
            QUY TRÌNH LÀM VIỆC
          </h6>
          <p className="font-headline text-4.5xl mx-auto mt-0 !block text-start font-bold text-balance xl:text-5xl">
            Tại sao chọn iGara
          </p>
          <p className="text-neutral-300">
            iGara đã tối ưu hóa quy trình sửa chữa xe hơi thành một trải nghiệm thống nhất,
            đảm bảo chất lượng và hiệu quả cao nhất cho khách hàng.
          </p>
        </div>
        <div className="mx-auto my-0 hidden max-w-[calc(410px*3+24px*2)] items-center justify-center gap-x-4 lg:flex">
          <span className="bg-neutral-800 flex h-[42px] w-[42px] items-center justify-center rounded-full text-xl font-semibold">
            1
          </span>
          <div className="bg-neutral-900 h-[1px] w-[calc(28%)] max-w-[365px]" />
          <span className="bg-neutral-800 flex h-[42px] w-[42px] items-center justify-center rounded-full text-xl font-semibold">
            2
          </span>
          <div className="bg-neutral-900 h-[1px] w-[calc(28%)] max-w-[365px]" />
          <span className="bg-neutral-800 flex h-[42px] w-[42px] items-center justify-center rounded-full text-xl font-semibold">
            3
          </span>
        </div>
        <div className="mt-6 flex max-w-[calc(410px*3+24px*2)] flex-col items-center justify-center gap-6 md:gap-y-10 lg:mx-auto lg:flex-row lg:justify-start">
          <div className="bg-neutral-800 h-fit w-full max-w-[410px] grow overflow-hidden rounded-2xl">
            <figure className="relative h-[220px] w-full">
              <Image
                src="/images/step-1.jpg"
                alt="Tiếp nhận xe và ghi nhận dấu hiệu ban đầu"
                fill
                className="object-cover animate-fade-in duration-300"
                priority
              />
            </figure>
            <div className="min-h-[calc(100%-220px)] space-y-2 p-6">
              <h6 className="text-reit-gray text-[10px] font-medium tracking-[2px] whitespace-nowrap uppercase">
                BƯỚC 1
              </h6>
              <h3 className="mt-0 text-start text-xl font-medium">
                Tiếp nhận xe và ghi nhận dấu hiệu ban đầu
              </h3>
              <p className="text-neutral-300">
                Kiểm tra tổng quan xe, ghi nhận tình trạng hiện tại và các dấu hiệu bất thường.
                Đảm bảo minh bạch và chính xác trong việc đánh giá ban đầu.
              </p>
            </div>
          </div>
          <div className="bg-neutral-800 h-fit w-full max-w-[410px] grow overflow-hidden rounded-2xl">
            <figure className="relative h-[220px] w-full">
              <Image
                src="/images/step-2.jpg"
                alt="Tiếp nhận yêu cầu và tư vấn kỹ thuật"
                fill
                className="object-cover animate-fade-in duration-300"
                priority
              />
            </figure>
            <div className="min-h-[calc(100%-220px)] space-y-2 p-6">
              <h6 className="text-reit-gray text-[10px] font-medium tracking-[2px] whitespace-nowrap uppercase">
                BƯỚC 2
              </h6>
              <h3 className="mt-0 text-start text-xl font-medium">
                Tiếp nhận yêu cầu và tư vấn kỹ thuật
              </h3>
              <p className="text-neutral-300">
                Lắng nghe yêu cầu của khách hàng và tư vấn chuyên môn từ đội ngũ kỹ thuật viên.
                Đề xuất giải pháp tối ưu với chi phí hợp lý và thời gian phù hợp.
              </p>
            </div>
          </div>
          <div className="bg-neutral-800 h-fit w-full max-w-[410px] grow overflow-hidden rounded-2xl">
            <figure className="relative h-[220px] w-full">
              <Image
                src="/images/step-3.jpg"
                alt="Sửa chữa và bảo dưỡng chuyên nghiệp"
                fill
                className="object-cover animate-fade-in duration-300"
                priority
              />
            </figure>
            <div className="min-h-[calc(100%-220px)] space-y-2 p-6">
              <h6 className="text-reit-gray text-[10px] font-medium tracking-[2px] whitespace-nowrap uppercase">
                BƯỚC 3
              </h6>
              <h3 className="mt-0 text-start text-xl font-medium">
                Sửa chữa và bảo dưỡng chuyên nghiệp
              </h3>
              <p className="text-neutral-300">
                Thực hiện sửa chữa theo đúng quy trình kỹ thuật với thiết bị hiện đại.
                Đảm bảo chất lượng hoàn thiện và kiểm tra kỹ lưỡng trước khi bàn giao xe.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Dịch vụ sửa xe */}
      <div className="space-y-5 px-5 py-10 md:space-y-20 md:px-16 md:py-20 xl:px-20">
        <div className="mx-auto space-y-4 md:max-w-[465px]">
          <h5 className="text-reit-gray text-center text-[10px] font-medium tracking-[2px] whitespace-nowrap uppercase">DỊCH VỤ CỦA CHÚNG TÔI</h5>
          <p className="font-headline text-4.5xl mx-auto mt-0 mb-4 !block text-center font-bold text-balance xl:text-5xl">Giải pháp toàn diện cho xe</p>
          <p className="text-neutral-300 text-center md:mx-auto">Dịch vụ sửa chữa xe chuyên nghiệp để giữ cho xe của bạn hoạt động mượt mà và an toàn.</p>
        </div>
        <ul className="md: flex max-w-screen-xl flex-wrap justify-center gap-6 md:mx-auto">
          <li className="w-full overflow-hidden rounded-2xl md:max-w-[300px] lg:max-w-[410px]">
            <figure className="relative h-[258px] w-full"><img alt="Xưởng sửa xe" loading="lazy" decoding="async" data-nimg="fill" className="animate-fade-in duration-300" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, objectFit: 'cover', color: 'transparent' }} src="https://autoleap.com/wp-content/uploads/2025/04/image-6-min.png" /></figure>
            <div className="bg-neutral-800 h-full space-y-2 p-6">
              <h6 className="text-reit-gray text-[10px] font-medium tracking-[2px] whitespace-nowrap uppercase">XƯỞNG SỬA XE</h6>
              <h3 className="text-xl font-medium text-white">Tăng tốc sửa chữa với kiểm tra kỹ thuật số nhanh chóng và loại bỏ công việc thủ công cho thợ máy.</h3>
            </div>
          </li>
          <li className="w-full overflow-hidden rounded-2xl md:max-w-[300px] lg:max-w-[410px]">
            <figure className="relative h-[258px] w-full"><img alt="Cửa hàng lốp xe" loading="lazy" decoding="async" data-nimg="fill" className="animate-fade-in duration-300" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, objectFit: 'cover', color: 'transparent' }} src="https://autoleap.com/wp-content/uploads/2025/04/image-1-min.png" /></figure>
            <div className="bg-neutral-800 h-full space-y-2 p-6">
              <h6 className="text-reit-gray text-[10px] font-medium tracking-[2px] whitespace-nowrap uppercase">CỬA HÀNG LỐP XE</h6>
              <h3 className="text-xl font-medium text-white">Dễ dàng quản lý kho lốp, bán hàng và dịch vụ để giữ khách hàng luôn di chuyển.</h3>
            </div>
          </li>
          <li className="w-full overflow-hidden rounded-2xl md:max-w-[300px] lg:max-w-[410px]">
            <figure className="relative h-[258px] w-full"><img alt="Sửa chữa đặc biệt và tùy chỉnh" loading="lazy" decoding="async" data-nimg="fill" className="animate-fade-in duration-300" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, objectFit: 'cover', color: 'transparent' }} src="https://autoleap.com/wp-content/uploads/2025/04/image-3-min.png" /></figure>
            <div className="bg-neutral-800 h-full space-y-2 p-6">
              <h6 className="text-reit-gray text-[10px] font-medium tracking-[2px] whitespace-nowrap uppercase">SỬA CHỮA ĐẶC BIỆT</h6>
              <h3 className="text-xl font-medium text-white">Giải pháp tùy chỉnh để quản lý tất cả các sửa chữa xe tùy chỉnh một cách dễ dàng.</h3>
            </div>
          </li>
          <li className="w-full overflow-hidden rounded-2xl md:max-w-[300px] lg:max-w-[410px]">
            <figure className="relative h-[258px] w-full"><img alt="Thợ sửa xe di động" loading="lazy" decoding="async" data-nimg="fill" className="animate-fade-in duration-300" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, objectFit: 'cover', color: 'transparent' }} src="https://autoleap.com/wp-content/uploads/2025/04/MM_0001_DSC01843-min.png" /></figure>
            <div className="bg-neutral-800 h-full space-y-2 p-6">
              <h6 className="text-reit-gray text-[10px] font-medium tracking-[2px] whitespace-nowrap uppercase">THỢ SỬA XE DI ĐỘNG</h6>
              <h3 className="text-xl font-medium text-white">Quản lý công việc sửa chữa khi di chuyển và luôn kết nối với khách hàng từ thiết bị của bạn.</h3>
            </div>
          </li>
          <li className="w-full overflow-hidden rounded-2xl md:max-w-[300px] lg:max-w-[410px]">
            <figure className="relative h-[258px] w-full"><img alt="Sửa chữa tổng quát" loading="lazy" decoding="async" data-nimg="fill" className="animate-fade-in duration-300" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, objectFit: 'cover', color: 'transparent' }} src="https://autoleap.com/wp-content/uploads/2025/04/image-5-min.png" /></figure>
            <div className="bg-neutral-800 h-full space-y-2 p-6">
              <h6 className="text-reit-gray text-[10px] font-medium tracking-[2px] whitespace-nowrap uppercase">SỬA CHỮA TỔNG QUÁT</h6>
              <h3 className="text-xl font-medium text-white">Quản lý tất cả các loại công việc sửa chữa xe, kho phụ tùng và lịch hẹn khách hàng tại một nơi.</h3>
            </div>
          </li>
          <li className="w-full overflow-hidden rounded-2xl md:max-w-[300px] lg:max-w-[410px]">
            <figure className="relative h-[258px] w-full"><img alt="Sửa chữa độc lập" loading="lazy" decoding="async" data-nimg="fill" className="animate-fade-in duration-300" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, objectFit: 'cover', color: 'transparent' }} src="https://autoleap.com/wp-content/uploads/2025/04/image-min.png" /></figure>
            <div className="bg-neutral-800 h-full space-y-2 p-6">
              <h6 className="text-reit-gray text-[10px] font-medium tracking-[2px] whitespace-nowrap uppercase">SỬA CHỮA ĐỘC LẬP</h6>
              <h3 className="text-xl font-medium text-white">Luôn có tổ chức với phần mềm dễ sử dụng giúp quản lý công việc hàng ngày và cạnh tranh với các xưởng lớn hơn.</h3>
            </div>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
