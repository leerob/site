import React, { useState } from 'react';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Button,
  List,
  ListItem,
  Icon,
  Stack,
  Divider
} from '@chakra-ui/core';

const YearDivider = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  };

  return <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />;
};

const TimelineStep = ({ title, children }) => {
  const { colorMode } = useColorMode();
  const color = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <ListItem>
      <Stack ml={2} mb={4}>
        <Flex align="center">
          <Icon name="check-circle" mr={2} color="whatsapp.500" />
          <Text fontWeight="medium">{title}</Text>
        </Flex>
        <Text color={color[colorMode]} ml={6}>
          {children}
        </Text>
      </Stack>
    </ListItem>
  );
};

const FullTimeline = () => (
  <>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2018
    </Heading>
    <List>
      <TimelineStep title="Started dsmtech.io 🤘🏻">
        Reflecting on my recent job search, I realized there wasn't a
        centralized listing of all the Des Moines tech companies. So...I created
        it.
      </TimelineStep>
      <TimelineStep title="Joined Hy-Vee 🛒">
        It was time for a change in my career, and Hy-Vee came calling. The best
        part was reducing my commute time by an hour/day.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2016
    </Heading>
    <List>
      <TimelineStep title="Graduated College 🎓">
        One of my most cherished accomplishments. I worked my ass off to get
        this degree.
      </TimelineStep>
      <TimelineStep title="Family Roadtrip 🚗">
        To celebrate graduating, my family and I did a road trip down the
        Pacific Coast Highway in California. An unforgettable experience.
      </TimelineStep>
      <TimelineStep title="Full-Time at Workiva">
        I was offered and accepted a full-time offer with Workiva, as well as
        the opportunity to continue my internship until graduation.
      </TimelineStep>
      <TimelineStep title="Moved to Des Moines 🏙">
        I moved Downtown DSM into a quaint 1BR apartment. Des Moines has always
        felt like home growing up ~45 minutes away.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2015
    </Heading>
    <List>
      <TimelineStep title="Started at Workiva 🔥">
        This internship meant a lot to me. Being able to work part-time while
        still getting my school work done was huge.
      </TimelineStep>
      <TimelineStep title="Started Tutoring Programming">
        Why not make a little extra money and sharpen my skills? I taught Python
        to ISU Freshman.
      </TimelineStep>
      <TimelineStep title="Second Internship">
        Spent the summer in (beautiful?) Cedar Rapids, IA working at Rockwell
        Collins.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2014
    </Heading>
    <List>
      <TimelineStep title="Took a Semester Off">
        I opted to stay at my internship full-time throughout the fall.
      </TimelineStep>
      <TimelineStep title="Landed First Internship">
        Finally felt like I understood this whole programming thing. My
        interviewing skills weren't great, but I managed to snag my first
        internship.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2011
    </Heading>
    <List>
      <TimelineStep title="Graduated High School">
        My hometown had about 1000 people, in total. My graduating class was 36.
      </TimelineStep>
      <TimelineStep title="Started at Iowa State University 🌪❤️">
        I've been a die-hard Cyclone fan my whole life. It was a no-brainer that
        I was going to ISU, especially since they have a great Engineering
        program.
      </TimelineStep>
      <TimelineStep title="Learned How To Program">
        CS 101. Our professor asked a simple question - "Who here has prior
        programming experience?". About 80% of the class raised their hands. I
        knew it was going to be an uphill battle from here.
      </TimelineStep>
      <TimelineStep title="Wanted To Dropout of College">
        I didn't pick up programming right away. It didn't help we learned C to
        start – I'm glad I stuck with it, though.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      1998
    </Heading>
    <List>
      <TimelineStep title="First Computer">
        I remember many nights playing Age of Empires, Lego Island, and
        Runescape.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      1997
    </Heading>
    <List>
      <TimelineStep title="Became a Pokémon Master">
        Every time we'd go to Target, I would beg my mom to get a pack of
        Pokémon cards. Sorry, mom.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      1993
    </Heading>
    <List>
      <TimelineStep title="Born 👶🏼🍼" />
    </List>
  </>
);

const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      maxWidth="700px"
      mt={8}
    >
      <Heading letterSpacing="tight" mb={4} size="xl" fontWeight="bold">
        Timeline
      </Heading>
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        mb={4}
        letterSpacing="tighter"
      >
        2020
      </Heading>
      <List>
        <TimelineStep title="Launched React 2025 💯">
          Building a real SaaS application, from zero to production.
        </TimelineStep>
        <TimelineStep title="Emerging Technology Leader of the Year 🏆">
          I was extremely honored to be one of five finalists nominated for this
          award at the 2020 Prometheus Awards.
        </TimelineStep>
        <TimelineStep title="Became a Tech Lead 👨🏻‍💻">
          Starting at the beginning of this year, I moved into a tech leadership
          role on one of our e-commerce development teams.
        </TimelineStep>
        <TimelineStep title="Mastering Next.js made $10K 📈">
          I taught hundreds of students from all over the world how to build web
          applications. Exceeded my wildest expectations.
        </TimelineStep>
      </List>
      <YearDivider />
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        mb={4}
        letterSpacing="tighter"
      >
        2019
      </Heading>
      <List>
        <TimelineStep title="Software Engineer III ✨">
          Lead our design system architecture, building new components with
          React, Storybook, and styled-components.
        </TimelineStep>
        <TimelineStep title="Mastering Next.js ⚛️">
          Launched a 50+ lesson video course for building apps with Next.js and
          React.
        </TimelineStep>
        <TimelineStep title="Bought a Townhome 🏡">
          Who wants to do yardwork? Not me. Plus, Allie and I love living
          downtown Des Moines.
        </TimelineStep>
        <TimelineStep title="Got Engaged 💍">
          I asked my now fiancée, Allie, to marry me. She said yes! It was a
          busy month, to say the least. I also spoke at three events and sold my
          condo.
        </TimelineStep>
        <TimelineStep title="Spoke at Talent42 🎤">
          I spoke to over 100 technical recruiting leaders from across the
          country at Talent42 in Seattle during a 45-minute keynote.
        </TimelineStep>
      </List>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <Button
          my={4}
          mx="auto"
          fontWeight="medium"
          rightIcon="chevron-down"
          variant="ghost"
          onClick={() => showFullTimeline(true)}
        >
          See More
        </Button>
      )}
    </Flex>
  );
};

export default Timeline;
