/* React */
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

/* Local styles */
import './styles/navigation.scss';

/* Local scripts */
import { navigation } from './scripts/navigation';

/* Local components */
import { Content } from '../../content/content/Content';
import { PageOne } from '../../content/page-one/PageOne';
import { PageTwo } from '../../content/page-two/PageTwo';

export const Navigation = () => {
	return navigation && navigation.length != 0 ? (
		<nav className="navigation">
			<ul className="navigation-list unstyled">
				{navigation.map(
					(nav) =>
						nav.showInNav && (
							<li className="navigation-list-item" key={nav.id}>
								<Link to={nav.url} alt={nav.alt || nav.label} title={nav.alt || nav.label}>
									{nav.label}
								</Link>
							</li>
						),
				)}
			</ul>
		</nav>
	) : null;
};

export const NavigationRoutes = (props) => {
	const { testProp } = props;

	return navigation && navigation.length != 0 ? (
		<Routes>
			{navigation.map((nav) => (
				<React.Fragment key={nav.id}>
					{{
						'page two': <Route path={nav.url} element={<PageTwo />} />,
						'page one': <Route path={nav.url} element={<PageOne />} />,
					}[nav.label.toLowerCase()] || <Route path={nav.url} element={<Content testProp={testProp} />} />}
				</React.Fragment>
			))}
		</Routes>
	) : null;
};
