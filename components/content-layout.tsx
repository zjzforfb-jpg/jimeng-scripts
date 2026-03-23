"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { TableOfContents } from "./table-of-contents";

interface NavItem {
  href: string;
  label: string;
  description?: string;
}

const navItems: NavItem[] = [
  { href: "/fundamentals", label: "基础理论", description: "180°轴线、连续性剪辑" },
  { href: "/camera-params", label: "技术参数", description: "焦段，光圈、快门" },
  { href: "/camera-angles", label: "机位角度", description: "拍摄机位与角度" },
  { href: "/shot-language", label: "镜头语言", description: "起幅与落幅" },
  { href: "/writing", label: "写作方法", description: "视听语言写作" },
  { href: "/case-study", label: "实战案例", description: "AI分镜脚本解析" },
];

interface ContentLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export function ContentLayout({ children, title, description }: ContentLayoutProps) {
  const pathname = usePathname();
  const currentIndex = navItems.findIndex((item) => item.href === pathname);
  const prevItem = currentIndex > 0 ? navItems[currentIndex - 1] : null;
  const nextItem = currentIndex < navItems.length - 1 ? navItems[currentIndex + 1] : null;

  return (
    <div className="relative">
      <TableOfContents />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:pr-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            首页
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Chapter Navigation */}
          <aside className="lg:w-64 lg:flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="font-semibold mb-4 px-2">知识库导航</h2>
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                      pathname === item.href
                        ? "bg-accent text-foreground font-medium"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    <div>{item.label}</div>
                    {item.description && (
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {item.description}
                      </div>
                    )}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-zinc dark:prose-invert max-w-none"
            >
              {/* Page Header */}
              <header className="mb-8 pb-8 border-b border-border not-prose">
                <h1 className="text-3xl font-bold mb-3">{title}</h1>
                {description && (
                  <p className="text-lg text-muted-foreground">{description}</p>
                )}
              </header>

              {/* Content */}
              <div className="prose-content">{children}</div>

              {/* Page Navigation */}
              <footer className="mt-12 pt-8 border-t border-border not-prose">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  {prevItem ? (
                    <Link
                      href={prevItem.href}
                      className="group flex items-center gap-2 px-4 py-3 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground">上一章</div>
                        <div className="text-sm font-medium">{prevItem.label}</div>
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}
                  {nextItem ? (
                    <Link
                      href={nextItem.href}
                      className="group flex items-center gap-2 px-4 py-3 rounded-lg border border-border bg-card hover:bg-accent transition-colors sm:flex-row-reverse"
                    >
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">下一章</div>
                        <div className="text-sm font-medium">{nextItem.label}</div>
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              </footer>
            </motion.article>
          </main>
        </div>
      </div>
    </div>
  );
}
