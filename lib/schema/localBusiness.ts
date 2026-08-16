interface LocalBusinessOpts {
  name: string;
  description: string;
  url?: string;
  telephone?: string;
  email?: string;
  address?: string;
}

export function getLocalBusinessSchema(opts: LocalBusinessOpts) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": opts.name,
    "description": opts.description,
    "url": opts.url || "https://21techglory.com",
    "telephone": opts.telephone || "+91 77953 54043, +91 91102 91339",
    "email": opts.email || "tech@21techglory.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": opts.address || "Bangalore, Karnataka, India",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
    }
  };
}
