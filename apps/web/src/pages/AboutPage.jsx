import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Users, Shield, Zap } from 'lucide-react';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t('pages.about.title', 'About Us')} | {t('brand.name', 'Compound Calculator')}</title>
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 bg-muted/30 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              {t('pages.about.title', 'About Us')}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              {t('pages.about.desc', 'We build professional-grade financial tools that empower everyday investors to make data-driven decisions and secure their financial future.')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision (Zig-Zag) */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">{t('pages.about.mission', 'Our Mission')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('pages.about.missionText', 'To demystify complex financial mathematics and provide accessible, accurate, and powerful projection tools for everyone. We believe that wealth building starts with clear foresight.')}
              </p>
            </motion.div>
            <div className="rounded-2xl overflow-hidden aspect-video bg-muted relative">
              <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786" alt={t('pages.about.mission', 'Our Mission')} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden aspect-video bg-muted relative order-2 md:order-1">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt={t('pages.about.vision', 'Our Vision')} className="w-full h-full object-cover" />
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 md:order-2">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold mb-4">{t('pages.about.vision', 'Our Vision')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('pages.about.visionText', 'A world where financial literacy is universal, and every individual has the strategic tools needed to plan for a secure and prosperous retirement without relying on guesswork.')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30 border-t">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">{t('pages.about.values', 'Core Values')}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: t('pages.about.v1', 'Accuracy'), desc: t('pages.about.v1Desc', 'Bank-grade precision in every calculation.') },
              { icon: Users, title: t('pages.about.v2', 'Accessibility'), desc: t('pages.about.v2Desc', 'Tools designed for humans, not just experts.') },
              { icon: Zap, title: t('pages.about.v3', 'Innovation'), desc: t('pages.about.v3Desc', 'Continuously updating to reflect modern markets.') },
              { icon: Target, title: t('pages.about.v4', 'Transparency'), desc: t('pages.about.v4Desc', 'Clear methodologies with no hidden formulas.') }
            ].map((val, i) => (
              <div key={i} className="bg-card p-6 rounded-2xl shadow-sm border border-border/50 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <val.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{val.title}</h3>
                <p className="text-sm text-muted-foreground">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}