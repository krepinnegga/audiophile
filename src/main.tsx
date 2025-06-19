import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
