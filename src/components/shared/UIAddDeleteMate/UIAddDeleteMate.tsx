import React from 'react';
import addButton from '../../../assets/images/add.png';
import deleteButton from '../../../assets/images/delete.png';
import styled from 'styled-components';

const IMAGE_WIDTH = 30;

export function UIAddDeleteMate() {
    return (
        <>
            <button type="button">
                <ButtonImage src={addButton} alt="ajouter un.e team mate" />
            </button>
            <button type="button">
                <ButtonImage src={deleteButton} alt="delete un.e team mate" />
            </button>
        </>
    );
}

const ButtonImage = styled.img`
    width: ${IMAGE_WIDTH}px;
`;
