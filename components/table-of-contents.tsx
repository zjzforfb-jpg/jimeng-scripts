"use client";

import { useEffect, useState } from "react";
import { List, ChevronRight, X } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function extractHeadings(contentElement: HTMLElement): TocItem[] {
  const headings: TocItem[] = [];
  const elements = contentElement.querySelectorAll("h2, h3");

  elements.forEach((element, index) => {
    const text = element.textContent || "";
    const id = `heading-${index}`;
    element.id = id;

    headings.push({
      id,
      text,
      level: element.tagName === "H2" ? 2 : 3,
    });
  });

  return headings;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const contentElement = document.querySelector(".prose-content");
    if (contentElement) {
      const extractedHeadings = extractHeadings(contentElement as HTMLElement);
      setHeadings(extractedHeadings);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings
        .map((h) => document.getElementById(h.id))
        .filter(Boolean) as HTMLElement[];

      let currentActive = "";

      for (const heading of headingElements) {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 120) {
          currentActive = heading.id;
        }
      }

      if (currentActive !== activeId) {
        setActiveId(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings, activeId]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  const sidebarContent = (
    <div className="h-full overflow-y-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
          <List className="h-4 w-4" />
          目录导航
        </h3>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 rounded-md hover:bg-accent transition-colors"
          aria-label="关闭目录"
        >
          <X className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
      <nav className="space-y-1">
        {headings.map((heading) => (
          <button
            key={heading.id}
            onClick={() => scrollToHeading(heading.id)}
            className={`
              w-full text-left text-sm py-1.5 px-3 rounded-md transition-all flex items-center gap-2
              ${
                activeId === heading.id
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }
              ${heading.level === 3 ? "pl-6" : ""}
            `}
          >
            <ChevronRight className="h-3 w-3 flex-shrink-0" />
            <span className="truncate">{heading.text}</span>
          </button>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile toggle button - always visible when closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all"
          aria-label="目录导航"
        >
          <List className="h-5 w-5" />
          <span className="text-sm font-medium">目录</span>
        </button>
      )}

      {/* Mobile drawer overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar - Mobile drawer style */}
      <aside
        className={`
          fixed right-0 top-0 bottom-0 w-72 bg-background border-l border-border
          transform transition-transform duration-300 z-50 overflow-hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden
        `}
      >
        {sidebarContent}
      </aside>

      {/* Desktop sidebar - always visible on the right */}
      <aside
        className="
          hidden lg:block fixed right-0 top-20 bottom-0 w-64 bg-background border-l border-border
          overflow-hidden z-40
        "
      >
        {sidebarContent}
      </aside>
    </>
  );
}
