import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { palette } from '../../../assets/styles/palette';
import { fontSizes } from '../../../assets/styles/fontSizes';
import { dictionary } from '../../../assets/dictionary';

const PADDING_VERTICAL = 20;
const PADDING_TOP = 10;

export function UIHeader(): ReactElement {
    return (
        <>
            <Header>
                <Title>{dictionary.header.title}</Title>
                <SubTitle>{dictionary.header.subtitle}2</SubTitle>
            </Header>
        </>
    );
}

const Title = styled.h1`
    text-align: center;
    color: ${palette.white};
    font-size: ${fontSizes.headerTitle};
    font-weight: 700;
    text-transform: uppercase;
`;

const SubTitle = styled.h2`
    color: ${palette.white};
    font-size: ${fontSizes.regular};
    text-align: center;
    padding-top: ${PADDING_TOP}px;
`;

const Header = styled.header`
    padding: ${PADDING_VERTICAL}px 0;
`;
