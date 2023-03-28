import React from 'react'

import { useColorMode } from '@docusaurus/theme-common'
import Giscus from '@giscus/react'

export default function GiscusComponent() {
  const { colorMode } = useColorMode()

  return (
    <Giscus
      id="comments"
      repo="yancyqi2002/yx-blog"
      repoId="MDEwOlJlcG9zaXRvcnkzMjA4NDc0NTE="
      category="General"
      categoryId="DIC_kwDOEx--W84CRm6P"
      mapping="url"
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="zh-CN"
      loading="lazy"
    />
  )
}