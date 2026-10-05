import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { supportedLanguages, normalizeLangCode } from '@/i18n/config.js';
import { Menu, X, Sun, Moon, ChevronDown, Calculator } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button.jsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.jsx';
import { useTheme } from '@/contexts/ThemeProvider.jsx';
import { useCurrency } from '@/hooks/useCurrency.js';
import LanguageSwitcher from './LanguageSwitcher.jsx';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { currency, setCurrency } = useCurrency();
  const { t, i18n } = useTranslation();
  const location = useLocation();
  // Header lives outside the /:lang route, so derive lang from the URL path
  // (useParams() returns {} here) and fall back to the active i18n language.
  const pathLang = normalizeLangCode(location.pathname.split('/').filter(Boolean)[0]);
  const lang = pathLang ?? normalizeLangCode(i18n.language) ?? 'en';

  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' }
  ];

  const navLinks = [
    { name: t('nav.home', 'Home'), href: `/${lang}` },
    { name: t('nav.calculators', 'Calculators'), href: `/${lang}/#calculators` },
    { name: t('nav.blog', 'Blog'), href: `/${lang}/blog` },
    { name: t('nav.guide', 'Guide'), href: `/${lang}/guide` },
    { name: t('nav.about', 'About'), href: `/${lang}/about` },
    { name: t('nav.faq', 'FAQ'), href: `/${lang}/faq` },
    { name: t('nav.contact', 'Contact'), href: `/${lang}/contact` }
  ];

  const isActive = (path) => {
    if (path.includes('#')) {
      const base = path.split('#')[0];
      const hash = '#' + path.split('#')[1];
      return location.pathname === base && location.hash === hash;
    }
    if (path === `/${lang}`) {
      return location.pathname === `/${lang}` && !location.hash;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to={`/${lang}`} className="flex items-center space-x-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
                <Calculator className="h-5 w-5" />
              </div>
              <div className="hidden md:block">
                <div className="text-sm md:text-base font-bold leading-tight tracking-tight text-foreground">
                  {t('brand.name', 'Compound Calculator')}
                </div>
                <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                  {t('brand.tagline', 'Investment Returns')}
                </div>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isHash = link.href.includes('#');
              return isHash ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(link.href) 
                      ? 'bg-accent/10 text-accent font-semibold' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(link.href) 
                      ? 'bg-accent/10 text-accent font-semibold' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center space-x-2">
            <LanguageSwitcher />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden sm:flex items-center space-x-1 border-border">
                  <span className="font-medium text-foreground">{currency}</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[150px]">
                {currencies.map((curr) => (
                  <DropdownMenuItem
                    key={curr.code}
                    onClick={() => setCurrency(curr.code)}
                    className={`cursor-pointer ${currency === curr.code ? 'bg-accent/10 text-accent font-medium' : ''}`}
                  >
                    <span className="font-medium w-6">{curr.symbol}</span>
                    <span>{curr.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hidden sm:flex rounded-full text-muted-foreground hover:text-foreground"
              aria-label={t('nav.toggleTheme', 'Toggle theme')}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={t('nav.toggleMenu', 'Toggle menu')}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t animate-slide-up origin-top">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isHash = link.href.includes('#');
                return isHash ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;