import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { const base='https://westerncarsbrighton.co.uk'; return ['','/services/','/about/','/contact/','/terms/'].map(path=>({url:base+path,lastModified:new Date()})); }
