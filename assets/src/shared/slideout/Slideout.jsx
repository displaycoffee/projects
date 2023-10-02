/* React */
import { useEffect } from 'react';

/* Local styles */
import './styles/slideout.scss';

export const Slideout = (props) => {
	const { id, width, direction, label, content, closeOnClick } = props;
	const body = document.querySelector('body');

	// Create slideout config for changing values
	let config = {
		id: id ? `slideout-${id}` : `slideout-no-id`,
		classes: {
			activeBody: 'slideout-active-body',
			active: 'slideout-active',
			overlay: 'slideout-overlay',
			slideout: 'slideout',
		},
		properties: {
			width: width ? width : '350px',
			direction: direction ? direction : 'left',
		},
		styles: {},
	};

	// Default styles for slideout content
	config.styles = {
		width: config.properties.width,
		transition: `${config.properties.direction} 0.3s ease-in-out`,
		[config.properties.direction]: `-${config.properties.width}`,
	};

	useEffect(() => {
		// Create slideout overlay, but only once per slideout
		if (!document.querySelector(`.${config.classes.overlay}`)) {
			const overlay = document.createElement('div');
			overlay.setAttribute('class', config.classes.overlay);
			overlay.onclick = (e) => toggleSlideout(e, true);
			body.appendChild(overlay);
		}
	}, []);

	// Toggle slideout
	const toggleSlideout = (e, reset) => {
		e.preventDefault();

		document.querySelectorAll(`.${config.classes.slideout}`).forEach((slideout) => {
			const dataWidth = `-${slideout.dataset.slideoutWidth}`;
			const dataDirection = slideout.dataset.slideoutDirection;
			const content = slideout.querySelector('.slideout-content');

			if (reset) {
				// Reset all slideouts
				toggle('remove', true);
			} else {
				if (slideout.getAttribute('id') == config.id) {
					// Change properties for matching slideout
					slideout.classList.contains(config.classes.active) ? toggle('remove', true) : toggle('add', true);
				} else {
					// Otherwise, reset all other slideouts
					toggle('remove', false);
				}
			}

			// Helper function to toggle slideout and body properties
			function toggle(state, bodyToggle) {
				if (bodyToggle) {
					state == 'add' ? body.classList.add(config.classes.activeBody) : body.classList.remove(config.classes.activeBody);
				}
				state == 'add' ? slideout.classList.add(config.classes.active) : slideout.classList.remove(config.classes.active);
				content.style[dataDirection] = state == 'add' ? 0 : dataWidth;
			}
		});
	};

	return (
		<div
			id={config.id}
			className={config.classes.slideout}
			data-slideout-width={config.properties.width}
			data-slideout-direction={config.properties.direction}
		>
			<button className="slideout-button" type="button" onClick={(e) => toggleSlideout(e)}>
				<span className="icon-wrapper">
					<svg className="icon icon-menu">
						<use xlinkHref="#icon-menu"></use>
					</svg>
				</span>{' '}
				{label}
			</button>

			<div className="slideout-content" style={config.styles}>
				<header className="slideout-header flex-nowrap flex-align-items-center">
					<h3 className="slideout-title">{label}</h3>

					<button className="slideout-close" type="button" onClick={(e) => toggleSlideout(e)}>
						<span className="icon-wrapper">
							<svg className="icon icon-close-thin">
								<use xlinkHref="#icon-close-thin"></use>
							</svg>
						</span>
					</button>
				</header>

				<div
					className="slideout-scroll"
					onClick={(e) => {
						if (closeOnClick) {
							toggleSlideout(e);
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
