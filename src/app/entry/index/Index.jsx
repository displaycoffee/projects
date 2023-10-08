/* React */
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

/* Local styles */
import './styles/index.scss';

/* Local components */
import { Context } from '../context/Context';
import { Portal } from '../portal/Portal';
import { Index as IndexSidebar } from '../../sidebar/index/Index';
import { ErrorBoundary } from '../../shared/error-boundary/ErrorBoundary';
import { Navigation, NavigationRoutes } from '../../shared/navigation/Navigation';
import { Slideout } from '../../shared/slideout/Slideout';

export const Index = (props) => {
	const { theme, utils } = props;
	const isDesktop = utils.respond(theme.bps.bp02);

	return (
		<Context.Provider value={props}>
			<div className="wrapper">
				<IndexBody />

				<ErrorBoundary message={<IndexError />}>
					<header>
						<h1>Base Setup</h1>
					</header>

					{isDesktop ? <Navigation /> : <Slideout id={'menu'} label={'Menu'} content={<Navigation />} closeOnClick={true} />}

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra imperdiet nisl sed mattis. Orci varius natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris pharetra enim non nunc pharetra condimentum ac nec
						nisi. Nunc ac tortor leo. Vestibulum dui diam, ultricies vel tempor quis, cursus eget arcu. Donec sagittis urna volutpat,
						accumsan odio in, porta ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante
						ipsum primis in faucibus. Mauris a vulputate tellus, at varius mi. Donec vitae purus faucibus, feugiat ipsum eget, semper
						diam. Pellentesque pretium vulputate accumsan.
					</p>

					<main className="main">
						<div className="main-layout flex-wrap">
							<section className="main-content">
								<NavigationRoutes testProp={'testProp'} />
							</section>

							{isDesktop && (
								<aside className="main-sidebar">
									<IndexSidebar />
								</aside>
							)}
						</div>
					</main>

					<Portal>
						<p>
							This is an example of a portal from root index.html. It could also be added inside other components to access details of
							that component.
						</p>
					</Portal>
				</ErrorBoundary>
			</div>
		</Context.Provider>
	);
};

/* Set indexCache mostly to get previous page */
let indexCache = {
	previous: '',
};

const IndexBody = () => {
	const location = useLocation();
	const bodySelector = document.querySelector('body');
	const bodyPrefix = 'page-';

	useEffect(() => {
		// Remove any previous body class
		bodySelector.classList.remove(`${bodyPrefix}${indexCache.previous || 'index'}`);

		// Update previous location path
		// Replace any body prefix, remove first slash, and replace any other slash with hyphen
		indexCache.previous = location.pathname.replace(bodyPrefix, '').replace('/', '').replace(/\//g, '-');

		// Add new body class
		bodySelector.classList.add(`${bodyPrefix}${indexCache.previous || 'index'}`);
	}, [location]);

	return null;
};

const IndexError = () => {
	return (
		<p>
			Something went wrong. <Link to={'/'}>Go back.</Link>
		</p>
	);
};
