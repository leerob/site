import React from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  SimpleGrid,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react';

import Container from '../../components/Container';
import FunctionCard from '../../components/FunctionCard';
import { getAllFilesFrontMatter } from '../../lib/mdx';

const url = 'https://leerob.io/snippets';
const title = 'Code Snippets – Lee Robinson';

export default function Snippets({ snippets }) {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
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
            w="full"
          >
            <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
              Code Snippets
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={16}>
              These are a collection of code snippets I've used in the past and
              saved. Some are Serverless Functions, which include set up
              instructions. Others are anything from random CSS snippets to
              Node.js scripts.
            </Text>
            <SimpleGrid columns={[1, 2, 2]} spacing={8} mb={12} minW="full">
              {snippets.map((snippet) => (
                <FunctionCard
                  key={snippet.slug}
                  title={snippet.title}
                  slug={snippet.slug}
                  logo={snippet.logo}
                  description={snippet.description}
                />
              ))}
            </SimpleGrid>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const snippets = await getAllFilesFrontMatter('snippets');

  return { props: { snippets } };
}
