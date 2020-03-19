import React from 'react';
import { Stack, Link } from '@chakra-ui/core';

const Footer = () => (
  <Stack>
    <Link href="https://twitter.com/leeerob" title="Twitter" isExternal />
    <Link href="https://github.com/leerob" title="GitHub" isExternal />
    <Link
      href="https://www.linkedin.com/in/leejamesrobinson/"
      title="LinkedIn"
      isExternal
    />
  </Stack>
);

export default Footer;
