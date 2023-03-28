/* eslint-disable @docusaurus/no-untranslated-text */
import React, { useEffect } from 'react'

import { themeChange } from 'theme-change'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { Temporal } from '@js-temporal/polyfill'
import { HomepageHeader } from '@site/src/components/Homepage/HomepageHeader'
import { SocialLinks } from '@site/src/components/Homepage/SocialLinks'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Layout from '@theme/Layout'

let dateStr = ''

// const date: Date = new Date()
// const fullYear: number = date.getFullYear()
// const monthNumStr = (date.getMonth() + 1) <= 10 ? (`0${(date.getMonth() + 1).toString()}`) : (date.getMonth() + 1)
// const dateNumStr = date.getDate() <= 10 ? (`0${date.getDate().toString()}`) : date.getDate()
// dateStr = `${monthNumStr}-${dateNumStr}`

const date: Temporal.PlainDate = Temporal.PlainDate.from(Temporal.Now.plainDateISO().toString())
const fullYear: number = date.year
const monthNumStr: string | number = date.month <= 10 ? (`0${date.month}`) : date.month
const dateNumStr: string | number = date.day <= 10 ? (`0${date.day}`) : date.day
dateStr = `${monthNumStr}-${dateNumStr}`

const isLeapYear = (year: number) => {
  return !!(year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)
}

const qinMingDate = (year: number) => {
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
]
dateArray.push(qinMingDate(fullYear))
dateArray.sort()

const socialLinks: {
  name: string
  url: string
  svg: JSX.Element
}[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/YancyQi2002',
    svg: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/QiYancy',
    svg: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Twitter</title>
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/宇轩-戚-73827220b',
    svg: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>LinkedIn</title>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/xiaoyixiu2002',
    svg: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Instagram</title>
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
      </svg>
    ),
  },
  {
    name: 'Bilibili',
    url: 'https://space.bilibili.com/314108035',
    svg: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Bilibili</title>
        <path d="M17.813 3.65301H18.667C20.177 3.70701 21.436 4.23101 22.44 5.22701C23.444 6.22201 23.964 7.47601 24 8.98701V16.347C23.964 17.857 23.444 19.116 22.44 20.12C21.436 21.124 20.178 21.644 18.667 21.68H5.333C3.823 21.644 2.564 21.124 1.56 20.12C0.556 19.116 0.036 17.858 0 16.347V8.98701C0.036 7.47601 0.556 6.22201 1.56 5.22701C2.564 4.23101 3.822 3.70701 5.333 3.65301H6.107L4.933 2.53301C4.81226 2.41546 4.71688 2.27443 4.65273 2.11861C4.58858 1.96279 4.55702 1.79549 4.56 1.62701C4.56 1.27101 4.684 0.969007 4.933 0.720007L4.96 0.693007C5.227 0.444007 5.533 0.320007 5.88 0.320007C6.227 0.320007 6.533 0.444007 6.8 0.693007L9.653 3.44001C9.724 3.51101 9.787 3.58201 9.84 3.65301H14.107C14.1486 3.57391 14.2026 3.502 14.267 3.44001L17.12 0.693007C17.387 0.444007 17.693 0.320007 18.04 0.320007C18.387 0.320007 18.702 0.471007 18.969 0.720007C19.236 0.969007 19.36 1.27101 19.36 1.62701C19.36 1.98201 19.236 2.28401 18.987 2.53301L17.813 3.65301ZM5.333 6.24001C4.587 6.25801 3.96 6.51601 3.453 7.01301C2.947 7.51101 2.684 8.14301 2.667 8.90701V16.427C2.684 17.191 2.947 17.822 3.453 18.32C3.96 18.818 4.587 19.076 5.333 19.093H18.667C19.413 19.076 20.04 18.818 20.547 18.32C21.053 17.822 21.316 17.191 21.333 16.427V8.90701C21.316 8.14201 21.053 7.51101 20.547 7.01301C20.04 6.51601 19.413 6.25801 18.667 6.24001H5.333ZM8 10.107C8.373 10.107 8.684 10.231 8.933 10.48C9.183 10.729 9.316 11.049 9.333 11.44V12.613C9.316 13.004 9.183 13.324 8.933 13.573C8.684 13.823 8.373 13.947 8 13.947C7.627 13.947 7.316 13.822 7.067 13.573C6.817 13.324 6.684 13.004 6.667 12.613V11.44C6.667 11.067 6.796 10.751 7.053 10.493C7.311 10.236 7.627 10.107 8 10.107ZM16 10.107C16.373 10.107 16.684 10.231 16.933 10.48C17.183 10.729 17.316 11.049 17.333 11.44V12.613C17.316 13.004 17.183 13.324 16.933 13.573C16.684 13.823 16.373 13.947 16 13.947C15.627 13.947 15.316 13.822 15.067 13.573C14.817 13.324 14.684 13.004 14.667 12.613V11.44C14.684 11.049 14.817 10.729 15.067 10.48C15.316 10.231 15.627 10.107 16 10.107Z" />
      </svg>
    ),
  },
]

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
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
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className="container padding-vert">
          <SocialLinks data={ socialLinks } />
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}