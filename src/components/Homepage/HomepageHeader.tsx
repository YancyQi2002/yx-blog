import React from 'react'

import clsx from 'clsx'

import Translate from '@docusaurus/Translate'
import Heading from '@theme/Heading'

import styles from './styles.module.css'

export function HomepageHeader() {
  return (
    <header className={clsx('hero pb-64', styles.heroBanner)}>
      <div className='container'>
        <Heading as="h1" className='hero__title'>
          <Translate>
            Hello. I&#39;m
          </Translate>
          <span className={styles.highlighted}>
            <Translate>
              &nbsp;&nbsp;Yancy Qi
            </Translate>
            </span>
            <Translate>
              ,
            </Translate>
          <br />
          <Translate>
            Front-end Developer.
          </Translate>
        </Heading>
        <p className='hero__subtitle'>
          <Translate>
            Software engineer interested in personal growth and tech trends.
          </Translate>
          <br/>
        </p>
      </div>
    </header>
  )
}