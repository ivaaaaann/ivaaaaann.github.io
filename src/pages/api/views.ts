import type { APIContext } from 'astro';
import { db, sql, Views } from 'astro:db';

type ResponseData = {
  slug: string;
  count: number;
};

export const GET = async ({ params }: APIContext<Object, { slug: string }>) => {
  const slug = params.slug;

  try {
    const data: ResponseData = await db
      .insert(Views)
      .values({
        slug: slug,
        count: 1,
      })
      .onConflictDoUpdate({
        target: Views.slug,
        set: {
          count: sql`count + 1`,
        },
      })
      .returning({
        slug: Views.slug,
        count: Views.count,
      })
      .then((res) => res[0]);

    return Response.json(
      {
        data,
      },
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (error) {
    return Response.json({}, { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
