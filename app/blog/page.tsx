// app/blog/page.tsx
export const metadata = {
  title: 'Blog | James Daw',
};

export default function BlogPage() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p>This page will list your blog posts.</p>
        {/* Later, map over your posts and use a PostPreview component */}
      </div>
    );
  }
  