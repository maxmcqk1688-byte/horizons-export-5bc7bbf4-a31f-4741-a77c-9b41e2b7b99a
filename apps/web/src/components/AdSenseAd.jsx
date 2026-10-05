import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

// Placeholder component for Google AdSense
// TODO: Replace data-ad-client and data-ad-slot with actual AdSense Publisher IDs
const AdSenseAd = ({ slotId, format = 'auto', layoutKey, className, style }) => {
  useEffect(() => {
    try {
      if (window && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error('AdSense error', e);
    }
  }, []);

  return (
    <div className={cn("w-full flex justify-center overflow-hidden my-4", className)} style={style}>
      <div className="relative w-full bg-muted/20 border border-border/50 rounded-lg flex items-center justify-center p-4 min-h-[100px]">
        {/* Placeholder text for dev environment */}
        <span className="text-xs text-muted-foreground absolute font-medium uppercase tracking-widest opacity-50 z-0">
          Advertisement
        </span>
        
        {/* Actual AdSense Tag */}
        <ins
          className="adsbygoogle relative z-10 w-full"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // ADD YOUR PUBLISHER ID HERE
          data-ad-slot={slotId}                     // ADD YOUR SLOT ID HERE
          data-ad-format={format}
          data-full-width-responsive="true"
          {...(layoutKey && { "data-ad-layout-key": layoutKey })}
        />
      </div>
    </div>
  );
};

export default AdSenseAd;