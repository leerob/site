import React from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  List
} from '@chakra-ui/core';

import Container from '../components/Container';
import Subscribe from '../components/Subscribe';
import NewsletterLink from '../components/NewsletterLink';

// eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter as newsletters } from './newsletter/**/*.mdx';

const url = 'https://leerob.io/newsletter';
const title = 'Newsletter – Lee Robinson';
const description =
  'Thoughts on the software industry, programming, tech, videography, music, and my personal life.';

const Newsletter = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
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
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Newsletter
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              My newsletter provides a behind-the-scenes look into what I'm
              working on and writing about. I frequently share some of my
              favorite articles I've read, as well as anything fascinating about
              technology.
            </Text>
          </Flex>
          <Subscribe />
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
              Archive
            </Heading>
            <List styleType="disc">
              {newsletters
                .sort(
                  (a, b) =>
                    Number(new Date(b.publishedAt)) -
                    Number(new Date(a.publishedAt))
                )
                .map((frontMatter) => (
                  <NewsletterLink key={frontMatter.title} {...frontMatter} />
                ))}
            </List>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Newsletter;
