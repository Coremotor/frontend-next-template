import '../app/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import light from 'app/styles/light'
import dark from 'app/styles/dark'
import { store } from 'app/store/store'
import { ToastContainer } from 'react-toastify'
import NextNprogress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
  const themes: { [key: string]: DefaultTheme } = {
    light: light,
    dark: dark,
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes.light}>
        <ToastContainer />
        <NextNprogress
          options={{
            showSpinner: false,
          }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
