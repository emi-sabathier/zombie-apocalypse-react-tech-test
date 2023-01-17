import React, { ReactElement, useContext } from 'react';
import addButton from '../../../assets/images/add.png';
import deleteButton from '../../../assets/images/delete.png';
import styled from 'styled-components';
import { StoreContext } from '../../../context/StoreContext';
import { Mate } from '../../../Model/MateModel';
import { useIsMateExistsInStore } from '../../../hooks/useIsMateExistsInStore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UIToast } from '../UIToast/UIToast';

const IMAGE_WIDTH = 30;

type UIAddDeleteMateProps = {
    mate: Mate;
};

export function UIAddDeleteMate({ mate }: UIAddDeleteMateProps) {
    const { state, dispatch } = useContext(StoreContext);
    const isMateExists = useIsMateExistsInStore(mate.id);

    function ErrorMessage() {
        return <p>Vous ne pouvez ajouter que 3 co-équipier(e)s</p>;
    }

    function addMate(): void {
        if (state.matesList.length < 3) {
            dispatch({
                type: 'ADD_MATE',
                payload: mate,
            });
        } else {
            toast(<ErrorMessage />);
        }
    }

    function deleteMate(): void {
        dispatch({
            type: 'DELETE_MATE',
            payload: mate,
        });
    }

    function createButton(method: () => void, icon: string): ReactElement {
        const iconPath = icon === 'deleteButton' ? deleteButton : addButton;
        return (
            <button type="button" onClick={() => method()}>
                <ButtonImage src={iconPath} alt="delete un.e team mate" />
            </button>
        );
    }

    return (
        <>
            {isMateExists ? createButton(deleteMate, 'deleteButton') : createButton(addMate, 'addButton')}
            <UIToast />
        </>
    );
}

const ButtonImage = styled.img`
    width: ${IMAGE_WIDTH}px;
`;
