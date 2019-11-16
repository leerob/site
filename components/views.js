import format from 'comma-number';
import React, {useState, useEffect} from 'react';
import styled, {css, keyframes} from 'styled-components';

const highlightBackgound = keyframes`
    from {
        background-color: yellow;
    }
    to {
        background-color: ${(props) => props.theme.secondary};
    }
`;

const Container = styled.div`
    display: flex;
    margin: 0.5em 0 0 0.3em;
`;

const StyledViews = styled.span`
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 0.04em;

    ${(props) =>
        props.highlight &&
        css`
            animation-name: ${highlightBackgound};
            animation-duration: 1s;
        `}
`;

function Views(props) {
    const [highlight, setHighlight] = useState(false);

    useEffect(() => {
        if (props.views) {
            setHighlight(true);
        }

        setTimeout(() => {
            setHighlight(false);
        }, 2000);
    }, [props.views]);

    const formattedViews = `${format(props.views)} views`;

    return (
        <Container>
            <StyledViews highlight={highlight}>{` - ${props.views && formattedViews}`}</StyledViews>
        </Container>
    );
}

export default Views;
