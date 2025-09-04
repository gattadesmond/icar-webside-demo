export interface WorkflowStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    id: 'step-1',
    stepNumber: 1,
    title: 'Tiếp nhận xe, ghi nhận dấu hiệu ban đầu',
    description: 'Kiểm tra tổng quan xe, ghi nhận tình trạng hiện tại và các dấu hiệu bất thường. Đảm bảo minh bạch và chính xác trong việc đánh giá ban đầu.',
    imageUrl: '/images/step-1.jpg',
    imageAlt: 'Tiếp nhận xe, ghi nhận dấu hiệu ban đầu'
  },
  {
    id: 'step-2',
    stepNumber: 2,
    title: 'Tiếp nhận yêu cầu và tư vấn kỹ thuật',
    description: 'Lắng nghe yêu cầu của khách hàng và tư vấn chuyên môn từ đội ngũ kỹ thuật viên. Đề xuất giải pháp tối ưu với chi phí hợp lý và thời gian phù hợp.',
    imageUrl: '/images/step-2.jpg',
    imageAlt: 'Tiếp nhận yêu cầu và tư vấn kỹ thuật'
  },
  {
    id: 'step-3',
    stepNumber: 3,
    title: 'Sửa chữa và bảo dưỡng chuyên nghiệp',
    description: 'Thực hiện sửa chữa theo đúng quy trình kỹ thuật với thiết bị hiện đại. Đảm bảo chất lượng hoàn thiện và kiểm tra kỹ lưỡng trước khi bàn giao xe.',
    imageUrl: '/images/step-3.jpg',
    imageAlt: 'Sửa chữa và bảo dưỡng chuyên nghiệp'
  }
];
