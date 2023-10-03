/* Local components */
import { Index as IndexContent } from '../../../content/index/Index';
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
		label: 'Index',
		alt: 'Index',
		url: '/',
		showInNav: true,
		render: (props) => {
			return props ? <IndexContent props={props} /> : <IndexContent />;
		},
	},
].sort((a, b) => {
	// Sort navigation by id
	return a.id - b.id;
});
