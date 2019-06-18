import React from 'react';
import Router from 'next/router';
import withGA from 'next-ga';
import App, {Container} from 'next/app';
import {ThemeProvider} from 'styled-components';

import {colors} from '../styles/vars';

import '../styles/prism.css';

class CustomApp extends App {
    render() {
        const {Component, pageProps} = this.props;

        const lightTheme = {
            accent: '#0967D2',
            accentLight: '#ff5252',
            body: '#3a4145',
            code: '#2d2d2d',
            inlineCode: '#f3f3f3',
            lightGrey: colors.grey[200],
            primary: colors.text,
            secondary: '#fff',
            text: '#2e2e2e'
        };

        // eslint-disable-next-line no-unused-vars
        const darkTheme = {
            accent: '#47A3F3',
            accentLight: '#BAE3FF',
            body: '#F5F7FA',
            code: '#2d2d2d',
            inlineCode: '#f3f3f3',
            lightGrey: colors.grey[200],
            primary: '#F5F7FA',
            secondary: '#1F2933',
            text: '#F5F7FA'
        };

        return (
            <ThemeProvider theme={lightTheme}>
                <Container>
                    <Component {...pageProps} />
                </Container>
            </ThemeProvider>
        );
    }
}

export default withGA('UA-131784128-1', Router)(CustomApp);
