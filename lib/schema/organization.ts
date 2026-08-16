export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "21TechGlory",
    "url": "https://21techglory.com",
    "logo": "https://21techglory.com/logo.png",
    "sameAs": [
      "https://wa.me/917795354043",
      "https://www.instagram.com/21techglory",
      "https://linkedin.com/company/21techglory"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 77953 54043, +91 91102 91339",
      "contactType": "customer service",
      "email": "tech@21techglory.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bangalore, Karnataka, India",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "hasMap": "https://maps.app.goo.gl/hFUMfadxu7NTBR6w8"
  };
}
