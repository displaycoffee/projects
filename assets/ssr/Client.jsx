import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import SSRApp from './SSRApp.jsx';

hydrateRoot(document.getElementById('root'), <SSRApp />);
