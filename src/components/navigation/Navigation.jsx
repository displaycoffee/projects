/* React */
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

/* Local styles */
import './styles/navigation.scss';

/* Local scripts */
import { navigation, createNavigationList } from './scripts/navigation';

/* Local components */
import { Home } from '../../pages/home/Home';
import { PageOne } from '../../pages/page-one/PageOne';
import { PageTwo } from '../../pages/page-two/PageTwo';

export const Navigation = () => {
	const navigationList = createNavigationList(navigation, false);

	return navigationList && navigationList.length != 0 ? (
		<nav className="navigation">
			<ul className="navigation-list unstyled">
				{navigationList.map((nav) => (
					<li className="navigation-list-item" key={nav.id}>
						<Link to={nav.url} alt={nav.alt || nav.label} title={nav.alt || nav.label}>
							{nav.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	) : null;
};

export const NavigationRoutes = (props) => {
	const { testProp } = props;
	const navigationList = createNavigationList(navigation, true);

	return navigationList && navigationList.length != 0 ? (
		<Routes>
			{navigationList.map((nav) => (
				<React.Fragment key={nav.id}>
					{{
						'page two': <Route path={nav.url} element={<PageTwo />} />,
						'page one': <Route path={nav.url} element={<PageOne />} />,
					}[nav.label.toLowerCase()] || <Route path={nav.url} element={<Home testProp={testProp} />} />}
				</React.Fragment>
			))}
		</Routes>
	) : null;
};
