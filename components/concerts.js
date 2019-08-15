import React, {useState} from 'react';
import styled from 'styled-components';

import concerts from '../data/concerts';
import {spacing} from '../styles/vars';

import Ul from './elements/ul';
import Li from './elements/li';
import A from './elements/a';

const Container = styled.div`
    margin-top: ${spacing.normal};
`;

function ConcertList() {
    const [showList, setShowList] = useState(false);

    return (
        <Container>
            {`I've attended over 💯concerts. `}
            <A onClick={() => setShowList(true)} underline>{`Click here`}</A>
            {` to see the ones I can remember.`}
            {showList && (
                <Ul>
                    {concerts.map((name) => (
                        <Li key={name}>{name}</Li>
                    ))}
                </Ul>
            )}
        </Container>
    );
}

export default ConcertList;
