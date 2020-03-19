import React from 'react';
import NextLink from 'next/link';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Box,
  Link
} from '@chakra-ui/core';

import Timeline from '../components/Timeline';
import Container from '../components/Container';

const BlogPost = ({ title, summary, views }) => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <NextLink href={'blog/test'} passHref>
      <Link w="100%" _hover={{ textDecoration: 'none' }}>
        <Box mb={8} display="block" width="100%">
          <Flex width="100%" justifyContent="space-between">
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              {title}
            </Heading>
            <Text color="gray.500" minWidth="100px">
              {views}
            </Text>
          </Flex>
          <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

const Index = () => {
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
            Hey, I’m Lee Robinson
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            I’m a developer, writer, and creator living in Des Moines, IA.
            You’ve found my personal slice of the internet – everything you want
            to know and more is here.
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          mt={8}
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Most Popular
          </Heading>
          <BlogPost
            title="Technical Recruiting is Broken"
            summary="Why is there so much recruiter spam? What can we do to fix technical recruiting?"
            views="12,532 views"
          />
          <BlogPost
            title="Things I've Learned Building Next.js Apps"
            summary=" I've spent a lot of time in the past 4 months creating Next.js apps for both work and personal use."
            views="12,532 views"
          />
          <BlogPost
            title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
            summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
            views="12,532 views"
          />
        </Flex>
        <Timeline />
      </Stack>
    </Container>
  );
};

export default Index;
