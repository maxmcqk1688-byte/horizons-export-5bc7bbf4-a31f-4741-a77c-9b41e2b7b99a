import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background py-24">
      <Helmet>
        <title>{t('pages.privacy.title', 'Privacy Policy')} | {t('brand.name', 'Compound Calculator')}</title>
        <meta
          name="description"
          content="How we handle data: local-only calculations, contact and newsletter data, cookies, analytics and Google AdSense advertising."
        />
      </Helmet>

      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">
          {t('pages.privacy.title', 'Privacy Policy')}
        </h1>
        <p className="text-muted-foreground mb-12">
          {t('pages.lastUpdated', 'Last updated')}: 2026-01-15. This policy explains what data we collect,
          why, and the choices you have.
        </p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Overview</h2>
            <p className="mb-4">
              This website provides free financial calculators (compound interest, SIP, CAGR and retirement
              planning) and educational articles. We designed the service to be privacy-friendly: calculator
              inputs are processed locally in your browser and are never transmitted to or stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Data we collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Calculator inputs:</strong> stay in your browser. We do not collect them.</li>
              <li><strong className="text-foreground">Contact messages:</strong> name, email address and message content when you use the contact form.</li>
              <li><strong className="text-foreground">Newsletter:</strong> your email address if you subscribe.</li>
              <li><strong className="text-foreground">Technical data:</strong> pages visited, device and browser type, approximate location derived from IP, collected via privacy-respecting analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. How we use data</h2>
            <p className="mb-4">
              We use the data to operate and improve the site, respond to messages, send newsletters you
              requested, prevent abuse, and measure aggregate usage. We do not sell personal information and
              we do not use calculator inputs for any purpose because we never receive them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies and similar technologies</h2>
            <p className="mb-4">
              We use strictly necessary cookies (language preference, theme, currency) and, with your consent
              where required, analytics and advertising cookies. You can refuse or delete cookies in your
              browser settings; the calculators continue to work, but preferences will not be remembered.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Advertising (Google AdSense)</h2>
            <p className="mb-4">
              We plan to show ads served by Google AdSense. Google may use cookies, including the DoubleClick
              cookie, to serve interest-based ads based on your prior visits to this and other sites. You can
              opt out of personalized advertising at Google Ads Settings (google.com/settings/ads) or at
              aboutads.info/choices. See Google's Privacy &amp; Terms (policies.google.com/technologies/ads)
              for details on how Google uses data when you use partner sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Data sharing</h2>
            <p className="mb-4">
              We share data only with service providers that help us run the site (hosting, analytics,
              email delivery, advertising partners described above), bound by contractual safeguards, or when
              required by law. We never share calculator inputs because we do not possess them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Data retention</h2>
            <p className="mb-4">
              Contact messages are kept for up to 24 months to handle follow-ups; newsletter data is kept
              until you unsubscribe; analytics data is aggregated or deleted per provider schedules (typically
              14–26 months). Local browser data (saved calculator states) remains under your control and can
              be cleared anytime via browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Your rights</h2>
            <p className="mb-4">
              Depending on your jurisdiction (including GDPR in the EEA/UK and CCPA/CPRA in California), you
              may have the right to access, correct, delete or port your personal data, object to or restrict
              processing, and withdraw consent. To exercise these rights, contact us via the Contact page.
              California residents: we do not sell or share personal information as defined by the CCPA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Children</h2>
            <p className="mb-4">
              This site is a general financial-education resource and is not directed at children under 13.
              We do not knowingly collect data from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact</h2>
            <p className="mb-4">
              For privacy questions or requests, please use the Contact page. We aim to respond within
              30 days.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
