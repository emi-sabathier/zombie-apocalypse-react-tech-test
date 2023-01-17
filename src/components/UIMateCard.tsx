import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { palette } from '../assets/styles/palette';
import { Mate } from '../Model/MateModel';
import { useNavigate } from 'react-router-dom';
import { UIAddDeleteMate } from './shared/UIAddDeleteMate/UIAddDeleteMate';
import { useIsMateExistsInStore } from '../hooks/useIsMateExistsInStore';

const RADIUS = 5;
const PADDING = 10;
const MARGIN = 10;
const MARGIN_BOTTOM = 10;

type UITeamMateCardProps = {
    mate: Mate;
};

export type SectionProps = {
    isMateSelected: boolean;
};

export function UIMateCard({ mate }: UITeamMateCardProps): ReactElement {
    const navigate = useNavigate();
    const isMateExists = useIsMateExistsInStore(mate.id);

    return (
        <CardContainer isMateSelected={isMateExists}>
            <P>{`${mate.first_name}`}</P>
            <AvatarButton type="button" onClick={() => navigate(`/mates/${mate.id}`)}>
                <Avatar src={`${mate.avatar}`} alt={`${mate.avatar}`} />
            </AvatarButton>
            <ButtonsContainer>
                <UIAddDeleteMate mate={mate} />
            </ButtonsContainer>
        </CardContainer>
    );
}

const CardContainer = styled.section<SectionProps>`
    border: ${props => (props.isMateSelected ? '5px solid red' : '5px solid white')};
    padding: ${PADDING}px;
    border-radius: ${RADIUS}px;
    background-color: ${palette.white};
    margin: ${MARGIN}px;
    width: 80%;
`;

const Avatar = styled.img`
    border-radius: ${RADIUS}px;
    width: 100%;
`;

const AvatarButton = styled.button`
    width: 100%;
`;

const ButtonsContainer = styled.div`
    text-align: center;
`;

const P = styled.p`
    text-align: center;
    margin-bottom: ${MARGIN_BOTTOM}px;
`;
