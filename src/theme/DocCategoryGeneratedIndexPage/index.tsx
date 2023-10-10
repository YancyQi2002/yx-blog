import React, { useEffect } from 'react'

import { themeChange } from 'theme-change'

import type { WrapperProps } from '@docusaurus/types'
import DocCategoryGeneratedIndexPage
  from '@theme-original/DocCategoryGeneratedIndexPage'
import type DocCategoryGeneratedIndexPageType
  from '@theme/DocCategoryGeneratedIndexPage'

import {
  dateNumStr,
  fullYear,
  monthNumStr,
} from '../../interface'

type Props = WrapperProps<typeof DocCategoryGeneratedIndexPageType>

const dateStr = `${monthNumStr}-${dateNumStr}`

function isLeapYear(year: number) {
  return !!(year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)
}

function qinMingDate(year: number) {
  return (isLeapYear(year) || isLeapYear(year - 1))
    ? '04-04'
    : '04-05'
}

const dateArray: string[] = [
  '01-19',
  '03-06',
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

export default function DocCategoryGeneratedIndexPageWrapper(props: Props): JSX.Element {
  useEffect(() => {
    themeChange(false)
  // 👆 false parameter is required for react project
  }, [])

  if (typeof window !== 'undefined') {
    const theme = localStorage.getItem('theme')
    if (dateArray.includes(dateStr)) {
      document.documentElement.setAttribute('data-theme', theme || 'autumn')
      document.documentElement.style.filter = 'grayscale(100%)'
    }
    else {
      document.documentElement.setAttribute('data-theme', theme || 'light')
    }
  }

  return (
    <>
      <DocCategoryGeneratedIndexPage {...props} />
    </>
  )
}