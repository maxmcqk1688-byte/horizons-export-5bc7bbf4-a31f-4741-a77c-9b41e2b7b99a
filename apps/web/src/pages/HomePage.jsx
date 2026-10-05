import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calculator, TrendingUp, PiggyBank, Target, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import CompoundInterestCalculator from '@/components/CompoundInterestCalculator.jsx';
import SIPCalculator from '@/components/SIPCalculator.jsx';
import CAGRCalculator from '@/components/CAGRCalculator.jsx';
import RetirementCalculator from '@/components/RetirementCalculator.jsx';

const HomePage = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t('home.hero.title')} | Compound Calculator</title>
        <meta name="description" content={t('home.hero.desc')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden border-b bg-muted/30">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1644995722044-6cd197ffb440" 
            alt="Financial charts" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                <SparklesIcon className="h-4 w-4 mr-2" />
                {t('home.hero.badge')}
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-balance">
                {t('home.hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
                {t('home.hero.desc')}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8" asChild>
                  <a href="#calculators">
                    {t('home.hero.startBtn')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-12 px-8" asChild>
                  <Link to={`/${lang}/about`}>{t('home.hero.learnBtn')}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Calculators Grid Section */}
      <section id="calculators" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('home.calcSection.title')}</h2>
            <p className="text-muted-foreground text-lg">{t('home.calcSection.desc')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-12">
              <div id="compound-interest" className="scroll-mt-24">
                <CompoundInterestCalculator />
              </div>
              <div id="sip-calculator" className="scroll-mt-24">
                <SIPCalculator />
              </div>
              <div id="cagr-calculator" className="scroll-mt-24">
                <CAGRCalculator />
              </div>
              <div id="retirement-calculator" className="scroll-mt-24">
                <RetirementCalculator />
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-8 sticky top-24">
              <Card className="bg-secondary/50 border-none shadow-none">
                <CardHeader>
                  <CardTitle className="text-lg">{t('home.calcSection.quickNav')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a href="#compound-interest" className="flex items-center text-sm font-medium hover:text-primary p-2 rounded-md hover:bg-background transition-colors">
                    <TrendingUp className="h-4 w-4 mr-2" /> {t('calculators.compound.title', 'Compound Interest')}
                  </a>
                  <a href="#sip-calculator" className="flex items-center text-sm font-medium hover:text-primary p-2 rounded-md hover:bg-background transition-colors">
                    <Target className="h-4 w-4 mr-2" /> {t('calculators.sip.title', 'SIP Calculator')}
                  </a>
                  <a href="#cagr-calculator" className="flex items-center text-sm font-medium hover:text-primary p-2 rounded-md hover:bg-background transition-colors">
                    <Calculator className="h-4 w-4 mr-2" /> {t('calculators.cagr.title', 'CAGR Calculator')}
                  </a>
                  <a href="#retirement-calculator" className="flex items-center text-sm font-medium hover:text-primary p-2 rounded-md hover:bg-background transition-colors">
                    <PiggyBank className="h-4 w-4 mr-2" /> {t('calculators.retirement.title', 'Retirement Planner')}
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('home.benefits.title')}</h2>
            <p className="text-muted-foreground">{t('home.benefits.desc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t('home.benefits.b1Title')}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {t('home.benefits.b1Desc')}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>{t('home.benefits.b2Title')}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {t('home.benefits.b2Desc')}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle>{t('home.benefits.b3Title')}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {t('home.benefits.b3Desc')}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

function SparklesIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
    </svg>
  );
}

export default HomePage;