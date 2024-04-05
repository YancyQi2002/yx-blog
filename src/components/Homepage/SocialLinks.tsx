import React from 'react'

import clsx from 'clsx'

import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import Heading from '@theme/Heading'

import type { SocialLinksProps } from '@site/src/interface'
import styles from './styles.module.css'

// 定义 SocialLinks 组件
const SocialLinks: React.FC<SocialLinksProps> = ({ data }) => {
  // 使用 React.useCallback 来避免不必要的函数创建
  const createLink = React.useCallback(({ name, url, svg }) => (
    // eslint-disable-next-line ts/no-unsafe-assignment
    <React.Fragment key={name}>
      <div className={clsx(styles.stats, styles.shadow)}>
        <Link
          // eslint-disable-next-line ts/no-unsafe-assignment
          to={url}
          className={styles.btnUrl}
        >
          <div className={clsx('stat-figure', styles.btnIcon)}>
            {svg}
          </div>
          <div className={clsx('stat-value', styles.btnText)}>
            {name}
          </div>
        </Link>
      </div>
    </React.Fragment>
  ), [])

  // 使用 React.useMemo 来创建一个 socialLinksComponents 数组
  const socialLinksComponents = React.useMemo(() => data.map(createLink), [data, createLink])

  return (
    <div className={styles.socialContainer}>
      <Heading as="h1" className="text-center" style={{ margin: '-4rem auto 2rem' }}>
        <Translate>
          Social media
        </Translate>
      </Heading>
      <div className={clsx('row', styles.mediarow)}>
        {socialLinksComponents}
      </div>
    </div>
  )
}

export default SocialLinks
