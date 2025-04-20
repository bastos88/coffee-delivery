import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { TransactionsProvider } from './contexts/TransactionsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </StrictMode>,
)
