import React, { useEffect } from 'react';
import { useParams, Navigate, Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { supportedLanguages, normalizeLangCode } from '@/i18n/config.js';

export default function LanguageRouteWrapper() {
  const { lang: rawLang } = useParams();
  const lang = normalizeLangCode(rawLang) ?? rawLang;
  const { i18n } = useTranslation();
  const location = useLocation();

  const isValidLang = supportedLanguages.some(l => l.code === lang);

  useEffect(() => {
    if (isValidLang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
      document.documentElement.lang = lang;
      localStorage.setItem('i18nextLng', lang);
    }
  }, [lang, i18n, isValidLang]);

  if (!isValidLang) {
    const path = location.pathname.replace(`/${rawLang}`, '/en');
    return <Navigate to={path} replace />;
  }

  // Canonicalize legacy casing, e.g. /zh-tw/... -> /zh-TW/...
  if (rawLang !== lang) {
    return <Navigate to={location.pathname.replace(`/${rawLang}`, `/${lang}`) + location.search + location.hash} replace />;
  }

  // Generate hreflangs
  const currentPathWithoutLang = location.pathname.replace(`/${lang}`, '') || '/';
  const baseUrl = window.location.origin;

  return (
    <>
      <Helmet>
        <html lang={lang} />
        {supportedLanguages.map((l) => (
          <link
            key={l.code}
            rel="alternate"
            hrefLang={l.code}
            href={`${baseUrl}/${l.code}${currentPathWithoutLang === '/' ? '' : currentPathWithoutLang}`}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${baseUrl}/en${currentPathWithoutLang === '/' ? '' : currentPathWithoutLang}`}
        />
      </Helmet>
      <Outlet />
    </>
  );
}