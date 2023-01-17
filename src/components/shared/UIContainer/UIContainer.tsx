import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

type UIContainerProps = {
    children: ReactNode;
};

const MARGIN = 20;
const MARGIN_MOBILE = 10;

export function UIContainer({ children }: UIContainerProps): ReactElement {
    return <Container>{children}</Container>;
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: ${MARGIN}px;
    @media (max-width: 425px) {
        margin: ${MARGIN_MOBILE}px;
    }
`;
