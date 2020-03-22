import React from 'react';
import NextLink from 'next/link';
import { useColorMode, Button, Flex, Box, IconButton } from '@chakra-ui/core';
import styled from '@emotion/styled';

import Footer from './Footer';

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = {
    light: 'white',
    dark: 'gray.900'
  };
  const primarytextColor = {
    light: 'black',
    dark: 'white'
  };
  const navBgColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(23, 25, 35, 0.8)'
  };

  return (
    <Flex
      as="main"
      justifyContent="center"
      flexDirection="column"
      bg={bgColor[colorMode]}
      color={primarytextColor[colorMode]}
      px={8}
    >
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        bg={navBgColor[colorMode]}
        as="nav"
        py={8}
        my={8}
        mx="auto"
      >
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === 'dark' ? 'sun' : 'moon'}
          onClick={toggleColorMode}
        />
        <Box>
          <NextLink href="/dashboard" passHref>
            <Button as="a" variant="ghost">
              Dashboard
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button as="a" variant="ghost">
              Blog
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button as="a" variant="ghost">
              About
            </Button>
          </NextLink>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost">
              Home
            </Button>
          </NextLink>
        </Box>
      </StickyNav>
      {children}
      <Footer />
    </Flex>
  );
};

export default Container;
