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

import { frontMatter as styleGuides } from './blog/style-guides-component-libraries-design-systems.mdx';
import { frontMatter as monorepo } from './blog/monorepo-lerna-yarn-workspaces.mdx';
import { frontMatter as technicalRecruiting } from './blog/technical-recruiting-is-broken.mdx';

const BlogPost = ({ title, summary, views, slug }) => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: 'none' }}>
        <Box mb={8} display="block" width="100%">
          <Flex width="100%" justifyContent="space-between">
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              {title}
            </Heading>
            <Text color="gray.500" minWidth="105px">
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
          <BlogPost {...styleGuides} views="32,532 views" />
          <BlogPost {...monorepo} views="31,552 views" />
          <BlogPost {...technicalRecruiting} views="12,532 views" />
        </Flex>
        <Timeline />
      </Stack>
    </Container>
  );
};

export default Index;
