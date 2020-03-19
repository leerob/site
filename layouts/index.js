import React from 'react';
import { parseISO, format } from 'date-fns';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  Link,
  Box
} from '@chakra-ui/core';

import Container from '../components/Container';
import Subscribe from '../components/Subscribe';

const editUrl = (slug) =>
  `https://github.com/leerob/leerob.io/edit/master/pages/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://leerob.io/blog/${slug}`
  )}`;

export default (frontMatter) => {
  return ({ children }) => {
    const { colorMode } = useColorMode();
    const textColor = {
      light: 'gray.700',
      dark: 'gray.400'
    };

    return (
      <Container>
        <Stack
          as="article"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          w="100%"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            w="100%"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              {frontMatter.title}
            </Heading>
            <Flex justify="space-between" align="center" mt={2} w="100%" mb={4}>
              <Flex align="center">
                <Avatar
                  size="xs"
                  name="Lee Robinson"
                  src="https://bit.ly/33vEjhB"
                  mr={2}
                />
                <Text fontSize="sm" color={textColor[colorMode]}>
                  {frontMatter.by}
                  {'Lee Robinson / '}
                  {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                </Text>
              </Flex>
              <Text fontSize="sm" color="gray.500" minWidth="100px">
                {frontMatter.readingTime.text}
              </Text>
            </Flex>
          </Flex>
          {children}
          <Subscribe />
          <Box>
            <Link href={discussUrl(frontMatter.slug)} isExternal>
              {'Discuss on Twitter'}
            </Link>
            {` • `}
            <Link href={editUrl(frontMatter.slug)} isExternal>
              {'Edit on GitHub'}
            </Link>
          </Box>
        </Stack>
      </Container>
    );
  };
};
