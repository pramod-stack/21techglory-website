export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "21TechGlory",
    "url": "https://21techglory.com",
    "logo": "https://21techglory.com/logo.png",
    "sameAs": [
      "https://wa.me/{{TODO: whatsapp_number_raw}}",
      "https://www.instagram.com/{{TODO: instagram_handle}}",
      "https://linkedin.com/company/{{TODO: linkedin_company}}"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "{{TODO: contact_phone}}",
      "contactType": "customer service",
      "email": "{{TODO: branded_email}}"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bangalore, Karnataka, India",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    }
  };
}
