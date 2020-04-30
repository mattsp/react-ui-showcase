import ChipList from '@bit/gsinfo.react-ui.chip-list';
import React from 'react';
import { action } from '@storybook/addon-actions';

export default {
	title: 'ChipList',
	component: ChipList,
};

export const Simple = () => (
	<ChipList
		items={[
			{ id: 1, label: 'item-1' },
			{ id: 2, label: 'item-2' },
		]}
	/>
);

export const onDelete = () => (
	<ChipList
		items={[
			{ id: 1, label: 'item-1' },
			{ id: 2, label: 'item-2' },
		]}
		onDelete={action('clicked')}
	/>
);
