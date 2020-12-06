import React from 'react';
import NextLink from 'next/link';
import {
  Avatar,
  Box,
  Link,
  Heading,
  Text,
  useColorMode
} from '@chakra-ui/react';

const FunctionCard = ({ title, description, slug, logo, ...rest }) => {
  const { colorMode } = useColorMode();
  const textColor = {
    light: 'gray.900',
    dark: 'gray.100'
  };
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.700'
  };

  return (
    <NextLink href={`/snippets/${slug}`} passHref>
      <Link
        border="1px solid"
        borderColor={borderColor[colorMode]}
        borderRadius={8}
        h="130px"
        p={4}
        w="100%"
        textDecoration="none"
        _hover={{ textDecoration: 'none' }}
        {...rest}
      >
        <Box boxShadow="0 0 0 1px #E2E8F0" borderRadius="50%" width="32px">
          <Avatar size="sm" name={title} src={`/logos/${logo}`} />
        </Box>
        <Heading
          as="h3"
          size="sm"
          fontWeight="bold"
          textAlign="left"
          mt={4}
          color={textColor[colorMode]}
        >
          {title}
        </Heading>
        <Text
          fontSize="xs"
          mt={2}
          textAlign="left"
          color={secondaryTextColor[colorMode]}
        >
          {description}
        </Text>
      </Link>
    </NextLink>
  );
};

export default FunctionCard;
