import React from 'react';
import * as Fathom from 'fathom-client';
import {
  Flex,
  Link,
  Heading,
  Text,
  Stack,
  useColorMode
} from '@chakra-ui/react';

import { React2025Icon, FastFeedbackIcon, NextjsIcon } from './icons';

const trackGoal = (title) => {
  const goalCodes = {
    'React 2025': '5WGDOKV0',
    'Mastering Next.js': 'HV9HDL0O'
  };

  Fathom.trackGoal(goalCodes[title], 0);
};

const ProjectCard = ({ title, description, href, icon }) => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  };
  const iconColor = {
    light: 'gray.1000',
    dark: 'white'
  };

  return (
    <Link
      mb={4}
      href={href}
      onClick={() => trackGoal(title)}
      title={title}
      isExternal
      _hover={{
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        textDecoration: 'none'
      }}
    >
      <Flex
        align="center"
        border="1px solid"
        borderColor={borderColor[colorMode]}
        borderRadius={4}
        p={4}
      >
        {icon == 'react2025' && (
          <React2025Icon
            aria-label="React 2025"
            color={iconColor[colorMode]}
            boxSize="32px"
            ml={2}
            mr={4}
          />
        )}
        {icon == 'nextjs' && (
          <NextjsIcon
            aria-label="Learn Next.js"
            color={iconColor[colorMode]}
            boxSize="32px"
            ml={2}
            mr={4}
          />
        )}
        {icon == 'fastfeedback' && (
          <FastFeedbackIcon
            aria-label="Fast Feedback"
            color={iconColor[colorMode]}
            boxSize="32px"
            ml={2}
            mr={4}
          />
        )}
        <Stack>
          <Heading as="h4" size="md" fontWeight="bold" letterSpacing="tighter">
            {title}
          </Heading>
          <Text lineHeight="1.3">{description}</Text>
        </Stack>
      </Flex>
    </Link>
  );
};

export default ProjectCard;
