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



      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-20">
        {/* Components Demo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Button Demo */}
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>
                Các variant khác nhau của Button component
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </CardContent>
          </Card>

          {/* Input Demo */}
          <Card>
            <CardHeader>
              <CardTitle>Input Fields</CardTitle>
              <CardDescription>
                Form inputs với labels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="search">Search</Label>
                <Input
                  id="search"
                  type="search"
                  placeholder="Search..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Card Demo */}
          <Card>
            <CardHeader>
              <CardTitle>Card Component</CardTitle>
              <CardDescription>
                Card với header, content và footer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Đây là nội dung của card. Bạn có thể thêm bất kỳ nội dung nào vào đây.
              </p>
            </CardContent>
          </Card>

          {/* Interactive Demo */}
          <Card>
            <CardHeader>
              <CardTitle>Interactive Demo</CardTitle>
              <CardDescription>
                Form đơn giản với validation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Tên</Label>
                <Input
                  id="name"
                  placeholder="Nhập tên của bạn"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Nhập số điện thoại"
                />
              </div>
              <Button className="w-full">
                Gửi thông tin
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Component Showcase */}
        <div className="mt-16">
          <Separator className="my-8" />
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Component Showcase
            </h2>
            <p className="text-lg text-muted-foreground">
              Xem thêm các component khác từ shadcn/ui
            </p>
          </div>
          <ComponentShowcase />
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Được xây dựng với Next.js 15, TypeScript, Tailwind CSS và shadcn/ui
          </p>
        </div>
      </div>
    </div>
  );
}
