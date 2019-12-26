import React, {useRef, useState} from 'react';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';

import H3 from './elements/h3';

const Input = styled.input`
    background: ${(props) => props.theme.secondary};
    border-radius: 4px;
    border: 1px solid #cac8c8;
    color: ${(props) => props.theme.primary};
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

function Subscribe() {
    const inputEl = useRef(null);
    const [message, setMessage] = useState('');

    const subscribe = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email: inputEl.current.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        const {error} = await res.json();

        if (error) {
            setMessage(error);

            return;
        }

        inputEl.current.value = '';
        setMessage('Success! 🎉 You are now subscribed to the newsletter.');
    };

    return (
        <>
            <H3 as="h5">{'Want more? Be notified when I post new articles 🚀'}</H3>
            <form onSubmit={subscribe}>
                <Label htmlFor="email-input">{'Email Address'}</Label>
                <Input id="email-input" name="email" placeholder="tim@apple.com" ref={inputEl} type="email" />
                <FinePrint>
                    {message ? message : `I'll only send emails when new content is posted. No spam.`}
                </FinePrint>
                <Button type="submit">{'✨ Subscribe 💌'}</Button>
            </form>
        </>
    );
}

export default Subscribe;
