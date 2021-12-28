import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/theme/GlobalStyle'
import Router from '@/Router'
import theme from '@/theme/config'

const App = () => {
  return (
        <ThemeProvider theme={theme}>
            <Router />
            <GlobalStyle />
        </ThemeProvider>
  )
}

export default App
