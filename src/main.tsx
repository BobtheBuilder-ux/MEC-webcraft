// Import polyfills first to ensure they're loaded before anything else
import './lib/browser-polyfills';

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
