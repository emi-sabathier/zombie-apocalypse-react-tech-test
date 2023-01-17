import React, { createContext, Dispatch, ReactElement, ReactNode, useReducer } from 'react';
import { ActionType, initialState, MatesListState, storeReducer } from '../store/storeReducer';

interface StoreContextType {
    state: MatesListState;
    dispatch: Dispatch<ActionType>;
}

export const StoreContext = createContext<StoreContextType>({} as StoreContextType);

export function StoreProvider({ children }: { children: ReactNode }): ReactElement {
    const [state, dispatch] = useReducer(storeReducer, initialState);
    return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
}
