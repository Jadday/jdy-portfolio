"use client"
import React from 'react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function Page({ params }: PageProps) {
  const resolvedParams = React.use(params);
  return <p>Post: {resolvedParams.slug}</p>;
}