import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion.jsx';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight } from 'lucide-react';

const COUNT = 12;

export default function FAQPage() {
  const { t } = useTranslation();
  const { lang } = useParams();

  const faqs = Array.from({ length: COUNT }, (_, i) => ({
    value: `q${i + 1}`,
    question: t(`pages.faq.q${i + 1}`),
    answer: t(`pages.faq.a${i + 1}`),
  }));

  return (
    <div className="min-h-screen bg-background py-24">
      <Helmet>
        <title>{t('pages.faq.title')} | {t('brand.name')}</title>
        <meta name="description" content={t('pages.faq.subtitle')} />
      </Helmet>

      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">
            {t('pages.faq.title')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t('pages.faq.subtitle')}
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.value} value={faq.value}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 rounded-2xl border bg-muted/40 p-8 text-center">
          <h2 className="text-xl font-bold mb-2">{t('pages.faq.ctaTitle')}</h2>
          <p className="text-muted-foreground mb-6">
            {t('pages.faq.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link to={`/${lang}/guide`}>
                {t('pages.faq.guideBtn')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to={`/${lang}/contact`}>{t('pages.faq.contactBtn')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
