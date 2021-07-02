const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsLight');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Hi there!',
  tagline: 'I\'m Nemanja, software developer at ProductDock',
  url: 'https://git-basics-beginners-fte9my5vj-goodbyeplanet.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'GoodbyePlanet',
  projectName: 'git-basics-beginners',
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
		footer: {
			style: 'light',
			copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/GoodbyePlanet"> Nemanjas</a>`,
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
  ]
};
