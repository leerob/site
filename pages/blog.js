import React from 'react';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon
} from '@chakra-ui/core';

import Container from '../components/Container';
import BlogPost from '../components/BlogPost';

import { frontMatter as blogPosts } from './blog/**/*.mdx';
import { frontMatter as styleGuides } from './blog/style-guides-component-libraries-design-systems.mdx';
import { frontMatter as monorepo } from './blog/monorepo-lerna-yarn-workspaces.mdx';
import { frontMatter as technicalRecruiting } from './blog/technical-recruiting-is-broken.mdx';

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
          <BlogPost {...styleGuides} badge="32,532 views" />
          <BlogPost {...monorepo} badge="31,552 views" />
          <BlogPost {...technicalRecruiting} badge="12,532 views" />
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          mt={8}
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            All Posts
          </Heading>
          {blogPosts
            .sort(
              (a, b) =>
                Number(new Date(b.publishedAt)) -
                Number(new Date(a.publishedAt))
            )
            .map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
        </Flex>
      </Stack>
    </Container>
  );
};

export default Blog;
