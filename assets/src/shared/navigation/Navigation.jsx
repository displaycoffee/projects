/* React */
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

/* Local styles */
import './styles/navigation.scss';

/* Local scripts */
import { navigation } from './scripts/navigation';

/* Local components */
import { Index as IndexContent } from '../../content/index/Index';
import { PageOne } from '../../content/page-one/PageOne';
import { PageTwo } from '../../content/page-two/PageTwo';

export const Navigation = () => {
	return navigation && navigation.length != 0 ? (
		<nav className="navigation">
			<ul className="navigation-list unstyled">
				{navigation.map(
					(navigation) =>
						navigation.showInNav && (
							<li className="navigation-list-item" key={navigation.id}>
								<Link to={navigation.url} alt={navigation.alt || navigation.label} title={navigation.alt || navigation.label}>
									{navigation.label}
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
			{navigation.map((navigation) => (
				<React.Fragment key={navigation.id}>
					{{
						'Page Two': <Route path={navigation.url} element={<PageTwo />} />,
						'Page One': <Route path={navigation.url} element={<PageOne />} />,
					}[navigation.label] || <Route path={navigation.url} element={<IndexContent testProp={testProp} />} />}
				</React.Fragment>
			))}
		</Routes>
	) : null;
};
