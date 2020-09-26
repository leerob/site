import React from 'react';
import { Flex, Link, IconButton, Stack, Text, Button } from '@chakra-ui/core';

const Footer = () => (
  <Stack>
    <Flex justify="center" mb={4}>
      <Link href="https://twitter.com/fenskexyz" title="Twitter" isExternal>
        <IconButton
          aria-label="Twitter"
          icon="twitter"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="https://github.com/fenske" title="GitHub" isExternal>
        <IconButton
          aria-label="GitHub"
          icon="github"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/fenske/"
        title="LinkedIn"
        isExternal
      >
        <IconButton
          aria-label="LinkedIn"
          icon="linkedin"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="mailto:anton@fenske.xyz" title="Email" isExternal>
        <IconButton
          aria-label="Email"
          icon="mail"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
    </Flex>
    <Flex justify="center" mb={4}>
      <Link
        href="https://github.com/leerob/leerob.io"
        title="leerob"
        isExternal
        color={'gray.500'}
      >
        The backbone of this site is a fork of leerob.io built by @leeerob.
      </Link>
    </Flex>
  </Stack>
);

export default Footer;
