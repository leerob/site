import React from 'react';
import { NextSeo } from 'next-seo';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/core';

import Unsplash from '../components/metrics/unsplash';
import YouTube from '../components/metrics/youtube';
import GoogleAnalytics from '../components/metrics/analytics';
import GitHub from '../components/metrics/github';
import Container from '../components/Container';

const url = 'https://leerob.io/dashboard';
const title = 'Dashboard – Lee Robinson';
const description =
  'My personal dashboard, built with Next.js API routes deployed as serverless functions.';

const Dashboard = () => {
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
          description,
          images: [
            {
              url: 'https://leerob.io/static/images/dashboard.jpg',
              alt: description,
              width: 1280,
              height: 720
            }
          ]
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
              Dashboard
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              This is my personal dashboard, built with Next.js API routes
              deployed as serverless functions. I use this dashboard to track
              various metrics across platforms like Unsplash, Google Analytics,
              GitHub, and more.
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            <Unsplash />
            <YouTube />
            <GoogleAnalytics />
            <GitHub />
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Dashboard;
