import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main' | 'article' | 'header' | 'footer';
}

export default function Container({ 
  children, 
  className = '', 
  as: Component = 'div' 
}: ContainerProps) {
  return (
    <Component 
      className={cn(
        'mx-auto max-w-screen-xl px-5 py-10 md:px-16 md:py-20 xl:px-20',
        className
      )}
    >
      {children}
    </Component>
  );
}
