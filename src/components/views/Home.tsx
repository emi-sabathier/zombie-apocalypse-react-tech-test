// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ReactElement } from 'react';
import { UIContainer } from '../shared/UIContainer/UIContainer';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { UITeamMateCard } from '../shared/UITeamMateCard/UITeamMateCard';
import styled from 'styled-components';
import { useFetch } from '../../hooks/useFetch';
import { Spinner } from '../Spinner';

export function Home(): ReactElement {
    useDocumentTitle('Zombie Apocalypse - Accueil');
    const { dataList, isLoading } = useFetch('https://reqres.in/api/users?per_page=12');
    const { data } = dataList ?? [];
    console.log(data);
    return (
        <UIContainer>
            {isLoading ? (
                <Spinner />
            ) : (
                <CardsContainer>
                    {data.map(mate => (
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
