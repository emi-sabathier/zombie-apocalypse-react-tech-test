import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

type UIContainerProps = {
    children: ReactNode;
};

const MARGIN = 20;

export function UIContainer({ children }: UIContainerProps): ReactElement {
    return <Container>{children}</Container>;
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: ${MARGIN}px;
`;
