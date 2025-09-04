'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Car, Car as UsedCar, Zap, Smartphone, ArrowRight, Star, AlignRightIcon, ChevronRightIcon, CarFrontIcon, WrenchIcon, SprayCanIcon, BubblesIcon } from 'lucide-react';

interface ServiceMenuProps {
    className?: string;
}

const services = [
    {
        id: 1,
        name: 'Shop New',
        icon: Car,
        description: 'Xe mới chính hãng',
        color: 'text-orange-400',
        glowColor: 'from-orange-500/20 to-orange-600/10',
        stars: true
    },
    {
        id: 2,
        name: 'Shop Used',
        icon: UsedCar,
        description: 'Xe đã qua sử dụng',
        color: 'text-pink-400',
        glowColor: 'from-pink-500/20 to-pink-600/10',
        priceTag: true
    },
    {
        id: 3,
        name: 'Shop Electric',
        icon: Zap,
        description: 'Xe điện hiện đại',
        color: 'text-cyan-400',
        glowColor: 'from-cyan-500/20 to-cyan-600/10',
        lightning: true
    },
    {
        id: 4,
        name: 'Buy Online',
        icon: Smartphone,
        description: 'Mua hàng trực tuyến',
        color: 'text-blue-400',
        glowColor: 'from-blue-500/20 to-blue-600/10',
        isNew: true,
        checkmark: true
    }
];

export default function ServiceMenu({ className = '' }: ServiceMenuProps) {
    return (
        <div className="hidden-sm-down mx-auto flex flex-wrap justify-center gap-3 pt-3 pb-4 min-[440px]:inline-flex min-[440px]:max-w-[330px] min-[640px]:flex-nowrap">
            <a
                className="linkable relative flex h-[132px] w-full flex-col items-center justify-center gap-2 rounded-[10px] bg-[rgba(100,100,100,0.60)] bg-[radial-gradient(circle_at_top,_rgba(255,100,0,0.15)_0%,_rgba(230,230,230,0.1)_39%,_rgba(255,255,255,0)_100%)] shadow-[2px_2px_7px_0_rgba(1,1,1,0.15)] backdrop-blur-md transition-[transition:box-shadow] duration-300 ease-[cubic-bezier(0.64,0.04,0.35,1)] hover:shadow-[2px_2px_6px_0_rgba(1,1,1,0.05),2px_4px_9px_0_rgba(1,1,1,0.15)] min-[280px]:w-[calc(50%_-_10px)] min-[440px]:max-w-[25%] min-[440px]:min-w-[132px] md:bg-[rgba(0,0,0,0.60)]"
                data-test="homepageHeroPanelShopNewButton"
                href="/shop/new/?filterType=brand"
            >

                <CarFrontIcon className="size-8 text-orange-400" />
                <span className="flex items-center  text-white">
                    Gara ô tô
                    <ChevronRightIcon className="w-4 h-4" />
                </span>
            </a>
            <a
                className="linkable relative flex h-[132px] w-full flex-col items-center justify-center gap-2 rounded-[10px] bg-[rgba(100,100,100,0.60)] bg-[radial-gradient(circle_at_top,_rgba(235,0,139,0.15)_0%,_rgba(230,230,230,0.1)_39%,_rgba(255,255,255,0)_100%)] shadow-[2px_2px_7px_0_rgba(1,1,1,0.15)] backdrop-blur-md transition-[transition:box-shadow] duration-300 ease-[cubic-bezier(0.64,0.04,0.35,1)] hover:shadow-[2px_2px_6px_0_rgba(1,1,1,0.05),2px_4px_9px_0_rgba(1,1,1,0.15)] min-[280px]:w-[calc(50%_-_10px)] min-[440px]:max-w-[25%] min-[440px]:min-w-[132px] md:bg-[rgba(0,0,0,0.60)]"
                data-test="homepageHeroPanelShopUsedButton"
                href="/used-cars-for-sale/listings/"
            >
                <WrenchIcon className="size-8 text-pink-400" />
                <span className="flex items-center  text-white">
                    Cứu hộ ô tô
                    <ChevronRightIcon className="w-4 h-4" />
                </span>
            </a>
            <a
                className="linkable relative flex h-[132px] w-full flex-col items-center justify-center gap-2 rounded-[10px] bg-[rgba(100,100,100,0.60)] bg-[radial-gradient(circle_at_top,_rgba(6,174,170,0.15)_0%,_rgba(230,230,230,0.1)_39%,_rgba(255,255,255,0)_100%)] shadow-[2px_2px_7px_0_rgba(1,1,1,0.15)] backdrop-blur-md transition-[transition:box-shadow] duration-300 ease-[cubic-bezier(0.64,0.04,0.35,1)] hover:shadow-[2px_2px_6px_0_rgba(1,1,1,0.05),2px_4px_9px_0_rgba(1,1,1,0.15)] min-[280px]:w-[calc(50%_-_10px)] min-[440px]:max-w-[25%] min-[440px]:min-w-[132px] md:bg-[rgba(0,0,0,0.60)]"
                data-test="homepageHeroPanelShopElectricButton"
                href="/electric/"
            >
                <SprayCanIcon className="size-8 text-cyan-400" />
                <span className="flex items-center text-white">
                    Độ xe
                    <ChevronRightIcon className="w-4 h-4" />
                </span>
            </a>
            <a
                className="linkable relative flex h-[132px] w-full flex-col items-center justify-center gap-2 rounded-[10px] bg-[rgba(100,100,100,0.60)] bg-[radial-gradient(circle_at_top,_rgba(16,157,231,0.15)_0%,_rgba(230,230,230,0.1)_39%,_rgba(255,255,255,0)_100%)] shadow-[2px_2px_7px_0_rgba(1,1,1,0.15)] backdrop-blur-md transition-[transition:box-shadow] duration-300 ease-[cubic-bezier(0.64,0.04,0.35,1)] hover:shadow-[2px_2px_6px_0_rgba(1,1,1,0.05),2px_4px_9px_0_rgba(1,1,1,0.15)] min-[280px]:w-[calc(50%_-_10px)] min-[440px]:max-w-[25%] min-[440px]:min-w-[132px] md:bg-[rgba(0,0,0,0.60)]"
                data-test="homepageHeroPanelBuyOnlineButton"
                href="/used-cars-for-sale/listings/?buyOnline=true"
            >
                <BubblesIcon className="size-8 text-blue-400" />
                <span className="flex items-center text-white">
                    Rửa xe
                    <ChevronRightIcon className="w-4 h-4" />
                </span>
            </a>
        </div>

    );
}
