import React from 'react';
import { Box, Link, Flex, Text, useColorMode } from '@chakra-ui/react';

const Track = (track) => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.100',
    dark: 'gray.800'
  };
  const rankingColor = {
    light: 'gray.400',
    dark: 'gray.600'
  };

  return (
    <Flex
      direction="row"
      alignItems="baseline"
      borderBottom="1px solid"
      borderColor={borderColor[colorMode]}
      maxWidth="600px"
      w="full"
      mt="16px !important"
    >
      <Text fontSize="sm" fontWeight="bold" color={rankingColor[colorMode]}>
        {track.ranking}
      </Text>
      <Flex direction="column" pl={3}>
        <Link
          fontWeight="medium"
          maxWidth={['250px', '600px']}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          href={track.songUrl}
          isExternal
        >
          {track.title}
        </Link>
        <Text
          color="gray.500"
          mb={4}
          maxWidth={['250px', '600px']}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {track.artist}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Track;
