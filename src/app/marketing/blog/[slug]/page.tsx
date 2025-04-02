import React from 'react';
import { getPostBySlug } from '@/lib/blog';
import MarkdownContent from '@/components/blog/MarkdownContent';

interface PageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);

  return (
    <article className="blog-post">
      <h1>{post.title}</h1>
      <MarkdownContent content={post.content} />
    </article>
  );
}