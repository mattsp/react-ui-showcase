import Card from '@bit/gsinfo.react-ui.card';
import React from 'react';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Card',
	component: Card,
};

export const Simple = () => <Card>Card Body</Card>;

export const WithHeader = () => (
	<Card>
		<Card.Header>Card WithHeader</Card.Header>
	</Card>
);

export const WithFooter = () => (
	<Card>
		<Card.Footer>Card With Footer</Card.Footer>
	</Card>
);

export const WithClick = () => (
	<Card onClick={action('clicked')}>
		<Card.Header>Card WithHeader</Card.Header>
		Body
		<Card.Footer>Card With Footer</Card.Footer>
	</Card>
);
