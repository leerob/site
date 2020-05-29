import React from 'react';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/core';

import Container from '../components/Container';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';

const Index = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Container>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Hi there , Anton Fenske is here.
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            Here I share info about my work.
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Projects
          </Heading>
          <ProjectCard
            title="CoreSkills"
            description="Coding interviews that make sense"
            href="https://coreskills.dev/"
            icon="react2025"
          />
        </Flex>
        <Subscribe />
      </Stack>
    </Container>
  );
};

export default Index;
