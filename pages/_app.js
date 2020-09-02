import React, { useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Global, css } from '@emotion/core';
import { DefaultSeo } from 'next-seo';
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode
} from '@chakra-ui/core';
import Router from 'next/router';
import Head from 'next/head';
import * as Fathom from 'fathom-client';

import theme from '../styles/theme';
import { prismLightTheme, prismDarkTheme } from '../styles/prism';
import MDXComponents from '../components/MDXComponents';
import SEO from '../next-seo.config';

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};

          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }

          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171923'};
          }
        `}
      />
      {children}
    </>
  );
};

Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview();
});

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
        includedDomains: ['leerob.io']
      });
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <ColorModeProvider value="light">
          <GlobalStyle>
            <Head>
              <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
              <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
              />
              <meta content="#ffffff" name="theme-color" />
              <meta content="#ffffff" name="msapplication-TileColor" />
              <meta
                content="/static/favicons/browserconfig.xml"
                name="msapplication-config"
              />
              <meta content="14d2e73487fa6c71" name="yandex-verification" />
              <meta
                content="eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw"
                name="google-site-verification"
              />
            </Head>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </GlobalStyle>
        </ColorModeProvider>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default App;
