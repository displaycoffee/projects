export const slideout = {
	config: {
		classes: {
			// Class variables for component
			activeBody: 'slideout-active-body',
			active: 'slideout-active',
			overlay: 'slideout-overlay',
			slideout: 'slideout',
		},
		values: {
			// Default values if props are not defined
			width: '350px',
			direction: 'left',
			vertical: '110%',
		},
	},
	get: {
		orientation: (direction) => {
			// Get orientation of slideout
			return direction == 'top' || direction == 'bottom' ? 'vertical' : 'horizontal';
		},
	},
	set: {
		overlay: (overlayClass) => {
			// Create slideout overlay, but only once per slideout
			if (!document.querySelector(`.${overlayClass}`)) {
				const overlay = document.createElement('div');
				overlay.setAttribute('class', overlayClass);
				overlay.onclick = (e) => slideout.toggle(e, false, true);
				document.querySelector('body').appendChild(overlay);
			}
		},
		slideout: (element, state, toggleBody) => {
			// Helper function to toggle slideout and body properties
			const { config } = slideout;
			const body = document.querySelector('body');
			const content = element.querySelector('.slideout-content');

			// Get data attributes
			const width = element.dataset.width;
			const direction = element.dataset.direction;
			const orientation = element.dataset.orientation;

			// Update elements depending on state
			if (state == 'add') {
				element.classList.add(config.classes.active);
				content.style[direction] = 0;
				if (toggleBody) {
					body.classList.add(config.classes.activeBody);
				}
			} else {
				element.classList.remove(config.classes.active);
				content.style[direction] = orientation == 'vertical' ? config.values.vertical : `-${width}`;
				if (toggleBody) {
					body.classList.remove(config.classes.activeBody);
				}
			}
		},
	},
	toggle: (e, id) => {
		e.preventDefault();
		const { config, set } = slideout;

		// Reset active slideout menus
		document.querySelectorAll(`.${config.classes.slideout}.${config.classes.active}`).forEach((slideout) => {
			if (id && id != slideout.getAttribute('id')) {
				set.slideout(slideout, 'remove', false);
			} else {
				set.slideout(slideout, 'remove', true);
			}
		});

		// Perform actions for current slideout menu
		if (id) {
			const element = document.querySelector(`#${id}`);
			element.classList.contains(config.classes.active) ? set.slideout(element, 'remove', true) : set.slideout(element, 'add', true);
		}
	},
};
