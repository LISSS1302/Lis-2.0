module.exports = {
  title: 'Каталог оборонных технологий Украины',
  url: 'https://lisss1302.github.io',
  baseUrl: '/Lis-2.0/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'LISSS1302',
  projectName: 'Lis-2.0',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
