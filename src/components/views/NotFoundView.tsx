import React from 'react';
import styled from 'styled-components';
import { fontSizes } from '../../assets/styles/fontSizes';
import { palette } from '../../assets/styles/palette';

export function NotFoundView() {
    return (
        <Container>
            <P>La route n&apos;existe pas</P>
        </Container>
    );
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    color: ${palette.white};
    font-size: ${fontSizes.xlarge};
    font-weight: 700;
`;

export const P = styled.p`
    font-size: ${fontSizes.xlarge};
`;
