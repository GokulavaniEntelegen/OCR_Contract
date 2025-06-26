import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ContractProvider } from './context/AuthContext';

import App from './App';

createRoot(document.getElementById('root')!).render(
    <ContractProvider>
    <StrictMode>
        <App />
    </StrictMode>
    </ContractProvider>
);
