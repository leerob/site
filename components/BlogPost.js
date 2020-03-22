import React from 'react';
import NextLink from 'next/link';
import useSWR from 'swr';
import format from 'comma-number';
import { useColorMode, Heading, Text, Flex, Box, Link } from '@chakra-ui/core';

import fetcher from '../lib/fetcher';

const BlogPost = (frontMatter) => {
  const { title, summary } = frontMatter;
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');

  const { data } = useSWR(`/api/page-views?id=${slug}`, fetcher);
  const views = data?.total;

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: 'none' }}>
        <Box mb={8} display="block" width="100%">
          <Flex width="100%" justifyContent="space-between">
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              {title}
            </Heading>
            <Text color="gray.500" minWidth="105px" textAlign="right">
              {`${views ? format(views) : '–––'} views`}
            </Text>
          </Flex>
          <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
