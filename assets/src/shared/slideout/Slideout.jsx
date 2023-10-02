/* React */
import { useEffect, useId } from 'react';

/* Local styles */
import './styles/slideout.scss';

/* Local scripts */
import { slideout } from './scripts/slideout';

export const Slideout = (props) => {
	const { config, get, set, toggle } = slideout;
	let { width, direction, label, content, closeOnClick } = props;
	const id = `slideout-${useId().replace(/\:/g, '')}`;

	// Get default attributes for slideout
	width = width ? width : config.values.width;
	direction = direction ? direction : config.values.direction;
	const orientation = get.orientation(direction);
	const styles = {
		width: width,
		transition: `${direction} 0.5s ease-in-out`,
		[direction]: orientation == 'vertical' ? config.values.vertical : `-${width}`,
	};

	useEffect(() => {
		// Create slideout overlay, but only once per slideout (class selector without the '.')
		set.overlay(config.classes.overlay);
	}, []);

	return (
		<div
			id={id}
			className={`${config.classes.slideout} slideout-${orientation}`}
			data-width={width}
			data-direction={direction}
			data-orientation={orientation}
		>
			<button className="slideout-button" type="button" onClick={(e) => toggle(e, id)}>
				<span className="icon-wrapper">
					<svg className="icon icon-menu">
						<use xlinkHref="#icon-menu"></use>
					</svg>
				</span>{' '}
				{label}
			</button>

			<div className="slideout-content" style={styles} onClick={(e) => e.stopPropagation()}>
				<header className="slideout-header flex-nowrap flex-align-items-center">
					<h3 className="slideout-title">{label}</h3>

					<button className="slideout-close" type="button" onClick={(e) => toggle(e, false)}>
						<span className="icon-wrapper">
							<svg className="icon icon-close-thin">
								<use xlinkHref="#icon-close-thin"></use>
							</svg>
						</span>
					</button>
				</header>

				<div
					className="slideout-scrollbar scrollbar"
					onClick={(e) => {
						if (closeOnClick) {
							toggle(e, false);
						} else {
							return false;
						}
					}}
				>
					{content ? content : null}
				</div>
			</div>
		</div>
	);
};
