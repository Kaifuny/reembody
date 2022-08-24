// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Kaifuny 的笔记本",
  url: "https://kaifuny.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  organizationName: "Kaifuny", // Usually your GitHub org/user name.
  projectName: "reembody", // Usually your repo name.

  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        },
      }),
    ],
  ],

  themeConfig:{
    navbar: {
      title: "Kaifuny 的笔记本",
      logo: {
        alt: "Kaifuny 的笔记本",
        src: "img/docusaurus.png",
      },
      items: [
        { to: "/blog", label: "博客", position: "right" },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      appId: '9OXBXZH3UG',
      apiKey: '84e5b4865b9ae57d762a3748dc784d06',
      indexName: 'kaifuny',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
    },
  },
};

module.exports = config;
