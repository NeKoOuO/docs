// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ikaros Docs',
  tagline: 'Docs site for project ikaros.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.ikaros.run',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en', 'jp'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ikaros-dev/docs/edit/master/',
          // versions: {
          //   current: {
          //     label: "0.7-SNAPSHOT",
          //     path: "0.7-SNAPSHOT",
          //   },
          // },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ikaros-dev/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/favicon.ico',
      navbar: {
        title: 'Ikaros Docs',
        logo: {
          alt: 'Ikaros Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            href: "https://ikaros.run",
            label: "Offical",
          },
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{ to: '/versions', label: 'All versions' }],
            dropdownActiveClassDisabled: true,
          },
          {
            href: "https://github.com/ikaros-dev/ikaros",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "About",
            items: [
              {
                label: "Offical",
                href: "https://ikaros.run",
              },
              {
                label: "GitHub Organization",
                href: "https://github.com/ikaros-dev",
              },
              {
                label: "Docs Access Analysis",
                href: "https://analytics.ikaros.run/share/HpFEzaaekV9NOCZn/ikaros%20docs",
              },
              {
                label: "Server Status",
                href: "https://status.ikaros.run/status/ikaros",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "WeChat Channel",
                href: "https://ikaros.run/wechat.png",
              },
              {
                label: "GitHub Issues",
                href: "https://github.com/ikaros-dev/ikaros/issues",
              },
              {
                label: "Telegram Channel",
                href: "https://t.me/run_ikaros_channel",
              },
              {
                label: "Telegram Group",
                href: "https://t.me/run_ikaros",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  scripts: [
    {
      src: "https://analytics.ikaros.run/script.js",
      async: true,
      defer: true,
      "data-website-id": "3266d477-7c25-4d81-9787-15390a98c4d3",
    },
  ],
};

module.exports = config;
