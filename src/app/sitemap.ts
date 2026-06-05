import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nathandigitalsolutions.com.br'; // Atualize com o domínio real depois

  // Páginas principais
  const routes = [
    '',
    '/sobre',
    '/curriculo',
    '/projetos',
    '/moto-express',
    '/demos',
    '/demos/barbearia',
    '/demos/doceria',
    '/demos/padaria',
    '/demos/bordados',
    '/demos/loja-virtual',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...routes];
}
