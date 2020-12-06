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

const url = 'https://leerob.io/snippets';
const title = 'Code Snippets – Lee Robinson';

const About = () => {
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
                <FunctionCard
                  title="Mailchimp"
                  slug="mailchimp"
                  logo="mailchimp.png"
                  description="Subscribe to a newsletter."
                />
                <FunctionCard
                  title="Mailgun"
                  slug="mailgun"
                  logo="mailgun.png"
                  description="Send an email to a user."
                />
                <FunctionCard
                  title="SendGrid"
                  slug="sendgrid"
                  logo="sendgrid.png"
                  description="Send an email to a user."
                />
                <FunctionCard
                  title="Stripe"
                  slug="stripe"
                  logo="stripe.png"
                  description="Accept a payment using Checkout."
                />
                <FunctionCard
                  title="Gumroad"
                  slug="gumroad"
                  logo="gumroad.png"
                  description="Retrieve all sales for a user."
                />
                <FunctionCard
                  title="Gumroad"
                  slug="gumroad-product"
                  logo="gumroad.png"
                  description="Retrieve all sales for a product."
                />
                <FunctionCard
                  title="YouTube"
                  slug="youtube"
                  logo="youtube.png"
                  description="Get channel statistics."
                />
                <FunctionCard
                  title="Analytics"
                  slug="google-analytics"
                  logo="google-analytics.png"
                  description="Page views over a given range."
                />
                <FunctionCard
                  title="Sheets"
                  slug="google-sheets"
                  logo="google-sheets.png"
                  description="Create an entry in a sheet."
                />
                <FunctionCard
                  title="Firebase"
                  slug="firebase"
                  logo="firebase.png"
                  description="Read data from Realtime Database."
                />
                <FunctionCard
                  title="Buttondown"
                  slug="buttondown"
                  logo="buttondown.png"
                  description="Subscribe to a newsletter."
                />
                <FunctionCard
                  title="Buttondown"
                  slug="buttondown-subscribers"
                  logo="buttondown.png"
                  description="Get all subscribers."
                />
                <FunctionCard
                  title="Slack"
                  slug="slack"
                  logo="slack.png"
                  description="Create a slash command."
                />
                <FunctionCard
                  title="Spotify"
                  slug="spotify"
                  logo="spotify.png"
                  description="Show what you're listening to."
                />
                <FunctionCard
                  title="Spotify"
                  slug="spotify-top-tracks"
                  logo="spotify.png"
                  description="List your top tracks."
                />
              </SimpleGrid>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
