/* Local components */
import { Main } from '../../../content/main/Main';
import { PageOne } from '../../../content/page-one/PageOne';
import { PageTwo } from '../../../content/page-two/PageTwo';

export const navigation = [
	{
		id: 2,
		label: 'Page Two',
		alt: 'Page Two',
		url: '/page-two',
		showInNav: true,
		render: (props) => {
			return props ? <PageTwo props={props} /> : <PageTwo />;
		},
	},
	{
		id: 1,
		label: 'Page One',
		alt: 'Page One',
		url: '/page-one',
		showInNav: true,
		render: (props) => {
			return props ? <PageOne props={props} /> : <PageOne />;
		},
	},
	{
		id: 0,
		label: 'Main',
		alt: 'Main',
		url: '/',
		showInNav: true,
		render: (props) => {
			return props ? <Main props={props} /> : <Main />;
		},
	},
].sort((a, b) => {
	// Sort navigation by id
	return a.id - b.id;
});
