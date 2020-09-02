import React from 'react';
import IframeResizer from 'iframe-resizer-react';
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
import ViewCounter from '../components/ViewCounter';
import BlogSeo from '../components/BlogSeo';

const editUrl = (slug) =>
  `https://github.com/leerob/leerob.io/edit/master/pages/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://leerob.io/blog/${slug}`
  )}`;

export default function BlogLayout({ children, frontMatter }) {
  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');
  const { colorMode } = useColorMode();
  const textColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Container>
      <BlogSeo url={`https://leerob.io/blog/${slug}`} {...frontMatter} />
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
          <Flex
            justify="space-between"
            align={['initial', 'center']}
            direction={['column', 'row']}
            mt={2}
            w="100%"
            mb={4}
          >
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
            <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
              {frontMatter.readingTime.text}
              {` • `}
              <ViewCounter id={slug} />
            </Text>
          </Flex>
        </Flex>
        {children}
        <Subscribe />
        <Box>
          <Link href={discussUrl(slug)} isExternal>
            {'Discuss on Twitter'}
          </Link>
          {` • `}
          <Link href={editUrl(slug)} isExternal>
            {'Edit on GitHub'}
          </Link>
        </Box>
        <IframeResizer
          checkOrigin={false}
          title="Comments"
          src={`https://fastfeedback.io/embed/BLspD6y8Bfn73LLm7nvW/${slug}?theme=${colorMode}`}
          style={{
            width: '1px',
            minWidth: '100%'
          }}
        />
      </Stack>
    </Container>
  );
}
