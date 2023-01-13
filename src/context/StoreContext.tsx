// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { createContext, ReactElement, ReactNode, useReducer } from 'react';
import { initialState, storeReducer } from '../store/storeReducer';

export const StoreContext = createContext();

export function StoreProvider({ children }: { children: ReactNode }): ReactElement {
    const [state, dispatch] = useReducer(storeReducer, initialState);
    return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
}
