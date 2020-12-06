import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Box,
  Avatar
} from '@chakra-ui/react';

import Container from '../components/Container';

export default function SnippetLayout({ children, frontMatter }) {
  const router = useRouter();
  const slug = router.asPath.replace('/snippets', '');
  const { colorMode } = useColorMode();
  const textColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  const title = `${frontMatter.title} - Code Snippet`;
  const url = `https://leerob.io/snippets/${slug}`;

  return (
    <Container>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      <Stack
        as="section"
        spacing={0}
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
          <Flex
            justify="space-between"
            align={['initial', 'center']}
            direction={['column', 'row']}
            mt={2}
            mb={8}
            w="100%"
          >
            <Box>
              <Heading letterSpacing="tight" mb={2} as="h1" size="xl">
                {frontMatter.title}
              </Heading>
              <Text fontSize="sm" color="gray.700" color={textColor[colorMode]}>
                {frontMatter.description}
              </Text>
            </Box>
            <Box
              boxShadow="0 0 0 1px #E2E8F0"
              borderRadius="50%"
              width="48px"
              mt={[2, 0]}
            >
              <Avatar
                size="md"
                name={frontMatter.title}
                src={`/logos/${frontMatter.logo}`}
              />
            </Box>
          </Flex>
        </Flex>
        {children}
      </Stack>
    </Container>
  );
}
