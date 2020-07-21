import React from 'react';
import { Box, Link, Stack, Text, useColorMode } from '@chakra-ui/core';

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
    <Box
      mb={4}
      display="flex"
      flexDirection="row"
      alignItems="baseline"
      borderBottom="1px solid"
      borderColor={borderColor[colorMode]}
      p={2}
      maxWidth="600px"
      w="full"
    >
      <Text fontSize="sm" fontWeight="bold" color={rankingColor[colorMode]}>
        {track.ranking}
      </Text>
      <Stack spacing={0} ml={3}>
        <Link
          fontWeight="medium"
          maxWidth="600px"
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
          maxWidth="600px"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {track.artist}
        </Text>
      </Stack>
    </Box>
  );
};

export default Track;
