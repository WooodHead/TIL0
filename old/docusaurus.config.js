const { appendPath, getFirstContent } = require('./src/utils');
const { CATEGORY_SLUGS } = require('./src/constants');

const docNavs = Object.entries(CATEGORY_SLUGS).map(([category, categorySlug]) => ({
  to: getFirstContent(category),
  activeBasePath: appendPath('docs', category),
  label: categorySlug,
}));

const docFooters = docNavs.map(({ to, label }) => ({ to, label }));

module.exports = {
  title: '📝 TIL(Today I Learned)',
  tagline: '하루동안 공부한 것들을 기록하는 공간',
  url: 'https://wooodhead.github.io/til',
  baseUrl: '/',
  onBrokenLinks: 'error',
  favicon: 'img/logo.png',
  organizationName: 'wooodhead',
  projectName: 'til',
  themeConfig: {
    algolia: {
      apiKey: 'df534cd50449ff1ac456585231e62076',
      indexName: 'til',
      appId: 'CPGK41PHIV',
    },
    colorMode: {
      defaultMode: 'dark',
    },
    hideableSidebar: true,
    prism: {
      theme: require('prism-react-renderer/themes/nightOwl'),
    },
    navbar: {
      title: 'Today I Learned',
      logo: {
        alt: 'Today I Learned',
        src: 'img/logo.png',
      },
      items: [
        {
          label: 'Docs',
          position: 'left',
          items: [...docNavs],
        },
        {
          label: 'Logs',
          position: 'left',
          items: [
            { to: 'log/2021', label: '2021 Log' },
            { to: 'log/2020', label: '2020 Log' },
          ],
        },
        {
          href: 'https://github.com/younho9/til',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href:
            'https://www.notion.so/younho9/107dc84223664f60b21a61f55b2700a4?v=e848ff1783f44fc7b1d499740e16c46c',
          position: 'right',
          className: 'header-notion-link',
          'aria-label': 'Notion CMS',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [...docFooters],
        },
        {
          title: 'Logs',
          items: [
            {
              label: '2021 Log',
              to: 'log/2021',
            },
            {
              label: '2020 Log',
              to: 'log/2020',
            },
          ],
        },
        {
          title: 'Personal Links',
          items: [
            {
              label: 'younho9.dev',
              href: 'https://younho9.dev',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/younho9',
            },
            {
              label: 'Notion',
              href: 'https://bit.ly/yh9blog',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/younho_9',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/story/younho9',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/younho9/til',
            },
            {
              label: 'Notion',
              href:
                'https://www.notion.so/younho9/107dc84223664f60b21a61f55b2700a4?v=e848ff1783f44fc7b1d499740e16c46c',
            },
            {
              html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
                </a>
              `,
            },
          ],
        },
      ],
      logo: {
        alt: 'younho9',
        src: 'img/logo.png',
        href: 'https://younho9.dev/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} younho9. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/younho9/til/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'twoZeroLog',
        routeBasePath: 'log/2020',
        path: './log/2020',
        editUrl: 'https://github.com/younho9/til/edit/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'twoOneLog',
        routeBasePath: 'log/2021',
        path: './log/2021',
        editUrl: 'https://github.com/younho9/til/edit/main/',
      },
    ],
    // [
    //   '@docusaurus/plugin-pwa',
    //   {
    //     debug: true,
    //     offlineModeActivationStrategies: ['appInstalled', 'queryString'],
    //     pwaHead: [
    //       {
    //         tagName: 'link',
    //         rel: 'icon',
    //         href: '/img/logo.png',
    //       },
    //       {
    //         tagName: 'link',
    //         rel: 'manifest',
    //         href: '/manifest.json', // your PWA manifest
    //       },
    //       {
    //         tagName: 'meta',
    //         name: 'theme-color',
    //         content: 'rgb(84, 104, 255)',
    //       },
    //       {
    //         tagName: 'meta',
    //         name: 'apple-mobile-web-app-capable',
    //         content: 'yes',
    //       },
    //       {
    //         tagName: 'meta',
    //         name: 'apple-mobile-web-app-status-bar-style',
    //         content: '#000',
    //       },
    //       {
    //         tagName: 'link',
    //         rel: 'apple-touch-icon',
    //         href: 'img/logo.png',
    //       },
    //       {
    //         tagName: 'link',
    //         rel: 'mask-icon',
    //         href: 'img/logo.svg',
    //         color: 'rgb(255, 255, 255)',
    //       },
    //       {
    //         tagName: 'meta',
    //         name: 'msapplication-TileImage',
    //         content: 'img/logo.png',
    //       },
    //       {
    //         tagName: 'meta',
    //         name: 'msapplication-TileColor',
    //         content: '#000',
    //       },
    //     ],
    //   },
    // ],
  ],
};
