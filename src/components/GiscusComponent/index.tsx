import { useColorMode } from '@docusaurus/theme-common'

import Giscus from '@giscus/react'
import React from 'react'

export default function GiscusComponent() {
  const { colorMode } = useColorMode()

  return (
    <Giscus
      id="comments"
      repo="yancyqi2002/yx-blog"
      repoId="R_kgDOJPXl2A"
      category="General"
      categoryId="DIC_kwDOJPXl2M4CXTiR"
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
