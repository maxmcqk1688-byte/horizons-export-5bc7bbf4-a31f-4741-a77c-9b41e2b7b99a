import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { blogData, getArticleBySlug } from '@/data/blogData.js';

export default function BlogPostPage() {
  const { t } = useTranslation();
  const { lang, slug } = useParams();

  const post = getArticleBySlug(slug, lang);

  if (!post) {
    return <Navigate to={`/${lang}/blog`} replace />;
  }

  const title = post.title[lang] || post.title.en;
  const excerpt = post.excerpt[lang] || post.excerpt.en;
  const content = post.content[lang] || post.content.en;

  return (
    <div className="min-h-screen bg-background py-24">
      <Helmet>
        <title>{title} | {t('pages.blog.title', 'Blog')} | {t('brand.name', 'Compound Calculator')}</title>
        <meta name="description" content={excerpt} />
      </Helmet>

      <div className="container mx-auto px-4 max-w-3xl">
        <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground hover:text-foreground">
          <Link to={`/${lang}/blog`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('pages.blog.back', 'Back to Blog')}
          </Link>
        </Button>

        <article>
          <header className="mb-12">
            <div className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-balance">
              {title}
            </h1>
            <div className="flex items-center gap-6 text-muted-foreground text-sm font-medium border-y py-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author.name}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedDate).toLocaleDateString()}
              </div>
            </div>
          </header>

          <div className="prose prose-slate dark:prose-invert max-w-none text-lg text-muted-foreground leading-relaxed">
            {content.split('\n').map((paragraph, idx) => (
              <p key={idx} className="mb-6">{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}