'use client';

import { ChevronRightIcon, CarFrontIcon, WrenchIcon, SprayCanIcon, BubblesIcon } from 'lucide-react';

interface ServiceMenuProps {
    className?: string;
}

interface ServiceItem {
    id: number;
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    gradient: string;
    href: string;
    testId: string;
}

const services: ServiceItem[] = [
    {
        id: 1,
        name: 'Gara ô tô',
        icon: CarFrontIcon,
        color: 'text-orange-400',
        gradient: 'rgba(255,100,0,0.15)',
        href: '/shop/new/?filterType=brand',
        testId: 'homepageHeroPanelShopNewButton'
    },
    {
        id: 2,
        name: 'Cứu hộ ô tô',
        icon: WrenchIcon,
        color: 'text-pink-400',
        gradient: 'rgba(235,0,139,0.15)',
        href: '/used-cars-for-sale/listings/',
        testId: 'homepageHeroPanelShopUsedButton'
    },
    {
        id: 3,
        name: 'Độ xe',
        icon: SprayCanIcon,
        color: 'text-cyan-400',
        gradient: 'rgba(6,174,170,0.15)',
        href: '/electric/',
        testId: 'homepageHeroPanelShopElectricButton'
    },
    {
        id: 4,
        name: 'Rửa xe',
        icon: BubblesIcon,
        color: 'text-blue-400',
        gradient: 'rgba(16,157,231,0.15)',
        href: '/used-cars-for-sale/listings/?buyOnline=true',
        testId: 'homepageHeroPanelBuyOnlineButton'
    }
];

// Common styles
const baseCardStyles = `
    linkable relative flex py-8 w-full flex-col items-center justify-center gap-2 
    rounded-[10px] backdrop-blur-md 
    shadow-[2px_2px_7px_0_rgba(1,1,1,0.15)] 
    transition-[box-shadow] duration-300 ease-[cubic-bezier(0.64,0.04,0.35,1)] 
    hover:shadow-[2px_2px_6px_0_rgba(1,1,1,0.05),2px_4px_9px_0_rgba(1,1,1,0.15)] 
    min-[280px]:w-[calc(50%_-_10px)] min-[440px]:max-w-[25%] min-[440px]:min-w-[132px] 
    bg-[rgba(255,255,255,0.05)]
`;

const containerStyles = `
    hidden-sm-down mx-auto flex flex-wrap justify-center gap-3 pt-3 pb-4 
    min-[440px]:inline-flex min-[440px]:max-w-[330px] min-[640px]:flex-nowrap
`;

// Helper function to generate card styles
const getCardStyles = (gradient: string) => 
    `${baseCardStyles} bg-[radial-gradient(circle_at_top,_${gradient}_0%,_rgba(230,230,230,0.1)_39%,_rgba(255,255,255,0)_100%)]`;

// Service card component
const ServiceCard = ({ service }: { service: ServiceItem }) => {
    const IconComponent = service.icon;
    
    return (
        <a
            className={getCardStyles(service.gradient)}
            data-test={service.testId}
            href={service.href}
        >
            <IconComponent className={`size-8 ${service.color}`} />
            <div className="flex text-white/90 items-center space-x-0.5 whitespace-nowrap text-sm">
                <span>{service.name}</span>
                <ChevronRightIcon className="w-4 h-4" />
            </div>
        </a>
    );
};

export default function ServiceMenu({ className = '' }: ServiceMenuProps) {
    return (
        <div className={`${containerStyles} ${className}`}>
            {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
            ))}
        </div>
    );
}
