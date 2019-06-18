import React from 'react';
import styled, {css} from 'styled-components';

import {colors} from '../styles/vars';

import A from './elements/a';

const StyledTimeline = styled.div`
    border-top: 1px solid ${(props) => props.theme.lightGrey};
    margin-bottom: 64px;

    @media (max-width: 991px) {
        margin: 0 auto 0 32px;
        max-width: 340px;
    }
`;

const List = styled.ul`
    margin: 32px 0;

    @media (max-width: 991px) {
        margin: 0;
    }
`;

const TimelineStep = styled.li`
    position: relative;
    width: 2px;
    margin: 0 auto;
    list-style-type: none;
    background: ${(props) => props.theme.lightGrey};

    @media (max-width: 991px) {
        margin: 0;
    }

    :after {
        content: '';
        position: absolute;
        transition: all 0.2s ease;
        left: 50%;
        transform: translateX(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: inherit;
        box-sizing: content-box;
        top: 5px;
        border: 10px solid ${colors.grey[100]};
        background: ${colors.grey[700]};

        ${(props) =>
            props.highlight &&
            css`
                background: ${props.theme.accent};
            `};

        @media (max-width: 991px) {
            top: 25px;
        }
    }
`;

const StepLeft = styled.div`
    position: relative;
    bottom: 0;
    width: 350px;
    left: -460px;
    text-align: right;

    @media (max-width: 991px) {
        left: 40px;
        text-align: left;
        padding: 24px 0;
        width: 250px;
    }

    :before {
        right: -80px;
        top: 18px;
        background: ${colors.grey[200]};
        content: '';
        position: absolute;
        width: 60px;
        height: 2px;

        ${(props) =>
            props.highlight &&
            css`
                background: ${props.theme.accent};
            `};

        @media (max-width: 991px) {
            left: -30px;
            right: auto;
            top: 38px;
            width: 20px;
        }
    }
`;

const StepRight = styled.div`
    position: relative;
    bottom: 0;
    width: 350px;
    left: 100px;

    @media (max-width: 991px) {
        left: 40px;
        padding: 24px 0;
        width: 250px;
    }

    :before {
        left: -80px;
        top: 18px;
        background: ${(props) => props.theme.lightGrey};
        content: '';
        position: absolute;
        width: 60px;
        height: 2px;

        @media (max-width: 991px) {
            left: -30px;
            top: 40px;
            width: 20px;
        }
    }
`;

const StepHeader = styled.h6`
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    margin-bottom: 8px;
`;

const StepCopy = styled.p`
    color: ${(props) => props.theme.body};
    margin: auto 0;
    min-width: 200px;

    @media (min-width: 400px) {
        min-width: 320px;
    }

    @media (min-width: 991px) {
        margin: auto;
        min-width: 350px;
    }
`;

const AccentHeader = styled.h5`
    color: ${(props) => props.theme.accent};
    font-size: 20px;
    font-weight: bold;
`;

const StyledLink = styled(A)`
    margin: 0 4px;
`;

