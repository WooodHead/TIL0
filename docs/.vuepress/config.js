const { getFilesOf, getDirectoriesOf } = require('./util');
const { description } = require('../../package');

module.exports = {
  title: '📝 TIL(Today I Learned)',
  description: description,
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#D14376' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/assets/icons/152.png' }],
    ['link', { rel: 'mask-icon', href: '/assets/icons/favicon.svg', color: '#0A72F0' }],
    ['meta', { name: 'msapplication-TileImage', content: '/assets/icons/144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#D14376' }],
  ],

  themeConfig: {
    repo: 'younho9/TIL',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '🖋 Edit this page',
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'Frontend',
        link: '/Frontend/Bootstrap/Bootstrap-getting-started',
      },
      {
        text: 'Algorithms',
        link: '/Algorithms/2020-카카오-인턴십-경주로-건설',
      },
      {
        text: 'CS',
        link: '/CS/System-Programming/SIC-XE-Machine-Architecture',
      },
      {
        text: 'Daily',
        link: '/Daily/Daily/0205',
      },
      {
        text: 'Notion',
        link:
          'https://www.notion.so/107dc84223664f60b21a61f55b2700a4?v=e848ff1783f44fc7b1d499740e16c46c',
      },
    ],
    sidebar: {
      '/Frontend/': getDirectoriesOf('docs/Frontend').map(dir => ({
        title: dir,
        collapsable: true,
        sidebarDepth: 1,
        children: getFilesOf(`docs/Frontend/${dir}`).map(fileName => `${dir}/${fileName}`),
      })),
      '/Algorithms/': [
        {
          title: 'Algorithms',
          collapsable: false,
          sidebarDepth: 1,
          children: getFilesOf('docs/Algorithms'),
        },
      ],
      '/CS/': getDirectoriesOf('docs/CS').map(dir => ({
        title: dir,
        collapsable: true,
        sidebarDepth: 1,
        children: getFilesOf(`docs/CS/${dir}`).map(fileName => `${dir}/${fileName}`),
      })),
      '/Daily/': getDirectoriesOf('docs/Daily').map(dir => ({
        title: dir,
        collapsable: true,
        sidebarDepth: 1,
        children: getFilesOf(`docs/Daily/${dir}`).map(fileName => `${dir}/${fileName}`),
      })),
    },
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-disable-url-encode'));
    },
  },

  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
      '@vuepress/plugin-back-to-top',
      '@vuepress/plugin-medium-zoom',
    ],
  ],
};
