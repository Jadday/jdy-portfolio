// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';

type Params = {
  params: { slug: string }
};

export default function BlogPostPage({ params }: Params) {
  // For now, display the slug; later, fetch post content based on slug.
  if (!params.slug) {
    notFound();
  }
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog Post: {params.slug}</h1>
      <p>This is where the blog post content will appear.</p>
    </div>
  );
}
