import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { UIContainer } from '../shared/UIContainer/UIContainer';
import { palette } from '../../assets/styles/palette';
import { fontSizes } from '../../assets/styles/fontSizes';
import { UIAddDeleteMate } from '../shared/UIAddDeleteMate/UIAddDeleteMate';

const RADIUS = 5;
const WIDTH = '50%';
const PADDING = 10;

export function MateProfile() {
    const { state } = useLocation();
    useDocumentTitle(`Profil de ${state.first_name} ${state.last_name}`);

    return (
        <UIContainer>
            <ProfileContainer>
                <Avatar src={`${state.avatar}`} alt={`${state.first_name} ${state.last_name} avatar`} />
                <DetailsContainer>
                    <NameTitle>
                        {state.first_name} {state.last_name}
                    </NameTitle>
                    <a href={`mailto:${state.email}`}>{state.email}</a>
                    <ButtonsContainer>
                        <UIAddDeleteMate />
                    </ButtonsContainer>
                </DetailsContainer>
            </ProfileContainer>
        </UIContainer>
    );
}

const ButtonsContainer = styled.div`
    flex: 1;
    align-items: flex-end;
    display: flex;
`;
const DetailsContainer = styled.div`
    padding: 0 ${PADDING}px;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
`;

const NameTitle = styled.h2`
    font-size: ${fontSizes.xlarge};
    font-weight: 700;
`;

const ProfileContainer = styled.section`
    width: ${WIDTH};
    background-color: ${palette.white};
    border-radius: ${RADIUS}px;
    padding: ${PADDING}px;
    display: flex;
`;

const Avatar = styled.img`
    border-radius: ${RADIUS}px;
    width: 50%;
`;
