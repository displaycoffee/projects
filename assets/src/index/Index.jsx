/* React */
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

/* Local styles */
import './styles/index.scss';

/* Local components */
import { ErrorBoundary } from '../shared/error-boundary/ErrorBoundary';
import { Main } from '../content/main/Main';
import { PageOne } from '../content/page-one/PageOne';
import { PageTwo } from '../content/page-two/PageTwo';

export const Index = (props) => {
	const { theme, utils, variables } = props;
	const isDesktop = utils.respond(theme.bps.bp02);

	return (
		<div className="wrapper">
			<Router>
				<ErrorBoundary message={<IndexError />}>
					<Link to={'/test'}>test</Link>&nbsp;-&nbsp;<Link to={'/'}>main</Link>
					<Routes>
						{/* <Route path="/test" element={<Test />} /> */}
						<Route path="/" element={<Main />} />
					</Routes>
				</ErrorBoundary>
			</Router>
		</div>
	);
};

const IndexError = () => {
	return (
		<p>
			Something went wrong. <Link to={'/'}>Go back.</Link>
		</p>
	);
};
