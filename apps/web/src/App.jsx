import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeProvider.jsx';
import { CurrencyProvider } from '@/contexts/CurrencyContext.jsx';
import { Toaster } from '@/components/ui/sonner.jsx';

import ScrollToTop from '@/components/ScrollToTop.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

import LanguageRouteWrapper from '@/components/LanguageRouteWrapper.jsx';
import HomePage from '@/pages/HomePage.jsx';
import AboutPage from '@/pages/AboutPage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import PrivacyPage from '@/pages/PrivacyPage.jsx';
import TermsPage from '@/pages/TermsPage.jsx';
import DisclaimerPage from '@/pages/DisclaimerPage.jsx';
import FAQPage from '@/pages/FAQPage.jsx';
import BlogPage from '@/pages/BlogPage.jsx';
import BlogPostPage from '@/pages/BlogPostPage.jsx';
import GuidePage from '@/pages/GuidePage.jsx';
import { supportedLanguages, normalizeLangCode } from '@/i18n/config.js';

// Root redirect detects lang and forwards to /:lang
function RootRedirect() {
  const stored = normalizeLangCode(localStorage.getItem('i18nextLng'));
  // Browsers report 'zh-TW', 'zh-HK', 'zh-Hant', etc. — map traditional variants explicitly.
  const rawBrowser = navigator.language || 'en';
  const browser = normalizeLangCode(rawBrowser)
    ?? (/zh[-_](tw|hk|hant|mo)/i.test(rawBrowser) ? 'zh-TW' : undefined);
  
  let target = 'en';
  if (stored && supportedLanguages.some(l => l.code === stored)) {
    target = stored;
  } else if (supportedLanguages.some(l => l.code === browser)) {
    target = browser;
  }

  return <Navigate to={`/${target}`} replace />;
}

const PlaceholderPage = ({ title }) => (
  <div className="container mx-auto px-4 py-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-muted-foreground">Page Not Found</p>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <Routes>
                {/* Auto Redirect / to /lang */}
                <Route path="/" element={<RootRedirect />} />
                
                {/* Language wrapper for all routes */}
                <Route path="/:lang" element={<LanguageRouteWrapper />}>
                  <Route index element={<HomePage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="contact" element={<ContactPage />} />
                  <Route path="faq" element={<FAQPage />} />
                  <Route path="guide" element={<GuidePage />} />
                  <Route path="blog" element={<BlogPage />} />
                  <Route path="blog/:slug" element={<BlogPostPage />} />
                  <Route path="privacy" element={<PrivacyPage />} />
                  <Route path="terms" element={<TermsPage />} />
                  <Route path="disclaimer" element={<DisclaimerPage />} />
                </Route>

                {/* Catch-all route */}
                <Route path="*" element={<PlaceholderPage title="404 - Page Not Found" />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Toaster position="bottom-right" />
        </BrowserRouter>
      </CurrencyProvider>
    </ThemeProvider>
  );
}

export default App;