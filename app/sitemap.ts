import { MetadataRoute } from 'next';
import { posts } from '@/lib/blog/posts-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://21techglory.com';
  
  // Static routes
  const staticRoutes = [
    '',
    '/us',
    '/about',
    '/contact',
    '/work',
    '/services',
    '/services/web-development',
    '/services/seo',
    '/services/ai-automation',
    '/services/crm',
    '/services/paid-ads',
    '/services/local-seo',
    '/services/google-business-profile-optimization',
    '/locations/bangalore',
    '/locations/bangalore/seo-company',
    '/locations/bangalore/google-business-profile-optimization',
    '/locations/bangalore/website-development-company',
    '/locations/bangalore/web-development',
    '/locations/bangalore/whatsapp-automation',
    '/locations/bangalore/crm-for-clinics',
    '/locations/us/small-business/seo-company',
    '/locations/us/d2c/seo-company',
    '/locations/us/services/seo-company',
    '/industries',
    '/industries/clinics-hospitals',
    '/industries/salons-spas',
    '/industries/fitness-gyms',
    '/industries/industrial-manufacturing',
    '/industries/beauty-cosmetics',
    '/industries/software-it-services',
    '/tools/growth-audit',
    '/tools/site-audit',
    '/tools/build-your-system',
    '/testimonials',
    '/work/liger-fitness',
    '/work/education-career-bridge',
    '/work/namo-cranes',
    '/work/clinic-seo-bangalore',
    '/work/hospital-booking-platform',
    '/work/skincare-website-conversion',
    '/work/ecommerce-ppc-restructure',
    '/privacy-policy',
    '/terms-of-service',
    '/engagement-terms',
    '/blog',
  ];

  // Map static routes
  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => {
    let priority = 0.8;
    let changeFrequency: 'daily' | 'weekly' | 'monthly' = 'weekly';

    if (route === '' || route === '/us') {
      priority = 1.0;
      changeFrequency = 'daily';
    } else if (route === '/blog' || route === '/work' || route.startsWith('/tools')) {
      priority = 0.9;
      changeFrequency = 'daily';
    } else if (
      route === '/privacy-policy' ||
      route === '/terms-of-service' ||
      route === '/engagement-terms'
    ) {
      priority = 0.3;
      changeFrequency = 'monthly';
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });

  // Map dynamic blog posts
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...sitemapEntries, ...blogEntries];
}
