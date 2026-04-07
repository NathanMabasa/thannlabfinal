import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thannlab.com'

  const staticPages = [
    '',
    '/about',
    '/services',
    '/services/web-design',
    '/services/web-development',
    '/services/ai-solutions',
    '/work',
    '/contact',
    '/blog',
  ]

  const projectSlugs = [
    'ecommerce-redesign',
    'ai-analytics-dashboard',
    'saas-brand-launch',
  ]

  const pages = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1 : 0.8,
  }))

  const projects = projectSlugs.map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }))

  return [...pages, ...projects]
}
