import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function ComponentShowcase() {
  return (
    <div className="space-y-8">
      {/* Badge Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Badges</CardTitle>
          <CardDescription>
            Các loại badge khác nhau
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default" className="bg-blue-500">Custom Blue</Badge>
            <Badge variant="default" className="bg-green-500">Success</Badge>
            <Badge variant="default" className="bg-yellow-500">Warning</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Avatar Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Avatars</CardTitle>
          <CardDescription>
            Avatar với hình ảnh và fallback
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
              <AvatarFallback>VR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>IC</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="h-12 w-12">
              <AvatarFallback>IC</AvatarFallback>
            </Avatar>
          </div>
        </CardContent>
      </Card>

      {/* Separator Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Separators</CardTitle>
          <CardDescription>
            Đường phân cách nội dung
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p>Nội dung phía trên</p>
            <Separator />
            <p>Nội dung phía dưới</p>
          </div>
          <div className="flex items-center gap-4">
            <span>Item 1</span>
            <Separator orientation="vertical" className="h-4" />
            <span>Item 2</span>
            <Separator orientation="vertical" className="h-4" />
            <span>Item 3</span>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Form Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Form với Validation</CardTitle>
          <CardDescription>
            Form đơn giản với các component shadcn/ui
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Họ và tên</Label>
              <Input id="firstName" placeholder="Nhập họ và tên" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="example@email.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Số điện thoại</Label>
            <Input id="phone" type="tel" placeholder="0123456789" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Tin nhắn</Label>
            <Input id="message" placeholder="Nhập tin nhắn của bạn" />
          </div>
          <div className="flex gap-2">
            <Button type="submit" className="flex-1">
              Gửi tin nhắn
            </Button>
            <Button variant="outline">
              Hủy
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tổng đơn hàng</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +20.1% so với tháng trước
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Doanh thu</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +180.1% so với tháng trước
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Khách hàng mới</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 so với tháng trước
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
