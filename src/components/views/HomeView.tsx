// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React, { ReactElement } from 'react';
import { UIContainer } from '../shared/UIContainer/UIContainer';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { UIMateCard } from '../UIMateCard';
import styled from 'styled-components';
import { useFetch } from '../../hooks/useFetch';
import { Spinner } from '../Spinner';
import { Mate } from '../../Model/MateModel';
import { ApiResponseModel } from '../../Model/ApiResponseModel';
import { API_URL } from '../../constants/constants';

export function HomeView(): ReactElement {
    useDocumentTitle('Zombie Apocalypse - Accueil');
    const { dataList, isLoading } = useFetch<ApiResponseModel>(API_URL);

    return (
        <UIContainer>
            {isLoading ? (
                <Spinner />
            ) : (
                <CardsContainer>
                    {dataList?.data.map((mate: Mate) => (
                        <UIMateCard key={mate.id} mate={mate} />
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
