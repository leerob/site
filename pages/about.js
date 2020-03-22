import React from 'react';
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
          <Heading letterSpacing="tight" mt={8} mb={4} as="h2" size="xl">
            Conference Talks
          </Heading>
          <Heading size="md" as="h3" mb={2} fontWeight="medium">
            <Link
              display="flex"
              href="/building-component-libraries-with-a-monorepo.pdf"
              isExternal
            >
              <Flex align="center">
                Building Component Libraries with a Monorepo
                <Icon name="external-link" mx={2} size="16px" />
              </Flex>
            </Link>
          </Heading>
          <Text color={secondaryTextColor[colorMode]} mb={8}>
            Learn why your organization needs a component library and discover
            the best practices for building, scaling, and adopting it across all
            platforms. We'll be using industry-standard technology (React,
            JavaScript, Storybook) alongside cutting-edge solutions (CSS-in-JS,
            Monorepo).
          </Text>
          <Heading size="md" as="h3" mb={2} fontWeight="medium">
            <Link
              display="flex"
              href="/recruiting-engineers-talent42-lee-robinson.pdf"
              isExternal
            >
              <Flex align="center">
                Recruiting Engineers (From An Engineer's Perspective)
                <Icon name="external-link" mx={2} size="16px" />
              </Flex>
            </Link>
          </Heading>
          <Text color={secondaryTextColor[colorMode]} mb={8}>
            Hiring talent is becoming increasingly difficult with low
            unemployment rates and the tech industry booming. What you can do to
            stick out? Learn from an engineer who's been involved on both sides
            - both as a candidate and with hiring - on what candidates really
            want out of a position.
          </Text>
          <iframe
            height="280"
            src="https://www.google.com/maps/d/embed?mid=1QOGi-u8d4vwoQ4vC4zQjKxrSfsDIQdOK&hl=en"
            title="Lee's Travel Map"
            width="100%"
          />
        </Flex>
      </Stack>
    </Container>
  );
};

export default About;
