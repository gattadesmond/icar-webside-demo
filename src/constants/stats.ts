import { Users, Car, Wrench, Star } from 'lucide-react';

export interface Stat {
  id: string;
  icon: typeof Users;
  value: string;
  label: string;
}

export const stats: Stat[] = [
  {
    id: 'customers',
    icon: Users,
    value: '10,000+',
    label: 'Khách hàng hài lòng'
  },
  {
    id: 'cars-maintained',
    icon: Car,
    value: '5,000+',
    label: 'Xe đã bảo dưỡng'
  },
  {
    id: 'maintenance-count',
    icon: Wrench,
    value: '15,000+',
    label: 'Lần bảo dưỡng'
  },
  {
    id: 'rating',
    icon: Star,
    value: '4.9/5',
    label: 'Đánh giá trung bình'
  }
];
