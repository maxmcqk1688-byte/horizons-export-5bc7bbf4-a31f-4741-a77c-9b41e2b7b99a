import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export default function TermsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background py-24">
      <Helmet>
        <title>{t('pages.terms.title', 'Terms of Service')} | {t('brand.name', 'Compound Calculator')}</title>
        <meta
          name="description"
          content="Terms of Service: acceptable use, educational-only nature of projections, intellectual property, liability limits and governing terms."
        />
      </Helmet>

      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">
          {t('pages.terms.title', 'Terms of Service')}
        </h1>
        <p className="text-muted-foreground mb-12">
          {t('pages.lastUpdated', 'Last updated')}: 2026-01-15. By using this site you agree to these terms.
        </p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. The service</h2>
            <p className="mb-4">
              We provide free online financial calculators (compound interest, SIP, CAGR, retirement) and
              educational articles. No account is required. Features may change or be discontinued at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Educational use only — not financial advice</h2>
            <p className="mb-4">
              All projections are mathematical illustrations based on constant-return assumptions you enter.
              Markets fluctuate; fees, taxes and inflation affect real outcomes. Nothing here is financial,
              investment, tax or legal advice. Do not make decisions solely from these tools — consult a
              licensed professional for personal guidance. See also our Disclaimer page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Acceptable use</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the site only for lawful purposes.</li>
              <li>Do not attempt to disrupt, scrape abusively, or circumvent security or rate limits.</li>
              <li>Do not misrepresent calculator outputs as guaranteed returns or as our endorsement.</li>
              <li>Do not submit unlawful, infringing or harmful content via forms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual property</h2>
            <p className="mb-4">
              The site's design, text, calculators and graphics are owned by us or our licensors and protected
              by copyright and trademark laws. You may share links and export your own calculation PDFs for
              personal use, but you may not copy, republish or resell substantial portions of the site without
              permission. Standard financial formulas themselves remain in the public domain.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. User content</h2>
            <p className="mb-4">
              Messages you send via the contact form or newsletter signup are used only to respond and operate
              the service. Do not send sensitive financial account numbers or passwords — they are never needed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Third-party services and advertising</h2>
            <p className="mb-4">
              The site may display third-party ads (including Google AdSense) and link to external resources.
              We are not responsible for third-party content, policies or practices. Your use of those services
              is governed by their own terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, we are not liable for indirect, incidental, special,
              consequential or punitive damages — including lost profits, data or investment losses — arising
              from your use of or reliance on the site, even if advised of the possibility. Your sole remedy
              for dissatisfaction is to stop using the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes and contact</h2>
            <p className="mb-4">
              We may update these terms; continued use after changes take effect constitutes acceptance. For
              questions about these terms, reach us via the Contact page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
