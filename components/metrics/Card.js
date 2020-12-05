import React from 'react';
import { useColorMode, Text, Flex, Box, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const MetricCard = ({ header, link, metric }) => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.700'
  };

  return (
    <Box
      border="1px solid"
      borderColor={borderColor[colorMode]}
      borderRadius={8}
      p={4}
      minW="300px"
    >
      <Link href={link} isExternal>
        <Flex align="center">
          {header}
          <ExternalLinkIcon mx={2} />
        </Flex>
      </Link>
      <Text mt={2} fontSize="3xl" fontWeight="bold" lineHeight="short">
        {metric || '-'}
      </Text>
    </Box>
  );
};

export default MetricCard;
