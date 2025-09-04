import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
}

export default function ServiceCard({
  title,
  subtitle,
  description,
  imageUrl,
  imageAlt,
  className = ''
}: ServiceCardProps) {
  return (
    <li className={`w-full overflow-hidden rounded-2xl md:max-w-[300px] lg:max-w-[410px] ${className}`}>
      <figure className="relative h-[258px] w-full">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="animate-fade-in duration-300 object-cover"
          loading="lazy"
        />
      </figure>
      <div className="bg-neutral-800 h-full space-y-2 p-6">
        <h6 className="text-gray-300 text-[10px] font-medium tracking-[2px] whitespace-nowrap uppercase">
          {subtitle}
        </h6>
        <h3 className="text-xl font-medium text-white">
          {title}
        </h3>
        <p className="text-neutral-300 text-sm">
          {description}
        </p>
      </div>
    </li>
  );
}
