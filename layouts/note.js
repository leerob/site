import React from 'react';
import { Flex, Stack } from '@chakra-ui/core';

import Container from '../components/Container';

export default (frontMatter) => {
  const slug = frontMatter.__resourcePath
    .replace('notes/', '')
    .replace('.mdx', '');

  return ({ children }) => {
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
            {children}
          </Flex>
        </Stack>
      </Container>
    );
  };
};
