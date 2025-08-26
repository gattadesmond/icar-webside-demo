'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { 
  Menu, 
  X, 
  Car, 
  User, 
  Settings, 
  HelpCircle,
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
} from 'lucide-react';

interface HeaderProps {
  className?: string;
}

interface SubItem {
  name: string;
  href: string;
}

interface DropdownItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  hasSubItems?: boolean;
  subItems?: SubItem[];
}

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

export default function Header({ className = '' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationItems: NavigationItem[] = [
    { name: 'Trang chủ', href: '/', icon: Car },
    { 
      name: 'Về chúng tôi', 
      href: '/about',
      icon: Building2,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Lịch sử', href: '/about/history', icon: FileText },
        { name: 'Đội ngũ', href: '/about/team', icon: Users },
        { name: 'Sứ mệnh', href: '/about/mission', icon: Target },
        { name: 'Thành tựu', href: '/about/achievements', icon: Award },
      ]
    },
    { 
      name: 'Dịch vụ', 
      href: '/services',
      icon: Wrench,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Bảo hiểm xe', href: '/services/insurance', icon: Shield },
        { name: 'Sửa chữa', href: '/services/repair', icon: Hammer },
        { name: 'Bảo dưỡng', href: '/services/maintenance', icon: Cog },
        { name: 'Tư vấn', href: '/services/consultation', icon: MessageSquare },
        { name: 'Đánh giá xe', href: '/services/evaluation', icon: Star },
      ]
    },
    { 
      name: 'Sản phẩm', 
      href: '/products',
      icon: CarFront,
      hasDropdown: true,
      dropdownItems: [
        { 
          name: 'Xe mới', 
          href: '/products/new', 
          icon: Car,
          hasSubItems: true,
          subItems: [
            { name: 'Xe sedan', href: '/products/new/sedan' },
            { name: 'Xe SUV', href: '/products/new/suv' },
            { name: 'Xe thể thao', href: '/products/new/sports' },
          ]
        },
        { 
          name: 'Xe đã qua sử dụng', 
          href: '/products/used', 
          icon: Car,
          hasSubItems: true,
          subItems: [
            { name: 'Xe đã kiểm định', href: '/products/used/certified' },
            { name: 'Xe nhập khẩu', href: '/products/used/imported' },
            { name: 'Xe trong nước', href: '/products/used/domestic' },
          ]
        },
        { name: 'Phụ tùng', href: '/products/parts', icon: Package },
        { name: 'Phụ kiện', href: '/products/accessories', icon: ShoppingCart },
      ]
    },
    { name: 'Liên hệ', href: '/contact', icon: Phone },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border/50 z-50 transition-all duration-300 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Car className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">ICAR</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <NavigationMenuTrigger className="flex items-center gap-1">
                          {item.icon && <item.icon className="h-4 w-4" />}
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            <li className="row-span-3">
                              <NavigationMenuLink asChild>
                                <Link
                                  className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                                  href={item.href}
                                >
                                  <div className="mb-2 mt-4 text-lg font-medium flex items-center gap-2">
                                    {item.icon && <item.icon className="h-5 w-5" />}
                                    {item.name}
                                  </div>
                                  <p className="text-sm leading-tight text-muted-foreground">
                                    Khám phá các dịch vụ và sản phẩm chất lượng cao của chúng tôi.
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            {item.dropdownItems?.map((dropdownItem) => (
                              <ListItem
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                title={dropdownItem.name}
                                icon={dropdownItem.icon}
                              >
                                                                 {dropdownItem.hasSubItems && dropdownItem.subItems ? (
                                   <div className="text-sm text-muted-foreground">
                                     {dropdownItem.subItems.map((subItem) => (
                                      <div key={subItem.name} className="mt-1">
                                        <Link 
                                          href={subItem.href}
                                          className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                          {subItem.name}
                                        </Link>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <span className="text-sm text-muted-foreground">
                                    Dịch vụ chất lượng cao
                                  </span>
                                )}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href={item.href} className="flex items-center gap-1">
                          {item.icon && <item.icon className="h-4 w-4" />}
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    Tài khoản
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <ListItem href="/login" title="Đăng nhập" icon={User}>
                        Truy cập vào tài khoản của bạn
                      </ListItem>
                      <ListItem href="/register" title="Đăng ký" icon={Settings}>
                        Tạo tài khoản mới
                      </ListItem>
                      <ListItem href="/profile" title="Hồ sơ cá nhân" icon={User}>
                        Quản lý thông tin cá nhân
                      </ListItem>
                      <ListItem href="/help" title="Trợ giúp" icon={HelpCircle}>
                        Hỗ trợ khách hàng
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button size="sm" className="bg-primary hover:bg-primary/90 flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Tư vấn miễn phí
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2"
              aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md border-t border-border/50">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200 flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon && <item.icon className="h-4 w-4" />}
                    {item.name}
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <div key={dropdownItem.name}>
                          <Link
                            href={dropdownItem.href}
                            className="text-muted-foreground/80 hover:text-primary block px-3 py-1 text-sm transition-colors duration-200 flex items-center gap-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.icon && <dropdownItem.icon className="h-3 w-3" />}
                            • {dropdownItem.name}
                          </Link>
                          {dropdownItem.hasSubItems && dropdownItem.subItems && (
                            <div className="ml-4 space-y-1">
                              {dropdownItem.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="text-muted-foreground/60 hover:text-primary block px-3 py-1 text-xs transition-colors duration-200"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  ◦ {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2 space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Đăng nhập
                </Button>
                <Button size="sm" className="w-full justify-start">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Tư vấn miễn phí
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { 
  href: string;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4" />}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
