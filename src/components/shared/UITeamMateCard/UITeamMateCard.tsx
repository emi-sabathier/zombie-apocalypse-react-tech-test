import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { palette } from '../../../assets/styles/palette';
import addButton from '../../../assets/images/add.png';
import deleteButton from '../../../assets/images/delete.png';

const RADIUS = 5;
const PADDING = 10;
const MARGIN = 10;
const MARGIN_BOTTOM = 10;
const IMAGE_WIDTH = 30;

type MateType = {
    id: number;
    avatar: string;
    email: string;
    first_name: string;
    last_name: string;
};

type UITeamMateCardProps = {
    mate: MateType;
};

export function UITeamMateCard({ mate }: UITeamMateCardProps): ReactElement {
    return (
        <CardContainer>
            <P>{`${mate.first_name}`}</P>
            <Avatar src={`${mate.avatar}`} alt={`${mate.avatar}`} />
            <ButtonsContainer>
                <button type="button">
                    <ButtonImage src={addButton} alt="ajouter un.e team mate" />
                </button>
                <button type="button">
                    <ButtonImage src={deleteButton} alt="delete un.e team mate" />
                </button>
            </ButtonsContainer>
        </CardContainer>
    );
}

const Avatar = styled.img`
    border-radius: ${RADIUS}px;
    width: 100%;
`;

const ButtonImage = styled.img`
    width: ${IMAGE_WIDTH}px;
`;

const ButtonsContainer = styled.div`
    text-align: center;
`;

const P = styled.p`
    text-align: center;
    margin-bottom: ${MARGIN_BOTTOM}px;
`;

const CardContainer = styled.section`
    padding: ${PADDING}px;
    border-radius: ${RADIUS}px;
    background-color: ${palette.white};
    margin: ${MARGIN}px;
    width: 80%;
`;
