import React, { ReactElement, useContext } from 'react';
import styled from 'styled-components';
import { palette } from '../../assets/styles/palette';
import { fontSizes } from '../../assets/styles/fontSizes';
import { dictionary } from '../../assets/dictionary';
import arrowBack from '../../assets/images/arrow-left.png';
import { useMatch, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const PADDING_VERTICAL = 20;
const PADDING_TOP = 10;

export function UIHeader(): ReactElement {
    const navigate = useNavigate();
    const match = useMatch('/');
    const { state } = useContext(StoreContext);
    const matesNumber = state.matesList.length;

    function IsBackButton() {
        if (match === null) {
            return (
                <ArrowButton type="button" onClick={() => navigate(-1)}>
                    <ArrowIcon src={arrowBack} alt="flèche retour à l'accueil" />
                </ArrowButton>
            );
        } else {
            return <></>;
        }
    }

    return (
        <>
            <Header>
                <IsBackButton />
                <LogoAndTitleContainer>
                    <Title>{dictionary.header.title}</Title>
                    <SubTitle>
                        {dictionary.header.subtitle}: {matesNumber}
                    </SubTitle>
                </LogoAndTitleContainer>
            </Header>
        </>
    );
}

const Header = styled.header`
    padding: ${PADDING_VERTICAL}px 0;
    display: flex;
`;

const LogoAndTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
`;

const ArrowButton = styled.button``;

const ArrowIcon = styled.img`
    align-self: flex-start;
`;

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
