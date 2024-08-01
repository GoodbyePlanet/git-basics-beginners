const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.okaidia;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Git Basics',
  tagline: 'You want to learn git basics?',
  url: 'https://git-basics.com/',
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
      title: 'Git basics',
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
			copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/GoodbyePlanet"> GoodbyePlanet</a>`,
		},
  },
	customFields: {
		company: 'ProductDock'
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
