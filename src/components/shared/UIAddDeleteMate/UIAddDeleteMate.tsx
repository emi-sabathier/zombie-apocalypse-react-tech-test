// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React, { ReactElement, useContext } from 'react';
import addButton from '../../../assets/images/add.png';
import deleteButton from '../../../assets/images/delete.png';
import styled from 'styled-components';
import { StoreContext } from '../../../context/StoreContext';
import { Mate } from '../../../Model/MateModel';
import { useIsExists } from '../../../hooks/useIsExists';

const IMAGE_WIDTH = 30;

type UIAddDeleteMateProps = {
    mate: Mate;
};

export function UIAddDeleteMate({ mate }: UIAddDeleteMateProps) {
    const { dispatch } = useContext(StoreContext);
    const isMateExists = useIsExists(mate);

    function addMate(): void {
        dispatch({
            type: 'ADD_MATE',
            payload: mate,
        });
    }

    function deleteMate(): void {
        dispatch({
            type: 'DELETE_MATE',
            payload: mate.id,
        });
    }

    function createButton(method, icon): ReactElement {
        const iconPath = icon === 'deleteButton' ? deleteButton : addButton;
        return (
            <button type="button" onClick={() => method()}>
                <ButtonImage src={iconPath} alt="delete un.e team mate" />
            </button>
        );
    }

    return <>{isMateExists ? createButton(deleteMate, 'deleteButton') : createButton(addMate, 'addButton')}</>;
}

const ButtonImage = styled.img`
    width: ${IMAGE_WIDTH}px;
`;
