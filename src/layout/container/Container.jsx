/* React */
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

/* Local styles */
import './styles/container.scss';

/* Local scripts */
import { useRespond } from '../../_config/scripts/hooks';

/* Local components */
import { Context } from '../../entry/context/Context';
import { Portal } from '../../components/portal/Portal';
import { Navigation, NavigationRoutes } from '../../components/navigation/Navigation';
import { ErrorBoundary } from '../../components/error-boundary/ErrorBoundary';
import { Slideout } from '../../components/slideout/Slideout';
import { Sidebar } from '../../layout/sidebar/Sidebar';

export const Container = (props) => {
	const { theme, utils } = props;
	const isDesktop = useRespond(theme.bps.bp02);

	return (
		<Context.Provider value={props}>
			<div className="wrapper">
				<ContainerBody />

				<ErrorBoundary message={<ContainerError />}>
					<header>
						<h1>React Template Setup</h1>
					</header>

					{isDesktop ? (
						<Navigation />
					) : (
						<Slideout id={'menu'} isDesktop={isDesktop} label={'Menu'} content={<Navigation />} closeOnClick={true} />
					)}

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
									<Sidebar />
								</aside>
							)}
						</div>
					</main>

					<button className="pointer unstyled a" onClick={(e) => utils.scrollTo(e, '#root')} type="button">
						Scroll to top
					</button>

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

/* Set containerCache mostly to get previous page */
let containerCache = {
	previous: '',
};

const ContainerBody = () => {
	const location = useLocation();
	const bodySelector = document.querySelector('body');
	const bodyPrefix = 'page-';
	const bodyDefault = 'home';

	useEffect(() => {
		// Remove any previous body class
		bodySelector.classList.remove(`${bodyPrefix}${containerCache.previous || bodyDefault}`);

		// Update previous location path
		// Replace any body prefix, remove first slash, and replace any other slash with hyphen
		containerCache.previous = location.pathname.replace(bodyPrefix, '').replace('/', '').replace(/\//g, '-');

		// Add new body class
		bodySelector.classList.add(`${bodyPrefix}${containerCache.previous || bodyDefault}`);
	}, [location]);

	return null;
};

const ContainerError = () => {
	return (
		<p>
			Something went wrong. <Link to={'/'}>Go back.</Link>
		</p>
	);
};
