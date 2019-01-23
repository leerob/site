import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 110px);
    grid-template-rows: auto-fill;
    grid-gap: 16px;
    width: 100%;
    margin-top: 24px;

    > a {
        min-width: 110px;
        height: 110px;
        width: 110px;
    }

    @media (max-width: 752px) {
        display: flex;
        overflow-x: scroll;
        width: calc(100% + 32px);
        margin-left: -16px;
        padding-top: 4px;
        padding-bottom: 4px;
        position: relative;
        -webkit-overflow-scrolling: touch;

        ::-webkit-scrollbar {
            display: none;
        }

        > a {
            margin-left: 16px;
        }

        > a:last-of-type {
            margin-right: 16px;
        }
    }
`;

export const Spacer = styled.div`
    display: none;
    height: 110px;
    position: relative;
    min-width: 1px;

    @media (max-width: 752px) {
        display: block;
    }
`;

export const Artwork = styled.img`
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
    transition: 0.2s ease-out;
    border-radius: 8px;
    overflow: hidden;
    width: 100%;
    height: 100%;

    :hover {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        transition: 0.2s ease-in;
        transform: scale(1.05);
    }

    :active {
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.09);
        transition: 0.2s ease-in-out;
    }
`;
