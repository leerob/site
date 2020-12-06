import React from 'react';
import { Heading, Flex, useColorMode } from '@chakra-ui/react';

const Step = ({ number, title }) => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.700'
  };

  return (
    <Flex align="center" py={4}>
      <Flex
        border="1px solid"
        borderColor={borderColor[colorMode]}
        borderRadius="50%"
        h="40px"
        w="40px"
        fontWeight="black"
        color="blue.500"
        align="center"
        justify="center"
      >
        {number}
      </Flex>
      <Heading
        ml={3}
        letterSpacing="tight"
        as="h3"
        size="md"
        fontWeight="medium"
        lineHeight="1"
      >
        {title}
      </Heading>
    </Flex>
  );
};

export default Step;
