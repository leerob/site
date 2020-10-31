import React from 'react';
import * as Fathom from 'fathom-client';
import {
  Flex,
  Link,
  Heading,
  Text,
  Stack,
  useColorMode
} from '@chakra-ui/core';

import { React2025Icon, JamstackfnsIcon, NextjsIcon } from './icons/customIcons';

const trackGoal = (title) => {
  const goalCodes = {
    'React 2025': '5WGDOKV0',
    'Mastering Next.js': 'HV9HDL0O',
    jamstackfns: 'LRXBPLZS'
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
        {
          icon == 'react2025' && <React2025Icon aria-label="React2025" color={iconColor[colorMode]} boxSize="32px" ml={2} mr={4} />
        }
        {
          icon == 'nextjs' && <NextjsIcon aria-label="NextJS" color={iconColor[colorMode]} boxSize="32px" ml={2} mr={4} />
        }
        {
          icon == 'jamstackfns' && <JamstackfnsIcon aria-label="JamstackFns" color={iconColor[colorMode]} boxSize="32px" ml={2} mr={4} />
        }
        <Stack>
          <Heading
            as="h4"
            size="md"
            fontWeight="bold"
            mb={4}
            letterSpacing="tighter"
          >
            {title}
          </Heading>
          <Text lineHeight="1.3">{description}</Text>
        </Stack>
      </Flex>
    </Link>
  );
};

export default ProjectCard;
