export const MuiCssBaseline = {
  styleOverrides: (themeParam: any) => ({
    body: {
      backgroundColor: themeParam.palette.primary.main,
      color: themeParam.palette.text.primary,
      lineHeight: '1.5'
    }
  })
}