import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark
} from 'lucide-react';
import { blogData, BlogArticle } from '../data/blogData';

interface BlogPageProps {
  blogSlug?: string | null;
}

const CATEGORIES = [
  'All',
  'Business Growth',
  'Branding',
  'E-Commerce',
  'Technology',
  'AI & Automation',
  'Digital Marketing'
];

export default function BlogPage({ blogSlug }: BlogPageProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [blogSlug]);

  // Handler for custom link dispatch
  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  // IF ARTICLE DETAIL MODE:
  if (blogSlug) {
    const article = blogData.find((a) => a.slug === blogSlug) || blogData[0];
    const relatedArticles = blogData.filter((a) => a.slug !== article.slug).slice(0, 2);

    return (
      <div id={`blog-article-${article.slug}`} className="bg-[var(--color-background)] min-h-screen">
        
        {/* ARTICLE HEADER HERO */}
        <section className="relative pt-12 pb-16 border-b border-slate-100 overflow-hidden text-left">
          <div className="absolute inset-0 bg-radial-gradient(circle_at_top,rgba(8,102,198,0.01)_0%,transparent_60%) pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-8 font-mono">
              <button onClick={() => navigateTo('/')} className="hover:text-primary transition-colors cursor-pointer">HOME</button>
              <ChevronRight className="w-3.5 h-3.5" />
              <button onClick={() => navigateTo('/blog')} className="hover:text-primary transition-colors cursor-pointer">BLOG</button>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-primary truncate">{article.category.toUpperCase()}</span>
            </div>

            <div className="space-y-5">
              <button
                onClick={() => navigateTo('/blog')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline font-mono uppercase cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </button>

              <div className="flex items-center gap-4 text-slate-400 text-xs font-bold font-mono uppercase">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-300" />
                  {article.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-300" />
                  {article.readTime}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102033] tracking-tight leading-tight">
                {article.title}
              </h1>

              <div className="flex items-center gap-2.5 pt-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs font-mono">
                  PP
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#102033]">{article.author}</p>
                  <p className="text-[10px] text-slate-400 font-mono">Pure Path Editorial Team</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ARTICLE CONTENT */}
        <section className="py-12 sm:py-16 text-left bg-white border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6 text-sm sm:text-base text-[var(--color-muted)] leading-relaxed font-normal">
              {article.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Sharing Block */}
            <div className="flex items-center justify-between border-t border-slate-100 mt-12 pt-6">
              <span className="text-xs text-slate-300 font-bold font-mono uppercase">PURE PATH THOUGHT LEADERSHIP</span>
              <div className="flex gap-2">
                <button className="p-2 bg-slate-50 border border-slate-150 hover:bg-slate-100 rounded-lg text-[var(--color-text)] transition-colors cursor-pointer" title="Bookmark">
                  <Bookmark className="w-4 h-4 text-slate-400" />
                </button>
                <button className="p-2 bg-slate-50 border border-slate-150 hover:bg-slate-100 rounded-lg text-[var(--color-text)] transition-colors cursor-pointer" title="Share Article">
                  <Share2 className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SUGGESTED ARTICLES */}
        <section className="py-16 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <h3 className="text-lg font-extrabold text-[#102033] tracking-tight mb-8 text-left">
              Keep Reading
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.slug}
                  onClick={() => navigateTo(`/blog/${rel.slug}`)}
                  className="bg-white border border-slate-100 rounded-3xl p-6 text-left space-y-4 hover:shadow-lg hover:border-primary/10 transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[200px]"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase font-mono group-hover:text-primary transition-colors">
                      {rel.category}
                    </span>
                    <h4 className="text-base font-extrabold text-[#102033] tracking-tight group-hover:text-primary transition-colors">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-[var(--color-muted)] leading-relaxed line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center text-xs font-bold text-primary group-hover:underline pt-4">
                    <span>Read article</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </div>
    );
  }

  // ELSE: BLOG LISTING INDEX MODE
  const filteredArticles = activeCategory === 'All'
    ? blogData
    : blogData.filter((a) => a.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="bg-[var(--color-background)] min-h-screen">
      
      {/* HERO HERO */}
      <section className="relative pt-12 pb-16 border-b border-slate-100 overflow-hidden text-center">
        <div className="absolute inset-0 bg-radial-gradient(circle_at_top,rgba(8,102,198,0.02)_0%,transparent_60%) pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest text-primary bg-primary/5 uppercase font-mono border border-primary/10">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-primary" />
            Insights & Guides
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#102033] tracking-tight">
            The Pure Path Blog
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed">
            Thought leadership, design aesthetics, and software development methodologies designed to optimize modern corporate operations.
          </p>
        </div>
      </section>

      {/* FILTER CATEGORIES */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-16 md:top-20 z-40 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer font-mono uppercase ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-slate-50 text-[var(--color-muted)] hover:bg-slate-100 hover:text-[#102033]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="py-16 sm:py-24 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.3 }}
                  key={article.slug}
                  onClick={() => navigateTo(`/blog/${article.slug}`)}
                  className="group bg-white border border-slate-100 rounded-[28px] p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(8,102,198,0.04)] hover:border-primary/10 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[260px]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                        {article.date}
                      </span>
                      <span className="text-[10px] font-extrabold text-primary uppercase font-mono bg-primary/5 px-2 py-0.5 rounded border border-primary/5">
                        {article.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-[#102033] tracking-tight group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center text-xs font-bold text-primary group-hover:underline pt-6 border-t border-slate-50 mt-6 justify-between">
                    <span>Read article</span>
                    <span className="text-[10px] text-slate-300 font-mono tracking-wider">{article.readTime}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

    </div>
  );
}
