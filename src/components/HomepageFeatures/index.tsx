// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React from 'react'

import clsx from 'clsx'

import Translate from '@docusaurus/Translate'
import Heading from '@theme/Heading'

import styles from './styles.module.css'

interface FeatureItem {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>> | any
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
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
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
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
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
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