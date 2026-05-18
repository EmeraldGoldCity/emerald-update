import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const sanityClient = createClient({
  projectId: 'mlne952r',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  readingTime: number;
  featured: boolean;
  mainImage?: {
    asset: { _ref: string };
    alt?: string;
  };
  author?: { name: string };
  categories?: Array<{ title: string; slug: { current: string } }>;
  body?: unknown[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export const BLOG_LIST_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readingTime,
    featured,
    mainImage { asset, alt },
    "author": author->{ name },
    "categories": categories[]->{ title, slug }
  }
`;

export const BLOG_POST_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readingTime,
    featured,
    mainImage { asset, alt },
    "author": author->{ name },
    "categories": categories[]->{ title, slug },
    body,
    seo
  }
`;

export const BLOG_SLUGS_QUERY = `
  *[_type == "post"]{ "slug": slug.current }
`;
