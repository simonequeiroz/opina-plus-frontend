import React from 'react';
import ReactDOM from 'react-dom/client';
// Remove BrowserRouter import, it's handled by RouterProvider now
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// Remove App import, it's part of AppRoutes now
import AppRoutes from './routes'; // Import the router configuration
import './styles/global.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003366', // Match header color
    },
    secondary: {
      main: '#f50057', // Example secondary color
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes /> {/* Render the router provider */}
    </ThemeProvider>
  </React.StrictMode>
);
