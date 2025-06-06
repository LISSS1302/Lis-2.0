// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const config = {
  title: 'Каталог оборонных технологий Украины',
  tagline: 'Добро пожаловать в справочник!',
  url: 'https://lisss1302.github.io',
  baseUrl: '/Lis-2.0/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  favicon: 'img/favicon.ico',

  organizationName: 'LISSS1302', // Usually your GitHub org/user name.
  projectName: 'Lis-2.0', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
};

module.exports = config;
