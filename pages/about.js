import React from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Icon
} from '@chakra-ui/core';

import Container from '../components/Container';

const url = 'https://fenske.xyz/about';
const title = 'About Me – Anton Fenske';

const About = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };
  const linkColor = {
    light: 'hsl(208, 99%, 44%)',
    dark: 'hsl(208, 95%, 68%)'
  };

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              About Me
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Hi there! 👋 My name is Anton Fenske. I'm a software engineer and
              an online entrepreneur.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              These days I work on{' '}
              <Link href="https://devskills.co" color="blue.500">
                <b>DevSkills</b>
              </Link>{' '}
              to make sense of coding interviews.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I'm building it in public, documenting the journey on my Twitter.
              Don't hesitate to{' '}
              <Link href="https://twitter.com/fenskexyz" color="blue.500">
                <b>follow me</b>
              </Link>{' '}
              there.
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
