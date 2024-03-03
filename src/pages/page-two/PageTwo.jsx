/* Local styles */
import './styles/page-two.scss';

export const PageTwo = () => {
	return (
		<div className="page-two spacing-reset">
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
