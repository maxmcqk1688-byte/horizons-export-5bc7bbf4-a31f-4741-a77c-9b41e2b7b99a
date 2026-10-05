import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, ShieldAlert, BadgeCheck, Calculator } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { supportedLanguages, normalizeLangCode } from '@/i18n/config.js';
import NewsletterSignup from './NewsletterSignup.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const pathLang = normalizeLangCode(location.pathname.split('/').filter(Boolean)[0]);
  const lang = pathLang ?? normalizeLangCode(i18n.language) ?? 'en';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-slate-300 border-t border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link to={`/${lang}`} className="flex items-center space-x-2 mb-6 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <div className="text-base font-bold text-white tracking-tight">{t('brand.name', 'Compound Calculator')}</div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{t('brand.tagline', 'Investment Returns')}</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              {t('footer.desc', 'Professional-grade financial calculators designed to help you build wealth, optimize SIPs, and plan for a secure retirement with precision.')}
            </p>
            <div className="flex items-center gap-4 mb-6">
              <LanguageSwitcher variant="secondary" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">{t('footer.resources', 'Resources')}</h3>
            <ul className="space-y-3">
              <li><Link to={`/${lang}/#calculators`} className="text-sm hover:text-white transition-colors">{t('nav.calculators', 'Calculators')}</Link></li>
              <li><Link to={`/${lang}/blog`} className="text-sm hover:text-white transition-colors">{t('nav.blog', 'Blog')}</Link></li>
              <li><Link to={`/${lang}/guide`} className="text-sm hover:text-white transition-colors">{t('nav.guide', 'User Guide')}</Link></li>
              <li><Link to={`/${lang}/faq`} className="text-sm hover:text-white transition-colors">{t('nav.faq', 'FAQ')}</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">{t('footer.company', 'Company')}</h3>
            <ul className="space-y-3">
              <li><Link to={`/${lang}/about`} className="text-sm hover:text-white transition-colors">{t('nav.about', 'About')}</Link></li>
              <li><Link to={`/${lang}/contact`} className="text-sm hover:text-white transition-colors">{t('nav.contact', 'Contact')}</Link></li>
              <li><Link to={`/${lang}/privacy`} className="text-sm hover:text-white transition-colors">{t('footer.privacy', 'Privacy Policy')}</Link></li>
              <li><Link to={`/${lang}/terms`} className="text-sm hover:text-white transition-colors">{t('footer.terms', 'Terms of Service')}</Link></li>
              <li><Link to={`/${lang}/disclaimer`} className="text-sm hover:text-white transition-colors flex items-center gap-1">{t('footer.disclaimer', 'Disclaimer')} <ShieldAlert className="h-3 w-3" /></Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <NewsletterSignup />
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 py-8 border-y border-slate-800/50 mb-8">
          <div className="flex items-center text-slate-400 text-sm font-medium">
            <ShieldCheck className="h-5 w-5 mr-2 text-accent" />
            256-bit Secure
          </div>
          <div className="flex items-center text-slate-400 text-sm font-medium">
            <BadgeCheck className="h-5 w-5 mr-2 text-primary" />
            Standard Formulas
          </div>
          <div className="flex items-center text-slate-400 text-sm font-medium">
            <ShieldAlert className="h-5 w-5 mr-2 text-amber-500" />
            {t('footer.educationalOnly', 'No Financial Advice')}
          </div>
        </div>

        <div className="text-center text-xs text-slate-500 space-y-4 max-w-4xl mx-auto">
          <p>
            <strong className="text-slate-400">{t('footer.educationalOnly', 'Educational Purpose Only')}:</strong> {t('footer.disclaimerText', 'The calculators and information provided are intended for educational and informational purposes only. They do not constitute financial advice.')}
          </p>
          <p>
            © {currentYear} {t('brand.name', 'Compound Calculator')}. {t('footer.rights', 'All rights reserved.')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;