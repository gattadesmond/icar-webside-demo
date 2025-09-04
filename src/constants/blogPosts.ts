export interface BlogPost {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  author: string;
  authorAvatar: string;
  publishDate: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "Công nghệ",
    title: "Xu hướng công nghệ sửa chữa xe 2025",
    description: "Khám phá những công nghệ mới nhất đang thay đổi ngành sửa chữa xe hơi và cách chúng tác động đến garage.",
    image: "/images/step-1.jpg",
    imageAlt: "Công nghệ sửa chữa xe hiện đại",
    author: "Nguyễn Minh Tuấn",
    authorAvatar: "/images/partner/partner-1.jpg",
    publishDate: "15 Tháng 1, 2025"
  },
  {
    id: 2,
    category: "Kinh doanh",
    title: "7 bước tối ưu hóa quy trình garage",
    description: "Hướng dẫn chi tiết cách tối ưu hóa quy trình làm việc trong garage để tăng hiệu suất và lợi nhuận.",
    image: "/images/step-2.jpg",
    imageAlt: "Quy trình tối ưu hóa garage",
    author: "Trần Thị Hương",
    authorAvatar: "/images/partner/partner-2.webp",
    publishDate: "12 Tháng 1, 2025"
  },
  {
    id: 3,
    category: "Dịch vụ",
    title: "Tương lai của dịch vụ sửa chữa xe",
    description: "Dự đoán về tương lai của ngành dịch vụ sửa chữa xe và những thay đổi mà chủ garage cần chuẩn bị.",
    image: "/images/step-3.jpg",
    imageAlt: "Tương lai dịch vụ sửa chữa xe",
    author: "Lê Văn Đức",
    authorAvatar: "/images/partner/partner-3.webp",
    publishDate: "10 Tháng 1, 2025"
  },
  {
    id: 4,
    category: "Công nghệ",
    title: "AI trong chẩn đoán xe hơi",
    description: "Cách trí tuệ nhân tạo đang cách mạng hóa việc chẩn đoán và sửa chữa xe hơi hiện đại.",
    image: "/images/feature-1.png",
    imageAlt: "AI chẩn đoán xe hơi",
    author: "Phạm Thị Lan",
    authorAvatar: "/images/partner/partner-1.webp",
    publishDate: "8 Tháng 1, 2025"
  },
  {
    id: 5,
    category: "Kinh doanh",
    title: "Chiến lược marketing cho garage",
    description: "Những chiến lược marketing hiệu quả giúp garage thu hút khách hàng mới và giữ chân khách hàng cũ.",
    image: "/images/feature-2.png",
    imageAlt: "Marketing cho garage",
    author: "Hoàng Minh Quân",
    authorAvatar: "/images/partner/partner-2.webp",
    publishDate: "5 Tháng 1, 2025"
  }
];
