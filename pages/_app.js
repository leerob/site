import React, {useState, useEffect} from 'react';
import App from 'next/app';
import {ThemeProvider} from 'styled-components';
import useDarkMode from 'use-dark-mode';

import {colors} from '../styles/vars';

import '../styles/prism.css';

const lightTheme = {
    accent: '#0967D2',
    accentLight: '#ff5252',
    body: '#3a4145',
    code: '#011627',
    inlineCode: colors.text,
    inlineCodeBg: '#f3f3f3',
    lightGrey: colors.grey[200],
    primary: colors.text,
    secondary: '#fff',
    text: '#2e2e2e'
};

const darkTheme = {
    accent: '#47A3F3',
    accentLight: '#BAE3FF',
    body: '#F5F7FA',
    code: '#011627',
    inlineCode: '#1F2933',
    inlineCodeBg: '#f3f3f3',
    lightGrey: colors.grey[200],
    primary: '#F5F7FA',
    secondary: '#1F2933',
    text: '#F5F7FA'
};

const DarkMode = ({children}) => {
    const darkMode = useDarkMode(false);
    const theme = darkMode.value ? darkTheme : lightTheme;

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevents SSR flash for mismatched dark mode
    if (!mounted) return null;

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

class CustomApp extends App {
    render() {
        const {Component, pageProps} = this.props;

        return (
            <DarkMode>
                <Component {...pageProps} />
            </DarkMode>
        );
    }
}

export default CustomApp;
