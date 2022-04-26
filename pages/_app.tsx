import React, { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next'

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import '../public/fontface.css';
// import CheckAccess from '../components/auth/CheckAccess/CheckAccess';
// import EnterWhenLogin from '../components/auth/CheckAccess/EnterWhenLogin';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps } : AppPropsWithLayout) {

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

//   const auth = Component.auth
//   ? (page: any) => <CheckAccess>{page}</CheckAccess>
//   : emptyPage;

// const enterWhenLogin = Component.enterWhenLogin
//   ? (page: any) => <EnterWhenLogin>{page}</EnterWhenLogin>
//   : emptyPage;

  return getLayout(
    <Provider store={store}>
      <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta
            name="description"
            content="trulux is an e-commerce online store for making your face in better way beauty."
          />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
          {/* {enterWhenLogin(auth(getLayout(<Component {...pageProps} />)))} */}
          {/* <LeSnackbar /> */}
      </ThemeProvider>
    </Provider>
  )
}