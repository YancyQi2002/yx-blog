import React from 'react'

import { useBlogPost } from '@docusaurus/theme-common/internal'
import type { WrapperProps } from '@docusaurus/types'
import useIsBrowser from '@docusaurus/useIsBrowser'
import GiscusComponent from '@site/src/components/GiscusComponent'
import BlogPostItem from '@theme-original/BlogPostItem'
import type BlogPostItemType from '@theme/BlogPostItem'

type Props = WrapperProps<typeof BlogPostItemType>

export default function BlogPostItemWrapper(props: Props): JSX.Element {
  const { metadata } = useBlogPost()
  const isBrowser = useIsBrowser()

  // eslint-disable-next-line unused-imports/no-unused-vars
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
