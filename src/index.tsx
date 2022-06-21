import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Config, DAppProvider } from '@usedapp/core';
import { NETWORK_ID, RPC_URL, DAPP_READONLY_RPC } from './config';
import { createTheme, ThemeProvider } from '@mui/material';

const config: Config = {
  readOnlyChainId: NETWORK_ID,
  readOnlyUrls: {
    [NETWORK_ID]: DAPP_READONLY_RPC,
  },
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#ED0C0C'
    }
  }
});


ReactDOM.render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
      <DAppProvider config={config}>
        <App />
      </DAppProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
