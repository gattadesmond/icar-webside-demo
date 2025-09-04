import Image from 'next/image';

interface WorkflowStepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
}

export default function WorkflowStepCard({
  stepNumber,
  title,
  description,
  imageUrl,
  imageAlt,
  className = ''
}: WorkflowStepCardProps) {
  return (
    <div className={`bg-neutral-800 h-fit w-full max-w-[410px] grow overflow-hidden rounded-2xl ${className}`}>
      <figure className="relative h-[220px] w-full">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover animate-fade-in duration-300"
          priority
        />
      </figure>
      <div className="min-h-[calc(100%-220px)] space-y-2 p-6">
        <h6 className="text-gray-300 text-xs font-medium whitespace-nowrap uppercase">
          BƯỚC {stepNumber}
        </h6>
        <h3 className="mt-0 text-start text-lg font-medium">
          {title}
        </h3>
        <p className="text-neutral-300 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
