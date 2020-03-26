import React, { useState } from 'react';
import { Button, List, ListItem } from '@chakra-ui/core';

import concerts from '../data/concerts';

const ConcertList = () => {
  const [showList, setShowList] = useState(false);

  return (
    <>
      <Button onClick={() => setShowList(true)} underline>
        See Concert List
      </Button>
      {showList && (
        <List>
          {concerts.map((name) => (
            <ListItem key={name}>{name}</ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default ConcertList;
