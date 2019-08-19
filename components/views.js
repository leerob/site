import format from 'comma-number';
import React, {useState, useEffect} from 'react';
import styled, {css, keyframes} from 'styled-components';

const highlightBackgound = keyframes`
    from {
        background-color: yellow;
    }
    to {
        background-color: #fff;
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
    let raf = null;

    const animateViews = () => {
        if (raf) {
            return;
        }

        if (highlight) {
            setHighlight(
                false,
                // Reset the animation
                (raf = requestAnimationFrame(() => {
                    raf = null;
                    setHighlight(true);
                }))
            );
        } else {
            setHighlight(true);
        }
    };

    useEffect(() => {
        if (props.views) {
            animateViews();
        }
    }, [props.views]);

    const formattedViews = `${format(props.views)} views`;

    return (
        <Container>
            <StyledViews highlight={highlight}>{` - ${props.views && formattedViews}`}</StyledViews>
        </Container>
    );
}

export default Views;
