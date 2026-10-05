export const createFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const createArticleSchema = (article) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "image": [article.featuredImage],
    "datePublished": article.publishedDate,
    "dateModified": article.lastUpdatedDate || article.publishedDate,
    "author": [{
      "@type": "Person",
      "name": article.author.name,
      "url": "https://compoundcalculator.com/about"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Compound Interest Calculator",
      "logo": {
        "@type": "ImageObject",
        "url": "https://compoundcalculator.com/logo.png"
      }
    },
    "description": article.excerpt
  };
};

export const createOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Compound Interest Calculator",
    "url": "https://compoundcalculator.com",
    "logo": "https://compoundcalculator.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-0199",
      "contactType": "customer service"
    }
  };
};