const Timeline = () => (
    <StyledTimeline>
        <List>
            <TimelineStep highlight>
                <StepLeft highlight>
                    <AccentHeader>{'Today 🎉'}</AccentHeader>
                </StepLeft>
            </TimelineStep>
            <TimelineStep>
                <StepRight>
                    <StepHeader>{`June 2019: Spoke at Talent42 🎤`}</StepHeader>
                    <StepCopy>
                        <span>{`I spoke to over 100 technical recruiting leaders from across the country at`}</span>
                        <StyledLink href="/LeeRobinson.pdf" underline>
                            {'Talent42'}
                        </StyledLink>
                        <span>{`in Seattle during a 45-minute keynote.`}</span>
                    </StepCopy>
                </StepRight>
            </TimelineStep>
            <TimelineStep>
                <StepLeft>
                    <StepHeader>{`December 2018: Started dsmtech.io 🤘🏻`}</StepHeader>
                    <StepCopy>{`Reflecting on my recent job search, I realized there wasn't a centralized listing of all the DSM tech companies. So, I created it.`}</StepCopy>
                </StepLeft>
            </TimelineStep>
            <TimelineStep>
                <StepRight>
                    <StepHeader>{`October 2018: Joined Hy-Vee 🛒`}</StepHeader>
                    <StepCopy>{`It was time for a change in my career, and Hy-Vee came calling. The best part was reducing my commute time by an hour/day.`}</StepCopy>
                </StepRight>
            </TimelineStep>
            <TimelineStep>
                <StepLeft>
                    <StepHeader>{'August 2016: Moved to DSM 🏙'}</StepHeader>
                    <StepCopy>
                        {`I moved Downtown DSM into a quaint 1BR apartment. Des Moines had always felt like a home away from home.`}
                    </StepCopy>
                </StepLeft>
            </TimelineStep>
            <TimelineStep>
                <StepRight>
                    <StepHeader>{`June 2016: Adulting?`}</StepHeader>
                    <StepCopy>{`I started working full-time at Workiva. I was still living in Ames, though. Reality had not set in yet.`}</StepCopy>
                </StepRight>
            </TimelineStep>
            <TimelineStep>
                <StepLeft>
                    <StepHeader>{'May 2016: Family Roadtrip 🚗'}</StepHeader>
                    <StepCopy>
                        {`To celebrate graduating, my family and I did a roadtrip down the Pacific Coast Highway in California. An unforgetable experience.`}
                    </StepCopy>
                </StepLeft>
            </TimelineStep>
            <TimelineStep>
                <StepRight>
                    <StepHeader>{'May 2016: Graudated College 🎓'}</StepHeader>
                    <StepCopy>{`One of my most cherished accomplishments. I worked my ass off to get this degree and hit a 3.5 GPA.`}</StepCopy>
                </StepRight>
            </TimelineStep>
            <TimelineStep>
                <StepLeft>
                    <StepHeader>{'January 2016: More Workiva'}</StepHeader>
                    <StepCopy>
                        {`Apparently I did something right, because I was offerred and accepted a full-time offer with Workiva, as well as the opportunity to continue my internship until graduation. Nice!`}
                    </StepCopy>
                </StepLeft>
            </TimelineStep>
            <TimelineStep>
                <StepRight>
                    <StepHeader>{'August 2015: Started at Workiva 🔥'}</StepHeader>
                    <StepCopy>{`This internship meant a lot to me. Being able to work part-time here while still getting my school work done was huge. Their cafeteria was AMAZING.`}</StepCopy>
                </StepRight>
            </TimelineStep>
            <TimelineStep>
                <StepLeft>
                    <StepHeader>{'August 2015: Started Tutoring Programming'}</StepHeader>
                    <StepCopy>
                        {`Why not make a little extra money and sharpen my skills? I taught Python to ISU Freshman.`}
                    </StepCopy>
                </StepLeft>
            </TimelineStep>
            <TimelineStep>
                <StepRight>
                    <StepHeader>{'May 2015: Second Internship'}</StepHeader>
                    <StepCopy>{`Spent the summer in (beautiful?) Cedar Rapids, IA working at Rockwell Collins.`}</StepCopy>
                </StepRight>
            </TimelineStep>
            <TimelineStep>
                <StepLeft>
                    <StepHeader>{'August 2014: Took a Semester Off'}</StepHeader>
                    <StepCopy>{`I opted to stay at my internship full-time throughout the fall.`}</StepCopy>
                </StepLeft>
            </TimelineStep>
            <TimelineStep>
                <StepRight>
                    <StepHeader>{'May 2014: Landed First Internship'}</StepHeader>
                    <StepCopy>{`Finally felt like I understood this whole programming thing. My interviewing skills weren't great, but I managed to snag my first internship.`}</StepCopy>
                </StepRight>
            </TimelineStep>
            <TimelineStep>
                <StepLeft>
                    <StepHeader>{'December 2011: Wanted To Dropout'}</StepHeader>
                    <StepCopy>
                        {`I didn't pick up programming right away. It didn't help we were learning C 🙄. I'm glad I stuck with it, though.`}
                    </StepCopy>
                </StepLeft>
            </TimelineStep>
            <TimelineStep>
                <StepRight>
                    <StepHeader>{'September 2011: Learned How To Program'}</StepHeader>
                    <StepCopy>{`CS 101. Our professor asked a simple question - "Who here has prior programming experience?". About 80% of the class raised their hands. I knew it was going to be an uphill battle from here.`}</StepCopy>
                </StepRight>
            </TimelineStep>
            <TimelineStep>
                <StepLeft>
                    <StepHeader>{'August 2011: Started at ISU 🌪❤️'}</StepHeader>
                    <StepCopy>
                        {`I've been a die-hard Cyclone fan my whole life. It was pretty much a no-brainer that I was going to ISU, especially since they have a great Engineering program.`}
                    </StepCopy>
                </StepLeft>
            </TimelineStep>
            <TimelineStep>
                <StepRight>
                    <StepHeader>{'May 2011: Graduated High School'}</StepHeader>
                    <StepCopy>{`My hometown had about 1000 people, total. My graduating class with 36. High school was... interesting.`}</StepCopy>
                </StepRight>
            </TimelineStep>
            <TimelineStep>
                <StepLeft>
                    <StepHeader>{'1998: First Computer'}</StepHeader>
                    <StepCopy>{'I remember many nights playing Age of Empires, Lego Island, and Runescape.'}</StepCopy>
                </StepLeft>
            </TimelineStep>
            <TimelineStep>
                <StepRight>
                    <StepHeader>{'1997: Became a Pokémon Master'}</StepHeader>
                    <StepCopy>{`Every time we'd go to Target, I would beg my mom to get a pack of Pokémon cards. Sorry, mom.`}</StepCopy>
                </StepRight>
            </TimelineStep>
            <TimelineStep highlight>
                <StepLeft highlight>
                    <AccentHeader>{'1993: Born 👶🏼🍼'}</AccentHeader>
                </StepLeft>
            </TimelineStep>
        </List>
    </StyledTimeline>
);

export default Timeline;
