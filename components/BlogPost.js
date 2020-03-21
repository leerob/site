import React from 'react';
import NextLink from 'next/link';
import { useColorMode, Heading, Text, Flex, Box, Link } from '@chakra-ui/core';

const BlogPost = (frontMatter) => {
  const { title, summary, badge } = frontMatter;
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <NextLink href={frontMatter.__resourcePath.replace('.mdx', '')} passHref>
      <Link w="100%" _hover={{ textDecoration: 'none' }}>
        <Box mb={8} display="block" width="100%">
          <Flex width="100%" justifyContent="space-between">
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              {title}
            </Heading>
            <Text color="gray.500" minWidth="105px">
              {badge}
            </Text>
          </Flex>
          <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
