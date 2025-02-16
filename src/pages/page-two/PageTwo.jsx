/* React */
import { Link, Routes, Route, Navigate } from 'react-router-dom';

/* Local styles */
import './styles/page-two.scss';

/* Local components */
import { ChildPageOne } from './content/child-page-one/ChildPageOne';
import { ChildPageTwo } from './content/child-page-two/ChildPageTwo';

export const PageTwo = (props) => {
	const { url } = props;

	// Set up child pages
	const childPages = [
		{
			label: 'Child page one',
			url: '/child-page-one',
			component: ChildPageOne,
		},
		{
			label: 'Child page two',
			url: '/child-page-two',
			component: ChildPageTwo,
		},
	];

	return <PageTwoRoutes url={url} childPages={childPages} />;
};

export const PageTwoRoutes = (props) => {
	const { url, childPages } = props;

	return (
		<Routes>
			<Route path="/" element={<PageTwoContent url={url} childPages={childPages} />} />

			{childPages.map((page) => {
				return <Route path={page.url} element={<page.component url={url} />} key={page.url} />;
			})}

			<Route path="*" element={<Navigate to={url} />} />
		</Routes>
	);
};

export const PageTwoContent = (props) => {
	const { url, childPages } = props;

	return (
		<div className="page-two spacing-reset">
			<h4>Child Pages</h4>
			<ul>
				{childPages.map((page) => {
					return (
						<li key={page.url}>
							<Link to={`${url}${page.url}`}>{page.label}</Link>
						</li>
					);
				})}
			</ul>

			<p>this is the second page.</p>

			<div className="row-wrapper">
				<div className="row row-auto row-spacing-20 row-wrap">
					<div className="column column-width-33">column 01</div>

					<div className="column column-width-33">column 02</div>

					<div className="column column-width-33">column 03</div>
				</div>
			</div>

			<p>an element below the row example.</p>
		</div>
	);
};
