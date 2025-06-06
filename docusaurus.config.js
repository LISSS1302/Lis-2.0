
module.exports = {
  title: 'Каталог оборонных технологий Украины',
  url: 'https://lisss1302.github.io',
  baseUrl: '/Lis-2.0/'
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Каталог',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
      },
    ],
  ],
};
