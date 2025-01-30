import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { GlobalStyle, theme, ThemeProvider } from './styles';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
