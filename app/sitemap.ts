import { MetadataRoute } from 'next';
import { posts } from '@/lib/blog/posts-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://21techglory.com';
  
  // Static routes
  const staticRoutes = [
    '',
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
    '/locations/bangalore/seo-company',
    '/industries',
    '/industries/clinics-hospitals',
    '/industries/salons-spas',
    '/testimonials',
    '/work/clinic-seo-bangalore',
    '/work/hospital-booking-platform',
    '/work/skincare-website-conversion',
    '/work/ecommerce-ppc-restructure',
    '/privacy-policy',
    '/terms-of-service',
    '/engagement-terms',
    '/blog', // Blog hub route
  ];

  // Map static routes
  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => {
    let priority = 0.8;
    let changeFrequency: 'daily' | 'weekly' | 'monthly' = 'weekly';

    if (route === '') {
      priority = 1.0;
      changeFrequency = 'daily';
    } else if (route === '/blog') {
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

