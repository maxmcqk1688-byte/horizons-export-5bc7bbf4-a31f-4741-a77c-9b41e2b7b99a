import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { toast } from 'sonner';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('newsletter_subscription', email);
      setLoading(false);
      setSuccess(true);
      toast.success('Successfully subscribed to the newsletter!');
      setEmail('');
    }, 1000);
  };

  if (success) {
    return (
      <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 flex flex-col items-center text-center">
        <CheckCircle className="h-10 w-10 text-primary mb-3" />
        <h3 className="font-semibold text-foreground mb-1">You're Subscribed!</h3>
        <p className="text-sm text-muted-foreground">Thanks for joining. Expect top financial tips in your inbox soon.</p>
      </div>
    );
  }

  return (
    <div className="bg-card border rounded-xl p-6 shadow-sm">
      <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
        <Mail className="h-5 w-5 text-primary" />
        Financial Insights Newsletter
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        Join 50,000+ investors receiving weekly wealth building strategies and calculator updates.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 text-foreground"
          disabled={loading}
          aria-label="Email address"
        />
        <Button type="submit" disabled={loading} className="shrink-0">
          {loading ? 'Joining...' : 'Subscribe'}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;