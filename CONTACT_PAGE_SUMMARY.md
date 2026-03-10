# Contact 页面已成功添加

## 访问地址
http://localhost:3002/contact

## 已添加的文件

### 页面文件
- `src/app/contact/page.tsx` - 联系页面主组件
- `src/app/contact/layout.tsx` - 页面布局和元数据

### 组件
- `src/components/contact-form.tsx` - 联系表单组件
- `src/components/ui/input.tsx` - 输入框组件
- `src/components/ui/textarea.tsx` - 文本域组件

### API 路由
- `src/app/api/contact/route.ts` - 处理表单提交
- `src/app/api/contact-info/route.ts` - 返回联系信息

### 配置
- `.env.local.example` - 环境变量模板
- 更新了 `src/lib/data.ts` 添加 getContactInfo 函数
- 更新了 `src/app/layout.tsx` 添加 Toaster 组件

## 已安装的依赖
- resend - 邮件服务
- @marsidev/react-turnstile - Cloudflare 验证
- sonner - Toast 通知

## 需要配置

创建 `.env.local` 文件并添加：

```env
RESEND_API_KEY="your_key"
RESEND_FROM_EMAIL="onboarding@resend.dev"
RESEND_TO_EMAIL="your_email@example.com"
NEXT_PUBLIC_TURNSTILE_SITE_KEY="your_key"
TURNSTILE_SECRET_KEY="your_key"
```

## 获取 API 密钥
- Resend: https://resend.com
- Cloudflare Turnstile: https://dash.cloudflare.com/

## 功能特性
- 表单验证
- 防机器人验证（Turnstile）
- 邮件通知
- 确认邮件
- Toast 提示
- 响应式设计
- 动画效果
