import ReactDOM from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import { theme, ThemeProvider } from '~/styledComponents';

ReactDOM.render(
    <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </>, document.getElementById('root')
)