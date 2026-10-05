import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card.jsx';
import { blogData } from '@/data/blogData.js';

export default function BlogPage() {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <div className="min-h-screen bg-background py-24">
      <Helmet>
        <title>{t('pages.blog.title', 'Financial Blog')} | {t('brand.name', 'Compound Calculator')}</title>
      </Helmet>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {t('pages.blog.title', 'Financial Insights')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('pages.blog.subtitle', 'Expert articles, guides, and strategies to help you navigate your wealth-building journey.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post, index) => {
            const slug = post.slug[lang] || post.slug.en;
            const title = post.title[lang] || post.title.en;
            const excerpt = post.excerpt[lang] || post.excerpt.en;
            
            return (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 overflow-hidden border-border/50">
                  <CardHeader className="pb-4">
                    <div className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">
                      {post.category}
                    </div>
                    <h2 className="text-xl font-bold leading-tight line-clamp-2">
                      <Link to={`/${lang}/blog/${slug}`} className="hover:underline">
                        {title}
                      </Link>
                    </h2>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3 text-sm">
                      {excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start border-t pt-4 gap-4">
                    <div className="flex items-center text-xs text-muted-foreground w-full justify-between">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" /> {post.author.name}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {new Date(post.publishedDate).toLocaleDateString()}
                      </div>
                    </div>
                    <Link 
                      to={`/${lang}/blog/${slug}`}
                      className="text-sm font-semibold text-primary flex items-center hover:underline"
                    >
                      {t('pages.blog.readMore', 'Read Article')} <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}