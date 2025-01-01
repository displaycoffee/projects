/* React */
import React, { useEffect, useContext } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

/* Local styles */
import './styles/navigation.scss';

/* Local scripts */
import { navigation, createNavigationList } from './scripts/navigation';

/* Local components */
import { Context } from '../../context/Context';
import { Home } from '../../pages/home/Home';
import { PageOne } from '../../pages/page-one/PageOne';
import { PageTwo } from '../../pages/page-two/PageTwo';

export const Navigation = () => {
	const { pathname } = useLocation();
	const context = useContext(Context);
	const utils = context.utils;
	const navigationList = createNavigationList(navigation, false);

	// Scroll to top when navigation link is clicked on
	useEffect(() => {
		utils.scrollTo();
	}, [pathname]);

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
