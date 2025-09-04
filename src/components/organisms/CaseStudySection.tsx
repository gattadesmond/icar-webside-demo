'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
import SectionHeading from '@/components/molecules/SectionHeading';
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
                    maxWidth="lg"
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
                                    <div className="relative group cursor-pointer transition-transform duration-300 overflow-hidden ">
                                        <div className="relative  rounded-lg overflow-hidden shadow-lg h-64 md:h-80">
                                            <Image
                                                fill
                                                src={study.image}
                                                alt={study.alt}
                                                className="w-full h-full object-cover"
                                            />
                                            {/* Overlay - Only visible on hover */}
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-red-500/40 transition-all duration-300" />

                                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />

                                            {/* Partner Logo - Top Left */}
                                            {study.logo && (
                                                <div className="absolute top-4 left-4 w-full">
                                                    <div className=" w-full h-8  flex items-center justify-center p-2">
                                                        <Image
                                                            src={study.logo}
                                                            alt={`${study.title} logo`}
                                                            fill
                                                            className="object-contain object-left"
                                                        />
                                                    </div>
                                                </div>
                                            )}


                                            {/* Testimonial Content - Always Visible for first card */}
                                            {study.testimonial && (
                                                <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-300 pb-12 transform translate-y-10 group-hover:translate-y-0">
                                                    <blockquote className="text-white text-sm md:text-base leading-relaxed mb-4">
                                                        &ldquo;{study.testimonial}&rdquo;
                                                    </blockquote>
                                                    <div className="text-white">
                                                        <div className="font-semibold">{study.author}</div>
                                                        <div className="text-sm opacity-80">{study.position}</div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Watch Video Link - Bottom Left */}
                                            <div className="absolute bottom-4 left-5 right-5">
                                                <div className="text-white text-sm  font-medium hover:underline cursor-pointer flex items-center space-x-2">
                                                    <span>Xem chi tiết</span> <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
