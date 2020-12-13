const path = require("path");

module.exports = {
  title: "Yancy Qi ’s Blog",
  tagline: "The tagline of my site",
  titleDelimiter: "-",
  url: "https://www.zxuqian.cn",
  baseUrl: "/",
  favicon: "img/favicon-me.ico",
  organizationName: "YancyQi2002", // Usually your GitHub org/user name.
  projectName: "yx-blog", // Usually your repo name.
  stylesheets: ["https://fonts.font.im/css?family=Raleway:500,700"],
  themeConfig: {
    navbar: {
      title: "Yancy Qi ’s Blog",
      logo: {
        alt: "Yancy Qi",
        src: "img/logo-me.svg",
        srcDark: "img/logo-me.svg",
      },
      items: [
        {
          to: "/",
          label: "Blog",
          position: "right",
          items: [
            {
              label: "前端",
              to: "tags/前端",
            },
            {
              label: "深度学习",
              to: "tags/深度学习",
            },
            // {
            //   label: "健康",
            //   to: "tags/健康",
            // },
          ],
        },
        {
          href: "https://github.com/yancyqi2002",
          label: "GitHub",
          position: "right",
        },
        // {
        //   href: "https://github.com/zxuqian/frontend-questions/issues",
        //   label: "提问",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Style Guide",
        //       to: "docs/doc1"
        //     },
        //     {
        //       label: "Second Doc",
        //       to: "docs/doc2"
        //     }
        //   ]
        // },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus"
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus"
        //     }
        //   ]
        // },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "/",
            },
            {
              label: "GitHub",
              href: "https://github.com/yancyqi2002",
            },
            {
              label: "Bilibili",
              href: "https://space.bilibili.com/314108035",
            },
          ],
        },
        {
          title: "友情链接",
          items: [
            {
              label: "Hexo Blog",
              to: "https://yancyqi2002.github.io/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yancy Qi &nbsp;&nbsp;&nbsp;&nbsp; Built with Docusaurus.`,
    },
    prism: {
      darkTheme: require("prism-react-renderer/themes/vsDark"),
      defaultLanguage: "javascript",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // docs: {
        //   sidebarPath: require.resolve("./sidebars.js"),
        //   editUrl: "",
        // },
        blog: {
          path: "./blog",
          routeBasePath: "/",
          feedOptions: {
            type: "all",
            title: "Yancy Qi",
            copyright: `Copyright © ${new Date().getFullYear()} Yancy Qi &nbsp;&nbsp;&nbsp;&nbsp; Built with Docusaurus.`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "daily",
          priority: 0.5,
        },
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    path.resolve(__dirname, "./src/plugin/plugin-baidu-analytics"),
    path.resolve(__dirname, "./src/plugin/plugin-baidu-push"),
    // path.resolve(__dirname, "./src/plugin/plugin-google-adsense"),
  ],
};
