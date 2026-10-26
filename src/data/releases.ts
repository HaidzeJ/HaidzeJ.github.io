/*
  Changelog entries, newest first. Each object becomes one <ReleaseEntry> on the page.
  DRAFT COPY: built from portfolio-assets/CONTENT_OUTLINE.md and Jeremiah's answers.
  Review every entry before pushing to master (a push deploys the site).

  featured: true  -> large card with an image (or a placeholder) and a summary.
  featured: false -> compact one-line row that expands on click.
  shipped / role / notes always sit behind a "Details" toggle.
*/
import type { ImageMetadata } from 'astro';

// Images live in src/assets so Astro can resize them and convert them to
// modern formats at build time. Lull images are Wayback Machine captures and
// game images come from Jeremiah's Adobe Portfolio (placeholders for now).
import thisSite from '../assets/releases/this-site.jpg';
import ryzePortal from '../assets/releases/ryze-portal.jpg';
import lullHomeEvergreen from '../assets/releases/lull-home-evergreen.jpg';
import lullShopifyPdp from '../assets/releases/lull-shopify-pdp.jpg';
import lullNuxtLanding from '../assets/releases/lull-nuxt-landing.jpg';
import gameSurvival from '../assets/releases/game-survival.jpg';
import gameSightbound from '../assets/releases/game-sightbound.jpg';
import gameArena from '../assets/releases/game-arena.jpg';
import gameEnergy from '../assets/releases/game-energy.jpg';

export interface ReleaseImage {
  src: ImageMetadata;
  alt: string;
}

export interface Release {
  version: string;
  title: string;
  dates: string;
  summary: string;
  stack: string[];
  featured?: boolean;
  // One image shows full width; several show as a grid.
  images?: ReleaseImage[];
  // Featured entries without an image show this label in a placeholder box.
  placeholder?: string;
  // Optional outbound link, e.g. a credential or a project page.
  link?: { href: string; label: string };
  shipped?: string[];
  role?: string;
  notes?: string[];
}

