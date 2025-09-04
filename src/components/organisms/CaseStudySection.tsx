'use client';

import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
import SectionHeading from '@/components/molecules/SectionHeading';
import CaseStudyCard from '@/components/molecules/CaseStudyCard';
import { caseStudies } from '@/constants/caseStudies';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

export default function CaseStudySection() {
    const [api, setApi] = useState<CarouselApi>();


    // Autoplay plugin
    const plugin = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    // Update current slide when carousel changes
    React.useEffect(() => {
        if (!api) {
            return;
        }

    }, [api]);

    return (
        <section className="py-16 md:py-24 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


                <SectionHeading
                    subtitle="GARAGE THẬT. KẾT QUẢ THẬT."
                    title="Xem tại sao hơn 200 garage tin tưởng iGara."
                    description="Lắng nghe từ những chủ garage thực tế đã chuyển sang phần mềm sửa chữa xe hàng đầu."
                    textAlign="center"
                    maxWidth="xl"
                />

                {/* Case Study Carousel */}
                <div className="relative mt-16">
                    <Carousel
                        setApi={setApi}
                        plugins={[plugin.current]}
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        className="w-full [&>div]:overflow-visible"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent className="-ml-4 md:-ml-6 ">
                            {caseStudies.map((study) => (
                                <CarouselItem key={study.id} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-[550px]">
                                    <CaseStudyCard study={study} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                    {/* Custom Navigation Buttons - Bottom Left */}
                    <div className="flex justify-start mt-8 space-x-4">
                        <button
                            onClick={() => api?.scrollPrev()}
                            className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-600 cursor-pointer transition-colors duration-200"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-100" />
                        </button>
                        <button
                            onClick={() => api?.scrollNext()}
                            className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-600 cursor-pointer transition-colors duration-200"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-100" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
