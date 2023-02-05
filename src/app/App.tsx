import React from 'react';
import { ThemeProvider } from '@mui/material'
import { theme } from 'styles/theme';
import { RouterProvider } from 'react-router';
import { appRouter } from 'router/appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ModalController } from './organisms/ModalController';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalController>
        <CssBaseline />
        <RouterProvider router={appRouter} />
      </ModalController>
    </ThemeProvider>
  );
}

export default App;
