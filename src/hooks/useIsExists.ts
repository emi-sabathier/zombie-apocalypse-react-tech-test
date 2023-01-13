// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

export function useIsExists(mate): boolean {
    const { state } = useContext(StoreContext);
    return state.matesList.some(m => m.id === mate.id);
}
