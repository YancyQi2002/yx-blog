import React from 'react'

import clsx from 'clsx'

import Translate from '@docusaurus/Translate'
import type { FeatureItem } from '@site/src/interface'
import mountainSvg from '@site/static/img/undraw_docusaurus_mountain.svg'
import reactSvg from '@site/static/img/undraw_docusaurus_react.svg'
import treeSvg from '@site/static/img/undraw_docusaurus_tree.svg'
import Heading from '@theme/Heading'

import styles from './styles.module.css'

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: mountainSvg,
    description: (
      <>
        <Translate>
          Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
        </Translate>
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: treeSvg,
    description: (
      <>
        <Translate>
          Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the
        </Translate>
        &nbsp;&nbsp;
        <code>
          <Translate>
            docs
          </Translate>
        </code>
        &nbsp;&nbsp;
        <Translate>
          directory.
        </Translate>
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: reactSvg,
    description: (
      <>
        <Translate>
          Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
        </Translate>
      </>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <Heading as="h1" className='text-center'>
          <Translate>
            Why use Docusaurus to build a blog？
          </Translate>
        </Heading>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}