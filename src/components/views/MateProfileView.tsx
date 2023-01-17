import React from 'react';
import styled from 'styled-components';
import { UIContainer } from '../shared/UIContainer/UIContainer';
import { palette } from '../../assets/styles/palette';
import { fontSizes } from '../../assets/styles/fontSizes';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Spinner } from '../Spinner';
import { ResponseSingleMateModel } from '../../Model/ResponseMatesListModel';
import { useIsMateExistsInStore } from '../../hooks/useIsMateExistsInStore';
import { API_URL_SINGLE_MATE } from '../../constants/constants';
import { UIAddDeleteMate } from '../shared/UIAddDeleteMate/UIAddDeleteMate';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { IsMateSelectedProps } from '../UIMateCard';
import { dictionary } from '../../assets/dictionary';

const RADIUS = 5;
const WIDTH = '50%';
const PADDING = 10;

export function MateProfileView() {
    const { id } = useParams();
    const { error, response, isLoading } = useFetch<ResponseSingleMateModel>(`${API_URL_SINGLE_MATE}${id}`);
    const isMateExists = useIsMateExistsInStore(Number(id));
    const res = response?.data ?? {
        id: 0,
        avatar: '',
        email: '',
        first_name: '',
        last_name: '',
    };

    useDocumentTitle(`Profil de ${response?.data?.first_name} ${response?.data?.last_name}`);

    return (
        <UIContainer>
            {error && (
                <BackContainer>
                    <p>{dictionary.error.text}</p>
                </BackContainer>
            )}
            {isLoading && !error && <Spinner />}
            {!isLoading && (
                <ProfileContainer isMateSelected={isMateExists}>
                    <Avatar
                        src={`${response?.data?.avatar}`}
                        alt={`${response?.data?.first_name} ${response?.data?.last_name} avatar`}
                    />
                    <DetailsContainer>
                        <NameTitle>
                            {response?.data?.first_name} {response?.data?.last_name}
                        </NameTitle>
                        <a href={`mailto:${response?.data?.email}`}>{response?.data?.email}</a>
                        <ButtonsContainer>
                            <UIAddDeleteMate mate={res} />
                        </ButtonsContainer>
                    </DetailsContainer>
                </ProfileContainer>
            )}
        </UIContainer>
    );
}

const BackContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    color: ${palette.white};
    font-size: ${fontSizes.xlarge};
    font-weight: 700;
    flex-direction: column;
`;

const ProfileContainer = styled.section<IsMateSelectedProps>`
    border: ${props => (props.isMateSelected ? '5px solid red' : '5px solid white')};
    width: ${WIDTH};
    background-color: ${palette.white};
    border-radius: ${RADIUS}px;
    padding: ${PADDING}px;
    display: flex;
    @media (max-width: 425px) {
        align-items: center;
        flex: 1;
        flex-direction: column;
    }
`;

const ButtonsContainer = styled.div`
    flex: 1;
    align-items: flex-end;
    display: flex;
`;
const DetailsContainer = styled.div`
    padding: 0 ${PADDING}px;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
`;

const NameTitle = styled.h2`
    font-size: ${fontSizes.xlarge};
    font-weight: 700;
`;
const Avatar = styled.img`
    border-radius: ${RADIUS}px;
    width: 50%;
`;
