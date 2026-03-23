"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { Film, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "首页" },
  {
    href: "#",
    label: "知识库",
    children: [
      { href: "/fundamentals", label: "基础理论", desc: "180°轴线、连续性剪辑" },
      { href: "/camera-params", label: "技术参数", desc: "焦段、光圈、快门" },
      { href: "/camera-angles", label: "机位角度", desc: "拍摄机位与角度" },
      { href: "/shot-language", label: "镜头语言", desc: "起幅与落幅" },
      { href: "/writing", label: "写作方法", desc: "视听语言写作" },
    ],
  },
  { href: "/case-study", label: "实战案例" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [knowledgeOpen, setKnowledgeOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Film className="h-6 w-6 text-primary transition-transform group-hover:rotate-12" />
            <span className="text-lg font-semibold tracking-tight">
              即梦脚本
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setKnowledgeOpen(true)}
                    onMouseLeave={() => setKnowledgeOpen(false)}
                  >
                    <button
                      className={`px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-accent ${
                        pathname.startsWith("/fundamentals") ||
                        pathname.startsWith("/camera") ||
                        pathname.startsWith("/shot") ||
                        pathname.startsWith("/writing")
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </button>
                    <AnimatePresence>
                      {knowledgeOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-56 rounded-md border border-border bg-card shadow-lg overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-3 text-sm hover:bg-accent transition-colors border-b border-border last:border-0"
                            >
                              <div className="font-medium text-foreground">
                                {child.label}
                              </div>
                              <div className="text-xs text-muted-foreground mt-0.5">
                                {child.desc}
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-accent ${
                      pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-md border border-border bg-transparent hover:bg-accent transition-colors"
              aria-label="切换菜单"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border bg-background"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div className="space-y-2">
                      <div className="px-4 py-2 text-sm font-medium text-muted-foreground">
                        {item.label}
                      </div>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block px-4 py-2 text-sm rounded-md transition-colors ${
                            pathname === child.href
                              ? "bg-accent text-foreground"
                              : "text-muted-foreground hover:bg-accent hover:text-foreground"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        pathname === item.href
                          ? "bg-accent text-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
