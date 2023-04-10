// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React from 'react'

import clsx from 'clsx'

import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import Heading from '@theme/Heading'

import styles from './styles.module.css'

// 定义每个社交链接对象的形状
interface SocialLink {
  name: string // 社交媒体平台的名称
  url: string // 社交媒体平台的URL
  svg: string // 社交媒体平台的SVG图标
}

// 定义SocialLinks组件的props形状
interface SocialLinksProps {
  data: SocialLink[] // 一个SocialLink对象的数组
}

// 定义SocialLinks组件
export const SocialLinks: React.FC<SocialLinksProps> = ({ data }) => {
  // 遍历数据数组以创建社交链接组件数组
  const socialLinksComponents = data.map(({ name, url, svg }) => (
    <div className={clsx('col', styles.col)} key={name}>
      <Link
        to={url}
        className={clsx('button button--outline button--primary', styles.btn)}
      >
        <span className={styles.btnIcon}>{svg}</span>
        <span className={styles.btnText}>{name}</span>
      </Link>
    </div>
  ))

  return (
    <div className={clsx('-mt-48', styles.socialContainer)}>
      <Heading as="h1" className='text-center' style={{ margin: '-4rem auto 2rem' }}>
        <Translate>
          Social media
        </Translate>
      </Heading>
      <div className={clsx('row', styles.socialLinks)}>
        {socialLinksComponents}
      </div>
    </div>
  )
}

export default SocialLinks