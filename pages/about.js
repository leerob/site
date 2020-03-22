import React from 'react';
import { useColorMode, Heading, Text, Flex, Stack, Box } from '@chakra-ui/core';

import Container from '../components/Container';

const About = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
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
            Lee Robinson is a developer, writer, and UI/UX enthusiast. He works
            at Hy-Vee, a $10 billion dollar retailer in the Midwest. His primary
            focus is developing Aisles Online, Hy-Vee's e-commerce grocery
            shopping platform, which serves millions of customers every year.
          </Text>
          <Text color={secondaryTextColor[colorMode]} mb={4}>
            Lee has spoken across the country at conferences and meet-ups about
            front-end development, design, and recruiting. He also runs his own
            blog, attracting thousands of readers every month.
          </Text>
          <Text color={secondaryTextColor[colorMode]} mb={4}>
            Prior to Hy-Vee, Lee worked as an engineer at Workiva (NYSE:WK) - a
            cloud provider of connected data, reporting, and compliance
            solutions. Lee enjoys all things technology, music, and
            photography/videography.
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
};

export default About;
