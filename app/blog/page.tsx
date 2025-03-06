// filepath: c:\Users\jadda\jdy-portfolio\app\blog\page.tsx
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | James Daw',
};

export default async function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = await fs.readdir(postsDirectory);

  const posts = await Promise.all(
    filenames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(filePath, 'utf8');
      const { data } = matter(fileContents);
      return data;
    })
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        {posts.map((post) => (
          <div key={post.slug} className="border rounded p-4 hover:shadow-lg">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-sm mb-2">{post.date}</p>
            {post.summary && (
              <p className="text-md mb-2">
                {post.summary}
              </p>
            )}
            <Link href={`/blog/${post.slug}`} className="text-terminalRed body-link">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}