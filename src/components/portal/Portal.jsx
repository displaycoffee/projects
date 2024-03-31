/* React */
import { useRef } from 'react';
import { createPortal } from 'react-dom';

/* Local styles */
import './styles/portal.scss';

export const Portal = ({ children }) => {
	// Get portal and create element reference
	const portalRoot = useRef(document.querySelector('#portal')).current;
	const elementRef = useRef(false);

	// If there is no portal, don't return anything
	if (!portalRoot) return null;

	// Create element reference to wrap around portal content
	if (!elementRef.current) {
		elementRef.current = document.createElement('div');
		elementRef.current.setAttribute('class', 'container');
		portalRoot.innerHTML = ''; // remove previous content
		portalRoot.appendChild(elementRef.current);
	}

	// Create portal with children
	return createPortal(children, elementRef.current);
};
