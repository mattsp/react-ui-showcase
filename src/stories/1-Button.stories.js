import Button from '@bit/gsinfo.react-ui.button';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

export default {
	title: 'Button',
	component: Button,
	decorators: [withA11y],
};

export const Text = () => (
	<Button onClick={action('clicked')}>Hello Button</Button>
);

export const Emoji = () => (
	<Button onClick={action('clicked')}>
		<span role='img' aria-label='so cool'>
			😀 😎 👍 💯
		</span>
	</Button>
);

export const loading = () => (
	<Button
		onClick={action('clicked')}
		isLoading
		loaderRenderer={() => <span>Loading...</span>}
	>
		Submit
	</Button>
);
