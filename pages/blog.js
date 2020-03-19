import React from 'react';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Icon
} from '@chakra-ui/core';

import Container from '../components/Container';

const Blog = () => {
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
            Blog
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            I've been writing online since 2014, mostly about web development
            and tech careers. In total, I've wrote 40 blog posts on this site.
            Use the search or filters to find what you're looking for!
          </Text>
          <InputGroup my={4} mr={4} w="100%">
            <Input placeholder="Search articles" />
            <InputRightElement
              children={<Icon name="search" color="gray.300" />}
            />
          </InputGroup>
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
          <Box mb={8} display="block" width="100%">
            <Flex width="100%" justifyContent="space-between">
              <Heading size="md" as="h3" mb={2} fontWeight="medium">
                Technical Recruiting is Broken
              </Heading>
              <Text color="gray.500" minWidth="100px">
                12,532 views
              </Text>
            </Flex>
            <Text color={secondaryTextColor[colorMode]}>
              Why is there so much recruiter spam? What can we do to fix
              technical recruiting?
            </Text>
          </Box>
          <Box mb={8} width="100%">
            <Flex width="100%" justifyContent="space-between">
              <Heading size="md" as="h3" mb={2} fontWeight="medium">
                Things I've Learned Building Next.js Apps
              </Heading>
              <Text color="gray.500" minWidth="100px">
                12,532 views
              </Text>
            </Flex>
            <Text color={secondaryTextColor[colorMode]}>
              I've spent a lot of time in the past 4 months creating Next.js
              apps for both work and personal use.
            </Text>
          </Box>
          <Box mb={8} width="100%">
            <Flex width="100%" justifyContent="space-between">
              <Heading size="md" as="h3" mb={2} fontWeight="medium">
                Everything I Know About Style Guides, Design Systems, and
                Component Libraries
              </Heading>
              <Text color="gray.500" minWidth="100px">
                12,532 views
              </Text>
            </Flex>
            <Text color={secondaryTextColor[colorMode]}>
              A deep-dive on everything I've learned in the past year building
              style guides, design systems, component libraries, and their best
              practices.
            </Text>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Blog;
