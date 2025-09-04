import SectionHeading from '@/components/molecules/SectionHeading';
import ServiceCard from '@/components/molecules/ServiceCard';
import { services } from '@/constants/services';

interface ServicesSectionProps {
  className?: string;
}

export default function ServicesSection({ className = '' }: ServicesSectionProps) {
  return (
    <section className={`space-y-5 px-5 py-10 md:space-y-20 md:px-16 md:py-20 xl:px-20 ${className}`}>
      <SectionHeading
        subtitle="DỊCH VỤ CỦA CHÚNG TÔI"
        title="Giải pháp toàn diện cho xe"
        description="Dịch vụ sửa chữa xe chuyên nghiệp để giữ cho xe của bạn hoạt động mượt mà và an toàn."
        textAlign="center"
        maxWidth="xl"
      />
      
      <ul className="flex max-w-screen-xl flex-wrap justify-center gap-6 md:mx-auto">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
            imageUrl={service.imageUrl}
            imageAlt={service.imageAlt}
          />
        ))}
      </ul>
    </section>
  );
}
