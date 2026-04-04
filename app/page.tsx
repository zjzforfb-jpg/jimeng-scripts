"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Film, 
  Camera, 
  Settings, 
  Focus, 
  PenTool, 
  Sparkles,
  ArrowRight,
  BookOpen
} from "lucide-react";

const modules = [
  {
    href: "/fundamentals",
    icon: Film,
    title: "基础理论",
    description: "180°轴线原则、视线匹配、动作衔接、连续性剪辑等核心规则",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500",
  },
  {
    href: "/camera-params",
    icon: Settings,
    title: "技术参数",
    description: "焦段、光圈、快门、ISO、帧率等6大核心参数详解",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    href: "/camera-angles",
    icon: Camera,
    title: "机位角度",
    description: "10种拍摄机位、10种拍摄角度、运动机位术语全解析",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    href: "/shot-language",
    icon: Focus,
    title: "镜头语言",
    description: "起幅与落幅：镜头设计的骨架，起点→变化→落点",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
  },
  {
    href: "/writing",
    icon: PenTool,
    title: "写作方法",
    description: "剧本视听语言的6个抓手、实用公式与改写练习",
    color: "from-rose-500/20 to-red-500/20",
    iconColor: "text-rose-500",
  },
  {
    href: "/case-study",
    icon: Sparkles,
    title: "实战案例",
    description: "AI专业分镜脚本的完整解析与提示词设计模板",
    color: "from-yellow-500/20 to-amber-500/20",
    iconColor: "text-yellow-500",
  },
];

const learningPath = [
  { step: 1, title: "基础理论", desc: "掌握视听语言核心规则" },
  { step: 2, title: "技术参数", desc: "理解镜头与拍摄参数" },
  { step: 3, title: "机位角度", desc: "学习拍摄构图方法" },
  { step: 4, title: "镜头语言", desc: "设计镜头起幅落幅" },
  { step: 5, title: "写作方法", desc: "提升脚本写作能力" },
  { step: 6, title: "实战案例", desc: "应用所学设计分镜" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground mb-8"
            >
              <BookOpen className="h-4 w-4" />
              <span>AI视频创作知识库</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6"
            >
              一个即梦脚本的
              <span className="text-primary">修养</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl text-lg text-muted-foreground mb-10"
            >
              从视听语言到专业分镜的完整指南，系统学习影视镜头语法、拍摄参数、脚本写作与AI提示词设计
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/fundamentals"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                开始学习
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/case-study"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
              >
                查看案例
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 border-y border-border bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">学习路径</h2>
            <p className="text-muted-foreground">按顺序学习，循序渐进掌握AI视频创作</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {learningPath.map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className="flex flex-col items-center p-4 rounded-lg bg-card border border-border min-w-[140px]">
                  <span className="text-xs text-muted-foreground mb-1">步骤 {item.step}</span>
                  <span className="font-semibold text-sm">{item.title}</span>
                  <span className="text-xs text-muted-foreground mt-1">{item.desc}</span>
                </div>
                {index < learningPath.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-muted-foreground mx-2 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Modules */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">知识模块</h2>
            <p className="text-muted-foreground">六大核心模块，覆盖AI视频创作全流程</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Link key={module.href} href={module.href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 transition-opacity group-hover:opacity-100`} />
                  <div className="relative">
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent ${module.iconColor}`}>
                      <module.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                    <div className="mt-4 flex items-center text-sm font-medium text-primary">
                      查看详情
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">相关资源</h2>
            <p className="text-muted-foreground">延伸学习，拓展AI视频创作技能</p>
          </div>
          
          <div className="flex justify-center">
            <a
              href="https://zjzforfb-jpg.github.io/dramas/aistudy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 max-w-md w-full transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-indigo-500 shrink-0">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">零门槛AI漫剧全流程教程</h3>
                  <p className="text-sm text-muted-foreground">
                    全程用豆包+即梦两个免费工具搞定，不用会画画、不用会剪辑，复制粘贴就能出片
                  </p>
                  <div className="mt-3 flex items-center text-sm font-medium text-primary">
                    前往学习
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Film className="h-5 w-5 text-primary" />
              <span className="font-semibold">即梦脚本</span>
            </div>
            <p className="text-sm text-muted-foreground">
              基于影视专业知识整理 · 仅供学习参考
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
