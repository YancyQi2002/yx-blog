import type { SocialLinksProps } from '@site/src/interface'

import Link from '@docusaurus/Link'

import Translate from '@docusaurus/Translate'
import Heading from '@theme/Heading'
import clsx from 'clsx'

import React from 'react'
import styles from './styles.module.css'

// 定义 SocialLinks 组件
const SocialLinks: React.FC<SocialLinksProps> = ({ data }) => {
  // 使用 React.useCallback 来避免不必要的函数创建
  const createLink = React.useCallback(({ name, url, svg }) => (
    <React.Fragment key={name}>
      <div className={clsx('stats', styles.shadow)}>
        <div
          className='stat place-items-center btn btn-outline rounded-md'
          style={{height: '100%',border: 'none'}}
        >
          <Link
            to={url}
            className='w-32'
          >
            <div className={clsx('stat-figure', styles.btnIcon)}>
              {svg}
            </div>
            <div className={clsx('stat-value', 'text-2xl')}>
              {name}
            </div>
          </Link>
        </div>
      </div>
    </React.Fragment>
  ), [])

  // 使用 React.useMemo 来创建一个 socialLinksComponents 数组
  const socialLinksComponents = React.useMemo(() => data.map(createLink), [data, createLink])

  return (
    <div className='px-0 pt-8 pb-16'>
      <Heading as="h1" className={styles.socialTitle}>
        <Translate>
          Social media
        </Translate>
      </Heading>
      <div
        className='row my-10 space-x-1 z-10'
        style={{justifyContent: 'space-between'}}
      >
        {socialLinksComponents}
      </div>
      <br />
    </div>
  )
}

export default SocialLinks
