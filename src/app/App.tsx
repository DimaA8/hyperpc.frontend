import React from 'react';
import { ThemeProvider } from '@mui/material'
import { theme } from 'styles/theme';
import { RouterProvider } from 'react-router';
import { appRouter } from 'router/appRouter';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  );
}

export default App;
