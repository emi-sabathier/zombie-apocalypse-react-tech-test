// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React, { useContext } from 'react';
import addButton from '../../../assets/images/add.png';
import deleteButton from '../../../assets/images/delete.png';
import styled from 'styled-components';
import { StoreContext } from '../../../context/StoreContext';
import { Mate } from '../../../Model/MateModel';

const IMAGE_WIDTH = 30;

type UIAddDeleteMateProps = {
    mate: Mate;
};

export function UIAddDeleteMate({ mate }: UIAddDeleteMateProps) {
    const { dispatch } = useContext(StoreContext);

    function addMate() {
        dispatch({
            type: 'ADD_MATE',
            payload: mate,
        });
    }

    function deleteMate() {
        dispatch({
            type: 'DELETE_MATE',
            payload: mate.id,
        });
    }

    return (
        <>
            <button type="button" onClick={() => addMate()}>
                <ButtonImage src={addButton} alt="ajouter un.e team mate" />
            </button>
            <button type="button" onClick={() => deleteMate()}>
                <ButtonImage src={deleteButton} alt="delete un.e team mate" />
            </button>
        </>
    );
}

const ButtonImage = styled.img`
    width: ${IMAGE_WIDTH}px;
`;
