import type { APIContext, APIRoute, ApiP } from 'astro';
import type { CollectionEntry } from 'astro:content';

const viewsMap = new Map<string, number>();

const getViewsBySlug = (slug: string): number => {
  const slugViewCount = viewsMap.get(slug);

  if (slugViewCount !== undefined) {
    viewsMap.set(slug, slugViewCount + 1);
    return slugViewCount + 1;
  }

  viewsMap.set(slug, 1);
  return 1;
};

type postViewsApiRouteContext = APIContext<CollectionEntry<'blog'>, { slug: string }>;

export const get: APIRoute<CollectionEntry<'blog'>, { slug: string }> = ({ params, request }) => {
  return {
    body: JSON.stringify({
      views: getViewsBySlug(params.slug),
    }),
  };
};
