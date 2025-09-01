import type { WrapperProps } from '@docusaurus/types'
import type BlogPostItemType from '@theme/BlogPostItem'
import type { ReactNode } from 'react'
import { useBlogPost } from '@docusaurus/plugin-content-blog/client'
import useIsBrowser from '@docusaurus/useIsBrowser'
import GiscusComponent from '@site/src/components/GiscusComponent'
import BlogPostItem from '@theme-original/BlogPostItem'
import React from 'react'

type Props = WrapperProps<typeof BlogPostItemType>

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
  )
}
