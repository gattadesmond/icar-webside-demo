export interface CaseStudy {
  id: number;
  title: string;
  image: string;
  alt: string;
  logo?: string;
  testimonial?: string;
  author?: string;
  position?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 0,
    title: "Auto Only",
    image: "/images/partner/partner-1.jpg",
    alt: "Auto Only partner testimonial",
    logo: "/images/partner/auto-only-logo.png",
    testimonial: "Chúng tôi đã triển khai iGara cho 15 chi nhánh cùng lúc - quá trình này diễn ra rất suôn sẻ. iGara đã thực hiện đúng mọi cam kết và giúp chúng tôi tối ưu hóa quy trình quản lý garage.",
    author: "Anh Nguyễn Thái Tuy",
    position: "Giám đốc kỹ thuật"
  },
  {
    id: 1,
    title: "Tint World",
    image: "/images/partner/partner-1.webp",
    alt: "Tint World partner testimonial",
    logo: "/images/partner/partner-logo-1.webp",
    testimonial: "iGara đã giúp chúng tôi quản lý 75 địa điểm cùng lúc một cách hiệu quả. Hệ thống rất dễ sử dụng và đội ngũ hỗ trợ rất chuyên nghiệp. Chúng tôi rất hài lòng với dịch vụ.",
    author: "Anh Lê Minh Tuấn",
    position: "Giám đốc điều hành"
  },
  {
    id: 2,
    title: "Superior Auto Clinic",
    image: "/images/partner/partner-2.webp",
    alt: "Superior Auto Clinic partner testimonial",
    logo: "/images/partner/partner-logo-2.webp",
    testimonial: "Từ khi sử dụng iGara, chúng tôi đã tăng 40% hiệu suất làm việc và giảm 30% thời gian xử lý hóa đơn. Khách hàng cũng hài lòng hơn với dịch vụ nhanh chóng và chính xác.",
    author: "Chị Phạm Thị Hương",
    position: "Quản lý garage"
  },
  {
    id: 3,
    title: "University Auto",
    image: "/images/partner/partner-3.webp",
    alt: "University Auto partner testimonial",
    logo: "/images/partner/partner-logo-1.webp",
    testimonial: "iGara không chỉ giúp chúng tôi quản lý garage tốt hơn mà còn cung cấp những báo cáo chi tiết giúp đưa ra quyết định kinh doanh chính xác. Đây là giải pháp toàn diện cho ngành sửa chữa xe.",
    author: "Anh Trần Văn Đức",
    position: "Chủ garage"
  }
];
