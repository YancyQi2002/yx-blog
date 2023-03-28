/* eslint-disable react/prop-types */
import React from 'react'

import clsx from 'clsx'

import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import Heading from '@theme/Heading'

import styles from './styles.module.css'

export const SocialLinks = ({ data }) => {
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