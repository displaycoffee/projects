/* React */
import { BrowserRouter as Router, Link } from 'react-router-dom';

/* Local styles */
import './styles/index.scss';

/* Local components */
import { ErrorBoundary } from '../../shared/error-boundary/ErrorBoundary';
import { NavigationList, NavigationRoutes } from '../../shared/navigation/Navigation';
import { Slideout } from '../../shared/slideout/Slideout';

export const Index = (props) => {
	const { theme, utils, variables } = props;
	const isDesktop = utils.respond(theme.bps.bp02);

	return (
		<div className="wrapper">
			<Router basename={variables.paths.base}>
				<ErrorBoundary message={<IndexError />}>
					<header>
						<h1>Base Setup</h1>
					</header>

					<NavigationList />

					<Slideout id={'menu'} label={'Menu'} content={<NavigationList />} closeOnClick={true} />

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra imperdiet nisl sed mattis. Orci varius natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris pharetra enim non nunc pharetra condimentum ac nec
						nisi. Nunc ac tortor leo. Vestibulum dui diam, ultricies vel tempor quis, cursus eget arcu. Donec sagittis urna volutpat,
						accumsan odio in, porta ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante
						ipsum primis in faucibus. Mauris a vulputate tellus, at varius mi. Donec vitae purus faucibus, feugiat ipsum eget, semper
						diam. Pellentesque pretium vulputate accumsan.
					</p>

					<NavigationRoutes />
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
