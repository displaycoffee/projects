/* React */
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

/* Local scripts */
import { theme } from '../scripts/theme';
import { utils } from '../scripts/utils';

/* Local components */
import { Test } from './Test';
// none

/* Local styles */
import './index.scss';

export const Index = () => {
	const isDesktop = utils.respond(theme.bps.bp02);

	return (
		<Router>
			<Link to={'/test'}>test</Link>&nbsp;-&nbsp;<Link to={'/'}>main</Link>
			<Routes>
				<Route path="/test" element={<Test />} />
				<Route path="/" element={<IndexMain />} />
			</Routes>
		</Router>
	);
};

export const IndexMain = () => {
	return <div className="main-page">this is a main page</div>;
};
