import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Check, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.jsx';
import { supportedLanguages, normalizeLangCode } from '@/i18n/config.js';

export default function LanguageSwitcher({ variant = 'outline', className }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSeg = location.pathname.split('/').filter(Boolean)[0];
  const lang = normalizeLangCode(pathSeg) ?? 'en';

  const currentLang = supportedLanguages.find(l => l.code === lang) || supportedLanguages[0];

  const switchLanguage = (newLangCode) => {
    if (newLangCode === lang) return;
    
    // (1) Extract the current language from the URL using a regex pattern
    const langCodes = supportedLanguages.map(l => l.code).sort((a, b) => b.length - a.length).join('|');
    const langRegex = new RegExp(`^/(${langCodes})(?:/|$)`, 'i');
    const match = location.pathname.match(langRegex);
    
    // (2) Extract the remaining path after the language prefix
    let remainingPath = '/';
    if (match) {
      const matchedLang = match[1];
      remainingPath = location.pathname.replace(new RegExp(`^/${matchedLang}`), '');
    } else {
      remainingPath = location.pathname;
    }
    
    if (!remainingPath.startsWith('/')) {
      remainingPath = '/' + remainingPath;
    }

    // (3) & (4) Navigate to new language + remaining path (replacing, not appending)
    const newPath = `/${newLangCode}${remainingPath === '/' ? '' : remainingPath}${location.search}${location.hash}`;
    navigate(newPath, { replace: true });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size="sm" className={`flex items-center gap-2 ${className}`}>
          <Globe className="h-4 w-4 text-muted-foreground" />
          <span className="hidden sm:inline-block font-medium">
            {currentLang.flag} {currentLang.name}
          </span>
          <span className="sm:hidden font-medium">{currentLang.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {supportedLanguages.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => switchLanguage(l.code)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span>{l.flag}</span>
              <span className="font-medium">{l.name}</span>
              <span className="text-xs text-muted-foreground ml-1">{l.nativeName}</span>
            </div>
            {l.code === lang && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}