import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { GlobalStyle, theme, ThemeProvider } from './styles';
import { BrowserRouter } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
