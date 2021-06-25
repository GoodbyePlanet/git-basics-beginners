const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsLight');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Hi there...',
  tagline: 'Since you landed here I assume that you would like to learn git basics...',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
  	colorMode: {
			defaultMode: 'light',
			respectPrefersColorScheme: false,
		},
    navbar: {
      title: 'Git basics beginners',
      logo: {
        alt: 'git-basics',
        src: 'img/git.svg',
				srcDark: 'img/git-dark.svg',
      },
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
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
