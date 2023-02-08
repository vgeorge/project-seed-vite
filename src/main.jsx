import { DevseedUiThemeProvider } from '@devseed-ui/theme-provider'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DevseedUiThemeProvider>
      <App />
    </DevseedUiThemeProvider>
  </React.StrictMode>,
)
