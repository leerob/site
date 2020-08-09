import React from 'react';
import {
  List,
  ListItem,
  ListIcon,
  Text,
  Box,
  useColorMode
} from '@chakra-ui/core';

const ProsCard = ({ title, pros }) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: 'green.50',
    dark: 'green.900'
  };
  const borderColor = {
    light: 'green.200',
    dark: 'green.900'
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
      <Text>{`You might use ${title} if...`}</Text>
      <List spacing={2} mt={4}>
        {pros.map((pro) => (
          <ListItem
            key={pro}
            fontWeight="medium"
            alignItems="baseline"
            display="flex"
          >
            <ListIcon icon="check" color="green.500" />
            <Text>{pro}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProsCard;
