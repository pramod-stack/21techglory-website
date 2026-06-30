interface ServiceOpts {
  name: string;
  description: string;
  providerName?: string;
  url?: string;
}

export function getServiceSchema(opts: ServiceOpts) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": opts.name,
    "description": opts.description,
    "provider": {
      "@type": "Organization",
      "name": opts.providerName || "21TechGlory",
      "url": "https://21techglory.com"
    },
    "url": opts.url
  };
}
