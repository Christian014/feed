import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppRoutes } from "./routes/index"

import { ThemeProvider } from 'styled-components';
import CreateGlobalStyle from "../globalstyle";
import theme from '../theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

      <CreateGlobalStyle />
      < AppRoutes/>

    </ThemeProvider>
  </React.StrictMode>,
)
