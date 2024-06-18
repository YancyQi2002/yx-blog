/* eslint-disable ts/no-require-imports */
/* eslint-disable ts/no-var-requires */
import { themes as prismThemes } from 'prism-react-renderer'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

import type * as Preset from '@docusaurus/preset-classic'
import remarkPluginNpm2yarn from '@docusaurus/remark-plugin-npm2yarn'
// Note: type annotations allow type checking and IDEs autocompletion
import type { Config } from '@docusaurus/types'
import { Temporal } from '@js-temporal/polyfill'

const OriginTrial = 'AsQfvYHVhFEUOGL9ddGU33VJ525p51lAhfmfjcqod4JV36SUb6h5bvanj/4Om/MRcAJpK8mTlXHppPn0FSWJvAQAAAB8eyJvcmlnaW4iOiJodHRwczovL3l4LWJsb2cudmVyY2VsLmFwcDo0NDMiLCJmZWF0dXJlIjoiVW5yZXN0cmljdGVkU2hhcmVkQXJyYXlCdWZmZXIiLCJleHBpcnkiOjE3MDk4NTU5OTksImlzU3ViZG9tYWluIjp0cnVlfQ=='

let dateStr = ''

// Date object
// const date = new Date()
// const fullYear = date.getFullYear()
// const monthNumStr = (date.getMonth() + 1) <= 10 ? (`0${(date.getMonth() + 1).toString()}`) : (date.getMonth() + 1)
// const dateNumStr = date.getDate() <= 10 ? (`0${date.getDate().toString()}`) : date.getDate()
// dateStr = `${monthNumStr}-${dateNumStr}`

// 使用 Temporal API 获取日期
const date = Temporal.PlainDate.from(Temporal.Now.plainDateISO().toString())
// console.log(`${date.year}-${date.month}-${date.day}`)
const fullYear = date.year
const monthNumStr = date.month <= 10 ? (`0${date.month}`) : date.month
const dateNumStr = date.day <= 10 ? (`0${date.day}`) : date.day
dateStr = `${monthNumStr}-${dateNumStr}`

// 判断是否为闰年
function isLeapYear(year) {
  return !!(year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)
}

// 获取清明节日期
function qinMingDate(year) {
  return (isLeapYear(year) || isLeapYear(year - 1))
    ? '04-04'
    : '04-05'
}

// 日期数组
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

// 设置主题
if (typeof window !== 'undefined') {
  const theme = localStorage.getItem('theme')
  if (dateArray.includes(dateStr)) {
    document.documentElement.setAttribute('data-theme', theme !== null && theme !== '' ? theme : 'autumn')
    document.documentElement.style.filter = 'grayscale(100%)'
  }
  else {
    document.documentElement.setAttribute('data-theme', theme !== null && theme !== '' ? theme : 'light')
  }
}

const config: Config = {
  title: 'Yancy Qi′s Blog',
  tagline: '-',
  url: 'https://yx-blog.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-me.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'YancyQi2002', // Usually your GitHub org/user name.
  projectName: 'yx-blog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  stylesheets: [
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      type: 'text/css',
    },
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww',
      crossorigin: 'anonymous',
    },
    {
      href: 'https://fonts.font.im/css?family=Raleway:500,700&display=swap',
      type: 'text/css',
      rel: 'stylesheet',
    },
    // {
    //   href: "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
    //   type: "text/css",
    //   rel: "stylesheet",
    // },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve ('./sidebars.ts'),
          remarkPlugins: [
            remarkMath,
            [
              remarkPluginNpm2yarn,
              {
                sync: true,
              },
            ],
          ],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: '',
        },
        blog: {
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            frontMatter?.hide_reading_time === true
              ? undefined
              : defaultReadingTime ({ content }),
          feedOptions: {
            type: 'all',
            copyright: `Copyright © 2020 — ${fullYear} Yancy Qi  Built with Docusaurus.`,
          },
          path: './blog',
          blogSidebarTitle: '近期文章',
          blogSidebarCount: 8,
          remarkPlugins: [
            remarkMath,
            [
              remarkPluginNpm2yarn,
              {
                sync: true,
              },
            ],
          ],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: '',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    'docusaurus2-dotenv',
    '@docusaurus/theme-live-codeblock',
    // eslint-disable-next-line unused-imports/no-unused-vars
    async function myTailwindcssPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        /**
         * @param {{ plugins: typeof import("tailwindcss")[] }} postcssOptions
         */
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require ('tailwindcss'))
          postcssOptions.plugins.push(require ('autoprefixer'))
          postcssOptions.plugins.push(require ('postcss-preset-env'))
          return postcssOptions
        },
      }
    },
    // eslint-disable-next-line unused-imports/no-unused-vars
    async function myCrossPlugin(context, options) {
      return {
        name: 'docusaurus-cross',
        // eslint-disable-next-line unused-imports/no-unused-vars
        configureWebpack(config, isServer, utils, content) {
          return {
            mergeStrategy: { 'module.rules': 'prepend' },
            devServer: {
              headers: {
                'Cross-Origin-Opener-Policy': 'same-origin',
                'Cross-Origin-Embedder-Policy': 'require-corp',
                'Origin-Trial': OriginTrial,
              },
            },
          }
        },
      }
    },
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      ({
        indexDocs: true,
        indexBlog: true,
        indexPages: false,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
        docsDir: 'docs',
        blogDir: 'blog',
        highlightSearchTermsOnTargetPage: true,
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        language: ['zh', 'en'],
      }),
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'Yancy Qi′s Blog',
      logo: {
        alt: 'Yancy Qi′s Blog',
        src: 'img/logo-me.svg',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Themes',
          position: 'right',
          items: [
            {
              type: 'html',
              value: '<select data-choose-theme class="select w-full bg-gray-100 rounded-md bg-opacity-5"><option value="">Default</option><option value="acid">Acid</option><option value="aqua">Aqua</option><option value="autumn">Autumn</option><option value="black">Black</option><option value="bumblebee">Bumblebee</option><option value="business">Business</option><option value="cmyk">Cmyk</option><option value="coffee">Coffee</option><option value="corporate">Corporate</option><option value="cupcake">Cupcake</option><option value="cyberpunk">Cyberpunk</option><option value="dark">Dark</option><option value="dim">Dim</option><option value="dracula">Dracula</option><option value="emerald">Emerald</option><option value="fantasy">Fantasy</option><option value="forest">Forest</option><option value="garden">Garden</option><option value="halloween">Halloween</option><option value="lemonade">Lemonade</option><option value="light">Light</option><option value="lofi">Lofi</option><option value="luxury">Luxury</option><option value="night">Night</option><option value="nord">Nord</option><option value="pastel">Pastel</option><option value="retro">Retro</option><option value="sunset">Sunset</option><option value="synthwave">Synthwave</option><option value="valentine">Valentine</option><option value="winter">Winter</option><option value="wireframe">Wireframe</option></select>',
            },
          ],
        },
        {
          href: 'https://github.com/yancyqi2002',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: '博客',
              to: '/',
            },
            {
              label: 'Bilibili 哔哩哔哩',
              href: 'https://space.bilibili.com/314108035',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/yancyqi2002',
            },
          ],
        },
      ],
      copyright: `Copyright © 2020 — ${fullYear} Yancy Qi  Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell'],
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
  } satisfies Preset.ThemeConfig,
}

export default config
