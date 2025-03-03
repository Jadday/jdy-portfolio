interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps) {
  return {
    title: params.slug + " | James Daw", // Sets the title dynamically based on the slug.
  };
}

export default async function Page({ params }: PageProps) {
  return <p>Post: {params.slug}</p>;
}
