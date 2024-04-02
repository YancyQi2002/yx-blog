import React from 'react'

import clsx from 'clsx'

import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import Heading from '@theme/Heading'

import type { SocialLinksProps } from '@site/src/interface'
import styles from './styles.module.css'

// 定义SocialLinks组件
const SocialLinks: React.FC<SocialLinksProps> = ({ data }) => {
  // 将socialLinksComponents数组定义为一个状态，并使用React.useMemo()来缓存它
  const [socialLinksComponents, setSocialLinksComponents] = React.useState<JSX.Element[]>([])
  React.useMemo(() => {
    // 遍历数据数组以创建社交链接组件数组
    setSocialLinksComponents(data.map(({ name, url, svg }) => (
      <div className="stats shadow">
        <div className={clsx('stat', styles.btn)} key={name}>
          <Link
            to={url}
            className={clsx('hover:no-underline', styles.btnUrl)}
          >
            <div className={clsx('stat-figure', styles.btnIcon)}>
              {svg}
            </div>
            <div className={clsx('stat-value', styles.btnText)}>
              {name}
            </div>
          </Link>
        </div>
      </div>
    )))
  }, [data])

  return (
    <div className={clsx('-mt-48', styles.socialContainer)}>
      <Heading as="h1" className="text-center" style={{ margin: '-4rem auto 2rem' }}>
        <Translate>
          Social media
        </Translate>
      </Heading>
      <div className="row justify-around! items-center! z-10">
        {socialLinksComponents}
      </div>
    </div>
  )
}

export default SocialLinks
