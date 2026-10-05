import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calculator, Target, TrendingUp, PiggyBank, ArrowRight, Download, Share2, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';

export default function GuidePage() {
  const { t } = useTranslation();
  const { lang } = useParams();

  const steps = [
    { icon: Calculator, title: t('pages.guide.s1t'), body: t('pages.guide.s1d') },
    { icon: Target, title: t('pages.guide.s2t'), body: t('pages.guide.s2d') },
    { icon: TrendingUp, title: t('pages.guide.s3t'), body: t('pages.guide.s3d') },
    { icon: PiggyBank, title: t('pages.guide.s4t'), body: t('pages.guide.s4d') },
  ];

  const tips = [1, 2, 3, 4, 5].map((i) => t(`pages.guide.tip${i}`));

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t('pages.guide.metaTitle')} | {t('brand.name')}</title>
        <meta name="description" content={t('pages.guide.heroDesc')} />
      </Helmet>

      <section className="py-24 bg-muted/30 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              {t('pages.guide.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              {t('pages.guide.heroTitle')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('pages.guide.heroDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          {steps.map((s, i) => (
            <Card key={i} className="border-border/60">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon className="h-5 w-5 text-primary" />
                  </span>
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-secondary/50 border-none">
            <CardHeader>
              <CardTitle className="text-xl">{t('pages.guide.tipsTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                {tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/60">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" /> {t('pages.guide.exportTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed space-y-3">
              <p className="flex gap-2">
                <Share2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                <span>{t('pages.guide.exportSave')}</span>
              </p>
              <p className="flex gap-2">
                <Download className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                <span>{t('pages.guide.exportPdf')}</span>
              </p>
              <p className="flex gap-2">
                <Globe className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                <span>{t('pages.guide.exportLocal')}</span>
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button size="lg" asChild>
              <Link to={`/${lang}/#calculators`}>
                {t('pages.guide.calcBtn')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to={`/${lang}/faq`}>{t('pages.guide.faqBtn')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
