import React, { ReactElement } from 'react';
import { UIContainer } from '../shared/UIContainer/UIContainer';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { UIMateCard } from '../UIMateCard';
import styled from 'styled-components';
import { useFetch } from '../../hooks/useFetch';
import { Spinner } from '../Spinner';
import { Mate } from '../../Model/MateModel';
import { ResponseMatesListModel } from '../../Model/ResponseMatesListModel';
import { API_URL_LIST } from '../../constants/constants';

export function HomeView(): ReactElement {
    useDocumentTitle('Zombie Apocalypse - Accueil');
    const { error, response, isLoading } = useFetch<ResponseMatesListModel>(API_URL_LIST);
    return (
        <UIContainer>
            {isLoading && <Spinner />}
            {error && <p>Erreur</p>}
            <CardsContainer>
                {response?.data?.map((mate: Mate) => (
                    <UIMateCard key={mate.id} mate={mate} />
                ))}
            </CardsContainer>
        </UIContainer>
    );
}

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 25%);
    justify-items: center;
`;
