import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { BlogPost } from '@/constants/blogPosts';

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export default function BlogCard({ post, className = '' }: BlogCardProps) {
  return (
    <article className={`group cursor-pointer transition-transform duration-300 hover:scale-105 ${className}`}>
      <div className="space-y-4">
        {/* Blog Image */}
        <div className="relative h-48 md:h-56 overflow-hidden rounded-2xl">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge variant="default" className="bg-primary text-white">
              {post.category}
            </Badge>
          </div>
        </div>
        
        {/* Blog Content */}
        <div className="space-y-3">
          {/* Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          
          {/* Description */}
          <p className="text-neutral-300 text-sm leading-relaxed line-clamp-3">
            {post.description}
          </p>
          
          {/* Author Info */}
          <div className="flex items-center space-x-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={post.authorAvatar}
                alt={`${post.author} avatar`}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-neutral-300 text-sm">
                <span className="font-medium">{post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.publishDate}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
