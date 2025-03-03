interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <p>Post: {slug}</p>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return {
    title: `${slug} | James Daw`,
  };
}
