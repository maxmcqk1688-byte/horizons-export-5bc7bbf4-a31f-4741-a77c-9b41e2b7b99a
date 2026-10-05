import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { toast } from 'sonner';

export default function ContactPage() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(t('pages.contact.success', 'Message sent successfully! We will get back to you soon.'));
      e.target.reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t('pages.contact.title', 'Contact Us')} | {t('brand.name', 'Compound Calculator')}</title>
      </Helmet>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              {t('pages.contact.title', 'Contact Us')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('pages.contact.subtitle', 'Have a question about our calculators or want to suggest a new feature? We\'d love to hear from you.')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">{t('pages.contact.info', 'Get in Touch')}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t('pages.contact.email', 'Email')}</p>
                      <a href="mailto:afojoypets@gmail.com" className="text-primary hover:underline">afojoypets@gmail.com</a>
                      <p className="text-sm text-muted-foreground mt-1">{t('pages.contact.responseTime', 'We usually reply within 2 business days.')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t('pages.contact.address', 'Address')}</p>
                      <p className="text-muted-foreground">{t('pages.contact.onlineOnly', 'Online service — please contact us by email.')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Map Placeholder */}
              <div className="rounded-2xl overflow-hidden aspect-video bg-muted relative border border-border">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-slate-100 dark:bg-slate-900">
                  <MapPin className="h-8 w-8 opacity-50" />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-border/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t('pages.contact.nameLabel', 'Full Name')}</Label>
                        <Input id="name" required placeholder="Jane Doe" className="bg-background text-foreground" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t('pages.contact.emailLabel', 'Email Address')}</Label>
                        <Input id="email" type="email" required placeholder="jane@example.com" className="bg-background text-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">{t('pages.contact.subjectLabel', 'Subject')}</Label>
                      <Input id="subject" required placeholder={t('pages.contact.subjectPlaceholder', 'How can we help?')} className="bg-background text-foreground" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">{t('pages.contact.messageLabel', 'Message')}</Label>
                      <Textarea 
                        id="message" 
                        required 
                        rows={6}
                        placeholder={t('pages.contact.messagePlaceholder', 'Write your message here...')} 
                        className="bg-background text-foreground resize-none" 
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? (
                        t('pages.contact.sending', 'Sending...')
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          {t('pages.contact.sendBtn', 'Send Message')}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}