import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
    // If params is a promise, await it.
    const { slug } = await Promise.resolve(params);
    // Build the file path based on the slug provided in the URL.
    const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
    
    let fileContents: string;
    try {
        fileContents = await fs.readFile(filePath, 'utf8');
    } catch (error) {
        // The file doesn't exist so we show the "not found" page.
        notFound();
    }
    
    const { data, content } = matter(fileContents);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}

export async function generateMetadata({ params }: PageProps) {
    // Await params if it is a promise.
    const { slug } = await Promise.resolve(params);
    const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
    
    let fileContents: string;
    try {
        fileContents = await fs.readFile(filePath, 'utf8');
    } catch (error) {
        notFound();
    }
    
    const { data } = matter(fileContents);

    return {
        title: `${data.title} | James Daw`,
    };
}