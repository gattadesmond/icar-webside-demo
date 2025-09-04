# Hướng dẫn sử dụng shadcn/ui trong iGara Website

## Tổng quan

shadcn/ui đã được tích hợp thành công vào dự án iGara Website. Đây là một thư viện component tuyệt vời với thiết kế đẹp, accessible và dễ tùy chỉnh.

## Cấu hình đã thiết lập

### 1. File cấu hình
- `components.json`: Cấu hình chính của shadcn/ui
- `src/lib/utils.ts`: Utility function `cn()` để merge Tailwind classes
- `src/app/globals.css`: CSS variables và theme đã được cấu hình

### 2. Components đã cài đặt
- ✅ Button
- ✅ Card
- ✅ Input
- ✅ Label
- ✅ Badge
- ✅ Avatar
- ✅ Separator

## Cách sử dụng

### 1. Import components
```typescript
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
```

### 2. Sử dụng Button
```typescript
// Các variant có sẵn
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Các size có sẵn
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

### 3. Sử dụng Card
```typescript
<Card>
  <CardHeader>
    <CardTitle>Tiêu đề</CardTitle>
    <CardDescription>Mô tả</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Nội dung của card</p>
  </CardContent>
</Card>
```

### 4. Sử dụng Input và Label
```typescript
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input
    id="email"
    type="email"
    placeholder="Nhập email"
  />
</div>
```

### 5. Sử dụng Badge
```typescript
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

### 6. Sử dụng Avatar
```typescript
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
```

### 7. Sử dụng Separator
```typescript
<div className="space-y-2">
  <p>Nội dung phía trên</p>
  <Separator />
  <p>Nội dung phía dưới</p>
</div>

<div className="flex items-center gap-4">
  <span>Item 1</span>
  <Separator orientation="vertical" className="h-4" />
  <span>Item 2</span>
</div>
```

## Thêm components mới

### 1. Cài đặt component từ registry
```bash
npx shadcn@latest add [component-name]
```

### 2. Các component phổ biến có thể thêm
```bash
# Form components
npx shadcn@latest add form
npx shadcn@latest add select
npx shadcn@latest add textarea
npx shadcn@latest add checkbox
npx shadcn@latest add radio-group

# Layout components
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add navigation-menu
npx shadcn@latest add tabs

# Data display
npx shadcn@latest add table
npx shadcn@latest add badge
npx shadcn@latest add avatar

# Feedback
npx shadcn@latest add toast
npx shadcn@latest add alert
npx shadcn@latest add progress
```

## Tùy chỉnh theme

### 1. Thay đổi màu sắc
Chỉnh sửa CSS variables trong `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  /* ... */
}
```

### 2. Thay đổi border radius
```css
:root {
  --radius: 0.5rem; /* Thay đổi từ 0.625rem */
}
```

## Best Practices

### 1. Sử dụng utility function `cn()`
```typescript
import { cn } from "@/lib/utils";

<Button className={cn(
  "base-classes",
  condition && "conditional-classes",
  "additional-classes"
)}>
  Button
</Button>
```

### 2. Tạo component wrapper khi cần
```typescript
// components/ui/custom-button.tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CustomButtonProps {
  children: React.ReactNode;
  className?: string;
  // ... other props
}

export function CustomButton({ children, className, ...props }: CustomButtonProps) {
  return (
    <Button 
      className={cn("custom-styles", className)} 
      {...props}
    >
      {children}
    </Button>
  );
}
```

### 3. Sử dụng với form libraries
shadcn/ui tương thích tốt với:
- React Hook Form
- Zod (validation)
- React Final Form

## Troubleshooting

### 1. Component không hiển thị đúng
- Kiểm tra import path có đúng không
- Đảm bảo đã cài đặt component bằng `npx shadcn@latest add`
- Kiểm tra CSS variables trong `globals.css`

### 2. Styling không apply
- Sử dụng utility function `cn()` để merge classes
- Kiểm tra Tailwind CSS configuration
- Đảm bảo CSS variables được định nghĩa đúng

### 3. TypeScript errors
- Kiểm tra import types
- Đảm bảo đã cài đặt `@types/react` và `@types/react-dom`

## Tài liệu tham khảo

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Component Registry](https://ui.shadcn.com/docs/components)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)

## Cấu trúc thư mục sau khi cài đặt

```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── badge.tsx
│   │   ├── avatar.tsx
│   │   └── separator.tsx
│   └── demo/         # Demo components
│       └── ComponentShowcase.tsx
├── lib/
│   └── utils.ts      # Utility functions
└── app/
    ├── globals.css   # CSS variables và theme
    └── page.tsx      # Demo page
```

---

**Lưu ý**: shadcn/ui không phải là một npm package, mà là một collection của các components có thể copy vào dự án. Điều này cho phép bạn tùy chỉnh hoàn toàn các components theo nhu cầu của dự án.
