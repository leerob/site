import React, { useState, useRef } from 'react';
import NextLink from 'next/link';
import { trackGoal } from 'fathom-client';
import useSWR from 'swr';
import format from 'comma-number';
import {
  Heading,
  InputGroup,
  Link,
  Box,
  Input,
  InputRightElement,
  Button,
  Text,
  useToast,
  useColorMode
} from '@chakra-ui/react';

import fetcher from '../lib/fetcher';

const Subscribe = () => {
  const [loading, setLoading] = useState(false);
  const inputEl = useRef(null);
  const toast = useToast();
  const { colorMode } = useColorMode();
  const bgColor = {
    light: 'blue.50',
    dark: 'blue.900'
  };
  const borderColor = {
    light: 'blue.200',
    dark: 'blue.900'
  };
  const inputColor = {
    light: 'white',
    dark: 'blue.800'
  };
  const buttonColor = {
    light: 'gray.100',
    dark: 'blue.700'
  };
  const secondaryText = {
    light: 'gray.800',
    dark: 'gray.200'
  };

  const { data } = useSWR('/api/subscribers', fetcher);
  const subscriberCount = format(data?.count);

  const subscribe = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    setLoading(false);
    const { error } = await res.json();

    if (error) {
      toast({
        title: 'An error occurred.',
        description: error,
        status: 'error',
        duration: 3000,
        isClosable: true
      });

      return;
    }

    trackGoal('JYFUFMSF', 0);
    inputEl.current.value = '';
    toast({
      title: 'Success!',
      description: 'You are now subscribed.',
      status: 'success',
      duration: 3000,
      isClosable: true
    });
  };

  return (
    <Box
      border="1px solid"
      borderColor={borderColor[colorMode]}
      bg={bgColor[colorMode]}
      borderRadius={4}
      padding={6}
      my={4}
      w="100%"
    >
      <Heading as="h5" size="md" mb={2}>
        Subscribe to the newsletter
      </Heading>
      <Text>
        Get emails from me about web development, tech, and early access to new
        articles.
      </Text>
      <InputGroup size="md" my={4}>
        <Input
          aria-label="Email for newsletter"
          placeholder="tim@apple.com"
          bg={inputColor[colorMode]}
          ref={inputEl}
          type="email"
          pr={2}
        />
        <InputRightElement width="7.75rem" pr={2}>
          <Button
            isLoading={loading}
            fontWeight="bold"
            h="1.75rem"
            px={4}
            size="sm"
            onClick={subscribe}
            bg={buttonColor[colorMode]}
          >
            Subscribe
          </Button>
        </InputRightElement>
      </InputGroup>
      <Text color={secondaryText[colorMode]} fontSize="sm">
        {`${subscriberCount || '-'} subscribers – `}
        <NextLink href="/newsletter" passHref>
          <Link>{`24 issues`}</Link>
        </NextLink>
      </Text>
    </Box>
  );
};

export default Subscribe;
