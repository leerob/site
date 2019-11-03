import React from 'react';
import styled from 'styled-components';

import H3 from './elements/h3';

const Input = styled.input`
    border-radius: 4px;
    border: 1px solid #cac8c8;
    font-family: 'Fira Sans';
    font-size: 1rem;
    font-weight: 400;
    height: 40px;
    padding: 10px;
    width: 100%;
`;

const Label = styled.label`
    color: #868686;
    font-family: 'Fira Sans';
    font-size: 0.8rem;
    font-weight: 400;
    text-transform: uppercase;
`;

const Button = styled.button`
    background: linear-gradient(120deg, #2ec7c0 0%, #1a86e4 100%);
    border: none;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    color: #fff;
    cursor: pointer;
    font-family: 'Fira Sans';
    font-size: 1rem;
    font-weight: 400;
    height: 40px;
    letter-spacing: 0.025em;
    line-height: 40px;
    padding: 0 14px;
    transition: all 0.15s ease;

    :hover {
        transform: translateY(-1px);
        box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    }

    @media (max-width: 400px) {
        width: 100%;
    }
`;

const FinePrint = styled.p`
    font-size: 0.9rem;
`;

const onSubmit = () => {
    window.open('https://tinyletter.com/leerob', 'popupwindow', 'scrollbars=yes,width=800,height=680');

    return true;
};

const Subscribe = () => (
    <>
        <H3 as="h5">{'Want more? Be notified when I post new articles 🚀'}</H3>
        <form action="https://tinyletter.com/leerob" method="post" onSubmit={onSubmit} target="popupwindow">
            <Label htmlFor="email-input">{'Email Address'}</Label>
            <Input id="email-input" name="email" placeholder="you@awesome.com" type="text" />
            <FinePrint>{`I'll only send emails when new content is posted. No spam.`}</FinePrint>
            <Button type="submit">{'✨ Subscribe 💌'}</Button>
        </form>
    </>
);

export default Subscribe;
