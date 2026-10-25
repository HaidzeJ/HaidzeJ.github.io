/*
  Changelog entries, newest first. Each object becomes one <ReleaseEntry> on the page.
  DRAFT COPY: pulled from portfolio-assets/CONTENT_OUTLINE.md to test the layout.
  Rewrite or approve every entry before pushing to master (a push deploys the site).
*/

export interface Release {
  version: string;
  title: string;
  dates: string;
  shipped: string[];
  stack: string[];
  role: string;
  notes?: string[];
}

export const releases: Release[] = [
  {
    version: 'v5.0',
    title: 'This site',
    dates: '2026',
    shipped: ['This portfolio: a static, accessible Astro site deployed by GitHub Actions.'],
    stack: ['Astro', 'TypeScript', 'CSS', 'GitHub Actions', 'GitHub Pages', 'Claude Code'],
    role: 'Sole developer, working with Claude Code as an AI pair programmer. I set the requirements, made the design and architecture decisions, and reviewed every change before it was committed.',
    notes: ['The repo and its history are public. See the link in the footer.'],
  },
  {
    version: 'v2.4',
    title: 'Lull: Shopify migration',
    dates: '2023',
    shipped: [
      'Recreated lull.com on Shopify, replacing a custom Node.js (Koa) site.',
      'Section and block settings so non-developers could edit content.',
    ],
    stack: ['Shopify', 'Liquid', 'Dawn', 'JSON section schema', 'GitHub'],
    role: 'Main developer on the theme files. Teammates helped build some sections, and a few complex sections were outsourced near the end.',
    notes: ['Built on Shopify’s Dawn theme, not from scratch.'],
  },
  {
    version: 'v1.0',
    title: 'Freelance',
    dates: '2016–2018',
    shipped: ['A few basic WordPress sites, plus small content and CSS edits on Shopify and Kentico sites.'],
    stack: ['WordPress', 'Shopify', 'Kentico', 'CSS', 'Bootstrap'],
    role: 'Solo, entry-level work.',
  },
];
