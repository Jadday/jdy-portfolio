// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { JSX } from 'react';

type PageProps = {
  params: {
    slug: string;
  }
};

export default async function BlogPostPage({ params }: PageProps): Promise<JSX.Element> {
  if (!params.slug) {
    notFound();
  }
  // Future asynchronous data fetching can be done here.
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog Post: {params.slug}</h1>
      <p>This is where the blog post content will appear.</p>
    </div>
  );
}
