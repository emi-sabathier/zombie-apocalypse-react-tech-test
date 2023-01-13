// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React, { ReactElement, useContext } from 'react';
import { UIContainer } from '../shared/UIContainer/UIContainer';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { UITeamMateCard } from '../UITeamMateCard';
import styled from 'styled-components';
import { useFetch } from '../../hooks/useFetch';
import { Spinner } from '../Spinner';
import { Mate } from '../../Model/MateModel';
import { ApiResponseModel } from '../../Model/ApiResponseModel';
import { StoreContext } from '../../context/StoreContext';

export function Home(): ReactElement {
    const { state } = useContext(StoreContext);
    console.log('store', state.matesList);
    useDocumentTitle('Zombie Apocalypse - Accueil');
    const { dataList, isLoading } = useFetch<ApiResponseModel>('https://reqres.in/api/users?per_page=12');

    return (
        <UIContainer>
            {isLoading ? (
                <Spinner />
            ) : (
                <CardsContainer>
                    {dataList?.data.map((mate: Mate) => (
                        <UITeamMateCard key={mate.id} mate={mate} />
                    ))}
                </CardsContainer>
            )}
        </UIContainer>
    );
}

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 25%);
    justify-items: center;
`;
