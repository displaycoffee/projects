/* React */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

/* Local scripts */
import { theme } from '../scripts/theme';
import { utils } from '../scripts/utils';

/* Local components */
// none

export const Index = () => {
	const isDesktop = utils.respond(theme.bps.bp02);
	
	return (
		<div className="wrapper">
			oh hi.
		</div>
	);
};
