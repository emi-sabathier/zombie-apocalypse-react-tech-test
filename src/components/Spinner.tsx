import React, { ReactElement } from 'react';
import spinner from '../assets/images/spinner.svg';
import styled from 'styled-components';
import { dictionary } from '../assets/dictionary';
import { palette } from '../assets/styles/palette';

export function Spinner(): ReactElement {
    return (
        <SpinnerContainer>
            <LoadingText>{dictionary.spinner.text}</LoadingText>
            <p>
                <img src={spinner} alt="Loading spinner" />
            </p>
        </SpinnerContainer>
    );
}

const SpinnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
`;

const LoadingText = styled.p`
    color: ${palette.white};
`;
