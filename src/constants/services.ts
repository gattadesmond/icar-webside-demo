export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    id: 'workshop',
    title: 'Tăng tốc sửa chữa với kiểm tra kỹ thuật số nhanh chóng và loại bỏ công việc thủ công cho thợ máy.',
    subtitle: 'XƯỞNG SỬA XE',
    description: 'Sử dụng công nghệ hiện đại để chẩn đoán và sửa chữa xe một cách nhanh chóng và chính xác.',
    imageUrl: 'https://autoleap.com/wp-content/uploads/2025/04/image-6-min.png',
    imageAlt: 'Xưởng sửa xe'
  },
  {
    id: 'tire-shop',
    title: 'Dễ dàng quản lý kho lốp, bán hàng và dịch vụ để giữ khách hàng luôn di chuyển.',
    subtitle: 'CỬA HÀNG LỐP XE',
    description: 'Dịch vụ thay lốp chuyên nghiệp với đầy đủ các loại lốp từ các thương hiệu uy tín.',
    imageUrl: 'https://autoleap.com/wp-content/uploads/2025/04/image-1-min.png',
    imageAlt: 'Cửa hàng lốp xe'
  },
  {
    id: 'special-repair',
    title: 'Giải pháp tùy chỉnh để quản lý tất cả các sửa chữa xe tùy chỉnh một cách dễ dàng.',
    subtitle: 'SỬA CHỮA ĐẶC BIỆT',
    description: 'Chuyên sửa chữa các loại xe đặc biệt và tùy chỉnh theo yêu cầu của khách hàng.',
    imageUrl: 'https://autoleap.com/wp-content/uploads/2025/04/image-3-min.png',
    imageAlt: 'Sửa chữa đặc biệt và tùy chỉnh'
  },
  {
    id: 'mobile-mechanic',
    title: 'Quản lý công việc sửa chữa khi di chuyển và luôn kết nối với khách hàng từ thiết bị của bạn.',
    subtitle: 'THỢ SỬA XE DI ĐỘNG',
    description: 'Dịch vụ sửa chữa tại nhà, tiện lợi và nhanh chóng cho khách hàng.',
    imageUrl: 'https://autoleap.com/wp-content/uploads/2025/04/MM_0001_DSC01843-min.png',
    imageAlt: 'Thợ sửa xe di động'
  },
  {
    id: 'general-repair',
    title: 'Quản lý tất cả các loại công việc sửa chữa xe, kho phụ tùng và lịch hẹn khách hàng tại một nơi.',
    subtitle: 'SỬA CHỮA TỔNG QUÁT',
    description: 'Dịch vụ sửa chữa toàn diện cho mọi loại xe với đội ngũ kỹ thuật viên chuyên nghiệp.',
    imageUrl: 'https://autoleap.com/wp-content/uploads/2025/04/image-5-min.png',
    imageAlt: 'Sửa chữa tổng quát'
  },
  {
    id: 'independent-repair',
    title: 'Luôn có tổ chức với phần mềm dễ sử dụng giúp quản lý công việc hàng ngày và cạnh tranh với các xưởng lớn hơn.',
    subtitle: 'SỬA CHỮA ĐỘC LẬP',
    description: 'Dịch vụ sửa chữa độc lập với quy trình chuyên nghiệp và giá cả cạnh tranh.',
    imageUrl: 'https://autoleap.com/wp-content/uploads/2025/04/image-min.png',
    imageAlt: 'Sửa chữa độc lập'
  }
];
