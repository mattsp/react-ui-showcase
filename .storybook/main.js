const path = require('path');
module.exports = {
	stories: ['../src/**/*.stories.js'],
	addons: [
		'@storybook/preset-create-react-app',
		'@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y/register',
		{
			name: '@storybook/addon-storysource',
			options: {
				rule: {
					// test: [/\.stories\.jsx?$/], This is default
					include: [path.resolve(__dirname, '../src')], // You can specify directories
				},
				loaderOptions: {
					prettierConfig: { printWidth: 80, singleQuote: false },
				},
			},
		},
	],
};
