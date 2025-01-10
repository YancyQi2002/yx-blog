import React, { type ReactNode } from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import type BlogPostItemType from '@theme/BlogPostItem';
import type { WrapperProps } from '@docusaurus/types';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import useIsBrowser from '@docusaurus/useIsBrowser';
import GiscusComponent from '@site/src/components/GiscusComponent';

type Props = WrapperProps<typeof BlogPostItemType>;

export default function BlogPostItemWrapper(props: Props): ReactNode {
  const { metadata } = useBlogPost()
  const isBrowser = useIsBrowser()

  const { frontMatter, slug, title } = metadata
  const { enableComments } = frontMatter
  
  let isCurrentUrlBlog = false

  if (isBrowser)
    isCurrentUrlBlog = window.location.pathname === '/blog'

  return (
    <>
      <BlogPostItem {...props} />
      {(Boolean(enableComments) && !isCurrentUrlBlog) && (
        <GiscusComponent />
      )}
    </>
  );
}
