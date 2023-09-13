/* react */
import { createRoot } from 'react-dom/client';

/* local components */
import { Index } from './pages/Index';

/* create root into app entry point */
const rootElement = document.getElementById('root');
const rootTarget = createRoot(rootElement);
rootTarget.render(<Index />);