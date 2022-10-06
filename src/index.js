import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { AppProvider } from './contexts/app.context';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0075BE',
            dark: '#0A285F',
        },
        secondary: {
            main: '#FFCC00',
            dark: '#D5A100',
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppProvider>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </AppProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
