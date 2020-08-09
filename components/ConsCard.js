import React from 'react';
import {
  List,
  ListItem,
  ListIcon,
  Text,
  Box,
  useColorMode
} from '@chakra-ui/core';

const ConsCard = ({ title, cons }) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: 'red.50',
    dark: 'red.900'
  };
  const borderColor = {
    light: 'red.200',
    dark: 'red.900'
  };

  return (
    <Box
      border="1px solid"
      borderColor={borderColor[colorMode]}
      bg={bgColor[colorMode]}
      borderRadius={4}
      padding={6}
      my={4}
      w="100%"
    >
      <Text>{`You might not use ${title} if...`}</Text>
      <List spacing={2} mt={4}>
        {cons.map((con) => (
          <ListItem
            key={con}
            fontWeight="medium"
            alignItems="baseline"
            display="flex"
          >
            <ListIcon icon="x" color="red.500" />
            <Text>{con}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ConsCard;
