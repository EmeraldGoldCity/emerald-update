import { createClient } from '@sanity/client';
import { createImageUrlBuilder as imageUrlBuilder } from '@sanity/image-url';
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
  mainImage?: NormalizedMainImage;
  author?: { name: string };
  categories?: Array<{ title: string; slug: { current: string } }>;
  categoryRefs?: string[];
  body?: unknown[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

// Normalized post type — used by queries that use the select() mainImage pattern.
// mainImage.url is always a direct URL; no urlFor() needed.
export interface NormalizedMainImage {
  url: string;
  alt?: string;
  lqip: string | null;
}

export interface NormalizedBlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt: string;
  readingTime?: number;
  featured?: boolean;
  mainImage?: NormalizedMainImage;
  author?: { name: string; avatarUrl?: string };
  categories?: Array<{ title: string; slug: string }>;
}

// Inline projection shared across all queries that need normalized image handling
// (handles both native Sanity images and remote URLs via mainImageExternal).
const MAIN_IMAGE_PROJECTION = `"mainImage": select(
  defined(mainImage.asset) => {
    "url": mainImage.asset->url,
    "alt": mainImage.alt,
    "lqip": mainImage.asset->metadata.lqip
  },
  defined(mainImageExternal.url) => {
    "url": mainImageExternal.url,
    "alt": mainImageExternal.alt,
    "lqip": null
  }
)`;

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
    ${MAIN_IMAGE_PROJECTION},
    "author": author->{ name },
    "categories": categories[]->{ title, slug },
    "categoryRefs": categories[]._ref,
    body[]{
      ...,
      _type == "image" => {
        ...,
        "url": asset->url,
        "alt": alt,
        "caption": caption,
      },
      _type == "externalImage" => {
        ...,
        "url": url,
        "alt": alt,
        "caption": caption,
        "source": source,
        "attribution": attribution,
      },
    },
    seo
  }
`;

export const BLOG_SLUGS_QUERY = `
  *[_type == "post"]{ "slug": slug.current }
`;

export const PAGE_SIZE = 9;

export const FEATURED_POST_QUERY = `
  *[_type == "post" && featured == true] | order(publishedAt desc)[0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readingTime,
    ${MAIN_IMAGE_PROJECTION},
    "author": author->{ name, "avatarUrl": image.asset->url },
    "categories": categories[]->{ title, "slug": slug.current }
  }
`;

// $featuredId may be null — the !defined() guard safely includes all posts in that case.
export const PAGINATED_POSTS_QUERY = `
  *[_type == "post" && (!defined($featuredId) || _id != $featuredId)]
    | order(publishedAt desc)
    [$start...$end] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readingTime,
    ${MAIN_IMAGE_PROJECTION},
    "author": author->{ name },
    "categories": categories[]->{ title, "slug": slug.current }
  }
`;

export const POSTS_COUNT_QUERY = `
  count(*[_type == "post" && (!defined($featuredId) || _id != $featuredId)])
`;

export const RELATED_POSTS_QUERY = `
  *[_type == "post"
    && _id != $currentId
    && count(categories[@._ref in $categoryRefs]) > 0
  ] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readingTime,
    ${MAIN_IMAGE_PROJECTION},
    "author": author->{ name },
    "categories": categories[]->{ title, "slug": slug.current }
  }
`;
