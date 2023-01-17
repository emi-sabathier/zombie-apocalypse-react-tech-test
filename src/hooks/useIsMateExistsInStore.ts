import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

export function useIsMateExistsInStore(id: number): boolean {
    const { state } = useContext(StoreContext);
    return state.matesList.some(m => m.id === id);
}
