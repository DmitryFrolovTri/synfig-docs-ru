// @ts-check
const prismThemes = require('prism-react-renderer').themes;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Synfig Studio — Русская документация',
  tagline: 'User manual (RU)',
  favicon: 'img/favicon.ico',

  // Site URL + base URL.
  // - For root hosting (document root '/'): leave DOCUSAURUS_BASE_URL unset (defaults to '/')
  // - For subpath hosting (e.g. GitHub Pages project): set DOCUSAURUS_BASE_URL='/synfig-docs-ru/' when building.
  url: 'https://dmitryfrolovtri.github.io',
  baseUrl: process.env.DOCUSAURUS_BASE_URL || '/synfig-docs-ru/',

  organizationName: 'DmitryFrolovTri',
  projectName: 'synfig-docs-ru',

  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/DmitryFrolovTri/synfig-docs-ru/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({
    navbar: {
      title: 'Synfig RU',
      items: [
        { type: 'docSidebar', sidebarId: 'manual', label: 'Документация', position: 'left' },
        { href: 'https://github.com/DmitryFrolovTri/synfig-docs-ru', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Synfig RU`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

module.exports = config;
