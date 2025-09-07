import ScorecardCard from './ScorecardCard';

interface Scorecard {
  technicalAbility: number;
  toolsEquipment: number;
  customerService: number;
  customerAmenities: number;
}

interface ScorecardSectionProps {
  garageName: string;
  scorecard: Scorecard;
  className?: string;
}

export default function ScorecardSection({ garageName, scorecard, className = '' }: ScorecardSectionProps) {
  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-white mb-6">{garageName} Scorecard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScorecardCard
          title="Khả Năng Kỹ Thuật"
          description="Chúng tôi đảm bảo nhân viên gara có kinh nghiệm, đào tạo và chứng chỉ ngành để phục vụ và sửa chữa xe của bạn một cách chuyên nghiệp."
          score={scorecard.technicalAbility}
        />
        <ScorecardCard
          title="Công Cụ & Thiết Bị"
          description="Chúng tôi xác minh rằng gara có thiết bị phù hợp, bao gồm công cụ quét, để chẩn đoán và giải quyết vấn đề của bạn."
          score={scorecard.toolsEquipment}
        />
        <ScorecardCard
          title="Dịch Vụ Khách Hàng"
          description="Các gara tham gia phải đáp ứng tiêu chuẩn cao nhất về sự hài lòng của khách hàng, được đo lường bằng phản hồi khảo sát từ khách hàng đã xác minh."
          score={scorecard.customerService}
        />
        <ScorecardCard
          title="Tiện Ích Khách Hàng"
          description="Chúng tôi đánh giá mọi khía cạnh của gara, từ tùy chọn cà phê và WiFi đến vị trí của họ, để mọi khía cạnh trong chuyến thăm của bạn đều đáp ứng kỳ vọng."
          score={scorecard.customerAmenities}
        />
      </div>
    </div>
  );
}