export const releases: Release[] = [
  {
    version: 'v5.0',
    title: 'This site',
    dates: '2026',
    featured: true,
    summary: 'A fast, accessible static portfolio built with Astro and deployed by GitHub Actions, written as a changelog.',
    images: [{ src: thisSite, alt: 'The share card for this site: my name, my role, and three changelog version tags.' }],
    stack: ['Astro', 'TypeScript', 'CSS', 'GitHub Actions', 'GitHub Pages', 'Claude Code'],
    role: 'Sole developer, working with Claude Code as an AI pair programmer.',
    notes: ['The repo and its history are public. See the link at the bottom of the page.'],
  },
  {
    version: 'v4.1',
    title: 'AWS Certified Cloud Practitioner',
    dates: 'Apr 2026',
    summary: 'Earned the AWS Certified Cloud Practitioner certification.',
    stack: ['AWS'],
    link: {
      href: 'https://www.credly.com/badges/90d979d6-d6ef-43ef-afc7-663ca744c025/public_url',
      label: 'Verify on Credly',
    },
  },
  {
    version: 'v4.0',
    title: 'RYZE Superfoods: customer portal',
    dates: 'Nov 2025 – Jan 2026 · Contract',
    featured: true,
    summary: 'Refactored a Recharge subscription portal built in Vue and embedded in a Shopify store, where customers manage subscriptions, delivery schedules and orders.',
    images: [{ src: ryzePortal, alt: 'The RYZE customer portal home: a welcome header, links to orders, subscriptions and account details, a promo banner and product recommendations, December 2025.' }],
    stack: ['Vue 3', 'Vue 2', 'JavaScript', 'TypeScript', 'Recharge', 'Shopify'],
    shipped: [
      'Moved code written in mixed Vue 2 and Vue 3 styles toward consistent Vue 3.',
      'Removed duplicated logic and split large pieces into smaller, reusable ones.',
    ],
    role: 'Joined an existing codebase. Changes went through peer review before going to production.',
    notes: ['Some exposure to Webflow: small edits to existing pages and experiments.'],
  },
  {
    version: 'v3.0',
    title: 'SNHU: B.S. Game Programming & Development',
    dates: 'Jul 2024 – Aug 2025',
    featured: true,
    summary: 'A bachelor’s degree in game programming, with C++ and Blueprint projects in Unreal Engine. Shown here: four solo prototypes, from a light-based 2D platformer to a first-person arena shooter.',
    images: [
      { src: gameSurvival, alt: 'Survival Game: a low-poly forest clearing with health, thirst, comfort and stamina bars.' },
      { src: gameSightbound, alt: 'Sightbound: the light-mask material graph in the Unreal Engine editor.' },
      { src: gameArena, alt: 'First Person Arena Shooter: a player running through the arena past blue and yellow walls.' },
      { src: gameEnergy, alt: 'Energy Quest: the player character on a metal platform in a side-scrolling level.' },
    ],
    stack: ['Unreal Engine', 'C++', 'Blueprints', 'Paper2D', 'Behavior Trees'],
    shipped: [
      'Sightbound: a 2D platformer prototype built around a light mechanic that limits what the player can see, using a custom glowing light-mask material.',
      'Survival Game: a 3D survival prototype with a cozy look, rebuilt in Blueprints from a C++ class project to see how far I could get without tutorials.',
      'First Person Arena Shooter: AI enemies in an enclosed arena, with a scoreboard and item pickups. My first Unreal project.',
      'Energy Quest: a 2.5D side-scrolling time challenge where the player collects energy to face a final boss.',
    ],
    role: 'The four prototypes shown are solo projects, each built in a short sprint.',
    notes: [
      'Coursework across the program included C++ projects in Unreal Engine. The four prototypes shown are built mostly with Blueprints.',
      'Some art comes from itch.io asset packs, credited on each project.',
    ],
  },
  {
    version: 'v2.4',
    title: 'Lull: Shopify migration',
    dates: '2023',
    featured: true,
    summary: 'Recreated lull.com on Shopify, replacing a custom Node.js site, with sections the marketing team could edit without a developer.',
    images: [{ src: lullShopifyPdp, alt: 'The Original Premium Mattress product page on Shopify, with size and price options, September 2023.' }],
    stack: ['Shopify', 'Liquid', 'Dawn', 'JSON section schema', 'GitHub'],
    shipped: [
      'Recreated lull.com on Shopify, replacing a custom Node.js (Koa) site.',
      'Section and block settings so non-developers could edit content.',
    ],
    role: 'Main developer on the theme files. Teammates helped build some sections, and a few complex sections were outsourced near the end.',
    notes: ['Extended from the Dawn theme, not from scratch.'],
  },
  {
    version: 'v2.3',
    title: 'Lull: Nuxt landing pages',
    dates: '2020–2023',
    featured: true,
    summary: 'Rebuilt landing pages in a Vue/Nuxt static-site project so we could run experiments against the mirror landing pages on the legacy site.',
    images: [{ src: lullNuxtLanding, alt: 'A Lull landing page from the Nuxt project: “Life-Changing Sleep Starts Here” over a photo of the mattress, April 2021.' }],
    stack: ['Vue', 'Nuxt', 'Sass', 'Static site generation'],
    shipped: [
      'Rebuilt landing pages inside a Vue/Nuxt static-site project so they could be used in experiments.',
      'Kept performance a priority, so the pages could be compared fairly against the same pages on the old site.',
    ],
    role: 'A senior developer set up the project. I worked inside it, rebuilding landing pages.',
  },
  {
    version: 'v2.2',
    title: 'Lull: A/B experiments',
    dates: '2018–2024',
    summary: 'Set up A/B experiments from specs and built the variant code: promo sections, landing pages and layout changes.',
    stack: ['Google Optimize', 'Optimizely', 'JavaScript', 'CSS', 'Sass', 'Bootstrap'],
    role: 'I configured the experiments and built the variant code.',
    notes: ['The testing tools changed several times over the years.'],
  },
  {
    version: 'v2.1',
    title: 'Lull: day-to-day releases',
    dates: '2018–2024',
    featured: true,
    summary: 'Promotions, sale campaigns and product launches: most of my regular work, shipped through pull requests, preview environments and QA.',
    images: [{ src: lullHomeEvergreen, alt: 'The Lull homepage: “Meet the Mattress of Your Dreams” above a stack of Lull mattresses, October 2023.' }],
    stack: ['Bootstrap', 'Sass', 'Nunjucks', 'Node.js', 'Koa', 'Docker', 'Shopify', 'Liquid', 'Git', 'GitHub'],
    role: 'Each change went through a pull request, review in a preview environment, QA, deploy and a retest in production.',
  },
  {
    version: 'v2.0',
    title: 'Lull: joined as a Junior Front-End Developer',
    dates: 'Oct 2018',
    summary: 'Joined the front-end team at Lull, a direct-to-consumer mattress and bedding company. Promoted to Front-End Developer after about two years, and stayed through May 2024.',
    stack: ['HTML', 'CSS', 'Sass', 'JavaScript', 'jQuery', 'Bootstrap', 'Nunjucks', 'Git'],
  },
  {
    version: 'v1.0',
    title: 'Freelance',
    dates: '2016–2018',
    summary: 'A few basic WordPress sites, plus small content and CSS edits on Shopify and Kentico sites. Solo, entry-level work.',
    stack: ['WordPress', 'Shopify', 'Kentico', 'CSS', 'Bootstrap'],
  },
];
