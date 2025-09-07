import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Container from '@/components/atoms/Container';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter,
  Car,
  Wrench,
  Shield,
  Users
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      {/* Main Footer Content */}
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/igara-logo.png"
                alt="iGara Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-xl font-bold text-white">iGara</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Đối tác tin cậy trong lĩnh vực sửa chữa và bảo dưỡng xe hơi. 
              Chúng tôi cam kết mang đến dịch vụ chất lượng cao với đội ngũ 
              kỹ thuật viên chuyên nghiệp.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Dịch vụ</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Car className="h-5 w-5 text-primary" />
                <span className="text-white/80 text-sm">Bảo dưỡng định kỳ</span>
              </div>
              <div className="flex items-center space-x-3">
                <Wrench className="h-5 w-5 text-primary" />
                <span className="text-white/80 text-sm">Sửa chữa động cơ</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-white/80 text-sm">Bảo hành chính hãng</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-white/80 text-sm">Tư vấn kỹ thuật</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Liên hệ</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-white/80 text-sm">Hotline</p>
                  <p className="text-white text-sm font-medium">1900 1234</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-white/80 text-sm">Email</p>
                  <p className="text-white text-sm font-medium">info@igara.vn</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-white/80 text-sm">Địa chỉ</p>
                  <p className="text-white text-sm font-medium">123 Đường ABC, Quận 1, TP.HCM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-white/80 text-sm">Giờ làm việc</p>
                  <p className="text-white text-sm font-medium">7:00 - 20:00 (T2-CN)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Đăng ký nhận tin</h3>
            <p className="text-white/60 text-sm">
              Nhận thông tin về khuyến mãi và dịch vụ mới nhất từ iGara
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Nhập email của bạn"
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Đăng ký
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <Container className="py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2024 iGara. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Chính sách bảo mật
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Điều khoản sử dụng
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
