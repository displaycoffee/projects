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
		body: (state) => {
			// Toggle slideout body class
			const { config } = slideout;
			const body = document.querySelector('body');
			if (state == 'add') {
				body.classList.add(config.classes.activeBody);
			} else {
				body.classList.remove(config.classes.activeBody);
			}
		},
		overlay: () => {
			const { config } = slideout;

			// Create slideout overlay if not present and append to body
			if (!document.querySelector(`.${config.classes.overlay}`)) {
				const overlay = document.createElement('div');
				overlay.setAttribute('class', config.classes.overlay);
				overlay.onclick = (e) => slideout.toggle(e, false);
				document.querySelector('body').appendChild(overlay);
			}
		},
		slideout: (element, state) => {
			// Helper function to toggle slideout properties
			const { config } = slideout;
			const content = element.querySelector('.slideout-content');

			// Get data attributes
			const width = element.dataset.width;
			const direction = element.dataset.direction;
			const orientation = element.dataset.orientation;

			// Update elements depending on state
			if (state == 'add') {
				element.classList.add(config.classes.active);
				content.style[direction] = 0;
			} else {
				element.classList.remove(config.classes.active);
				content.style[direction] = orientation == 'vertical' ? config.values.vertical : `-${width}`;
			}
		},
	},
	toggle: (e, id) => {
		e.preventDefault();
		const { config, set } = slideout;
		const activeSelector = `.${config.classes.slideout}.${config.classes.active}`;

		// Reset active slideout menus
		document.querySelectorAll(activeSelector).forEach((element) => {
			set.slideout(element, 'remove');
		});

		// Perform actions for current slideout menu
		if (id) {
			const element = document.querySelector(`#${id}`);
			const elementState = !element.classList.contains(config.classes.active) ? 'add' : 'remove';
			set.slideout(element, elementState);
		}

		// Reset body classes
		setTimeout(() => {
			const slideoutActiveElements = document.querySelectorAll(activeSelector);
			const bodyState = slideoutActiveElements && slideoutActiveElements.length !== 0 ? 'add' : 'remove';
			set.body(bodyState);
		});
	},
};
