'use client';

import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
import SectionHeading from '@/components/molecules/SectionHeading';
import BlogCard from '@/components/molecules/BlogCard';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/constants/blogPosts';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

interface BlogSectionProps {
    className?: string;
}

export default function BlogSection({ className = '' }: BlogSectionProps) {
    const [api, setApi] = useState<CarouselApi>();

    // Autoplay plugin
    const plugin = useRef(
        Autoplay({ delay: 6000, stopOnInteraction: true })
    );

    return (
        <section className={`py-16 md:py-24 overflow-hidden md:pt-0 pt-0 ${className}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    subtitle="BLOG & TIN TỨC"
                    title="Cập nhật kiến thức mới nhất"
                    description="Khám phá những bài viết chuyên sâu về công nghệ, kinh doanh và xu hướng trong ngành sửa chữa xe hơi."
                    textAlign="center"
                    maxWidth="xl"
                />

                {/* Blog Carousel */}
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
                        <CarouselContent className="-ml-4 md:-ml-6">
                            {blogPosts.map((post) => (
                                <CarouselItem key={post.id} className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-[400px]">
                                    <BlogCard post={post} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                    {/* Custom Navigation Buttons */}
                    {/* <div className="flex justify-center mt-8 space-x-4">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => api?.scrollPrev()}
                            className="w-12 h-12 bg-neutral-800 border-neutral-700 hover:bg-neutral-600"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-100" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => api?.scrollNext()}
                            className="w-12 h-12 bg-neutral-800 border-neutral-700 hover:bg-neutral-600"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-100" />
                        </Button>
                    </div> */}

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

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Button size="lg" className="px-8">
                        Xem tất cả bài viết
                    </Button>
                </div>
            </div>
        </section>
    );
}
