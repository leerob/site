import React from 'react';
import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';
import { useColorMode, Link, ListItem } from '@chakra-ui/react';

const NewsletterLink = (frontMatter) => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <ListItem mb={2} ml={4}>
      <NextLink href={`/newsletter/${frontMatter.slug}`} passHref>
        <Link color={secondaryTextColor[colorMode]}>
          {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
        </Link>
      </NextLink>
    </ListItem>
  );
};

export default NewsletterLink;
