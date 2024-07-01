import React, { Suspense, lazy, useEffect } from 'react'

import { themeChange } from 'theme-change'

import { PageMetadata } from '@docusaurus/theme-common'
import { translate } from '@docusaurus/Translate'
import {
  dateNumStr,
  fullYear,
  monthNumStr,
  qinMingDate,
} from '@site/src/interface'
import Layout from '@theme/Layout'

const NotFoundContent = lazy(async () => import('./Content/index.tsx'))

const dateStr = `${monthNumStr}-${dateNumStr}`

const dateArray: string[] = [
  '01-19',
  '03-06',
  '03-07',
  '03-08',
  '06-10',
  '07-04',
  '07-12',
  '07-29',
  '09-09',
  '10-27',
  '11-30',
  qinMingDate(fullYear),
].sort()

export default function Index(): JSX.Element {
  useEffect(() => {
    themeChange(false)
  // 👆 false parameter is required for react project
  }, [])

  if (typeof window !== 'undefined') {
    const theme = localStorage.getItem('theme')
    const effectiveTheme = theme !== null && theme !== '' ? theme : 'light'
    if (dateArray.includes(dateStr)) {
      document.documentElement.setAttribute('data-theme', effectiveTheme === 'light' ? 'autumn' : effectiveTheme)
      document.documentElement.style.filter = 'grayscale(100%)'
    }
    else {
      document.documentElement.setAttribute('data-theme', effectiveTheme)
    }
  }

  const title = translate({
    id: 'theme.NotFound.title',
    message: 'Page Not Found',
  })

  return (
    <>
      <PageMetadata title={title} />
      <Layout>
        <Suspense fallback={(
          <div className="flex justify-center items-center">
            <div className="animate-spin text-4xl text-blue-500">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          </div>
        )}
        >
          <NotFoundContent />
        </Suspense>
      </Layout>
    </>
  )
}
