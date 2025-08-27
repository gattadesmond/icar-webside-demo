'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Menu,
  Car,
  Building2,
  Wrench,
  CarFront,
  Phone,
  FileText,
  Users,
  Target,
  Shield,
  Hammer,
  Cog,
  MessageSquare,
  Star,
  Award,
  ShoppingCart,
  Package,
  User,
} from 'lucide-react';

interface HeaderProps {
  className?: string;
}

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

export default function Header({ className = '' }: HeaderProps) {
  const menu: MenuItem[] = [
    { title: 'Trang chủ', url: '/', icon: <Car className="size-5 shrink-0" /> },
    {
      title: 'Về chúng tôi',
      url: '/about',
      items: [
        {
          title: 'Lịch sử',
          description: 'Hành trình phát triển và thành tựu',
          icon: <FileText className="size-5 shrink-0" />,
          url: '/about/history',
        },
        {
          title: 'Đội ngũ',
          description: 'Chuyên gia hàng đầu trong lĩnh vực xe hơi',
          icon: <Users className="size-5 shrink-0" />,
          url: '/about/team',
        },
        {
          title: 'Sứ mệnh',
          description: 'Mục tiêu và giá trị cốt lõi của chúng tôi',
          icon: <Target className="size-5 shrink-0" />,
          url: '/about/mission',
        },
        {
          title: 'Thành tựu',
          description: 'Những thành công và giải thưởng đạt được',
          icon: <Award className="size-5 shrink-0" />,
          url: '/about/achievements',
        },
      ],
    },
    {
      title: 'Dịch vụ',
      url: '/services',
      items: [
        {
          title: 'Bảo hiểm xe',
          description: 'Bảo vệ toàn diện cho xe của bạn',
          icon: <Shield className="size-5 shrink-0" />,
          url: '/services/insurance',
        },
        {
          title: 'Sửa chữa',
          description: 'Sửa chữa chuyên nghiệp với đội ngũ kỹ thuật viên giàu kinh nghiệm',
          icon: <Hammer className="size-5 shrink-0" />,
          url: '/services/repair',
        },
        {
          title: 'Bảo dưỡng',
          description: 'Bảo dưỡng định kỳ để xe luôn hoạt động tốt nhất',
          icon: <Cog className="size-5 shrink-0" />,
          url: '/services/maintenance',
        },
        {
          title: 'Tư vấn',
          description: 'Tư vấn chuyên môn từ các chuyên gia hàng đầu',
          icon: <MessageSquare className="size-5 shrink-0" />,
          url: '/services/consultation',
        },
        {
          title: 'Đánh giá xe',
          description: 'Đánh giá khách quan và chính xác tình trạng xe',
          icon: <Star className="size-5 shrink-0" />,
          url: '/services/evaluation',
        },
      ],
    },
    {
      title: 'Sản phẩm',
      url: '/products',
      items: [
        {
          title: 'Xe mới',
          description: 'Xe mới 100% từ các hãng uy tín',
          icon: <Car className="size-5 shrink-0" />,
          url: '/products/new',
        },
        {
          title: 'Xe đã qua sử dụng',
          description: 'Xe đã kiểm định chất lượng cao',
          icon: <Car className="size-5 shrink-0" />,
          url: '/products/used',
        },
        {
          title: 'Phụ tùng',
          description: 'Phụ tùng chính hãng chất lượng cao',
          icon: <Package className="size-5 shrink-0" />,
          url: '/products/parts',
        },
        {
          title: 'Phụ kiện',
          description: 'Phụ kiện cao cấp cho xe hơi',
          icon: <ShoppingCart className="size-5 shrink-0" />,
          url: '/products/accessories',
        },
      ],
    },
    { title: 'Liên hệ', url: '/contact', icon: <Phone className="size-5 shrink-0" /> },
  ];

  const auth = {
    login: { title: 'Đăng nhập', url: '/login' },
    signup: { title: 'Tư vấn miễn phí', url: '/consultation' },
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm px-5'>
      <div className="mx-auto  max-w-screen-xl  px-5 py-3   xl:px-20">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-9 w-9">
                <Image
                  src="/images/igara-logo.png"
                  alt="IGARA Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <div className="flex items-center">
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <Link href={auth.login.url}>{auth.login.title}</Link>
            </Button>
            <Button asChild size="sm">
              <Link href={auth.signup.url}>{auth.signup.title}</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-24">
                <Image
                  src="/images/igara-logo.png"
                  alt="IGARA Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-center gap-2">
                      <div className="relative h-8 w-24">
                        <Image
                          src="/images/igara-logo.png"
                          alt="IGARA Logo"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <Link href={auth.login.url}>{auth.login.title}</Link>
                    </Button>
                    <Button asChild>
                      <Link href={auth.signup.url}>{auth.signup.title}</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} >
              <SubMenuLink item={subItem}/>
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className=" hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      className="hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors w-[240px]"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};
