import React from 'react';
import { Twitter, Facebook, Linkedin, Link2 } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { toast } from 'sonner';

const SocialShare = ({ title, url, description }) => {
  const shareUrl = encodeURIComponent(url || window.location.href);
  const shareTitle = encodeURIComponent(title || document.title);
  const shareDesc = encodeURIComponent(description || '');

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url || window.location.href);
      toast.success('Link copied to clipboard');
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-muted-foreground mr-2">Share:</span>
      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
        <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
          <Twitter className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
          <Facebook className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" asChild>
        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}&summary=${shareDesc}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
          <Linkedin className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={copyToClipboard} aria-label="Copy link">
        <Link2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default SocialShare;